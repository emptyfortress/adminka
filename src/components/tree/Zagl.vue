<script setup lang="ts">
import { reactive } from 'vue'
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import TreeList from '@/components/tree/TreeList.vue'

const props = defineProps({
	id: {
		type: Array,
		required: true,
	},
})

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
</script>

<template lang="pug">
q-page
	BreadCrumbs
	.container
		.grid
			TreeList
			q-scroll-area.right
				.q-ml-lg
					.confzag  {{ props.id[1]}}
</template>

<style scoped lang="scss">
.container {
	margin: 1rem 2rem;
}
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
</style>
