<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { rand } from '@vueuse/shared'
import { useWiz } from '@/stores/wiz'

const props = defineProps({
	hint: {
		type: String,
		default: 'Создание БД',
	},
	result: {
		type: String,
		default: 'Завершено успешно!',
	},
})

const wiz = useWiz()
const visible = ref(true)
const showData = ref(false)

onMounted(() => {
	setTimeout(() => {
		visible.value = false
		showData.value = true
		wiz.done = true
		wiz.finish++
	}, 5000)
})
onUpdated(() => {
	setTimeout(() => {
		visible.value = false
		showData.value = true
		wiz.done = true
		wiz.finish++
	}, 5000)
})

const greetings = [
	'Hello',
	'Привет',
	'Здравствуйте',
	'Наше вам с кисточкой',
	'Hi',
	'Yo!',
	'Hey',
	'Hola',
	'こんにちは',
	'Bonjour',
	'Salut!',
	'你好',
]
const word = ref('Hello')
const interval = ref(500)

const { pause, resume, isActive } = useIntervalFn(() => {
	word.value = greetings[rand(0, greetings.length - 1)]
}, interval)
</script>

<template lang="pug">
div
	template(v-if="visible")
		q-linear-progress.q-mt-lg(indeterminate)
		.text-center.q-mt-md {{ word }}
	.min
		q-card-section.suc(v-show="showData")
			q-icon(name="mdi-check-bold" color="teal" size="md").q-mr-md
			|{{ props.result }}

</template>

<style scoped lang="scss">
.min {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.wait {
	margin-top: 1rem;
	color: $primary;
}
.suc {
	color: teal;
	font-weight: 600;
	text-align: center;
}
</style>
