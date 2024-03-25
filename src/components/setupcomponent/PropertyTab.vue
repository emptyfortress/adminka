<script setup lang="ts">
import { ref } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import MySelect from '@/components/common/MySelect.vue'
import MyField from '@/components/common/MyField.vue'

const props = defineProps({
	bd: {
		type: Object,
		required: true,
	},
})

const commonProp = ref([
	{ id: 0, model: props.bd.name, label: 'Имя базы данных', descr: '' },
	{ id: 0, model: props.bd.psevdo, label: 'Псевдоним', descr: '' },
	{ id: 0, model: props.bd.server, label: 'Server SQL', descr: '' },
	{ id: 0, model: props.bd.servertype, label: 'Тип сервера', descr: '' },
])

// const options = [
// 	'UseDefaultOrCurrent',
// 	'UseOwnDatabase',
// 	'UseOuterDatabase',
// 	'UseTemporaryDatabase',
// ]
// const tables = [
// 	{ id: 0, label: 'ChangeObjectDataBaseType', val: 'UseTemporaryDatabase' },
// 	{ id: 1, label: 'CursorDataBaseType', val: 'UseTemporaryDatabase' },
// 	{ id: 2, label: 'FileCursorDataBaseType', val: 'UseOwnDatabase' },
// 	{ id: 3, label: 'IconDataBaseType', val: 'UseTemporaryDatabase' },
// 	{ id: 4, label: 'KeysetDataBaseType', val: 'UseTemporaryDatabase' },
// 	{ id: 5, label: 'SearchDataBaseType', val: 'UseTemporaryDatabase' },
// ]
const test = ref('fuck')
</script>

<template lang="pug">
q-form
	.section Общие свойства
	q-list
		MyField(v-model="item.model" v-for="item in commonProp" :key="item.id" :label="item.label")
		

// q-form.all
// 	fieldset
// 		legend Общие свойства
// 		.form
// 			label Имя базы данных:
// 			MyInput(v-model="test")
// 			label Псевдоним:
// 			MyInput(v-model="test")
// 			label Псевдоним:
// 			MySelect(v-model="test")


	// .arch
	// 	.title Свойства базы данных
	//
	// 	.proper
	// 		label Имя базы данных:
	// 		.val(contenteditable) {{props.bd.name}}
	// 		label Псевдоним:
	// 		.val(contenteditable) {{props.bd.psevdo}}
	// 		label Server SQL:
	// 		.val(contenteditable) {{props.bd.server}}
	// 		label Тип сервера:
	// 		.val(contenteditable) {{ props.bd.servertype }}
	// 		label Версия:
	// 		.val(contenteditable) {{props.bd.version}}
	// 		label Дата последнего обновления:
	// 		.val(contenteditable) {{props.bd.date}} 14:53
	// 		label Используется по умолчанию:
	// 		q-checkbox(v-model="props.bd.def" dense)
	// .arch.q-mt-xs
	// 	.title Расположение таблиц
	// 	.tabl
	// 		template(v-for="item in tables" :key="item.id")
	// 			label {{ item.label }}:
	// 			q-select(v-model="item.val" :options="options" dense)
</template>

<style scoped lang="scss">
.section {
	font-size: 1.1rem;
	text-transform: uppercase;
	margin-top: 1rem;
	color: #666;
	margin-left: 2rem;
}
.node {
	display: flex;
	align-items: start;
	.q-btn {
		margin-top: 1rem;
	}
}

legend {
	text-transform: uppercase;
	color: $secondary;
	font-size: 0.72rem;
}
</style>
