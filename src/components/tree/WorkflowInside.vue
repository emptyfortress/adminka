<script setup lang="ts">
import WorkflowConnect from '@/components/tree/WorkflowConnect.vue'
import WorkflowTemplates from '@/components/tree/WorkflowTemplates.vue'
import WorkflowLog from '@/components/tree/WorkflowLog.vue'
</script>

<template lang="pug">
#connect.commonzg Подключение
WorkflowConnect
#templates.commonzg Шаблоны
WorkflowTemplates
#logs.commonzg Журналирование
WorkflowLog
#addition.commonzg Дополнительно
.data
	q-btn.q-mr-md(unelevated color="secondary" label="Расширенные настройки" size="sm") 
</template>

<style scoped lang="scss"></style>
