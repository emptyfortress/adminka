<script setup lang="ts">
import type { QTableProps } from 'quasar'
import { useStore } from '@/stores/store'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()

const columns: QTableProps['columns'] = [
	{
		name: 'active',
		required: true,
		label: '',
		field: 'active',
		sortable: false,
		align: 'left',
	},
	{
		name: 'psevdo',
		required: true,
		label: 'Псевдоним',
		align: 'left',
		field: 'psevdo',
		sortable: true,
	},
	{
		name: 'decision',
		required: true,
		label: 'Решения',
		align: 'left',
		field: 'decision',
		sortable: true,
	},
	{
		name: 'vid',
		required: true,
		label: 'Виды карточек',
		align: 'left',
		field: 'vid',
		sortable: true,
	},
	{
		name: 'local',
		required: true,
		label: 'Локализации',
		align: 'left',
		field: 'local',
		sortable: true,
	},
	{ name: 'action', align: 'right', label: '', field: '' },
]

const router = useRouter()
const route = useRoute()
const goto = (e: string) => {
	router.push(route.fullPath + '/' + e)
}
</script>

<template lang="pug">
.database
	div {{ route.fullPath }}
	q-table(:rows='store.databases' :columns='columns' row-key='name' hide-bottom)
		template(v-slot:body='props')
			q-tr(:props='props' :class='{ cool: props.row.def }' @click="goto(props.row.psevdo)")
				q-td(key="active" :props="props" auto-width)
					q-icon(name="mdi-circle-slice-8" color="green" v-if="props.row.active")
						q-tooltip Доступна
					q-icon(name="mdi-circle-slice-8" color="red" v-else)
						q-tooltip Недоступна
				q-td(key="psevdo" :props='props') {{ props.row.psevdo }}
				q-td(key='decision' :props='props')
					.list(v-for="item in props.row.decision") {{ item }}
				q-td(key='vid' :props='props')
					.list(v-for="item in props.row.vid") {{ item }}
				q-td(key='local' :props='props')
					.list(v-for="item in props.row.local") {{ item }}
				q-td.text-right(key='action' :props='props')
					q-btn(:props="props" round flat icon='mdi-chevron-right' size='md' dense)

</template>

<style scoped lang="scss">
.database {
	margin-left: 2rem;
}
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	padding: 5px 8px;
}
.list {
	display: inline;
	margin-right: 0.5rem;
	&:not(:last-child)::after {
		content: ',';
	}
}
.cool {
	font-weight: 600;
	background: var(--bg-selected);
}
.q-tr {
	cursor: pointer;
}
</style>
