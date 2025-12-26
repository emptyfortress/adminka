<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStepperStore } from '@/stores/useStepperStore'

// шаги
import Step1 from '@/components/searchSteps/Step1.vue'
import ChooseType from '@/components/searchSteps/ChooseType.vue'
import LangStep from '@/components/searchSteps/LangStep.vue'
import CardStep from '@/components/searchSteps/CardStep.vue'
import FileStep from '@/components/searchSteps/FileStep.vue'
import FacetStep from '@/components/searchSteps/FacetStep.vue'
import CatalogStep from '@/components/searchSteps/CatalogStep.vue'
import Summary from '@/components/searchSteps/Summary.vue'

const store = useStepperStore()
const { currentStep, steps, branch } = storeToRefs(store)
const { next, prev, selectFlow, guards } = store

const stepComponents: Record<string, any> = {
	'step-1': Step1,
	'step-2': ChooseType,
	'a-1': LangStep,
	'a-2': CardStep,
	'a-3': FileStep,
	'a-4': CatalogStep,
	'c-1': LangStep,
	'c-2': CardStep,
	'c-3': FacetStep,
	'c-4': CatalogStep,
	summary: Summary,
}

const titles: Record<string, string> = {
	'step-1': 'База данных',
	'step-2': 'Хранилище',
	'a-1': 'Язык',
	'a-2': 'Карточки',
	'a-3': 'Файлы',
	'a-4': 'Справочники',

	'c-1': 'Язык',
	'c-2': 'Карточки',
	'c-3': 'Фасеты',
	'c-4': 'Справочники',
	summary: 'Итог',
}

const modelValue = defineModel<boolean>()

const close = () => {
	modelValue.value = false
}

const canNext = computed(() => {
	return guards[currentStep.value]()
})

// Filter out undefined steps and ensure we have valid step keys
const validSteps = computed(() => {
	return steps.value.filter(step => step && titles[step])
})
</script>

<template lang="pug">
q-dialog(v-model="modelValue" position="bottom" full-width persistent)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-wizard-hat')
					span Подключение полнотекстового поиска

			q-stepper(
				v-model="currentStep"
				color="primary"
				inactive-color="secondary"
				done-color="teal"
				alternative-labels
				animated
				flat
				header-nav
			)
				q-step(
					v-for="(step, index) in validSteps"
					:key="step"
					:name="index + 1"
					:prefix='index + 1'
					:title="titles[step]"
					:done="index < currentStep - 1"
				)
					component(
						:is="stepComponents[step]"
						@select-flow="selectFlow")

		.bottom
			q-separator
			q-card-actions(align="center")
				q-btn(flat color="primary" @click="close").q-mr-xl Отмена
				q-btn(flat color="primary" @click="prev" :disable="currentStep === 1") Назад
				q-btn(unelevated color="primary" @click="next" padding="xs xl" :disable="!canNext") Далее

		q-btn.close(flat round icon="mdi-close" color="primary" @click="close")
</template>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background: var(--bg-grey);
}

.title {
	font-size: 1.5rem;
	text-align: center;
	color: $secondary;
	vertical-align: baseline;

	.q-icon {
		margin-right: 0.5rem;
		margin-top: -3px;
		font-size: 1.6rem;
	}
}

.close {
	position: absolute;
	top: 1rem;
	right: 1rem;
}

.all {
	width: 900px;
	margin: 0 auto;
}

.q-tab-panels {
	background: transparent;
}

.bottom {
	background: white;
}

.q-table__card {
	background: transparent;
}

:deep(.q-table tr.selected) {
	background: var(--bg-selected);
}

.stepper-fade-enter-active,
.stepper-fade-leave-active {
	transition: opacity 200ms ease;
}

.stepper-fade-enter-from,
.stepper-fade-leave-to {
	opacity: 0;
}
:deep(.q-stepper__tab--active) {
	background: #d1e1e7;
}
:deep(.q-stepper__tab) {
	padding: 0.5rem;
}
:deep(.q-stepper__header--alternative-labels .q-stepper__tab) {
	min-height: 10px;
}
</style>
