<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useConfig } from '@/stores/configuration'

const config = useConfig()

const selChip = ref(0)
const chips = reactive([
	{ id: 0, selected: true, label: 'Все' },
	{ id: 1, selected: false, label: 'Тестовая среда' },
	{ id: 2, selected: false, label: 'Прод' },
])

const select = ((e: any) => {
	chips.map(item => item.selected = false)
	e.selected = true
	selChip.value = e.id
})

const pagination = {
	sortBy: 'name',
	rowsPerPage: 0
}

const filteredRows = computed(() => {
	switch (selChip.value) {
		case 1:
			return config.rows.filter(e => e.env === 'test')
		case 2:
			return config.rows.filter(e => e.env === 'prod')
		default:
			return config.rows
	}
})

const compRows = computed(() => {
	return config.selectedRow.computers
})
</script>

<template lang="pug">
.q-ml-sm.q-gutter-xs
	q-chip(v-for="chip in chips" :key="chip.id" v-model:selected="chip.selected" @click="select(chip)") {{ chip.label }}
.grid
	.left.wh
		q-table(flat
			:columns="config.columns0"
			:rows="filteredRows"
			row-key="id"
			hide-bottom
			:pagination="pagination"
			color="primary")

			template(v-slot:body='props')
				q-tr(:props='props' @click="config.selectRow(props.row)" :class='{ cool: props.row.selected }')
					q-td(:props="props" key="module" ) {{ props.row.module }}
					q-td(:props="props" key="name" ) {{ props.row.name }}
					q-td(:props="props" key="env" ) {{ props.row.env }}
					q-td(:props="props" key="computers" ) {{ props.row.computers }}

	.to
		q-icon(name="mdi-arrow-right-bold" size="lg")
	.right.wh
		q-table(flat :columns="config.columns1" :rows="compRows" hide-bottom)
</template>

<style scoped lang="scss">
.q-chip {
	background: #e2e2d8;
}

.q-chip--selected {
	background: $secondary;
	color: #fff;
}

.grid {
	margin: .5rem;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	// align-items: center;
	gap: 1rem;
	background: var(--bg-light);
	padding: 1rem;
}

.to {
	margin-top: 3rem;
}

.q-table tr {
	cursor: pointer;
}

:deep(.q-table thead tr) {
	// background: var(--bg-table-header);
	background: var(--bg-header);
	border-top: 1px solid #000;
}

:deep(.q-table tr.cool) {
	background: var(--bg-selected);
}
</style>
