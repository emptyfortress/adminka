<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import MySelect from '@/components/common/MySelect.vue'

interface Props {
	filled?: boolean
	bg?: string
	options?: string[]
	select?: boolean
	type?: string
	label: string
	descr?: string
	disable?: boolean
	checkbox?: boolean
	checkvalue?: boolean
	button?: boolean
	btLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
	filled: false,
	options: () => ['Options 1', 'Option 2'],
	select: false,
	type: 'text',
	label: 'Label',
	bg: 'white',
	button: false,
	btLabel: 'Добавить',
	descr: 'This is description',
})

// const main = defineModel<string>('main')
// const check = defineModel<boolean>('check')
const rasp = ref('one')

const changed = ref(false)

const old = ref()
// const oldcheck = ref()

onMounted(() => {
	old.value = rasp.value
	// oldcheck.value = check.value
})
watch(rasp, (val, oldval) => {
	if (val) {
		changed.value = true
	}
})
const reset = () => {
	rasp.value = old.value
	nextTick(() => {
		changed.value = false
	})
}
const hour = ref(5)
const hour1 = ref(10)
const hour2 = ref(12)
const week = ref('понедельник')
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label {{ props.label }}
	.descr(v-if="props.descr") {{ props.descr }}
	q-list.q-mt-md(dense)
		q-item
			q-item-section(avatar)
				q-radio(v-model="rasp" val="one" dense)
			q-item-section
				.row.justify-start.items-baseline.q-gutter-sm
					div Каждые
					MyInput(v-model="hour" type="number" style="width: 140px;")
					div часов

		q-item
			q-item-section(avatar)
				q-radio(v-model="rasp" val="two" dense)
			q-item-section
				.row.justify-start.items-baseline.q-gutter-sm
					div Ежедневно в
					MyInput(v-model="hour1" type="number" style="width: 140px;")
					div часов

		q-item
			q-item-section(avatar)
				q-radio(v-model="rasp" val="three" dense)
			q-item-section
				.row.justify-start.items-baseline.q-gutter-sm
					div Раз в неделю в
					MySelect(v-model="week" :options="options" style="width: 140px;")
					// q-select.smm(v-model="week" dense :options="options")
					div в
					MyInput(v-model="hour2" type="number" style="width: 140px;")
					// q-input.smm(v-model="hour2" type="number" dense )
					div часов
		q-item
			q-item-section(avatar)
				q-radio(v-model="rasp" val="four" dense)
			q-item-section
				.row.justify-start.items-baseline.q-gutter-sm
					div Не архивировать файлы и карточки автоматически
		q-item
			q-item-section(avatar)
				q-radio(v-model="rasp" val="five" dense)
			q-item-section
				.row.justify-start.items-baseline.q-gutter-sm
					div Нестандартное описание архивирования
	.descr.q-mt-md Запустить архивирование немедленно
	q-btn(unelevated color="secondary" label="Запустить архивирование" size="sm") 
	
</template>

<style scoped lang="scss">
.data {
	padding: 1rem;
	padding-top: 0.3rem;
	margin-left: 1rem;
	border: 1px solid transparent;
	position: relative;
	&:hover {
		background: #e0e0e0;
		border: 1px solid #ccc;
		.q-btn {
			display: inline-flex;
		}
	}
	.q-input,
	.q-select {
		max-width: 400px;
		margin-top: 4px;
	}
	label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
	}
	.descr {
		color: #666;
	}
	.inner {
		width: 1px;

		position: absolute;
		top: 0.5rem;
		bottom: 1rem;
		left: 0.2rem;
		border-right: 3px solid $primary;
	}
	.refresh {
		position: absolute;
		left: -2rem;
		top: 0.1rem;
		display: none;
	}
	.add {
		margin-top: 4px;
	}
	:deep(.q-field__native) {
		font-size: 1rem;
		text-align: center;
	}
}
</style>
