<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWiz } from '@/stores/wiz'

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

const wiz = useWiz()

// const create = ref(0)
const start = () => {
	wiz.setCreate(1)
}
const stop = () => {
	wiz.setCreate(0)
}
</script>

<template lang="pug">
.mygrid(v-if='wiz.create !== 2')
	.text-bold
		q-icon(name="mdi-alert" :color="props.color" size="md").q-mr-md
		span(:class="calcClass") Внимание!
	div {{ props.text }}

.text-center.q-mt-md
	q-btn(v-if='wiz.create == 0' unelevated color="secondary" label="Подключить" @click="start" size='sm') 
	q-btn(v-if='wiz.create == 1' unelevated color="primary" label="Отмена" @click="stop") 
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
