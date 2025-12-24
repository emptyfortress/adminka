<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const localDatabases = ref([] as typeof store.databases)

localDatabases.value = JSON.parse(JSON.stringify(store.databases))
</script>

<template lang="pug">
	div Выберите базу данных, для подключения
	q-list
		q-item(clickable tag='label' v-for="item in localDatabases" :key='item.psevdo')
			q-item-section
				.row.items-center
					q-icon.q-mr-sm(name="mdi-database-outline" color="secondary" size='16px')
					span {{ item.psevdo }}
			q-item-section
				.row.items-center
					q-icon.q-mr-sm(name="mdi-server-network-outline" color="secondary" size='16px')
					|{{ item.server }}
			q-item-section(side)
				q-checkbox(dense v-model="item.active" size="sm")
</template>
