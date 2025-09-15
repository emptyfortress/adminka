<script setup lang="ts">
import { ref } from 'vue'
const dialog = defineModel<boolean>('dialog')
const importMode = defineModel<boolean>('importMode')

const list = ref([
	{
		id: 0,
		check: false,
		label: 'DVM',
	},
	{
		id: 1,
		check: false,
		label: 'DVM-new',
	},
	{
		id: 2,
		check: false,
		label: '103pc0103',
	},
])

const toggle = (n: number) => {
	list.value.map(item => (item.check = false))
	list.value[n].check = true
}
const toggle1 = (n: number) => {
	list.value.map(item => (item.check = false))
	list.value[n].check = true
}

const action = () => {
	list.value.map(item => (item.check = false))
	dialog.value = false
}
</script>

<template lang="pug">
q-dialog(v-model="dialog")
	q-card(style='min-width: 400px;')
		q-card-section.row.items-center.q-pb-none
			.text-h6(v-if='importMode') Импортировать настройки
			.text-h6(v-else) Экспортировать настройки
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section(v-if='importMode')
			p Выберите сервер откуда скопировать настройки
			q-list(dense)
				q-item(clickable v-for="( item, index ) in list" :key='item.id' @click="toggle1(index)")
					q-item-section(side)
						q-checkbox(v-model="item.check")
					q-item-section
						q-item-label {{ item.label }}

		q-card-section(v-else)
			p Выберите сервер куда скопировать настройки
			q-list(dense)
				q-item(clickable v-for="( item, index ) in list" :key='item.id' @click="toggle(index)")
					q-item-section(side)
						q-checkbox(v-model="item.check")
					q-item-section
						q-item-label {{ item.label }}

		q-card-actions.q-mx-md.q-mb-md(align='right')
			q-btn(flat color="primary" label="Отмена" @click="action") 
			q-btn(unelevated color="primary" label="ОК" @click="action") 
</template>

<style scoped lang="scss"></style>
