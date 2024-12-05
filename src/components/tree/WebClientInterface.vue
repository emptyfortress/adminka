<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const vid = ref([
	{
		id: 0,
		label: 'Порядок следования кнопок',
		descr:
			'Порядок кнопок ОК и Отмена в диалоговых окнах и разметках Web-клиента',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Auto', val: '1' },
			{ label: 'OK, Cancel', val: '2' },
			{ label: 'Cancel, OK', val: '3' },
		],
	},
	{
		id: 1,
		label: 'Закрепление основного меню',
		descr: 'Режим закрепления основного меню',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Закреплять кнопкой Скрепка', val: '1' },
			{ label: 'Закреплять кнопкой Гамбургер', val: '3' },
		],
	},
])
const vid1 = ref([
	{
		id: 1,
		main: '',
		check: true,
		label: 'Скрытие боковой панели',
		info: 'Режим скрытия правой боковой панели в карточках',
		descr: 'Cкрывать при щелчке вне боковой панели',
		readonly: false,
		checkbox: true,
	},
])
</script>

<template lang="pug">

.section Внешний вид
q-list
	SimpleRadioGroup(
		v-for="item in vid" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:disable="item.disable"
		:startValue="item.startValue"
		:group="item.group"
	)
	MyField(
		v-model:main="item.main" 
		v-for="item in vid1" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:checkbox="item.checkbox"
		:info='item.info'
		)
.section Настройки грида
.section Настройки агрегации
.section Прочие
</template>

<style scoped lang="scss"></style>
