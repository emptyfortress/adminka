<script setup lang="ts">
import { ref, reactive } from 'vue'
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
				rule: 'Случайный порядок',
				drag: false,
				drop: true,
				children: [],
			},
		],
	},
])

const newGroupName = ref()
const newGroupRule = ref()
const showAdd = ref(false)

const toggleAdd = () => {
	showAdd.value = !showAdd.value
}

const date = new Date()
const addGroup = () => {
	let gr = {
		id: +date,
		text: newGroupName.value,
		type: 'group',
		rule: newGroupRule.value,
		drag: false,
		drop: true,
		children: [],
	}
	tree.value.add(gr, tree.value.rootChildren[0])
	showAdd.value = false
	newGroupName.value = ''
	newGroupRule.value = ''
}

const options = [
	'Самое заполненное хранилище',
	'Самое свободное хранилище',
	'Случайный порядок',
]

const remove = (e: any) => {
	tree.value.remove(e)
}
const toggle = (stat: any) => {
	stat.open = !stat.open
}

const tree = ref()

const externalDataHandler = () => {
	let temp = hran.currentNode
	return temp
}

const isDrag = (e: any) => {
	return false
	// if (e.data.drag) return true
	// else return false
}

const isDrop = (e: any) => {
	if (
		!e.data.drop ||
		e.data.type == hran.currentNode?.type ||
		e.children.some(item => item.data.text == hran.currentNode?.text)
	)
		return false
	else return true
}

const dragstart = node => {
	let tmp = { ...node }
	tmp.id = +date
	tmp.drop = false
	tmp.drag = false
	tmp.children = []
	hran.setCurrentGroup(tmp)
}

const afterDrop = () => {
	hran.setCurrent(null)
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
				q-btn(flat round icon="mdi-plus-circle" dense color="secondary" @click="toggleAdd") 

			.node(v-if="node.type == 'group'" draggable="true" @dragstart.stop="dragstart(node)")
				div
					q-icon.trig(v-if="node.children?.length" name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
					q-icon.q-mr-sm(name="mdi-folder-outline" color="secondary" size="21px")
						q-menu
							q-card.hrinfo
								.label Название:
								div {{ node.text}}
								.label Режим выбора:
								div {{ node.rule}}
					span {{ node.text }}
				div
					q-btn(flat round dense icon="mdi-close" size="sm" color="secondary" @click="remove(stat)")

			.node(v-if="node.type == 'storage'")
				div
					q-icon.q-mr-sm(name="mdi-database-outline" color="secondary" size="16px")
						q-menu
							q-card.hrinfo
								.label Название:
								div {{ node.text}}
								.label Тип:
								div {{ node.type}}
								.label Состояние:
								div {{ node.state}}
								.label Размер:
								div {{ node.size}} Gb
								.label Раздел:
								div
									span(v-if="node.main") основной,
									span(v-if="node.arch") архивный,
									span(v-if="node.temp") временный
					span {{ node.text }}
				div
					q-btn(flat round dense icon="mdi-close" size="sm" color="secondary" @click="remove(stat)")

	q-dialog(v-model="showAdd")
		q-card(style="min-width: 400px;")
			q-form(@submit="addGroup")
				q-card-section.row.items-center.q-pb-none
					.text-h6 Добавить группу
					q-space
					q-btn(icon="mdi-close" flat round dense v-close-popup)

				q-card-section
					q-input(v-model="newGroupName" dense filled autofocus label="Название" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
					q-select(v-model="newGroupRule" dense filled autofocus label="Режим выбора" :options="options" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")

				q-card-section
					q-card-actions(align="right")
						q-btn(flat color="primary" label="Отмена" v-close-popup)
						q-btn(unelevated color="primary" label="Сохранить" type="submit")
		
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
