<script setup lang="ts">
import { ref } from 'vue'
import Period from '@/components/searchSteps/Period.vue'
import Reactivate from '@/components/searchSteps/Reactivate.vue'
import MyRadioGroup1 from '@/components/common/MyRadioGroup1.vue'
</script>

<template lang="pug">
q-list
	Reactivate
	MyRadioGroup1(label="Обновление индексов" descr="Периодичность обновления существующих индексов" :index='false')

</template>

<style scoped lang="scss"></style>
