<template lang="pug">
div
	.grey(:class="{ edit : editMode}")
		.close
			q-btn(round flat icon="mdi-pencil" @click="setEditMode")
				q-tooltip Редактировать
			q-btn(round flat icon="mdi-content-duplicate" @click="duble")
				q-tooltip Дублировать
			q-btn(round flat icon="mdi-trash-can-outline")
				q-tooltip Удалить
				q-menu
					q-list
						q-item(clickable v-close-popup @click="del").pink
							q-item-section Удалить
		.current {{ name }}
		br
		.form
			.label Название конфигурации:
			q-input(v-model="form.name" dense outlined bg-color="white")
		br
		q-markup-table(flat dense :key="compKey").table
			thead
				tr
					th.xsm
					th.bor Параметр
					th Значение
					th(v-if="editMode").small.bor1 Действия
			tbody
				tr(v-for="(par, index) in params" :key="par.id" @dblclick="setEditMode")
					td.xsm {{ index + 1 }}
					td.bor
						.edit1(:contenteditable="con" :id="par.id") {{ par.key }}
					td.fix
						.edit2(:contenteditable="con") {{ par.value }}
					td(v-if="editMode").small.bor1
						.hov
							q-btn(unelevated round dense color="secondary" icon="mdi-plus" size="10px" @click="add(index)")
							q-btn(unelevated round dense color="secondary" icon="mdi-content-duplicate" size="10px" @click="duplicate(par, index)")
							q-btn(unelevated round dense color="secondary" icon="mdi-trash-can-outline" size="10px" @click="remove(index)")


		.q-mt-lg
			q-checkbox(v-model="form.def" dense label="Использовать по умолчанию")
		q-card-actions(align="right" v-if="editMode")
			q-btn(flat label="Отмена" @click="otmena")
			q-btn(unelevated color="primary" label="Сохранить" @click="save1")
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { uid } from 'quasar'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})
const emit = defineEmits(['delete', 'duble'])

const editMode = ref(false)
const name = ref(props.name)
const form = reactive({
	name: props.name,
	def: false,
})

watch(form, (value) => {
	if (value) {
		editMode.value = true
		con.value = true
	}
})

const setEditMode = () => {
	editMode.value = !editMode.value
	con.value = !con.value
}

const save1 = () => {
	name.value = form.name
	editMode.value = false
}
const del = () => {
	emit('delete')
}
const duble = () => {
	emit('duble', name)
}

const con = ref(false)

const compKey = ref(0)
const otmena = () => {
	params.value = [...backup]
	con.value = false
	editMode.value = false
	compKey.value += 1
}

const backup = [
	{ id: uid(), key: 'DV_Docsvision_Platform_5.5_Server Databases Docsvision DB', value: '' },
	{ id: uid(), key: 'DV_Docsvision__Platform_5.5_Server_DefaultBaseName', value: '' },
	{ id: uid(), key: 'DV_Groups_Docs Vision Administrators 0', value: '' },
	{ id: uid(), key: 'DV_Groups_Docs Vision Administrators 1', value: '' },
	{ id: uid(), key: 'DV_Groups_DocsVision Security Administrators_0', value: '' },
	{ id: uid(), key: 'DV_Security_Jwt_Securitykey', value: '' },
	{ id: uid(), key: 'DV_Security_Jwt_Issuer', value: '' },
	{ id: uid(), key: 'DV_Domains_o', value: '' },
	{ id: uid(), key: 'DV_Ldap_Credential_UserName', value: '' },
	{ id: uid(), key: 'DV_Ldap_Credential_Password', value: '' },
	{ id: uid(), key: 'DV_APIKEY', value: '' },
	{ id: uid(), key: 'DV_Logging_LogLevel_Default', value: '' },
	{ id: uid(), key: 'KRBS_KTNAME', value: '' },
]

let params = ref([
	{ id: uid(), key: 'DV_Docsvision_Platform_5.5_Server Databases Docsvision DB', value: '' },
	{ id: uid(), key: 'DV_Docsvision__Platform_5.5_Server_DefaultBaseName', value: '' },
	{ id: uid(), key: 'DV_Groups_Docs Vision Administrators 0', value: '' },
	{ id: uid(), key: 'DV_Groups_Docs Vision Administrators 1', value: '' },
	{ id: uid(), key: 'DV_Groups_DocsVision Security Administrators_0', value: '' },
	{ id: uid(), key: 'DV_Security_Jwt_Securitykey', value: '' },
	{ id: uid(), key: 'DV_Security_Jwt_Issuer', value: '' },
	{ id: uid(), key: 'DV_Domains_o', value: '' },
	{ id: uid(), key: 'DV_Ldap_Credential_UserName', value: '' },
	{ id: uid(), key: 'DV_Ldap_Credential_Password', value: '' },
	{ id: uid(), key: 'DV_APIKEY', value: '' },
	{ id: uid(), key: 'DV_Logging_LogLevel_Default', value: '' },
	{ id: uid(), key: 'KRBS_KTNAME', value: '' },
])

const add = (e: any) => {
	let newid = uid()
	let temp = { id: newid, key: 'Новый параметр', value: '' }
	params.value.splice(e + 1, 0, temp)
	setTimeout(() => {
		let key = document.getElementById(newid)
		key?.focus()
	}, 10)
}
const duplicate = (a: any, e: number) => {
	let temp = { id: '', key: '', value: '' }
	Object.assign(temp, a)
	let newid = uid()
	temp.id = newid
	params.value.splice(e + 1, 0, temp)
	setTimeout(() => {
		let key = document.getElementById(newid)
		window.getSelection()?.selectAllChildren(key!)
		key?.focus()
	}, 10)
}

const remove = (e: number) => {
	params.value.splice(e, 1)
}

const save = (e: any) => {
	// parameters = []
}
</script>

<style scoped lang="scss">
.form {
	grid-template-columns: 170px 320px;
}
.table {
	background: transparent;
	th {
		text-align: left;
		&.bor {
			border-right: 1px solid #ccc;
		}
		&.bor1 {
			border-left: 1px solid #ccc;
		}
	}
	tbody tr {
		position: relative;
		&:hover {
			.hov {
				display: flex;
			}
		}
	}
	td {
		white-space: normal;
		&.bor {
			border-right: 1px solid #ccc;
		}
		&.bor1 {
			border-left: 1px solid #ccc;
		}
	}
}
.hov {
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	display: none;
	justify-content: flex-end;
	gap: 3px;
	align-items: center;
}
.xsm {
	width: 20px;
	text-align: right;
}
th.small,
td.small {
	width: 100px;
	text-align: right;
	position: relative;
}
.edit1:focus,
.edit2:focus {
	background: white;
	outline: 1px solid $primary;
}
.fix {
	min-width: 100px;
}
</style>
