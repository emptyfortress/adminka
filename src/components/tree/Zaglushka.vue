<script setup lang="ts">
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
})

const list = [
	{
		id: 0,
		url: '/root/dvserver',
		label: 'Сервер приложений',
		descr: 'Настройки БД и сервера приложений',
		state: 1,
	},
	{
		id: 1,
		url: '/root/par/webclient',
		label: 'Web-клиент',
		descr: 'Настройки веб-клиента',
		state: 0,
	},
	{
		id: 2,
		url: '/root/par/worker',
		label: 'Служба фоновых операций',
		descr: 'Настройки workers',
		state: 0,
	},
	{
		id: 3,
		url: '/root/par/business-process',
		label: 'Сервис бизнес-процессов',
		descr: 'Настройки workflow',
		state: 0,
	},
	{
		id: 4,
		url: '/root/par/mailserver',
		label: 'Почтовый сервер',
		descr: 'Настройки почты и почтового клиента',
		state: 0,
	},
	{
		id: 5,
		url: '/root/par/search',
		label: 'Полнотекстовый поиск',
		descr: 'Настройки elastic',
		state: 0,
	},
	{
		id: 6,
		url: '/root/par/widgets',
		label: 'Виджеты',
		descr: 'Настройки виджетов',
		state: 2,
	},
]
</script>

<template lang="pug">
q-card(flat)
	q-card-section
		.flex.q-gutter-lg
			q-icon(name="mdi-information" color="secondary" size="lg")
			div Тут информация про машину

.zg Компоненты
q-list(separator)
	q-item(clickable v-for="item in list" :key="item.id")
		q-item-section(avatar)
			q-icon(name="mdi-code-block-braces" color="secondary")
		q-item-section
			q-item-label {{item.label}}
		q-item-section
			.flex.items-center.q-gutter-lg
				q-icon(v-if="item.state == 0" name="mdi-alert" size="sm")
				q-icon(v-if="item.state == 1" name="mdi-check-bold" color="positive" size="md")
				q-icon(v-if="item.state == 2" name="mdi-alert-circle-outline" color="negative" size="md")
				.descr {{item.descr}}
		// q-item-section
		// 	q-icon(name="mdi-close" color="primary")
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
</style>
