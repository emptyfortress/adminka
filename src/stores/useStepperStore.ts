import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export type FlowType = 'A' | 'B' | 'C'

export const useStepperStore = defineStore('stepper', () => {
	const currentStep = ref(1)

	// выбор делается на втором шаге
	const branch = ref<FlowType | null>(null)

	/**
	 * 🔹 сегменты флоу
	 */
	const baseSteps = ['step-1', 'step-2'] // step-2 = fork

	const branchSteps: Record<FlowType, string[]> = {
		A: ['a-1', 'a-2'],
		B: ['b-1'],
		C: ['c-1', 'c-2', 'c-3'],
	}

	const finalSteps = ['summary']

	/**
	 * 🔹 собираем итоговый массив шагов
	 */
	const steps = computed<string[]>(() => {
		if (!branch.value) {
			return baseSteps
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

	function selectBranch(value: FlowType) {
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
		selectBranch,
		next,
		prev,
	}
})
