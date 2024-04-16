import { defineStore } from 'pinia'

export const useDvServ = defineStore({
	id: 'dvserv',
	state: () => ({
		currentNode: null as Stat | null,
		checkedNodes: [] as Stat[],
		removeNode: null as Stat | null,
		draggedNode: null as Stat | null,
	}),
	getters: {},
	actions: {
		setCurrent(e: Stat) {
			this.currentNode = e
		},
		setChecked(arr: Stat[]) {
			this.checkedNodes = arr
		},
		setRemove(e: Stat) {
			this.removeNode = this.currentNode
		},
		setDragged(e: Stat) {
			this.draggedNode = e
		},
	},
})
