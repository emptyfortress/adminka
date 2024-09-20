<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

const selection = ref('DocsVision Users')
const current = computed(() => {
	return store.wc.groups.filter(item => item.label === selection.value)[0]
})

const select = (e: any) => {
	selection.value = e.label
}
</script>

<template lang="pug">
q-form.q-mt-md(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		.wh
			.text-weight-bold.q-pa-sm Группы:
			q-list
				q-item.db(clickable v-for="item in store.wc.groups" :key="item.id" @click="select(item)" :class="{ sel: item.label === selection }")
					q-item-section(side)
						q-icon(name="mdi-account-multiple")
					q-item-section
						q-item-label {{ item.label }}

		.to
			q-icon(name="mdi-arrow-right-bold" size="lg")
		q-scroll-area.wh
			q-markup-table(flat)
				thead
					tr
						th #
						th Имя пользователя
						th 
				tbody
					tr(v-for="(item, index) in current.users" :key="item.id")
						td.sma {{ index + 1 }}
						td {{ item.label }}
						td.text-right
							q-btn(flat round color="secondary" icon='mdi-trash-can-outline' size='sm') 
					tr(v-if='current.users.length == 0')
						td(colspan="3") Пользователи не найдены.
					tr
						td(colspan="3")
							q-btn(unelevated color="secondary" label="Добавить" size='sm') 
								
</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: grid;
	grid-template-columns: 0.8fr auto 1fr;
	gap: 1rem;

	& > div.wh {
		background: white;
	}
}
.wh {
	height: 400px;
}
.sma {
	width: 20px;
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
</style>
