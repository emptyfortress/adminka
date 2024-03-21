<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	showAdd: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['addGroup', 'update:modelValue'])

const name = ref()

const close = () => {
	emit('update:modelValue', false)
}
</script>

<template lang="pug">
q-dialog(:model-value='props.showAdd')
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройки хранилища
			q-space
			q-btn(icon='mdi-close' flat round dense @click='close')
		q-card-section
			p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil commodi vel accusantium nam, recusandae aliquid ullam cupiditate veritatis ab perspiciatis eligendi alias temporibus aliquam. Quo, consequuntur. Rem fugit nostrum facilis!
		q-card-section
			q-card-actions(align='right')
				q-btn(unelevated color="primary" label="Отмена" ) 
				q-btn(unelevated color="primary" label="Отмена" ) 
</template>

<style scoped lang="scss">
.q-card {
	min-width: 400px;
}
</style>
