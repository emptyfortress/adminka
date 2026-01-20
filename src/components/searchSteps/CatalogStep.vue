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
			// Find the card in the tree by its key and return full path
			const findCardInTree = (
				nodes: any[],
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
			return findCardInTree(newcatalog)
		})
		.filter(Boolean) // Filter out any null values
})

// Get only parent node labels of checked items
const parentNodeLabels = computed(() => {
	return stepper.step4.catalogs
		.map((cardId: any) => {
			// Find the card in the tree by its key and return only parent label
			const findParentLabel = (
				nodes: any[],
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
			return findParentLabel(newcatalog)
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
