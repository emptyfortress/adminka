<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Draggable, BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useHran } from '@/stores/hran'

const hran = useHran()

// interface Hran {
// 	id: number
// 	text: string
// 	type: string
// 	state: string
// 	size: number
// 	main: boolean
// 	arch: boolean
// 	temp: boolean
// }

const treeData = reactive([
	{
		id: 0,
		text: 'Хранилища',
		drag: false,
		drop: false,
		children: [
			{
				id: 1,
				text: 'Storage 1',
				type: 'storage',
				typ: 'Хранилище в базе',
				state: 'Online',
				size: 100,
				main: true,
				arch: true,
				temp: false,
				drag: true,
				drop: false,
			},
			{
				id: 2,
				text: 'Storage 2',
				type: 'storage',
				typ: 'Хранилище на диске',
				state: 'Auto',
				size: 130,
				main: false,
				arch: false,
				temp: true,
				drag: true,
				drop: false,
			},
			{
				id: 3,
				text: 'Storage 3',
				type: 'storage',
				typ: 'Хранилище на диске',
				state: 'Auto',
				size: 10,
				main: false,
				arch: false,
				temp: true,
				drag: true,
				drop: false,
			},
		],
	},
])

const toggle = (stat: any) => {
	stat.open = !stat.open
}
const remove = (e: any) => {
	tree.value.remove(e)
}

const showAdd = ref(false)

const toggleAdd = () => {
	showAdd.value = !showAdd.value
	name.value = null
	typ.value = null
	state.value = null
	size.value = null
	main.value = false
	arch.value = false
	temp.value = false
	showAdd.value = true
}

//TODO: доделать редактирование хранилища без создания нового

const edit = (node: any) => {
	name.value = node.text
	typ.value = node.typ
	state.value = node.state
	size.value = node.size
	main.value = node.main
	arch.value = node.arch
	temp.value = node.temp
	showAdd.value = true
}

const date = new Date()

const add = () => {
	let tmp = {} as Hran
	tmp.id = +date
	tmp.text = name.value
	tmp.type = 'storage'
	tmp.typ = typ.value
	tmp.state = state.value
	tmp.size = size.value
	tmp.main = main.value
	tmp.arch = arch.value
	tmp.temp = temp.value
	tmp.drag = true
	tmp.drop = false
	tree.value.add(tmp, tree.value.rootChildren[0])
	showAdd.value = false
}

const name = ref()
const typ = ref()
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

const tree = ref()

const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}
const isDrop = (e: any) => {
	if (e.data.drop) return true
	else return false
}
const dragstart = (node: Hran) => {
	let tmp = { ...node }
	tmp.id = +date
	hran.setCurrent(tmp)
}
</script>

<template lang="pug">
div
	Draggable(ref="tree"
		treeLine
		v-model="treeData"
		:eachDroppable="isDrop"
		:eachDraggable="isDrag"
		:watermark="false")

		template(#default="{ node, stat }")
			.zero(v-if="node.id == 0")
				div
					q-icon.trig(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					span {{node.text}} ({{treeData[0].children.length}})
				q-btn(flat round icon="mdi-plus-circle" dense color="secondary" @click="toggleAdd") 

			.node(v-else  draggable="true" @dragstart.stop="dragstart(node)")
				div
					q-icon.sec(name="mdi-database-outline" size="16px")
						q-menu
							q-card.hrinfo
								.label Название:
								div {{ node.text}}
								.label Тип:
								div {{ node.typ}}
								.label Состояние:
								div {{ node.state}}
								.label Размер:
								div {{ node.size}} Gb
								.label Раздел:
								div
									span(v-if="node.main") основной,
									span(v-if="node.arch") архивный,
									span(v-if="node.temp") временный
					span.txt(@click="edit(node)") {{ node.text }}
				div
					q-btn(flat round dense icon="mdi-close" size="sm" color="secondary" @click="remove(stat)")
					// q-icon(name="mdi-drag" size="sm" color="secondary" draggable="true" @dragstart.stop="dragstart(node.text)")
						// q-menu(cover anchor="top left")
							q-list(dense)
								q-item(clickable v-close-popup @click="remove(stat)").pink
									q-item-section Удалить

	.empt(v-if="!treeData[0].children.length") Добавьте хранилище
	q-dialog(v-model="showAdd")
		q-card(padding)
			q-form(@submit="add")
				q-card-section.row.items-center.q-pb-none
					.text-h6 Настройки хранилища
					q-space
					q-btn(icon="mdi-close" flat round dense v-close-popup)

				q-card-section
					.edittable
						q-input(v-model="name" autofocus filled label="Название" dense lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
						q-select(v-model="typ" filled label="Тип" :options="options" dense lasy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']")
						q-select(v-model="state" filled label="Состояние" :options="options1" dense lasy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']")
						q-input(v-model="size" filled label="Макс.размер, Гб" type="number" style="width:150px; margin: 0 auto;" dense lasy-rules :rules="[val => val > 0 || 'Укажите размер']")
						br
						q-checkbox(v-model="main" label="Основной раздел")
						q-checkbox(v-model="arch" label="Архивный раздел")
						q-checkbox(v-model="temp" label="Временный раздел")
				q-card-section
					q-card-actions(align="right")
						q-btn(flat color="primary" label="Отмена" v-close-popup)
						q-btn(unelevated color="primary" label="Сохранить" type="submit")
</template>

<style scoped lang="scss">
.trig {
	font-size: 1.3rem;
	transition: 0.2s ease all;
	&.closed {
		transform: rotate(-90deg);
	}
}
.zero {
	font-size: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.sec {
	color: $secondary;
	margin-right: 0.3rem;
	&:hover {
		color: $primary;
	}
}
.txt:hover {
	color: $primary;
}
.node {
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4px;
	height: 32px;
	cursor: pointer;
	.q-btn {
		display: none;
	}
	&:hover {
		background: #dedede;
		.q-btn {
			display: inline-flex;
		}
	}
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
:deep(.drag-placeholder) {
	height: 32px;
}
</style>
