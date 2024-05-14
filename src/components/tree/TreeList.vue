<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const selected = ref()
const select = (e: any) => {
	selected.value = e.label
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}

const list = computed(() => {
	switch (route.params.id[1]) {
		case 'webclient':
			return [
				{
					id: 0,
					label: 'Подключение к серверу приложений',
					field: '',
					selected: false,
				},
				{ id: 1, label: 'Общие настройки', field: '', selected: false },
				{ id: 2, label: 'Кэширование', field: '', selected: false },
				{ id: 3, label: 'Система', field: '', selected: false },
				{
					id: 4,
					label: 'Облачная подпись КриптоПро',
					field: '',
					selected: false,
				},
				{ id: 5, label: 'Грид', field: '', selected: false },
				{ id: 6, label: 'Локализации', field: '', selected: false },
				{ id: 7, label: 'Виды карточек', field: '', selected: false },
				{
					id: 8,
					label: 'Экспериментальные функции',
					field: '',
					selected: false,
				},
			]
		case 'worker':
			return [
				{
					id: 0,
					label: 'dv-agent',
					field: '',
					selected: false,
				},
				{ id: 1, label: 'webclient-worker', field: '', selected: false },
				{ id: 2, label: 'KonturDoc', field: '', selected: false },
				{ id: 3, label: 'testWorker_1', field: '', selected: false },
				{ id: 4, label: 'testWorker_2', field: '', selected: false },
			]
		case 'business-process':
			return [
				{ id: 0, label: 'Общие настройки', field: '', selected: false },
				{ id: 1, label: 'Сервис бизнес-процессов', field: '', selected: false },
				{ id: 2, label: 'Настройки почты', field: '', selected: false },
			]
		case 'mailserver':
			return [{ id: 0, label: 'Соединение d6d224', field: '', selected: false }]
		default:
			return []
	}
})
</script>

<template lang="pug">
q-list.left(dense)
	q-item(clickable v-for="item in list" :key="item.id" :class="{selected: selected == item.label}" @click="select(item)")
		q-item-section
			q-item-label {{ item.label }}
</template>

<style scoped lang="scss">
.left {
	height: calc(100vh - 165px);
	width: 100%;
	// background: pink;
}
.selected {
	color: $blue-10;
	border: 1px solid hsl(221 41% 73% / 1);
	background: var(--tree-selection);
}
</style>
