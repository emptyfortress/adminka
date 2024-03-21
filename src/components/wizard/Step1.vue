<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { useForm } from '@/stores/form'

const props = defineProps({
	text: {
		type: String,
		default:
			'Выберите сервер SQL, под управлением которого будет работать создаваемая база данных:',
	},
})

const forms = useForm()

const foorm = ref()

const validate = () => {
	foorm.value.validate().then((success: any) => {
		if (success === true) {
			forms.step1.success = true
		} else {
			forms.step1.success = false
		}
	})
}

const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

defineExpose({ validate })
</script>

<template lang="pug">
.text-bold {{ props.text }}
q-form.q-mt-md(ref="foorm" greedy)
	.form
		label Тип сервера:
		q-select(v-model="forms.step1.type"
			:options="forms.step1.options"
			dense
			outlined
			hide-bottom-space
			bg-color="white")
		label Имя сервера:
		q-input(v-model="forms.step1.name"
			dense
			hide-bottom-space
			outlined
			bg-color="white"
			:rules="req")
		template(v-if="forms.step1.type !== 'MS SQL Server'")
			label Порт:
			q-input(v-model="forms.step1.port"
				dense
				hide-bottom-space
				outlined
				bg-color="white"
				type="number"
				:rules="req")
		label Проверка подлинности:
		q-select(v-model="forms.step1.check"
			:options="forms.step1.options1"
			dense
			hide-bottom-space
			outlined
			bg-color="white"
			:rules="req")
		label Логин:
		q-input(v-model="forms.step1.login"
			dense
			hide-bottom-space
			outlined
			bg-color="white"
			:rules="req")
		label Пароль:
		q-input(v-model="forms.step1.pass"
			dense
			hide-bottom-space
			outlined
			bg-color="white"
			:rules="req")
</template>

<style scoped lang="scss">
.form {
	display: grid;
	grid-template-columns: auto 400px;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	margin: 0 auto;
}
.q-input,
.q-select {
	width: 100%;
}
.err {
	transform: translate(105%, -28px);
	// position: fixed;
	// top: -0.3rem;
	// left: 100%;
	// width: 200px;
}
</style>
