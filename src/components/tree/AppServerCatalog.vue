<script setup lang="ts">
import { ref } from 'vue'
import type { QTableProps } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const columns: QTableProps['columns'] = [
	{
		name: 'domain',
		required: true,
		label: 'Домен',
		field: 'domain',
		sortable: true,
		align: 'left',
	},
	{
		name: 'netbios',
		required: true,
		label: 'NetBios',
		field: 'netbios',
		sortable: true,
		align: 'left',
	},
	{
		name: 'ldap',
		required: true,
		label: 'LDAP',
		field: 'ldap',
		sortable: true,
		align: 'left',
	},
	{
		name: 'redirect',
		required: true,
		label: 'Переадресация',
		field: 'redirect',
		sortable: true,
		align: 'left',
	},
	{
		name: 'timeout',
		required: true,
		label: 'Timeout',
		field: 'timeout',
		sortable: true,
		align: 'left',
	},
	{
		name: 'auth',
		required: true,
		label: 'Тип аутентификации',
		field: 'auth',
		sortable: true,
		align: 'left',
	},
	{
		name: 'login',
		required: true,
		label: 'Логин',
		field: 'login',
		sortable: true,
		align: 'left',
	},
	{
		name: 'pass',
		required: true,
		label: 'Пароль',
		field: 'pass',
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
	}
]

const rows = ref([
	{
		id: 0,
		domain: 'digdes.com',
		netbios: 'DIGDES',
		ldap: ['172.16.0.1', '172.16.0.14'],
		timeout: 1000,
		auth: 'basic',
		login: 'kmg01',
		pass: 'pass',
	},
	{
		id: 1,
		domain: 'docsvision.com',
		netbios: 'DV',
		ldap: ['172.16.0.4', '172.16.0.18', '172.16.0.38'],
		redirect: 'digdes.com/dv',
		timeout: 1000,
		auth: 'basic',
		login: 'kmg01',
		pass: 'pass',
	}
])

const goto = ((evt: any, row: any, index: number) => {
	router.push(route.fullPath + '/ldap-' + row.netbios)
})

const remove = ((e: number) => {
	rows.value = rows.value.filter((item) => item.id !== e)
})

const add = (() => {
	rows.value.push({
		id: rows.value.length + 2,
		domain: 'domain',
		netbios: '',
		ldap: [],
		redirect: '',
		timeout: 0,
		auth: '',
		login: '',
		pass: '',
	})
})
</script>

<template lang='pug'>
.section НАСТРОЙКА ДОМЕННЫХ КАТАЛОГОВ

.catalog
	q-table(:rows='rows' :columns='columns' row-key='id' hide-bottom @row-click='goto')

		template(v-slot:body-cell-ldap="props")
			q-td.ldap(:props='props')
				div {{ props.row.ldap[0]}}
				div {{ props.row.ldap[1]}}
				div {{ props.row.ldap[2]}}

		template(v-slot:body-cell-action="props")
			q-td(:props='props')
				q-btn.q-mr-lg(:props="props" flat round icon='mdi-trash-can-outline' color="secondary" size='sm' dense @click.stop="")
					q-menu
						q-list(:props="props")
							q-item(clickable :props="props" @click="remove(props.row.id)" v-close-popup).pink
								q-item-section Удалить
				q-btn(:props="props" flat round icon='mdi-chevron-right' size='md' dense )

	.q-gutter-x-xs.q-mt-sm
		q-btn(unelevated color='secondary' @click='add' size="sm") Новый каталог
</template>

<style scoped lang="scss">
.catalog {
	margin-left: 2rem;
	margin-top: .5rem;
}
:deep(.q-table thead th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	// padding: 5px 8px;
}
:deep(.q-table tbody td) {
	// padding: 5px 8px;
	// vertical-align: top;
}

:deep(.q-table tbody td) {
	font-size: .85rem;
}

:deep(.q-table tbody tr) {
	cursor: pointer;
}
.ldap {
	line-height: 1.1;
	font-family: monospace;
}
</style>
