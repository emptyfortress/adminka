<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBp } from '@/stores/bp'

const bp = useBp()
const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

const emit = defineEmits(['change', 'haserror', 'noerror'])
const myform = ref()
watch(bp.post, (value) => {
	if (value) {
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="myform" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus).post
	.form
		.label Тип сервера:
		q-select(v-model="bp.post.typ" :options="bp.post.options" dense outlined bg-color="white").inp
		.label E-mail сервера:
		q-input(v-model="bp.post.email" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
	fieldset(v-if="bp.post.typ === 'MS Exchange Web Services'")
		legend MS Exchange Web Services
		.grd
			.label Адрес сервера для подключения:
			q-input(v-model="bp.post.address" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Версия сервиса:
			q-select(v-model="bp.post.version" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Аутентификация:
			q-select(v-model="bp.post.auth" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Имя пользователя:
			q-input(v-model="bp.post.name" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Пароль:
			q-input(v-model="bp.post.pass" type="password" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp

	fieldset(v-if="bp.post.typ === 'SMT / POP3'")
		legend SMT / POP3
		.grd
			.label Отправка:
			q-input(v-model="bp.post.address" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label.text-bold SMPT Server
			.myrow
				q-input(v-model="bp.post.address" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()")
				q-checkbox(v-model="bp.post.ssl" label="SSL" dense)
			.label Аутентификация:
			q-select(v-model="bp.post.auth" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Имя пользователя:
			q-input(v-model="bp.post.name" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Пароль:
			q-input(v-model="bp.post.pass" type="password" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label.text-bold POP3 Server:
			.myrow
				q-input(v-model="bp.post.address" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()")
				q-checkbox(v-model="bp.post.ssl" label="SSL" dense)
			.label Аутентификация:
			q-select(v-model="bp.post.auth" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Имя пользователя:
			q-input(v-model="bp.post.name" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Пароль:
			q-input(v-model="bp.post.pass" type="password" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp

	fieldset(v-if="bp.post.typ === 'MS Exchange'")
		legend MS Exchange
		.grd
			.label Профиль MS Exchange:
			q-input(v-model="bp.post.address" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
</template>

<style scoped lang="scss">
.post {
	display: grid;
	grid-template-columns: 3fr 4fr;
	justify-items: start;
	align-items: flex-start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.form {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
fieldset {
	width: 100%;
	margin-top: -0.5rem;
}
.grd {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-input,
.q-select {
	width: 100%;
	margin-bottom: 0;
}
.myrow {
	display: flex;
	gap: 1rem;
	width: 100%;
	.q-input {
		flex-grow: 1;
	}
}
:deep(.q-field--with-bottom) {
	padding-bottom: 0.5rem;
}
</style>
