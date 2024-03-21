<template lang="pug">
div
	.grey(:class="{ edit : editMode1}")
		.close
			q-btn(round flat icon="mdi-restart")
				q-tooltip( anchor="top middle" self="bottom middle") Перезапустить процесс
			q-btn(round flat icon="mdi-trash-can-outline")
				q-tooltip( anchor="top middle" self="bottom middle") Удалить процесс
				q-menu
					q-list
						q-item(clickable v-close-popup @click="del(name)").pink
							q-item-section Удалить

		.current {{ name }}
		br
		.threecol
			.border.zero
				.form
					.label Имя процесса
					q-input(v-model="form.name" dense outlined bg-color="white").rem
					.label Тип конфигурации
					q-select(v-model="form.configtype" dense outlined :options="options" bg-color="white").rem
					.label Таймаут, сек.
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number").small
					div
					.checks.q-gutter-x-md
						q-checkbox(v-model="form.turn" dense label="Отключено")
						q-checkbox(v-model="form.x86" dense label="Использовать x86")

			.border
				.form
					.label Соединение Docsvision
					q-select(v-model="form.connection" dense outlined :options="options2" bg-color="white").rem
					template(v-if="form.configtype == 'Базовые объекты'")
						.label Соединение Почтовый сервер
						q-select(v-model="form.email" dense outlined :options="options2" bg-color="white").rem
					template(v-if="form.configtype == 'Обслуживание ЭП'")
						.label Дней до окончания действия сертификата
						q-input.small(v-model="form.timeout" dense outlined bg-color="white" type="number")
						.label Количество карточек
						q-input.small(v-model="form.timeout" dense outlined bg-color="white" type="number")
						.label Интервал между запросами, сек.
						q-input.small(v-model="form.timeout" dense outlined bg-color="white" type="number")

					template(v-if="form.configtype == 'Коннектор к реестру МЧД'")
						.label Сервис по работе с МЧД
						q-select(v-model="mcd" dense outlined :options="options1" bg-color="white").rem
						.label API-ключ
						q-input(v-model="api" dense outlined bg-color="white" type="password")
						.label Интервал между запросами, сек.
						q-input.small(v-model="form.timeout" dense outlined bg-color="white" type="number")

		q-card-actions(align="right" v-if="editMode1")
			q-btn(flat label="Отмена" @click="editMode1 = false")
			q-btn(unelevated color="primary" label="Применить" @click="save1")
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})
const emit = defineEmits(['del'])

const editMode1 = ref(false)
const name = ref(props.name)
const options = [
	'Базовые объекты',
	'Обслуживание ЭП',
	'Коннектор к реестру МЧД',
]
const options1 = ['Контур.Доверенность', 'Option 1', 'Option 2', 'Option 3']
const options2 = ['Option 0', 'Option 1', 'Option 2', 'Option 3']
const mcd = ref('Контур.Доверенность')
const api = ref('931a4d85-ef75-8f5e-4363-e5ee1e06bd1e')
const form = reactive({
	name: props.name,
	configtype: 'Базовые объекты',
	connection: 'Sol2016',
	email: 'd6d224',
	server: '',
	timeout: 0,
	turn: false,
	x86: false,
	def1: false,
})

watch(form, value => {
	if (value) {
		editMode1.value = true
	}
})
const save1 = () => {
	name.value = form.name
	editMode1.value = false
}
const del = (e: string) => {
	emit('del', e)
}
</script>

<style scoped lang="scss">
.threecol {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
}
@media screen and (max-width: 1024px) {
	.threecol {
		grid-template-columns: 1fr;
	}
}
.border {
	border: 4px double #ccc;
	padding: 0.5rem;
	.form {
		column-gap: 1rem;
	}
}
.form {
	grid-template-columns: auto 1fr;
}
.small {
	width: 80px;
	font-size: 1rem;
}
.close {
	top: 0;
}
</style>
