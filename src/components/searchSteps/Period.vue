<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
// import MyInput from '@/components/common/MyInput.vue'
import MyRadioGroup1 from '@/components/common/MyRadioGroup1.vue'

const changed = ref(false)

const time = ref({ from: '10:00', to: '23:00' })

watch(
	time,
	(val, oldval) => {
		if (val) {
			changed.value = true
		}
	},
	{ deep: true }
)

const reset = () => {
	time.value = { from: '10:00', to: '23:00' }
	nextTick(() => {
		changed.value = false
	})
}
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label Обновление индексов
	.descr Периодичность обновления существующих индексов
	MyRadioGroup1(label="Очищать корзину" descr="Настройка периодичности очистки корзины")

</template>

<style scoped lang="scss">
.myrow {
	display: grid;
	grid-template-columns: 100px 8px 100px;
	align-items: center;
	column-gap: 5px;
}
</style>
