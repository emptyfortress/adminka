<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBp } from '@/stores/bp'

const emit = defineEmits(['change', 'haserror', 'noerror'])

const bp = useBp()

const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
]

watch(bp.bp, value => {
	if (value) {
		emit('change')
	}
})
const myform = ref()
</script>

<template lang="pug">
q-form(ref="myform" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.divide
		.form
			.label Имя службы:
			q-input(v-model="bp.bp.name" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Тип запуска:
			q-select(v-model="bp.bp.typ" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Учетная запись:
			q-input(v-model="bp.bp.user" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp
			.label Пароль:
			q-input(v-model="bp.bp.pass" type="password" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()").inp

		fieldset.first
			legend Управление службой
			q-card-actions(align="left")
				q-btn(unelevated size="sm" icon="mdi-play" color="secondary" label="Старт").start
				q-btn(unelevated size="sm" icon="mdi-restart" color="secondary" label="Рестарт").start
				q-btn(unelevated size="sm" icon="mdi-stop" color="secondary" label="Стоп").start
				q-checkbox(v-model="bp.bp.check" dense label="Перезапускать при неудачном старте").q-my-md
				.smform
					.label Задержка перед запуском, сек:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Очищать счетчик попыток, сек:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")

	.second
		fieldset
			legend Параметры управления
			.third
				.digit
					.label Период поиска процессов, сек:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Макс. объем памяти, Мб:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Предел таймаутов функций:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Время ожидания выполнения функции в потоке, сек:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
				.digit
					.label Число процессов в пакете:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Размер пула шлюза:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Размер пула сессий:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
					.label Время ожидания выполнения метода StorageServer, сек:
					q-input(v-model="bp.bp.delay" min="0" dense outlined bg-color="white" type="number")
				q-checkbox(v-model="bp.bp.iso" label="Режим изоляции процесса").iso
		fieldset
			legend Прочие параметры
			.digit1
				.label Порт для удаленных вызовов:
				q-input(v-model="bp.bp.port" min="0" dense outlined bg-color="white" type="number")
				.label Имя файла журнала:
				q-input(v-model="bp.bp.jour" dense outlined bg-color="white" )
				.label Уровень журналирования:
				q-select(v-model="bp.bp.level" dense outlined bg-color="white" )
				.label Формат даты в имени журнала:
				q-input(v-model="bp.bp.jour" dense outlined bg-color="white" )
				q-btn(unelevated color="secondary" size="sm" label="Сбросить счетчики" ).iso



</template>

<style scoped lang="scss">
.divide {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: start;
	align-items: flex-start;
	column-gap: 1rem;
}
.form {
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	width: 100%;
	.q-input,
	.q-select {
		width: 100%;
	}
}
fieldset {
	width: 100%;
}
.first {
	margin-top: -0.4rem;
	width: 100%;
}
.start :deep(.q-icon) {
	color: white;
}
.smform {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	.q-input {
		width: 90px;
	}
}
:deep(.q-field--with-bottom) {
	padding-bottom: 0.5rem;
}
.second {
	display: grid;
	grid-template-columns: 6fr 4fr;
	justify-items: start;
	align-items: stretch;
	column-gap: 0.5rem;
	row-gap: 0.5rem;
}
@media screen and (max-width: 1600px) {
	.second {
		grid-template-columns: 1fr;
	}
}
.third {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: start;
	align-items: stretch;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.digit {
	display: grid;
	grid-template-columns: 200px 70px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.digit1 {
	display: grid;
	grid-template-columns: 200px 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.iso {
	grid-column: 1/-1;
	margin-top: 1rem;
}
</style>
