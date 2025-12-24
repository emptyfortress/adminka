<template>
	<div class="q-gutter-md">
		<q-btn
			label="Путь A"
			color="primary"
			@click="select('A')"
		/>
		<q-btn
			label="Путь B"
			color="secondary"
			@click="select('B')"
		/>
	</div>
</template>

<script setup lang="ts">
import type { FlowType } from '@/stores/useStepperStore'

const emit = defineEmits<{
	(e: 'select-flow', value: FlowType): void
}>()

function select(flow: FlowType) {
	emit('select-flow', flow)
}
</script>
