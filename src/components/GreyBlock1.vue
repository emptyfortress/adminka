<template lang="pug">
div
	.grey(:class="{ edit : editMode1}")
		.close
			q-btn(round flat icon="mdi-content-duplicate" @click="duble")
				q-tooltip Дублировать
			q-btn(round flat icon="mdi-trash-can-outline")
				q-tooltip Удалить
				q-menu
					q-list
						q-item(clickable v-close-popup @click="del(name)").pink
							q-item-section Удалить
		.current {{ name }}
		br
		.form(v-if="props.dv")
			.label Имя соединения:
			q-input(v-model="form.name" dense outlined bg-color="white")
			.label Адрес сервера:
			q-input(v-model="form.address" dense outlined bg-color="white")
			.label База данных:
			q-input(v-model="form.database" dense outlined bg-color="white")
			.label Логин:
			q-input(v-model="form.login" dense outlined bg-color="white")
			.label Пароль:
			q-input(v-model="form.password" dense outlined bg-color="white" type="password")

		.form(v-if="!props.dv")
			.label Имя соединения:
			q-input(v-model="form.name" dense outlined bg-color="white")
			.label Конфигурация сервера:
			q-select(v-model="form.config" dense outlined bg-color="white" :options="config")
			.label База данных:
			q-select(v-model="form.database" dense outlined bg-color="white" :options="config")

		.form.q-mt-lg
			div
			q-checkbox(v-model="form.def1" dense label="Использовать по умолчанию")
		q-card-actions(align="right" v-if="editMode1")
			q-btn(flat label="Отмена" @click="editMode1 = false")
			q-btn(unelevated color="primary" label="Сохранить" @click="save1")
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
	dv: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['delete', 'duble'])
const config = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

const editMode1 = ref(false)
const name = ref(props.name)
const form = reactive({
	name: props.name,
	address: '',
	database: 'Database 1',
	login: '',
	password: '',
	def1: false,
	config: 'Конфигурация А',
})

watch(form, (value) => {
	if (value) {
		editMode1.value = true
	}
})
const save1 = () => {
	name.value = form.name
	editMode1.value = false
}
const del = (e: string) => {
	emit('delete', e)
}
const duble = () => {
	emit('duble', name)
}
</script>

<style scoped lang="scss"></style>
