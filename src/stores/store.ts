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
				psevdo: 'AGSupport',
				name: 'AGSupport_1',
				servertype: 'SQL Server',
				server: 'Docsvision 1',
				index: 'yes',
				version: '4373',
				cache: 'InMemory',
				date: '20.10.2021',
				def: true,
			},
			{
				active: true,
				psevdo: 'DvTest',
				name: 'AGSupport_2',
				servertype: 'SQL Server',
				server: 'Docsvision 1',
				index: 'yes',
				cache: 'Redis',
				version: '4373',
				date: '04.11.2022',
				def: false,
			},
			{
				active: false,
				psevdo: 'DvShowCase',
				name: 'AGSupport_3',
				servertype: 'PostgreSQL',
				server: 'Docsvision 1',
				cache: 'No cache',
				index: 'yes',
				version: '4373',
				date: '09.07.2021',
				def: false,
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
