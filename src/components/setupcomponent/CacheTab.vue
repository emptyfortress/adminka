<script setup lang="ts">
import { ref, computed } from 'vue'

const prov = ref('InMemory')
const line = ref('')
const pass = ref('')
const schet = ref(false)

const options = ['InMemory', 'NoCache', 'Redis']
const loading = ref(false)
const check = ref(false)

const test = () => {
	loading.value = true
	setTimeout(() => {
		loading.value = false
		check.value = true
	}, 2000)
}
const calcColor = computed(() => {
	if (check.value === true) {
		return 'teal'
	}
	return 'primary'
})
</script>

<template lang="pug">
.all
	.arch
		.title Настройки провайдера
		.more
			label Провайдер:
			q-select(v-model="prov" :options="options" dense)
			label(:class="{dis : prov !=='Redis'}") Строка подключения:
			.row.items-center
				q-input(v-model="line" dense :disable="prov !== 'Redis'")
				q-btn(unelevated :color="calcColor" size="xs" :loading="loading" :disable="prov !== 'Redis'" @click="test").q-ml-md
					q-icon(v-if="check" name="mdi-check-bold" color="white")
					span(v-else) Test
			label(:class="{dis : prov !=='Redis'}") Пароль:
			q-input(v-model="pass" dense :disable="prov !== 'Redis'")
			label
	.arch.q-mt-xs
		div
		q-checkbox(v-model="schet" label="Включить счетчики производительности")
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
.dis {
	opacity: 0.3;
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
.more {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-select,
.q-input {
	width: 350px;
	font-size: 1rem;
}
</style>
