<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import MySelect from '@/components/common/MySelect.vue'

interface Radio {
	label: string
	val: string
}

interface Props {
	filled?: boolean
	bg?: string
	label: string
	descr?: string
	disable?: boolean
	group: Radio[]
	startValue: string
}

const props = withDefaults(defineProps<Props>(), {
	label: 'Label',
	descr: 'This is description',
})

// const main = defineModel<string>('main')
// const check = defineModel<boolean>('check')
const rasp = ref(props.startValue)

const changed = ref(false)

const old = ref()
// const oldcheck = ref()

onMounted(() => {
	old.value = rasp.value
	// oldcheck.value = check.value
})
watch(rasp, (val, oldval) => {
	if (val) {
		changed.value = true
	}
})
const reset = () => {
	rasp.value = old.value
	nextTick(() => {
		changed.value = false
	})
}
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label {{ props.label }}
	.descr(v-if="props.descr") {{ props.descr }}
	q-list.q-mt-sm(dense)
		q-item(v-for="item in props.group" :key="item.label")
			q-item-section(avatar)
				q-radio(v-model="rasp" :val="item.val" dense :label="item.label")
	
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
	:deep(.q-field__native) {
		font-size: 1rem;
		text-align: center;
	}
}
</style>
