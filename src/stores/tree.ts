import { defineStore } from 'pinia'
import { uid } from 'quasar'

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
						id: 'configs',
						label: 'Конфигурации',
						save: true,
						url: '/setup1/appserver/configurations/SOL2016#bd',
					},
					{
						id: 'db',
						label: 'Базы данных',
						save: true,
						url: '/setup1/appserver/configurations/SOL2016#bd',
					},
					{
						id: 'common',
						label: 'Общие настройки',
						save: true,
					},
					{
						id: 'access',
						label: 'Управление доступом',
						save: true,
					},
					{
						id: 'auth',
						label: 'Расширенная аутентификация',
						save: true,
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
					},
					{
						id: uid(),
						label: 'Общие настройки',
						save: true,
					},
					{
						id: uid(),
						label: 'Кэширование',
						save: true,
					},
					{
						id: uid(),
						label: 'Система',
						save: true,
					},
					{
						id: uid(),
						label: 'Облачная подпись КриптоПро',
						save: true,
					},
					{
						id: uid(),
						label: 'Грид',
						save: true,
					},
					{
						id: uid(),
						label: 'Локализации',
						save: true,
					},
					{
						id: uid(),
						label: 'Виды карточек',
						save: true,
					},
					{
						id: uid(),
						label: 'Экспериментальные функции',
						save: true,
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
					},
					{
						id: uid(),
						label: 'Сервис бизнес-процессов',
						save: true,
					},
					{
						id: uid(),
						label: 'Настройки почты',
						save: true,
					},
				],
			},
			{
				id: 'mail',
				label: 'Почтовый сервер',
				save: true,
			},
			{
				id: 'worker',
				label: 'Служба фоновых операций',
				save: true,
			},
			{
				id: 'search',
				label: 'Полнотекстовый поиск',
				save: true,
			},
			{
				id: 'widget',
				label: 'Виджеты',
				save: true,
			},
		] as Config[],
	}),

	getters: {},

	actions: {},
})
