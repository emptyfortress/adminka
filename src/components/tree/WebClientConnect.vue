<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import AppServerCatalog from '@/components/tree/AppServerCatalog.vue'

const Prop = ref([
	{
		id: 0,
		main: 'http://appserverpod.digdes.com:5100',
		label: 'Конфигурация сервера приложений',
		descr: 'Адрес сервера приложений, к которому подключается Web-клиент',
	},
	{
		id: 2,
		main: '',
		label: 'Имя системного пользователя',
		descr: 'Имя системной учётной записи в формате user@domain.com',
	},
	{
		id: 3,
		main: '',
		label: 'Пароль системного пользователя',
		descr: 'Пароль системного пользователя для внутренней работы веб-клиента',
	},
	{
		id: 4,
		main: '3600000',
		label: 'Таймаут подключения, мс',
		descr: 'Максимальное время ожидания ответа от сервера Docsvision',
		type: 'number',
	},
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Prop" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:type="item.type"
			)
AppServerCatalog
</template>

<style scoped lang="scss"></style>
