<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const Tools = ref([
	{
		id: 0,
		main: '',
		label: 'Порт подключения',
		descr: 'Порт для подключения к DVWebTool и DVSupService',
	},
])

const WebTool = ref([
	{
		id: 1,
		main: 'Content\Tools\DVWebTool\DocsVision.DVWebTool.application',
		label: 'Адрес установщика утилиты DVWebTool',
		descr: 'Адрес каталога с DVWebTool',
	},
	{
		id: 2,
		main: '0',
		label: 'Закрывать DVWebTool после выполнения действия',
		info: 'Закрывать DVWebTool после выполнения действия',
		descr: 'Закрывать DVWebTool после выполнения действия',
		checkbox: true,
		check: false,
	},
	{
		id: 3,
		main: '0',
		label: 'Автоматический запуск DVWebTool',
		info: 'Запуск DVWebTool автоматически при загрузке системы',
		descr: 'Запускать DVWebTool автоматически',
		checkbox: true,
		check: false,
	},
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in Tools" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			)

	.section DVwebtool
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in WebTool" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:info='item.info'
			:check='item.check'
			:checkbox='item.checkbox'
			)
.q-ml-lg.q-gutter-x-xs
	q-btn(unelevated color="secondary" label="Собрать DVwebtool" size='sm') 
	q-btn(unelevated color="secondary" label="Скачать" size='sm') 
</template>

<style scoped lang="scss"></style>
