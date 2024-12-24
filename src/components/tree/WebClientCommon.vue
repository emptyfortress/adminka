<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const Device = ref([
	{
		id: 0,
		main: '',
		label: 'Новые мобильные устройства',
		descr: 'Шаблон определения мобильных устройств нового поколения',
		readonly: false,
	},
	{
		id: 1,
		main: '',
		label: 'Старые мобильные устройства',
		descr: 'Шаблон определения старых мобильных устройств',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Планшеты',
		descr: 'Шаблон определения планшетов',
		readonly: false,
	},
])

const cookie = ref([
	{
		id: 0,
		main: '0',
		label: 'Интервал автоматического обновления сессии, ч',
		descr: 'Продление действия cookies при входе пользователя в Web-клиент.',
		readonly: false,
		type: 'number',
	},
	{
		id: 1,
		main: '120',
		label: 'Период действия пользовательской сессии, ч',
		descr: 'Период действия пользовательской сессии',
		readonly: false,
		type: 'number',
	},
	{
		id: 2,
		main: '120',
		label:
			'Период действия пользовательской сессии на мобильных устройствах, ч',
		descr: 'Период действия пользовательской сесси на мобильных устройствахи',
		readonly: false,
		type: 'number',
	},
])
const Protokol = ref([
	{
		id: 0,
		main: '0',
		label: 'Использовать http',
		descr: 'Подключение web-клиента по незащищенному протоколу',
		readonly: false,
		checkbox: true,
		check: true
	},
	{
		id: 1,
		main: '0',
		label: 'Использовать https',
		descr: 'Подключение web-клиента по безопасному протоколу',
		readonly: false,
		checkbox: true,
		check: true
	},
])
const Protokol1 = ref([
	{
		id: 0,
		main: '',
		label: 'Сайт',
		descr: 'Адрес подключения к Web-клиенту',
		readonly: false,
		type: 'text'
	},
	{
		id: 1,
		main: '',
		label: 'Порт',
		descr: 'Порт подключения к Web-клиенту',
		readonly: false,
		type: 'number'
	},
])
const Protokol2 = ref([
	{
		id: 0,
		main: '',
		label: 'Сайт',
		descr: 'Адрес подключения к Web-клиенту',
		readonly: false,
		type: 'text'
	},
	{
		id: 1,
		main: '',
		label: 'Порт',
		descr: 'Порт подключения к Web-клиенту',
		readonly: false,
		type: 'number'
	},
	{
		id: 2,
		main: '',
		label: 'Сертификат',
		descr: 'Путь к штампу сертификата',
		readonly: false,
		type: 'text'
	},
	{
		id: 3,
		main: '',
		label: 'Пароль',
		descr: 'Пароль серитфиката',
		readonly: false,
		type: 'text'
	},
])
</script>

<template lang="pug">
q-form
	.section Выбор протокола
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Protokol" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:check="item.check"
			:checkbox="item.checkbox"
			)

	.section Настройка протокола http
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Protokol1" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:type='item.type'
			)

	.section Настройка протокола https
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Protokol2" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:type='item.type'
			)


	.section Пользовательские cookie
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in cookie" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:type='item.type'
			)

	.section Устройства
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Device" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			)

</template>

<style scoped lang="scss"></style>
