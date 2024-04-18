<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import MySelect from '@/components/common/MySelect.vue'

interface Props {
	filled?: boolean
	bg?: string
	options?: string[]
	select?: boolean
	type?: any
	label?: string
	descr?: string
	nodescr?: boolean
	disable?: boolean
	readonly?: boolean
	checkbox?: boolean
	checkvalue?: boolean
	button?: boolean
	btLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
	filled: false,
	options: () => ['Options 1', 'Option 2'],
	select: false,
	type: 'text',
	bg: 'white',
	button: false,
	btLabel: 'Добавить',
	descr: 'This is description',
	readonly: false,
	checkbox: false,
	checkvalue: false,
})

const main = defineModel<string>('main')
const check = defineModel<boolean>('check')

const changed = ref(false)

const old = ref()
const oldcheck = ref()

onMounted(() => {
	old.value = main.value
	oldcheck.value = check.value
})
watch(main, (val, oldval) => {
	if (val) {
		changed.value = true
	}
})
watch(check, (val, oldval) => {
	if (val !== oldval) {
		changed.value = true
	}
})
const reset = () => {
	main.value = old.value
	check.value = oldcheck.value
	nextTick(() => {
		changed.value = false
	})
}
const item = ref(false)
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label(v-if="props.label") {{ props.label }}
	.descr(v-if="!props.nodescr && !props.checkbox") {{ props.descr }}
	div
		q-checkbox(v-model="check" dense :label="props.descr" v-if="checkbox" :disable="props.disable")
	MyInput(v-model="main" v-if="!props.select && !props.checkbox" :bg="props.bg" :filled="props.filled" :type="props.type" :disable="props.disable" :readonly="props.readonly")
	MySelect(v-model="main" v-if="props.select && !props.checkbox" :bg="props.bg" :filled="props.filled" :options="props.options")
	q-btn.add(v-if="props.button" unelevated color="secondary" :label="props.btLabel" size="sm") 

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
	.refresh {
		position: absolute;
		left: -2rem;
		top: 0.1rem;
		display: none;
	}
	.add {
		margin-top: 4px;
	}
}
</style>
