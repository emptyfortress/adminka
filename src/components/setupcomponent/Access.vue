<template lang="pug">
div
	p Здесь настраиваются подключения пользователей к серверу приложений.
	q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
		fieldset
			legend Настройки соединения Windows-клиента
			.blo
				.label Использовать протокол:
				q-input(dense outlined v-model="store.access.access.protokol" bg-color="white" :rules="req" @blur="form.validate()")
				.label Адрес сервера при подключении:
				q-input(dense outlined v-model="store.access.access.address" bg-color="white" :rules="req" @blur="form.validate()")
		fieldset
			legend Дополнительные настройки
			.blo
				.label Адрес сайта при подключении через внешнюю сеть и по http:
				q-input(dense outlined v-model="store.access.access.http" bg-color="white" :rules="req" @blur="form.validate()")
				q-checkbox(dense v-model="store.access.access.auth" label="Запретить встроенную аутентифакцию")
		fieldset
			legend Управление сессиями
			.blo
				.label Автоматически отключать сессии, не активные более:
				.row.items-center
					q-input(dense outlined v-model="store.access.access.session" bg-color="white" type="number").dig
					.q-ml-md минут
			.label Открытые сессии (использовано 1 лицензий из 10):
			q-markup-table(flat dense).table
				thead
					tr
						th
						th Пользователь
						th Компьютер
						th Вход
						th Время доступа
				tbody
					tr
						td
							q-checkbox(dense v-model="sel")
						td company/orlov.v
						td dv105pc
						td 17.11.2022 11:08
						td 17.11.2022 11:08
					tr
						td
						td(colspan="4").q-gutter-xs.text-right
							q-btn(unelevated size="sm" color="secondary") Обновить
							q-btn(unelevated size="sm" color="secondary") Закрыть
							q-btn(unelevated size="sm" color="secondary") Закрыть все
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req } from '@/utils/utils'

const store = useStore()
const form = ref()
const sel = ref(false)

const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.access.access, value => {
	if (value) {
		store.changeDefaults(3)
		emit('change')
	}
})
</script>

<style scoped lang="scss">
thead {
	background: transparent;
}
.table {
	margin-top: 0.5rem;
	background: transparent;
	th,
	td {
		text-align: left;
	}
	td {
		background: #fff;
	}
	th {
		font-size: 0.7rem;
		background: #e0e0e0;
	}
}
</style>
