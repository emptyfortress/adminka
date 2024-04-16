<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tree } from '@/stores/confTree1'

const route = useRoute()
const router = useRouter()

const current = computed(() => {
	const flat = [...tree[0].children, ...tree[1].children]
	const curr = flat.find(item => item.id == route.params.id)
	return curr
})
// console.log(current.value)
</script>

<template lang="pug">
q-page(padding)
	.bread
		q-breadcrumbs
			q-breadcrumbs-el(v-for="item in route.meta.bread" :label="item.label" :icon="item.icon" @click="router.back")
			q-breadcrumbs-el(:label="current.text")
			q-space
			q-btn(flat color="primary" label="Отмена" size="md") 
			q-btn(unelevated color="primary" label="Применить" size="md") 

	.container
		h2 Hello
</template>

<style scoped lang="scss"></style>
