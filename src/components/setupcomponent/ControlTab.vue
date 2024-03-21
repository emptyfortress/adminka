<script setup lang="ts">
import { ref } from 'vue'

const hour3 = ref(600)
const path = ref('')
</script>

<template lang="pug">
.all
	.arch
		.title Сценарий обслуживания
		.column
			.check
				q-input(dense v-model="path" label="Путь к файлу сценария").cs
				q-btn(unelevated round icon="mdi-dots-horizontal" dense).wh 
			.check
				div Таймаут
				q-input(v-model="hour3" type="number" dense).smm
				div сек.
				q-btn(outline color="primary" label="Выполнить" size="sm").q-ml-xl
		
	.arch.q-mt-xs
		div
		q-btn(unelevated color="primary" label="Пересоздать задания БД")
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
}
.check {
	display: flex;
	justify-content: flex-start;
	gap: 0.5rem;
	align-items: baseline;
	.q-checkbox {
		transform: translateY(15px);
	}
}
.smm {
	width: 70px;
	:deep(.q-field__native) {
		text-align: center;
		font-size: 1.1rem;
	}
}
.sma {
	width: 200px;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 250px 1fr;
	align-items: center;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
label {
	width: 100%;
}
.bt {
	width: 220px;
	margin-top: 1rem;
	margin-left: 1.2rem;
}
.cs {
	width: 350px;
}
.wh .q-icon {
	color: red;
}
</style>
