<script setup lang="ts">
import { ref } from 'vue'

interface Props {
	filled: boolean
	bg: string
	options: string[]
}

const props = withDefaults(defineProps<Props>(), {
	filled: false,
	options: () => ['Options 1', 'Option 2'],
})

const modelValue = defineModel<string>()

const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
]
const select = ref()
</script>

<template lang="pug">
q-select(ref="select"
	v-model="modelValue"
	:filled="props.filled"
	:outlined="!props.filled"
	bg-color="white"
	:options="props.options"
	hide-bottom-space
	lazy-rules
	:rules="req"
	@blur="input.validate()")
</template>

<style scoped lang="scss">
:deep(.q-field__control) {
	height: 28px;
	min-height: 28px;
	font-size: 0.9rem;
}
:deep(.q-field__native) {
	min-height: 28px;
	// line-height: 20px;
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
