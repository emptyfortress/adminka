<template lang="pug">
q-dialog(:modelValue="props.change")
	q-card.q-pa-sm
		q-card-section(class="row items-center q-pb-none")
			div(class="text-h6") База данных по умолчанию
			q-space
			q-btn(icon="close" flat round dense v-close-popup)
		q-card-section Вы действительно хотите назначить <span class="name">{{changename}}</span> в качестве базы по умолчанию? Это может занять некоторoе время, но измения вступят в силу сразу.
		q-card-section.def При обращении к серверу Docsvision без ввода дополнительных параметров, происходит подключение к базе данных по умолчанию. Эта же база обрабатывается сервисами.
		q-card-actions(align="right")
			q-btn(flat label="Отмена" color="primary" v-close-popup)
			q-btn(flat label="Назначить" color="primary" :loading="loading" @click="changeDef")
</template>

<script setup lang="ts">
import { ref, } from 'vue'

const loading = ref(false)

const props = defineProps({
	change: {
		type: Boolean,
		default: false,
	},
	changename: String,
})

const emit = defineEmits(['changeDef'])

const changeDef = () => {
	loading.value = true
	setTimeout(() => {
		loading.value = false
		emit('changeDef')
	}, 1000)
}
</script>

<style scoped lang="scss">
.name {
	font-weight: 600;
	padding: 3px 8px;
	background: #efefef;
}
</style>
