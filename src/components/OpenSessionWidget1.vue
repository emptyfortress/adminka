<script setup lang="ts">
import type { QTableProps } from 'quasar'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cols: QTableProps['columns'] = [
	{
		name: 'status',
		field: 'status',
		label: 'Статус',
		sortable: true,
		align: 'right',
	},
	{
		name: 'user',
		field: 'user',
		label: 'Пользователь',
		sortable: true,
		align: 'left',
	},
	{
		name: 'comp',
		field: 'comp',
		label: 'Компьютер',
		sortable: true,
		align: 'left',
	},
	{
		name: 'in',
		field: 'in',
		label: 'Время входа',
		sortable: true,
		align: 'left',
	},
	{
		name: 'idle',
		field: 'idle',
		label: 'Время бездействия',
		sortable: true,
		align: 'right',
	},
]

const rows = [
	{
		id: 0,
		status: 1,
		user: 'kmg01',
		comp: '109pc116dv',
		in: '22.03.2025 15:47',
		idle: '00:22:14',
	},
	{
		id: 1,
		status: 1,
		user: 'kmg02',
		comp: '190pc161dv',
		in: '22.03.2025 11:25',
		idle: '00:03:09',
	},
	{
		id: 2,
		status: 1,
		user: 'kmg03',
		comp: '150pc182dv',
		in: '22.03.2025 09:55',
		idle: '01:06:13',
	},
	{
		id: 3,
		status: 0,
		user: 'kmg04',
		comp: '125pc102dv',
		in: '22.03.2025 09:52',
		idle: '00:02:03',
	},
	{
		id: 4,
		status: 1,
		user: 'kmg05',
		comp: '110pc117dv',
		in: '22.03.2025 14:30',
		idle: '00:15:45',
	},
	{
		id: 5,
		status: 0,
		user: 'kmg06',
		comp: '191pc162dv',
		in: '22.03.2025 10:10',
		idle: '00:45:22',
	},
	{
		id: 6,
		status: 1,
		user: 'kmg07',
		comp: '151pc183dv',
		in: '22.03.2025 08:40',
		idle: '02:30:10',
	},
	{
		id: 7,
		status: 1,
		user: 'kmg08',
		comp: '126pc103dv',
		in: '22.03.2025 09:15',
		idle: '00:10:05',
	},
	{
		id: 8,
		status: 0,
		user: 'kmg09',
		comp: '112pc118dv',
		in: '22.03.2025 13:20',
		idle: '01:22:33',
	},
	{
		id: 9,
		status: 1,
		user: 'kmg10',
		comp: '192pc163dv',
		in: '22.03.2025 12:05',
		idle: '00:03:47',
	},
	{
		id: 10,
		status: 1,
		user: 'kmg11',
		comp: '152pc184dv',
		in: '22.03.2025 07:50',
		idle: '03:15:20',
	},
	{
		id: 11,
		status: 0,
		user: 'kmg12',
		comp: '127pc104dv',
		in: '22.03.2025 08:30',
		idle: '00:25:15',
	},
	{
		id: 12,
		status: 1,
		user: 'kmg13',
		comp: '113pc119dv',
		in: '22.03.2025 16:10',
		idle: '00:01:59',
	},
	{
		id: 13,
		status: 0,
		user: 'kmg14',
		comp: '193pc164dv',
		in: '22.03.2025 10:45',
		idle: '01:10:40',
	},
	{
		id: 14,
		status: 1,
		user: 'kmg15',
		comp: '153pc185dv',
		in: '22.03.2025 09:10',
		idle: '00:55:12',
	},
]

const filteredRows = computed(() => {
	if (selectedChip.value == 1) {
		return rows.filter(el => el.status == 1)
	}
	if (selectedChip.value == 2) {
		return rows.filter(el => el.status == 0)
	}
	if (selectedChip.value == 3) {
		return []
	}
	return rows
})

const total = computed(() => {
	return filteredRows.value.length
})

const chips = ref([
	{ id: 1, label: 'Активные', text: 'Активные сессии' },
	{ id: 2, label: 'Неактивные', text: 'Неактивные сессии' },
	{ id: 3, label: 'Последние', text: 'Последние сессии' },
])

const text = computed(() => {
	if (selectedChip.value == 1) return 'Активные сессии'
	if (selectedChip.value == 2) return 'Неактивные сессии'
	if (selectedChip.value == 3) return 'Последние сессии'
	return 'Открытые сессии'
})

const selectedChip = ref<any>(null)

const selectChip = (chipId: number) => {
	selectedChip.value = selectedChip.value === chipId ? null : chipId
}
const sel = ref(10)
const pagination = ref({
	sortBy: 'desc',
	descending: false,
	page: 1,
	rowsPerPage: 5,
})
</script>

<template lang="pug">
q-card
	.top
		router-link.link(to="/session") {{ text }}&nbsp;&nbsp;({{total }})
		.time
			span 24.03.2025 13:08
			q-icon(name="mdi-reload")
	
	
	.row.items-center
		.q-mt-sm
			q-chip(size="sm"
				v-for="chip in chips"
				:key="chip.id"
				:selected="selectedChip === chip.id"
				@click="selectChip(chip.id)"
				clickable
			) {{ chip.label }}
		.sel(v-if="selectedChip == 3") {{ sel }}
			q-popup-edit(v-model="sel" auto-save v-slot="scope")
				q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
		.q-mt-sm(v-if="selectedChip == 3") мин.

	q-table(
		flat,
		:columns="cols",
		:rows="filteredRows",
		row-key="id",
		v-model:pagination="pagination"
	)

		template(v-slot:body-cell-status='props')
			q-td(:props="props")
				q-icon(v-if='props.row.status == 1' name="mdi-circle-slice-8" color="green")
				q-icon(v-else name="mdi-circle-slice-8" color="red")

		template(v-slot:bottom="{ pagination, pagesNumber, isFirstPage, isLastPage, prevPage, nextPage, }")
			.row.justify-between.items-center.q-pa-sm(style="width: 100%")
				.all {{ total }} сессий

				.q-table__control
					q-btn(flat round dense icon="chevron_left" :disabled="isFirstPage" @click="prevPage")
					q-btn(flat round dense icon="chevron_right" :disabled="isLastPage" @click="nextPage")

</template>

<style scoped lang="scss">
.q-card {
	width: 600px;
	// height: 350px;
	padding: 0.5rem;
}
.link {
	color: var(--q-link);
	font-weight: 600;
	cursor: pointer;
	text-decoration: none;
}
.top {
	display: flex;
	font-size: 0.8rem;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.time {
	span {
		color: #aaa;
		margin-right: 1rem;
	}
	.q-icon {
		cursor: pointer;
	}
}
:deep(.q-table thead th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	padding: 4px 8px;
}

:deep(.q-table tbody td) {
	font-size: 0.85rem;
	padding: 4px 8px;
}
:deep(.q-item__section--main.fuck) {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.edit {
	color: $primary;
	font-weight: 600;
	border-bottom: 1px dotted $primary;
	margin: 0 0.5rem;
}
.q-chip--selected {
	background: $primary;
	color: white;
}
.sel {
	font-weight: 600;
	font-size: 1rem;
	color: var(--q-link);
	border-bottom: 1px dotted var(--q-link);
	margin: 0 8px;
	margin-top: 7px;
}
.all {
	font-size: 1rem;
	font-weight: 600;
}
</style>
