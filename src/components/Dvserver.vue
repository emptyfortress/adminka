<template lang="pug">
div
	.zag Настройки сервера Docsvision
	q-card.card
		.row.items-baseline.q-gutter-x-md
			q-chip(color="warning") Всего конфигураций: {{store.config.length}}
			q-space
			q-btn(color="primary" unelevated @click="add") Добавить конфигурацию

		component(:is="GreyBlock3" v-for="item in store.config" :key="item.id" :name="item.name" @delete="store.removeConfig(item)" @duble="addConfig(item.name)")

	component(:is="AddDialogCommon" v-model="dialog" @add="addConfig" dv)
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GreyBlock3 from '@/components/GreyBlock3.vue'
import AddDialogCommon from '@/components/AddDialogCommon.vue'
import { useStore } from '@/stores/store'

const store = useStore()

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addConfig = (e: string) => {
	store.addConfig(e)
	dialog.value = false
}
</script>

<style scoped lang="scss">
.q-select {
	width: 200px;
}
.card {
	max-width: clamp(600px, 70%, 1200px);
}
</style>
