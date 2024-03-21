import { defineStore } from 'pinia'

export const useAccess = defineStore({
	id: 'access',
	state: () => ({
		access: {
			protokol: 'Веб-сервис(HTTP + SOAP)',
			address: 'http://company.com/DocsVision/StorageServer',
			http: 'http://company.com/DocsVision/StorageServer',
			auth: false,
			session: 300,
		},
	}),
	getters: {},
	actions: {},
})
