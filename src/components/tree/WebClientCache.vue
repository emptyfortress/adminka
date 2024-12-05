<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const Cache = ref([
	{
		id: 0,
		main: '600',
		label: 'Время обновления кэша папок',
		descr: 'Короткий период обновления кэша',
		type: 'number',
	},
	{
		id: 1,
		main: '1000',
		label: 'Минимальное время обновления кэша справочника представлений, мс',
		descr: 'Минимальный интервал между запросами даты изменения справочника',
		type: 'number',
	},
	{
		id: 2,
		main: '',
		check: true,
		label: 'Кэширование разметок фильтров',
		info: 'Кэширование разметки фильтра грида',
		descr: 'Включить кэширование справочника представлений',
		checkbox: true,
	},
])

const Session = ref([
	{
		id: 0,
		main: '10',
		label: 'Оффлайн режим после паузы, мин',
		descr:
			'Время неактивности пользователя, через которое сессия будет переведена в офлайн-режим',
		readonly: false,
		type: 'number',
	},
	{
		id: 1,
		main: '300',
		label: 'Закрытие сессии после паузы, мин',
		descr:
			'Время неактивности пользователя, через которое сессия будет закрыта',
		readonly: false,
		type: 'number',
	},
	{
		id: 2,
		main: '',
		check: true,
		label: 'Показывать сообщение о переходе в оффлайн',
		info: 'Флаг отключает показ сообщения "Подключение остановлено в связи с отсутствием активности".',
		descr: 'Показывать сообщение о переходе в оффлайн',
		readonly: false,
		checkbox: true,
	},
])

const Count = ref([
	{
		id: 0,
		main: '300',
		label: 'Время обновления счетчика непрочитанных карточек, сек',
		descr: 'Период обновления данных папок',
		readonly: false,
		type: 'number',
	},
	{
		id: 1,
		main: '3000',
		label: 'Задержка работы счетчиков, мс',
		descr:
			'Время с момента загрузки web-клиента, через которое начинают работу счетчики (отправляется запрос)',
		readonly: false,
		type: 'number',
	},
])

const Dict = ref([
	{
		id: 0,
		label: 'Режим обновления справочников',
		descr: 'Режим обновления общих справочников',
		disable: false,
		startValue: '3',
		group: [
			{ label: 'Через указанный интервал времени', val: '1' },
			{ label: 'При следующем обращении', val: '2' },
			{ label: 'Сразу после изменения', val: '3' },
		],
	},
])
const Dict1 = ref([
	{
		id: 0,
		main: '600',
		label: 'Интервал обновления справочников, сек',
		descr: 'Интервал обновления значений справочников или разметок',
		readonly: false,
		type: 'number',
	},
])
</script>

<template lang="pug">
q-form
	.section Пользовательские сессии
	MyField(
		v-model:main="item.main" 
		v-for="item in Session" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:checkbox="item.checkbox"
		:info='item.info'
		:type='item.type'
		:check='item.check'
		)

	.section Кэширование
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Cache" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:checkbox="item.checkbox"
			:info='item.info'
			:type='item.type'
			:check='item.check'
			)


	.section Счетчики
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Count" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:checkbox="item.checkbox"
			:info='item.info'
			:type='item.type'
			:check='item.check'
			)

	.section Кэш справочников
	q-list
		SimpleRadioGroup(
			v-for="item in Dict" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
			)
		MyField(
			v-model:main="item.main" 
			v-for="item in Dict1" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			)

</template>

<style scoped lang="scss"></style>
