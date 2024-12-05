<script setup lang="ts">
import WebClientConnect from '@/components/tree/WebClientConnect.vue'
import WebClientDb from '@/components/tree/WebClientDb.vue'
import WebClientCommon from '@/components/tree/WebClientCommon.vue'
import WebClientCache from '@/components/tree/WebClientCache.vue'
import WebClientSystem from '@/components/tree/WebClientSystem.vue'
import WebClientCrypto from '@/components/tree/WebClientCrypto.vue'
import WebClientGrid from '@/components/tree/WebClientGrid.vue'
import WebClientDecision from '@/components/tree/WebClientDecision.vue'
import WebClientInterface from '@/components/tree/WebClientInterface.vue'
import WebLocalization from '@/components/tree/WebLocalization.vue'
import WebCards from '@/components/tree/WebCards.vue'
import WebExp from '@/components/tree/WebExp.vue'
</script>

<template lang="pug">
#connect.commonzg Подключение к серверу приложений
WebClientConnect
#decision.commonzg Решения
WebClientDecision
#local.commonzg Локализации
WebLocalization
#vid.commonzg Виды карточек
WebCards
#interface.commonzg Интерфейс
WebClientInterface
#common.commonzg Общие настройки
#yield.commonzg Производительность
#files.commonzg Работа с файлами
#tools.commonzg Инструменты
#sign.commonzg Электронная подпись
#logs.commonzg Журналирование

// #common.commonzg Общие настройки
// WebClientCommon
// #cache.commonzg Кэширование
// #system.commonzg Система
// #crypto.commonzg Облачная подпись КриптоПро
// #grid.commonzg Грид
// #cards.commonzg Виды карточек
// #experiment.commonzg Экспериментальные функции
</template>

<style scoped lang="scss">
.align {
	margin-left: 2rem;
}
</style>
