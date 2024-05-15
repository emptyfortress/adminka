<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const One = ref([
	{
		id: 0,
		main: '1000',
		label: 'Автообновление через, мс',
		readonly: false,
		type: 'number',
	},
])

const Radio = ref([
	{
		id: 0,
		label: 'Обновление грида',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Автоматически', val: '1' },
			{ label: 'По кнопке "Применить"', val: '2' },
		],
	},
])
</script>

<template lang="pug">
q-form
	q-list
		SimpleRadioGroup(
			v-for="item in Radio" 
			:key="item.id" 
			:label="item.label" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)
		MyField(
			v-model:main="item.main" 
			v-for="item in One" 
			:key="item.id" 
			:label="item.label" 
			:readonly="item.readonly"
			:type="item.type"
			)
</template>

<style scoped lang="scss"></style>
