<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import GreyBlock5 from '@/components/GreyBlock5.vue'
import GreyBlock6 from '@/components/GreyBlock6.vue'
import GreyBlock7 from '@/components/GreyBlock7.vue'
import AddDialogCommon from '@/components/AddDialogCommon.vue'

const store = useStore()
const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addWebConfig = (e: string, copy: boolean) => {
	if (copy) {
		store.addWebConfig(e + '-copy')
		store.setTabs2(e + '-copy')
	} else {
		store.addWebConfig(e)
		store.setTabs2(e)
	}
	dialog.value = false
}
</script>

<template lang="pug">
div
	AddDialogCommon(v-model="dialog" dv @add="addWebConfig")
	.zag Настройки web-клиента
	.bar
		q-chip(color="warning") Всего конфигураций: {{ store.webconfig.length }}
		q-btn.plus(flat round icon="mdi-plus-circle" @click="add") 
			q-tooltip Добавить config
		q-space
		.alltab
			q-tabs(v-model="store.tabs2" active-color="primary" inline-label).text-secondary
				q-tab(v-for="item in store.webconfig" :key="item.id" :name="item.name" :label="item.name")

	q-card.card
		q-tab-panels(v-model="store.tabs2" animated)
			template(v-for="item in store.webconfig" :key="item.id")
				q-tab-panel(:name="item.name")
					GreyBlock5(:name="item.name" @delete="store.removeWebConfig(item)" @duble="addWebConfig(item.name, true)")
	br
	q-card.card
		.text-h6.q-mx-md
			q-icon(name="mdi-penguin" size="md")
			span.q-ml-sm 102pc0102
		.q-mx-md
			GreyBlock6(name="fuck")
	br
	q-card.card
		.text-h6.q-mx-md
			q-icon(name="mdi-microsoft-windows-classic" size="md")
			span.q-ml-sm DVM-new
		.q-mx-md
			GreyBlock7(name="fuck")
</template>

<style scoped lang="scss">
.bar {
	background: #dedede;
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0 0.5rem;

	@media screen and (max-width: 1233px) {
		display: block;
	}
}

.card {
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
}

.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}
</style>
