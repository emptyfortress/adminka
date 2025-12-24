import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export type FlowType = 'A' | 'B'

export const useStepperStore = defineStore('stepper', () => {
	const currentStep = ref(1)

	// выбор делается на втором шаге
	const branch = ref<FlowType>('A')

	/**
	 * 🔹 сегменты флоу
	 */
	const baseSteps = ['step-1', 'step-2'] // step-2 = fork

	const branchSteps: Record<FlowType, string[]> = {
		A: ['a-1', 'a-2', 'a-3', 'a-4'],
		B: ['c-1', 'c-2', 'c-3', 'c-4'],
	}

	const finalSteps = ['summary']

	/**
	 * 🔹 собираем итоговый массив шагов
	 */
	const steps = computed<string[]>(() => {
		if (!branch.value) {
			return [...baseSteps, ...branchSteps['A'], ...finalSteps]
		}

		return [...baseSteps, ...branchSteps[branch.value], ...finalSteps]
	})

	const currentStepName = computed(() => {
		return steps.value[currentStep.value - 1]
	})

	/**
	 * 🔁 если пользователь вернулся на fork и поменял выбор —
	 * корректируем currentStep
	 */
	watch(branch, () => {
		const forkIndex = baseSteps.length
		if (currentStep.value <= forkIndex) return
		currentStep.value = forkIndex + 1
	})

	function selectFlow(value: FlowType) {
		branch.value = value
	}

	function next() {
		if (currentStep.value < steps.value.length) {
			currentStep.value++
		}
	}

	function prev() {
		if (currentStep.value > 1) {
			currentStep.value--
		}
	}

	return {
		currentStep,
		branch,
		steps,
		currentStepName,
		selectFlow,
		next,
		prev,
	}
})
