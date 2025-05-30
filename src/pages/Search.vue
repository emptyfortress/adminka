<script setup lang="ts">
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import TreeList from '@/components/tree/TreeList.vue'
import SearchInside from '@/components/tree/SearchInside.vue'

const list = [
	{
		id: 0,
		label: 'Подключение',
		field: 'connect',
		selected: false,
	},
	{
		id: 1,
		label: 'Агрегация',
		field: 'agregat',
		selected: false,
	},
	{
		id: 2,
		label: 'Дополнительно',
		field: 'addition',
		selected: false,
	},
]
</script>

<template lang="pug">
q-page
	BreadCrumbs
	.container
		.grid
			TreeList(:list='list')

			q-scroll-area.right
				.q-ml-lg
					.confzag Полнотекстовый поиск
					SearchInside
</template>

<style scoped lang="scss">
.container {
	margin: 1rem 2rem;
}

.right,
.left {
	height: calc(100vh - 165px);
	width: 100%;
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
</style>
