<script setup lang="ts">
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import TreeList from '@/components/tree/TreeList.vue'
import WorkflowInside from '@/components/tree/WorkflowInside.vue'

const list = [
	{
		id: 0,
		label: 'Подключение',
		field: 'connect',
		selected: false,
	},
	{
		id: 1,
		label: 'Шаблоны',
		field: 'templates',
		selected: false,
	},
	// {
	// 	id: 2,
	// 	label: 'Почтовый сервис',
	// 	field: 'mail',
	// 	selected: false,
	// },
	{
		id: 3,
		label: 'Журналирование',
		field: 'logs',
		selected: false,
	},
	{
		id: 4,
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
					.confzag Управление процессами
					WorkflowInside
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
