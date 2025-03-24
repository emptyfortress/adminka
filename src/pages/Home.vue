<script setup lang="ts">
import type { QTableProps } from 'quasar'
import { ref, computed } from 'vue'

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
		align: 'right',
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
]

const filteredRows = computed(() => {
	if (filter.value == 'Фильтр') {
		return rows
	}
	if (filter.value == 'Только неактивные') {
		return rows.filter(item => item.status == 0)
	}
	if (filter.value == 'Только активные') {
		return rows.filter(item => item.status == 1)
	} else return rows
})
const selected = ref([])
const time = ref(10)
const filter = ref('Фильтр')

const setFilter = (e: string) => {
	filter.value = e
}
</script>

<template lang="pug">
q-page(padding)
	.grid1
		q-card
			.top
				.link Открытые сессии
				.time
					span 24.03.2025 13:08
					q-icon(name="mdi-reload")
			
			q-table.q-mt-sm(
				flat,
				:columns="cols",
				:rows="filteredRows",
				row-key="id",
				hide-bottom,
				selection="multiple" v-model:selected="selected"
			)
				template(v-slot:header-selection='scope')
					q-checkbox(dense v-model="scope.selected" size='sm' color="secondary")
				template(v-slot:body-selection='scope')
					q-checkbox(dense v-model="scope.selected" size='sm' color="secondary")

				template(v-slot:body-cell-status='props')
					q-td(:props="props")
						q-icon(v-if='props.row.status == 1' name="mdi-circle-slice-8" color="green")
						q-icon(v-else name="mdi-circle-slice-8" color="red")
				template(v-slot:bottom-row)
					q-td(colspan="6")
						.row.justify-between
							q-btn(v-if='selected.length' unelevated color="secondary" label="Закрыть выбранные" size="sm")
							div(v-else)
							div
								q-btn(flat color="secondary" label="Аудит сессий и лицензий" size="sm")
								q-btn(unelevated color="secondary" :label="filter" size="sm")
									q-menu
										q-list
											q-item(clickable dense @click="setFilter('Только неактивные')" v-close-popup)
												q-item-section(side)
													q-icon(name="mdi-circle-slice-8" color="red" size="12px")
												q-item-section Показать неактивные
											q-item(clickable dense @click="setFilter('Только активные')" v-close-popup)
												q-item-section(side)
													q-icon(name="mdi-circle-slice-8" color="green" size="12px")
												q-item-section Показать активные

											q-item(clickable dense @click="setFilter('Последние 10 мин')" v-close-popup)
												q-item-section(side)
													q-icon(name="mdi-circle-slice-8" color="primary" size="12px")
												q-item-section.fuck
													div Показать активные в течении
													.edit(@click.stop) {{time }}
														q-popup-edit(v-model="time" auto-save v-slot="scope")
															q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set") 
													div мин.

											q-item(clickable dense @click="setFilter('Фильтр')" v-close-popup)
												q-item-section(side)
													q-icon(name="mdi-circle-slice-8" color="black" size="12px")
												q-item-section Показать все
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto auto;
	gap: 1rem;
	height: calc(100vh - 64px - 64px);
}
.grid1 {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.q-page {
	padding: 1rem;
}

.q-card {
	width: 600px;
	height: 350px;
	padding: 0.5rem;
}
.link {
	color: var(--q-link);
	font-weight: 600;
	cursor: pointer;
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
</style>
