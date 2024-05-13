<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const getRoutePath = index => {
	let tmp = route.meta.bread[index].to
	return '/root/' + item
	// const matchedSegments = route.matched.slice(0, route.matched.indexOf(to) + 1)
	// return matchedSegments.map(segment => segment.path).join('/')
}

const matchedSegments = computed(() => {
	let arr = route.path.split('/')
	return arr
})
const br = computed(() => {
	let arr = route.path.split('/')
	arr.shift()
	arr.shift()
	return arr
})

const breadcrumbs = computed(() => {
	return matchedSegments.value.map((item, index) => ({
		label: matchedSegments.value[index],
		to: 'fuuu',
	}))
})

const goBack = (idx: number) => {
	console.log(idx)
	// console.log(matchedSegments.value)
	// console.log(br.value)
	// console.log(to)
	// console.log(breadcrumbs.value)

	// console.log(br.value.join('/'))
}
</script>

<template lang="pug">
.bread
	div(@click="goBack") fuck
	q-breadcrumbs
		q-icon(name="mdi-arrow-left" color="primary")
		// q-breadcrumbs-el(:label="route.params.id.toString()" @click="router.back")
		// q-breadcrumbs-el(v-for="(bread, idx) in route.matched" :key="idx" :label="bread.name" :to="bread.path")
		q-breadcrumbs-el(v-for="(bread, idx) in breadcrumbs" :key="idx" :label="bread.label" @click="goBack(idx)")
		q-space
		q-btn(flat color="primary" label="Отмена" size="md") 
		q-btn(unelevated color="primary" label="Применить" size="md") 
</template>

<style scoped lang="scss"></style>
