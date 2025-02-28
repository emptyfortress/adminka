<script setup lang="ts">

const modelValue = defineModel<boolean>()

const props = defineProps({
	zag: {
		type: String,
		default: 'Диалог',
	},
})
const emit = defineEmits(['remove', 'update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
}
const remove = () => {
	emit('update:modelValue', false)
}
// TODO: not finished common form with validation form and buttons and such
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-form(:autofocus='true' @submit="")
		q-card(style="min-width: 400px; padding: 1rem;")
			.row.items-center.q-pb-none
				.text-h6 {{ props.zag }}
				q-space
				q-btn(icon="mdi-close" flat round dense v-close-popup)
			q-card-section
				slot(name="content")
			q-card-actions.q-ma-sm(align="right")
				slot(name="actions")

</template>

<style scoped lang="scss"></style>
