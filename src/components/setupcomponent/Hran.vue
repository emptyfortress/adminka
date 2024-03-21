<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'
import { useHran } from '@/stores/hran'
import { useTabs } from '@/stores/tabs'

interface Hran {
	id: number
	name: string
	type: string
	state: string
	size: number
	main: boolean
	arch: boolean
	temp: boolean
}

const list1: Hran[] = reactive([
	{
		id: 1,
		name: 'Storage 1',
		type: 'Хранилище в базе',
		state: 'Online',
		size: 100,
		main: true,
		arch: true,
		temp: false,
	},
	{
		id: 2,
		name: 'Storage 2',
		type: 'Хранилище на диске',
		state: 'Auto',
		size: 130,
		main: false,
		arch: false,
		temp: true,
	},
	{
		id: 3,
		name: 'Storage 3',
		type: 'Хранилище на диске',
		state: 'Auto',
		size: 10,
		main: false,
		arch: false,
		temp: true,
	},
])

const hran = useHran()
const tabs = useTabs()
const checkDub = () => {
	hran.unique()
	tabs.setTabMod(2)
}

const showAdd = ref(false)
const remove1 = (n: number) => {
	list1.splice(n, 1)
	tabs.setTabMod(2)
}
const close = () => {
	showAdd.value = false
}

const clearAdd = () => {
	name.value = null
	type.value = null
	state.value = null
	currentItemIndex.value = null
	size.value = 0
	main.value = false
	arch.value = false
	temp.value = false
	showAdd.value = true
}

const currentItemIndex = ref()

const edit = (index: number) => {
	name.value = list1[index].name
	type.value = list1[index].type
	state.value = list1[index].state
	size.value = list1[index].size
	main.value = list1[index].main
	arch.value = list1[index].arch
	temp.value = list1[index].temp
	currentItemIndex.value = index
	showAdd.value = true
}

const date = new Date()

const add = () => {
	let tmp = {} as Hran
	tmp.id = +date
	tmp.name = name.value
	tmp.type = type.value
	tmp.state = state.value
	tmp.size = size.value
	tmp.main = main.value
	tmp.arch = arch.value
	tmp.temp = temp.value
	if (currentItemIndex.value !== null) {
		list1[currentItemIndex.value] = tmp
	} else {
		list1.push(tmp)
	}
	showAdd.value = false
	currentItemIndex.value = null
	tabs.setTabMod(2)
}

const name = ref()
const type = ref()
const state = ref()
const size = ref()
const main = ref(false)
const arch = ref(false)
const temp = ref(false)
const options = [
	'Хранилище на диске',
	'Хранилище во внешней базе MS SQL Server',
	'FileStream хранилище во внешней базе данных MS SQL Server',
	'FileStream хранилище в базе данных Docsvision',
	'Добавить из сборки...',
]
const options1 = ['Online', 'Auto', 'Disabled', 'Read and delete', 'Reserved']
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Хранилища ({{ list1.length }})
	q-btn(flat round icon="mdi-plus-circle" @click="clearAdd")
.hran
	.empt(v-if="list1.length === 0") Добавьте хранилища
	component(:is="draggable" :list="list1"
		item-key="id"
		:group="{ name: 'group', pull: 'clone', put: false }"
		ghost-class='ghost'
		@end="checkDub"
		).list-group
		template(#item="{ element, index }")
			.tabel
				div
					q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}

				div
					q-btn(flat round dense icon="mdi-information-outline" size="sm" ).q-mr-sm
						q-menu
							q-card.hrinfo
								.label Название:
								div {{ element.name}}
								.label Тип:
								div {{ element.type}}
								.label Состояние:
								div {{ element.state}}
								.label Размер:
								div {{ element.size}} Gb
								.label Раздел:
								div
									span(v-if="element.main") основной, 
									span(v-if="element.arch") архивный, 
									span(v-if="element.temp") временный

					q-btn(flat round dense icon="mdi-pencil" size="sm" @click="edit(index)" ).q-mr-sm
					q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove1(index)").pink
									q-item-section Удалить

q-dialog(:model-value="showAdd")
	q-card(padding)
		q-form(@submit="add")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Настройки хранилища
				q-space
				q-btn(icon="mdi-close" flat round dense @click="close")

			q-card-section
				.edittable
					q-input(v-model="name" autofocus label="Название" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
					q-select(v-model="type" label="Тип" :options="options" lasy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']")
					q-select(v-model="state" label="Состояние" :options="options1" lasy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']")
					q-input(v-model="size" label="Макс.размер, Гб" type="number" style="width:150px; margin: 0 auto;" lasy-rules :rules="[val => val > 0 || 'Укажите размер']")
					br
					q-checkbox(v-model="main" label="Основной раздел")
					q-checkbox(v-model="arch" label="Архивный раздел")
					q-checkbox(v-model="temp" label="Временный раздел")
			q-card-section
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="close") 
					q-btn(unelevated color="primary" label="Сохранить" type="submit") 
</template>

<style scoped lang="scss">
.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.hran {
	margin-top: 0;
	margin-bottom: 1rem;
	position: relative;
	padding-top: 1.3rem;
}

.hrinfo {
	padding: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: flex-end;
	column-gap: 1rem;
	row-gap: 3px;

	.label {
		color: grey;
		justify-self: end;
	}
}

.tabel {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 90px;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.2rem;
	// background: var(--bg-light);
}

.edittable {
	min-width: 400px;
	.fl {
		display: flex;
	}
}
.ghost {
	background: var(--bg-selected);
}
</style>
