<template lang="pug">
div
	.zag Настройка соединений
	q-card.card
		.row.items-baseline.q-gutter-x-md
			q-select(v-model="type" label="Тип соединения" disable)
			q-chip(color="warning") Всего соединений: {{store.connections.length}}
			q-space
			q-btn(color="primary" unelevated @click="add") Добавить экземпляр

		component(:is="GreyBlock1" v-for="item in store.connections" :key="item.name" :name="item.name" @delete="store.deleteConnection(item)" @duble="addConnection")

	component(:is="AddDialogCommon" v-model="dialog" @add="addConnection")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import GreyBlock1 from '@/components/GreyBlock1.vue'
import AddDialogCommon from '@/components/AddDialogCommon.vue'

const store = useStore()
const type = ref('Docsvision')
const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addConnection = (e: string) => {
	store.addConnection(e)
	dialog.value = false
}
</script>

<style scoped lang="scss">
.q-select {
	width: 200px;
}
</style>
