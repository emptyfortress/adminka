<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FlowType } from '@/stores/useStepperStore'

const emit = defineEmits<{
	(e: 'select-flow', value: FlowType): void
}>()

const group = ref(null)
const options = [
	{
		label: 'Использовать внешний полнотекстовый поиск Elasticsearch',
		value: 'B',
	},
	{ label: 'Использовать локальную базу данных', value: 'A' },
]

watch(group, newValue => {
	if (newValue === 'A') {
		emit('select-flow', 'A')
	} else if (newValue === 'B') {
		emit('select-flow', 'B')
	}
})
</script>

<template lang="pug">
	.text-bold Выберите хранилище

	q-option-group(
		:options="options"
		type="radio"
		v-model="group")

</template>
