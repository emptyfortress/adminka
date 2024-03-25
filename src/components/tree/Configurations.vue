<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { QTableColumn } from 'quasar'
import AddDialogCommon from '@/components/AddDialogCommon.vue'
import { useStore } from '@/stores/store'
import { useTree } from '@/stores/tree'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const tree = useTree()

const cols: QTableColumn[] = [
	{
		label: 'Название',
		align: 'left',
		sortable: true,
		name: 'name',
		field: 'name',
	},
	{
		label: 'Модуль',
		align: 'left',
		sortable: true,
		name: 'module',
		field: 'module',
	},
	{
		label: 'Среда',
		align: 'left',
		sortable: true,
		name: 'env',
		field: 'env',
	},
	{
		label: 'Описание',
		align: 'left',
		sortable: true,
		name: 'descr',
		field: 'descr',
	},
	{
		label: '',
		align: 'left',
		sortable: true,
		name: 'action',
		field: 'action',
	},
]

const remove = (e: string) => {
	tree.removeConfig(e)
}
const dialog = ref(false)

const add = () => {
	dialog.value = !dialog.value
}

const addConfig = (e: string) => {
	tree.addConfig(e)
}

const goto = (evt: Event, row: any, idx: number) => {
	router.push(`/setup1/appserver/configurations/${row.id}`)
}
</script>

<template lang="pug">
.treepage
	.mainzag Шаблоны настроек
	q-table(:columns="cols"
		:rows="store.config"
		hide-pagination
		@row-click="goto"
		row-key="id")

		template(v-slot:body-cell-action="props")
			q-td.text-right.q-gutter-x-md(:props="props")
				q-btn(:props="props" round flat icon='mdi-pencil' size='sm' dense)
				q-btn(:props="props" round flat icon='mdi-content-duplicate' size='sm' dense)
				q-btn.q-mr-md(flat dense round icon="mdi-trash-can-outline" size="sm" @click.stop) 
					q-menu
						q-list
							q-item(clickable v-close-popup @click="remove(props.row.id)").pink
								q-item-section Удалить
	br
	q-btn(unelevated color="primary" label="Добавить шаблон" @click="add") 

	AddDialogCommon(v-model="dialog" @add="addConfig" dv )
</template>

<style scoped lang="scss">
.q-list {
	max-width: 300px;
}
.right {
	height: 800px;
}
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	padding: 5px 8px;
}
.q-table__container {
	width: auto;
}
</style>
