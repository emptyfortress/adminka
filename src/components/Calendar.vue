<script setup lang="ts">
import { ref, watchEffect, computed, reactive } from 'vue'

const mode = ref('single')
const query = ref('')
const dateobject = ref({ from: '15.03.2024', to: '17.03.2024' })
const date = ref('')

const clear = () => {
	date.value = ''
	datesingle.value = ''
	dateobject.value = Object.assign({ from: '', to: '' })
	shab.map(item => (item.selected = false))
	shab1.map(item => (item.selected = false))
}

const datesingle = ref('04.10.2021')
const list = ref(true)
const shab1 = reactive([
	{
		id: 0,
		selected: false,
		label: 'Сегодня',
		range: '10.03.2024',
	},
	{
		id: 1,
		selected: false,
		label: 'Вчера',
		range: '09.03.2024',
	},
	{
		id: 2,
		selected: false,
		label: 'Начало недели',
		range: '05.03.2024',
	},
	{
		id: 3,
		selected: false,
		label: 'Начало месяца',
		range: '01.03.2024',
	},
	{
		id: 4,
		selected: false,
		label: 'Конец месяца',
		range: '31.03.2024',
	},
])
const shab = reactive([
	{
		id: 0,
		selected: false,
		label: 'Текущая неделя',
		range: '10.03.2024 - 16.03.2024',
		obj: {
			from: '10.03.2024',
			to: '16.03.2024',
		},
	},
	{
		id: 1,
		selected: false,
		label: 'Текущий месяц',
		range: '01.03.2024 - 31.03.2024',
		obj: {
			from: '01.03.2024',
			to: '31.03.2024',
		},
	},
	{
		id: 2,
		selected: false,
		label: 'Текущий квартал',
		range: '01.01.2024 - 31.03.2024',
		obj: {
			from: '01.01.2024',
			to: '31.03.2024',
		},
	},
	{
		id: 3,
		selected: false,
		label: 'Текущий год',
		range: '01.01.2024 - 31.12.2024',
		obj: {
			from: '01.01.2024',
			to: '31.12.2024',
		},
	},
	{
		id: 4,
		selected: false,
		label: 'Прошлая неделя',
		range: '03.03.2024 - 09.03.2024',
		obj: {
			from: '03.03.2024',
			to: '09.03.2024',
		},
	},
	{
		id: 5,
		selected: false,
		label: 'Прошлый месяц',
		range: '01.02.2024 - 29.02.2024',
		obj: {
			from: '01.02.2024',
			to: '29.02.2024',
		},
	},
	{
		id: 6,
		selected: false,
		label: 'Прошлый квартал',
		range: '01.10.2023 - 31.12.2023',
		obj: {
			from: '01.10.2023',
			to: '31.12.2023',
		},
	},
	{
		id: 7,
		selected: false,
		label: 'Прошлый год',
		range: '01.01.2023 - 31.12.2023',
		obj: {
			from: '01.01.2023',
			to: '31.12.2023',
		},
	},
])
const jour = reactive([
	{ selected: false, label: '10.05.2021' },
	{ selected: false, label: '11.05.2021' },
	{ selected: false, label: '12.05.2021' },
	{ selected: false, label: '13.05.2021' },
	{ selected: false, label: '14.05.2021' },
	{ selected: false, label: '15.05.2021' },
	{ selected: false, label: '16.05.2021' },
	{ selected: false, label: '17.05.2021' },
	{ selected: false, label: '18.05.2021' },
	{ selected: false, label: '19.05.2021' },
	{ selected: false, label: '20.05.2021' },
	{ selected: false, label: '21.05.2021' },
	{ selected: false, label: '22.05.2021' },
	{ selected: false, label: '23.05.2021' },
	{ selected: false, label: '24.05.2021' },
])
const filtered = computed(() => {
	return !!query.value
		? jour.filter(item => item.label.includes(query.value))
		: jour
})
const toggle = () => {
	list.value = !list.value
}
const check = ref(false)

const fill = (val: any) => {
	if (!!val) {
		date.value = val.from + ' - ' + val.to
	}
}
const select = (e: any) => {
	shab.map(item => (item.selected = false))
	e.selected = true
	date.value = e.range
	dateobject.value = Object.assign(e.obj)
}
const select1 = (e: any) => {
	shab1.map(item => (item.selected = false))
	e.selected = true
	datesingle.value = e.range
}
</script>

<template lang="pug">
q-page(padding)
	.grid
		img(src="@/assets/img/image.png")
		q-btn(dense flat round icon="mdi-filter") 
			q-menu
				q-card
					q-card-section.q-gutter-x-md
						q-radio(dense label="Журнал" v-model="mode" val="journal")
						q-radio(dense label="Дата" v-model="mode" val="single")
						q-radio(dense label="Интервал" v-model="mode" val="range")

					template(v-if="mode == 'journal'")
						q-input(v-model="query" dense filled clearable)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
						q-scroll-area(style="height: 250px")
							q-list(dense)
								q-item(clickable tag="label" v-for="item in filtered" :key="item.label")
									q-item-section(side)
										q-checkbox(v-model="item.selected")
									q-item-section {{ item.label}}

					template(v-if="mode == 'single'")
						q-input(v-model="datesingle" dense filled)
						q-date( v-model="datesingle" today-btn mask="DD.MM.YYYY")

					template(v-if="mode == 'range'")
						q-input(v-model="date" dense filled)
							template(v-slot:append v-if="mode == 'range'")
								q-icon.cursor-pointer(name="mdi-calendar-blank" color="primary" @click="toggle" v-if="list")
								q-icon.cursor-pointer(name="mdi-format-list-bulleted-square" color="primary" @click="toggle" v-else)
						template(v-if="list")
							q-list(dense)
								q-item(clickable v-for="item in shab" :key="item.id" @click="select(item)" :class="{selected: item.selected}")
									q-item-section
										q-item-label {{ item.label }}

						template(v-else)
							q-date( v-model="dateobject" today-btn range mask="DD.MM.YYYY" @update:model-value="fill")
					q-separator
					.row.justify-between.items-center
						q-btn.red(flat round icon="mdi-trash-can-outline" @click="clear") 
						q-btn(flat color="primary" label="Применить" @click="clear") 

		q-btn(dense flat round icon="mdi-filter") 
			q-menu
				q-card
					q-card-section.q-gutter-x-md
						q-radio(dense label="Журнал" v-model="mode" val="journal")
						q-radio(dense label="Дата" v-model="mode" val="single")
						q-radio(dense label="Интервал" v-model="mode" val="range")

					template(v-if="mode == 'journal'")
						q-input(v-model="query" dense filled clearable)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
						q-scroll-area(style="height: 250px")
							q-list(dense)
								q-item(clickable tag="label" v-for="item in filtered" :key="item.label")
									q-item-section(side)
										q-checkbox(v-model="item.selected")
									q-item-section {{ item.label}}
					template(v-if="mode == 'single'")
						q-input(v-model="datesingle" dense filled)
							template(v-slot:append)
								q-icon.cursor-pointer(name="mdi-dots-vertical" color="primary")
									q-menu
										q-list
											q-item(clickable v-for="item in shab1" :key="item.id" @click="select1(item)" :class="{selected: item.selected}")
												q-item-section
													q-item-label {{ item.label}}
						q-date( v-model="datesingle" today-btn mask="DD.MM.YYYY")

					template(v-if="mode == 'range'")
						q-input(v-model="date" dense filled)
							template(v-slot:append)
								q-icon.cursor-pointer(name="mdi-dots-vertical" color="primary")
									q-menu
										q-list
											q-item(clickable v-for="item in shab" :key="item.id" @click="select(item)" :class="{selected: item.selected}")
												q-item-section
													q-item-label {{ item.label}}

						q-date( v-model="dateobject" today-btn range mask="DD.MM.YYYY" @update:model-value="fill")

					q-separator
					.row.justify-between.items-center
						q-btn.red(flat round icon="mdi-trash-can-outline" @click="clear") 
						q-btn(flat color="primary" label="Применить" v-close-popup) 
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: start;
	align-items: start;
	column-gap: 0.5rem;
}
.q-card {
	padding: 1rem;
}
.q-radio {
	font-size: 0.8rem;
}
.q-input {
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
}
:deep(.red .q-icon) {
	color: $negative;
}
:deep(.q-date__header-today .q-icon) {
	color: white;
}
.bord {
	border-bottom: 1px solid #ccc;
}
.selected {
	background: var(--bg-selected);
}
</style>
