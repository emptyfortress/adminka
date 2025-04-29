<script setup lang="ts">
import { ref } from 'vue'
import type { QTableProps } from 'quasar'
import ConfirmDialog from '@/components/tree/ConfirmDialog.vue'

const columns: QTableProps['columns'] = [
	// {
	// 	name: 'service',
	// 	required: true,
	// 	label: 'Сервис бизнес-процессов',
	// 	field: 'service',
	// 	sortable: true,
	// 	align: 'left',
	// },
	{
		name: 'bd',
		required: true,
		label: 'База данных',
		field: 'bd',
		sortable: true,
		align: 'left',
	},
	{
		name: 'proc',
		required: true,
		label: 'Доля процессоров',
		field: 'proc',
		sortable: true,
		align: 'left',
	},
	{
		name: 'mail',
		required: true,
		label: 'Почтовое соединение',
		field: 'mail',
		sortable: true,
		align: 'left',
	},
	{
		name: 'action',
		required: true,
		label: '',
		field: 'action',
		sortable: false,
		align: 'right',
	},
]
const rows = ref([
	{
		id: 0,
		service: 'http://workflow.domain.com:5099',
		bd: 'AGSupport',
		proc: 1,
		mail: 'TestMail',
	},
])

const remove = (e: number) => {
	rows.value = rows.value.filter(item => item.id !== e)
}
const show = ref(false)

const toggle = () => {
	show.value = !show.value
}

const service = ref('')
const bd = ref('')
const proc = ref(0)
const mail = ref('')
const oauth = ref(false)
const client = ref('')
const catalog = ref('')
const secret = ref('')

const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
]

const options = ['Option 1', 'Option 2', 'Option 3']
const options1 = ['Option 1', 'Option 2', 'Option 3']

const onSubmit = () => {
	myform.value.validate().then((success: any) => {
		if (success) {
			let tmp = {
				id: 2,
				service: service.value,
				bd: bd.value,
				proc: proc.value,
				mail: mail.value,
			}
			rows.value.push(tmp)
			show.value = false
		} else {
			return
		}
	})
}

const myform = ref()
</script>

<template lang="pug">
.catalog
	.descr Назначение сервиса для обработки баз данных

	q-table(:rows='rows' :columns='columns' row-key='id')

		template(v-slot:body-cell-service='props')
			q-td(:props='props')
				a(:href="props.row.service") {{ props.row.service }}

		template(v-slot:body-cell-action="props")
			q-td(:props='props')
				q-btn.q-mr-lg(:props="props" flat round icon='mdi-trash-can-outline' color="secondary" size='sm' dense @click.stop="")
					q-menu
						q-list(:props="props")
							q-item(clickable :props="props" @click="remove(props.row.id)" v-close-popup).pink
								q-item-section Удалить

		template(v-slot:bottom)
			q-btn(unelevated color='secondary' @click='toggle' size="sm") Подключить сервис

	ConfirmDialog(v-model="show" zag="Подключить сервис")
		template(#content)
			q-form(ref='myform' :autofocus='true' @submit="onSubmit" style='width: 500px')
				q-input(v-model="service" autofocus filled label="Сервис" dense lazy-rules :rules="req" )
				q-select(v-model="bd" filled label="База данных" :options='options' dense lazy-rules :rules="req" )
				q-select(v-model="mail" filled label="Почтовое соединение" :options='options1' dense lazy-rules :rules="req" )
				.row.justify-between.items-center
					q-input(v-model="proc" filled label="Доля процессоров" type='number' dense lazy-rules :rules="req" )
					q-checkbox(dense label='Использовать OAuth' v-model="oauth")
				template(v-if='oauth')
					q-input(v-model="client" filled label="Идентификатор клиента" dense lazy-rules :rules="req" )
					q-input(v-model="catalog" filled label="Идентификатор каталога" dense lazy-rules :rules="req" )
					q-input(v-model="secret" filled label="Клиентский секрет" dense lazy-rules :rules="req" )

		template(#actions)
			q-btn(flat color="primary" label="Отмена" v-close-popup)
			q-btn(unelevated color="primary" label="Подключить" @click='onSubmit') 

</template>

<style scoped lang="scss">
.catalog {
	// margin-left: 2rem;
	margin-top: 1.5rem;
}

:deep(.q-table thead th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	// padding: 5px 8px;
}

:deep(.q-table tbody td) {
	font-size: 0.85rem;
}

:deep(.q-table tbody tr) {
	cursor: pointer;
}

a {
	color: $primary;
}
</style>
