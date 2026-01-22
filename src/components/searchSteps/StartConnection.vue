<script setup lang="ts">
import { computed, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { rand } from '@vueuse/shared'

const props = defineProps({
	text: {
		type: String,
		default:
			'Подключение полнотекстового поиска может занять длительное время. Это не повлияет на пользователей и сервисы, использующие эту базу данных. Поиск будет доступен после завершения индексирования.',
	},
	color: {
		type: String,
		default: 'negative',
	},
})

const calcClass = computed(() => {
	return 'text-' + props.color
})

const connect = ref(0)
const start = () => {
	connect.value = 1
	setTimeout(() => {
		connect.value = 2
	}, 3000)
}
const stop = () => {
	connect.value = 0
}
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
const interval = ref(200)

const { pause, resume, isActive } = useIntervalFn(() => {
	word.value = greetings[rand(0, greetings.length - 1)]
}, interval)
</script>

<template lang="pug">
.mygrid
	template(v-if='connect == 2')
		.text-bold
			q-icon(name="mdi-check-bold" color="teal" size="md").q-mr-md
			span Успешно!
		div Индексирование настроено для выбранной базы данных. Полнотекстовый поиск будет доступен после завершения завершения инициализации каталогов.
		// div Полнотекстовый поиск подключен к выбранной базе данных и будет доступен после завершения индексирования.

	template(v-if='connect !== 2')
		.text-bold
			q-icon(name="mdi-alert" :color="props.color" size="md").q-mr-md
			span(:class="calcClass") Внимание!
		div {{ props.text }}


.text-center.q-mt-md
	q-btn(v-if='connect == 0' unelevated color="secondary" label="Подключить" @click="start" size='sm') 
	q-btn(v-if='connect == 1' unelevated color="secondary" label="Отмена" @click="stop" size='sm') 
	template(v-if="connect == 1")
		q-linear-progress.q-mt-lg(indeterminate)
		.text-center.q-mt-sm {{ word }}
</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-content: start;
	align-items: center;
	column-gap: 3rem;
}
</style>
