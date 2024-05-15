<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const One = ref([
	{
		id: 0,
		main: '0',
		label: 'Максимальный таймаут, мс',
		descr: 'Максимальное время ожидания ответа от сервера приложений ',
		readonly: false,
		type: 'number',
	},
	{
		id: 1,
		main: '3000',
		label: 'Задержка работы счетчиков, мс',
		descr:
			'Время с момента загрузки web-клиента, через которое начинают работу счетчики (отправляется запрос)',
		readonly: false,
		type: 'number',
	},
])

const Radio = ref([
	{
		id: 0,
		label: 'Логирование сообщений браузера',
		descr: 'Отправка сообщений браузера в журнал операций web-клиента',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Да', val: '1' },
			{ label: 'Нет', val: '2' },
		],
	},
])

const Two = ref([
	{
		id: 0,
		main: '5413',
		label: 'Порт',
		descr: 'Порт, по которому DVWebTool прослушивает команды от web-клиента',
		readonly: false,
		type: 'number',
	},
	{
		id: 1,
		main: '2',
		label: 'Режим обновления справочников',
		descr:
			'0 - значения справочников в карточках обновятся по интервалу обновления справочников. 1 - значения справочников в карточках обновятся в новой сессии. 2 - значения справочников в карточках обновятся в текущей сессии',
		readonly: false,
		select: true,
		options: ['0', '1', '2'],
	},
	{
		id: 2,
		main: '60',
		label: 'Интервал обновления справочников, сек',
		descr: 'Интервал обновления значений справочников или разметок',
		readonly: false,
		type: 'number',
	},
	{
		id: 3,
		main: 'https://forms.yandex.ru/cloud/63a40f6b84227c76f60dc68e/?iframe=1',
		label: 'Адрес формы обратной связи',
		nodescr: true,
		readonly: false,
	},
])
</script>

<template lang="pug">
q-form
	q-list
		MyField(
			v-model:main="item.main" 
			v-for="item in One" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:type="item.type"
			)
		SimpleRadioGroup(
			v-for="item in Radio" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)
		MyField(
			v-model:main="item.main" 
			v-for="item in Two" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:select="item.select"
			:options="item.options"
			:nodescr="item.nodescr"
			)

</template>

<style scoped lang="scss"></style>
