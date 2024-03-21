<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route.meta)
</script>

<template lang="pug">
.treepage
	q-breadcrumbs
		q-breadcrumbs-el(v-for="item in route.meta.bread" :label="item.label" :icon="item.icon" @click="router.back")

	// .mainzag
	// 	q-btn(flat round icon="mdi-arrow-left" color="primary") 
	// 	div /
	// 	div {{ route.meta.bread[0].label}}
</template>

<style scoped lang="scss">
.q-breadcrumbs {
	font-size: 1.3rem;
	border-bottom: 1px solid #aaa;
	margin-bottom: 1rem;
	:deep(.q-icon) {
		color: $primary !important;
	}
	.q-link {
		cursor: pointer;
	}
}
</style>
