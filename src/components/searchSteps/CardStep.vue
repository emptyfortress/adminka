<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useCardsTree } from '@/stores/cardsTree'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'

interface TreeNode {
	label: string
	key: string
	children?: TreeNode[]
}

interface CheckedTreeItem {
	label: string
	children: string[]
}

const stepper = useStepperStore()
const cardsTree = useCardsTree()

const expanded = ref([])
const filterRef = ref()
const filter = ref()

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
			return findCardInTree(cardsTree.cards)
		})
		.filter(Boolean) // Filter out any null values
})

watch(checkedCards, val => {
	stepper.payload.cards = val
})

function buildTwoLevelList(items: string[]): CheckedTreeItem[] {
	const map = items.reduce((acc: Record<string, CheckedTreeItem>, item: string) => {
		const [parent, child] = item.split('.', 2)

		if (!acc[parent]) {
			acc[parent] = {
				label: parent,
				children: [],
			}
		}

		acc[parent].children.push(child)
		return acc
	}, {})

	return Object.values(map)
}

const checkedTree = computed<CheckedTreeItem[]>(() => {
	return buildTwoLevelList(checkedCards.value)
})
const shard = ref(0)

const analyze = ref(true)
</script>

<template lang="pug">
.sid
	.arch
		.row.items-center.justify-between
			.text-bold Дерево видов
			MyInput(
				ref="filterRef",
				v-model="filter",
				prependIcon='mdi-magnify'
				clearable
				noValidation
			)
		q-tree(
			:nodes='cardsTree.cards'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step5.cards"
			v-model:expanded="expanded"
		)

	.arch
		.text-bold Индексируемые поля карточек

		q-list.q-mt-sm(v-if="checkedCards.length")
			template(v-for="(group, index) in checkedTree" :key="group.label" )
				q-item(dense clickable)
					q-item-section
						q-item-label.text-bold {{ group.label }}

				q-list
					q-item(v-for="child in group.children" :key="child" dense clickable)
						q-item-section(side)
							q-icon(name="mdi-check" color="secondary" size='12px')
						q-item-section
							q-item-label {{ child }}

		.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов

	.arch
		.text-bold Свойства поля
</template>

<style scoped lang="scss">
.sid {
	width: 1020px;
	display: grid;
	grid-template-columns: 430px 270px 300px;
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
</style>
