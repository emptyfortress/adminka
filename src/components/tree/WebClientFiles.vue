<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const Files = ref([
	{
		id: 0,
		main: 'rtf|dot|doc|dotx|ods|docx|odt|csv|xlt|xls|xltx|xlsx|pdf|jpg|jpeg|gif',
		label: 'Разрешённые для добавления файлы',
		descr: 'Настройка допустимых расширений файлов через символ "|".',
	},
	{
		id: 1,
		main: '0',
		label: 'Максимальный размер прикладываемого файла, байт',
		descr: 'Минимальный интервал между запросами даты изменения справочника',
		type: 'number',
	},
	{
		id: 2,
		main: '0',
		label: 'Максимальный размер карточки',
		descr:
			'Ограничение для максимального размера тела http-запроса. Значение не должно превышать 4294967295',
		type: 'number',
	},
	{
		id: 3,
		main: '600',
		label: 'Максимальный размер файлов для предпросмотра, байт',
		descr: 'Ограничение для максимального размера файла для предпросмотра.',
		type: 'number',
	},
])
const Files1 = ref([
	{
		id: 0,
		label: 'Компонент для предпросмотра',
		descr: 'Компонент, использующийся для предварительного просмотра файлов',
		// descr: 'Режим закрепления основного меню',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Предпросмотр отключен', val: '1' },
			{ label: 'Предпросмотр с помощью Р7', val: '2' },
		],
	},
])

const Office = ref([
	{
		id: 0,
		main: 'https://dvserver.preview.com',
		label: 'Адрес сервера документов Р7-Офис/OnlyOffice',
		descr: 'URL сервера документов Р7-Офис/OnlyOffice',
	},
	{
		id: 1,
		main: 'https://dvserver.preview.com',
		label: 'Адрес сервера документов Р7-Офис/OnlyOffice',
		descr: 'URL сервера документов Р7-Офис/OnlyOffice',
	},
	{
		id: 2,
		main: '/tmp/upload',
		label: 'Каталог загрузки консолидируемых файлов',
		descr: 'Каталог загрузки консолидируемых файлов',
	},
	{
		id: 3,
		main: '',
		label: 'Секретное слово',
		descr: 'Использование токена для настройки безопасной работы с Р7-Офис',
	},
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Files" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:type='item.type'
			)
		SimpleRadioGroup(
			v-for="item in Files1" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)

	.section Настройка Р7-Офис
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Office" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			)
	//
	//
	// .section Счетчики
	// q-list
	// 	MyField(
	// 		v-model:main="item.main" 
	// 		v-for="item in Count" 
	// 		:key="item.id" 
	// 		:label="item.label" 
	// 		:descr="item.descr" 
	// 		:readonly="item.readonly"
	// 		:type='item.type'
	// 		)
	//
	// .section Кэш справочников
	// q-list
	// 	SimpleRadioGroup(
	// 		v-for="item in Dict" 
	// 		:key="item.id" 
	// 		:label="item.label" 
	// 		:descr="item.descr" 
	// 		:disable="item.disable"
	// 		:startValue="item.startValue"
	// 		:group="item.group"
	// 		)
	// 	MyField(
	// 		v-model:main="item.main" 
	// 		v-for="item in Dict1" 
	// 		:key="item.id" 
	// 		:label="item.label" 
	// 		:descr="item.descr" 
	// 		:readonly="item.readonly"
	// 		)

</template>

<style scoped lang="scss"></style>
