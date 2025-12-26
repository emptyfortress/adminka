<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
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
	{
		name: 'actions',
		label: '',
		field: 'actions',
		align: 'center',
	},
]

const adding = ref()

const allOptions = [
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

const options = computed(() => {
	return allOptions.filter(option => {
		return !stepper.step3.lang.some(lang => lang.code === option.code)
	})
})

const action = () => {
	if (adding.value) {
		stepper.step3.lang.push(adding.value)
		adding.value = null // Clear the adding value after adding
	}
}

const removeLanguage = (index: number) => {
	stepper.step3.lang.splice(index, 1)
}

const pagination = ref({
	sortBy: 'psevdo',
	descending: false,
	rowsPerPage: 10,
})
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
			template(v-slot:body-cell-actions="props")
				q-td(:props="props" auto-width)
					q-icon.rem(name="mdi-close" @click='removeLanguage(props.rowIndex)')
		.grid
			q-select(
				v-model="adding",
				outlined,
				dense,
				:options='options',
				bg-color="white",
				hide-bottom-space
			)
				template(v-slot:option="scope")
					q-item(v-bind="scope.itemProps")
						q-item-section
							q-item-label {{ scope.opt.label }}
						q-item-section(side)
							q-item-label(caption) {{ scope.opt.code }}
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
:deep(.q-field__control) {
	height: 28px;
	min-height: 28px;
	font-size: 0.9rem;
}
:deep(.q-field__native) {
	min-height: 28px;
}
:deep(.q-field__marginal) {
	height: inherit;
}
:deep(.q-icon) {
	width: 0.4rem;
	font-size: 20px;
}
:deep(.q-field__messages) {
	font-size: 0.65rem;
}
:deep(.q-field--auto-height.q-field--dense .q-field__native) {
	min-height: 28px;
}
:deep(.q-field--auto-height.q-field--dense .q-field__control) {
	min-height: 28px;
}
.rem {
	font-size: 14px;
	cursor: pointer;
	color: grey;
	opacity: 0;
	&:hover {
		opacity: 1;
		color: red;
	}
}
</style>
