<template lang="pug">
q-page(padding)
	q-breadcrumbs
		q-breadcrumbs-el(label="Dashboard" to="/")
		q-breadcrumbs-el(label="Логи")
	br
	br
	.zag Последние действия
	component(:is="LogTable")

</template>

<script setup lang="ts">
import LogTable from '@/components/LogTable.vue'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
