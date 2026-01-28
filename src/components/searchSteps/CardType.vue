<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const typeProp = ref([
	{
		id: 0,
		main: '',
		label: 'Тип карточек',
		descr:
			'Если флаг включен, значение типа карточки будет индексироваться как отдельное поле для последующей агрегации в фасетах.',
		checkbox: true,
	},
])
</script>

<template lang="pug">
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in typeProp" 
		:key="item.id" 
		:label="item.label" 
		:info="item.descr" 
		:descr='item.label'
		:checkbox='item.checkbox'
		:check='false'
		)
</template>

<style scoped lang="scss"></style>
