<script setup lang="ts">
import { useStepperStore } from '@/stores/useStepperStore'
import StartConnection from '@/components/searchSteps/StartConnection.vue'

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
			template(v-if='stepper.payload.flow')
				label Система индексирования:
				.val(v-if='stepper.payload.flow == "B"') Elasticsearch
				.val(v-else) Локальная БД
					template(v-if='stepper.payload.flow == "A"')
						span.q-ml-md(v-if='stepper.payload.extcards') Для карточек 
						span.q-ml-md(v-if='stepper.payload.extfiles') Для файлов 
						span.q-ml-md(v-if='stepper.payload.extcatalogs') Для справочников 
			template(v-if='stepper.payload.flow == "A"')
				label Язык индексирования:
				.val
					span.q-mr-md(v-for="item in stepper.payload.lang") {{item.label}},

			template(v-if='stepper.payload.catalogs.length')
				label Индексируемые справочники:
				.val
					span.q-mr-md(v-for="item in stepper.payload.catalogs") {{item}},

			template(v-if='stepper.payload.cards.length')
				label Индексируемые карточки:
				.val
					span.q-mr-md(v-for="item in stepper.payload.cards") {{item || "не выбрано"}},

			template(v-if='stepper.payload.facets.length')
				label Фасеты:
				.val
					span.q-mr-md(v-for="item in stepper.payload.facets") {{item || "не выбрано"}},

			template(v-if='stepper.payload.fileregim !== null')
				label Режим индексирования файлов:
				.val(v-if='stepper.payload.fileregim == "notIndex"') Не индексировать
				.val(v-if='stepper.payload.fileregim == "use"') Оперативные файлы
				.val(v-if='stepper.payload.fileregim == "use1"') Оперативные и архивные файлы

			template(v-if='stepper.payload.filetypes.length')
				label Типы файлов:
				.val
					span.q-mr-md(v-for="item in stepper.payload.filetypes") {{item}},

	.arch.q-mt-sm
		StartConnection
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
