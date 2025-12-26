<script setup lang="ts">
import { ref, watch } from 'vue'
// import type { FlowType } from '@/stores/useStepperStore'
import { useStepperStore } from '@/stores/useStepperStore'
import MyInput from '@/components/common/MyInput.vue'
import MyField from '@/components/common/MyField.vue'

const stepper = useStepperStore()

const emit = defineEmits<{
	(e: 'select-flow', value: 'A' | 'B'): void
	(e: 'next'): void
}>()

const group = ref(null)
const options = [
	{
		label: 'Использовать внешний полнотекстовый поиск Elasticsearch',
		value: 'B',
	},
	{ label: 'Использовать локальную базу данных', value: 'A' },
]

const options1 = [
	{
		label: 'Создавать внешнюю базу по умолчанию',
		value: 'create',
	},
	{ label: 'Использовать существующую базу', value: 'use' },
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
.all900
	.arch
		.grid
			.text-bold.q-mt-sm Выберите хранилище:

			q-option-group(
				:options="options"
				type="radio"
				v-model="group")

	br
	transition(name='slide-top')
		.arch(v-if='stepper.payload.flow == "A"')
			.row.items-center.q-gutter-x-lg
				.text-bold Использовать внешнюю базу:
				q-checkbox(v-model="stepper.step2.extcards" label='Для карточек' dense)
				q-checkbox(v-model="stepper.step2.extfiles" label='Для файлов' dense)
				q-checkbox(v-model="stepper.step2.extcatalogs" label='Для справочников' dense)
	transition(name='slide-top')
		.arch(v-if='stepper.payload.flow == "B"')
			.grid1
				.text-bold Адрес сервиса Elasticsearch:
				MyInput(v-model="stepper.payload.elasticurl")
				q-btn(unelevated color="secondary" label="Тест" size='sm') 
	transition(name='slide-top')
		.arch(v-if='stepper.payload.flow == "A" && stepper.payload.extcards || stepper.payload.extfiles || stepper.payload.extcatalogs')
			.grid
				.text-bold.q-mt-sm Настройки внешней базы:
				q-option-group(
					:options="options1"
					type="radio"
					v-model="stepper.payload.externaldb")
			// template(v-if='stepper.payload.externaldb == "create"')
			// 	q-separator
			// 	.grid.q-mt-md
			// 		div Строка подключения внешней базы
			// 		MyInput(v-model="stepper.payload.elasticurl")
</template>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-template-columns: 200px 1fr;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.grid1 {
	display: grid;
	grid-template-columns: 200px 1fr auto;
	align-items: center;
	column-gap: 0.5rem;
}
</style>
