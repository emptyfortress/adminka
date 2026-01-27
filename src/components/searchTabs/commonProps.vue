<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const props = defineProps({
	db: {
		type: String,
		required: true,
		default: '',
	},
})
const commonProp = ref([
	{
		id: 0,
		main: props.db,
		label: 'База данных',
		descr: 'Название текущей базы, подключенной к ПП.',
		readonly: true,
	},
	{
		id: 1,
		main: 'http://tux.digdes.com:9200/',
		label: 'Адрес сервера Elasticsearch',
		descr: 'Текущий URL-адрес для подключения к серверу Elasticsearch.',
		readonly: true,
	},
	{
		id: 2,
		main: '100',
		label: 'Количество потоков',
		descr: 'Количество параллельных потоков для индексирования документов',
		readonly: false,
		type: 'number',
	},
])
</script>

<template lang="pug">
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in commonProp" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:type="item.type"
		)
</template>

<style scoped lang="scss"></style>
