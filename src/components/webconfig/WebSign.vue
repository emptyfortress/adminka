<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req, reqnum } from '@/utils/utils'

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.system, (value) => {
	if (value) {
		store.changeWebDefaults(3)
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Адрес сервера:
		q-input(dense outlined v-model="store.wc.sign.address" bg-color="white" :rules="req" @blur="form.validate()")
		.label Клиент ID:
		q-input(dense outlined v-model="store.wc.sign.clientid" bg-color="white" :rules="req" @blur="form.validate()")
		.label Имена сайтов в IIS на сервере КриптоПро DSS:
		q-input(dense outlined v-model="store.wc.sign.iis" bg-color="white" :rules="req" @blur="form.validate()")
		.label URL для проверки подлинности подписи:
		q-input(dense outlined v-model="store.wc.sign.urlcheck" bg-color="white" :rules="req" @blur="form.validate()")
		.label Адрес сервиса штампа времени для XLT1:
		q-input(dense outlined v-model="store.wc.sign.stamp" bg-color="white" :rules="req" @blur="form.validate()")
		.label Тип подписи:
		q-select(dense outlined v-model="store.wc.sign.type" bg-color="white" :rules="req" @blur="form.validate()")
		.label Режим проверки:
		div
			q-radio.q-mr-lg(v-model="store.wc.sign.mode" val="cloud") Через облако
			q-radio(v-model="store.wc.sign.mode" val="local") Локально
		.label URL для переадресации после проверки:
		q-input(dense outlined v-model="store.wc.sign.redirect" bg-color="white" :rules="req" @blur="form.validate()")
		.label Режим хранения токена:
		q-select(dense outlined v-model="store.wc.sign.token" bg-color="white" :rules="req" @blur="form.validate()")
		.label Логотип облачной подписи:
		q-select(dense outlined v-model="store.wc.sign.logo" bg-color="white" :rules="req" @blur="form.validate()")
		.label Обновление агрегатов и списков карточек: 
		div
			q-radio.q-mr-lg(v-model="store.wc.sign.autorefresh" val="auto") Автоматически
			q-radio(v-model="store.wc.sign.autorefresh" val="not") По кнопке "Применить"
		.label Автообновление через, мс:
		q-input.short(dense outlined type="number" v-model="store.wc.sign.aggregatTime" bg-color="white" :rules="reqnum" @blur="form.validate()")
</template>

<style scoped lang="scss">
.short {
	width: 150px;
}
</style>
