<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'
import { newcatalog } from '@/stores/catalogTree'

const stepper = useStepperStore()
const expanded = ref([])
const filterRef = ref()
const filter = ref()

// Get the labels of all checked items
const checkedItems = computed(() => {
	return stepper.step4.catalogs
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
			return findCardInTree(newcatalog)
		})
		.filter(Boolean) // Filter out any null values
})

watch(checkedItems, val => {
	stepper.payload.catalogs = val
})
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
		q-tree(
			:nodes='newcatalog'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step4.catalogs"
			v-model:expanded="expanded"
		)
	.arch
		.text-bold Индексируемые поля справочников
		q-list(v-if="checkedItems")
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
