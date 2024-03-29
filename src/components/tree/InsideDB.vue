<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabs } from '@/stores/tabs'
import { useStore } from '@/stores/store'
import PropertyTab from '@/components/setupcomponent/PropertyTab.vue'
import ControlTab from '@/components/setupcomponent/ControlTab.vue'
import Outer from '@/components/setupcomponent/Outer.vue'
import ArchTab from '@/components/setupcomponent/ArchTab.vue'
import CacheTab from '@/components/setupcomponent/CacheTab.vue'
import ModuleTab from '@/components/setupcomponent/ModuleTab.vue'

const store = useStore()
const tabs = useTabs()
//
const route = useRoute()
const router = useRouter()
const selected = ref('Свойства')

const select = (e: any) => {
	selected.value = e.label
	router.replace('/database/AGSupport#' + e.field)
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}
const currentDB = computed(() => {
	return store.databases.find(item => item.psevdo == route.params.id)
})
// console.log(currentDB.value)
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
				PropertyTab(:bd="currentDB")
				#control.zg Обслуживание
				ControlTab
				#outer.zg Внешние хранилища
				Outer
				#arch.zg Архивирование
				ArchTab
				#cache.zg Кэширование
				CacheTab
				#module.zg Дополнительные настройки
				ModuleTab

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
</style>
