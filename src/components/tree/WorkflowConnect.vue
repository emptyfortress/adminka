<script setup lang="ts">
import { ref, watch } from 'vue'
import MyField from '@/components/common/MyField.vue'

const Prop = ref([
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

const address = ref('')
const options = [
	'Адрес 1',
	'Адрес 2',
	'Адрес 3',
	'Адрес 4',
	'Адрес 5',
	'Адрес 6',
]

const connected = ref(false)
const loading = ref(false)

const connect = () => {
	loading.value = true
	setTimeout(() => {
		connected.value = true
		loading.value = false
	}, 1000)
}

watch(address, val => {
	if (val) {
		connected.value = false
	}
})

const bds = ref([
	{
		id: 0,
		nam: 'AGSupport',
		props: [
			{
				id: 0,
				main: '',
				label: 'Доля процессов',
				descr:
					'Маховик требует перейти к поступательно перемещающейся системе координат. ',
			},
			{
				id: 1,
				main: '',
				label: 'Почтовое соединение',
				descr: 'Маховик требует перейти. ',
			},
		],
	},
	{
		id: 1,
		nam: 'AGTest',
		props: [
			{
				id: 0,
				main: '',
				label: 'Доля процессов',
				descr:
					'Маховик требует перейти к поступательно перемещающейся системе координат. ',
			},
			{
				id: 1,
				main: '',
				label: 'Почтовое соединение',
				descr: 'Маховик требует перейти. ',
			},
		],
	},
	{
		id: 2,
		nam: 'DBProd',
		props: [
			{
				id: 0,
				main: '',
				label: 'Доля процессов',
				descr:
					'Маховик требует перейти к поступательно перемещающейся системе координат. ',
			},
			{
				id: 1,
				main: '',
				label: 'Почтовое соединение',
				descr: 'Маховик требует перейти. ',
			},
		],
	},
])
</script>

<template lang="pug">
MyField(
	v-model:main="address"
	label='Сервер приложений'
	descr='Адрес сервера приложений, к которому подключается сервис Workflow'
	:select='true'
	:options="options"
	@update='update'
)
	q-btn.q-mt-sm(unelevated color="secondary" label="Connect" @click="connect" size="sm" :loading="loading" v-if='serverSelected && !connected')

.dat
	label Обработка баз данных
	.descr Здесь описание раздела. Уравнение малых колебаний, согласно третьему закону Ньютона, активно.

	template(v-for="bd in bds" :key="bd.id" v-if='connected')
		.bd
			.nnn
				q-icon.q-mr-sm(name="mdi-database" color="secondary")
				|{{ bd.nam }}
			MyField(v-for="item in bd.props"
				v-model:main="item.main"
				:label='item.label'
				:descr='item.descr'
			)

	.fu(v-else)
		q-icon.q-mr-sm(name="mdi-alert" size='sm')
		|Необходимо подключиться к серверу, чтобы настроить обработку БД.

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


</template>

<style scoped lang="scss">
.q-input {
	margin-top: 0;
}
.dat {
	padding: 1rem;
	padding-top: 0.3rem;
	margin-left: 1rem;
	border: 1px solid transparent;
	.descr {
		color: #666 !important;
		font-size: 0.8rem !important;
		font-weight: 400 !important;
	}
	label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
	}
}
.block {
	margin-left: 2rem;
}
.nnn {
	color: $secondary;
	font-size: 1.1rem;
	font-weight: 600;
}
.fu {
	border: 1px solid #ccc;
	padding: 1rem;
	font-weight: 600;
	color: $secondary;
}
</style>
