// import { uid } from 'quasar'
import { defineStore } from 'pinia'
// import { useServer } from '@/stores/server'
// import { useAccess } from '@/stores/access'
// import { useBp } from '@/stores/bp'
import { useWebConfig } from '@/stores/webconfig'

interface Connection {
	name: string
}

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		// connections: [{ name: 'SOL2016' }],
		config: [
			{ id: 'SOL2016', name: 'SOL2016' },
			{ id: 'SOL2017', name: 'SOL2017' },
		],
		databases: [
			{
				active: true,
				dis: true,
				psevdo: 'AGSupport',
				name: 'AGSupport_1',
				servertype: 'SQL Server',
				server: 'vega',
				sql: '109pc0116.digdes.com',
				index: 'да',
				indexplace: 'Внешняя БД',
				version: '4373',
				cache: 'InMemory',
				date: '20.10.2021',
				def: true,
				decision: ['Управление документами', 'Базовое решение'],
				vid: ['На исполнение', 'Исходящий'],
				local: ['Ru', 'En', 'Kz'],
			},
			{
				active: true,
				dis: true,
				psevdo: 'DvTest',
				name: 'AGSupport_2',
				servertype: 'SQL Server',
				server: 'vega',
				sql: '109pc0116.digdes.com',
				index: 'да',
				indexplace: 'Локальная БД',
				cache: 'Redis',
				version: '4373',
				date: '04.11.2022',
				def: false,
				decision: ['Менеджер решений', 'Базовое решение', 'Согласование'],
				vid: ['На исполнение', 'Исходящий', 'На согласование'],
				local: ['Ru', 'En', 'Kz'],
			},
			{
				active: false,
				psevdo: 'DvShowCase',
				name: 'AGSupport_3',
				servertype: 'PostgreSQL',
				server: 'Docsvision 1',
				cache: 'No cache',
				index: 'да',
				indexplace: 'Elasticsearch',
				version: '4373',
				date: '09.07.2021',
				def: false,
				decision: ['Базовое решение'],
				vid: ['Входящий', 'Исходящий', 'Заявка'],
				local: ['Ru', 'En', 'Kz'],
			},
			{
				active: true,
				dis: true,
				psevdo: 'DvWorkflow',
				name: 'AGSupport_4',
				servertype: 'SQL Server',
				server: 'astra',
				sql: '109pc0058.digdes.com',
				cache: 'Redis',
				index: 'да',
				indexplace: 'Elasticsearch',
				version: '4373',
				date: '15.03.2023',
				def: false,
				decision: ['Согласование', 'Управление процессами'],
				vid: ['На согласование', 'Входящий'],
				local: ['Ru', 'En', 'Kz'],
			},
			{
				active: false,
				psevdo: 'DvFinance',
				name: 'AGSupport_5',
				servertype: 'PostgreSQL',
				server: 'astra',
				cache: 'InMemory',
				index: 'да',
				indexplace: 'Локальная БД',
				version: '4373',
				date: '01.08.2022',
				def: false,
				decision: ['Финансовый контроль', 'Базовое решение'],
				vid: ['На оплату', 'Исходящий'],
				local: ['Ru', 'En', 'Kz'],
			},
			{
				active: false,
				psevdo: 'DvArchive',
				name: 'AGSupport_6',
				servertype: 'SQL Server',
				server: 'vega',
				cache: 'No cache',
				index: 'да',
				indexplace: 'Локальная БД',
				version: '4373',
				date: '22.12.2020',
				def: false,
				decision: ['Архивирование', 'Базовое решение'],
				vid: ['Архивный', 'Входящий'],
				local: ['Ru', 'En', 'Kz'],
			},
		],
		wc: useWebConfig(),
	}),
	getters: {},
	actions: {
		removeDB(e: any) {
			const index = this.databases.indexOf(e)
			this.databases.splice(index, 1)
		},
		assignDefDB(e: string) {
			let index = this.databases.findIndex(item => item.psevdo === e)
			this.databases.map(item => (item.def = false))
			this.databases[index].def = true
		},
	},
})
