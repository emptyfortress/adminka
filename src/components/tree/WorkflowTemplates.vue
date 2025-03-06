<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const Prop = ref([
	{
		id: 0,
		main: '',
		label: 'Путь к справочникам и шаблонам процессов',
		descr: 'Адрес сервера приложений, к которому подключается сервиса Workflow',
	},
])

const list = ref([
	{ id: 0, check: false, label: 'Процессы мониторинга активизированных карточек согласования', install: true },
	{ id: 1, check: false, label: 'Системные настройки', install: true },
	{ id: 2, check: false, label: 'Функции WF', install: true },
	{ id: 3, check: false, label: 'Шлюзы WF', install: true },
	{ id: 4, check: false, label: 'Процесс актуализации состояния сотрудников', install: true },
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Prop" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			)

.data
	label Переустановка и настройки бизнес процессов
	q-markup-table
		thead
			tr
				th Имя шаблона
				th Установлен
		tbody
			tr(v-for="item in list")
				td
					q-checkbox(dense v-model="item.check" :label="item.label" color="secondary")
				td
					q-icon(name="mdi-check-bold" color="secondary" size='sm')
			tr
				td(colspan="2")
					q-btn(unelevated color="secondary" label="Переустановить" size="sm") 
</template>

<style scoped lang="scss">
.q-markup-table {
	width: 700px;
	margin-top: .5rem;
}

th {
	text-align: left;
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
}
</style>
