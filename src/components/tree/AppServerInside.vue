<script setup lang="ts">
import AppServerCommon from '@/components/tree/AppServerCommon.vue'
import AppServerDostup from '@/components/tree/AppServerDostup.vue'
import AppServerAuth from '@/components/tree/AppServerAuth.vue'
</script>

<template lang="pug">
#bd.commonzg Базы данных
p(v-for="n in 20") lakjsdlkjals Laы длфоЫдДФДлфыоДло   лдфОЫдлфоЫДл 
#common.commonzg Общие настройки
AppServerCommon
#dost.commonzg Управление доступом
AppServerDostup
#auth.commonzg Расширенная аутентификация
AppServerAuth
</template>

<style scoped lang="scss"></style>
