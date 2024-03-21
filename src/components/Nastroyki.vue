<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBp } from '@/stores/bp'

const emit = defineEmits(['change', 'haserror', 'noerror'])

const bp = useBp()

const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

watch(bp.nastr, (value) => {
	if (value) {
		emit('change')
	}
})
const myform = ref()
</script>

<template lang="pug">
q-form(ref="myform" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	fieldset
		legend Шаблоны и настройки бизнес процессов
		.form1
			.label Путь к справочникам и шаблонам:
			q-input(v-model="bp.nastr.path" dense outlined bg-color="white" lazy-rules :rules="req" @blur="myform.validate()")
			div
				q-btn(flat round icon="mdi-dots-horizontal" color="primary").q-mr-sm
				q-btn(unelevated color="secondary" size="sm" label="Настроить").q-mr-sm 
				q-btn(unelevated color="secondary" size="sm" label="Установить") 

	fieldset
		legend Дополнительно
		.form1
			.label Сертификат:
			q-input(v-model="bp.nastr.cert" dense outlined bg-color="white")
			q-btn(flat round icon="mdi-dots-horizontal" color="primary") 

</template>

<style scoped lang="scss">
.form1 {
	display: grid;
	grid-template-columns: 230px 1fr auto;
	align-items: baseline;
	justify-content: start;
	row-gap: 0.4rem;
	column-gap: 1rem;
}
fieldset:first-child {
	/* width: 100%; */
	margin-top: -0.5rem;
}
</style>
