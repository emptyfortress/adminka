<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SearchDBTable from '@/components/tree/SearchDBTable.vue'

const Prop = ref([
	{
		id: 0,
		main: '',
		label: 'Сервер приложений',
		descr:
			'Выбор зарегистрированного Сервера приложений, к которому подключается сервис Полнотекстового поиска.',
		select: true,
		options: ['Адрес 1', 'Адрес 2', 'Адрес 3', 'Адрес 4', 'Адрес 5', 'Адрес 6'],
	},
	{
		id: 2,
		main: '',
		label: 'Имя системного пользователя',
		descr: 'Имя системной учётной записи в формате user@domain.com.',
	},
	{
		id: 4,
		main: '',
		label: 'Пароль системного пользователя',
		descr: 'Пароль системного пользователя для внутренней работы веб-клиента.',
	},
	{
		id: 6,
		main: '',
		label: 'Штамп сертификата шифрования паролей',
		descr:
			'Штамп сертификата, который должен использоваться для работы с зашифрованным данными конфигурации сервиса Полнотекстового поиска.',
	},
])

const serverSelected = ref(false)
const update = () => {
	serverSelected.value = true
}
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
			:select='item.select'
			:options='item.options'
			@update='update'
			)
			div(v-if='serverSelected && item.id == 0')
				SearchDBTable

</template>

<style scoped lang="scss"></style>
