<script setup lang="ts">
import { ref, reactive } from 'vue'
import MyField from '@/components/common/MyField.vue'

const props = defineProps({
	bd: {
		type: Object,
		default: {
			active: false,
			psevdo: 'AGSupport',
			name: 'AGSupport_1',
			server: 'Docsvision 1',
			index: 'yes',
			version: '4373',
			date: '20.10.2021',
			def: true,
		},
	},
})

const commonProp = ref([
	{
		id: 0,
		main: props.bd.name,
		label: 'Имя базы данных',
		descr: 'Название базы данных, с которым она создана в СУБД',
		readonly: true,
	},
	{
		id: 1,
		main: props.bd.psevdo,
		label: 'Псевдоним',
		descr: 'Название базы данных, с которым она зарегистрирована в Docsvision',
		readonly: true,
	},
	{
		id: 2,
		main: props.bd.server,
		label: 'Server SQL',
		descr: 'Сетевое имя сервера баз данных',
		readonly: true,
	},
	{
		id: 3,
		main: props.bd.servertype,
		label: 'Тип сервера',
		descr: 'Тип сервера баз данных, под управлением которого работает БД',
		readonly: true,
	},
	{
		id: 4,
		main: props.bd.version,
		label: 'Версия',
		descr: 'Версия базы данных',
		readonly: true,
	},
	{
		id: 5,
		main: props.bd.date,
		label: 'Дата обновления',
		descr: 'Дата последнего обновления',
		readonly: true,
	},
	// {
	// 	id: 6,
	// 	label: 'Использовать по умолчанию',
	// 	checkbox: true,
	// 	check: props.bd.def,
	// 	descr: 'Данная база используется по умолчанию',
	// },
	{
		id: 7,
		label: 'Сателитные БД',
		info: 'Дополнительная база данных для хранения архивных карточек, системных данных и журналов работы. Используется только в MSSQL Server',
		checkbox: true,
		check: false,
		descr: 'Использовать сателитные БД',
		disable: true,
	},
	{
		id: 8,
		label: 'Метаданные',
		info: 'Возможность добавлять в карточку новые секции и поля с помощью Конструктора разметок',
		checkbox: true,
		check: true,
		descr: 'Используются расширенные метаданные',
		disable: true,
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
			:info="item.info"
			:readonly="item.readonly"
			:disable="item.disable"
			:checkbox="item.checkbox")
		
	.section Расположение таблиц
	.descr Место размещения служебных таблиц, используемых сервером Docsvision для хранения временных данных: внутренних курсоров, курсоров для работы с файлами и иконками, промежуточных данных представлений, результатов поисковых запросов и прочих.
	q-list
		MyField(
			v-model:main="item.val" 
			v-for="item in tables" 
			:key="item.id" 
			:label="item.label" 
			:select="item.select"
			:options="options"
			descr="This is description" 
			)

</template>

<style scoped lang="scss">
.descr {
	color: #666;
	margin-left: 2rem;
	margin-bottom: .5rem;
}
</style>
