<script setup lang="ts">
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import TreeList from '@/components/tree/TreeList.vue'
import WebClientInside from '@/components/tree/WebClientInside.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const list = [
	{
		id: 0,
		label: 'Подключение',
		field: 'connect',
		selected: false,
	},
	{
		id: 1,
		label: 'Решения',
		field: 'decision',
		selected: false,
	},
	{
		id: 2,
		label: 'Локализации',
		field: 'local',
		selected: true,
	},
	{ id: 3, label: 'Виды карточек', field: 'vid', selected: false },
	{ id: 4, label: 'Интерфейс', field: 'interface', selected: false },
	{ id: 5, label: 'Общие', field: 'common', selected: false },
	{ id: 6, label: 'Производительность', field: 'yield', selected: false },
	{ id: 7, label: 'Работа с файлами', field: 'files', selected: false },
	{ id: 8, label: 'Инструменты', field: 'tools', selected: false },
	{ id: 9, label: 'Электронная подпись', field: 'sign', selected: false },
	{ id: 10, label: 'Журналирование', field: 'logs', selected: false },
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
					.confzag Web-клиент
					WebClientInside
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
