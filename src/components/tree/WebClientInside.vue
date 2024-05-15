<script setup lang="ts">
import WebClientConnect from '@/components/tree/WebClientConnect.vue'
import WebClientCommon from '@/components/tree/WebClientCommon.vue'
import WebClientCache from '@/components/tree/WebClientCache.vue'
import WebClientSystem from '@/components/tree/WebClientSystem.vue'
import WebClientCrypto from '@/components/tree/WebClientCrypto.vue'
import WebClientGrid from '@/components/tree/WebClientGrid.vue'
import WebLocalization from '@/components/tree/WebLocalization.vue'
import WebCards from '@/components/tree/WebCards.vue'
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
WebClientCrypto
#grid.commonzg Грид
WebClientGrid
#locale.commonzg Локализации
WebLocalization 
#cards.commonzg Виды карточек
WebCards
#experiment.commonzg Экспериментальные функции
</template>

<style scoped lang="scss">
.align {
	margin-left: 2rem;
}
</style>
