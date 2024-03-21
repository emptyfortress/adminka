<script setup lang="ts">
import { ref, reactive, watch, computed, } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()

const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])
const filter = ref('')

const kkey = ref(0)

watch(store.wc.funcs, (value) => {
	if (value) {
		store.changeWebDefaults(8)
		emit('change')
	}
})
const selection = ref('AGSupport')

const select = ((e: any) => {
	selection.value = e.psevdo
	kkey.value += 1
})
const current = computed(() => {
	return store.wc.funcs.filter((item: any) => item.psevdo === selection.value)[0]
})
const options = [
	'Администратор',
	'Пользователь',
	'Регистратор',
	'Согласование договоров',
	'Оператор архива',
	'Заместитель',
	'Бухгалтер',
	'Зам.бухгалтера',
	'Директор по персоналу',
	'Маркетинг',
	'Power user',
	'User 1',
	'User 2',
	'User 3',
	'User 4',
	'User 5',
]

const dialog = ref(false)
const showDialog = ((e: any) => {
	currentRow.value = e
	rowCheck.value = e.vid
	dialog.value = true
})
const rowCheck = ref([])

const filteredOptions = computed(() => {
	if (filter.value) {
		return options.filter(item => item.toLowerCase().includes(filter.value.toLowerCase()))
	}
	return options
})

const currentRow = ref()
const action = (() => {
	currentRow.value.vid = rowCheck.value
	dialog.value = false
})
const showVid = ((e: string[]) => {
	return e.toString().replace(',', ', ')
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		.wh
			.text-weight-bold.q-pa-sm Базы данных:
			q-list
				q-item.db(clickable v-for="item in store.wc.funcs" :key="item.id" @click="select(item)" :class="{ sel: item.psevdo === selection }")
					q-item-section(side)
						q-icon(name="mdi-database-outline")
					q-item-section
						q-item-label {{ item.psevdo }}
		.to
			q-icon(name="mdi-arrow-right-bold" size="lg")
		.wh
			q-markup-table(flat wrap-cells)
				thead
					tr
						th Функция
						th Активна
						th Включить только для роли
				transition(name="fade" mode="out-in")
					tbody(:key="kkey")
						tr(v-for="item in current.fun" :key="item.id")
							td {{ item.name }}
							td
								q-checkbox(v-model="item.used" dense)
							td.choose(@click="showDialog(item)")
								span(v-if="item.vid.length > 0") {{ showVid(item.vid) }}
								span(v-else) Все

	q-dialog(v-model="dialog")
		q-card(style="min-width: 400px; padding: 1rem;")
			.row.items-center.q-pb-none
				.text-h6 Выберите роль
				q-space
				q-btn(icon="close" flat round dense v-close-popup)
			q-card-section
				// p {{ rowCheck }}
				q-input(v-model="filter" dense clearable placeholder="Поиск" @clear="filter = ''")
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")
			q-scroll-area.scr
				q-list
					q-item(tag="label" v-ripple v-for="item in filteredOptions" :key="item")
						q-item-section(side)
							q-checkbox(v-model="rowCheck" dense :val="item")
						q-item-section
							q-item-label {{ item }}
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" v-close-popup) 
				q-btn(unelevated color="primary" label="Применить" @click="action") 
</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: grid;
	grid-template-columns: .4fr auto 1fr;
	gap: 1rem;

	&>div.wh {
		background: white;
	}
}

th {
	text-align: left;
}

.to {
	align-self: center;
	text-align: center;
}

.q-item.db {
	border: none !important;
}

.sel {
	background: var(--bg-selected);
}

.choose {
	color: $primary;
	cursor: pointer;
	font-weight: 600;
}

.scr {
	height: calc(100vh - 350px);
}
</style>
