<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabs } from '@/stores/tabs'
import PropertyTab from '@/components/setupcomponent/PropertyTab.vue'
import ControlTab from '@/components/setupcomponent/ControlTab.vue'
import Outer from '@/components/setupcomponent/Outer.vue'
import ArchTab from '@/components/setupcomponent/ArchTab.vue'
import CacheTab from '@/components/setupcomponent/CacheTab.vue'
import ModuleTab from '@/components/setupcomponent/ModuleTab.vue'

const tabs = useTabs()

const route = useRoute()
const router = useRouter()
const selected = ref('Свойства')
const select = (e: any) => {
	selected.value = e.label
	router.replace('/database/AGSupport#' + e.field)
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}
const bd = ref({
	psevdo: 'AGSupport',
	name: 'AGSupport_1',
	server: 'Docsvision 1',
	servertype: 'SQL Server',
	index: 'yes',
	version: '4373',
	date: '20.10.2021 10:34',
	def: true,
})
</script>

<template lang="pug">
q-page(padding)
	.treepage
		q-breadcrumbs
			q-breadcrumbs-el(v-for="item in route.meta.bread" :label="item.label" :icon="item.icon" @click="router.back")
			q-breadcrumbs-el(:label="route.params.id.toString()")
			q-space
			q-btn(flat color="primary" label="Отмена" size="md") 
			q-btn(unelevated color="primary" label="Применить" size="md") 

	.grid
		q-list.left(dense)
			q-item(clickable v-for="item in tabs.tabs" :key="item.id" :class="{selected: selected == item.label}" @click="select(item)")
				q-item-section
					q-item-label {{ item.label }}

		q-scroll-area.right
			.q-ml-lg
				#prop.zg Свойства базы данных
				component(:is="PropertyTab" :bd="bd")
				#control.zg Обслуживание
				// component(:is="ControlTab" :bd="bd")
				#outer.zg Внешние хранилища
				// component(:is="Outer")
				#arch.zg Архивирование
				// component(:is="ArchTab" :bd="bd")
				#cache.zg Кэширование
				// component(:is="CacheTab" :bd="bd")
				#module.zg Доп.настройки
				// component(:is="ModuleTab" :bd="bd")

</template>

<style scoped lang="scss">
.q-breadcrumbs {
	font-size: 1.1rem;
	border-bottom: 1px solid #aaa;
	margin-bottom: 1rem;
	:deep(.q-icon) {
		color: $primary !important;
	}
	.q-link {
		cursor: pointer;
	}
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
.selected {
	background: var(--tree-selection);
	color: $blue-10;
}
.zg {
	font-size: 1.3rem;
	font-weight: 300;
	text-transform: uppercase;
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
</style>
