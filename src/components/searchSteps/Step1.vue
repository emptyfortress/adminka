<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableColumn } from 'quasar'
import { useStepperStore } from '@/stores/useStepperStore'

const store = useStore()
const stepper = useStepperStore()
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
	{ name: 'action', label: 'Подключено', field: 'action', align: 'center' },
]

const pagination = ref({
	sortBy: 'psevdo',
	descending: false,
	rowsPerPage: 10,
})

// Load data from payload when component is mounted or when going back
const loadFromPayload = () => {
	if (stepper.payload.psevdo && stepper.payload.server) {
		// Find the database in localDatabases that matches the payload
		const selectedDb = localDatabases.value.find(
			db =>
				db.psevdo === stepper.payload.psevdo &&
				db.server === stepper.payload.server
		)

		if (selectedDb) {
			// Uncheck all rows first
			localDatabases.value.forEach(db => {
				if (!db.dis) {
					db.active = false
				}
			})

			// Check the matching row
			selectedDb.active = true
		}
	}
}

// Watch for changes in payload to reload data when going back
watch(() => stepper.payload, loadFromPayload, { immediate: true })

const handleCheckboxClick = (row: any) => {
	if (row.dis) return

	// Uncheck all rows first
	localDatabases.value.forEach(db => {
		if (!db.dis) {
			db.active = false
		}
	})

	// Check the clicked row
	row.active = true
	stepper.step1.psevdo = row.psevdo
	stepper.step1.server = row.server
}

const selectedDatabase = computed(() => {
	return localDatabases.value.find(db => db.active && !db.dis)
})

const filteredDatabases = computed(() => {
	return localDatabases.value.filter(db => !db.active)
})
</script>

<template lang="pug">
.all900
	.arch
		.text-bold Выберите базу данных, для подключения:
		q-table.q-mt-md(
			:rows="filteredDatabases"
			:columns="columns"
			row-key="psevdo"
			flat
			hide-pagination
			v-model:pagination="pagination"
		)
			template(v-slot:body-cell-action="props")
				q-td(:props="props")
					q-checkbox(
						dense
						v-model="props.row.active"
						size="sm"
						:color=`props.row.dis ? "secondary" : "primary"`
						:disable='props.row.dis'
						@click="handleCheckboxClick(props.row)"
					)

			template(v-slot:body-cell-psevdo="props")
				q-td(:props="props")
					q-icon(name="mdi-database" color="secondary")
					span.q-ml-sm {{ props.row.psevdo }}

			template(v-slot:body-cell-server="props")
				q-td(:props="props")
					q-icon(name="mdi-server-network-outline" color="secondary")
					span.q-ml-sm {{ props.row.server }}

		q-separator.q-my-md

		span.text-bold Текущий выбор:
		span.q-ml-sm(v-if="selectedDatabase")
			q-icon(name="mdi-database-check" color="primary")
			span.q-ml-sm {{ selectedDatabase.psevdo }} ({{ selectedDatabase.server }})
		span.q-ml-sm(v-else)
			span.text-grey Ничего не выбрано
</template>

<style lang="scss" scoped>
.q-icon {
	font-size: 1.1rem;
}
.dis {
	opacity: 0.5;
}
</style>
