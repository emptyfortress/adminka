<script setup lang="ts">
import { ref } from 'vue'
import type { QTableColumn } from 'quasar'
import { useQuasar } from 'quasar'
import SvgSpinners90RingWithBg from '@/components/icons/SvgSpinners90RingWithBg.vue'

const $q = useQuasar()

const columns: QTableColumn[] = [
	{
		name: 'ide',
		align: 'left',
		label: 'Идентификатор',
		field: 'ide',
		sortable: true,
	},
	{
		name: 'name',
		align: 'left',
		label: 'Название',
		field: 'name',
		sortable: true,
	},
	{
		name: 'version',
		align: 'left',
		label: 'Версия',
		field: 'version',
		sortable: true,
	},
	{
		name: 'action',
		align: 'right',
		label: '',
		field: 'action',
		sortable: true,
	},
]

const rows = ref([
	{
		id: 0,
		ide: '220f3е53-18b6-43ad-8c33-36a30c141e2e',
		name: 'Управление документами',
		version: 'Базовое решение 6.1',
	},
	{
		id: 1,
		ide: '220f3е53-18b6-43ad-8c33-36a30c141e2e',
		name: 'Базовое решение',
		version: 'Базовое решение 6.1',
	},
])
const remove = (e: number) => {
	const index = rows.value.findIndex(item => item.id == e)
	if (index !== -1) rows.value.splice(index, 1)
}

const tabl = ref(false)
const imp = () => {
	tabl.value = true
	setTimeout(() => {
		tabl.value = false
		$q.notify({
			icon: 'mdi-check-bold',
			message: 'Импорт завершен. Обновите страницу.',
		})
	}, 5000)
}
</script>

<template lang="pug">
.lang
	.loader
		q-table(:rows='rows' :columns='columns' row-key='id' hide-pagination wrap-cells)
			template(v-slot:top)
				.top
					q-icon(name="mdi-database" color="secondary" size='md')
					span AGSupport
					q-space
					q-badge(rounded color="blue-4") БД по умолчанию

			template(v-slot:body-cell-action='props' )
				q-td.text-right(:props='props')
					q-btn(flat round icon="mdi-trash-can-outline" color="secondary" size='sm') 
						q-menu
							q-list
								q-item(clickable @click="remove(props.row.id)").pink
									q-item-section Удалить
			template(v-slot:bottom)
				.q-gutter-x-xs
					q-btn(unelevated color="secondary" label="Импортировать решения" size='sm' @click="imp") 
					q-btn(unelevated color="secondary" label="Импортировать стандартные решения" size='sm' @click="imp") 
		.splash(v-if='tabl')
			div
				SvgSpinners90RingWithBg
				.inf Подождите завершения импорта

	.loader
		q-table(:rows='rows' :columns='columns' row-key='id' hide-pagination wrap-cells)
			template(v-slot:top)
				.top
					q-icon(name="mdi-database" color="secondary" size='md')
					span dvTest
			template(v-slot:body-cell-action='props' )
				q-td.text-right(:props='props')
					q-btn(flat round icon="mdi-trash-can-outline" color="secondary" size='sm') 
						q-menu
							q-list
								q-item(clickable @click="remove(props.row.id)").pink
									q-item-section Удалить
			template(v-slot:bottom)
				.q-gutter-x-xs
					q-btn(unelevated color="secondary" label="Импортировать решения" size='sm' @click="imp") 
					q-btn(unelevated color="secondary" label="Импортировать стандартные решения" size='sm' @click="imp") 
		.splash(v-if='tabl')
			div
				SvgSpinners90RingWithBg
				.inf Подождите завершения импорта

</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	// padding: 5px 8px;
}
:deep(tbody tr td:first-child) {
	max-width: 170px;
}
.top {
	font-size: 1.1rem;
	font-weight: 600;
	width: 100%;
	display: flex;
	align-items: center;
}
.loader {
	position: relative;
}
.splash {
	position: absolute;
	width: 100%;
	height: 100%;
	background: #ffffffdd;
	top: 0;
	left: 0;
	font-size: 5rem;
	line-height: 1;
	color: $secondary;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.inf {
	font-size: 1rem;
	font-weight: 600;
}
</style>
