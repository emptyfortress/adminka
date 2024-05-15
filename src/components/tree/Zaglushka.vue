<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { tree } from '@/stores/serverTree'
import { getMembers } from '@/utils/utils'
import { useElementSize } from '@vueuse/core'

const router = useRouter()

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
})

const list = [
	{
		id: 0,
		url: '/appserver',
		label: 'Сервер приложений',
		descr: 'Настройки БД и сервера приложений',
		state: 1,
	},
	{
		id: 1,
		url: '/webclient',
		label: 'Web-клиент',
		descr: 'Настройки веб-клиента',
		state: 3,
	},
	{
		id: 2,
		url: '/worker',
		label: 'Служба фоновых операций',
		descr: 'Настройки workers',
		state: 0,
	},
	{
		id: 3,
		url: '/business-process',
		label: 'Сервис бизнес-процессов',
		descr: 'Настройки workflow',
		state: 0,
	},
	{
		id: 4,
		url: '/mailserver',
		label: 'Почтовый сервер',
		descr: 'Настройки подключения к почтовому серверу',
		state: 0,
	},
	{
		id: 5,
		url: '/search',
		label: 'Полнотекстовый поиск',
		descr: 'Настройки elastic',
		state: 0,
	},
	{
		id: 6,
		url: '/widgets',
		label: 'Виджеты',
		descr: 'Настройки виджетов',
		state: 2,
	},
]

const goto = (e: string) => {
	router.push('/root/' + props.id + e)
}

const route = useRoute()

const test = () => {
	console.log(current.value)
}
const current = computed(() => {
	let flat = getMembers(tree)
	let curr = flat.find((item: any) => {
		return item.text == props.id
	})
	return curr
})

const el = ref(null)
const { width, height } = useElementSize(el)
</script>

<template lang="pug">
div
	q-card(flat)
		q-card-section
			.flex.q-gutter-lg
				q-icon(name="mdi-information" color="secondary" size="lg" @click="test")
				.grid
					label Имя устройства:
					.val {{ current.text }}
					label Псевдоним устройства:
					.val {{ current.psevdo }}
					label Операционная система:
					.val {{ current.system }}
					label Рабочее окружение
					.val {{ current.env }}

	.zg Компоненты
	q-list(separator ref="el")
		q-item(clickable v-for="item in list" :key="item.id" @click="goto(item.url)")
			q-item-section(avatar)
				q-icon(name="mdi-code-block-braces" color="secondary")
			q-item-section
				q-item-label {{item.label}}
			q-item-section(v-if="width > 780")
				.flex.items-center.q-gutter-lg
					q-icon(v-if="item.state == 0" name="mdi-alert" size="sm")
					q-icon(v-if="item.state == 1" name="mdi-check-bold" color="positive" size="md")
					q-icon(v-if="item.state == 2" name="mdi-alert-circle-outline" color="negative" size="md")
					q-icon(v-if="item.state == 3" name="mdi-progress-question" color="secondary" size="md")
					.descr {{item.descr}}
			q-item-section(side)
				q-icon(name="mdi-chevron-right" color="secondary")
</template>

<style scoped lang="scss">
.zg {
	margin-top: 1rem;
	font-size: 1.4rem;
}
.q-list {
	font-size: 1rem;
	color: $secondary;
}
.descr {
	font-size: 0.9rem;
}
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	// justify-items: start;
	// align-items: stretch;
	column-gap: 1rem;
	// row-gap: 0.5rem;
}
.val {
	font-weight: 600;
}
</style>
