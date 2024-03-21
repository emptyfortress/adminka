import { defineStore } from 'pinia'

export const useBp = defineStore({
	id: 'bp',
	state: () => ({
		nastr: {
			path: 'C:\\Program Files\\Docsvision\\Workflow\\5.5\\Templates\\1049\\ProcessTemplate.xml',
			cert: '',
		},
		bp: {
			name: 'Docsvision 5.5 Workflow Server',
			typ: 'Автоматический',
			check: false,
			delay: 0,
			iso: false,
			jour: '',
			port: 8090,
			level: 'Предупреждения',
			user: '',
			pass: '',
		},
		post: {
			typ: 'MS Exchange Web Services',
			options: ['MS Exchange Web Services', 'SMT / POP3', 'MS Exchange'],
			address: '',
			version: '2007 SP1',
			auth: 'Простая',
			name: '',
			pass: '',
			email: '',
			ssl: false,
		},
	}),
	getters: {},
	actions: {},
})
