<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStepperStore } from '@/stores/useStepperStore'
import { newcatalog } from '@/stores/catalogTree'
import MyInput from '@/components/common/MyInput.vue'

interface TreeNode {
	label: string
	key: string
	children?: TreeNode[]
	disabled?: boolean
}

interface CheckedTreeItem {
	label: string
	children: string[]
}

const stepper = useStepperStore()
const expanded = ref(['basics', 'basics.employees', 'cardTypes'])
const filterRef = ref()
const filter = ref()
const showAll = ref(true)

// Filter function to remove disabled nodes and their children
function filterDisabledNodes(nodes: TreeNode[]): TreeNode[] {
	if (!showAll.value) {
		return nodes
	}

	return nodes
		.map(node => {
			// If node is disabled, don't include it
			if (node.disabled) {
				return null
			}

			// If node has children, filter them recursively
			if (node.children && node.children.length > 0) {
				const filteredChildren = filterDisabledNodes(node.children)
				// Only keep the node if it has children after filtering
				if (filteredChildren.length > 0) {
					return {
						...node,
						children: filteredChildren,
					}
				}
				// If no children remain, return as leaf node
				return {
					...node,
					children: [],
				}
			}

			return node
		})
		.filter(node => node !== null) as TreeNode[]
}

const filteredCatalog = computed(() => {
	return filterDisabledNodes(newcatalog)
})

function buildTwoLevelList(items: string[]): CheckedTreeItem[] {
	const map = items.reduce(
		(acc: Record<string, CheckedTreeItem>, item: string) => {
			const [parent, child] = item.split('.', 2)

			if (!acc[parent]) {
				acc[parent] = {
					label: parent,
					children: [],
				}
			}

			acc[parent].children.push(child)
			return acc
		},
		{}
	)

	return Object.values(map)
}

// Get the labels of all checked items
const checkedItems = computed(() => {
	return stepper.step4.catalogs
		.map((cardId: string) => {
			// Find the card in the tree by its key and return full path
			const findCardInTree = (
				nodes: TreeNode[],
				parentPath: string = ''
			): string | null => {
				for (const node of nodes) {
					const currentPath = parentPath
						? `${parentPath}.${node.label}`
						: node.label
					if (node.key === cardId) {
						// Split the path and return only the last two parts
						const parts = currentPath.split('.')
						if (parts.length > 1) {
							return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`
						}
						return currentPath
					}
					if (node.children) {
						const found = findCardInTree(node.children, currentPath)
						if (found) return found
					}
				}
				return null
			}
			return findCardInTree(filteredCatalog.value)
		})
		.filter(Boolean) // Filter out any null values
})

const checkedTree = computed<CheckedTreeItem[]>(() => {
	return buildTwoLevelList(checkedItems.value)
})
</script>

<template lang="pug">
.grd
	.leftblock
		MyInput(
			ref="filterRef",
			v-model="filter",
			prependIcon='mdi-magnify'
			clearable
			noValidation
		)
		.q-mt-xs
			q-checkbox(
				v-model="showAll"
				label="Скрыть недоступные"
				dense
			)
			q-tooltip Скрывать поля, не доступные для индексации
		br
		q-tree(
			:nodes='filteredCatalog'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step4.catalogs"
			v-model:expanded="expanded"
		)
	.leftblock
		.text-bold Индексируемые поля справочников

		q-list.q-mt-sm(v-if="checkedItems.length")
			template(v-for="group in checkedTree" :key="group.label" )
				q-item(dense)
					q-item-section
						q-item-label.text-bold {{ group.label }}
				.q-ml-lg
					div(v-for="child in group.children" :key="child" dense)
						q-icon(name="mdi-check")
						span.q-ml-xs {{ child }}

		.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов
</template>

<style scoped lang="scss">
.grd {
	display: grid;
	grid-template-columns: 1.5fr 2fr;
	column-gap: 1rem;
	margin-left: 2rem;
	margin-top: 1rem;
}
.leftblock {
	padding: 1rem;
	border: 1px solid #ccc;
	background: #e0e0e0;
}
.fl {
	margin-left: 2rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
