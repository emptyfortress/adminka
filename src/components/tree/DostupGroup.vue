<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableColumn } from 'quasar'
const store = useStore()
import { useWebConfig } from '@/stores/webconfig'

const selection = ref('DocsVision Users')
const current = computed(() => {
	return store.wc.groups.filter(item => item.label === selection.value)[0]
})

const select = (e: any) => {
	selection.value = e.label
}
const columns: QTableColumn[] = [
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
		field: (row: any) => row.name,
		sortable: false,
	},
]

const webconfig = useWebConfig()

const remove = (e: any) => {
	webconfig.removeUser(current.value.label, e)
}

const table = ref()

const user = ref()
const username = ref()

const add = () => {
	console.log('add')
	if (!user.value) return
	let tmp = {
		id: +Date.now(),
		user: user.value,
	}
	webconfig.addUser(selection.value, tmp)
	user.value = null
	username.value.focus()
}
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
		.wh1
			q-table(flat bordered ref='table'
				:rows="current.users"
				:columns="columns"
				hide-bottom
				:rows-per-page-options='[0]'
				row-key="id")

				template(v-slot:body-cell-user="props")
					q-td(:props="props")
						span.edi {{props.row.user}}
						q-popup-edit(v-model="props.row.user" auto-save v-slot="scope")
							q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

				template(v-slot:body-cell-action="props")
					q-td(:props="props")
						q-btn(flat round icon="mdi-trash-can-outline" color="secondary" size='sm') 
							q-menu
								q-list
									q-item(clickable @click='remove(props.row)').pink
										q-item-section Удалить

			q-card-section
				.row.items-center.q-gutter-x-sm
					div Пользователь:
					q-input.user(ref='username' v-model="user" dense outlined bg-color="white")
					q-btn(unelevated color="secondary" label="Добавить" icon='mdi-plus-circle' size='sm' @click='add') 
		
</template>

<style scoped lang="scss">
:deep(.q-field__control) {
	height: 28px;
	font-size: 0.9rem;
}
:deep(.q-field__native) {
	line-height: 24px;
}
:deep(.q-field__marginal) {
	height: inherit;
}
:deep(.q-icon) {
	width: 0.4rem;
	font-size: 20px;
}
:deep(.q-field__messages) {
	font-size: 0.65rem;
}
.lang {
	margin: 0 2rem;
	display: grid;
	grid-template-columns: 0.8fr auto 1fr;
	gap: 1rem;

	& > div.wh {
		background: white;
	}
	& > div.wh1 {
		background: #ffffff99;
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
.edi {
	color: $secondary;
	border-bottom: 1px dotted $secondary;
}
</style>
