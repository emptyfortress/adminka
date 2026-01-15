<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStepperStore } from '@/stores/useStepperStore'
import MyInput from '@/components/common/MyInput.vue'
import MySelect from '@/components/common/MySelect.vue'

const stepper = useStepperStore()

const emit = defineEmits<{
	(e: 'select-flow', value: 'A' | 'B'): void
	(e: 'next'): void
}>()

const group = ref(null)

const options = [
	{
		label: 'Elasticsearch',
		value: 'B',
	},
	{ label: 'MSSQL Server Full-Text Search', value: 'A' },
]

const options1 = [
	{
		label: 'Создавать внешнюю базу по умолчанию',
		value: 'create',
	},
	{ label: 'Использовать существующую базу', value: 'use' },
]

const options2 = [
	{
		label: 'Локальная БД',
		value: 'local',
	},
	{ label: 'Внешняя БД', value: 'external' },
]

watch(
	() => stepper.step2.flow,
	(e: any) => {
		emit('select-flow', e)
	}
)

watch(
	() => stepper.step2.db,
	() => {
		if (stepper.step2.db == 'local') {
			stepper.step2.servertype = 'MSSQL Server'
			stepper.step2.servername = 'vega'
			stepper.step2.checkvalid = 'SQLServer'
			stepper.step2.login = 'sa'
			stepper.step2.pass = '***********'
			stepper.step2.database = 'DvShowCase_Ft'
		}
		if (stepper.step2.db == 'external') {
			stepper.step2.servertype = ''
			stepper.step2.servername = ''
			stepper.step2.checkvalid = ''
			stepper.step2.login = ''
			stepper.step2.pass = ''
			stepper.step2.database = ''
		}
	}
)

const ser = ['MSSQL Server', 'PostgreSQL']
const che = ['SQL Server']
</script>

<template lang="pug">
.all900
	.arch
		.grid
			.text-bold.q-mt-sm Выберите систему поиска:

			q-option-group(
				:options="options"
				type="radio"
				v-model="stepper.step2.flow")

	br
	transition(name='slide-top')
		.arch(v-if='stepper.payload.flow == "A"')
			.grid
				.text-bold.q-mt-sm Использовать базу:

				q-option-group(
					:options="options2"
					type="radio"
					v-model="stepper.step2.db")

	transition(name='slide-top')
		.arch(v-if='stepper.payload.flow == "B"')
			.grid1
				.text-bold.q-mt-xs Адрес сервиса Elasticsearch:
				MyInput(v-model="stepper.step2.elasticurl")
				q-btn(unelevated color="secondary" label="Тест" size='sm')

	transition(name='slide-top')
		.arch(v-if='stepper.payload.flow == "A" && stepper.payload.db.length')
			.grid
				.text-bold Настройки:
				.grid2.q-ml-sm
					label Тип сервера:
					MySelect(v-model="stepper.step2.servertype" :options='ser')
					label Имя сервера:
					MyInput(v-model="stepper.step2.servername")
					label Проверка подлинности:
					MySelect(v-model="stepper.step2.checkvalid" :options='che')
					label Логин:
					MyInput(v-model="stepper.step2.login")
					label Пароль:
					MyInput(v-model="stepper.step2.pass")
					label База данных:
					MyInput(v-model="stepper.step2.database")

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
	align-items: start;
	column-gap: 0.5rem;
}
.grid2 {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	column-gap: 0.5rem;
	row-gap: 0.25rem;
}
</style>
