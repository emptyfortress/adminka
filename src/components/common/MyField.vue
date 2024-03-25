<script setup lang="ts">
import MyInput from '@/components/common/MyInput.vue'
import MySelect from '@/components/common/MySelect.vue'

interface Props {
	filled: boolean
	bg: string
	options?: string[]
	select: boolean
	type: string
	label: string
	descr?: string
}

const props = withDefaults(defineProps<Props>(), {
	filled: false,
	options: () => ['Options 1', 'Option 2'],
	select: false,
	type: 'text',
	label: 'Label',
	descr: 'This is description',
})

const modelValue = defineModel<string>()
</script>

<template lang="pug">
.data
	q-btn(flat icon="mdi-restore" color="secondary" dense) 
		q-tooltip Вернуть значения по умолчанию
	.inner
	label {{ props.label }}
	.descr(v-if="props.descr") {{ props.descr }}
	MyInput(v-model="modelValue" v-if="!props.select" :bg="props.bg" :filled="props.filled" :type="props.type")
	MySelect(v-model="modelValue" v-else :bg="props.bg" :filled="props.filled")
</template>

<style scoped lang="scss">
.data {
	padding: 1rem;
	padding-top: 0.3rem;
	margin-left: 1rem;
	border: 1px solid transparent;
	position: relative;
	&:hover {
		background: #e0e0e0;
		border: 1px solid #ccc;
		.q-btn {
			display: inline-flex;
		}
	}
	.q-input,
	.q-select {
		max-width: 400px;
		margin-top: 4px;
	}
	label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
	}
	.descr {
		color: #666;
	}
	.inner {
		width: 1px;

		position: absolute;
		top: 0.5rem;
		bottom: 1rem;
		left: 0.2rem;
		border-right: 3px solid $primary;
	}
	.q-btn {
		position: absolute;
		left: -2rem;
		top: 0.1rem;
		display: none;
	}
}
</style>
