import { defineStore } from 'pinia'

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		currentNode: null as null | Hran,
		currentGroup: null as null | Hran,
	}),
	getters: {},
	actions: {
		setCurrent(e: any) {
			this.currentNode = e
		},
		setCurrentGroup(e: any) {
			this.currentGroup = e
		},
	},
})
