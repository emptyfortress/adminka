<template lang="pug">
.al
	.zag Настройки службы фоновых операций
	.bt-filter
		.q-gutter-x-xs
			q-btn(flat round icon="mdi-chevron-double-down" @click="expandAll") 
				q-tooltip Развернуть все
			q-btn(flat round icon="mdi-chevron-double-up" @click="collapseAll") 
				q-tooltip Свернуть все

		q-input.filter(v-model="filter" dense clearable placeholder="Найти службу или процесс" @clear="filter = ''")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

	q-list.q-mt-md(separator)
		q-expansion-item(v-for="(panel, index) in filtered" :key="panel.id" switch-toggle-side v-model="panel.expanded")
			template(v-slot:header)
				.head
					.title
						q-icon(name="mdi-circle-slice-8" size="26px" :color="calColor(panel.id)")
						div {{ panel.text }}
						template(v-if="index > 2")
							span :
							span MachineName
						// div
						// 	q-icon.q-mr-sm(name="mdi-server-network")
						// 	span MachineName
					.row.items-center.text-right
						.span Всего процессов:
						q-chip(color="warning") {{panel.processes.length}}
							q-btn(flat round @click.stop="add(panel)" icon="mdi-plus-circle")
							q-tooltip( anchor="top middle" self="bottom middle") Добавить процесс
						q-btn(dense flat round icon="mdi-pencil" @click.stop="ren(panel)")
							q-tooltip(anchor="top middle" self="bottom middle") Переименовать экземпляр службы
						q-btn(dense flat round icon="mdi-reload" @click.stop)
							q-tooltip(anchor="top middle" self="bottom middle") Перезапустить все процессы
						q-btn(dense flat round icon="mdi-trash-can-outline" @click.stop="confirm(panel)")
							q-tooltip(anchor="top middle" self="bottom middle") Удалить экземпляр службы


			.pcard
				GreyBlock2(v-for="item in panel.processes" :key="item.name" :name="item.name" @del="remove(panel.id, item)")


	AddDialogCommon( v-model="dialog" @close="dialog = false" @add="addProcess" worker)

	q-dialog(v-model="dialog2")
		q-card(style="min-width: 400px; padding: 1rem;")
			.row.items-center.q-pb-none
				.text-h6 Переименовать экземляр службы
				q-space
				q-btn(icon="close" flat round dense @click="close")
			q-form(@submit="rename")
				q-card-section
					q-input(autofocus v-model="curName" label="Имя службы" lazy-rules :rules="req")
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="close")
					q-btn(unelevated color="primary" type="submit" label="Применить")

	ConfirmDialog(v-model="dialog3" :panel="curPanel" @close="dialog3 = false" @remove="removeService")
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import GreyBlock2 from '@/components/GreyBlock2.vue'
import AddDialogCommon from '@/components/AddDialogCommon.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

interface Proc {
	name: string
}
interface Worker {
	id: number
	text: string
	processes: Proc[]
	expanded: boolean
}

const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
let workers = reactive([
	{
		id: 0,
		text: 'dv-agent',
		processes: [{ name: 'Coolprocess' }],
		expanded: false,
	},
	{
		id: 1,
		text: 'webclient-worker',
		processes: [{ name: 'Coolprocess' }, { name: 'Notsocool' }],
		expanded: false,
	},
	{ id: 2, text: 'KonturDoc', processes: [{ name: 'Test0' }], expanded: false },
	{
		id: 3,
		text: 'testWorker_1',
		processes: [{ name: 'Test1' }],
		expanded: false,
	},
	{
		id: 4,
		text: 'testWorker_2',
		processes: [{ name: 'Test2' }],
		expanded: false,
	},
	{
		id: 5,
		text: 'testWorker_3',
		processes: [{ name: 'Test3' }],
		expanded: false,
	},
])

const curName = ref('')
const curPanel = ref()

const filter = ref('')
const filtered = computed(() => {
	if (filter.value === '') return workers
	else
		return workers.filter(
			item =>
				item.text.toLowerCase().includes(filter.value.toLowerCase()) ||
				item.processes.some(el =>
					el.name.toLowerCase().includes(filter.value.toLowerCase())
				)
		)
})
const add = (panel: Worker) => {
	panel.expanded = true
	curName.value = panel.text
	curPanel.value = panel
	dialog.value = true
}
const ren = (e: Worker) => {
	curPanel.value = e
	curName.value = e.text
	dialog2.value = true
	temp.value = e.text
}
const rename = () => {
	curPanel.value.text = curName.value
	dialog2.value = false
}
const remove = (id: number, e: any) => {
	const index = workers[id].processes.findIndex(el => el === e)
	workers[id].processes.splice(index, 1)
}
const removeService = (e: Worker) => {
	const ind = workers.findIndex(el => el === e)
	workers.splice(ind, 1)
}
const confirm = (e: any) => {
	curPanel.value = e
	dialog3.value = true
}

const addProcess = (e: string) => {
	curPanel.value.processes.push({ name: e })
	dialog.value = false
}
const calColor = (id: number) => {
	if (id === 1) return 'red'
	return 'green'
}
const close = () => {
	dialog2.value = false
	temp.value = ''
}
const expandAll = () => {
	workers.map(item => (item.expanded = true))
}
const collapseAll = () => {
	workers.map(item => (item.expanded = false))
}
const list = computed(() => {
	return workers.map(el => el.text).filter(e => e !== temp.value)
})
const temp = ref('')
const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
	(val: string) =>
		list.value.every(el => el !== val) || 'Имя должно быть уникальным',
]
</script>

<style scoped lang="scss">
.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}
.title {
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.1rem;
}

.q-expansion-item {
	transition: 0.2s ease all;
}

.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
	border-top: 1px solid $primary;
}

.q-expansion-item--expanded {
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
	border: 1px solid $primary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.pcard {
	padding: 1rem;
	font-size: 0.85rem;
	background: #fff;
}

:deep(.er.q-expansion-item--collapsed) {
	background: $pink-1;
	border: 1px solid $negative;

	.title {
		color: $negative;
	}
}
.al {
	max-width: 1200px;
	margin: 0 auto;
}
.filter {
	width: 400px;
}
.q-select {
	width: 200px;
}
.span {
	font-size: 0.8rem;
}
.bt-filter {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
:deep(.q-chip) {
	padding-right: 0;
	margin-right: 3rem;
}
</style>
