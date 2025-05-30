<script setup lang="ts">
import { ref } from 'vue'
import SearchConnect from '@/components/tree/SearchConnect.vue'
import MyField from '@/components/common/MyField.vue'

const agreg = ref([
	{
		id: 0,
		main: '',
		label: 'Количество вариантов агрегата',
		descr:
			'Количество выводимых вариантов в агрегате. Максимальное значение 65536.',
	},
])
</script>

<template lang="pug">
#connect.commonzg Подключение
SearchConnect
// WorkflowConnect
#agregat.commonzg Агрегация
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in agreg" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			type='number'
			)
#addition.commonzg Дополнительно

</template>

<style scoped lang="scss"></style>
