<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabs } from '@/stores/tabs'
import commonProps from '@/components/searchTabs/commonProps.vue'
import CardType from '@/components/searchSteps/CardType.vue'
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import CatalogTree from '@/components/searchSteps/CatalogTree.vue'
import CardTree from '@/components/searchSteps/CardTree.vue'
import Facets from '@/components/searchSteps/Facets.vue'

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
})

const tabs = useTabs()
//
const route = useRoute()
const router = useRouter()
const selected = ref('Свойства')

const select = (e: any) => {
	selected.value = e.label
	let path = route.path
	router.replace(path + '#' + e.field)
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}
const test = () => {
	console.log(route.matched)
}
const changed = ref(false)
const update = () => {
	changed.value = !changed.value
}
</script>

<template lang="pug">
q-page
	BreadCrumbs
	.container
		.grid
			q-list.left(dense)
				q-item(clickable v-for="item in tabs.searchSections" :key="item.id" :class="{ selected: selected == item.label }" @click="select(item)")
					q-item-section
						q-item-label {{ item.label }}

			q-scroll-area.right
				.q-ml-lg
					#prop.confzag(@click="test") Индексирование базы данных
					#commonProps.zg Общие настройки
					commonProps(:db='props.id')
					#directories.zg Справочники
					.plashka
						span Изменения в этом разделе приведут к удалению текущих индексов и повторной индексации данных.
					CatalogTree

					#cards.zg Карточки
					.plashka
						span Изменения в этом разделе приведут к удалению текущих индексов и повторной индексации данных.
					CardTree(elastic)
					#facets.zg Фасеты
					Facets
					CardType

</template>

<style scoped lang="scss">
.big {
	font-size: 2rem;
	color: $secondary;
	font-weight: 300;
}
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: start;
	column-gap: 3rem;
	row-gap: 0.5rem;
}

.selected {
	color: $blue-10;
	border: 1px solid hsl(221 41% 73% / 1);
	background: var(--tree-selection);
}

.zg {
	font-size: 1.3rem;
	font-weight: 600;
	text-transform: uppercase;
	color: $secondary;
	margin-top: 2rem;
	margin-left: 2rem;

	&:first-child {
		margin-top: 0;
	}
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
.plashka span {
	background: $primary;
	color: white;
	padding: 2px 1rem;
	margin-left: 2rem;
	font-weight: 500;
}

.data {
	padding: 1rem;
	padding-top: 0.3rem;
	margin-left: 1rem;
	border: 1px solid transparent;
	position: relative;

	&:hover {
		background: #e0e0e0;
		border: 1px solid #ccc;

		.q-btn {
			display: inline-flex;
		}
	}

	.q-input,
	.q-select {
		max-width: 400px;
		margin-top: 4px;
	}

	label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
	}

	.descr {
		color: #666;
	}

	.inner {
		width: 1px;

		position: absolute;
		top: 0.5rem;
		bottom: 1rem;
		left: 0.2rem;
		border-right: 3px solid $primary;
	}

	.refresh {
		position: absolute;
		left: -2rem;
		top: 0.1rem;
		display: none;
	}

	.add {
		margin-top: 4px;
	}
}
</style>
