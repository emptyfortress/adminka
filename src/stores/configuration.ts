import { defineStore } from 'pinia'
import type { QTableColumn } from 'quasar'

export const useConfig = defineStore({
	id: 'config',
	state: () => ({
		columns0: [
			{
				label: 'Модуль',
				align: 'left',
				sortable: true,
				name: 'module',
				field: 'module',
			},
			{
				label: 'Конфигурация',
				align: 'left',
				sortable: true,
				name: 'name',
				field: 'name',
			},
			{
				label: 'Среда',
				align: 'left',
				sortable: true,
				name: 'env',
				field: 'env',
			},
		] as QTableColumn[],
		columns: [
			{
				label: 'Конфигурация',
				align: 'left',
				sortable: true,
				name: 'name',
				field: 'name',
			},
			{
				label: 'Модуль',
				align: 'left',
				sortable: true,
				name: 'module',
				field: 'module',
			},
			{
				label: 'Среда',
				align: 'left',
				sortable: true,
				name: 'env',
				field: 'env',
			},
		] as QTableColumn[],

		rows: [
			{
				id: 0,
				name: 'Config 1',
				env: 'test',
				module: 'Web-client',
				selected: true,
				computers: [
					{ id: 0, name: '102pc0102', os: 'Windows', selected: false },
					{ id: 1, name: 'DV-test', os: 'Windows', selected: false },
					{ id: 2, name: 'DVM', os: 'Linux', selected: false },
					{ id: 3, name: '104pc0104', os: 'Linux', selected: false },
				],
			},
			{
				id: 6,
				name: 'Config 2',
				env: 'prod',
				module: 'Web-client',
				selected: false,
				computers: [{ id: 0, name: 'DVM', os: 'Linux', selected: false }],
			},
			{
				id: 1,
				name: 'Config 3',
				env: 'test',
				module: 'Platform',
				selected: false,
				computers: [
					{ id: 0, name: 'DVM', os: 'Linux', selected: false },
					{ id: 1, name: '104pc0104', os: 'Linux', selected: false },
				],
			},
			{
				id: 2,
				name: 'Config 4',
				env: 'prod',
				module: 'Platform',
				selected: false,
				computers: [{ id: 0, name: '104pc0104', os: 'Linux', selected: false }],
			},
			{
				id: 7,
				name: 'Config 5',
				env: 'test',
				module: 'Workflow',
				selected: false,
				computers: [
					{ id: 1, name: 'DV-test', os: 'Windows', selected: false },
					{ id: 2, name: 'DVM', os: 'Linux', selected: false },
				],
			},
			{
				id: 3,
				name: 'Config 6',
				env: 'prod',
				module: 'Workflow',
				selected: false,
				computers: [
					{ id: 0, name: '102pc0102', os: 'Windows', selected: false },
					{ id: 3, name: '104pc0104', os: 'Linux', selected: false },
				],
			},
			{
				id: 4,
				name: 'Config 7',
				env: 'test',
				module: 'Server DV',
				selected: false,
				computers: [
					{ id: 1, name: 'DV-test', os: 'Windows', selected: false },
					{ id: 2, name: 'DVM', os: 'Linux', selected: false },
					{ id: 3, name: '104pc0104', os: 'Windows', selected: false },
					{ id: 4, name: '109pc0109', os: 'Windows', selected: false },
				],
			},
		],
		columns1: [
			{
				label: 'Сервер',
				align: 'left',
				sortable: true,
				name: 'name',
				field: 'name',
			},
			{ label: 'OS', align: 'left', sortable: true, name: 'os', field: 'os' },
		] as QTableColumn[],
		rows1: [
			{
				id: 0,
				name: 'DVM',
				os: 'Linux',
				selected: true,
				config: [
					{ name: 'Config 2', module: 'Платформа' },
					{ name: 'Config 4', module: 'Web-client' },
				],
			},
			{
				id: 1,
				name: 'DV-test',
				os: 'Windows',
				selected: false,
				config: [{ name: 'Config 3', module: 'Workflow' }],
			},
			{
				id: 2,
				name: '104pc0104',
				os: 'Linux',
				selected: false,
				config: [],
			},
			{
				id: 3,
				name: '102pc0102',
				os: 'Windows',
				selected: false,
				config: [
					{ name: 'Config 2', module: 'Платформа' },
					{ name: 'Config 4', module: 'Web-client' },
				],
			},
			{
				id: 4,
				name: 'Server 1',
				os: 'Windows',
				selected: false,
				config: [
					{ name: 'Config 2', module: 'Платформа' },
					{ name: 'Config 5', module: 'Worker' },
				],
			},
			{
				id: 5,
				name: 'Server 2',
				os: 'Linux',
				selected: false,
				config: [{ name: 'Config 5', module: 'Worker' }],
			},
		],
		columns2: [
			{
				label: 'Конфигурация',
				align: 'left',
				sortable: true,
				name: 'name',
				field: 'name',
			},
			{
				label: 'Модуль',
				align: 'left',
				sortable: true,
				name: 'module',
				field: 'module',
			},
		] as QTableColumn[],
	}),
	getters: {
		totalConfigs(state) {
			return state.rows.length
		},
		totalComps(state) {
			return state.rows1.length
		},
		selectedRow(state) {
			return state.rows.filter(item => item.selected === true)[0]
		},
		selectedRow1(state) {
			return state.rows1.filter(item => item.selected === true)[0]
		},
	},
	actions: {
		selectRow(row: any) {
			this.rows.map((e: any) => (e.selected = false))
			row.selected = true
		},
		selectRow1(row: any) {
			this.rows1.map((e: any) => (e.selected = false))
			row.selected = true
		},
	},
})
