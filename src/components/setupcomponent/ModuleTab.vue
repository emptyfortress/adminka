<script setup lang="ts">
import { ref } from 'vue'
import { useWiz } from '@/stores/wiz'
import Step7 from '@/components/wizard/Step7.vue'

const wiz = useWiz()

const updateState = ref(false)
const key = ref(0)

const start = () => {
	updateState.value = true
	key.value += 1
	setTimeout(() => {
		wiz.moveCheck()
		wiz.resetCheck()
	}, 5000)
}
</script>

<template lang="pug">
.all
	.arch.archnew
		.column
			.text-bold Обновить настройки для модулей:
			q-checkbox(v-for="item in wiz.check1"
				:key="item.id"
				:label="item.label"
				v-model="item.val")
		.column
			template(v-if="wiz.check2.length > 0")
				.text-bold Загрузить настройки для модулей:
				q-checkbox(v-for="item in wiz.check2"
					:key="item.id"
					:label="item.label"
					v-model="item.val")
		q-btn(unelevated color="primary" :disable="wiz.checkState1 && wiz.checkState2" size="md" label="Начать" @click="start").q-mt-md 

	.arch.q-mt-sm(v-if="updateState")
		component(:is="Step7" hint="Обновление и/или загрузка дополнительных настроек:" result="Завершено успешно!" :key="key" )
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
	align-self: center;
}
.dis {
	opacity: 0.3;
}
.archnew {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 0.6fr;
	align-items: top;
	// justify-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
	.q-btn {
		align-self: center;
	}
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
.q-checkbox {
	margin-left: -0.5rem;
}
.done {
	margin-top: 2rem;
}
</style>
