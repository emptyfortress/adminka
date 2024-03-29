<script setup lang="ts">
import { ref, reactive } from 'vue'
import ChangeDialog from '@/components/setupcomponent/ChangeDialog.vue'
import MasterDatabase from '@/components/setupcomponent/MasterDatabase.vue'
import EditDatabase from '@/components/setupcomponent/EditDatabase.vue'
import type { QTableProps } from 'quasar'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/store'

const store = useStore()

const router = useRouter()

const change = ref(false)
const bdRow = ref()
const bdTab = ref('control')
const master = ref(false)
const edit = ref(false)
const changename = ref('')

const remove = (row: any) => {
	store.removeDB(row)
}

const assign = (e: string) => {
	changename.value = e
	change.value = true
}

const assignDef = () => {
	store.assignDefDB(changename.value)
	change.value = false
}

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
		name: 'server',
		align: 'left',
		label: 'Сервер SQL',
		field: 'server',
		sortable: true,
	},
	{
		name: 'servertype',
		align: 'left',
		label: 'Тип сервера',
		field: 'servertype',
		sortable: true,
	},
	{
		name: 'index',
		align: 'left',
		label: 'Индекс',
		field: 'index',
		sortable: true,
	},
	{
		name: 'version',
		align: 'left',
		label: 'Версия',
		field: 'version',
		sortable: true,
	},
	{
		name: 'cache',
		align: 'left',
		label: 'Кэш',
		field: 'cache',
		sortable: true,
	},
	{
		name: 'date',
		align: 'left',
		label: 'Создано',
		field: 'date',
		sortable: true,
	},
	{
		name: 'def',
		align: 'center',
		label: 'По умолчанию',
		field: 'def',
		sortable: true,
	},
	{ name: 'action', align: 'right', label: '', field: '' },
]
const goto = (e: string) => {
	router.push('/database/' + e)
}
</script>

<template lang="pug">
.database
	q-table.q-mt-sm(:rows='store.databases' :columns='columns' row-key='name' hide-bottom)
		template(v-slot:body='props')
			q-tr(:props='props' :class='{ cool: props.row.def }' @click="goto(props.row.psevdo)")
				q-td(key="active" :props="props" auto-width)
					q-icon(name="mdi-circle-slice-8" color="green" v-if="props.row.active")
						q-tooltip Доступна
					q-icon(name="mdi-circle-slice-8" color="red" v-else)
						q-tooltip Недоступна
				q-td(key="psevdo" :props='props')
					span {{ props.row.psevdo }}
				q-td(key='server' :props='props') {{ props.row.server }}
				q-td(key='servertype' :props='props') {{ props.row.servertype }}
				q-td(key='index' :props='props') {{ props.row.index }}
				q-td(key='version' :props='props') {{ props.row.version }}
				q-td(key='cache' :props='props') {{ props.row.cache }}
				q-td(key='date' :props='props') {{ props.row.date }}
				q-td.text-center(key='def' :props='props')
					q-icon(name="mdi-check-bold" color="primary" size="sm" v-if="props.row.def")
					q-btn(flat color="primary" label="Назначить" v-else size="sm" @click.stop='assign(props.row.psevdo)')
				q-td.text-right(key='def' :props='props')
					q-btn.q-mr-md(:props="props" round flat icon='mdi-trash-can-outline' size='sm' dense @click.stop)
						q-menu
							q-list(:props="props")
								q-item(clickable :props="props" @click="remove(props.row)" v-close-popup).pink
									q-item-section Удалить
					q-btn(:props="props" round flat icon='mdi-chevron-right' size='md' dense)

	.master
		div Чтобы создать новую базу данных, подключить существующую БД, не представленную в списке, а также обновить БД, если ее версия отличается от версии сервера Docsvision, воспользуйтесь <span class="text-bold">Мастером баз данных</span>.
		q-btn(unelevated color='primary' @click='master = true') Мастер&nbsp;баз&nbsp;данных 

component(:is="ChangeDialog" v-model="change" :changename="changename" @changeDef="assignDef")
component(:is="MasterDatabase" v-model="master")
// component(:is="EditDatabase" v-model="edit" :bd="bdRow" :tab="bdTab")

</template>

<style lang="scss" scoped>
.database {
	padding-left: 2px;
	padding-right: 2px;
}
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	padding: 5px 8px;
}

.cool {
	font-weight: 600;
	background: var(--bg-selected);
}

.def {
	margin-top: 0;
	padding-top: 0;
	font-size: 0.8rem;
	color: hsla(0, 0%, 40%, 1);
}

.master {
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}
.q-table th,
.q-table td {
	padding: 5px 8px;
}
.q-tr {
	cursor: pointer;
}
</style>
