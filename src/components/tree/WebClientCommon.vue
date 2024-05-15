<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const Folders = ref([
	{
		id: 0,
		main: 'C:/Program Files (x86)/Docsvision/WebClient/5.5/Site/Extensions',
		label: 'Размещение расширений',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 1,
		main: 'Content/Tools/DVWebTool/Docsvision.DVWebTool.application',
		label: 'Адрес установщика утилиты DVWebTool',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 2,
		main: '${gdc:baseLogFolder}/docsvision/webclient/webclient.log',
		label: 'Адрес журнала операций web-клиента',
		descr: 'This is description',
		readonly: false,
	},
])
const Device = ref([
	{
		id: 0,
		main: '',
		label: 'Новые мобильные устройства',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 1,
		main: '',
		label: 'Старые мобильные устройства',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Планшеты',
		descr: 'This is description',
		readonly: false,
	},
])

const Dopoln = ref([
	{
		id: 0,
		label: 'Режим удаления карточек',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'В корзину', val: '1' },
			{ label: 'Полное удаление', val: '2' },
		],
	},
	{
		id: 1,
		label: 'Порядок следования кнопок',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Auto', val: '1' },
			{ label: 'OK, Cancel', val: '2' },
			{ label: 'Cancel, OK', val: '2' },
		],
	},
	{
		id: 2,
		label: 'Прятать боковую панель по клику на странице',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Да', val: '1' },
			{ label: 'Нет', val: '2' },
		],
	},
	{
		id: 3,
		label: 'Показывать сообщение о переходе в оффлайн',
		descr: 'This is description',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Да', val: '1' },
			{ label: 'Нет', val: '2' },
		],
	},
])

const Dopoln1 = ref([
	{
		id: 0,
		main: '',
		label: 'Оффлайн режим после паузы, мин.',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 1,
		main: '',
		label: 'Закрытие сессии после паузы, мин.',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 2,
		main: '',
		label: 'Закрытие сессии после паузы, мин.',
		descr: 'This is description',
		readonly: false,
	},
	{
		id: 3,
		main: '50000000',
		label: 'Максимальный размер файла, байт',
		descr: 'This is description',
		readonly: false,
	},
])
</script>

<template lang="pug">
q-form
	.section Папки
	q-list
		MyField(
			v-model:main="item.main" 
			v-model:check="item.check" 
			v-for="item in Folders" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:checkbox="item.checkbox")

	.section Шаблоны для определения устройств
	q-list
		MyField(
			v-model:main="item.main" 
			v-model:check="item.check" 
			v-for="item in Device" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:checkbox="item.checkbox")

	.section Дополнительно
	q-list
		SimpleRadioGroup(
			v-for="item in Dopoln" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:disable="item.disable"
			:startValue="item.startValue"
			:group="item.group"
		)
		MyField(
			v-model:main="item.main" 
			v-model:check="item.check" 
			v-for="item in Dopoln1" 
			:key="item.id" 
			:label="item.label" 
			:descr="item.descr" 
			:readonly="item.readonly"
			:checkbox="item.checkbox")

</template>

<style scoped lang="scss"></style>
