import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTabs = defineStore('tabs', () => {
	const tabs = ref([
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
			label: 'Распределение нагрузки',
			modified: false,
		},
		{
			id: 7,
			field: 'module',
			name: 'module',
			label: 'Доп. настройки',
			modified: false,
		},
	])

	const searchSections = ref([
		{
			id: 0,
			field: 'commonProps',
			name: 'commonProps',
			label: 'Общие настройки',
			modified: false,
		},
		{
			id: 1,
			field: 'directories',
			name: 'directories',
			label: 'Справочники',
			modified: false,
		},
		{
			id: 2,
			field: 'cards',
			name: 'cards',
			label: 'Карточки',
			modified: false,
		},
		{
			id: 3,
			field: 'facets',
			name: 'facets',
			label: 'Фасеты',
			modified: false,
		},
	])

	const setTabMod = (n: number) => {
		tabs.value[n].modified = true
	}

	return {
		tabs,
		searchSections,
		setTabMod,
	}
})
