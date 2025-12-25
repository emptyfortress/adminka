<script setup lang="ts">
import { ref } from 'vue'
import type { FlowType } from '@/stores/useStepperStore'

const emit = defineEmits<{
	(e: 'select-flow', value: FlowType): void
}>()

function select(flow: FlowType) {
	emit('select-flow', flow)
}

const group = ref(null)
const options = [
	{
		label: 'Использовать внешний полнотекстовый поиск Elasticsearch',
		value: 1,
	},
	{ label: 'Использовать локальную базу данных', value: 2 },
]
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
