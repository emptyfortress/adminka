<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { QTableColumn } from 'quasar'

const tmp = [
	{ code: 0, label: 'Нейтральный' },
	{ code: 1049, label: 'Русский' },
	{ code: 1033, label: 'Английский' },
]
const lang = ref([
	{ code: 0, label: 'Нейтральный' },
	{ code: 1049, label: 'Русский' },
	{ code: 1033, label: 'Английский' },
])

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

const changed = ref(false)
const hand = ref(true)

watch(
	lang,
	newVal => {
		if (hand.value) {
			changed.value = true
		}
	},
	{ deep: true }
)
const reset = () => {
	hand.value = false
	lang.value = tmp
	changed.value = false
	setTimeout(() => {
		hand.value = true
	}, 200)
}
const pagination = ref({
	sortBy: '',
	descending: false,
	rowsPerPage: 10,
})

const removeLanguage = (index: number) => {
	lang.value.splice(index, 1)
}
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
		return !lang.value.some(lang => lang.code === option.code)
	})
})

const action = () => {
	if (adding.value) {
		lang.value.push(adding.value)
		adding.value = null // Clear the adding value after adding
	}
}
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" dense color="secondary" @click="reset") 
	.inner(v-if="changed")
	label Полнотекстовые языки
	.descr Языки документов, которые будут поддерживаться в полнотекстовом поиске. Для каждого выбранного языка будет применяться соответствующий морфологический анализатор.

	q-table.q-mt-md(
		:rows="lang"
		:columns="columns"
		row-key="code"
		flat
		hide-pagination
		v-model:pagination="pagination"
	)
		template(v-slot:body-cell-actions="props")
			q-td(:props="props" auto-width)
				q-icon.rem(v-if='props.rowIndex !== 0' name="mdi-delete-outline" @click='removeLanguage(props.rowIndex)')

	.sell
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
.sell {
	max-width: 400px;
	display: flex;
	align-items: end;
	gap: 0.5rem;
	margin-top: 0.5rem;
	.q-select {
		width: 100%;
	}
}

.q-table__container {
	max-width: 400px;
}
.rem {
	font-size: 16px;
	cursor: pointer;
	color: $secondary;
	opacity: 0;
}
:deep(tr) {
	&:hover {
		.rem {
			opacity: 1;
		}
	}
}
:deep(.sell .q-field__control) {
	height: 28px;
	min-height: 28px;
	font-size: 0.9rem;
}
:deep(.sell .q-field__native) {
	min-height: 28px;
}
:deep(.sell .q-field__marginal) {
	height: inherit;
}
:deep(.sell .q-icon) {
	width: 0.4rem;
	font-size: 20px;
}
:deep(.sell .q-field__messages) {
	font-size: 0.65rem;
}
:deep(.sell .q-field--auto-height.q-field--dense .q-field__native) {
	min-height: 28px;
}
:deep(.sell .q-field--auto-height.q-field--dense .q-field__control) {
	min-height: 28px;
}
</style>
