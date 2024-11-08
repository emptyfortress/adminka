<script setup lang="ts">
import { ref } from 'vue'
import type { QTableColumn } from 'quasar'

const cols = <QTableColumn[]>[
	{
		label: 'Ключ',
		align: 'left',
		sortable: true,
		name: 'key',
		field: 'key',
	},
	{
		label: 'Значение',
		align: 'left',
		sortable: true,
		name: 'val',
		field: 'val',
	},
	{
		label: '',
		align: 'right',
		sortable: true,
		name: 'action',
		field: 'action',
	},

]

const rows = ref([
	{ id: 0, key: 'AltScriptPath', val: 'value' },
	{ id: 1, key: 'BaseFileLocationPath', val: 'value' },
	{ id: 2, key: 'CacheTreshold', val: 'value' },
	{ id: 3, key: 'CardPackage', val: 'value' },
	{ id: 4, key: 'CertificatePath', val: 'value' },
	{ id: 5, key: 'CreateJobsScript', val: 'value' },
	{ id: 6, key: 'CustomOperationsTimeout', val: 'value' },
	{ id: 7, key: 'DbConnectionPoolSize', val: 'value' },
	{ id: 8, key: 'DBCreationScript', val: 'value' },
	{ id: 9, key: 'DBLcid', val: 'value' },
	{ id: 10, key: 'DBScript', val: 'value' },
	{ id: 11, key: 'DefaultDBCheck', val: 'value' },
	{ id: 12, key: 'FileCacheMaxFilesCount', val: 'value' },
	{ id: 13, key: 'FileCacheSize', val: 'value' },
	{ id: 14, key: 'LogEnabled', val: 'value' },
	{ id: 15, key: 'NetworkControlEnabled', val: 'value' },
	{ id: 16, key: 'Path', val: 'value' },
	{ id: 17, key: 'ResultLimit', val: 'value' },
	{ id: 18, key: 'SimpleOperationsTimeout', val: 'value' },
	{ id: 19, key: 'SiteDir', val: 'value' },
	{ id: 20, key: 'SqlCommandTimeout', val: 'value' },
	{ id: 21, key: 'ViewKeysetLimit', val: 'value' },
	{ id: 22, key: 'WebServiceDir', val: 'value' },
	{ id: 23, key: 'UpdateSessionCacheTimeout', val: 'value' },
	{ id: 24, key: 'UserInfoCacheMode', val: 'value' },
])

const pagination = {
	// sortBy: 'key',
	rowsPerPage: 10
}

const remove = ((e: number) => {
	const index = rows.value.findIndex((item) => item.id == e)
	rows.value.splice(index, 1)
})

const add = (() => {
	rows.value.unshift({ id: Date.now(), key: 'Новый ключ', val: 'Новое значение' })
})
</script>

<template lang="pug">
.q-mx-lg
	q-btn.q-mb-sm(unelevated color="secondary" label="Добавить настройку" @click="add" size="sm") 
	q-table(flat bordered
		:columns="cols"
		:rows="rows"
		row-key="id"
		color="primary"
		:pagination="pagination"
		)

		template(v-slot:body='props')
			q-tr(:props='props' :key="props.row.id")
				q-td(:props="props" key="key" ) {{ props.row.key }}
					q-popup-edit(v-model="props.row.key" title="Редактировать" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
				q-td(:props="props" key="val" ) {{ props.row.val }}
					q-popup-edit(v-model="props.row.val" title="Редактировать" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
				q-td(:props="props" key="action" )
					q-btn.remove(flat round icon="mdi-close" @click="remove(props.row.id)" size="sm") 
</template>

<style scoped lang="scss">
.info {
	margin-left: 2rem;
	color: #666;
}

.q-tr {
	cursor: pointer;

	.remove {
		visibility: hidden;
	}

	&:hover {
		.remove {
			visibility: visible;
		}
	}
}

// :deep(.q-table thead th) {
// 	background: $secondary;
// 	color: white;
// }</style>
