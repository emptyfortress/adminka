<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const localDatabases = ref([] as typeof store.databases)

localDatabases.value = JSON.parse(JSON.stringify(store.databases))

const columns = [
	{ name: 'psevdo', label: 'Psevdo', field: 'psevdo', align: 'left' },
	{ name: 'server', label: 'Server', field: 'server', align: 'left' },
	{ name: 'sql', label: 'SQL', field: 'sql', align: 'left' },
	{ name: 'action', label: 'Action', field: 'action', align: 'left' },
]
</script>

<template lang="pug">
	div Выберите базу данных, для подключения
	q-table(
		:rows="localDatabases"
		:columns="columns"
		row-key="psevdo"
		flat
		hide-pagination
	)
		template(v-slot:body-cell-action="props")
			q-td(:props="props")
				q-checkbox(dense v-model="props.row.active" size="sm")
</template>
