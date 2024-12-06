<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const One = ref([
	{
		id: 0,
		main: 'https://stenddss.cryptopro.ru',
		label: 'Адрес сервера',
		descr: 'Адрес сервиса облачной подписи',
		readonly: false,
	},
	{
		id: 1,
		main: 'docsvision',
		label: 'Клиент ID',
		descr: 'Идентификатор клиента',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Адрес сервиса штампа времени',
		descr: 'Адрес сервиса штампа времени',
		readonly: false,
	},
	{
		id: 3,
		main: 'BES',
		label: 'Тип подписи',
		descr: 'Формат используемой подписи в стандарте CAdES',
		select: true,
		readonly: false,
	},
	{
		id: 4,
		main: '',
		label: 'URL для переадресации после авторизации',
		descr:
			'Адрес, на который будет переадресован пользователь после авторизации в сервисе электронной подписи',
		readonly: false,
	},
	{
		id: 5,
		main: 'InMemory',
		label: 'Режим хранения токена',
		descr: 'Режим хранения токена авторизации',
		readonly: false,
		select: true,
	},
	{
		id: 6,
		main: 'stenddssds',
		label: 'Адрес сервиса обработки документов',
		descr: 'Параметр: "DocumentStoreAppName".',
		readonly: false,
	},
	{
		id: 7,
		main: 'SignServer',
		label: 'Сервис подписи',
		descr: 'Параметр: "SignServerAppName".',
		readonly: false,
	},
	{
		id: 8,
		main: 'STS',
		label: 'Центр идентификации',
		descr: 'Параметр: "STSAppName".',
		readonly: false,
	},
])

const Radio = ref([
	{
		id: 0,
		label: 'Режим проверки',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Через облако', val: '1' },
			{ label: 'Локально', val: '2' },
		],
	},
])
const Radio1 = ref([
	{
		id: 0,
		label: 'Обновление агрегатов и списков карточек',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Автоматически', val: '1' },
			{ label: 'По кнопке "Применить"', val: '2' },
		],
	},
])

const Two = ref([
	{
		id: 0,
		main: '',
		label: 'Механизм формирования электронной подписи',
		info: 'При включенном флаге вместо передачи данных, передаётся хэш файла для подписания',
		descr: 'Вычислять хэш подписываемых данных',
		readonly: false,
		check: true,
		checkbox: true,
	},
	{
		id: 2,
		main: 'Content/App/Assets/Images/shield.png',
		label: 'Логотип электронной подписи',
		descr: 'Логотип для штампа ЭП',
		readonly: false,
	},
])
const Three = ref([
	{
		id: 0,
		main: '1000',
		label: 'Автообновление через, мс',
		type: 'number',
		readonly: false,
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
			:descr='item.descr'
			:readonly="item.readonly"
			:select="item.select"
			)
	.section Штамп ЭП
	MyField(
		v-model:main="item.main" 
		v-for="item in Two" 
		:key="item.id" 
		:label="item.label" 
		:descr='item.descr'
		:readonly="item.readonly"
		:check='item.check'
		:checkbox='item.check'
		)

		// SimpleRadioGroup(
		// 	v-for="item in Radio" 
		// 	:key="item.id" 
		// 	:label="item.label" 
		// 	:disable="item.disable"
		// 	:startValue="item.startValue"
		// 	:group="item.group"
		// )
		// MyField(
		// 	v-model:main="item.main" 
		// 	v-for="item in Two" 
		// 	:key="item.id" 
		// 	:label="item.label" 
		// 	:readonly="item.readonly"
		// 	:select="item.select"
		// 	:options="item.options"
		// 	)
		// SimpleRadioGroup(
		// 	v-for="item in Radio1" 
		// 	:key="item.id" 
		// 	:label="item.label" 
		// 	:disable="item.disable"
		// 	:startValue="item.startValue"
		// 	:group="item.group"
		// )
		// MyField(
		// 	v-model:main="item.main" 
		// 	v-for="item in Three" 
		// 	:key="item.id" 
		// 	:label="item.label" 
		// 	:readonly="item.readonly"
		// 	:type="item.type"
		// 	)

</template>

<style scoped lang="scss"></style>
