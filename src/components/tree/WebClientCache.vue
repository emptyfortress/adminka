<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const Cache = ref([
	{
		id: 0,
		label: 'Кэширование разметок',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Да', val: '1' },
			{ label: 'Нет', val: '2' },
		],
	},
	{
		id: 1,
		label: 'Кэширование папок',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Да', val: '1' },
			{ label: 'Нет', val: '2' },
		],
	},
	{
		id: 2,
		label: 'Кэширование поисковых запросов',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Да', val: '1' },
			{ label: 'Нет', val: '2' },
		],
	},
])
</script>

<template lang="pug">
q-form
	q-list
		SimpleRadioGroup(
			v-for="item in Cache" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)

</template>

<style scoped lang="scss"></style>
