<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	panel: {
		type: Object,
	},
})
const emit = defineEmits(['remove', 'update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
}
const remove = () => {
	emit('remove', props.panel)
	emit('update:modelValue', false)
}
</script>

<template lang="pug">
q-dialog(:model-value="props.modelValue")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6 Удалить экземляр службы
			q-space
			q-btn(icon="close" flat round dense @click="close")
		.q-my-lg
			span Вы точно хотите удалить экземпляр службы
			span.text-weight-bold.q-ml-sm {{ props.panel?.text}}?
		q-card-actions(align="right")
			q-btn(flat color="primary" label="Отмена" @click="close")
			q-btn(unelevated color="primary" label="Удалить" @click="remove")
</template>

<style scoped lang="scss"></style>
