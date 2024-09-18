<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { tree } from '@/stores/confTree1'
import { useServ } from '@/stores/dvservConfig'
import AppServerInside from '@/components/tree/AppServerInside.vue'
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'

const route = useRoute()

const current = computed(() => {
	const flat = [...tree[0].children, ...tree[1].children]
	const curr = flat.find(item => item.id == route.params.id)
	let tmp = {} as Stat
	// tmp.data = Object.assign(curr)
	tmp.data = { ...curr }
	return tmp
})

const list = reactive([
	{ id: 0, field: 'lic', label: 'Лицензия', selected: false },
	{ id: 1, field: 'bd', label: 'Базы данных', selected: false },
	{ id: 2, field: 'common', label: 'Общие настройки', selected: false },
	{ id: 3, field: 'dost', label: 'Управление доступом', selected: false },
	{
		id: 4,
		field: 'auth',
		label: 'Расширенная аутентификация',
		selected: false,
	},
	{
		id: 5,
		field: 'addition',
		label: 'Дополнительный настройки',
		selected: false,
	},
])

const selected = ref()
const select = (e: any) => {
	selected.value = e.label
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}
const serv = useServ()
</script>

<template lang="pug">
q-page
	BreadCrumbs
	.container
		.grid
			q-list.left(dense)
				q-item(clickable v-for="item in list" :key="item.id" :class="{selected: selected == item.label}" @click="select(item)")
					q-item-section
						q-item-label {{ item.label }}
			q-scroll-area.right
				.q-ml-lg
					.confzag  Сервер приложений
					AppServerInside
	</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: start;
	column-gap: 3rem;
	row-gap: 0.5rem;
	// background: green;
}
.right,
.left {
	height: calc(100vh - 165px);
	width: 100%;
	// background: pink;
}
.container {
	margin: 1rem 2rem;
}
.selected {
	color: $blue-10;
	border: 1px solid hsl(221 41% 73% / 1);
	background: var(--tree-selection);
}
</style>
