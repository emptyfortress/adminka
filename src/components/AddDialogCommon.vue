<template lang="pug">
q-dialog(:model-value="props.modelValue")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6(v-if="props.dv") Добавить конфигурацию
			.text-h6(v-if="props.worker") Добавить процесс
			.text-h6(v-if="props.connection") Добавить экземпляр
			q-space
			q-btn(icon="close" flat round dense @click="close")
		q-form(@submit="addConnection(newname)")
			q-card-section
				q-input(autofocus v-model="newname" v-if="props.dv" label="Название конфигурации" @submit="addConnection(newname)")
				q-input(autofocus v-model="newname" v-if="props.worker" label="Имя процесса" @submit="addConnection(newname)")
				q-input(autofocus v-model="newname" v-if="props.connection" label="Имя соединения")
				template(v-if="props.worker")
					q-select(v-model="config1" :options="options" label="Тип конфигурации")
				template(v-if="connection")
					q-select(v-model="config" :options="options" label="Конфигурация")
					q-select(v-model="config" :options="options" label="База данных")
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена"  @click="close")
				q-btn(unelevated color="primary" type="submit" label="Добавить" v-close-popup)

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	dv: {
		type: Boolean,
		default: false,
	},
	worker: {
		type: Boolean,
		default: false,
	},
	connection: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['add', 'update:modelValue'])

const newname = ref('name')
const config = ref('')
const config1 = ref('Базовые объекты')
const options = ['Option 1']

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
