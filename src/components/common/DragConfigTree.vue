<script setup lang="ts">
import { ref, reactive, watch, watchEffect, computed } from 'vue'
import { Draggable, dragContext } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useDvServ } from '@/stores/dvservConfig'

interface Props {
	id: string
	text: string
	type: number
	icon?: string
	selected?: boolean
	ticked?: boolean
	env?: string
	children?: Props[]
	drag?: boolean
}

const props = defineProps<{
	treeData: Props[]
	filter: String
}>()

const tree = ref()
const list = ref(props.treeData)
const serv = useDvServ()

const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}
const isDrop = (targetStat: Stat) => {
	if (dragContext.dragNode.data.type == 2 && targetStat.data.id == 'conf') {
		return true
	} else if (
		dragContext.dragNode.data.type == 3 &&
		targetStat.data.id == 'servers'
	) {
		return true
	} else if (
		dragContext.dragNode.data.type == 4 &&
		targetStat.data.id == 'servers'
	) {
		return true
	} else if (dragContext.dragNode.data.type == 3 && targetStat.data.type == 4) {
		return true
	} else return false
}
const select = (e: Stat) => {
	tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
	e.data.selected = true
	serv.setCurrent(e)
}
const toggle = (stat: any) => {
	stat.open = !stat.open
}

watchEffect(() => {
	if (props.filter !== '') {
		tree.value.statsFlat.map((stat: Stat) => {
			stat.hidden = true
			if (stat.data.text.toLowerCase().includes(props.filter.toLowerCase())) {
				stat.hidden = false
				for (const parentStat of tree.value.iterateParent(stat, {
					withSelf: false,
				})) {
					parentStat.hidden = false
				}
			}
		})
	} else tree.value?.statsFlat.map((item: Stat) => (item.hidden = false))
})
const length1 = computed(() => {
	return props.treeData[0].children!.length
})
const length2 = computed(() => {
	return tree.value?.statsFlat.filter((el: Stat) => el.data.type == 3).length
})
const caf = () => {
	console.log(111)
}
const toggleAdd = () => {
	console.log(tree.value.getChecked())
}

const checkNode = () => {
	const temp = tree.value.getChecked()
	serv.setChecked(temp)
}

watch(
	() => serv.removeNode,
	() => {
		serv.currentNode = null
		tree.value.remove(serv.removeNode)
	}
)
const startDrag = (e: Stat) => {
	serv.setDragged(e)
}
</script>

<template lang="pug">
Draggable(ref="tree"
	treeLine
	v-model="list"
	:eachDroppable="isDrop"
	:eachDraggable="isDrag"
	:rootDroppable="false"
	:watermark="false")

	template(#default="{ node, stat }")
		.zero(v-if="node.type == 0 || node.type == 1")
			div
				q-icon.trig(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
				span {{node.text}}
				span.q-ml-md(v-if="node.id == 'conf'") ({{ length1 }})
				span.q-ml-md(v-if="node.id == 'servers'") ({{ length2 }})
			q-btn(flat round icon="mdi-plus-circle" dense color="secondary" @click="toggleAdd")

		.node(v-else @click="select(stat)" :class="{ 'selected': stat.data.selected }" :draggable="true" @dragstart="startDrag(stat)")
			.q-gutter-x-sm
				q-icon.trig(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }" v-if="stat.children.length")
				// q-checkbox(v-model="stat.checked" dense size="sm" @click="checkNode")
				q-icon(:name="node.icon" size="18px" v-if="node.icon")
				span.txt {{ node.text }}
			div
				q-chip(v-if="node.env" size="sm" :class="node.env") {{ node.env }}

</template>

<style scoped lang="scss">
.trig {
	font-size: 1.3rem;
	transition: 0.2s ease all;
	// margin-right: 4px;
	&.closed {
		transform: rotate(-90deg);
	}
}
.zero {
	font-size: 1rem;
	display: flex;
	font-weight: 600;
	color: $secondary;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
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
	.q-icon {
		transform: translateY(-3px);
	}
	&:hover {
		background: #dedede;
		.q-btn {
			display: inline-flex;
		}
	}
	&.selected {
		background: var(--tree-selection);
		color: #1565c0;
	}
}
</style>
