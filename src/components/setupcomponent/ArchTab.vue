<script setup lang="ts">
// import { ref } from 'vue'
import MyRadioGroup from '@/components/common/MyRadioGroup.vue'

// const rasp = ref('one')
// const hour = ref(1)
// const hour1 = ref(1)
// const hour2 = ref(1)
// const week = ref('понедельник')

const options = [
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
	'воскресенье',
]

// const commonProp = ref([
// 	{
// 		id: 0,
// 		main: '',
// 		label: 'Расписание',
// 		descr: 'Расписание архивирования файлов и карточек',
// 		disable: false,
// 	},
// ])
</script>

<template lang="pug">
q-form
	q-list
		MyRadioGroup(label="Расписание архивирования файлов и карточек" descr="Настройте расписание архивирования" :options="options")

</template>

<style scoped lang="scss"></style>
