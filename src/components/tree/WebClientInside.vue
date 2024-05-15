<script setup lang="ts">
import WebClientConnect from '@/components/tree/WebClientConnect.vue'
import WebClientCommon from '@/components/tree/WebClientCommon.vue'
import WebClientCache from '@/components/tree/WebClientCache.vue'
import WebClientSystem from '@/components/tree/WebClientSystem.vue'
</script>

<template lang="pug">
#connect.commonzg Подключение к серверу приложений
WebClientConnect
#common.commonzg Общие настройки
WebClientCommon
#cache.commonzg Кэширование
WebClientCache
#system.commonzg Система
WebClientSystem
#crypto.commonzg Облачная подпись КриптоПро
#grid.commonzg Грид
#locale.commonzg Локализации
#cards.commonzg Виды карточек
#experiment.commonzg Экспериментальные функции
</template>

<style scoped lang="scss">
.align {
	margin-left: 2rem;
}
</style>
