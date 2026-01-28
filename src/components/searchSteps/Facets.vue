<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import { useCardsTree } from '@/stores/cardsTree'

const cardsTree = useCardsTree()
const ticked = ref([])

const filterRef = ref()
const filter = ref()

// Get the labels of all checked items for FacetStep (independent from CardStep)
const checkedItems = computed(() => {
	return ticked.value
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
			return findCardInTree(cardsTree.facets)
		})
		.filter(Boolean) // Filter out any null values
})

const changed = ref(false)
watch(
	ticked,
	newVal => {
		changed.value = true
	},
	{ deep: true }
)
const reset = () => {
	changed.value = false
}
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label Индексируемые поля для фасетов
	.descr Поля карточек, которые будут использоваться как фасеты в Elasticsearch.
	br
	.grd
		div
			MyInput(
				ref="filterRef",
				v-model="filter",
				prependIcon='mdi-magnify'
				clearable
				noValidation
			)
			q-tree(
				:nodes='cardsTree.facets'
				node-key='key'
				:filter="filter"
				tick-strategy="leaf"
				default-expand-all
				v-model:ticked="ticked"
			)
		.sep
		div
			.text-bold Фасеты для группировки
			q-list(v-if="ticked.length")
				q-item(v-for="(item, index) in checkedItems" :key="index" dense)
					q-item-section(side)
						q-icon(name="mdi-check" color="secondary" size='12px')
					q-item-section
						q-item-label {{ item }}
			.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов
</template>

<style scoped lang="scss">
.grd {
	display: grid;
	grid-template-columns: 1.5fr 1px 2fr;
	column-gap: 1rem;
	margin-left: 2rem;
}
.sep {
	width: 1px;
	height: 100%;
	background: #ccc;
}
</style>
