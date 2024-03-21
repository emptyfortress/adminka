<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req, reqnum } from '@/utils/utils'

const props = defineProps({
	part: {
		type: Boolean,
		default: false,
	},
})
const store = useStore()

const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.common, value => {
	if (value) {
		store.changeWebDefaults(0)
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	fieldset.q-mt-none
		legend Папки
		.blo
			.label Размещение расширений:
			q-input(dense outlined v-model="store.wc.common.extensions" bg-color="white" :rules="req" @blur="form.validate()")
				q-tooltip(anchor="top middle" self="bottom middle") ExtensionsPath
			.label Адрес установщика утилиты DVWebTool:
			q-input(dense outlined v-model="store.wc.common.dvwebtool" bg-color="white" :rules="req" @blur="form.validate()")
				q-tooltip(anchor="top middle" self="bottom middle") ExtensionsPath
			.label Адрес журнала операций web-клиента:
			q-input(dense outlined v-model="store.wc.common.journal" bg-color="white" :rules="req" @blur="form.validate()")

	fieldset(v-if="!props.part")
		legend Шаблоны для определения устройств
		.blo
			.label Новые мобильные устройства:
			q-input(dense outlined v-model="store.wc.common.template1" bg-color="white" :rules="req" @blur="form.validate()")
			.label Старые мобильные устройства:
			q-input(dense outlined v-model="store.wc.common.template2" bg-color="white" :rules="req" @blur="form.validate()")
			.label Планшеты:
			q-input(dense outlined v-model="store.wc.common.tablet" bg-color="white" :rules="req" @blur="form.validate()")
	fieldset(v-if="!props.part")
		legend Дополнительно
		.blo
			.label Режим удаления карточек:
			div
				q-radio.q-mr-lg(v-model="store.wc.common.del" val="trash") В корзину
				q-radio(v-model="store.wc.common.del" val="perm") Полное удаление
			.label Порядок следования кнопок:
			div
				q-radio.q-mr-lg(v-model="store.wc.common.buttons" val="auto") Auto
				q-radio.q-mr-lg(v-model="store.wc.common.buttons" val="one") OK, Cancel
				q-radio(v-model="store.wc.common.buttons" val="two") Cancel, OK
			.label Прятать боковую панель по клику на странице:
			div
				q-radio.q-mr-lg(v-model="store.wc.common.sidebar" val="hide") Да
				q-radio.q-mr-lg(v-model="store.wc.common.sidebar" val="one") Нет
			.label Оффлайн-режим после паузы, мин.:
			q-input.short(dense outlined type="number" v-model="store.wc.common.offline" bg-color="white" :rules="reqnum" @blur="form.validate()")
			.label Закрытие сессии после паузы, мин.:
			q-input.short(dense outlined type="number" v-model="store.wc.common.close" bg-color="white" :rules="reqnum" @blur="form.validate()")
			.label Показывать сообщение о переходе в оффлайн:
			div
				q-radio.q-mr-lg(v-model="store.wc.common.offlineMessage" val="yes") Да
				q-radio.q-mr-lg(v-model="store.wc.common.offlineMessage" val="one") Нет
			.label Максимальный размер файла, байт:
			q-input.short(dense outlined type="number" v-model="store.wc.common.size" bg-color="white" :rules="reqnum" @blur="form.validate()")
</template>

<style scoped lang="scss">
.blo {
	grid-template-columns: 300px 1fr;
}

.short {
	width: 170px;
}

legend {
	font-weight: 600;
}
</style>
