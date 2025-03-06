<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const Prop = ref([
	{
		id: 0,
		main: '',
		label: 'Файл журнала',
		descr: 'Путь к файлу журнала, в котором регистрируются операции, выполняемые сервером workflow.',
	},
])
const deep = ref([
	{
		id: 0,
		label: 'Уровень журналирования',
		descr: 'Глубина фиксации процессов в журнале сервера Workflow.',
		disable: false,
		startValue: '0',
		group: [
			{ label: 'Отключено', val: '0' },
			{ label: 'Ошибки', val: '1' },
			{ label: 'Предупреждения', val: '2' },
			{ label: 'Информация', val: '3' },
			{ label: 'Подробное журналирование', val: '4' },
		],
	},
])
const date = ref([
	{
		id: 0,
		main: '',
		label: 'Форматирование даты',
		descr: 'Формат даты штампа времени в имени файла журнала.',
	},

])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Prop" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			)

SimpleRadioGroup(
	v-for='item in deep'
	:key='item.id'
	:label='item.label'
	:descr='item.descr'
	:startValue='item.startValue'
	:group='item.group'
)

q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in date" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			)
</template>

<style scoped lang="scss">
label {
	font-size: 1rem;
	font-weight: 600;
	color: #666;
}
</style>
