<script setup lang="ts">
import { ref } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import { useStepperStore } from '@/stores/useStepperStore'
import { catalog } from '@/stores/catalogTree'

const stepper = useStepperStore()
const expanded = ref([])
const filterRef = ref()
const filter = ref()
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
			:nodes='catalog'
			node-key='key'
			:filter="filter"
			tick-strategy="leaf"
			v-model:ticked="stepper.step4.cards"
			v-model:expanded="expanded"
		)
	.arch
		.text-bold Индексируемые поля справочников
		.text-body2.q-mt-sm(:class="checkedItems ? '' : 'text-grey'") {{ checkedItems || 'Нет выбранных элементов' }}
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
