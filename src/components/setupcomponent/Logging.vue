<script setup lang="ts">
import { ref } from 'vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'
import MyRadioGroup2 from '@/components/common/MyRadioGroup2.vue'

const log = ref([
	{ label: 'Логировать все', val: 'one' },
	{ label: 'Фильтровать лог', val: 'two' },
	{ label: 'Логировать только ошибки', val: 'three' },
])

const backup = ref([
	{ id: 0, label: 'Платформа', descr: 'Параметры архивирования журнала Платформа', disable: true, main: 'Старые сообщения журнала будут удалены из базы данных. Сообщения старше 7 дней будут обработаны.', textarea: true, button: true, btLabel: 'Параметры' },
	{ id: 1, label: 'Безопасность', descr: 'Параметры архивирования журнала Платформа', disable: true, main: 'Старые сообщения журнала будут удалены из базы данных. Сообщения старше 7 дней будут обработаны.', textarea: true, button: true, btLabel: 'Параметры' },
	{ id: 2, label: 'Приложение', descr: 'Параметры архивирования журнала Платформа', disable: true, main: 'Старые сообщения журнала будут удалены из базы данных. Сообщения старше 7 дней будут обработаны.', textarea: true, button: true, btLabel: 'Параметры' },
])

</script>

<template lang="pug">
q-list
	SimpleRadioGroup(label="Настройки логирования" descr='Настройка уровня журналирования событий базы данных' :group="log" startValue="one")
.section Настройка бэкапа логов
q-list
	MyRadioGroup2(
		v-for="item in backup" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr"
		:group="log" startValue="one")
</template>

<style scoped lang="scss"></style>
