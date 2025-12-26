<script setup lang="ts">
import { ref } from 'vue'
import { cards } from '@/stores/cardsTree'

const ticked = ref([])
const expanded = ref([])
</script>

<template lang="pug">
.all900
	.arch
		.text-bold Индексируемые типы карточек
		q-tree(
			:nodes='cards'
			node-key='key'
			tick-strategy="leaf"
			v-model:ticked="ticked"
      v-model:expanded="expanded"
		)
</template>

<style scoped lang="scss">
.all900 {
	max-width: 600px;
}

:deep(.q-checkbox--dense .q-checkbox__inner) {
	width: 0.4em;
	min-width: 0.4em;
	height: 0.4em;
	margin-right: 0.3rem;
}
</style>
