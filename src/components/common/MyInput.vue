<script setup lang="ts">
import { ref } from 'vue'

interface Props {
	filled: boolean
	bg: string
	type: string
	disable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	filled: false,
	bg: 'white',
	type: 'text',
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
	:type="props.type"
	:disable="props.disable"
	hide-bottom-space
	lazy-rules :rules="req" @blur="input.validate()")
</template>

<style scoped lang="scss">
:deep(.q-field__control) {
	height: 28px;
	font-size: 0.9rem;
}
:deep(.q-field__native) {
	line-height: 24px;
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
