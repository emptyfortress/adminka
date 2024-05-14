<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = (idx: number) => {}

const crumbs = computed(() => {
	let pathArray = route.path.split('/')
	pathArray.shift()
	let breadcrumbs = pathArray.reduce(
		(breadcrumbArray: any, path: string, idx: number) => {
			breadcrumbArray.push({
				path: path,
				to: breadcrumbArray[idx - 1]
					? '/' + breadcrumbArray[idx - 1].path + '/' + path
					: '/' + path,
				text: path,
			})
			return breadcrumbArray
		},
		[]
	)
	breadcrumbs[0].text = 'Серверы'
	breadcrumbs[2].text = 'Сервер приложений'
	breadcrumbs[2].to = '/root/DVM/appserver'
	if (route.name == 'zagl') {
		breadcrumbs[2].text = route.params.id[1]
		breadcrumbs[2].to = ''
	}
	return breadcrumbs
})

const action = () => {
	console.log(crumbs.value)
}
</script>

<template lang="pug">
.bread
	q-breadcrumbs
		q-icon(name="mdi-arrow-left" color="primary")
		q-breadcrumbs-el(v-for="(bread, idx) in crumbs" :key="idx" :label="bread.text" :to="bread.to")
		q-space
		q-btn(flat color="primary" label="Отмена" size="md") 
		q-btn(unelevated color="primary" label="Применить" size="md") 
</template>

<style scoped lang="scss">
.bread {
	font-size: 0.9rem;
}
</style>
