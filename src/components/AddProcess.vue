<template lang="pug">
q-dialog(:model-value="props.modelValue")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6 Подключить процесс
			q-space
			q-btn(icon="close" flat round dense @click="close")
		q-card-section
			q-input(autofocus v-model="newname" label="Имя процесса")
			q-select(v-model="config" label="Тип конфигурации" :options="options")

		q-card-actions(align="right")
			q-btn(flat label="Отмена"  @click="close")
			q-btn(unelevated color="primary" label="Добавить" v-close-popup @click="addConnection(newname)")

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['add', 'update:modelValue'])

const newname = ref('name')
const config = ref('Не выбрано')
const options = ['laskdj', 'laksj', 'Не выбрано']

const addConnection = (e: string) => {
	emit('add', e)
}
const close = () => {
	emit('update:modelValue', false)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
