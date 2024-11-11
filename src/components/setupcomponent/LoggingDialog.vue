<script setup lang="ts">

const modelValue = defineModel<boolean>()
const close = () => {
	modelValue.value = false
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card(style="min-width: 400px;")
		q-card-section
			.row.items-center.q-pb-none
				.text-h6 Параметры
				q-space
				q-btn(icon="close" flat round dense @click="close")
			div Параметры резервного копирования/очистки журнала
		q-card-section
			FormKit(type="form" id="log" submit-label="Создать" @submit="create")
</template>

<style scoped lang="scss"></style>
