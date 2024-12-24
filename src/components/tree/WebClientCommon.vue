<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import MyRadioGroup3 from '@/components/common/MyRadioGroup3.vue'
import PropertyTab from '../setupcomponent/PropertyTab.vue';

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
		label: 'Интервал автоматического обновления сессии, ч',
		descr: 'Продление действия cookies при входе пользователя в Web-клиент.',
		readonly: false,
	},

])
</script>

<template lang="pug">
q-form
	.section Настройка протокола
	q-list
		MyRadioGroup3(
			v-model:main="item.main" 
			v-for="item in Protokol" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
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
