<script setup lang="ts">
import AppServerCommon from '@/components/tree/AppServerCommon.vue'
</script>

<template lang="pug">
#bd.commonzg Базы данных
p(v-for="n in 20") lakjsdlkjals Laы длфоЫдДФДлфыоДло   лдфОЫдлфоЫДл 
#common.commonzg Общие настройки
AppServerCommon
#dost.commonzg Управление доступом
p(v-for="n in 20") lakjsdlkjals Laы длфоЫдДФДлфыоДло   лдфОЫдлфоЫДл 
#auth.commonzg Расширенная аутентификация
p(v-for="n in 20") lakjsdlkjals Laы длфоЫдДФДлфыоДло   лдфОЫдлфоЫДл 
</template>

<style scoped lang="scss"></style>
