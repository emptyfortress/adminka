<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const commonProp = ref([
	{
		id: 0,
		main: '',
		label: 'Файл журнала',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 1,
		main: 'http://sol2016.digdes.com:5200/api',
		label: 'Адрес хранилища настроек',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 2,
		main: 'http://online.docs.docsvision.com',
		label: 'Адрес сайта документации',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 3,
		main: '',
		check: true,
		label: 'Проверка версии БД',
		descr: 'Проверять версию базы данных',
		readonly: false,
		checkbox: true,
		checkvalue: false,
	},
	{
		id: 4,
		main: '',
		check: false,
		label: 'Счетчики производительности',
		descr: 'Включить счетчики',
		readonly: false,
		checkbox: true,
		checkvalue: false,
		button: true,
		btLabel: 'Обнулить счетчики',
	},
])
const cache = ref([
	{
		id: 0,
		main: '',
		check: true,
		label: 'Файлы',
		readonly: false,
		checkbox: true,
	},
	{
		id: 1,
		main: '',
		check: false,
		label: 'Картинки',
		readonly: false,
		checkbox: true,
	},
	{
		id: 2,
		main: '',
		check: true,
		label: 'Справочники',
		disable: true,
		checkbox: true,
	},
])
</script>

<template lang="pug">
q-list
	MyField(
		v-model:main="item.main" 
		v-model:check="item.check" 
		v-for="item in commonProp" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:checkbox="item.checkbox"
		:button="item.button"
		:btLabel="item.btLabel"
		)
.section Режим кэширования
MyField(
	v-model:main="item.main" 
	v-model:check="item.check" 
	v-for="item in cache" 
	:key="item.id" 
	:label="item.label" 
	:descr="item.descr" 
	:disable="item.disable"
	:checkbox="item.checkbox"
	:button="item.button"
	:btLabel="item.btLabel"
	)
q-btn.bt(unelevated color="secondary" label="Очистить клиентский кэш" size="sm") 
</template>

<style scoped lang="scss">
.bt {
	margin-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
</style>
