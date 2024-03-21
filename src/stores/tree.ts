import { defineStore } from 'pinia'
import { uid } from 'quasar'
import { deleteNodeFromTree } from '@/utils/utils'

export const useTree = defineStore({
	id: 'tree',
	state: () => ({
		tree: [
			{
				id: 'appserver',
				label: 'Сервер приложений',
				url: '/setup1/appserver',
				children: [
					{
						id: 'config',
						label: 'Конфигурации',
						save: true,
						url: '/setup1/appserver/configurations',
						children: [
							{
								id: 'SOL2016',
								label: 'SOL2016',
								save: true,
								url: '/setup1/appserver/configurations/SOL2016#top',
								children: [
									{
										id: 'db1',
										label: 'Базы данных',
										save: true,
										url: '/setup1/appserver/configurations/SOL2016#bd',
										children: [],
									},
									{
										id: 'licence1',
										label: 'Лицензия',
										save: true,
										url: '/setup1/appserver/configurations/SOL2016#licence',
										children: [],
									},
									{
										id: 'common1',
										label: 'Общие настройки',
										save: true,
										children: [],
									},
									{
										id: 'access1',
										label: 'Управление доступом',
										save: true,
										children: [],
									},
									{
										id: 'auth1',
										label: 'Расширенная аутентификация',
										save: true,
										children: [],
									},
								],
							},
							{
								id: 'SOL2017',
								label: 'SOL2017',
								save: true,
								url: '/setup1/appserver/configurations/SOL2017',
								children: [
									{
										id: 'licence2',
										label: 'Лицензия',
										save: true,
										children: [],
									},
									{
										id: 'db2',
										label: 'Базы данных',
										save: true,
										children: [],
									},
									{
										id: 'common2',
										label: 'Общие настройки',
										save: true,
										children: [],
									},
									{
										id: 'access2',
										label: 'Управление доступом',
										save: true,
										children: [],
									},
									{
										id: 'auth2',
										label: 'Расширенная аутентификация',
										save: true,
										children: [],
									},
								],
							},
						],
					},
					{
						id: 'serv1',
						label: '102pc0102',
						save: true,
						icon: 'mdi-penguin',
						children: [],
					},
					{
						id: 'serv2',
						label: 'DVM-new',
						save: true,
						icon: 'mdi-penguin',
						children: [],
					},
				],
			},
			{
				id: 'wc',
				label: 'Web-клиент',
				save: true,
				children: [
					{
						id: 'webconfig',
						label: 'Конфигурации',
						save: true,
						children: [
							{
								id: uid(),
								label: 'Подключение к серверу приложений',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Общие настройки',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Кэширование',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Система',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Облачная подпись КриптоПро',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Грид',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Локализации',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Виды карточек',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Экспериментальные функции',
								save: true,
								children: [],
							},
						],
					},
					{
						id: uid(),
						label: '102pc0102',
						save: true,
						children: [
							{
								id: uid(),
								label: 'Подключение к серверу приложений',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Общие настройки',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Система',
								save: true,
								children: [],
							},
						],
					},
					{
						id: uid(),
						label: 'DVM-new',
						save: true,
						children: [
							{
								id: uid(),
								label: 'Подключение к серверу приложений',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Общие настройки',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Система',
								save: true,
								children: [],
							},
						],
					},
				],
			},
			{
				id: 'worker',
				label: 'Служба фоновых операций',
				save: true,
				children: [],
			},
			{
				id: 'bp',
				label: 'Сервис бизнес-процессов',
				save: true,
				children: [
					{
						id: uid(),
						label: 'AGSupport',
						save: true,
						children: [
							{
								id: uid(),
								label: 'Общие настройки',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Сервис бизнес-процессов',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Настройки почты',
								save: true,
								children: [],
							},
						],
					},
					{
						id: uid(),
						label: 'Тест',
						save: true,
						children: [
							{
								id: uid(),
								label: 'Общие настройки',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Сервис бизнес-процессов',
								save: true,
								children: [],
							},
							{
								id: uid(),
								label: 'Настройки почты',
								save: true,
								children: [],
							},
						],
					},
				],
			},
			{
				id: 'search',
				label: 'Полнотекстовый поиск',
				save: true,
				children: [],
			},
			{
				id: 'widget',
				label: 'Виджеты',
				save: true,
				children: [],
			},
			{
				id: 'mail',
				label: 'Почтовый сервер',
				save: true,
				children: [],
			},
		] as Config[],
	}),

	getters: {
		configs: state => {
			return state.tree[0].children[0].children
		},
	},

	actions: {
		removeConfig(id: string) {
			deleteNodeFromTree(this.tree[0], id)
		},
		addConfig(e: string) {
			let temp = {
				id: uid(),
				label: e,
				url: '/',
				save: true,
			} as Config
			this.tree[0].children[0].children.push(temp)
		},
	},
})
