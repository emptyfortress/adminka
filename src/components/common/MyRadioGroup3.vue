<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import MyInput from '@/components/common/MyInput.vue'


const rasp = ref('one')

const changed = ref(false)

const old = ref()

onMounted(() => {
	old.value = rasp.value
})
watch(rasp, (val, oldval) => {
	if (val) {
		changed.value = true
	}
})

const reset = () => {
	rasp.value = old.value
	nextTick(() => {
		changed.value = false
	})
}
const hour1 = ref('www.google.com')
const hour2 = ref(4173)
const hour3 = ref('www.yandex.ru')
const hour4 = ref(3589)
const hour5 = ref('')
const hour6 = ref('')

</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	q-list.q-mt-md(dense)
		q-item(tag="label" v-ripple)
			q-item-section(side)
				q-radio(v-model="rasp" val="one" dense)
			q-item-section Использовать http
		.lef
			label Сайт
			.descr Адрес подключения к Web-клиенту
			MyInput(v-model="hour1")
			br
			label Порт
			.descr Порт подключения к Web-клиенту
			MyInput(v-model="hour2" type='number')

		br
		q-item(tag="label" v-ripple)
			q-item-section(side)
				q-radio(v-model="rasp" val="two" dense)
			q-item-section Использовать https
		.lef
			label Сайт
			.descr Адрес подключения к Web-клиенту
			MyInput(v-model="hour3")
			br
			label Порт
			.descr Порт подключения к Web-клиенту
			MyInput(v-model="hour4" type='number')
			br
			label Сертификат
			.descr Путь к штампу сертификата
			MyInput(v-model="hour5")
			br
			label Пароль
			.descr Пароль сертификата
			MyInput(v-model="hour6")


	
</template>

<style scoped lang="scss">
.lef {
	margin-left: 3.5rem;
}

.data {
	padding: 1rem;
	padding-top: 0.3rem;
	margin-left: 1rem;
	border: 1px solid transparent;
	position: relative;

	&:hover {
		background: #e0e0e0;
		border: 1px solid #ccc;

		.q-btn {
			display: inline-flex;
		}
	}

	label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
	}

	.q-input,
	.q-select {
		max-width: 400px;
		margin-top: 4px;
	}

	.descr {
		color: #666;
	}

	.inner {
		width: 1px;
		position: absolute;
		top: 0.5rem;
		bottom: 1rem;
		left: 0.2rem;
		border-right: 3px solid $primary;
	}

	.refresh {
		position: absolute;
		left: -2rem;
		top: 0.1rem;
		display: none;
	}

	.add {
		margin-top: 4px;
	}

	:deep(.q-field__native) {
		font-size: 1rem;
		// text-align: center;
	}
}
</style>
