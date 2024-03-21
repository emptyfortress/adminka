import { defineStore } from 'pinia'

export const useWiz = defineStore({
	id: 'wiz',
	state: () => ({
		choose: 'start',
		done: false,
		finish: 0,
		check: [
			{ id: 0, block: 1, label: 'Базовые объекты', val: false },
			{ id: 1, block: 1, label: 'Управление документами', val: false },
			{ id: 3, block: 1, label: 'Управление процессами', val: false },
			{ id: 4, block: 2, label: 'Конструктор согласований', val: false },
			{ id: 2, block: 2, label: 'Web-client', val: false },
		],
	}),
	getters: {
		dopModules(state) {
			if (state.check.filter((item) => item.val).length > 0) {
				return true
			}
			return false
		},
		check1(state) {
			return state.check.filter((e) => e.block === 1)
		},
		check2(state) {
			return state.check.filter((e) => e.block === 2)
		},
		checkState1() {
			if (this.check1.filter((e: any) => e.val === true).length === 0) {
				return true
			}
			return false
		},
		checkState2() {
			if (this.check2.filter((e: any) => e.val === true).length === 0) {
				return true
			}
			return false
		},
	},

	actions: {
		resetCheck() {
			this.check.map((e) => (e.val = false))
		},
		moveCheck() {
			const temp = this.check.filter((e) => e.val === true)
			if (temp.length > 0) {
				temp.forEach((item) => (item.block = 1))
			}
		},
	},
})
