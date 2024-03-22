<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'

const rightDrawer = ref(false)
const ru = ref(true)
// const toggleRightDrawer = () => {
// 	rightDrawer.value = !rightDrawer.value
// }

const $q = useQuasar()
const dark = () => {
	$q.dark.toggle()
}
</script>

<template lang="pug">
q-layout(view="hHh LpR lFr")
	q-header.head
		q-toolbar
			img(src="@/assets/img/adm-logo.svg")
			q-toolbar-title.text-uppercase Docsvision 5 консоль управления
			//- q-btn(flat round icon="mdi-brightness-4" @click="dark").q-mr-md
			q-btn(dense flat round  @click="ru = !ru").q-mr-md
				img(v-if="ru" src="@/assets/img/russia.svg" width="26")
				img(v-else src="@/assets/img/us.svg" width="26")
			q-avatar(color="blue-2" size="32px")
				img(src="@/assets/img/user0.svg")
				q-menu
					q-item(clickable v-close-popup)
						q-item-section(side).name
						q-item-section Орлов&nbsp;П.С.
					q-item(clickable v-close-popup)
						q-item-section О программе
					q-item(clickable v-close-popup)
						q-item-section Выход
			//- q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer")

	Drawer
	component(:is="RDrawer" :show="rightDrawer")

	q-page-container
		q-page
			router-view(v-slot="{ Component, route }")
				transition(name="fade")
					component(:is="Component")

	// q-footer(bordered).footer
		div .dv admin panel
		div memory 80%
		div v.0.43.1
</template>

<style scoped lang="scss">
.head {
	background-color: var(--bg-header);
	height: 64px;
	color: var(--text-color);
	padding-left: 1rem;
	padding-right: 1rem;
	line-height: 64px;
	border-bottom: 1px solid #fff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	@media screen and (max-width: 1024px) {
		height: 48px;
		line-height: 48px;
	}
}
.name::before {
	content: '';
	width: 8px;
	height: 8px;
	border-radius: 8px;
	background: teal;
	display: inline-block;
}
.footer {
	height: 32px;
	line-height: 32px;
	background: var(--bg-drawer);
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--text-color);
	padding: 0 1rem;
	font-size: 0.8rem;
}
</style>
