<script setup lang="ts">
import { reactive } from 'vue'
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import TreeList from '@/components/tree/TreeList.vue'
import WebClientInside from '@/components/tree/WebClientInside.vue'

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
		.grid
			TreeList

			q-scroll-area.right
				.q-ml-lg
					.confzag  {{ props.id[1]}}
					WebClientInside
</template>

<style scoped lang="scss">
.container {
	margin: 1rem 2rem;
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
.right,
.left {
	height: calc(100vh - 165px);
	width: 100%;
	// background: pink;
}
</style>
