<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useCardsTree } from '@/stores/cardsTree'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'

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
const cardsTree = useCardsTree()

const expanded = ref(['indexable.baseObjects'])
const filterRef = ref()
const filter = ref()
const showAll = ref(true)

// Filter function to remove disabled nodes and their children
function filterDisabledNodes(nodes: TreeNode[]): TreeNode[] {
	if (showAll.value) {
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

const filteredCards = computed(() => {
	return filterDisabledNodes(cardsTree.cards)
})

// Get the labels of all checked items
const checkedCards = computed(() => {
	return stepper.step5.cards
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
			return findCardInTree(filteredCards.value)
		})
		.filter(Boolean) // Filter out any null values
})

// watch(checkedCards, val => {
// 	stepper.payload.cards = val
// })
// Get only parent node labels of checked items (unique)
const parentNodeLabels = computed(() => {
	return [
		...new Set(
			stepper.step5.cards
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
					return findParentLabel(filteredCards.value)
				})
				.filter(Boolean) // Filter out any null values
		),
	]
})

watch(
	checkedCards,
	val => {
		stepper.payload.cards = parentNodeLabels.value
	},
	{ immediate: true }
)

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
	return buildTwoLevelList(checkedCards.value)
})

const selectedItem = ref<string | null>(null)

const selectItem = (item: string) => {
	selectedItem.value = selectedItem.value === item ? null : item
}

const morf = ref(true)

const parentSelection = computed(() => {
	if (selectedItem.value == 'Задание' || selectedItem.value == 'Документ')
		return true
	return false
})

const shard = ref(0)
</script>

<template lang="pug">
.sid
	.arch
		.row.items-center.justify-between
			.text-bold Дерево видов
			div
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
						label="Показать все"
						dense
					)
		q-tree(
			:nodes='filteredCards'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step5.cards"
			v-model:expanded="expanded"
		)

	.arch
		.text-bold Индексируемые карточки и поля

		q-list.q-mt-sm(v-if="checkedCards.length")
			template(v-for="(group) in checkedTree" :key="group.label" )
				q-item(
					dense,
					clickable,
					:class="{ 'selection': selectedItem === group.label }"
					@click="selectItem(group.label)"
				)
					q-item-section
						q-item-label.text-bold {{ group.label }}

				q-list
					q-item(
						v-for="child in group.children"
						:key="child"
						dense
						clickable
						:class="{ 'selection': selectedItem === child }"
						@click="selectItem(child)"
					)
						q-item-section(side)
							q-icon(name="mdi-check" color="secondary" size='12px')
						q-item-section
							q-item-label {{ child }}

		.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов

	.arch
		.text-bold Свойства
		template(v-if='selectedItem && parentSelection')
			.q-my-md
				label Настройки индекса
				.row.items-center.q-mt-sm
					.q-mr-sm Elasticsearch shards:
					MyInput(v-model="shard" type='number' style='width: 100px')
			q-separator
			.text-caption.text-secondary Шарды - количество фрагментов индекса Elasticsearch

		template(v-if='selectedItem && !parentSelection')
			.smgrid
				label Название:
				div {{ selectedItem }}
				label Тип:
				div Строка
				label Индексирование:
				div Да
			.text-bold.q-mb-sm Свойства Elasticsearch
			q-checkbox(dense v-model="morf" label='Морфологический анализ')

		.text-body2.q-mt-sm.text-grey(v-if='!selectedItem') Нет выбранных элементов
</template>

<style scoped lang="scss">
.sid {
	width: 1020px;
	display: grid;
	grid-template-columns: 430px 280px 290px;
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

.dis {
	color: red;
}

.lab {
	font-size: 0.7rem;
}

.shard {
	max-width: 50px;
	height: 21px;
	padding-left: 0.5rem;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
}

.car {
	padding: 0.5rem;
	max-width: 190px;
}

.selection {
	background-color: var(--bg-selected);
	outline: 1px solid $primary;
}
.smgrid {
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
	margin-top: 1rem;
	margin-bottom: 2rem;
	label {
		color: #666;
	}
}
</style>
