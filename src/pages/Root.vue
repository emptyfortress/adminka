<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const split1 = ref(17)
const list = [
	{ id: 0, url: '/root/dvserver', label: 'Сервер приложений', selected: false },
	{ id: 1, url: '/root/webclient', label: 'Web-клиент', selected: false },
	{ id: 2, url: '', label: 'Служба фоновых операций', selected: false },
	{ id: 3, url: '', label: 'Сервис бизнес-процессов', selected: false },
	{ id: 4, url: '', label: 'Почтовый сервер', selected: false },
	{ id: 5, url: '', label: 'Полнотекстовый поиск', selected: false },
	{ id: 6, url: '', label: 'Виджеты', selected: false },
]
const select = (e: any) => {
	e.selected = true
}
const query = ref('')
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag Модули и конфигурации
		q-splitter.q-mt-lg(v-model="split1")
			template(v-slot:before)
				q-list
					q-item(clickable v-for="item in list" :key="item.id" :to="item.url")
						q-item-section(side)
							q-icon(name="mdi-code-block-braces")
						q-item-section
							q-item-label {{ item.label }}

			template(v-slot:after)
				.sel(v-if="route.name == 'root'") Выберите модуль
				router-view(v-slot="{ Component, route }" v-else)
					transition(name="page")
						component(:is="Component")
</template>

<style scoped lang="scss">
.q-item.q-router-link--active,
.q-item--active {
	background: var(--tree-selection);
	color: #0d47a1;
	font-weight: 600;
}
.sel {
	margin-left: 4rem;
	margin-top: 3rem;
	font-size: 1.2rem;
	color: #777;
	// text-align: center;
}
</style>
