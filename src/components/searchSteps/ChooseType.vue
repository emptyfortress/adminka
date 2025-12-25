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
		value: 'A',
	},
	{ label: 'Использовать локальную базу данных', value: 'B' },
]

watch(group, (newValue) => {
	if (newValue === 'A') {
		emit('select-flow', 'A')
	} else if (newValue === 'B') {
		emit('select-flow', 'B')
	}
})

function select(flow: FlowType) {
	emit('select-flow', flow)
}
</script>

<template lang="pug">
	.text-bold Выберите хранилище

	q-option-group(
		:options="options"
		type="radio"
		v-model="group")


	<!-- <div class="q-gutter-md"> -->
	<!-- 	<q-btn -->
	<!-- 		label="Путь A" -->
	<!-- 		color="primary" -->
	<!-- 		@click="select('A')" -->
	<!-- 	/> -->
	<!-- 	<q-btn -->
	<!-- 		label="Путь B" -->
	<!-- 		color="secondary" -->
	<!-- 		@click="select('B')" -->
	<!-- 	/> -->
	<!-- </div> -->
</template>
