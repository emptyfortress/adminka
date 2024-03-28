<script setup lang="ts">
import { ref, computed } from 'vue'
import MyField from '@/components/common/MyField.vue'

const prov = ref('InMemory')
const line = ref('')
const pass = ref('')
const schet = ref(false)

const options = ['InMemory', 'NoCache', 'Redis']
const loading = ref(false)
const check = ref(false)

const test = () => {
	loading.value = true
	setTimeout(() => {
		loading.value = false
		check.value = true
	}, 2000)
}
const calcColor = computed(() => {
	if (check.value === true) {
		return 'teal'
	}
	return 'primary'
})
const commonProp = ref([
	{
		id: 0,
		main: 'InMemory',
		label: 'Провайдер',
		options: ['InMemory', 'NoCache', 'Redis'],
		select: true,
	},
	{
		id: 1,
		main: '',
		label: 'Строка подключения',
		disable: true,
	},
	{
		id: 2,
		main: '',
		label: 'Пароль',
		disable: true,
		button: true,
		nodescr: true,
		btLabel: 'Тест',
	},
	{
		id: 3,
		checkbox: true,
		check: false,
		label: 'Счетчики',
		descr: 'Включить счетчики производительности',
	},
])
// TODO: Доделать disable строку подключения в зависимости от селектора
</script>

<template lang="pug">
q-form
	.section Настройки провайдера
	q-list
		MyField(
			v-model:main="item.main" 
			v-model:check="item.check" 
			v-for="item in commonProp" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:checkbox="item.checkbox"
			:disable="item.disable" 
			:button="item.button"
			:options="item.options"
			:select="item.select"
			:btLabel="item.btLabel")
</template>

<style scoped lang="scss">
.all {
	width: 900px;
	margin: 0 auto;
}
.title {
	font-size: 0.8rem;
	text-transform: uppercase;
	color: $secondary;
}
.dis {
	opacity: 0.3;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 250px 1fr;
	align-items: center;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.more {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-select,
.q-input {
	width: 350px;
	font-size: 1rem;
}
</style>
