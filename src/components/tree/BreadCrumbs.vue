<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// const goBack = (idx: number) => {
// 	console.log(route.matched)
// }
</script>

<template lang="pug">
.bread
	q-breadcrumbs
		div Здесь будет breadcrumbs
		// q-icon(name="mdi-arrow-left" color="primary")
		// q-breadcrumbs-el(:label="route.params.id.toString()" @click="router.back")
		// q-breadcrumbs-el(v-for="(bread, idx) in route.matched" :key="idx" :label="bread.name" :to="bread.path")
		// q-breadcrumbs-el(v-for="(bread, idx) in breadcrumbs" :key="idx" :label="bread.label" @click="goBack(idx)")
		q-space
		q-btn(flat color="primary" label="Отмена" size="md") 
		q-btn(unelevated color="primary" label="Применить" size="md") 
</template>

<style scoped lang="scss"></style>
