<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Файл журнала:
		q-input(dense outlined v-model="store.server.server.journal" bg-color="white" :rules="req" @blur="form.validate()")
		.label Адрес хранилища настроек:
		q-input(dense outlined v-model="store.server.server.address" bg-color="white" :rules="req" @blur="form.validate()")
		.label Адрес сайта документации:
		q-input(dense outlined v-model="store.server.server.addressdoc" bg-color="white" :rules="req" @blur="form.validate()")
		div
		q-checkbox(dense v-model="store.server.server.checkversion" label="Проверять версию базы данных")
		div
		.row
			q-checkbox(dense v-model="store.server.server.counters" label="Включить счетчики производительности")
			q-btn(unelevated color="secondary" size="sm").q-ml-lg Обнулить счетчики
	fieldset
		legend Режим кэширования
		q-checkbox(dense v-model="store.server.server.filecache" label="Файлы").q-mr-lg
		q-checkbox(dense v-model="store.server.server.cardcache" label="Карточки").q-mr-lg
		q-checkbox(dense v-model="store.server.server.spravcache" label="Справочники" disable).q-mr-lg
		q-btn(unelevated color="secondary" size="sm") Очистить клиентский кэш
	fieldset
		legend Модули
		q-checkbox(dense v-model="store.server.server.quiet" label="Использовать тихий режим установки модулей").q-mr-lg
		q-checkbox(dense v-model="store.server.server.skip" label="Пропускать обновление БД при установке модулей").q-mr-lg
	fieldset
		legend Локализация полей
		.radio
			.label Язык по умолчанию:
			div
				q-radio(v-model="store.server.server.def" val="ru" label="Русский")
				q-radio(v-model="store.server.server.def" val="en" label="English")
			.label Режим локализации полей:
			div
				q-radio(v-model="store.server.server.reg" val="one" label="Выкл.")
				q-radio(v-model="store.server.server.reg" val="foru" label="Вкл.")
				q-radio(v-model="store.server.server.reg" val="two" label="Чтение")
				q-radio(v-model="store.server.server.reg" val="three" label="Запись")
				q-radio(v-model="store.server.server.reg" val="five" label="Особый *")
		q-separator
		div *  Новое значение поля будет сохраняться и для основной локали, и для локали клиентского приложения.

</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req } from '@/utils/utils'

const store = useStore()

const form = ref()

const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.server.server, (value) => {
	if (value) {
		store.changeDefaults(2)
		emit('change')
	}
})
</script>

<style scoped lang="scss">
.radio {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
}

.q-radio {
	margin-right: 1rem;
}
</style>
