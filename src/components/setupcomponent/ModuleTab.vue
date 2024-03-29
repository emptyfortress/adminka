<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import MyField from '@/components/common/MyField.vue'
import Step7 from '@/components/wizard/Step7.vue'

// import { useWiz } from '@/stores/wiz'

// const wiz = useWiz()

const updateState = ref(false)
const key = ref(0)

// const start = () => {
// 	updateState.value = true
// 	key.value += 1
// 	setTimeout(() => {
// 		wiz.moveCheck()
// 		wiz.resetCheck()
// 	}, 5000)
// }
const commonProp = reactive([
	{
		id: 0,
		check: false,
		checkbox: true,
		descr: 'Базовые объекты',
		block: 1,
	},
	{
		id: 1,
		check: false,
		checkbox: true,
		descr: 'Управление документами',
		block: 1,
	},
	{
		id: 2,
		check: false,
		checkbox: true,
		descr: 'Управление процессами',
		block: 1,
	},
	{
		id: 3,
		check: false,
		checkbox: true,
		descr: 'Конструктор согласований',
		block: 2,
	},
	{
		id: 4,
		check: false,
		checkbox: true,
		descr: 'Web-client',
		block: 2,
	},
])
const firstBlock = computed(() => {
	return commonProp.filter(item => item.block == 1)
})
const secondBlock = computed(() => {
	return commonProp.filter(item => item.block == 2)
})
const loading = ref(false)

const action = () => {
	loading.value = !loading.value
	updateState.value = !updateState.value
	setTimeout(() => {
		loading.value = !loading.value
		commonProp.filter(item => item.check == true).map(el => (el.block = 1))
		commonProp.map(el => (el.check = false))
		updateState.value = !updateState.value
	}, 4000)
}

const active = computed(() => {
	return commonProp.filter(item => item.check).length
})
</script>

<template lang="pug">
.data
	label Обновить настройки для модулей:
	q-form
		div(v-for="item in firstBlock" :key="item.id")
			q-checkbox(v-if="item.checkbox" v-model="item.check" :label="item.descr" dense)
	.q-mt-lg(v-if="secondBlock.length > 0")
		label Загрузить настройки для модулей:
		div(v-for="item in secondBlock" :key="item.id")
			q-checkbox(v-if="item.checkbox" v-model="item.check" :label="item.descr" dense)
	.begin
		q-btn.q-mt-md(unelevated color="secondary" :loading="loading" label="Начать" @click="action" size="sm" :disable="!active") 
		Step7(v-if="updateState")

</template>

<style scoped lang="scss">
.begin {
	display: grid;
	grid-template-columns: auto 1fr;
	// justify-items: stretch;
	align-items: start;
	column-gap: 1rem;
}
</style>
