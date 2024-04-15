<script setup lang="ts">
import { ref } from 'vue'
import { tree } from '@/stores/confTree1'
import ConfigTree from '@/components/common/ConfigTree.vue'
import DragConfigTree from '@/components/common/DragConfigTree.vue'

const filter = ref('')
</script>

<template lang="pug">
.grid
	.first
		q-input.q-mb-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

		DragConfigTree(:treeData="tree" :filter="filter" )
	.first

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
