<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req, reqnum } from '@/utils/utils'

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.system, (value) => {
	if (value) {
		store.changeWebDefaults(4)
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Обновление грида:
		div
			q-radio.q-mr-lg(v-model="store.wc.grid.autorefresh" val="auto") Автоматически
			q-radio(v-model="store.wc.grid.autorefresh" val="local") По кнопке "Применить"
		.label Автообновление через, мс:
		q-input.short(dense outlined type="number" v-model="store.wc.grid.timeout" bg-color="white" :rules="reqnum" @blur="form.validate()")
</template>

<style scoped lang="scss">
.short {
	width: 150px;
}
</style>
