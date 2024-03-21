<script setup lang="ts">
const props = defineProps({
	hint: {
		type: String,
		default: 'Завершено успешно!',
	},
})
</script>

<template lang="pug">
.text-center
	q-icon(name="mdi-emoticon-outline" color="teal" size="xl")
.text-bold.text-center.text-teal
	|{{props.hint}}
</template>

<style scoped lang="scss"></style>
