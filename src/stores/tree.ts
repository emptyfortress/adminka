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
						id: 'db1',
						label: 'Базы данных',
						save: true,
						url: '/setup1/appserver/configurations/SOL2016#bd',
						children: [],
					},
					// {
					// 	id: 'licence1',
					// 	label: 'Лицензия',
					// 	save: true,
					// 	url: '/setup1/appserver/configurations/SOL2016#licence',
					// 	children: [],
					// },
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
				id: 'wc',
				label: 'Web-клиент',
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
				id: 'bp',
				label: 'Сервис бизнес-процессов',
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
				id: 'mail',
				label: 'Почтовый сервер',
				save: true,
				children: [],
			},
			{
				id: 'worker',
				label: 'Служба фоновых операций',
				save: true,
				children: [],
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
