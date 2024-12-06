<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const One = ref([
	{
		id: 0,
		main: '/var/log/docsvision/webclient/dvappserver.log',
		label: 'Адрес журнала операций web-клиента',
		descr: 'Путь к файлу журнала Web-клиента',
		readonly: false,
	},
	{
		id: 1,
		main: '',
		label: 'Включить журнал событий навигации',
		info: 'Протоколирование событий навигации',
		descr: 'Включить журнал событий навигации',
		checkbox: true,
		check: true,
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Логирование сообщений браузера',
		info: 'Отправка сообщений браузера в журнал операций web-клиента',
		descr: 'Логировать сообщения браузера',
		checkbox: true,
		check: true,
		readonly: false,
	},
])

const Radio = ref([
	{
		id: 0,
		label: 'Категория Default',
		descr:
			'Глубина фиксации процессов в журнале Web-клиента для категории "Default"',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Все', val: '1' },
			{ label: 'Отладка', val: '2' },
			{ label: 'Информация', val: '3' },
			{ label: 'Предупреждения', val: '4' },
			{ label: 'Ошибки', val: '5' },
		],
	},
	{
		id: 1,
		label: 'Категория Microsoft',
		descr:
			'Глубина фиксации процессов в журнале Web-клиента для категории "Microsoft"',
		disable: false,
		startValue: '4',
		group: [
			{ label: 'Все', val: '1' },
			{ label: 'Отладка', val: '2' },
			{ label: 'Информация', val: '3' },
			{ label: 'Предупреждения', val: '4' },
			{ label: 'Ошибки', val: '5' },
		],
	},
	{
		id: 2,
		label: 'Категория Microsoft.Hosting.Lifetime',
		descr:
			'Глубина фиксации процессов в журнале Web-клиента для категории "Microsoft.Hosting.Lifetime"',
		disable: false,
		startValue: '3',
		group: [
			{ label: 'Все', val: '1' },
			{ label: 'Отладка', val: '2' },
			{ label: 'Информация', val: '3' },
			{ label: 'Предупреждения', val: '4' },
			{ label: 'Ошибки', val: '5' },
		],
	},
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in One" 
			:key="item.id" 
			:label="item.label" 
			:info='item.info'
			:descr='item.descr'
			:readonly="item.readonly"
			:check='item.check'
			:checkbox='item.checkbox'
			)

	.section Уровни логирования
	SimpleRadioGroup(
		v-for="item in Radio" 
		:key="item.id" 
		:label="item.label" 
		:descr='item.descr'
		:disable="item.disable"
		:startValue="item.startValue"
		:group="item.group"
	)

</template>

<style scoped lang="scss"></style>
