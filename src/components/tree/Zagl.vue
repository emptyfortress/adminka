<script setup lang="ts">
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'

const props = defineProps({
	id: {
		type: Array,
		required: true,
	},
})
</script>

<template lang="pug">
q-page
	BreadCrumbs
	.container
		h6 Здесь настройки
		h4 {{ props.id}}
</template>

<style scoped lang="scss">
.container {
	margin: 1rem 2rem;
}
</style>
