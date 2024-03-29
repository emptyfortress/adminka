<script setup lang="ts">
import { ref, reactive } from 'vue'
import MyField from '@/components/common/MyField.vue'

const props = defineProps({
	bd: Object,
})

const commonProp = ref([
	{
		id: 0,
		main: props.bd.name,
		label: 'Имя базы данных',
		descr: 'This is description',
		readonly: true,
	},
	{
		id: 1,
		main: props.bd.psevdo,
		label: 'Псевдоним',
		descr: 'This is description',
		readonly: true,
	},
	{
		id: 2,
		main: props.bd.server,
		label: 'Server SQL',
		descr: 'This is description',
		readonly: true,
	},
	{
		id: 3,
		main: props.bd.servertype,
		label: 'Тип сервера',
		descr: 'This is description',
		readonly: true,
	},
	{
		id: 4,
		main: props.bd.version,
		label: 'Версия',
		descr: 'This is description',
		readonly: true,
	},
	{
		id: 5,
		main: props.bd.date,
		label: 'Дата последнего обновления',
		readonly: true,
	},
	{
		id: 6,
		label: 'Использовать по умолчанию',
		checkbox: true,
		check: props.bd.def,
		descr: 'Данная база используется по умолчанию',
	},
])

const options = [
	'UseDefaultOrCurrent',
	'UseOwnDatabase',
	'UseOuterDatabase',
	'UseTemporaryDatabase',
]
const tables = reactive([
	{
		id: 0,
		select: true,
		label: 'ChangeObjectDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 1,
		select: true,
		label: 'CursorDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 2,
		select: true,
		label: 'FileCursorDataBaseType',
		val: 'UseOwnDatabase',
	},
	{
		id: 3,
		select: true,
		label: 'IconDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 4,
		select: true,
		label: 'KeysetDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 5,
		select: true,
		label: 'SearchDataBaseType',
		val: 'UseTemporaryDatabase',
	},
])
const test = ref('fuck')
</script>

<template lang="pug">
q-form
	.section Общие свойства
	q-list
		MyField(
			v-model:main="item.main" 
			v-model:check="item.check" 
			v-for="item in commonProp" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable" 
			:readonly="item.readonly"
			:checkbox="item.checkbox")
		
	.section Расположение таблиц
	q-list
		MyField(
			v-model:main="item.val" 
			v-model:check="item.check" 
			v-for="item in tables" 
			:key="item.id" 
			:label="item.label" 
			:select="item.select"
			:options="options"
			descr="This is description" 
			:disable="item.disable" 
			)

</template>

<style scoped lang="scss"></style>
