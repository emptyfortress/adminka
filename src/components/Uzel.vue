<template lang="pug">
div
	.grid2
		.left
			q-icon(name="mdi-circle-slice-8" size="26px" color="green")
			span {{props.name}}
		.q-gutter-x-sm.text-right
			q-chip(color="warning") Всего процессов: {{processes.length}}
			q-btn(color="primary" unelevated @click="add") Подключить процесс
			q-btn(flat round icon="mdi-reload")
				q-tooltip Перезапустить службу

	component(:is="GreyBlock2" v-for="item in processes" :key="item.name" :name="item.name" @del="delProcess")

	component(:is="AddProcess" v-model="dialog" @add="addProcess")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GreyBlock2 from '@/components/GreyBlock2.vue'
import AddProcess from '@/components/AddProcess.vue'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})
const processes = reactive([{ name: 'Coolname' }])

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addProcess = (e: string) => {
	processes.push({ name: e })
	dialog.value = false
}
const delProcess = (e: string) => {
	let index = processes.indexOf((item: any) => item.name === e)
	processes.splice(index, 1)
}
</script>

<style scoped lang="scss">
.grid2 {
	display: grid;
	grid-template-columns: auto 440px;
	gap: 0.5rem;
}
.left {
	font-size: 1.5rem;
	text-transform: uppercase;
	.q-icon {
		margin-right: 0.5rem;
	}
}
</style>
