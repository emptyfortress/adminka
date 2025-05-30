<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SearchDBTable from '@/components/tree/SearchDBTable.vue'

const Prop = ref([
	{
		id: 0,
		main: '',
		label: 'Сервер приложений',
		descr: 'Адрес сервера приложений, к которому подключается сервис Workflow',
		select: true,
		options: ['Адрес 1', 'Адрес 2', 'Адрес 3', 'Адрес 4', 'Адрес 5', 'Адрес 6'],
	},
	{
		id: 2,
		main: '',
		label: 'База данных',
		descr:
			'Подключаемая база данных. Если поле не заполнено, используется база по умолчанию.',
	},
	{
		id: 3,
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
		id: 5,
		main: '',
		label: 'API-ключ для подключения к Workflow',
		descr:
			'API-ключ для подключения к модулю Серверу приложений. Должен совпадать со значением ключа, указанным в настройках данного сервиса Workflow.',
	},
	{
		id: 6,
		main: '',
		label: 'Штамп сертификата шифрования паролей',
		descr:
			'Штамп сертификата, который должен использоваться для работы с зашифрованным данными конфигурации сервера Docsvision.',
	},
	{
		id: 7,
		main: '',
		label: 'Сертификат для шифрования и подписания',
		descr:
			'Сертификат, с помощью которого будут выполняться все действия по подписанию и шифрованию в бизнес-процессах.',
	},
	{
		id: 8,
		main: '',
		label: 'Лимит памяти',
		descr:
			'Объем оперативной памяти, выделенной для Сервиса управления бизнес-процессами.',
		type: 'number',
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
			:type="item.type"
			:select='item.select'
			:options='item.options'
			@update='update'
			)
			div(v-if='serverSelected && item.id == 0')
				AppServerWorkflow

</template>

<style scoped lang="scss"></style>
