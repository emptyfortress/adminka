<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useHran } from '@/stores/hran'

const hran = useHran()
let treeData = ref([
	{
		id: 0,
		text: 'Группы хранилищ',
		drag: false,
		drop: false,
		children: [
			{
				id: 1,
				text: 'Common',
				type: 'group',
				drag: true,
				drop: true,
				children: [],
			},
			// {
			// 	id: 2,
			// 	text: 'New',
			// 	type: 'group',
			// 	drag: true,
			// 	drop: true,
			// },
		],
	},
])

// const newGroupName = ref()
// const newGroupRule = ref()
// const showAdd = ref(false)
// const currentGroupIndex = ref()

// const remove = (ind: number, index: number) => {
// 	hran.groups[ind].list.splice(index, 1)
// }

// const dragging = ref(false)

// const addGroup = () => {
// 	if (currentGroupIndex.value == null) {
// 		hran.addGroup(newGroupName.value, newGroupRule.value)
// 	} else {
// 		hran.editGroup(
// 			currentGroupIndex.value,
// 			newGroupName.value,
// 			newGroupRule.value
// 		)
// 	}
// 	showAdd.value = false
// 	newGroupName.value = ''
// 	newGroupRule.value = ''
// 	currentGroupIndex.value = null
// }
// const addNew = () => {
// 	newGroupName.value = ''
// 	newGroupRule.value = ''
// 	currentGroupIndex.value = null
// 	showAdd.value = true
// }

// const options = [
// 	'Самое заполненное хранилище',
// 	'Самое свободное хранилище',
// 	'Случайный порядок',
// ]

// const removeGroup = (ind: number) => {
// 	hran.removeGroup(ind)
// }
// const editGroup = (group: Group, index: number) => {
// 	newGroupName.value = group.name
// 	newGroupRule.value = group.rule
// 	currentGroupIndex.value = index
// 	showAdd.value = true
// }
const toggle = (stat: any) => {
	stat.open = !stat.open
}
const date = new Date()

const tree = ref()

const externalDataHandler = () => {
	let dragged = {
		text: hran.currentNode,
		type: 'storage',
	}
	return dragged
}

const uniq = () => {
	console.log(tree.value.stats)
	// tree.value.statsFlat.filter(item => item.data.text == 'Storage 1')
	// console.log(tree.value.statsFlat)
	// console.log(
	// 	tree.value.statsFlat.filter(item => item.data.text == 'Storage 1')
	// )
	// nextTick(() => {
	// 	treeData.value = []
	// })

	// list.forEach(item => {
	// 	item.children = [...new Set(item.children)]
	// 	console.log(item.children)
	// })
}

const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}

const isDrop = (e: any) => {
	if (
		!e.data.drop ||
		e.children.some(item => item.data.text == hran.currentNode)
	) {
		return false
	} else return true
}
const test = () => {
	console.log(hran.currentNode)
}
</script>

<template lang="pug">
div
	Draggable(ref="tree"
		treeLine
		v-model="treeData"
		:eachDroppable="isDrop"
		:eachDraggable="isDrag"
		:onExternalDragOver="()=> true"
		:externalDataHandler="externalDataHandler"
		@afterDrop="test"
		:watermark="false" )
		template(#default="{ node, stat }")
			.zero(v-if="node.id == 0")
				div
					q-icon.trig(v-if="node.children" name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					span {{node.text}} ({{treeData[0].children.length}})
				q-btn(flat round icon="mdi-plus-circle" dense color="primary" @click="uniq") 

			.node(v-else)
				div
					q-icon.trig(v-if="node.children?.length" name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					q-icon.q-mr-sm(v-if="node.type == 'group'" name="mdi-folder-outline" color="secondary" size="21px")
					q-icon.q-mr-sm(v-if="node.type == 'storage'" name="mdi-database-outline" color="secondary" size="16px")
					span {{ node.text }}
				div
					q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" color="secondary" @click="remove(stat)")
						// q-menu(cover anchor="top left")
						// 	q-list(dense)
						// 		q-item(clickable v-close-popup @click="remove(stat)").pink
						// 			q-item-section Удалить

// .row.items-center.justify-between
// 	.zg Группы хранилищ ({{ hran.groups.length }})
// 	q-btn(flat round icon="mdi-plus-circle" @click="addNew")
// .empt(v-if="hran.groups.length === 0") Создайте первую группу
//
// component(:is="draggable"
// 	:list="hran.groups" item-key="id"
// 	:group="{ name: 'last', pull: 'clone', put: false }")
// 	template(#item="{ element, index }")
// 		q-expansion-item(v-model="element.expanded" switch-toggle-side).gro.exp
// 			template(#header)
// 				.row.items-center.justify-between.full-width
// 					.title
// 						q-icon(name="mdi-server").q-mr-sm
// 						span {{ element.name }}
//
// 					div
// 						q-btn(flat round icon="mdi-pencil" @click.stop="editGroup(element, index)" size="sm") 
// 						q-btn(flat round icon="mdi-trash-can-outline" @click.stop="" size="sm") 
// 							q-menu
// 								q-list
// 									q-item(clickable v-close-popup @click="removeGroup(index)").pink
// 										q-item-section Удалить&nbsp;группу
// 			q-separator
//
// 			q-card.dblist
// 				component(:is="draggable"
// 					:list="element.list"
// 					item-key="id"
// 					group="group"
// 					ghost-class="ghost"
// 					@start="dragging = true"
// 					@end="dragging = false").list-group
// 					template(#item="{ element: el, index: ind }")
// 						.row.justify-between.items-center
// 							.q-ml-sm
// 								q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
// 								span.q-ml-sm {{ el.name }}
// 							q-btn(flat round dense icon="mdi-close" size="10px" )
// 								q-menu
// 									q-list
// 										q-item(clickable v-close-popup @click="remove(index, ind)").pink
// 											q-item-section Очистить
// 					template(#header v-if="element.list.length == 0")
// 						.empt Добавьте хранилище в группу, перетащив его сюда.
//
// q-dialog(:model-value="showAdd")
// 	q-card(style="min-width: 400px;")
// 		q-form(@submit="addGroup")
// 			q-card-section.row.items-center.q-pb-none
// 				.text-h6 Группа хранилищ
// 				q-space
// 				q-btn(icon="mdi-close" flat round dense v-close-popup)
//
// 			q-card-section
// 				q-input(v-model="newGroupName" autofocus label="Название" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
//
// 			q-card-section
// 				q-select(v-model="newGroupRule" autofocus label="Режим выбора" :options="options" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
//
// 			q-card-section
// 				q-card-actions(align="right")
// 					q-btn(flat color="primary" label="Отмена" @click="showAdd = false")
// 					q-btn(unelevated color="primary" label="Сохранить" type="submit")
		
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
.node {
	// min-width: 200px;
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2px 4px;
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
</style>
