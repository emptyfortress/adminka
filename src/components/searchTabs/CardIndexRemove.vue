<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const commonProp = ref([
	{
		id: 0,
		main: '',
		label: 'Удалять исходные файлы после индексирования',
		descr: 'Удалять файлы',
		info: 'Если флаг включен, то сохраняется только извлечённый текст, оригинальные файлы удаляются из поискового индекса Elasticsearch. Файлы в Docsvision не затрагиваются.',
		checkbox: true,
		check: false,
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
		:info="item.info" 
		:checkbox='item.checkbox'
		:check='item.check'
		)
</template>

<style scoped lang="scss"></style>
