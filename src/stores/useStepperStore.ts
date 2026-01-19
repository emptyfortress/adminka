import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export type FlowType = 'A' | 'B'

export const useStepperStore = defineStore('stepper', () => {
	const currentStep = ref(1)
	const branch = ref<FlowType>('A')

	const baseSteps = ['step-1', 'step-2'] // step-2 = fork

	const branchSteps: Record<FlowType, string[]> = {
		A: ['a-1', 'a-4', 'a-2', 'a-3'],
		B: ['c-1', 'c-4', 'c-2', 'c-3'],
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
		step2.value.flow = value
	}

	// step data
	const step1 = ref({
		psevdo: '',
		server: '',
	})
	const step2 = ref({
		flow: '',
		elasticurl: '',
		db: '',
		extcards: false,
		extfiles: false,
		extcatalogs: false,
		externaldb: '',
		servertype: '',
		servername: '',
		checkvalid: '',
		login: '',
		pass: '',
		database: '',
	})

	const step3 = ref({
		lang: [
			{ code: 0, label: 'Нейтральный' },
			{ code: 1049, label: 'Русский' },
			{ code: 1033, label: 'Английский' },
		],
	})

	const step4 = ref({
		catalogs: [],
	})

	const step5 = ref({
		cards: [] as any,
	})

	const step6 = ref({
		fileregim: null,
		filetypes: [],
		facets: [],
	})

	// final payload
	const payload = computed(() => {
		return {
			psevdo: step1.value.psevdo,
			server: step1.value.server,
			flow: step2.value.flow,
			db: step2.value.db,
			elasticurl: step2.value.elasticurl,
			extcards: step2.value.extcards,
			extfiles: step2.value.extfiles,
			extcatalogs: step2.value.extcatalogs,
			externaldb: step2.value.externaldb,
			lang: step3.value.lang,
			catalogs: step4.value.catalogs as any,
			cards: step5.value.cards,
			fileregim: step6.value.fileregim,
			filetypes: step6.value.filetypes,
			facets: step6.value.facets,
		}
	})

	// Reset function
	function reset() {
		currentStep.value = 1
		branch.value = 'A'
		step1.value = {
			psevdo: '',
			server: '',
		}
		step2.value = {
			flow: '',
			db: '',
			elasticurl: '',
			extcards: false,
			extfiles: false,
			extcatalogs: false,
			externaldb: '',
			servertype: '',
			servername: '',
			checkvalid: '',
			login: '',
			pass: '',
			database: '',
		}
		step3.value.lang = []
		step4.value.catalogs = []
		step5.value.cards = []
		step6.value.fileregim = null
	}

	// guards
	function guardStep1() {
		if (!step1.value.psevdo) {
			return false
		}
		return true
	}
	function guardStep2() {
		if (step2.value.flow == 'B' && step2.value.elasticurl.length > 0)
			return true
		if (step2.value.flow == 'A' && step2.value.db.length) return true
		return false
	}
	function guardStep3() {
		if (step3.value.lang.length == 0) {
			return false
		}
		return true
	}

	function guardStep4() {
		// if (!step4.value.catalogs) {
		// 	return false
		// }
		return true
	}

	function guardStep5() {
		if (step5.value.cards.length == 0) {
			return false
		}
		return true
	}
	function guardStep6() {
		if (!step6.value.fileregim) {
			return false
		}
		return true
	}
	function guardStep7() {
		if (!step2.value.flow) {
			return false
		}
		return true
	}

	const guards: Record<number, () => boolean> = {
		1: guardStep1,
		2: guardStep2,
		3: guardStep3,
		4: guardStep4,
		5: guardStep5,
		6: guardStep6,
		7: guardStep7,
		// 5: () => true,
	}

	// navigation
	function next() {
		const result = guards[currentStep.value]()

		if (result !== true) {
			return
		}

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
		step1,
		step2,
		step3,
		step4,
		step5,
		step6,
		currentStepName,
		selectFlow,
		next,
		prev,
		guards,
		payload,
		reset,
	}
})
