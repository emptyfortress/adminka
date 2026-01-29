<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const props = defineProps({
	db: {
		type: String,
		required: true,
		default: '',
	},
})
const commonProp = ref([
	{
		id: 0,
		main: props.db,
		label: 'База данных',
		descr: 'Название текущей базы, подключенной к ПП.',
		readonly: true,
	},
	{
		id: 1,
		main: 'http://tux.digdes.com:9200/',
		label: 'Хранилище индексов',
		descr: 'База данных, которая используется для хранения индексов.',
		readonly: true,
	},
	{
		id: 2,
		main: 'D:/\Microsoft SQL Server/\MSSQL15.MSSQLSERVER/\MSSQL/\DATA',
		label: 'Полнотекстовое хранилище',
		descr:
			'Путь к локальному каталогу, где SQL Server хранит данные полнотекстового поиска.',
		readonly: false,
	},
	{
		id: 3,
		main: '100',
		label: 'Количество потоков',
		descr: 'Количество параллельных потоков для индексирования документов',
		readonly: false,
		type: 'number',
	},
	{
		id: 4,
		main: '100',
		label: 'Максимальный размер транзакции, Мбайт',
		descr:
			'Ограничивает максимальный объём данных, обрабатываемых за одну транзакцию при индексировании.',
		readonly: false,
		type: 'number',
	},
])
</script>

<template lang="pug">
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in commonProp" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:type="item.type"
		)
</template>

<style scoped lang="scss"></style>
