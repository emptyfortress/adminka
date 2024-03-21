<template lang="pug">
.client
	p Здесь настраивается интерфейс клиентской части Docsvision для рабочей базы данных.
	fieldset
		legend Библиотека карточек
		.blo
			.label Библиотека карточек
			q-select(dense v-model="lib" outlined bg-color="white" :options="options")
			.label Инсталляционная программа
			q-select(dense v-model="pro" outlined bg-color="white" :options="options")
			.label Идентификатор заплатки
			q-input(dense v-model="pro" outlined bg-color="white" disable)
			.label Путь к файлу заплатки
			q-input(dense v-model="pro" outlined bg-color="white" disable)
			.label Путь к файлу преобразования
			q-input(dense v-model="pro" outlined bg-color="white" disable)
			.label Установка предназначена
			q-select(dense v-model="ust" outlined bg-color="white" :options="options")
	fieldset
		legend Интерфейс win-клиента
		.blo
			.label Показывать панели
			q-select(dense v-model="lib" outlined bg-color="white" :options="options")
			.label Язык интерфейса
			q-select(dense v-model="lib" outlined bg-color="white" :options="options")
			.label Периодичность обновления данных
			.row.items-center
				q-input(dense type="number" v-model="per" outlined bg-color="white" ).dig
				.q-ml-sm.q-mr-lg сек
				.label Производительность
				q-select(dense v-model="proiz" outlined bg-color="white" :options="options").q-ml-md
		.row.q-gutter-lg.q-mt-sm
			q-checkbox(dense v-model="pan" label="Не скрывать панели инструментов IE")
			q-checkbox(dense v-model="car" label="Не отображать карточки Делопроизводства 4.х")
	fieldset
		legend Клиентская часть решений
		.blo
			.label Интерфейс установки
			q-select(dense v-model="int" outlined bg-color="white" :options="options")
			.label Установка решений
			q-select(dense v-model="int" outlined bg-color="white" :options="options")
			.label Папка журналов установки
			q-input(dense v-model="jour" outlined bg-color="white")
			.label Область установки
			q-select(dense v-model="obl" outlined bg-color="white" :options="options")
	.text-right.q-mt-sm
		q-btn(unelevated color="primary" size="sm") Восстановить значения по умолчанию
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const lib = ref('Approval Designer')
const ust = ref('Для всех пользователей')
const per = ref('300')
const proiz = ref('Высокая')
const jour = ref('')
const obl = ref('Для текущего пользователя')
const int = ref('По умолчанию')
const pan = ref(false)
const car = ref(true)
const pro = ref('')
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
</script>

<style scoped lang="scss">
.blo {
	row-gap: 0.5rem;
}
</style>
