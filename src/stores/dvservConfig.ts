import { defineStore } from 'pinia'

export const useDvServ = defineStore({
	id: 'dvserv',
	state: () => ({
		currentNode: null as Stat | null,
		checkedNodes: [] as Stat[],
	}),
	getters: {},
	actions: {
		setCurrent(e: Stat) {
			this.currentNode = e
		},
		setChecked(arr: Stat[]) {
			this.checkedNodes = arr
		},
	},
})
