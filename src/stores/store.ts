import { uid } from 'quasar'
import { defineStore } from 'pinia'
import { useServer } from '@/stores/server'
import { useAccess } from '@/stores/access'
import { useBp } from '@/stores/bp'
import { useWebConfig } from '@/stores/webconfig'

interface Connection {
	name: string
}

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		connections: [{ name: 'SOL2016' }],
		config: [
			{ id: 'SOL2016', name: 'SOL2016' },
			{ id: 'SOL2017', name: 'SOL2017' },
		],
		conputer: [
			{ id: 0, name: 'AGSupport' },
			{ id: 1, name: 'test' },
		],
		webconfig: [
			{ id: 0, name: 'Config 1' },
			{ id: 1, name: 'Config 2' },
		],
		tabs: 'SOL2016',
		tabs1: 'AGSupport',
		tabs2: 'Config 1',
		params: [
			{
				id: 0,
				key: 'DV_Docsvision_Platform_5.5_Server Databases Docsvision DB',
				value: '',
			},
			{
				id: 1,
				key: 'DV_Docsvision__Platform_5.5_Server_DefaultBaseName',
				value: '',
			},
			{ id: 2, key: 'DV_Groups_Docs Vision Administrators 0', value: '' },
			{ id: 3, key: 'DV_Groups_Docs Vision Administrators 1', value: '' },
			{
				id: 4,
				key: 'DV_Groups_DocsVision Security Administrators_0',
				value: '',
			},
			{ id: 5, key: 'DV_Security_Jwt_Securitykey', value: '' },
			{ id: 6, key: 'DV_Security_Jwt_Issuer', value: '' },
			{ id: 7, key: 'DV_Domains_o', value: '' },
			{ id: 8, key: 'DV_Ldap_Credential_UserName', value: '' },
			{ id: 9, key: 'DV_Ldap_Credential_Password', value: '' },
			{ id: 10, key: 'DV_APIKEY', value: '' },
			{ id: 11, key: 'DV_Logging_LogLevel_Default', value: '' },
			{ id: 12, key: 'KRBS_KTNAME', value: '' },
		],
		panels: [
			{ id: 0, neg: false, expanded: false, change: false, title: 'Лицензия' },
			{
				id: 1,
				neg: false,
				expanded: false,
				change: false,
				title: 'Базы данных',
			},
			{
				id: 2,
				neg: false,
				expanded: false,
				change: false,
				title: 'Общие настройки',
			},
			{
				id: 3,
				neg: false,
				expanded: false,
				change: false,
				title: 'Управление доступом',
			},
			{
				id: 4,
				neg: false,
				expanded: false,
				change: false,
				title: 'Расширенная аутентификация',
			},
		],
		panelsBP: [
			{
				id: 0,
				neg: false,
				expanded: false,
				change: false,
				title: 'Общие настройки',
			},
			{
				id: 1,
				neg: false,
				expanded: false,
				change: false,
				title: 'Сервис бизнес-процессов',
			},
			{
				id: 2,
				neg: false,
				expanded: false,
				change: false,
				title: 'Настройки почты',
			},
			// { id: 2, neg: false, expanded: false, change: false, title: 'Сервисы workflow' },
		],
		panelsWeb2: [
			{
				id: 5,
				neg: false,
				expanded: false,
				change: false,
				title: 'Подключение к серверу приложений',
			},
			{
				id: 0,
				neg: false,
				expanded: false,
				change: false,
				title: 'Общие настройки',
			},
			{ id: 2, neg: false, expanded: false, change: false, title: 'Система' },
		],
		panelsWeb1: [
			{
				id: 5,
				neg: false,
				expanded: false,
				change: false,
				title: 'Подключение к серверу приложений',
			},
			{
				id: 0,
				neg: false,
				expanded: false,
				change: false,
				title: 'Общие настройки',
			},
			{ id: 2, neg: false, expanded: false, change: false, title: 'Система' },
		],
		panelsWeb: [
			{
				id: 5,
				neg: false,
				expanded: false,
				change: false,
				title: 'Подключение к серверу приложений',
			},
			{
				id: 0,
				neg: false,
				expanded: false,
				change: false,
				title: 'Общие настройки',
			},
			{
				id: 1,
				neg: false,
				expanded: false,
				change: false,
				title: 'Кэширование',
			},
			{ id: 2, neg: false, expanded: false, change: false, title: 'Система' },
			{
				id: 3,
				neg: false,
				expanded: false,
				change: false,
				title: 'Облачная подпись КриптоПро',
			},
			{ id: 4, neg: false, expanded: false, change: false, title: 'Грид' },
			{
				id: 6,
				neg: false,
				expanded: false,
				change: false,
				title: 'Локализации',
			},
			{
				id: 7,
				neg: false,
				expanded: false,
				change: false,
				title: 'Виды карточек',
			},
			{
				id: 8,
				neg: false,
				expanded: false,
				change: false,
				title: 'Экспериментальные функции',
			},
		],
		server: useServer(),
		access: useAccess(),
		bp: useBp(),
		wc: useWebConfig(),
	}),
	getters: {},
	actions: {
		deleteConnection(e: Connection) {
			let index = this.connections.indexOf((item: Connection) => item === e)
			this.connections.splice(index, 1)
		},
		addConnection(e: string) {
			this.connections.push({ name: e })
		},
		addComputer(e: string) {
			this.conputer.push({ id: Date.now(), name: e })
		},
		addWebConfig(e: string) {
			let temp = { id: Date.now(), name: e }
			this.webconfig.push(temp)
		},
		removeWebConfig(e: any) {
			let index = this.webconfig.indexOf(e)
			this.webconfig.splice(index, 1)
			this.tabs2 = this.webconfig[0].name
		},
		addConfig(e: string) {
			let temp = { id: uid(), name: e }
			this.config.push(temp)
		},
		removeConfig(e: any) {
			let index = this.config.indexOf(e)
			this.config.splice(index, 1)
		},
		changeDefaults(e: number) {
			this.panels[e].change = true
		},
		changeWebDefaults(e: number) {
			this.panelsWeb[e].change = true
		},
		setTabs(e: string) {
			this.tabs = e
		},
		setTabs2(e: string) {
			this.tabs2 = e
		},
		removeComputer(e: number) {
			this.conputer = this.conputer.filter(item => item.id !== e)
			this.tabs1 = this.conputer[0].name
		},
	},
})
