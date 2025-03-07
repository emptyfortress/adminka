<script setup lang="ts">
import { ref } from 'vue'

const normal = ref('normal')
const disabled = ref('disabled')
const readonly = ref('readonly')
const check1 = ref(true)
const check2 = ref(true)
const check3 = ref(true)
</script>

<template lang="pug">
q-page(padding)
	.text-h6 Readonly components
	br
	.q-gutter-y-sm(style='width: 250px')
		q-input(dense v-model="normal" outlined bg-color="white")
		q-input(dense v-model="disabled" outlined bg-color="white" disable)
		q-input(dense v-model="readonly" outlined readonly)
		br
		div
			q-checkbox(v-model="check1" dense label='normal')
		div
			q-checkbox(v-model="check2" dense label='readonly' disable)
		div
			q-checkbox(v-model="check3" dense label='disabled' disable)
</template>

<style scoped lang="scss"></style>
