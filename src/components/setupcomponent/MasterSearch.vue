<script setup lang="ts">
// import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStepperStore } from '@/stores/useStepperStore'

// шаги
import ChooseType from '@/components/searchSteps/ChooseType.vue'
import StepA1 from '@/components/searchSteps/StepA1.vue'
import Step1 from '@/components/searchSteps/Step1.vue'
import StepA2 from '@/components/searchSteps/StepA2.vue'
import StepC1 from '@/components/searchSteps/StepC1.vue'
import StepC2 from '@/components/searchSteps/StepC2.vue'
import StepC3 from '@/components/searchSteps/StepC3.vue'
import Summary from '@/components/searchSteps/Summary.vue'

const store = useStepperStore()
const { currentStep, steps, branch } = storeToRefs(store)
const { next, prev, selectFlow } = store

const stepComponents: Record<string, any> = {
	'step-1': Step1,
	'step-2': ChooseType,
	'a-1': StepA1,
	'a-2': StepA2,
	'c-1': StepC1,
	'c-2': StepC2,
	'c-3': StepC3,
	summary: Summary,
}

const titles: Record<string, string> = {
	'step-1': 'База данных',
	'step-2': 'Тип поиска',
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
					v-for="(step, index) in steps"
					:key="step"
					:name="index + 1"
					:prefix='index + 1'
					:title="titles[step]"
					:done="index < currentStep - 1"
				)
					.all900
						.arch
							component(
								:is="stepComponents[step]"
								@select-flow="selectFlow")

		.bottom
			q-separator
			q-card-actions(align="center")
				q-btn(flat color="primary" @click="close").q-mr-xl Отмена
				q-btn(flat color="primary" @click="prev") Назад
				q-btn(unelevated color="primary" @click="next" padding="xs xl") Далее

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
.all900 {
	width: clamp(350px, calc(100% - 1rem), 800px);
	margin: 0 auto;
}
</style>
