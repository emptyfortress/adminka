<template lang="pug">
.grey(:class="{ edit: editMode }")
	.current {{ props.name }}
	q-form
		.form
			.label Название конфигурации:
			q-input(v-model="form.name" dense outlined bg-color="white" lazy-rules :rules="req")
			.def
			.but
				q-btn(round flat icon="mdi-content-duplicate" @click="duble")
					q-tooltip Дублировать
				q-btn(round flat icon="mdi-trash-can-outline")
					q-tooltip Удалить
					q-menu
						q-list
							q-item.pink(clickable v-close-popup @click="del")
								q-item-section Удалить
		WebExpand(@change="setEditMode" )
	q-card-actions(align="right" v-if="editMode")
		q-btn(flat label="Отмена" @click="otmena")
		q-btn(unelevated color="primary" label="Сохранить все" @click="save")
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'

import { useStore } from '@/stores/store'
import WebExpand from '@/components/WebExpand.vue'

const store = useStore()

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})

const editMode = ref(false)
const emit = defineEmits(['delete', 'duble'])
const del = () => {
	emit('delete')
}
const duble = () => {
	emit('duble', props.name)
}

const form = reactive({
	name: props.name,
	def: false,
})
const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
]

watch(form, value => {
	if (value) {
		editMode.value = true
	}
})
const setEditMode = () => {
	editMode.value = true
}

const otmena = () => {
	console.log('fuck')
	editMode.value = false
	store.server.$reset()
}

const $q = useQuasar()
const save = () => {
	if (form.name.length === 0) {
		$q.notify({
			message: 'Заполните обязательные поля',
			color: 'negative',
		})
	}
	// store.server.$reset()
	// store.panels[1].change = false
	editMode.value = false
	if (form.name.length > 0 && form.name !== props.name) {
		let currentConfigIndex = store.webconfig.findIndex(
			item => item.name === props.name
		)
		store.webconfig[currentConfigIndex].name = form.name
		store.setTabs2(form.name)
	}
}
</script>

<style scoped lang="scss">
.form {
	grid-template-columns: 170px 1fr 1fr 120px;

	.but {
		text-align: right;
	}

	.def {
		margin-top: 8px;
	}

	@media screen and (max-width: 1180px) {
		grid-template-columns: 170px 1fr 120px;

		.def {
			grid-column: 2/3;
		}

		.but {
			grid-row: 1/2;
			grid-column: 3/4;
		}
	}
}
</style>
