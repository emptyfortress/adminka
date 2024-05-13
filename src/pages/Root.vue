<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { tree } from '@/stores/serverTree'
import DragConfigTree from '@/components/common/DragConfigTree.vue'
import { useServ } from '@/stores/dvservConfig'
import { getMembers } from '@/utils/utils'
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'

const route = useRoute()
const split1 = ref(22)
const filter = ref('')
const select = (e: any) => {
	e.selected = true
}
const query = ref('')
const serv = useServ()

const current = computed(() => {
	const flat = getMembers(tree)
	return flat.find(e => e.text == route.params.id)
})
const headline = computed(() => {
	return route.name == 'root' ? 'Серверы' : route.params.id
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag
			q-icon.q-mr-sm(name="mdi-server-outline" v-if="!route.params.id")
			q-icon.q-mr-sm(:name="current.icon" v-else)
			span {{ headline }}
		q-splitter.q-mt-lg(v-model="split1")
			template(v-slot:before)
				.q-mx-lg
					q-input.q-mb-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
						template(v-slot:prepend)
							q-icon(name="mdi-magnify")

					DragConfigTree(:treeData="tree" :filter="filter" )

			template(v-slot:after)
				.q-mx-lg.q-my-sm
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
}
.zag .q-icon {
	transform: translateY(-3px);
}
</style>
