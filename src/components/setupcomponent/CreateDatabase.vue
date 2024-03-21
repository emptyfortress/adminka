<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { useForm } from '@/stores/form'
import { useWiz } from '@/stores/wiz'
import Step1 from '@/components/wizard/Step1.vue'
import Step2 from '@/components/wizard/Step2.vue'
import Step3 from '@/components/wizard/Step3.vue'
import Step4 from '@/components/wizard/Step4.vue'
import Step5 from '@/components/wizard/Step5.vue'
import Step6 from '@/components/wizard/Step6.vue'
import Step7 from '@/components/wizard/Step7.vue'
import Step25 from '@/components/wizard/Step25.vue'
import Step26 from '@/components/wizard/Step26.vue'
import Finish from '@/components/wizard/Finish.vue'

const step = ref(1)
const live = ref(false)
const stepper = ref()

const st1 = ref()

const forms = useForm()
const wiz = useWiz()

const nextStep = () => {
	if (step.value === 1) {
		validate()
		if (forms.step1.success === true) {
			stepper.value.next()
		}
	} else if (step.value === 6 && wiz.dopModules === false) {
		wiz.finish = 2
		stepper.value.next()
	} else stepper.value.next()
}

const prevStep = () => {
	stepper.value.previous()
}
const validate = () => {
	st1.value.validate()
}
defineExpose({ step, nextStep, prevStep })
</script>

<template lang="pug">
.create
	q-stepper(v-model="step" ref="stepper" alternative-labels animated header-nav flat done-color="teal" :keep-alive="live")
		q-step(:name="1" prefix="1" title="Сервер SQL" :done="step > 1" )
			.all900
				.arch
					component(:is="Step1" ref="st1")
		q-step(:name="2" prefix="2" title="Скрипт создания" :done="step > 2" )
			.all900
				.arch
					component(:is="Step2")
		q-step(:name="3" prefix="3" title="База данных" :done="step > 3" )
			.all900
				.arch
					component(:is="Step3")
			.all900(v-if="forms.step1.type === 'MS SQL Server'")
				.arch.q-mt-sm(style="padding: 0")
					component(:is="Step25")
		q-step(:name="4" prefix="4" title="Конфигурация" :done="step > 4" )
			.all900
				.arch
					component(:is="Step4")
		q-step(:name="5" prefix="5" title="Подтверждение параметров БД" :done="step > 5" )
			.all900
				.arch
					component(:is="Step5")
			.all900
				.arch.q-mt-sm
					component(:is="Step26" color="orange" text="Создание базы данных может занять длительное время.")

		q-step(:name="6" prefix="6" title="Создание БД" :done="step > 6" )
			.all900
				.arch
					component(:is="Step7" result="База данных создана успешно!" )
			.all900(v-if="wiz.done")
				.arch.q-mt-sm
					component(:is="Step6")

		q-step(:name="7" prefix="7" title="Завершение" :done="step > 7" )
			.all900(v-if="wiz.dopModules")
				.arch
					component(:is="Step7" hint="Установка доп.модулей" result="Модули установлены!")
			.all900(v-if="wiz.finish > 1")
				.arch.q-mt-sm
					component(:is="Finish")

</template>

<style scoped lang="scss">
:deep(.q-icon) {
	color: inherit;
}

.all900 {
	width: clamp(350px, calc(100% - 1rem), 800px);
	margin: 0 auto;
}
</style>
