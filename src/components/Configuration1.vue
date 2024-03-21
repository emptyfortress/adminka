<script setup lang="ts">
import { ref } from 'vue'
import ConfigTree from '@/components/ConfigTree.vue'
</script>

<template lang="pug">
q-page(padding)
	.zag Конфигурации и серверы
	.bar
		div
			q-chip(color="warning") Всего конфигураций: 5
			q-btn.plus(flat round dense icon="mdi-plus-circle")
				q-tooltip Добавить конфигурацию
		q-chip(color="warning") Всего серверов: 8

	q-card
		ConfigTree()
</template>

<style scoped lang="scss">
.bar {
	background: #dedede;
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;

	@media screen and (max-width: 1233px) {
		display: block;
	}
}

.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}

:deep(.q-card) {
	padding: 1rem;
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	background: #fff;
}
</style>
