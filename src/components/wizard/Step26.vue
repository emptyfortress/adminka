<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
	text: {
		type: String,
		default:
			'Обновление базы данных может занять длительное время. Пользователи и сервисы, использующие эту базу данных, будут отключены, и не смогут подключиться к ней до окончания процесса обновления.',
	},
	color: {
		type: String,
		default: 'negative',
	},
})

const calcClass = computed(() => {
	return 'text-' + props.color
})
</script>

<template lang="pug">
.mygrid
	.text-bold
		q-icon(name="mdi-alert" :color="props.color" size="md").q-mr-md
		span(:class="calcClass") Внимание!
	div {{ props.text }}
</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-content: start;
	align-items: center;
	column-gap: 3rem;
}
</style>
