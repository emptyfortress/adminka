<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableProps } from 'quasar'
import SearchConnect from '@/components/tree/SearchConnect.vue'

const store = useStore()

const columns: QTableProps['columns'] = [
	{
		name: 'active',
		required: true,
		label: '',
		field: 'active',
		sortable: false,
		align: 'left',
	},
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
		label: 'Сервер приложений',
		field: 'server',
		sortable: true,
	},
	// {
	// 	name: 'servertype',
	// 	align: 'left',
	// 	label: 'Тип сервера',
	// 	field: 'servertype',
	// 	sortable: true,
	// },
	{
		name: 'index',
		align: 'left',
		label: 'Индекс',
		field: 'index',
		sortable: true,
	},
	// {
	// 	name: 'version',
	// 	align: 'left',
	// 	label: 'Версия',
	// 	field: 'version',
	// 	sortable: true,
	// },
	// {
	// 	name: 'cache',
	// 	align: 'left',
	// 	label: 'Кэш',
	// 	field: 'cache',
	// 	sortable: true,
	// },
	// {
	// 	name: 'date',
	// 	align: 'left',
	// 	label: 'Создано',
	// 	field: 'date',
	// 	sortable: true,
	// },
	// {
	// 	name: 'def',
	// 	align: 'center',
	// 	label: 'По умолчанию',
	// 	field: 'def',
	// 	sortable: true,
	// },
	{ name: 'action', align: 'right', label: '', field: '' },
]

const dialog = ref(false)
</script>

<template lang="pug">
.database
	br
	label Сервер приложений
	div
		q-table.mywidth(:rows='store.databases' :columns='columns' row-key='name' hide-bottom)
			template(v-slot:body-cell-active='props')
				q-td(key="active" :props="props" auto-width)
					q-icon(name="mdi-circle-slice-8" color="green" v-if="props.row.active")
						q-tooltip Доступна
					q-icon(name="mdi-circle-slice-8" color="red" v-else)
						q-tooltip Недоступна
			template(v-slot:body-cell-action='props')
				q-td.text-right
					q-btn.q-mr-md(:props="props" flat icon='mdi-database-remove-outline' label="Отключить" size='sm' color="primary" dense @click.stop)
						q-menu
							q-list(:props="props")
								q-item(clickable :props="props" @click="" v-close-popup).pink
									q-item-section Отключить
					q-btn(:props="props" round flat icon='mdi-chevron-right' size='md' dense)

	q-btn(unelevated color='secondary' @click='dialog = !dialog' size="sm") Подключить

br
SearchConnect

q-dialog(v-model="dialog")
	q-card.q-pa-sm
		q-card-section(class="row items-center q-pb-none")
			div(class="text-h6") Подключить
			q-space
			q-btn(icon="close" flat round dense v-close-popup)
		q-card-section Нужно описание, что в этом окне?
		q-card-actions(align="right")
			q-btn(flat label="Отмена" color="primary" v-close-popup)
			q-btn(flat label="OK" color="primary" v-close-popup)

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
// :deep(.q-table__container) {
// 	width: 600px;
// }
.mywidth {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	display: inline-block;
	max-width: unset; // отменяет 100% ширину по умолчанию
	min-width: 600px;
	.q-table__middle {
		// width: auto !important;
	}
	table {
		// width: auto;
	}
}
</style>
