<script setup lang="ts">
import WebClientConnect from '@/components/tree/WebClientConnect.vue'
import WebClientCommon from '@/components/tree/WebClientCommon.vue'
import WebClientCache from '@/components/tree/WebClientCache.vue'
import WebClientFiles from '@/components/tree/WebClientFiles.vue'
import WebClientTools from '@/components/tree/WebClientTools.vue'
import WebClientCrypto from '@/components/tree/WebClientCrypto.vue'
import WebClientDecision from '@/components/tree/WebClientDecision.vue'
import WebClientInterface from '@/components/tree/WebClientInterface.vue'
import WebClientLogs from '@/components/tree/WebClientLogs.vue'
import WebLocalization from '@/components/tree/WebLocalization.vue'
import WebCards from '@/components/tree/WebCards.vue'
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
WebClientCommon
#yield.commonzg Производительность
WebClientCache
#files.commonzg Работа с файлами
WebClientFiles
#tools.commonzg Инструменты
WebClientTools
#sign.commonzg Электронная подпись
WebClientCrypto
#logs.commonzg Журналирование
WebClientLogs

</template>

<style scoped lang="scss">
.align {
	margin-left: 2rem;
}
</style>
