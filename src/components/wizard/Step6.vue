<script setup lang="ts">
import { useWiz } from '@/stores/wiz'
const wiz = useWiz()
</script>

<template lang="pug">
.text-bold Загрузить дополнительные настройки следующих модулей:
.column.q-mt-md
	q-checkbox(v-for="item in wiz.check" :key="item.id" :label="item.label" v-model="item.val")

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
