<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const hour3 = ref(600)
const path = ref('')
</script>

<template lang="pug">
q-form
	.section Сценарий обслуживания
	MyField(v-model="path" label="Путь к файлу сценария" button btLabel="Выбрать")
</template>

<style scoped lang="scss"></style>
