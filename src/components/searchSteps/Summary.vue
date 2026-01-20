<script setup lang="ts">
import { useStepperStore } from '@/stores/useStepperStore'

const stepper = useStepperStore()
</script>

<template lang="pug">
.all900
	.arch
		.text-bold Проверьте настройки перед подключением
		// pre {{ stepper.payload }}
		.grid
			label База данных:
			.val {{stepper.payload.psevdo}}
			label Хранилище:
			.val(v-if='stepper.payload.flow == "B"') Использовать Elasticsearch
			.val(v-else) Использовать локальную БД
				template(v-if='stepper.payload.flow == "A"')
					span.q-ml-md(v-if='stepper.payload.extcards') Для карточек 
					span.q-ml-md(v-if='stepper.payload.extfiles') Для файлов 
					span.q-ml-md(v-if='stepper.payload.extcatalogs') Для справочников 
			label Строка подключения:
			.val {{ stepper.payload.elasticurl }}
			label Язык индексирования:
			.val
				span.q-mr-md(v-for="item in stepper.payload.lang") {{item.label}},
			label Индексируемые типы карточек:
			.val
				span.q-mr-md(v-for="item in stepper.step5.cards") {{item || "не выбрано"}},
			label Режим индексирования файлов:
			.val(v-if='stepper.payload.fileregim == "notIndex"') Не индексировать
			.val(v-if='stepper.payload.fileregim == "use"') Оперативные файлы
			.val(v-if='stepper.payload.fileregim == "use1"') Оперативные и архивные файлы
			.val(v-if='stepper.payload.fileregim == null') не выбрано

			label Типы файлов:
			.val(v-if='stepper.payload.filetypes.length')
				span.q-mr-md(v-for="item in stepper.payload.filetypes") {{item}},
			.val(v-else) не выбрано
			label Индексируемые справочники:
			.val
				span.q-mr-md(v-for="item in stepper.payload.catalogs") {{item}},
</template>

<style scoped lang="scss">
.grid {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
label {
	color: #666;
}
</style>
