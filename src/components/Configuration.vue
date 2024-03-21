<script setup lang="ts">
import { ref } from 'vue'
import ConfigPanel0 from '@/components/ConfigPanel0.vue'
import ConfigPanel1 from '@/components/ConfigPanel1.vue'
import { useConfig } from '@/stores/configuration'

const config = useConfig()
const tabs = ref('0')
</script>

<template lang="pug">
div
	.zag Конфигурации и компьютеры
	.bar
		q-chip(color="warning") Всего конфигураций: {{ config.totalConfigs }}
		q-btn.plus(v-if="tabs == '0'" flat round dense icon="mdi-plus-circle" @click="")
			q-tooltip Добавить конфигурацию
		q-space
		.alltab
			q-tabs.text-secondary(v-model="tabs" active-color="primary" inline-label)
				q-tab(label="Конфигурации" name="0")
				q-tab(label="Компьютеры" name="1")
	q-card
		q-tab-panels(v-model="tabs" animated)
			q-tab-panel(name="0")
				ConfigPanel0
			q-tab-panel(name="1")
				ConfigPanel1
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

.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}

.q-tab-panels {
	background: transparent;
}

:deep(.q-card) {
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	// background: #f2f3ef;
}
</style>
