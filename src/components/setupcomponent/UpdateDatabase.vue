<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import Step26 from '@/components/wizard/Step26.vue'
import Step4 from '@/components/wizard/Step4.vue'
import Step5 from '@/components/wizard/Step5.vue'
import Step6 from '@/components/wizard/Step6.vue'
import Step7 from '@/components/wizard/Step7.vue'
import Finish from '@/components/wizard/Finish.vue'
import { useWiz } from '@/stores/wiz'

const step = ref(1)
const live = ref(false)
const stepper = ref()
const wiz = useWiz()

const nextStep = () => {
	if (step.value === 3) {
		wiz.finish = 2
		stepper.value.next()
	} else stepper.value.next()
}
const prevStep = () => {
	stepper.value.previous()
}
defineExpose({ step, nextStep, prevStep })
</script>

<template lang="pug">
.create
	q-stepper(v-model="step" ref="stepper" alternative-labels animated header-nav flat done-color="teal" :keep-alive="live")
		q-step(:name="1" prefix="1" title="Конфигурация" :done="step > 1" )
			.all900
				.arch
					Step4

		q-step(:name="2" prefix="2" title="Подтверждение параметров БД" :done="step > 2")
			.all900
				.arch
					Step5(text="Обновить базу данных со следующими параметрами")

		q-step(:name="3" prefix="3" title="Обновление БД" :done="step > 3")
			.all900
				.arch.q-mt-sm
					Step26
					Step7(result="База успешно обновлена!" )

		q-step(:name="4" prefix="4" title="Загрузка настроек" :done="step > 4" )
			.all900
				.arch
					Step6
					Step7(hint="Установка доп.модулей" result="Модули установлены!")

			.all900(v-if="wiz.create == 2")
				.arch.q-mt-sm
					Finish()
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
