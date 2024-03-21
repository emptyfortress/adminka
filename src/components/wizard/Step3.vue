<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from '@/stores/form'

const forms = useForm()

const type = ref('')
const place = ref('Стандартное')
const lang = ref('Русский')
</script>

<template lang="pug">
.text-bold Укажите название и размещение базы данных:
q-form.q-mt-md
	.form
		label Имя:
		q-input(v-model="type" dense outlined bg-color="white")
		label Псевдоним:
		q-input(v-model="type" dense outlined bg-color="white")
		template(v-if="forms.step1.type !== 'SQL Server'")
			label Размещение:
			q-select(v-model="place" dense outlined bg-color="white")
			label Язык:
			q-select(v-model="lang" dense outlined bg-color="white")
</template>

<style scoped lang="scss">
.form {
	display: grid;
	grid-template-columns: auto 400px;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	margin: 0 auto;
}
.q-input,
.q-select {
	width: 100%;
}
</style>
