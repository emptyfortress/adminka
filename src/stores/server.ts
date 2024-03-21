import { defineStore } from 'pinia'

export const useServer = defineStore({
	id: 'server',
	state: () => ({
		server: {
			journal: '',
			checkversion: true,
			counters: false,
			netcontrol: false,
			simpletime: 5,
			complextime: 20,
			filecache: true,
			cardcache: false,
			spravcache: true,
			address: 'http://sol2016.digdes.com:5200/api',
			addressdoc: 'http://online.docs.docsvision.com',
			quiet: false,
			skip: false,
			def: 'ru',
			reg: 'one',
		},
	}),
	getters: {},
	actions: {},
})
