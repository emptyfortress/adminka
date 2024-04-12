<script setup lang="ts">
import { ref } from 'vue'
import { conf, servers } from '@/stores/confTree1'
import ConfigTree from '@/components/common/ConfigTree.vue'

const filter = ref('')
</script>

<template lang="pug">
.grid
	.first
		q-input.q-mt-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

		ConfigTree(:treeData="conf" :filter="filter")
		ConfigTree(:treeData="servers" :filter="filter")

</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: start;
	column-gap: 1rem;
	.first {
		width: 100%;
	}
}
</style>
