<script setup lang="ts">
import { ref } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useHran } from '@/stores/hran'

const hran = useHran()

const showAdd = ref(false)
const tree = ref()

let treeData = ref([
	{
		id: 0,
		text: 'Правила помещения в хранилище',
		drag: false,
		drop: true,
		children: [
			{
				id: 1,
				text: 'First rule',
				type: 'rule',
				drag: true,
				drop: true,
			},
			{
				id: 2,
				text: 'second rule',
				type: 'rule',
				drag: true,
				drop: true,
			},
		],
	},
])

const name = ref()
const typ = ref('Все файлы')
const options = [
	'Все файлы',
	'По расширению файла',
	'Размер больше, чем',
	'Размер меньше, чем',
	'Файл справочника',
	'Добавить из сборки',
]

const ext = ref()
const size1 = ref()
const size2 = ref()
const sborka = ref()
const date = new Date()

const add = () => {
	let tmp = {} as Rule
	tmp.id = +date
	tmp.text = name.value
	tmp.type = 'rule'
	tmp.drag = true
	tmp.drop = true
	tmp.typ = typ.value
	tmp.ext = ext.value
	tmp.size1 = size1.value
	tmp.size2 = size2.value
	tmp.expanded = true

	tree.value.add(tmp, tree.value.rootChildren[0])

	showAdd.value = false
	name.value = null
	typ.value = 'Все файлы'
	ext.value = null
	size1.value = null
	size2.value = null
}
const remove = (e: any) => {
	tree.value.remove(e)
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}
const toggleAdd = () => {
	showAdd.value = !showAdd.value
}
const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}
const isDrop = (e: any) => {
	if (e.data.drop) return true
	else return false
}

const externalDataHandler = () => {
	let temp = hran.currentGroup
	return temp
}
const afterDrop = () => {
	hran.setCurrent(null)
	hran.setCurrentGroup(null)
}
</script>

<template lang="pug">
div
	Draggable(ref="tree"
		treeLine
		v-model="treeData"
		:eachDroppable="isDrop"
		:eachDraggable="isDrag"
		:rootDroppable="false"
		@afterDrop="afterDrop"
		:onExternalDragOver="()=> true"
		:externalDataHandler="externalDataHandler"
		:watermark="false" )

		template(#default="{ node, stat }")
			.zero(v-if="node.id == 0")
				div
					q-icon.trig(v-if="node.children" name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					span {{node.text}} ({{treeData[0].children.length}})
				q-btn(flat round icon="mdi-plus-circle" dense color="primary" @click="toggleAdd") 

			.node(v-if="node.type == 'rule'")
				div
					q-icon.trig(v-if="node.children?.length" name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					q-icon.q-mr-sm(name="mdi-gate-or" color="secondary" size="21px")
						// q-menu
						// 	q-card.hrinfo
						// 		.label Название:
						// 		div {{ node.text}}
						// 		.label Режим выбора:
						// 		div {{ node.rule}}
					span {{ node.text }}
				div
					q-btn(flat round dense icon="mdi-close" size="sm" color="secondary" @click="remove(stat)")

			.node(v-if="node.type == 'group'" )
				div
					q-icon.trig(v-if="node.children?.length" name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					q-icon.q-mr-sm(name="mdi-folder-outline" color="secondary" size="21px")
						q-menu
							q-card.hrinfo
								.label Название:
								div {{ node.text}}
								.label Режим выбора:
								div {{ node.rule}}
						// q-menu
						// 	q-card.hrinfo
						// 		.label Название:
						// 		div {{ node.text}}
						// 		.label Тип:
						// 		div {{ node.typ}}
						// 		.label Состояние:
						// 		div {{ node.state}}
						// 		.label Размер:
						// 		div {{ node.size}} Gb
						// 		.label Раздел:
								div
									span(v-if="node.main") основной,
									span(v-if="node.arch") архивный,
									span(v-if="node.temp") временный
					span {{ node.text }}
				div
					q-btn(flat round dense icon="mdi-close" size="sm" color="secondary" @click="remove(stat)")
// .row.items-baseline.justify-between
// 	.zg Правила помещения в хранилище ({{ hran.rules.length }})
// 	div
// 		q-btn(flat round icon='mdi-information')
// 			q-menu
// 				ol
// 					li Правила применяются последовательно, сверху вниз.
// 					li Если правило не содержит групп хранилищ, оно просто пропускается.
// 		q-btn(flat round icon='mdi-plus-circle' @click="showDialog")
// .empt(v-if="hran.rules.length === 0") Создайте первое правило
//
// component(v-else :is="draggable" :list="hran.rules"
// 	item-key="id"
// 	group="rule"
// 	@end="set"
// 	ghost-class='ghost'
// 	).list-group
//
// 	template(#item="{ element, index }")
// 		q-expansion-item(v-model="element.expanded" switch-toggle-side expand-icon-toggle).gro.exp
// 			template(#header)
// 				.line
// 					.title
// 						q-icon(name="mdi-gate-nor" size="sm").q-mr-sm
// 						span {{ element.name }}
//
// 					.bt
// 						q-btn(flat round icon="mdi-pencil" @click.stop="edit(index)" size="sm").q-mr-sm
// 						q-btn(flat round icon="mdi-trash-can-outline" @click.stop="" size="sm")
// 							q-menu
// 								q-list
// 									q-item(clickable v-close-popup @click="removeRule(index)").pink
// 										q-item-section Удалить&nbsp;правило
//
// 					.des
// 						q-icon(name="mdi-information-outline" size="14px").q-mr-sm
// 						span.q-mr-xs {{element.type}}
// 						span.q-mr-xs {{element.ext}}
// 						span.q-mr-xs {{element.size1}}
// 						span.q-mr-xs {{element.size2}}
// 						span.q-mr-xs(v-if="element.size1 || element.size2") Gb
//
// 			q-separator
//
// 			component(:is="draggable" :list="element.gr" item-key="id" group="last" ghost-class="ghost" @start="dragging = true" @end="dragging = false").list-group
// 				template(#item="{ element: el, index: ind }")
// 					.row.justify-between.items-center
// 						.q-ml-sm
// 							q-icon(name="mdi-server" size="18px" style="vertical-align: top;")
// 							span.q-ml-sm {{ el.name }}
// 						q-btn(flat round dense icon="mdi-close" size="10px" )
// 							q-menu
// 								q-list
// 									q-item(clickable v-close-popup @click="clearGroup(index, ind)").pink
// 										q-item-section Очистить
// 				template(#header v-if="element.gr.length == 0")
// 					.empt Добавьте группу к правилу, перетащив ее сюда.

q-dialog(v-model="showAdd")
	q-card(style="min-width: 500px;")
		q-form(@submit="add")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Правило
				q-space
				q-btn(icon="mdi-close" flat round dense v-close-popup)
			q-card-section
				q-input(v-model='name' dense filled autofocus label='Название' lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
				.grid
					q-select(v-model='typ'  dense filled label='Тип' :options="options").full-width
					q-input(v-model="ext" dense filled placeholder="*.jpg, *.mp3, *.tiff" label="Расширение" v-if="type === 'По расширению файла'" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']").full-width
					q-input(v-model="size1" dense filled label="Размер, kB" v-if="type === 'Размер больше, чем'" type="number" lazy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']").full-width
					q-input(v-model="size2" dense filled label="Размер, kB" v-if="type === 'Размер меньше, чем'" type="number").full-width
					q-input(v-model="sborka" dense filled label="Сборка" v-if="type === 'Добавить из сборки'").full-width
			q-card-section
				q-card-actions(align="right")
					q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
					q-btn(unelevated color='primary' label='Сохранить' type="submit")
</template>

<style scoped lang="scss">
.trig {
	font-size: 1.3rem;
	transform: translateX(-2px);
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
:deep(.drag-placeholder) {
	height: 32px;
}
.node {
	// min-width: 200px;
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4px;
	height: 32px;
	cursor: pointer;
	.q-btn {
		visibility: hidden;
	}
	&:hover {
		background: #dedede;
		.q-btn {
			visibility: visible;
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
</style>
