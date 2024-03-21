<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTree } from '@/stores/tree'

const tree = useTree()

const selected = ref('appserver')
const expanded = ref(['appserver'])
const query = ref('')

const router = useRouter()
const route = useRoute()

const goto = (e: Config) => {
	if (!!e.url) {
		router.push(e.url)
	}
}
router.afterEach(to => {
	if (!!to.hash) {
		// document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
		// setTimeout(() => {
		// 	document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
		// }, 300)
		nextTick(() => {
			document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
		})
	}
})
const save = ref(false)
</script>

<template lang="pug">
q-page(padding)
	.container
		.grid
			div
				q-input.q-mb-md(v-model="query" dense)
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")
				q-scroll-area.left
					q-tree(:nodes="tree.tree"
						v-model:selected="selected"
						v-model:expanded="expanded"
						selected-color="blue-10"
						no-selection-unset
						default-expand-all
						node-key="id")

						template(v-slot:default-header="prop")
							.node(@click="goto(prop.node)")
								label {{ prop.node.label }}

			div
				.q-gutter-x-sm.text-right.q-mb-sm(v-if="save")
					q-btn(flat color="primary" label="Отмена" size="sm") 
					q-btn(unelevated color="primary" label="Сохранить изменения" size="sm") 
				q-scroll-area.right(:class="{save: save}")
					router-view(v-slot="{ Component, route }")
						component(:is="Component")
						// transition(name="page")
						// 	component(:is="Component")

	</template>

<style scoped lang="scss">
.container {
	// max-width: 1280px;
	// margin: 0 auto;
}
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: start;
	column-gap: 4rem;
	row-gap: 0.5rem;
}
:deep(.q-tree__node--selected) {
	background: var(--tree-selection);
}
.left {
	height: calc(100vh - 200px);
	width: 300px;
}
.right {
	height: calc(100vh - 145px);
	&.save {
		height: calc(100vh - 145px - 32px);
	}
}
.q-tree {
	font-size: 0.8rem;
}
</style>
