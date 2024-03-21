<script setup lang="ts">
const modelValue = defineModel()
</script>

<template lang="pug">
q-input.inp(v-model="modelValue" dense outlined bg-color="white")
</template>

<style scoped lang="scss"></style>
