<template lang="pug">
q-page(padding)
	q-breadcrumbs
		q-breadcrumbs-el(label="Dashboard" to="/")
		q-breadcrumbs-el(label="Сессии")
	br
	br
	SessionTable

</template>

<script setup lang="ts">
import SessionTable from '@/components/SessionTable.vue'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
