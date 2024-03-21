<script setup lang="ts">
// import { ref } from 'vue'

const items = [
	{ id: 0, label: 'ChangeObjectDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 1, label: 'CursorDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 2, label: 'FileCursorDataBaseType', val: 'UseOwnDatabase' },
	{ id: 3, label: 'IconDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 4, label: 'KeysetDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 5, label: 'SearchDataBaseType', val: 'UseTemporaryDatabase' },
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
			label {{item.label}}:
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
</style>
