<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useCardsTree } from '@/stores/cardsTree'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'

const stepper = useStepperStore()
const cardsTree = useCardsTree()

const expanded = ref([])
const filterRef = ref()
const filter = ref()

// Get the labels of all checked items
const checkedCards = computed(() => {
	return stepper.step5.cards
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
			return findCardInTree(cardsTree.cards)
		})
		.filter(Boolean) // Filter out any null values
})

watch(checkedCards, val => {
	stepper.payload.cards = val
})
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
		.text-bold Индексируемые типы карточек
		q-list(v-if="checkedCards.length")
			q-item(v-for="(item, index) in checkedCards" :key="index" dense)
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
.dis {
	color: red;
}
</style>
