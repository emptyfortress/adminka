<script setup lang="ts">
import { ref, reactive, watch, watchEffect, computed } from 'vue'
import { Draggable, dragContext } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useServ } from '@/stores/dvservConfig'
import ConfirmDialog from '@/components/tree/ConfirmDialog.vue'
import { uid } from 'quasar'
import { useRoute, useRouter } from 'vue-router'

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
const serv = useServ()
const list = ref(props.treeData)

const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}
const isDrop = (targetStat: Stat) => {
	if (dragContext.dragNode!.data.type == 2 && targetStat.data.id == 'conf') {
		return true
	} else if (
		dragContext.dragNode!.data.type == 3 &&
		targetStat.data.id == 'servers'
	) {
		return true
	} else if (
		dragContext.dragNode!.data.type == 4 &&
		targetStat.data.id == 'servers'
	) {
		return true
	} else if (
		dragContext.dragNode!.data.type == 3 &&
		targetStat.data.type == 4
	) {
		return true
	} else return false
}

const router = useRouter()

const select = (e: Stat) => {
	tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
	e.data.selected = true
	serv.setCurrent(e)
	const url = '/root/par/' + e.data.text
	router.push(url)
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
	return tree.value?.statsFlat.filter((el: Stat) => el.data.type == 3).length
})

const route = useRoute()
watch(
	() => route.name,
	(newId, oldId) => {
		if ((newId = 'root')) {
			tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
		}
	}
)

const toggleAdd = () => {
	showAdd.value = !showAdd.value
}
const showAdd = ref(false)
const name = ref('')
const descripiton = ref('')

const createClaster = () => {
	const tmp = {
		id: uid(),
		text: name.value,
		type: 4,
		drag: true,
		drop: true,
		selected: true,
		icon: 'mdi-folder-outline',
	}
	tree.value.add(
		tmp,
		tree.value.rootChildren[0],
		tree.value.rootChildren[0].children.length
	)
	serv.setCurrent(tree.value.getStat(tmp))
	name.value = ''
	descripiton.value = ''
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
				span.q-ml-md ({{ length }})
			div
				q-btn(flat round icon="mdi-sync" dense color="secondary" @click="" v-if="node.id == 'servers'")
				q-btn(flat round icon="mdi-plus-circle" dense color="secondary" @click="toggleAdd" v-if="node.type == '0'")

		.node(v-else @click="select(stat)" :class="{ 'selected': stat.data.selected }")
			.q-gutter-x-sm
				q-icon.trig(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }" v-if="stat.children.length")
				q-icon(:name="node.icon" size="18px" v-if="node.icon")
				span.txt {{ node.text }}
			div
				q-chip(v-if="node.env" size="sm" :class="node.env") {{ node.env }}

ConfirmDialog(v-model="showAdd" zag="Создать кластер")
	template(#content)
		q-input(v-model="name" filled label="Название")
		q-input.q-mt-sm(v-model="descripiton" filled label="Описание")
	template(#actions)
		q-btn(flat color="primary" label="Отмена" v-close-popup)
		q-btn(unelevated color="primary" label="Создать" :disable="!name.length" @click="createClaster" v-close-popup) 
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
