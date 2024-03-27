import { defineStore } from 'pinia'

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		currentNode: null as null | Object,
		currentGroup: null as null | Object,
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
