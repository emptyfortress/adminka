<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

const selection = ref('DocsVision Users')
const current = computed(() => {
	return store.wc.groups.filter(item => item.label === selection.value)[0]
})

const select = (e: any) => {
	selection.value = e.label
}
const columns = [
	{
		name: 'id',
		required: true,
		label: '#',
		align: 'right',
		field: 'id',
		format: val => val + 1,
		sortable: false,
	},
	{
		name: 'user',
		required: true,
		label: 'Пользователь',
		align: 'left',
		field: 'user',
		sortable: true,
	},
	{
		name: 'action',
		required: true,
		label: '',
		align: 'right',
		field: row => row.name,
		sortable: false,
	},
]
</script>

<template lang="pug">
q-form.q-mt-md(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		.wh
			.text-weight-bold.q-pa-sm Группы:
			q-list
				q-item.db(clickable v-for="item in store.wc.groups" :key="item.id" @click="select(item)" :class="{ sel: item.label === selection }")
					q-item-section(side)
						q-icon(name="mdi-account-multiple")
					q-item-section
						q-item-label {{ item.label }}

		.to
			q-icon(name="mdi-arrow-right-bold" size="lg")
		.wh
			q-table(flat bordered
				:rows="current.users"
				:columns="columns"
				row-key="id")
				template(v-slot:body-cell-id="props")
					q-td.sma {{ props.row.id + 1 }}
				template(v-slot:body-cell-action="props")
					q-td(:props="props")
						q-btn(flat round icon="mdi-trash-can-outline" color="secondary" size='sm') 

			q-card-section
				q-btn(unelevated color="secondary" label="Добавить" size='sm') 
		
</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: grid;
	grid-template-columns: 0.8fr auto 1fr;
	gap: 1rem;

	& > div.wh {
		background: white;
	}
}
.sma {
	width: 20px;
}

th {
	text-align: left;
}

.to {
	align-self: center;
	text-align: center;
}

.q-item.db {
	border: none !important;
}

.sel {
	background: var(--bg-selected);
}
</style>
