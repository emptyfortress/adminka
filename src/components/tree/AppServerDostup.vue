<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

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
		main: '300',
		type: 'number',
	},
])
const check = ref(true)
</script>

<template lang="pug">
.info Здесь настраиваются подключения пользователей к серверу приложений.
.section Настройки соединения Windows-клиента
MyField(
	v-model:main="item.main" 
	v-for="item in win" 
	:key="item.id" 
	:label="item.label" 
	)

.section Дополнительные настройки
MyField(
	v-model:main="item.main" 
	v-model:check="item.check" 
	v-for="item in dop" 
	:key="item.id" 
	:label="item.label" 
	:checkbox="item.checkbox"
	)

.section Управление сессиями
MyField(
	v-model:main="item.main" 
	v-for="item in session" 
	:key="item.id" 
	:label="item.label" 
	:type="item.type" 
	)
.data
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
