<template lang="pug">
q-dialog(:model-value="props.dialog" position="bottom" full-width persistent)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-wizard-hat')
					span Мастер баз данных
					span.q-ml-md(v-if="panel !== 'start' && wiz.choose === 'create'") (Создание)
					span.q-ml-md(v-if="panel !== 'start' && wiz.choose === 'connect'") (Подключение)
					span.q-ml-md(v-if="panel !== 'start' && wiz.choose === 'update'") (Обновление)


				q-tab-panels(v-model="panel" animated)
					q-tab-panel(name="start")
						.all
							.arch
								.text-bold Доступные базы данных:
								q-table(:columns="headers"
									row-key="id"
									color="primary"
									flat
									selection="single"
									v-model:selected="selected"
									:rows="list"
									hide-bottom)
									template(v-slot:body-cell-active="props")
										q-td(:props="props")
											q-icon(name="mdi-circle-slice-8" color="green" v-if="props.row.active === true")
												q-tooltip Доступна
											q-icon(name="mdi-circle-slice-8" color="red" v-else)
												q-tooltip Недоступна

							.column.q-mt-md
								q-radio(v-model="wiz.choose" val="create" label="Создать новую БД и подключить ее к серверу")
								q-radio(v-model="wiz.choose" val="connect" label="Подключить существующую БД, не представленную в списке")
								q-radio(v-model="wiz.choose" val="update" label="Обновить выбранную в списке БД" :disable="selected.length === 0")

					q-tab-panel(name="create")
						component(:is="CreateDatabase" ref="cr")
					q-tab-panel(name="connect")
						component(:is="ConnectDatabase" ref="con")
					q-tab-panel(name="update")
						component(:is="UpdateDatabase" ref="up")

		.bottom
			q-separator
			q-card-actions(v-if="wiz.finish > 1" align="center")
				q-btn(unelevated color="primary" @click="close" padding="xs xl") Готово
			q-card-actions(v-else align="center")
				q-btn(flat color="primary" @click="close").q-mr-xl Отмена
				template(v-if="panel === 'start'")
					q-btn(unelevated color="primary" @click="next" padding="xs xl") Далее
				template(v-if="panel === 'create'")
					q-btn(flat color="primary" @click="crBack") Назад
					q-btn(unelevated color="primary" @click="crNext" padding="xs xl") Далее
				template(v-if="panel === 'connect'")
					q-btn(flat color="primary" @click="conBack") Назад
					q-btn(unelevated color="primary" @click="conNext" padding="xs xl") Далее
				template(v-if="panel === 'update'")
					q-btn(flat color="primary" @click="upBack") Назад
					q-btn(unelevated color="primary" @click="upNext" padding="xs xl") Далее
		q-btn.close(flat round icon="mdi-close" color="primary" @click="close")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { QTableProps } from 'quasar'
import { useWiz } from '@/stores/wiz'
import CreateDatabase from '@/components/setupcomponent/CreateDatabase.vue'
import ConnectDatabase from '@/components/setupcomponent/ConnectDatabase.vue'
import UpdateDatabase from '@/components/setupcomponent/UpdateDatabase.vue'

const props = defineProps({
	dialog: {
		type: Boolean,
		default: false,
	},
})

const cr = ref()
const con = ref()
const up = ref()

const wiz = useWiz()
const emit = defineEmits(['update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
	panel.value = 'start'
	wiz.choose = 'start'
	wiz.done = false
	wiz.finish = 0
}
const crNext = () => {
	cr.value.nextStep()
}
const conNext = () => {
	if (!!con.value) con.value.nextStep()
}

const upNext = () => {
	if (!!up.value) up.value.nextStep()
}

const crBack = () => {
	if (cr.value.step === 1) {
		panel.value = 'start'
	} else {
		cr.value.prevStep()
	}
}
const conBack = () => {
	if (con.value.step === 1) {
		panel.value = 'start'
	} else {
		con.value.prevStep()
	}
}
const upBack = () => {
	if (up.value.step === 4) {
		panel.value = 'start'
	} else {
		up.value.prevStep()
	}
}

const selected = ref([])

const headers: QTableProps['columns'] = [
	{ label: 'Название', align: 'left', sortable: true, name: 'name', field: 'name' },
	{ label: 'Псевдоним', align: 'left', sortable: true, name: 'psevdo', field: 'psevdo' },
	// { label: 'Активна', align: 'left', sortable: true, name: 'active', field: 'active' },
]

const list = [
	{
		id: 0,
		active: true,
		psevdo: 'AGSupport',
		name: 'AGSupport_1',
		servertype: 'SQL Server',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		cache: 'InMemory',
		date: '20.10.2021',
		def: true,
	},
	{
		id: 1,
		active: true,
		psevdo: 'DvTest',
		name: 'AGSupport_2',
		servertype: 'SQL Server',
		server: 'Docsvision 1',
		index: 'yes',
		cache: 'Redis',
		version: 4373,
		date: '04.11.2022',
		def: false,
	},
]

const panel = ref('start')

const next = () => {
	panel.value = wiz.choose
}
</script>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background: var(--bg-grey);
}
.title {
	font-size: 1.5rem;
	text-align: center;
	color: $secondary;
	vertical-align: baseline;

	.q-icon {
		margin-right: 0.5rem;
		margin-top: -3px;
		font-size: 1.6rem;
	}
}
.close {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
.all {
	width: 900px;
	margin: 0 auto;
}
.q-tab-panels {
	background: transparent;
}
.bottom {
	background: white;
}
.q-table__card {
	background: transparent;
}
:deep(.q-table tr.selected) {
	background: var(--bg-selected);
}
</style>
