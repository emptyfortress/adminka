<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'
import DostupGroup from '@/components/tree/DostupGroup.vue'
import AppServerCatalog from '@/components/tree/AppServerCatalog.vue'

const win = ref([
	{ id: 0, label: 'Использовать протокол', main: 'Веб-сервис (http + soap)' },
	{
		id: 1,
		label: 'Адрес сервера при подключении',
		main: 'http://company.com/DocsVision/StorageServer',
	},
])
const dop = ref([
	{
		id: 0,
		label: 'Адрес сайта при подключении через внешнюю сеть и по http',
		main: 'http://company.com/DocsVision/StorageServer',
	},
	{
		id: 1,
		label: 'Запретить встроенную аутентификацию',
		checkbox: true,
		check: false,
	},
])
const session = ref([
	{
		id: 0,
		label: 'Автоматически отключать сессии, не активные более, мин.',
		descr:
			'Допустимое время неактивности пользовательской сессии, по истечении которого сессия будет принудительно закрыта сервером.',
		main: '300',
		type: 'number',
	},
])
const check = ref(true)
const auth = ref([
	{
		id: 0,
		main: '',
		check: true,
		label: 'Базовая аутентификация',
		info: 'Вход с использованием логина/пароля.',
		descr: 'Разрешать базовую аутентификацию',
		readonly: false,
		checkbox: true,
	},
	{
		id: 1,
		main: '',
		check: true,
		label: 'Прозрачная аутентификация',
		info: 'Вход по технологии Single Sign-On',
		descr: 'Разрешать прозрачную аутентификацию',
		readonly: false,
		checkbox: true,
	},
])
const cat = ref([
	{
		id: 0,
		main: 'domain.com',
		label: 'Полное имя домена',
		descr: 'Полное имя домена указывается в формате domain.com',
		readonly: false,
	},
	{
		id: 1,
		main: 'DOMAIN',
		label: 'NetBios-имя домена',
		descr: 'NetBios-имя домена указывается в формате DOMAIN',
		readonly: false,
	},
])
</script>

<template lang="pug">
.info Здесь настраиваются подключения пользователей к серверу приложений.
.section Группы пользователей
DostupGroup

.section Аутентификация
MyField(
	v-model:main="item.main" 
	v-model:check="item.check" 
	v-for="item in auth" 
	:key="item.id" 
	:label="item.label" 
	:descr="item.descr" 
	:checkbox="item.checkbox"
	:info='item.info'
	)

AppServerCatalog

.section Управление сессиями
MyField(
	v-model:main="item.main" 
	v-for="item in session" 
	:key="item.id" 
	:label="item.label" 
	:descr='item.descr'
	:type="item.type" 
	)

// .data
	label Открытые сессии (использовано 1 лицензий из 10):
	q-markup-table(flat)
		thead
			tr
				th
				th Пользователь
				th Компьютер
				th Вход
				th Время доступа
		tbody
			tr
				td
					q-checkbox(dense size="sm" v-model="check")
				td company/orlov.v
				td dv105pc
				td 17.11.2022 11:08
				td 17.11.2022 11:08
			tr.bt
				td
				td.q-gutter-x-xs(colspan="4")
					q-btn(size="sm" unelevated color="secondary" label="Обновить") 
					q-btn(size="sm" unelevated color="secondary" label="Закрыть") 
					q-btn(size="sm" unelevated color="secondary" label="Закрыть все") 

</template>

<style scoped lang="scss">
.info {
	margin-left: 2rem;
	color: #666;
}

th,
td {
	padding: 2px 5px;
	text-align: left;
}

.q-table thead tr {
	height: 28px;
	background: #ccc;
}
</style>
