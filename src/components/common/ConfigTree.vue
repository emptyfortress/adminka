<script setup lang="ts">
import { ref } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
// import { conf } from '@/stores/confTree1'

interface Props {
	id: string
	label: string
	icon: string
	selected?: boolean
	ticked?: boolean
	children?: Props[]
}

const props = defineProps<{
	treeData: Props[]
	filter: String
}>()

const tree = ref()
const expandedKeys = ref(['root'])
const selectedKeys = ref(null)

const isSelected = (e: any) => {
	return e.id == selectedKeys.value && e.icon == 'mdi-code-braces'
}

const showChip = (e: any) => {
	if (!!e.env && e.icon == 'mdi-code-braces') {
		return true
	} else return false
}
</script>

<template lang="pug">
q-tree(ref="tree"
	:nodes="props.treeData"
	icon="mdi-chevron-right"
	node-key="id"
	:filter="props.filter"
	v-model:expanded="expandedKeys"
	v-model:selected="selectedKeys"
	)
	template(v-slot:header-root="prop")
		.row.items-center.q-gutter-x-md
			.mainroot {{ prop.node.label }}
	template(v-slot:default-header="prop")
		.node
			div
				q-icon.q-mr-sm(:name="prop.node.icon")
				q-icon.q-mr-sm(v-if="prop.node.docker" name="mdi-docker")
				component(:is="WordHighlighter" :query="props.filter") {{ prop.node.label }}
			div
				q-btn(v-if="isSelected(prop.node)" flat round icon="mdi-dots-vertical" color="primary" @click.stop="" size="sm") 
					q-menu
						q-list
							q-item(clickable)
								q-item-section Действие 1
							q-item(clickable @click="edit")
								q-item-section Редактировать
		
				q-chip(v-if="showChip(prop.node)" size="sm" :class="prop.node.env") {{ prop.node.env }}
</template>

<style scoped lang="scss">
.node {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-items: space-between;
}
.test {
	background: $secondary;
	background: $blue-grey-3;
}
.dev {
	background: $blue-2;
}
.prod {
	background: pink;
}
:deep(.q-tree__node--selected) {
	background: var(--tree-selection);
	// background: hsl(207deg 100% 86.78%);
	.q-tree__node-header-content {
		color: #0d47a1;
		// color: #002544;
	}
}
.mainroot {
	font-size: 1.1rem;
	font-weight: 600;
	color: $secondary;
}
</style>
