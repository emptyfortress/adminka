<script setup lang="ts">
import OpenSessionWidget from '@/components/OpenSessionWidget.vue'
import OpenSessionWidget1 from '@/components/OpenSessionWidget1.vue'
</script>

<template lang="pug">
q-page(padding)
	.grid1
		OpenSessionWidget
		OpenSessionWidget1
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto auto;
	gap: 1rem;
	height: calc(100vh - 64px - 64px);
}
.grid1 {
	display: flex;
	justify-content: center;
	// align-items: start;
	flex-wrap: wrap;
	gap: 1rem;
}

.q-page {
	padding: 1rem;
}
</style>
