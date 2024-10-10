<script setup lang="ts">
// import { ref } from 'vue'

const items = [
	{
		id: 0,
		caption: 'Изменения объектов',
		label: 'ChangeObjectDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 1,
		caption: 'Внутренние курсоры',
		label: 'CursorDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 2,
		caption: 'Файловые курсоры',
		label: 'FileCursorDataBaseType',
		val: 'UseOwnDatabase',
	},
	{
		id: 3,
		caption: 'Иконки',
		label: 'IconDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 4,
		caption: 'Представления',
		label: 'KeysetDataBaseType',
		val: 'UseTemporaryDatabase',
	},
	{
		id: 5,
		caption: 'Поисковые запросы',
		label: 'SearchDataBaseType',
		val: 'UseTemporaryDatabase',
	},
]

const options = [
	'UseDefaultOrCurrent',
	'UseOwnDatabase',
	'UseOuterDatabase',
	'UseTemporaryDatabase',
]
</script>

<template lang="pug">
q-expansion-item(label="Размещение таблиц" header-class="text-bold")
	.mygrid.q-pa-md
		template(v-for="item in items")
			div
				.caption {{item.caption}}:
				label {{item.label}}
			q-select(v-model="item.val" :options="options" dense outlined bg-color="white")
</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: auto 300px;
	justify-content: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-input,
.q-select {
	width: 100%;
}
.caption {
	font-weight: 600;
}
label {
	font-size: 0.8rem;
}
</style>
