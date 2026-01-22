<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'
import { newcatalog } from '@/stores/catalogTree'

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
const hideDisabled = ref(false)

// Filter function to remove disabled nodes and their children
function filterDisabledNodes(nodes: TreeNode[]): TreeNode[] {
	if (!hideDisabled.value) {
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
						children: filteredChildren
					}
				}
				// If no children remain, return as leaf node
				return {
					...node,
					children: []
				}
			}

			return node
		})
		.filter(node => node !== null) as TreeNode[]
}

const filteredCatalog = computed(() => {
	return filterDisabledNodes(newcatalog)
})

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

// Get only parent node labels of checked items (unique)
const parentNodeLabels = computed(() => {
	return [
		...new Set(
			stepper.step4.catalogs
				.map((cardId: string) => {
					// Find the card in the tree by its key and return only parent label
					const findParentLabel = (
						nodes: TreeNode[],
						parentLabel: string = ''
					): string | null => {
						for (const node of nodes) {
							if (node.key === cardId) {
								return parentLabel || node.label
							}
							if (node.children) {
								const found = findParentLabel(node.children, node.label)
								if (found) return found
							}
						}
						return null
					}
					return findParentLabel(filteredCatalog.value)
				})
				.filter(Boolean) // Filter out any null values
		),
	]
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

const checkedTree = computed<CheckedTreeItem[]>(() => {
	return buildTwoLevelList(checkedItems.value)
})

watch(
	checkedItems,
	val => {
		stepper.payload.catalogs = parentNodeLabels.value
	},
	{ immediate: true }
)
</script>

<template lang="pug">
.sid
	.arch
		.row.items-center.justify-between
			.text-bold Справочники
			MyInput(
				ref="filterRef",
				v-model="filter",
				prependIcon='mdi-magnify'
				clearable
				noValidation
			)
		.q-mt-sm
			q-checkbox(
				v-model="hideDisabled"
				label="Скрыть отключенные узлы"
				dense
			)
		q-tree(
			:nodes='filteredCatalog'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step4.catalogs"
			v-model:expanded="expanded"
		)
	.arch
		.text-bold Индексируемые поля справочников

		q-list.q-mt-md(v-if="checkedItems.length")
			template(v-for="group in checkedTree" :key="group.label" )
				q-item(dense)
					q-item-section
						q-item-label.text-bold {{ group.label }}
				q-list
					q-item(v-for="child in group.children" :key="child" dense)
						q-item-section(side)
							q-icon(name="mdi-check" color="secondary" size='12px')
						q-item-section
							q-item-label {{ child }}

		.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов

</template>

<style scoped lang="scss">
.sid {
	width: 1020px;
	display: grid;
	grid-template-columns: 500px 500px;
	align-items: start;
	column-gap: 1rem;
	margin: 0 auto;
}

:deep(.q-checkbox--dense .q-checkbox__inner) {
	width: 0.4em;
	min-width: 0.4em;
	height: 0.4em;
	margin-right: 0.3rem;
}
</style>
