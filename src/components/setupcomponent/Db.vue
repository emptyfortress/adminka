<template lang="pug">
div
	.hd Свойства базы данных
	.base
		.blo
			.label Имя базы данных:
			.content(contenteditable) Docsvision DATABASE
			.label Псевдоним:
			.content(contenteditable) Docsvision-DB
			.label SQL Server:
			div sql.company.com
			.label Версия:
			div 4335
			.label Дата последнего обновления:
			div 23.03.2021 11:54:12
			//- .label Используется для подключения пользователей по умолчанию и обрабатывается сервисами стандартных приложений:
			//- div Да
			.label Используются сателлитные БД:
			div
				div DocsvisionDB_Log
				div DocsvisionDB_Archive
				div DocsvisionDB_Metadata
			q-checkbox(dense :model-value="props.modelValue" label="Использовать по умолчанию" @update:model-value="def")
	q-separator.q-mb-md
	q-card-actions
		q-btn(unelevated label="Удалить" color="primary")
		q-space
		q-btn(unelevated label="Настройка" color="primary")
		q-btn(unelevated label="Мастер баз данных" color="primary")
</template>

<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['update:model-value'])
const def = () => {
	emit('update:model-value', !props.modelValue)
}
</script>

<style scoped lang="scss">
.hd {
	text-align: center;
	font-size: 0.9rem;
	font-weight: bold;
}
.content {
	// font-size: 1rem;
	border-bottom: 1px dotted $primary;
	height: 28px;
	line-height: 28px;
	// color: $primary;
}
.base {
	margin: 1rem auto;
	max-width: 500px;
	// background: pink;
}
.label {
	line-height: 100%;
}
.blo {
	row-gap: 1rem;
	grid-template-columns: 220px 1fr;
	// align-items: center;
}
</style>
