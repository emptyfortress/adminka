import { defineStore } from 'pinia'

export const useTabs = defineStore({
	id: 'tabs',
	state: () => ({
		tabs: [
			{
				id: 0,
				field: 'prop',
				name: 'prop',
				label: 'Свойства',
				modified: false,
			},
			{
				id: 1,
				field: 'control',
				name: 'control',
				label: 'Обслуживание',
				modified: false,
			},
			{
				id: 2,
				field: 'outer',
				name: 'outer',
				label: 'Внешние хранилища',
				modified: false,
			},
			{
				id: 3,
				field: 'arch',
				name: 'arch',
				label: 'Архивирование',
				modified: false,
			},
			{
				id: 5,
				field: 'cache',
				name: 'cache',
				label: 'Кэширование',
				modified: false,
			},
			{
				id: 6,
				field: 'log',
				name: 'log',
				label: 'Журналирование',
				modified: false,
			},
			{
				id: 8,
				field: 'always',
				name: 'always',
				label: 'Настройки AlwaysOn',
				modified: false,
			},
			{
				id: 7,
				field: 'module',
				name: 'module',
				label: 'Доп. настройки',
				modified: false,
			},
		],
	}),

	getters: {},

	actions: {
		setTabMod(n: number) {
			this.tabs[n].modified = true
		},
	},
})
