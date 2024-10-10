<template lang="pug">
q-dialog(:model-value="props.dialog" position="bottom" full-width persistent)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-wizard-hat')
					span Мастер баз данных
					span.q-ml-md(v-if="wiz.choose === 'create'") (Создание)
					span.q-ml-md(v-if="wiz.choose === 'connect'") (Подключение)
					span.q-ml-md(v-if="wiz.choose === 'update'") (Обновление)

				CreateDatabase(ref="cr" v-if="wiz.choose === 'create'")
				ConnectDatabase(ref="con" v-if="wiz.choose === 'connect'")
				UpdateDatabase(ref="up" v-if="wiz.choose === 'update'")

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

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { QTableProps } from 'quasar'
import { useWiz } from '@/stores/wiz'
import CreateDatabase from '@/components/setupcomponent/CreateDatabase.vue'
import ConnectDatabase from '@/components/setupcomponent/ConnectDatabase.vue'
import UpdateDatabase from '@/components/setupcomponent/UpdateDatabase.vue'

const props = defineProps({
	dialog: {
		type: Boolean,
		default: false,
	},
})

const cr = ref()
const con = ref()
const up = ref()

const wiz = useWiz()
const emit = defineEmits(['update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
	wiz.choose = 'start'
	wiz.done = false
	wiz.finish = 0
	wiz.setCreate(0)
}
const crNext = () => {
	wiz.setCreate(0)
	cr.value.nextStep()
}
const conNext = () => {
	wiz.setCreate(0)
	con.value.nextStep()
}

const step = computed(() => {
	if (wiz.choose === 'create') {
		return cr.value?.step
	}
	if (wiz.choose === 'update') {
		return up.value?.step
	}
})

const upNext = () => {
	wiz.setCreate(0)
	if (!!up.value) up.value.nextStep()
}

const crBack = () => {
	cr.value.prevStep()
}
const conBack = () => {
	con.value.prevStep()
}
const upBack = () => {
	up.value.prevStep()
}

const ready = computed(() => {
	if (wiz.choose === 'create' && step.value == 6) return true
	else if (wiz.choose === 'update' && step.value == 3) return true
	return false
})
</script>

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
</style>
