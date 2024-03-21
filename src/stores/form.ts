import { defineStore } from 'pinia'

export const useForm = defineStore({
	id: 'form',
	state: () => ({
		step1: {
			type: 'MS SQL Server',
			options: ['MS SQL Server', 'PostreSQL'],
			options1: ['SQL Server', 'Windows'],
			name: '',
			port: '',
			check: 'SQL Server',
			login: '',
			pass: '',
			success: false,
		},
	}),
	getters: {},
	actions: {},
})
