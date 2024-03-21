<script setup lang="ts"></script>

<template lang="pug">
.all
	.arch
		.title Статус
		div В БД используются расширенные метаданные.
</template>

<style scoped lang="scss">
.all {
	width: 900px;
	margin: 0 auto;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 250px 1fr;
	align-items: center;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.title {
	font-size: 0.8rem;
	text-transform: uppercase;
	color: $secondary;
}
</style>
