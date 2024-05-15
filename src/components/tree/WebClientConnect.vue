<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const Prop = ref([
	{
		id: 0,
		main: 'http://company.com/DocsVision/StorageServer',
		label: 'Конфигурация сервера приложений',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 1,
		main: 'AGSupport',
		label: 'Подключаемая база данных',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Имя пользователя',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 3,
		main: '',
		label: 'Пароль',
		descr: 'This is description',
		readonly: false,
	},
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-model:check="item.check" 
			v-for="item in Prop" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:checkbox="item.checkbox")
</template>

<style scoped lang="scss"></style>
