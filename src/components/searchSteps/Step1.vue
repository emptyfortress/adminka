<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableColumn } from 'quasar'

const store = useStore()
const localDatabases = ref([] as typeof store.databases)

localDatabases.value = JSON.parse(JSON.stringify(store.databases))

const columns: QTableColumn[] = [
	{ name: 'psevdo', label: 'Psevdo', field: 'psevdo', align: 'left', sortable: true },
	{ name: 'server', label: 'Server', field: 'server', align: 'left', sortable: true },
	{ name: 'sql', label: 'SQL', field: 'sql', align: 'left', sortable: true },
	{ name: 'action', label: 'Action', field: 'action', align: 'left' },
]

const pagination = ref({
	sortBy: 'psevdo',
	descending: false,
})
</script>

<template lang="pug">
	div Выберите базу данных, для подключения
	q-table(
		:rows="localDatabases"
		:columns="columns"
		row-key="psevdo"
		flat
		hide-pagination
		v-model:pagination="pagination"
	)
		template(v-slot:body-cell-action="props")
			q-td(:props="props")
				q-checkbox(dense v-model="props.row.active" size="sm")
</template>
