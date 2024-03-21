<script setup lang="ts">
import { useRoute } from 'vue-router'
import Licence from '@/components/setupcomponent/Licence.vue'
import Database from '@/components/setupcomponent/Database.vue'

const route = useRoute()
</script>

<template lang="pug">
.treepage
	#top.mainzag
		div {{ route.params.id }}

	#bd.grid
		.section Базы данных
		Database
		#licence.section Лицензия
		Licence

</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: start;
	column-gap: 3rem;
	row-gap: 5rem;
}
.full {
	grid-column: 1/-1;
}
</style>
