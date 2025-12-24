<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStepperStore } from '@/stores/useStepperStore'

// шаги
import ChooseType from '@/components/searchSteps/ChooseType.vue'
import StepA1 from '@/components/searchSteps/StepA1.vue'
import StepA2 from '@/components/searchSteps/StepA2.vue'
import StepB1 from '@/components/searchSteps/StepB1.vue'
import StepC1 from '@/components/searchSteps/StepC1.vue'
import StepC2 from '@/components/searchSteps/StepC2.vue'
import StepC3 from '@/components/searchSteps/StepC3.vue'
import Summary from '@/components/searchSteps/Summary.vue'

const store = useStepperStore()
const { currentStep, steps } = storeToRefs(store)
const { next, prev, selectFlow } = store

const stepComponents: Record<string, any> = {
	'choose-type': ChooseType,
	'a-1': StepA1,
	'a-2': StepA2,
	'b-1': StepB1,
	'c-1': StepC1,
	'c-2': StepC2,
	'c-3': StepC3,
	summary: Summary,
}

const titles: Record<string, string> = {
	'choose-type': 'Выбор типа',
	'a-1': 'Шаг A1',
	'a-2': 'Шаг A2',
	'b-1': 'Шаг B1',
	'c-1': 'Шаг C1',
	'c-2': 'Шаг C2',
	'c-3': 'Шаг C3',
	summary: 'Итог',
}

const modelValue = defineModel<boolean>()
</script>

<template lang="pug">
q-dialog(v-model="modelValue" position="bottom" full-width persistent)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-wizard-hat')
					span Подключение полнотекстового поиска

			q-card-section
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
						:title="titles[step]"
					)

					// q-step(
					// 	:name="1"
					// 	prefix="1"
					// 	title="Выбор БД"
					// 	:done="step > 1")
					// 	div дфоывдфлоывдло
					// q-step(
					// 	:name="2"
					// 	prefix="2"
					// 	title="Хранилища"
					// 	:done="step > 2")
					// 	div дфоывдфлоывдло
					// q-step(v-if='true'
					// 	:name="2"
					// 	prefix="2"
					// 	title="Внешняя база"
					// 	:done="step > 2")
					// 	div дфоывдфлоывдло
					// q-step(
					// 	:name="3"
					// 	prefix="3"
					// 	title="Языки"
					// 	:done="step > 3")
					// 	div дфоывдфлоывдло
					// q-step(
					// 	:name="4"
					// 	prefix="4"
					// 	title="Карточки"
					// 	:done="step > 4")
					// 	div дфоывдфлоывдло
					// q-step(
					// 	:name="5"
					// 	prefix="5"
					// 	title="Файлы"
					// 	:done="step > 5")
					// 	div дфоывдфлоывдло
					// q-step(
					// 	:name="6"
					// 	prefix="6"
					// 	title="Справочники"
					// 	:done="step > 6")
					// 	div дфоывдфлоывдло
					// q-step(
					// 	:name="7"
					// 	prefix="7"
					// 	title="Подтверждение параметров"
					// 	:done="step > 7")
					// 	div дфоывдфлоывдло


		.bottom
			q-separator
			q-card-actions(v-if="ready" align="center")
				q-btn(unelevated color="primary" @click="close" padding="xs xl") Готово

			q-card-actions(v-else align="center")
				q-btn(flat color="primary" @click="close").q-mr-xl Отмена

				template(v-if="wiz.choose === 'create'")
					q-btn(flat color="primary" @click="crBack") Назад
					q-btn(unelevated color="primary" @click="crNext" padding="xs xl") Далее

				template(v-if="wiz.choose === 'connect'")
					q-btn(flat color="primary" @click="conBack") Назад
					q-btn(unelevated color="primary" @click="conNext" padding="xs xl") Далее

				template(v-if="wiz.choose === 'update'")
					q-btn(flat color="primary" @click="upBack") Назад
					q-btn(unelevated color="primary" @click="upNext" padding="xs xl") Далее
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
// .narrow {
// 	max-width: 1200px;
// 	margin: 0 auto;
// }
</style>
