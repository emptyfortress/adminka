<template lang="pug">
.grey(:class="{ edit: editMode }")
	q-form
		WebExpand2(@change="setEditMode" )
	q-card-actions(align="right" v-if="editMode")
		q-btn(flat label="Отмена" @click="otmena")
		q-btn(unelevated color="primary" label="Сохранить все" @click="save")
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'

import { useStore } from '@/stores/store'
import WebExpand2 from '@/components/WebExpand2.vue'

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
.grey {
	margin-top: 0.5rem;
	padding-top: 0.1rem;
}
</style>
