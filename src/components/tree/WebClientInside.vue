<script setup lang="ts">
import WebClientConnect from '@/components/tree/WebClientConnect.vue'
import WebClientCommon from '@/components/tree/WebClientCommon.vue'
import WebClientCache from '@/components/tree/WebClientCache.vue'
import WebClientSystem from '@/components/tree/WebClientSystem.vue'
import WebClientCrypto from '@/components/tree/WebClientCrypto.vue'
import WebClientGrid from '@/components/tree/WebClientGrid.vue'
import WebLocalization from '@/components/tree/WebLocalization.vue'
import WebCards from '@/components/tree/WebCards.vue'
import WebExp from '@/components/tree/WebExp.vue'
</script>

<template lang="pug">
#connect.commonzg Подключение к серверу приложений
WebClientConnect
#bd.commonzg База данных
// WebClientConnect
#interface.commonzg Интерфейс
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
// #locale.commonzg Локализации
// #cards.commonzg Виды карточек
// #experiment.commonzg Экспериментальные функции
</template>

<style scoped lang="scss">
.align {
	margin-left: 2rem;
}
</style>
