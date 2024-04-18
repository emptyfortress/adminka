import { defineStore } from 'pinia'

export const useDvServ = defineStore({
	id: 'dvserv',
	state: () => ({
		currentNode: null as Stat | null,
		checkedNodes: [] as Stat[],
		removeNode: null as Stat | null,
		draggedNode: null as Stat | null,
		dubleNode: null as Stat | null,
	}),
	getters: {},
	actions: {
		setCurrent(e: Stat) {
			this.currentNode = e
		},
		addChecked(e: Stat) {
			this.checkedNodes.push(e)
		},
		setRemove() {
			this.removeNode = this.currentNode
		},
		setDragged(e: Stat) {
			this.draggedNode = e
		},
		removeChecked(e: Stat) {
			this.checkedNodes = this.checkedNodes.filter((item: Stat) => item !== e)
		},
		setDuble(e: Stat) {
			this.dubleNode = e
		},
		clearChecked() {
			this.checkedNodes = []
		},
	},
})
