<script setup lang="ts">
import { ref, computed } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'
import { cards } from '@/stores/cardsTree'

const stepper = useStepperStore()

const expanded = ref([])
const filterRef = ref()
const filter = ref()

// Filter the cards tree to show only ticked nodes from CardStep
const filteredCards = computed(() => {
	// Get the ticked card IDs from CardStep
	const tickedIds = stepper.step4.cards

	// Function to filter tree nodes and create independent copies
	const filterTree = (nodes: any[]): any[] => {
		return nodes
			.map((node: any) => {
				// If this node is ticked, create an independent copy without the tick
				if (tickedIds.includes(node.key)) {
					return {
						...node,
						tick: false, // Ensure it's unticked
						children: node.children ? filterTree(node.children) : undefined,
					}
				}

				// If this node has children, filter them
				if (node.children) {
					const filteredChildren = filterTree(node.children)
					// If any children are ticked, include this node with filtered children
					if (filteredChildren.length > 0) {
						return {
							...node,
							children: filteredChildren,
							tick: false, // Ensure it's unticked
						}
					}
				}

				return null
			})
			.filter(Boolean) // Remove null entries
	}

	return filterTree(cards)
})

// Get the labels of all checked items for FacetStep (independent from CardStep)
const checkedItems = computed(() => {
	return stepper.step5.facets
		.map((cardId: any) => {
			// Find the card in the tree by its key
			const findCardInTree = (nodes: any[]): string | null => {
				for (const node of nodes) {
					if (node.key === cardId) {
						return node.label
					}
					if (node.children) {
						const found = findCardInTree(node.children)
						if (found) return found
					}
				}
				return null
			}
			return findCardInTree(cards)
		})
		.filter(Boolean) // Filter out any null values
})
</script>

<template lang="pug">
.sid
	.arch
		.row.items-center.justify-between
			.text-bold Индексируемые карточки
			MyInput(
				ref="filterRef",
				v-model="filter",
				prependIcon='mdi-magnify'
				clearable
				noValidation
			)
		q-tree(
			:nodes='filteredCards'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step5.facets"
			v-model:expanded="expanded"
		)
	.arch
		.text-bold Фасеты для группировки
		q-list(v-if="checkedItems.length")
			q-item(v-for="(item, index) in checkedItems" :key="index" dense)
				q-item-section(side)
					q-icon(name="mdi-check" color="secondary" size='12px')
				q-item-section
					q-item-label {{ item }}
		.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов
</template>

<style scoped lang="scss">
.sid {
	width: 920px;
	display: grid;
	grid-template-columns: 600px 400px;
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
