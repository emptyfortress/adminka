<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const commonProp = ref([
	{
		id: 0,
		main: 'https://help.docsvision.com/',
		label: 'Адрес сайта документации',
		descr: 'Расположение пользовательской документации',
		readonly: false,
		button: true,
		btLabel: 'Восстановить по умолчанию',
	},
	{
		id: 1,
		main: '',
		label: 'Логин системной учетной записи',
		descr: 'Имя системной учётной записи в формате user@domain.com',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Пароль системной учетной записи',
		descr:
			'Пароль пользователя для подключения к LDAP-каталогам текущего домена',
		readonly: false,
		type: 'password',
	},
	{
		id: 3,
		main: '',
		label: 'Защита пароля системной учетной записи',
		descr: 'Отпечаток закрытого ключа шифрования SHA1',
		readonly: false,
	},
	{
		id: 4,
		main: '',
		label: 'Имя компьютера в текущем домене Active Directory',
		descr:
			'Необходимо указать имя любого компьютера в текущем домене Active Directory. Используется при получении списка доступных членов домена при настройке дискреционной безопасности.',
		readonly: false,
	},
	{
		id: 5,
		main: 'apikey-settingsservice',
		label: 'API-ключ для подключения к Сервису настроек',
		descr: 'API-ключ для подключения к Сервису настроек',
		readonly: false,
	},
	{
		id: 6,
		main: 'apikey-workflow',
		label: 'API-ключ для подключения к Workflow',
		descr: 'API-ключ для подключения к Workflow',
		readonly: false,
	},
])

const journal = ref([
	{
		id: 0,
		main: '/var/log/docsvision/platform/dvappserver.log',
		label: 'Файл журнала',
		descr:
			'Путь к файлу журнала, в котором регистрируются выполняемые сервером операции.',
		readonly: false,
		select: false,
		options: [],
	},
	{
		id: 1,
		main: 'Все операции',
		label: 'Уровень журналирования',
		descr: 'Глубина фиксации процессов в журнале сервера приложений.',
		readonly: false,
		select: true,
		option: [
			'Все операции',
			'Ошибки',
			'Предупреждения',
			'Информация',
			'Отладочные сообщения',
		],
	},
])
const cache = ref([
	{
		id: 0,
		main: '',
		check: true,
		label: 'Файлы',
		readonly: false,
		checkbox: true,
	},
	{
		id: 1,
		main: '',
		check: false,
		label: 'Картинки',
		readonly: false,
		checkbox: true,
	},
	{
		id: 2,
		main: '',
		label: 'Справочники',
		disable: true,
		checkbox: true,
		check: true,
	},
])
const modules = ref([
	{
		id: 0,
		main: '',
		label: 'Проверка версии БД',
		info: 'Когда флаг установлен, сообщение о несоответствии версии базы данных и версии сервера Docsvision вносится в журнал выполняемых сервером операций.',
		descr: 'Проверять версию базы данных',
		readonly: false,
		checkbox: true,
		check: true,
	},
	{
		id: 0,
		main: '',
		label: 'Обновление БД',
		info: 'Флаг включает режим установки модулей без загрузки данных в БД.',
		descr: 'Пропускать обновление БД при установке модулей',
		readonly: false,
		checkbox: true,
		check: false,
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
		:type='item.type'
		:button="item.button"
		:btLabel="item.btLabel"
		)

.section Журналирование
MyField(
	v-model:main="item.main" 
	v-for="item in journal" 
	:key="item.id" 
	:label="item.label" 
	:descr="item.descr" 
	:readonly="item.readonly"
	:select='item.select'
	:options='item.options'
	)

.section Модули
MyField(
	v-model:main="item.main" 
	v-model:check="item.check" 
	v-for="item in modules" 
	:key="item.id" 
	:label="item.label" 
	:descr="item.descr" 
	:checkbox="item.checkbox"
	:info='item.info'
	)

</template>

<style scoped lang="scss">
.bt {
	margin-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.star {
	margin-left: 2rem;
	line-height: 1.2;
	margin-bottom: 1rem;
	color: #666;
}
</style>
