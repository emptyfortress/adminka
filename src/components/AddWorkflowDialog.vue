<script setup lang="ts">
const modelValue = defineModel<boolean>()

// const props = defineProps({
// 	modelValue: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	panel: {
// 		type: Object,
// 	},
// })
const emit = defineEmits(['remove', 'update:modelValue'])

const close = () => {
	// emit('update:modelValue', false)
}
const remove = () => {
	// emit('remove', props.panel)
	// emit('update:modelValue', false)
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6 Подключить сервис
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			q-input(autofocus v-model="service" label="Сервис")
			q-select(v-model="db" label="База данных" :options="options")
			q-input(v-model="proc" label="Доля процессоров" type='number')
			q-select(v-model="mail" label="Почтовое соединение" :options="options1")

			q-checkbox(v-model="outh" label='Использовать OAuth' dense)
			q-input(autofocus v-model="service" label="Сервис")

		// .q-my-lg
		// 	span Вы точно хотите удалить экземпляр службы
		// 	span.text-weight-bold.q-ml-sm {{ props.panel?.text}}?
		q-card-actions(align="right")
			q-btn(flat color="primary" label="Отмена" @click="close")
			q-btn(unelevated color="primary" label="Удалить" @click="remove")
</template>

<style scoped lang="scss"></style>
