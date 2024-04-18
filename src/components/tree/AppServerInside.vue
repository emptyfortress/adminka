<script setup lang="ts">
import AppServerCommon from '@/components/tree/AppServerCommon.vue'
import AppServerDostup from '@/components/tree/AppServerDostup.vue'
import AppServerAuth from '@/components/tree/AppServerAuth.vue'
import Database from '@/components/tree/Database.vue'
</script>

<template lang="pug">
#bd.commonzg Базы данных
.align
	Database()
#common.commonzg Общие настройки
AppServerCommon
#dost.commonzg Управление доступом
AppServerDostup
#auth.commonzg Расширенная аутентификация
AppServerAuth
</template>

<style scoped lang="scss">
.align {
	margin-left: 2rem;
}
</style>
