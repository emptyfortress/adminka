<template lang="pug">
q-page
	.grid
		q-card(v-for="n in 4").flex.flex-center
			div Это заглушка
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto auto;
	gap: 1rem;
	height: calc(100vh - 64px - 64px);
}

.q-page {
	padding: 1rem;
}

.q-card {
	height: 100%;

	div {
		font-size: 2rem;
		color: #ccc;
	}
}
</style>
