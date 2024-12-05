<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableColumn } from 'quasar'

const store = useStore()
const selection = ref('AGSupport')

const kkey = ref(0)

const select = (e: any) => {
	selection.value = e.psevdo
}
const current = computed(() => {
	return store.wc.localization.filter(
		item => item.psevdo === selection.value
	)[0]
})

const columns: QTableColumn[] = [
	{
		name: 'lang',
		align: 'left',
		label: 'Язык',
		field: 'lang',
		sortable: true,
	},
	{
		name: 'def',
		align: 'left',
		label: 'По умолчанию',
		field: 'def',
		sortable: true,
	},
]
const rows = [
	{
		id: 0,
		lang: 'russian',
	},
]
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		q-markup-table
			thead
				tr
					th.top()
						q-icon(name="mdi-database" color="secondary" size='md')
						span AGSupport
					th.bad
						q-badge(rounded color="blue-4") БД по умолчанию
				tr
					th Язык
					th Язык по умолчанию

			transition(name="fade" mode="out-in")
				tbody(:key="kkey")
					tr(v-for="item in current.lang" :key="item.id")
						td
							q-checkbox(v-model="item.active") {{ item.name }}
						td
							q-radio(v-model="current.defLang" :val="item.def")

		q-markup-table
			thead
				tr
					th.top(colspan='2')
						q-icon(name="mdi-database" color="secondary" size='md')
						span dvTest
				tr
					th Язык
					th Язык по умолчанию
			transition(name="fade" mode="out-in")
				tbody(:key="kkey")
					tr(v-for="item in current.lang" :key="item.id")
						td
							q-checkbox(v-model="item.active") {{ item.name }}
						td
							q-radio(v-model="current.defLang" :val="item.def")
</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

th {
	text-align: left;
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	// padding: 5px 8px;
}
.top {
	font-size: 1.1rem;
	font-weight: 600;
	margin-left: 0.5rem;
	border-bottom: none;
	color: black;
}
.bad {
	border-bottom: none;
	text-align: right;
}

.sel {
	background: var(--bg-selected);
}
</style>
