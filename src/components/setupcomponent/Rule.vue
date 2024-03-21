<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useHran } from '@/stores/hran'
import { useTabs } from '@/stores/tabs'

const hran = useHran()
const tabs = useTabs()

const showAdd = ref(false)

const name = ref()
const type = ref('Все файлы')
const options = [
	'Все файлы',
	'По расширению файла',
	'Размер больше, чем',
	'Размер меньше, чем',
	'Файл справочника',
	'Добавить из сборки',
]

const dragging = ref(false)
const ext = ref()
const size1 = ref()
const size2 = ref()
const sborka = ref()
const date = new Date()
const currentItemIndex = ref()

const add = () => {
	let tmp = {} as Rule
	tmp.id = +date
	tmp.name = name.value
	tmp.type = type.value
	tmp.ext = ext.value
	tmp.size1 = size1.value
	tmp.size2 = size2.value
	tmp.expanded = true
	tmp.gr = []
	if (currentItemIndex.value === null) {
		hran.addRule(tmp)
	} else {
		hran.rules[currentItemIndex.value] = tmp
	}
	tabs.setTabMod(2)
	showAdd.value = false
	currentItemIndex.value = null
	name.value = null
	type.value = 'Все файлы'
	ext.value = null
	size1.value = null
	size2.value = null
}

const removeRule = (index: number) => {
	hran.removeRule(index)
	tabs.setTabMod(2)
}

const clearGroup = (index: number, ind: number) => {
	hran.clearGroup(index, ind)
}

const showDialog = () => {
	name.value = null
	currentItemIndex.value = null
	ext.value = null
	size1.value = null
	size2.value = null
	type.value = 'Все файлы'
	showAdd.value = true
}

const edit = (index: number) => {
	name.value = hran.rules[index].name
	type.value = hran.rules[index].type
	ext.value = hran.rules[index].ext
	size1.value = hran.rules[index].size1
	size2.value = hran.rules[index].size2
	currentItemIndex.value = index
	showAdd.value = true
	tabs.setTabMod(2)
}

const set = () => {
	tabs.setTabMod(2)
}
</script>

<template lang="pug">
.row.items-baseline.justify-between
	.zg Правила помещения в хранилище ({{ hran.rules.length }})
	div
		q-btn(flat round icon='mdi-information')
			q-menu
				ol
					li Правила применяются последовательно, сверху вниз.
					li Если правило не содержит групп хранилищ, оно просто пропускается.
		q-btn(flat round icon='mdi-plus-circle' @click="showDialog")
.empt(v-if="hran.rules.length === 0") Создайте первое правило

component(v-else :is="draggable" :list="hran.rules"
	item-key="id"
	group="rule"
	@end="set"
	ghost-class='ghost'
	).list-group

	template(#item="{ element, index }")
		q-expansion-item(v-model="element.expanded" switch-toggle-side expand-icon-toggle).gro.exp
			template(#header)
				.line
					.title
						q-icon(name="mdi-gate-nor" size="sm").q-mr-sm
						span {{ element.name }}

					.bt
						q-btn(flat round icon="mdi-pencil" @click.stop="edit(index)" size="sm").q-mr-sm
						q-btn(flat round icon="mdi-trash-can-outline" @click.stop="" size="sm")
							q-menu
								q-list
									q-item(clickable v-close-popup @click="removeRule(index)").pink
										q-item-section Удалить&nbsp;правило

					.des
						q-icon(name="mdi-information-outline" size="14px").q-mr-sm
						span.q-mr-xs {{element.type}}
						span.q-mr-xs {{element.ext}}
						span.q-mr-xs {{element.size1}}
						span.q-mr-xs {{element.size2}}
						span.q-mr-xs(v-if="element.size1 || element.size2") Gb

			q-separator

			component(:is="draggable" :list="element.gr" item-key="id" group="last" ghost-class="ghost" @start="dragging = true" @end="dragging = false").list-group
				template(#item="{ element: el, index: ind }")
					.row.justify-between.items-center
						.q-ml-sm
							q-icon(name="mdi-server" size="18px" style="vertical-align: top;")
							span.q-ml-sm {{ el.name }}
						q-btn(flat round dense icon="mdi-close" size="10px" )
							q-menu
								q-list
									q-item(clickable v-close-popup @click="clearGroup(index, ind)").pink
										q-item-section Очистить
				template(#header v-if="element.gr.length == 0")
					.empt Добавьте группу к правилу, перетащив ее сюда.

q-dialog(v-model="showAdd")
	q-card(style="min-width: 500px;")
		q-form(@submit="add")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Правило
				q-space
				q-btn(icon="mdi-close" flat round dense v-close-popup)

			q-card-section
				q-input(v-model='name' autofocus label='Название' lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
				.grid
					q-select(v-model='type' label='Тип' :options="options").full-width
					q-input(v-model="ext" placeholder="*.jpg, *.mp3, *.tiff" label="Расширение" v-if="type === 'По расширению файла'" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']").full-width
					q-input(v-model="size1" label="Размер, kB" v-if="type === 'Размер больше, чем'" type="number" lazy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']").full-width
					q-input(v-model="size2" label="Размер, kB" v-if="type === 'Размер меньше, чем'" type="number").full-width
					q-input(v-model="sborka" label="Сборка" v-if="type === 'Добавить из сборки'").full-width

			q-card-section
				q-card-actions(align="right")
					q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
					q-btn(unelevated color='primary' label='Сохранить' type="submit")
</template>

<style scoped lang="scss">
.grey {
	margin-top: 0;
	margin-bottom: 1rem;

	position: relative;
	padding-top: 1.3rem;
}

.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.grid {
	display: grid;
	grid-template-columns: 2fr 1fr;
	justify-items: baseline;
	align-items: stretch;
	gap: 1rem;
}

.tabel {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 100px;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.2rem;
}

.desc {
	font-size: 0.8rem;
}

.right {
	justify-self: end;
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
.gro {
	margin-bottom: 0.5rem;
}
.exp {
	background: var(--bg-grey);
}
:deep(.q-item__section--avatar) {
	min-width: 0;
}
.line {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto;
	justify-items: start;
	align-items: center;
	column-gap: 0.5rem;
	row-gap: 3px;
	.title {
		text-transform: uppercase;
		color: $secondary;
		font-weight: 600;
	}
	.bt {
		grid-row: 1/3;
		grid-column: 2/3;
	}
	.des {
		font-size: 0.8rem;
	}
}
.list-group > div {
	background: var(--bg-light);
}
</style>
