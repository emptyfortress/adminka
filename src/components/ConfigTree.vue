<script setup lang="ts">
import ConfigTreeConfig from '@/components/ConfigTreeConfig.vue'
import ConfigTreeServer from '@/components/ConfigTreeServer.vue'
</script>

<template lang="pug">
.grid
	.section
		ConfigTreeConfig()

	.section
		ConfigTreeServer( )
</template>

<style scoped lang="scss">
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	.section {
		background: var(--main-bg);
		padding: 1rem;
	}
}
</style>
