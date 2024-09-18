<script setup lang="ts">
import AppServerCommon from '@/components/tree/AppServerCommon.vue'
import AppServerDostup from '@/components/tree/AppServerDostup.vue'
import AppServerAuth from '@/components/tree/AppServerAuth.vue'
import Database from '@/components/tree/Database.vue'
import Licence from '@/components/setupcomponent/Licence.vue'
</script>

<template lang="pug">
#lic.commonzg Лицензия
.align
	Licence

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
