<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const newname = ref('')

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
}
const add = (e: string) => {
	store.addComputer(e)
	store.tabs1 = e
	newname.value = ''
	close()
}
</script>

<template lang="pug">
q-dialog(:model-value="props.modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Добавить компьютер
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close")

		q-form(@submit="add(newname)")
			q-card-section
				q-input(autofocus v-model="newname"  label="Имя компьютера в сети" @submit="add(newname)")

				q-card-section
					q-card-actions(align="right")
						q-btn(flat color="primary" label="Отмена"  @click="close")
						q-btn(unelevated color="primary" label="Добавить" type="submit")
</template>

<style scoped lang="scss">
.q-card {
	min-width: 400px;
}
</style>
