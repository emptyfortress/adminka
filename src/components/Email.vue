<template lang="pug">
div
	.zag Настройки почтового сервера
	q-card.card
		.row.items-baseline.q-gutter-x-md
			q-select(v-model="type" label="Тип соединения" disable)
			q-chip(color="warning") Всего соединений: {{connections.length}}
			q-space
			q-btn(color="primary" unelevated @click="add") Добавить экземпляр
		component(:is="GreyBlock" v-for="item in connections" :key="item.name" :name="item.name" @delete="del" @duble="addConnection")

	component(:is="AddDialogCommon" v-model="dialog" @add="addConnection")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GreyBlock from '@/components/GreyBlock.vue'
import AddDialogCommon from '@/components/AddDialogCommon.vue'

const type = ref('Почтовый сервер')

const connections = reactive([{ name: 'd6d224' }])

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addConnection = (e: string) => {
	connections.push({ name: e })
	dialog.value = false
}
const del = (e: string) => {
	let index = connections.indexOf((item: any) => item.name === e)
	connections.splice(index, 1)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-select {
	width: 200px;
}
</style>
