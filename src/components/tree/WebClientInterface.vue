<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const vid = ref([
	{
		id: 0,
		label: 'Порядок следования кнопок',
		descr:
			'Порядок кнопок ОК и Отмена в диалоговых окнах и разметках Web-клиента',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Auto', val: '1' },
			{ label: 'OK, Cancel', val: '2' },
			{ label: 'Cancel, OK', val: '3' },
		],
	},
	{
		id: 1,
		label: 'Закрепление основного меню',
		descr: 'Режим закрепления основного меню',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Закреплять кнопкой Скрепка', val: '1' },
			{ label: 'Закреплять кнопкой Гамбургер', val: '3' },
		],
	},
])
const vid1 = ref([
	{
		id: 1,
		main: '',
		check: true,
		label: 'Скрытие боковой панели',
		info: 'Режим скрытия правой боковой панели в карточках',
		descr: 'Cкрывать при щелчке вне боковой панели',
		readonly: false,
		checkbox: true,
	},
])
const grid = ref([
	{
		id: 0,
		main: '50',
		label: 'Размер страницы',
		descr: 'Количество загружаемых карточек на странице',
		readonly: false,
		type: 'number',
	},
	{
		id: 1,
		main: '0000000-0000-0000-0000-000000000000',
		label: 'Отключить счётчик непрочитанных карточек',
		descr:
			'Отключение проверки непрочитанных карточек для следующей группы пользователей (в формате RowID)',
		readonly: false,
	},
])
const aggreg = ref([
	{
		id: 0,
		main: '',
		check: false,
		label: 'Применение фильтров агрегации',
		info: 'Флаг определяет, будет ли список карточек обновляться автоматически или перестраиваться по нажатию кнопки Применить',
		descr: 'Обновление по кнопке Применить',
		readonly: false,
		checkbox: true,
	},
	{
		id: 1,
		main: '1000',
		label: 'Интервал обновления агрегатов, мс',
		descr:
			'Таймер обновления списка карточек и доступных агрегатов при использовании Elasticsearch',
		readonly: false,
		type: 'number',
	},
	{
		id: 2,
		main: '100',
		label: 'Количество вариантов агрегата',
		descr:
			'Количество выводимых вариантов в агрегате. Максимальное значение 65 536',
		readonly: false,
		type: 'number',
	},
])
const other = ref([
	{
		id: 0,
		main: '',
		check: false,
		label: 'Способ удаления карточек',
		info: 'Флаг отключает использование корзины. Папки и карточки удаляются безвозвратно',
		descr: 'Удалять файлы навсегда',
		readonly: false,
		checkbox: true,
	},
	{
		id: 1,
		main: 'https://forms.yandex.ru/cloud/63cfad67d046881219989008/?iframe=1/',
		label: 'Адрес формы обратной связи',
		descr: 'Доступность пункта Пройти опрос',
		readonly: false,
	},
])
</script>

<template lang="pug">

.section Внешний вид
q-list
	SimpleRadioGroup(
		v-for="item in vid" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:disable="item.disable"
		:startValue="item.startValue"
		:group="item.group"
	)
	MyField(
		v-model:main="item.main" 
		v-for="item in vid1" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:checkbox="item.checkbox"
		:info='item.info'
		)
.section Настройки грида
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in grid" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:type='item.type'
		)
.section Настройки агрегации
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in aggreg" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:checkbox="item.checkbox"
		:info='item.info'
		:type="item.type"
		)
.section Прочие
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in other" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:checkbox="item.checkbox"
		:info='item.info'
		:type="item.type"
		)
</template>

<style scoped lang="scss"></style>
