<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	text: {
		type: String,
		default: 'Создать базу данных со следующими параметрами',
	},
})

const table = [
	{ id: 0, label: 'Имя базы данных', val: 'lyahhova_gbl_2926' },
	{ id: 1, label: 'Псевдоним', val: 'lyahhova_gbl_2926' },
	{ id: 2, label: 'Язык', val: 'Русский' },
	{ id: 3, label: 'Тип сервера', val: 'PostgreSQL' },
	{ id: 4, label: 'Имя сервера', val: '109sv0001.digdes.com' },
	{ id: 5, label: 'Порт', val: '5432' },
]
const num = ref(600)
</script>

<template lang="pug">
.text-bold {{ props.text }}:
.form.q-mt-md(flat)
	template(v-for="item in table" :key="item.id")
		label {{item.label}}:
		div {{item.val}}
	label Ожидать завершения атомарной операции на SQL Server (сек.):
	q-input(type="number" v-model="num" dense outlined bg-color="white")

</template>

<style scoped lang="scss">
.form {
	width: 600px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	margin: 1rem auto;
	padding: 1rem;
}
label {
	color: #666;
}
</style>
