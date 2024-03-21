<script setup lang="ts">
import { ref } from 'vue'

const rasp = ref('one')
</script>

<template lang="pug">
.all
	.arch
		.title Настройки логирования:
		div
			q-radio(v-model="rasp" val="one" label="Логировать все")
			q-radio(v-model="rasp" val="two" label="Фильтровать лог")
			q-radio(v-model="rasp" val="three" label="Логировать только ошибки")
	br
	.arch
		.title Настройки бэкапа логов:
</template>

<style scoped lang="scss">
.all {
	width: 900px;
	margin: 0 auto;
}
.title {
	font-size: 0.8rem;
	text-transform: uppercase;
	color: $secondary;
	word-spacing: 0.5rem;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 230px 1fr;
	align-items: center;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-radio {
	margin-left: 1rem;
}
</style>
