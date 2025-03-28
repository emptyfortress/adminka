<template lang="pug">
.zag Открытые сессии ({{ total }})

.row.justify-between.items-center.q-mt-lg
	q-input(v-model="filter" dense clearable placeholder="Поиск")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")
	.q-gutter-xs
		q-chip(v-for="(item, index) in time"
			:key="item.id"
			@click="select(index, time)"
			v-model:selected="item.selected") {{item.label}}

	.row.items-center.q-gutter-xs
		q-chip(
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

	.q-gutter-xs
		q-btn(unelevated color="secondary" label="Аудит сессий и лицензий" size="sm") 
		q-btn(flat  round icon="mdi-reload")
			q-tooltip Обновить
		q-btn(flat  round icon="mdi-microsoft-excel")
			q-tooltip Экспорт в xsl
		q-btn(flat  round icon="mdi-delete-outline")
			q-tooltip Удалить выбранные

q-table(:columns="cols"
	:rows="filteredRows"
	:rows-per-page-options="[0]"
	row-key="id"
	selection="multiple"
	v-model:selected="selected"
	color="secondary"
	flat).tab

</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { QTableProps } from 'quasar'

interface Chip {
	id: number
	label: string
	selected: boolean
}

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
const filter = ref('')

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

const time = reactive([
	{ id: 0, label: 'Сегодня', selected: false },
	{ id: 1, label: 'Вчера', selected: false },
	{ id: 2, label: 'Эта неделя', selected: false },
])

// const par = reactive([
// 	{ id: 0, label: 'Активные', selected: false },
// 	{ id: 1, label: 'Неактивные', selected: false },
// 	{ id: 2, label: 'Последние', selected: false },
// ])

const chips = ref([
	{ id: 1, label: 'Активные', text: 'Активные сессии' },
	{ id: 2, label: 'Неактивные', text: 'Неактивные сессии' },
	{ id: 3, label: 'Последние', text: 'Последние сессии' },
])

const selectedChip = ref<any>(null)
const selectChip = (chipId: number) => {
	selectedChip.value = selectedChip.value === chipId ? null : chipId
}
const sel = ref(10)

const select = (index: number, arr: Chip[]) => {
	arr.map(e => {
		return (e.selected = false)
	})
	arr[index].selected = true
}
const selected = ref([])
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-chip--selected {
	background: $primary;
	color: #fff;

	.q-icon {
		color: #fff !important;
	}
}

.q-input {
	width: 240px;
}

.tab {
	margin-top: 1rem;
}

.tab :deep(.q-table tbody td) {
	font-size: 0.9rem;
}

.tab :deep(thead) {
	background: #ddd;
	position: sticky;
	top: 0;

	th {
		font-size: 0.75rem;
		border-right: 1px solid #fff;
		text-transform: capitalize;
		padding: 0 16px;
	}

	tr {
		height: 36px;
	}
}
.sel {
	font-weight: 600;
	font-size: 1rem;
	color: var(--q-link);
	border-bottom: 1px dotted var(--q-link);
	margin: 0 8px;
}
</style>
