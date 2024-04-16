<script setup lang="ts">
const modelValue = defineModel()
const props = defineProps({
	zag: {
		type: String,
		default: '',
	},
})
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 {{ props.zag }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			slot(name="content")
		q-separator
		q-card-actions.q-ma-sm(align="right")
			slot(name="actions")
</template>

<style scoped lang="scss">
.q-card {
	min-width: 400px;
}
</style>
