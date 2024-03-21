<script setup lang="ts">
import { ref } from 'vue'

const item = ref('one')
</script>

<template lang="pug">
.text-bold Выберите SQL-скрипт для создания базы данных:
q-form.q-mt-md.column
	q-radio(v-model="item" val="one" label="Стандартный (рекомендуется)")
	.row.items-center
		q-radio(v-model="item" val="two" label="Другой").q-mr-xl
		input(type="file").fu
</template>

<style scoped lang="scss">
.fu {
	background: white;
	padding: 5px;
	border: 1px solid #ccc;
}
</style>
