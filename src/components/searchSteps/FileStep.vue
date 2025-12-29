<script setup lang="ts">
import { ref, computed } from 'vue'
import { files } from '@/stores/fileTree'
import { useStepperStore } from '@/stores/useStepperStore'
import MyInput from '@/components/common/MyInput.vue'

const stepper = useStepperStore()

const filterRef = ref()
const filter = ref()
const expanded = ref([])

const options = [
	{
		label: 'Не индексировать',
		value: 'notIndex',
	},
	{ label: 'Индексировать оперативные файлы', value: 'use' },
	{ label: 'Индексировать оперативные и архивные файлы', value: 'use1' },
]

// Get the labels of all checked file types
const checkedItems = computed(() => {
	return stepper.step5.filetypes
		.map(fileId => {
			// Find the file in the tree by its key
			const findFileInTree = (nodes: any[]): string | null => {
				for (const node of nodes) {
					if (node.key === fileId) {
						return node.label
					}
					if (node.children) {
						const found = findFileInTree(node.children)
						if (found) return found
					}
				}
				return null
			}
			return findFileInTree(files)
		})
		.filter(Boolean) // Filter out any null values
		.join(', ') // Join with commas
})
</script>

<template lang="pug">
.all700
	.arch
		.grid
			.text-bold.q-mt-sm Режим индексирования файлов:
			q-option-group(
				:options="options"
				type="radio"
				v-model="stepper.step5.fileregim")
	transition(name='slide-top')
		.sid(v-if='!!stepper.payload.fileregim && stepper.payload.fileregim !== "notIndex"')
			.arch
				.row.items-center.justify-between
					.text-bold Типы файлов:
					MyInput(
						ref="filterRef",
						v-model="filter",
						prependIcon='mdi-magnify'
						clearable
						noValidation
					)
				q-tree(
					:nodes='files'
					node-key='key'
					:filter="filter"
					tick-strategy="leaf"
					v-model:ticked="stepper.step5.filetypes"
					v-model:expanded="expanded"
				)
			.arch
				.text-bold Индексируемые файлы:
				.text-body2 {{ checkedItems || 'Нет выбранных элементов' }}
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 260px 1fr;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.sid {
	// width: 720px;
	display: grid;
	grid-template-columns: 410px 300px;
	align-items: start;
	column-gap: 0.5rem;
	// margin: 0 auto;
	margin-top: 0.5rem;
}
.all700 {
	width: 720px;
	margin: 0 auto;
}

:deep(.q-checkbox--dense .q-checkbox__inner) {
	width: 0.4em;
	min-width: 0.4em;
	height: 0.4em;
	margin-right: 0.3rem;
}
</style>
