<script setup lang="ts">
import { ref } from 'vue'
import MyField from '@/components/common/MyField.vue'

const auth = ref([
	{
		id: 0,
		main: 'D4A9BCC3-E897-47AE-BBA5-8F5085D231E7',
		label: 'Идентификатор расширения',
		descr: 'ID...',
		readonly: false,
	},
	{
		id: 1,
		main: 'ЕСИА',
		label: 'Название расширения',
		descr: 'Отображаемое имя сервиса аутентификации',
		readonly: false,
	},
	{
		id: 2,
		main: 'Здесь xml-строка с настройками',
		label: 'Настройки',
		descr: 'Строка настроек расширения',
		readonly: false,
		textarea: true,
	},
	{
		id: 2,
		main: 'DocsVision.Platform.Authentication.AzureAD.AzureADRootAuthenticationExtension, DocsVision.Platform.Authentication.AzureAD, Version=5.5.0.0, Culture=neutral, PublicKeyToken=7148AFE997F90519',
		label: 'Тип',
		descr: 'Строка с именем типа, реализующего расширение',
		readonly: false,
		textarea: true,
	},
])
</script>

<template lang="pug">
q-list
	MyField(
		v-model:main="item.main" 
		v-for="item in auth" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:readonly="item.readonly"
		:textarea='item.textarea'
		)
</template>

<style scoped lang="scss">
.no {
	margin-left: 2rem;
	color: $negative;
	font-size: 1rem;
}
</style>
