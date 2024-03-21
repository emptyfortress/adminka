<template lang="pug">
q-page(padding)
	transition(name="slide-top")
		.nav(v-if="route.meta.nav")
			q-btn(round color="secondary" size="sm" @click="router.push('/setup1')")
				q-icon(name="mdi-arrow-left" color="white")
			router-link(v-for="item in items" :to="item.to").bl {{ item.label }}
				q-tooltip(v-if="item.tooltip") {{ item.tooltip }}

	router-view(v-slot="{ Component, route }")
		transition(name="slide-left" mode="out-in")
			component(:is="Component")

</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const items = [
	// { id: 0, label: 'Сервер DV', to: '/setup/dvserver' },
	// { id: 7, label: 'Конфигурации  компьютеры', to: '/setup/configuration' },
	{ id: 1, label: 'Сервер приложений', to: '/setup/dvserver1' },
	// { id: 2, label: 'Соединения', to: '/setup/connection' },
	{ id: 3, label: 'Почтовый сервер', to: '/setup/email' },
	{
		id: 4,
		label: 'СФО',
		to: '/setup/worker',
		tooltip: 'Служба фоновых операций',
	},
	{
		id: 5,
		label: 'СУБП',
		to: '/setup/bprocess',
		tooltip: 'Служба управления бизнес-процессами',
	},
	{ id: 6, label: 'Web-клиент', to: '/setup/webclient' },
]
</script>

<style scoped lang="scss">
.nav {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 2rem;
}

.bl1 {
	font-size: 0.8rem;
	color: $secondary;
	text-decoration: none;
	opacity: 0.7;
	margin-left: 0.5rem;
}

.bl {
	background: var(--bg-drawer);
	font-size: 0.8rem;
	color: $secondary;
	padding: 4px 10px;
	border: 1px dotted $secondary;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		border: 1px solid $primary;
		color: #000;
	}
}

.router-link-active {
	color: #fff;
	background: $secondary;

	&:hover {
		background: $secondary;
		color: white;
		border: 1px solid $secondary;
	}
}
</style>
