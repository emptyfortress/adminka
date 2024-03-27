import { defineStore } from 'pinia'

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		currentNode: null as null | Object,
	}),
	getters: {},
	actions: {
		setCurrent(e: any) {
			this.currentNode = e
		},
	},
})
