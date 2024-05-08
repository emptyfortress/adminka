<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tree } from '@/stores/confTree1'
import { useServ } from '@/stores/dvservConfig'
import AppServerInside from '@/components/tree/AppServerInside.vue'

const route = useRoute()
const router = useRouter()
const serv = useServ()

const list = reactive([
	// { id: 0, label: 'Лицензия', selected: false },
	{ id: 1, field: 'bd', label: 'Базы данных', selected: false },
	{ id: 2, field: 'common', label: 'Общие настройки', selected: false },
	{ id: 3, field: 'dost', label: 'Управление доступом', selected: false },
	{
		id: 4,
		field: 'auth',
		label: 'Расширенная аутентификация',
		selected: false,
	},
])

const selected = ref()

const select = (e: any) => {
	selected.value = e.label
	// router.replace('/database/AGSupport#' + e.field)
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template lang="pug">
q-page
	.bread
		q-breadcrumbs
			q-breadcrumbs-el(v-for="item in route.meta.bread" :label="item.label" :icon="item.icon" @click="router.back")
			q-breadcrumbs-el(label="Сравнение конфигураций")
			q-space
			q-btn(flat color="primary" label="Показать отличия" size="md") 
			// q-btn(unelevated color="primary" label="Применить" size="md")

	.container
		.grid
			q-list.left(dense)
				q-item(clickable v-for="item in list" :key="item.id" :class="{selected: selected == item.label}" @click="select(item)")
					q-item-section
						q-item-label {{ item.label }}
			q-scroll-area.right
				.divide
					.q-ml-lg
						.confzag
							q-icon(:name="serv.checkedNodes[0]?.data.icon" color="secondary")
							span {{ serv.checkedNodes[0]?.data.text}}
						AppServerInside

					.q-ml-lg
						.confzag
							q-icon(:name="serv.checkedNodes[1]?.data.icon" color="secondary")
							span {{ serv.checkedNodes[1]?.data.text}}
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
}
.divide {
	// display: flex;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
.right,
.left {
	height: calc(100vh - 165px);
	width: 100%;
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
