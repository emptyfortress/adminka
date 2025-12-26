<script setup lang="ts">
import { ref } from 'vue'
import type { QTableColumn } from 'quasar'
import MySelect from '@/components/common/MySelect.vue'
import { useStepperStore } from '@/stores/useStepperStore'

const stepper = useStepperStore()

const columns: QTableColumn[] = [
	{
		name: 'label',
		label: 'Язык',
		field: 'label',
		align: 'left',
		sortable: true,
	},
	{
		name: 'code',
		label: 'Код',
		field: 'code',
		align: 'right',
		sortable: true,
	},
]

const adding = ref()

const options = [
	{ label: 'Английский', value: 'Английский', code: 1033 },
	{ label: 'Казахский', value: 'Казахский', code: 1087 },
	{ label: 'Китайский', value: 'Китайский', code: 2052 },
	{ label: 'Латышский', value: 'Латышский', code: 1062 },
	{ label: 'Немецкий', value: 'Немецкий', code: 1031 },
	{ label: 'Польский', value: 'Польский', code: 1045 },
	{ label: 'Русский', value: 'Русский', code: 1049 },
	{ label: 'Турецкий', value: 'Турецкий', code: 1055 },
	{ label: 'Украинский', value: 'Украинский', code: 1058 },
	{ label: 'Французский', value: 'Французский', code: 1036 },
	{ label: 'Японский', value: 'Японский', code: 1041 },
]

const action = () => {
	if (adding.value) {
		stepper.step3.lang.push(adding.value)
	}
}
</script>

<template lang="pug">
.all900
	.arch
		.text-bold Индексируемые языки
		q-table.q-mt-md(
			:rows="stepper.step3.lang"
			:columns="columns"
			row-key="code"
			flat
			hide-pagination
			v-model:pagination="pagination"
		)
		.grid
			MySelect(v-model="adding" :options="options")
			q-btn(unelevated color="secondary" label="Добавить" @click="action" size='sm')
</template>

<style scoped lang="scss">
.all900 {
	max-width: 500px;
}
.grid {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	column-gap: 0.5rem;
}
</style>
