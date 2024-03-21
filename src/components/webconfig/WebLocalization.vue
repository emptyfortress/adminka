<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const emit = defineEmits(['change', 'haserror', 'noerror'])
const selection = ref('AGSupport')

watch(store.wc.localization, (value) => {
	if (value) {
		store.changeWebDefaults(6)
		emit('change')
	}
})

const kkey = ref(0)
watch(selection, (value) => {
	if (value) {
		kkey.value += 1
	}
})

const select = ((e: any) => {
	selection.value = e.psevdo
})
const current = computed(() => {
	return store.wc.localization.filter(item => item.psevdo === selection.value)[0]
})


</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		.wh
			.text-weight-bold.q-pa-sm Базы данных:
			q-list
				q-item.db(clickable v-for="item in store.wc.localization" :key="item.id" @click="select(item)" :class="{ sel: item.psevdo === selection }")
					q-item-section(side)
						q-icon(name="mdi-database-outline")
					q-item-section
						q-item-label {{ item.psevdo }}

		.to
			q-icon(name="mdi-arrow-right-bold" size="lg")
		.wh
			q-markup-table(flat)
				thead
					tr
						th Язык
						th По умолчанию
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
</style>
