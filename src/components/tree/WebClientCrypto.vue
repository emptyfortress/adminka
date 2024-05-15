<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const One = ref([
	{
		id: 0,
		main: 'https://stenddss.cryptopro.ru',
		label: 'Адрес сервера',
		readonly: false,
	},
	{
		id: 1,
		main: 'docsvision',
		label: 'Клиент ID',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Имена сайтов',
		descr: 'Имена сайтов в IIS на сервере КриптоПро DSS',
		readonly: false,
	},
	{
		id: 3,
		main: '',
		label: 'URL для проверки подлинности подписи',
		readonly: false,
	},
	{
		id: 4,
		main: '',
		label: 'Адрес сервиса штампа времени для XLT1',
		readonly: false,
	},
	{
		id: 5,
		main: 'BES',
		label: 'Тип подписи',
		select: true,
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
		main: 'http://localhost/DocsvisionWebClient/api/CryptoProDss/AcceptAuthorization',
		label: 'URL для переадресации после проверки',
		readonly: false,
	},
	{
		id: 1,
		main: 'InMemory',
		label: 'Режим хранения токена',
		readonly: false,
		select: true,
		options: ['InMemory', '1', '2'],
	},
	{
		id: 2,
		main: 'Content/App/Assets/Images/shield.png',
		label: 'Логотип облачной подписи',
		readonly: false,
		select: true,
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
			:descr="item.descr" 
			:readonly="item.readonly"
			:select="item.select"
			)
		SimpleRadioGroup(
			v-for="item in Radio" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)
		MyField(
			v-model:main="item.main" 
			v-for="item in Two" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:select="item.select"
			:options="item.options"
			:nodescr="item.nodescr"
			)
		SimpleRadioGroup(
			v-for="item in Radio1" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)
		MyField(
			v-model:main="item.main" 
			v-for="item in Three" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:select="item.select"
			:type="item.type"
			)

</template>

<style scoped lang="scss"></style>
