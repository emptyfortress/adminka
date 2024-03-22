<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	filled: {
		type: Boolean,
		default: false,
	},
	bg: {
		type: String,
		default: 'white',
	},
})

const modelValue = defineModel<string>()

const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
]
const input = ref()
</script>

<template lang="pug">
q-input(ref="input"
	v-model="modelValue"
	:filled="props.filled"
	:outlined="!props.filled"
	:bg-color="props.bg"
	hide-bottom-space
	lazy-rules :rules="req" @blur="input.validate()")
</template>

<style scoped lang="scss">
:deep(.q-field__control) {
	height: 28px;
	font-size: 0.8rem;
}
:deep(.q-field__marginal) {
	height: inherit;
}
:deep(.q-icon) {
	width: 0.4rem;
	font-size: 20px;
}
:deep(.q-field__messages) {
	font-size: 0.65rem;
}
</style>
