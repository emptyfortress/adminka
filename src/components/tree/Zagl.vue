<script setup lang="ts">
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
})
</script>

<template lang="pug">
q-page(padding)
	.container
		h6 Здесь настройки
		h4 {{ props.id}}
</template>

<style scoped lang="scss"></style>
