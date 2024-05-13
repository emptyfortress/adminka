<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
	return route.meta.bread.map(routeItem => ({
		label: routeItem.label,
		to: getRoutePath(routeItem.to),
	}))
})

const getRoutePath = (to: string) => {
	const matchedSegments = route.matched.slice(0, route.matched.indexOf(to) + 1)
	return matchedSegments.map(segment => segment.path).join('/')
}

const goBack = (to: string) => {
	console.log(route.matched)

	const matchedSegments = route.matched[0].path.slice(
		0,
		route.matched[0].path.indexOf(to) + 1
	)
	// console.log(to)
	console.log(matchedSegments)
	// console.log(route.meta.bread)
	// console.log(breadcrumbs.value)
	// console.log(route)
	// let path = route.fullPath.split('/')
	// let split = path.splice(4, path.length)
	// path = path.join('/')
	// let fullp = path + '/' + e
	// router.push(fullp)
}
</script>

<template lang="pug">
.bread
	pre {{ breadcrumbs }}
	q-breadcrumbs
		q-icon(name="mdi-arrow-left" color="primary")
		// q-breadcrumbs-el(:label="route.params.id.toString()" @click="router.back")
		// q-breadcrumbs-el(v-for="(bread, idx) in route.matched" :key="idx" :label="bread.name" :to="bread.path")
		q-breadcrumbs-el(v-for="(bread, idx) in route.meta.bread" :key="idx" :label="bread.label" @click="goBack(bread.to)")
		q-space
		q-btn(flat color="primary" label="Отмена" size="md") 
		q-btn(unelevated color="primary" label="Применить" size="md") 
</template>

<style scoped lang="scss"></style>
