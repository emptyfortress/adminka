<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableColumn } from 'quasar'

const store = useStore()
const localDatabases = ref([] as typeof store.databases)

localDatabases.value = JSON.parse(JSON.stringify(store.databases))

const columns: QTableColumn[] = [
	{
		name: 'psevdo',
		label: 'Псевдоним',
		field: 'psevdo',
		align: 'left',
		sortable: true,
	},
	{
		name: 'server',
		label: 'Сервер приложений',
		field: 'server',
		align: 'left',
		sortable: true,
	},
	{
		name: 'sql',
		label: 'Сервер SQL',
		field: 'sql',
		align: 'left',
		sortable: true,
	},
	{ name: 'action', label: 'Подключено', field: 'action', align: 'center' },
]

const pagination = ref({
	sortBy: 'psevdo',
	descending: false,
	rowsPerPage: 10,
})
</script>

<template lang="pug">
	.text-bold Выберите базу данных, для подключения:
	q-table.q-mt-md(
		:rows="localDatabases"
		:columns="columns"
		row-key="psevdo"
		flat
		hide-pagination
		v-model:pagination="pagination"
	)
		template(v-slot:body-cell-action="props")
			q-td(:props="props")
				q-checkbox(dense v-model="props.row.active" size="sm" :disable='props.row.dis')

		template(v-slot:body-cell-psevdo="props")
			q-td(:props="props")
				q-icon(name="mdi-database" color="secondary")
				span.q-ml-sm {{ props.row.psevdo }}

		template(v-slot:body-cell-server="props")
			q-td(:props="props")
				q-icon(name="mdi-server-network-outline" color="secondary")
				span.q-ml-sm {{ props.row.server }}

</template>

<style lang="scss" scoped>
.q-icon {
	font-size: 1.1rem;
}
</style>
