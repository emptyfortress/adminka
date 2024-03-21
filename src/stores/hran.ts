import { defineStore } from 'pinia'
import { useTabs } from '@/stores/tabs'

const date = new Date()

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		groups: [
			{
				id: 0,
				name: 'Common',
				expanded: true,
				rule: 'Самое заполненное хранилище',
				list: [],
			},
		] as Group[],

		rules: [] as Rule[],
		currentRule: null,
	}),
	getters: {},
	actions: {
		unique() {
			this.groups.forEach(item => {
				item.list = [
					...new Map(item.list.map(item => [item['id'], item])).values(),
				]
			})
		},
		addGroup(e: string, c: string) {
			const tabs = useTabs()
			const temp = {
				id: +date,
				name: e,
				rule: c,
				expanded: true,
				switch: false,
				list: [],
				listRule: [],
			}
			this.groups.push(temp)
			tabs.setTabMod(2)
		},

		editGroup(ind: number, name: string, rule: string) {
			const tabs = useTabs()
			this.groups[ind].name = name
			this.groups[ind].rule = rule
			tabs.setTabMod(2)
		},
		removeGroup(ind: number) {
			const tabs = useTabs()
			this.groups.splice(ind, 1)
			tabs.setTabMod(2)
		},
		clearGroup(index: number, ind: number) {
			this.rules[index].gr.splice(ind, 1)
		},
		removeRule(ind: number) {
			const tabs = useTabs()
			this.rules.splice(ind, 1)
			tabs.setTabMod(2)
		},
		addRule(tmp: Rule) {
			const tabs = useTabs()
			this.rules.push(tmp)
			tabs.setTabMod(2)
		},
		updateRule(tmp: Rule) {
			if (this.currentRule) {
				let ind = this.rules.findIndex(this.currentRule)
				this.rules[ind] = tmp
			}
		},
	},
})
