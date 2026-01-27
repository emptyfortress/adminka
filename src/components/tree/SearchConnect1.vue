<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableProps } from 'quasar'
import SearchConnect from '@/components/tree/SearchConnect.vue'
import MasterSearch from '@/components/setupcomponent/MasterSearch.vue'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const dialog = ref(false)
const router = useRouter()
const route = useRoute()

// локальная копия для выбора баз данных в диалоге
const localDatabases = ref([] as typeof store.databases)

// при открытии диалога клонируем текущее состояние
watch(dialog, val => {
	if (val) {
		// deep clone, чтобы не менять оригинал по ссылке
		localDatabases.value = JSON.parse(JSON.stringify(store.databases))
	}
})

const columns: QTableProps['columns'] = [
	{
		name: 'psevdo',
		required: true,
		label: 'Псевдоним',
		align: 'left',
		field: 'psevdo',
		sortable: true,
	},
	{
		name: 'server',
		align: 'left',
		label: 'Сервер SQL',
		field: 'server',
		sortable: true,
	},
	{
		name: 'servertype',
		align: 'left',
		label: 'Тип сервера',
		field: 'servertype',
		sortable: true,
	},
	{
		name: 'index',
		align: 'center',
		label: 'Статус индексирования',
		field: 'index',
		sortable: true,
	},
	{
		name: 'indexplace',
		align: 'left',
		label: 'Тип индексирования',
		field: 'indexplace',
		sortable: true,
	},
	{ name: 'action1', align: 'right', label: '', field: '' },
	{ name: 'action', align: 'right', label: '', field: '' },
]

const rows = computed(() => {
	return store.activeDatabases
})

const remove = (item: any) => {
	item.active = false
	item.dis = false
}

const goto = (evt: Event, row: any, index: number) => {
	router.push(route.fullPath + '/' + row.psevdo)
}
</script>

<template lang="pug">
.database
	br
	label БД с полнотекстовым поиском
	.descr Базы данных, использующие сервис полнотекстового поиска
	div
		q-table.mywidth(
			:rows='rows',
			:columns='columns',
			row-key='name' hide-bottom,
			@row-click='goto'
		)
			template(v-slot:body-cell-active='props')
				q-td(key="active" :props="props" auto-width)
					q-icon(name="mdi-circle-slice-8" color="green" v-if="props.row.active")
						q-tooltip Доступна
					q-icon(name="mdi-circle-slice-8" color="red" v-else)
						q-tooltip Недоступна

			template(v-slot:body-cell-index='props')
				q-td.text-center(:props='props')
					q-toggle(dense, size='sm'
						color="teal"
						:label='props.row.index ? "Вкл." : "Откл."'
						v-model="props.row.index")

			template(v-slot:body-cell-action='props')
				q-td.text-right
					q-btn.q-mr-md(:props="props" flat icon='mdi-database-remove-outline' label="Отключить" size='sm' color="primary" dense @click.stop)
						q-menu
							q-list(:props="props")
								q-item(clickable :props="props" @click="remove(props.row)" v-close-popup).pink
									q-item-section Отключить
					q-btn(:props="props" round flat icon='mdi-chevron-right' size='md' dense)

			template(v-slot:body-cell-action1='props')
				q-td.text-right
					q-btn.q-mr-md(:props="props" flat icon='mdi-magnify-remove-outline' label="Удалить индексы" size='sm' color="primary" dense @click.stop)
						q-menu
							q-list(:props="props")
								q-item(clickable :props="props" @click="remove(props.row)" v-close-popup).pink
									q-item-section Удалить

	q-btn(unelevated color='secondary' @click='dialog = !dialog' size="sm") Подключить

br
SearchConnect
MasterSearch(v-model="dialog")
</template>

<style scoped lang="scss">
.database {
	padding-left: 2px;
	padding-right: 2px;
	margin-left: 2rem;
}
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	padding: 5px 8px;
}
.master {
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}
.q-table th,
.q-table td {
	padding: 5px 8px;
}
.q-tr {
	cursor: pointer;
}
label {
	font-size: 1rem;
	font-weight: 600;
	color: #666;
}
.q-dialog label {
	font-weight: 400;
	color: #000;
	font-size: 0.85rem;
}
.mywidth {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	display: inline-block;
	max-width: unset; // отменяет 100% ширину по умолчанию
	// min-width: 600px;
}
.descr {
	color: #666;
}
:deep(.q-toggle__label) {
	font-size: 0.75rem;
}
</style>
