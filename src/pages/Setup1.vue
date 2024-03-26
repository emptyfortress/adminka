<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTree } from '@/stores/tree'
import { useStore } from '@/stores/store'

const store = useStore()
const tree = useTree()

const selected = ref('appserver')
const expanded = ref(['appserver'])
const query = ref('')

const router = useRouter()
const route = useRoute()

const goto = (e: Config) => {
	selected.value = e.id
	let ind = expanded.value.findIndex(item => item == e.id)
	if (!!e.children && ind > -1) {
		expanded.value.splice(ind, 1)
	} else expanded.value.push(e.id)

	router.push(e.url)
}
router.afterEach(to => {
	if (!!to.hash) {
		nextTick(() => {
			document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
		})
	}
})
const save = ref(true)
const calcClass = (e: any) => {
	return e.children?.length > 0 ? 'text-weight-bold' : ''
}
const tabs = ref('one')
const sel = computed(() => {
	return 'дфлоыдлво'
})
</script>

<template lang="pug">
q-page.q-px-md.q-pt-sm
	.container
		q-input(v-model="query" dense standout clearable placeholder="Найти настройку")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

		.grid
			div

				q-scroll-area.left
					q-tree(:nodes="tree.tree"
						v-model:selected="selected"
						v-model:expanded="expanded"
						selected-color="blue-10"
						icon="mdi-chevron-right"
						no-selection-unset
						no-connectors
						node-key="id")

						template(v-slot:default-header="prop")
							.node(@click="goto(prop.node)" :class="calcClass(prop.node)")
								label {{ prop.node.label }}
			div
				.selector(v-if="route.path !== '/setup1/appserver/configurations'")
					q-select(v-model="sel" dense outlined bg-color="white")
					div
						q-btn(flat color="primary" label="Отмена" @click="")
						q-btn(unelevated color="primary" label="Сохранить" @click="")
				q-separator

				q-scroll-area.right(:class="{save: save}")
					router-view(v-slot="{ Component, route }")
						component(:is="Component")

	</template>

<style scoped lang="scss">
.container {
	max-width: 1440px;
	margin: 0 auto;
}
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
:deep(.q-tree__node--selected) {
	border: 1px solid hsl(221 41% 73% / 1);
	background: var(--tree-selection);
}
.left {
	height: calc(100vh - 175px);
	width: 230px;
	padding-top: 0.5rem;
	padding-right: 1rem;
	border-right: 1px solid #ccc;
}
.right {
	height: calc(100vh - 175px);
	// padding-top: 1rem;
	&.save {
		height: calc(100vh - 145px - 32px);
	}
}
.q-tree {
	font-size: 0.8rem;
}
:deep(.q-tree__node) {
	padding-bottom: 0;
}
:deep(.q-tree__children) {
	padding-left: 0px;
}
.divider {
	width: 3px;
	height: 100%;
	border-left: 2px dotted grey;
	// background: $secondary;
}
.selector {
	display: flex;
	align-items: center;
	justify-content: space-between;
	// background: pink;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
