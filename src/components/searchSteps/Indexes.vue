<script setup lang="ts">
import { ref } from 'vue'
import type { QTableColumn } from 'quasar'

const changed = ref(false)
const reset = () => {
	changed.value = false
}

const columns: QTableColumn[] = [
	{
		name: 'name',
		label: 'Название',
		field: 'name',
		align: 'left',
		sortable: true,
	},
	{
		name: 'type',
		label: 'Тип',
		field: 'type',
		align: 'left',
		sortable: true,
	},
	{
		name: 'lang',
		label: 'Язык',
		field: 'lang',
		align: 'left',
		sortable: true,
	},
	{
		name: 'size',
		label: 'Размер',
		field: 'size',
		align: 'left',
		sortable: true,
	},
	{
		name: 'status',
		label: 'Статус',
		field: 'status',
		align: 'left',
		sortable: true,
	},
]

const rows = [
	{
		name: '[dbo][dv-card-0]',
		type: 'CardXml',
		lang: 'Нейтральный',
		size: 0,
		status: 'Installed',
	},
	{
		name: '[dbo][dv-card-en]',
		type: 'CardXml',
		lang: 'Английский',
		size: 0,
		status: 'Installed',
	},
	{
		name: '[dbo][dv-card-ru]',
		type: 'CardXml',
		lang: 'Русский',
		size: 0,
		status: 'Installed',
	},
	{
		name: '[dbo][dv-file-0]',
		type: 'File',
		lang: 'Нейтральный',
		size: 0,
		status: 'Installed',
	},
	{
		name: '[dbo][dv-file-en]',
		type: 'File',
		lang: 'Английский',
		size: 0,
		status: 'Installed',
	},
	{
		name: '[dbo][dv-file-ru]',
		type: 'File',
		lang: 'Русский',
		size: 0,
		status: 'Installed',
	},
]

const stat = [
	{
		id: 0,
		label: 'Installed',
		descr:
			'созданы все необходимые объекты, но индексы пусты (консоль только завершила процесс создания индексов).',
	},
	{
		id: 1,
		label: 'Initializing',
		descr:
			'происходит индексирование карточек, созданных за прошедший период неактивности индексации.',
	},
	{
		id: 2,
		label: 'InitPaused',
		descr: 'процесс инициализации приостановлен.',
	},
	{
		id: 3,
		label: 'Active',
		descr: 'все процессы индексации завершены.',
	},
	{
		id: 4,
		label: 'Updating',
		descr:
			'обновление информации в карточках, которые были изменены за прошедший период.',
	},
	{
		id: 5,
		label: 'UpdatingPaused',
		descr: 'процесс обновления приостановлен.',
	},
]
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label Состояние индексации данных
	.descr Текущий статус процесса полнотекстового индексирования.
	.grid
		q-table.q-mt-sm(
			flat
			:columns="columns"
			:rows='rows'
			hide-bottom
		)
		div
			.hd Статусы
			q-markup-table.trans(flat)
				q-tr(v-for="item in stat")
					q-td.lab {{ item.label }}
					q-td.des {{ item.descr }}

</template>

<style scoped lang="scss">
.trans .q-table td,
.trans .q-table th {
	background: transparent;
	white-space: wrap;
	vertical-align: top;
}
.lab {
	color: $secondary;
	font-weight: 600;
	text-align: right;
}
.des {
	padding-top: 10px;
	font-size: 0.8rem;
	color: #333;
	line-height: 1.1;
}
.q-markup-table {
	background: transparent;
}
.grid {
	display: grid;
	grid-template-columns: 640px 1fr;
	column-gap: 2rem;
}
.hd {
	font-weight: 600;
	color: #666;
	margin-left: 1rem;
	text-align: center;
}
// :deep(.q-table__container) {
// 	width: 640px;
// }
</style>
