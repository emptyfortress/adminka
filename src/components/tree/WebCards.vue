<script setup lang="ts">
import { ref, watch, computed, nextTick } from 'vue'
import { useStore } from '@/stores/store'
import { cards } from '@/stores/treeCards'

const store = useStore()

const form = ref()
const filter = ref('')
const tree = ref()

const kkey = ref(0)
const selection = ref('AGSupport')

const select = (e: any) => {
	selection.value = e.psevdo
	kkey.value += 1
}
const current = computed(() => {
	return store.wc.cards.filter(item => item.psevdo === selection.value)[0]
})
const dialog = ref(false)

const selBranch = ref(7)

const expanded = ref([0, 1])
const currentRow = ref()

const showDialog = async (e: any) => {
	currentRow.value = e
	dialog.value = true
	await nextTick(() => {
		tree.value.collapseAll()
	})
	await nextTick(() => {
		let item = tree.value.getNodeByKey(e.key)
		expanded.value = [...e.par]
		selBranch.value = item.id
	})
}
const choose = () => {
	let temp = tree.value.getNodeByKey(selBranch.value)
	currentRow.value.vid = temp.label
	currentRow.value.key = temp.id
	currentRow.value.par = [...temp.par]
	dialog.value = false
}
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		q-markup-table()
			thead
				tr
					th.top()
						q-icon(name="mdi-database" color="secondary" size='md')
						span AGSupport
					th.bad
						q-badge(rounded color="blue-4") БД по умолчанию
				tr
					th Тип карточки
					th Вид по умолчанию
			transition(name="fade" mode="out-in")
				tbody(:key="kkey")
					tr(v-for="item in current.types" :key="item.id")
						td {{ item.name }}
						td.choose(@click="showDialog(item)") {{ item.vid }}
					tr
						td(colspan='2')
							q-btn(unelevated color="secondary" label="Добавить тип ????"  size='sm')

		q-markup-table()
			thead
				tr
					th.top(colspan='2')
						q-icon(name="mdi-database" color="secondary" size='md')
						span dvTest
				tr
					th Тип карточки
					th Вид по умолчанию
			transition(name="fade" mode="out-in")
				tbody(:key="kkey")
					tr(v-for="item in current.types" :key="item.id")
						td {{ item.name }}
						td.choose(@click="showDialog(item)") {{ item.vid }}
					tr
						td(colspan='2')
							q-btn(unelevated color="secondary" label="Добавить тип ????"  size='sm')

	q-dialog(v-model="dialog")
		q-card(style="min-width: 400px; padding: 1rem;")
			.row.items-center.q-pb-none
				.text-h6 Вид по умолчанию
				q-space
				q-btn(icon="close" flat round dense v-close-popup)
			q-card-section
				q-input(v-model="filter" dense clearable placeholder="Поиск")
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")
			q-scroll-area.scr
				q-tree(:nodes="cards"
					ref="tree"
					icon="mdi-chevron-right"
					color="secondary"
					:filter="filter"
					node-key="id"
					v-model:selected="selBranch"
					v-model:expanded="expanded")
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" v-close-popup ) 
				q-btn(unelevated color="primary" label="Выбрать" @click="choose" :disable="selBranch === null") 

</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
.q-table__container {
	min-width: 400px;
}

:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
	// padding: 5px 8px;
}
th.top {
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

th {
	text-align: left;
}

.sel {
	background: var(--bg-selected);
}

.choose {
	color: $primary;
	cursor: pointer;
	font-weight: 600;
}

:deep(.q-tree__node--selected) {
	background: var(--bg-selected);

	.q-tree__node-header-content.text-secondary {
		color: $blue-10 !important;
	}
}

.scr {
	height: calc(100vh - 350px);
}
</style>
