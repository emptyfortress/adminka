<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useConfig } from '@/stores/configuration'

const config = useConfig()

const selChip = ref(0)
const chips = reactive([
	{ id: 0, selected: true, label: 'Все' },
	{ id: 1, selected: false, label: 'Windows' },
	{ id: 2, selected: false, label: 'Linux' },
])

const select = (e: any) => {
	chips.map(item => (item.selected = false))
	e.selected = true
	selChip.value = e.id
}

const pagination = {
	rowsPerPage: 0,
	// sortBy: 'name',
}

const filteredRows = computed(() => {
	switch (selChip.value) {
		case 1:
			return config.rows1.filter(e => e.os === 'Windows')
		case 2:
			return config.rows1.filter(e => e.os === 'Linux')
		default:
			return config.rows1
	}
})

const compRows1 = computed(() => {
	return config.selectedRow1.config
})
const calcClass = (row: any) => {
	if (row.config.length == 0) {
		return 'red'
	} else return 'green'
}
</script>

<template lang="pug">
.q-ml-sm.q-gutter-xs
	q-chip(v-for="chip in chips" :key="chip.id" v-model:selected="chip.selected" @click="select(chip)") {{ chip.label }}
.grid
	.left.wh
		q-table(flat
			:columns="config.columns1"
			:rows="filteredRows"
			row-key="id"
			hide-bottom
			:pagination="pagination"
			color="primary")

			template(v-slot:body='props')
				q-tr(:props='props' @click="config.selectRow1(props.row)" :class='{ cool: props.row.selected }')
					q-td(:props="props" key="name" )
						span.act(:class="calcClass(props.row)")
							q-tooltip.bg-secondary(v-if="props.row.config.length") Модули сконфигурированы
							q-tooltip.bg-red(v-else) Конфигурации отсутствуют
						span {{ props.row.name }}
					q-td(:props="props" key="os" ) {{ props.row.os }}

	.to
		q-icon(name="mdi-arrow-right-bold" size="lg")
	.right.wh
		q-table(flat :columns="config.columns2" :rows="compRows1" hide-pagination no-data-label="Конфигурации не обнаружены.")
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
	margin: 0.5rem;
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
.act {
	width: 10px;
	height: 10px;
	display: inline-block;
	background: #ccc;
	margin-right: 0.5rem;
	border-radius: 10px;
	&.red {
		background: red;
	}
	&.green {
		background: green;
	}
}
</style>
