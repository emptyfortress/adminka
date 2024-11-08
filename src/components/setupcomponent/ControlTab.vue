<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import MyRadioGroup1 from '@/components/common/MyRadioGroup1.vue'

// const hour3 = ref(600)
const path = ref('')
const trash = ref([
	{
		id: 0,
		main: '0',
		label: 'Срок хранения карточек',
		descr: 'Продолжительность нахождения карточки в корзине, по истечении которого она будет удалена. 0 – хранить всегда.',
		type: 'number',
	},

])
</script>

<template lang="pug">
.section Сценарий обслуживания
MyField(v-model="path" label="Путь к файлу сценария" button btLabel="Выбрать")

.section Корзина
q-list
	MyField(
		v-for="item in trash" 
		v-model:main="item.main" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr"
		type='number'
		)
	MyRadioGroup1(label="Очищать корзину" descr="Настройка периодичности очистки корзины")

.section Дополнительно
q-list
	MyField(
		label="Карточки и справочники Делопроизводства 4X"
		:checkbox='true'
		info="Если флаг активен, у пользователя не будут отображаться карточки и справочники приложения Делопроизводство"
		descr="Не отображать карточки Делопроизводства 4X"
		:check='false'
		button
		btLabel="Пересоздать задания БД"
		)
</template>

<style scoped lang="scss"></style>
