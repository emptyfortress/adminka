<script setup lang="ts">
import { ref, reactive, watchEffect, computed } from 'vue'
import { Draggable, BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'

interface Props {
	id: string
	text: string
	icon?: string
	selected?: boolean
	ticked?: boolean
	env?: string
	children?: Props[]
	drag?: boolean
	drop?: boolean
}

const props = defineProps<{
	treeData: Props[]
	filter: String
}>()

const tree = ref()
const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}
const isDrop = (e: any) => {
	if (e.data.drop) return true
	else return false
}
const select = (e: Stat) => {
	tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
	e.data.selected = true
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
const length = computed(() => {
	return props.treeData[0].children!.length
})
</script>

<template lang="pug">
Draggable(ref="tree"
	treeLine
	v-model="props.treeData"
	:eachDroppable="isDrop"
	:eachDraggable="isDrag"
	:watermark="false")

	template(#default="{ node, stat }")
		.zero(v-if="node.id == 'root'")
			div
				q-icon.trig(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }")
				span {{node.text}}
				span.q-ml-md ({{ length }})
			// q-btn(flat round icon="mdi-plus-circle" dense color="secondary" @click="toggleAdd") 

		.node(v-else @click="select(stat)" :class="{ 'selected': stat.data.selected }")
			div
				q-checkbox(v-model="stat.checked" dense size="sm")
				q-icon.q-mx-sm(:name="node.icon" size="18px")
				span.txt(@click="") {{ node.text }}
			div
				q-chip(v-if="node.env" size="sm" :class="node.env") {{ node.env }}
				q-btn(flat round dense icon="mdi-close" size="sm" color="secondary" @click="")
</template>

<style scoped lang="scss">
.trig {
	font-size: 1.3rem;
	transition: 0.2s ease all;
	margin-right: 4px;
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
	&.selected {
		background: var(--tree-selection);
		color: #1565c0;
	}
}
.test {
	background: #ebd984;
}
.dev {
	background: $blue-2;
}
.prod {
	background: pink;
}
</style>
