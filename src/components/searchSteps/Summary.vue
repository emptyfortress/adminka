<script setup lang="ts">
import { useStepperStore } from '@/stores/useStepperStore'

const stepper = useStepperStore()
</script>

<template lang="pug">
.all900
	.arch
		.text-bold Итог
		pre {{ stepper.payload }}
</template>

<style scoped lang="scss"></style>
