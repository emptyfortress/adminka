<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { tree } from '@/stores/serverTree'
import DragConfigTree from '@/components/common/DragConfigTree.vue'

const route = useRoute()
const split1 = ref(17)
const filter = ref('')
// const list = [
// 	{ id: 0, url: '/root/dvserver', label: 'Сервер приложений', selected: false },
// 	{ id: 1, url: '/root/par/webclient', label: 'Web-клиент', selected: false },
// 	{
// 		id: 2,
// 		url: '/root/par/worker',
// 		label: 'Служба фоновых операций',
// 		selected: false,
// 	},
// 	{
// 		id: 3,
// 		url: '/root/par/business-process',
// 		label: 'Сервис бизнес-процессов',
// 		selected: false,
// 	},
// 	{
// 		id: 4,
// 		url: '/root/par/mailserver',
// 		label: 'Почтовый сервер',
// 		selected: false,
// 	},
// 	{
// 		id: 5,
// 		url: '/root/par/search',
// 		label: 'Полнотекстовый поиск',
// 		selected: false,
// 	},
// 	{ id: 6, url: '/root/par/widgets', label: 'Виджеты', selected: false },
// ]
const select = (e: any) => {
	e.selected = true
}
const query = ref('')
const headline = ref('Cерверы')
const goto = (e: any) => {
	headline.value = e.label
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag {{ headline }}
		q-splitter.q-mt-lg(v-model="split1")
			template(v-slot:before)
				q-input.q-mb-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")

				DragConfigTree(:treeData="tree" :filter="filter" )


			template(v-slot:after)
				.sel(v-if="route.name == 'root'") Выберите сервер
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
