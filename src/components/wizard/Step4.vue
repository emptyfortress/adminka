<script setup lang="ts">
import { reactive, ref } from 'vue'

const check = reactive([
	{ id: 0, mod: true, label: 'Approval Designer' },
	{ id: 1, mod: true, label: 'BackOffice' },
	{ id: 2, mod: true, label: 'Platform' },
	{ id: 3, mod: true, label: 'DocumentManagement' },
	{ id: 4, mod: true, label: 'TakeOffice' },
	{ id: 5, mod: true, label: 'WindowsClient' },
	{ id: 6, mod: true, label: 'WorkerService' },
	{ id: 7, mod: true, label: 'Workflow' },
])
const table = [
	{ id: 0, label: 'Имя', val: 'Конструктор согласований' },
	{ id: 1, label: 'Версия пакета установки', val: '5220' },
	{ id: 2, label: 'Версия генератора скрипта', val: '5443' },
	{ id: 5, label: 'Версия установленного пакета', val: '3212' },
	{ id: 3, label: 'Версия БД', val: '--' },
	{ id: 4, label: 'Пользовательские метаданные', val: 'Нет' },
]
const simple = [
	{
		label: 'WindowsClient',
		disabled: false,
		children: [
			{ label: 'Platform', disabled: true },
			{ label: 'TakeOffice', disabled: true },
		],
	},
	{ label: 'Workflow', children: [], disabled: true },
	{ label: 'Platform', children: [], disabled: true },
]
const ticked = ref(['WindowsClient', 'Workflow', 'Platform', 'TakeOffice'])
</script>

<template lang="pug">
.text-bold Выбор библиотек карточек для загрузки:
q-list.q-mt-md(separator)
	q-expansion-item(v-for="panel in check" :key="panel.id" :label="panel.label")
		template(v-slot:header)
			.head
				.title
					q-checkbox(v-model="panel.mod" dense :label="panel.label")

		q-card.mygrid
			.form(flat)
				template(v-for="item in table" :key="item.id")
					label {{item.label}}:
					div {{item.val}}
			.preview
				.zg.q-mb-md Зависимости
				q-tree(
					:nodes="simple"
					icon="mdi-chevron-right"
					tick-strategy="leaf"
					v-model:ticked="ticked"
					color="secondary"
					dense
					node-key="label"
					default-expand-all)

</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	background: transparent;
}
.form {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 2rem;
	row-gap: 0.5rem;
	margin: 1rem;
	padding: 1rem;
	background: white;
}
label {
	color: #666;
}

.q-expansion-item {
	transition: 0.2s ease all;
}

.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
	border-top: 1px solid $primary;
}

.q-expansion-item--expanded {
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
	border: 1px solid $primary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}
.preview .zg {
	color: $secondary;
	font-size: 0.8rem;
	text-transform: uppercase;
}
:deep(.q-checkbox--dense .q-checkbox__bg) {
	width: 70%;
	height: 70%;
}
</style>
