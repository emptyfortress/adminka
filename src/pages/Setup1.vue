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
	selected.value = e.id
	let ind = expanded.value.findIndex(item => item == e.id)
	if (e.children.length && ind > -1) {
		expanded.value.splice(ind, 1)
	} else expanded.value.push(e.id)
}
router.afterEach(to => {
	if (!!to.hash) {
		nextTick(() => {
			document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
		})
	}
})
const save = ref(false)
const calcClass = (e: any) => {
	return e.children.length > 0 ? 'text-weight-bold' : ''
}
</script>

<template lang="pug">
q-page(padding)
	.container
		q-input.q-mb-md(v-model="query" dense standout clearable placeholder="Найти настройку")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")
		.grid
			div
				q-scroll-area.left
					q-tree(:nodes="tree.tree"
						v-model:selected="selected"
						v-model:expanded="expanded"
						selected-color="blue-10"
						no-selection-unset
						no-connectors
						node-key="id")

						template(v-slot:default-header="prop")
							.node(@click="goto(prop.node)" :class="calcClass(prop.node)")
								label {{ prop.node.label }}

			div
				.q-gutter-x-sm.text-right.q-mb-sm(v-if="save")
					q-btn(flat color="primary" label="Отмена" size="sm") 
					q-btn(unelevated color="primary" label="Сохранить изменения" size="sm") 
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
	column-gap: 4rem;
	row-gap: 0.5rem;
}
:deep(.q-tree__node--selected) {
	border: 1px solid hsl(221 41% 73% / 1);
	background: var(--tree-selection);
	// background: $secondary;
	// color: white;
}
.left {
	height: calc(100vh - 200px);
	width: 200px;
}
.right {
	height: calc(100vh - 175px);
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
</style>
