import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface Bread {
		label: string
		to: string
		icon?: string
	}
	interface RouteMeta {
		title: string
		bread?: Bread[]
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: 'Admin console',
				bread: [{ label: 'Dashboard', to: '/' }],
			},
		},
		{
			path: '/hran',
			component: () => import('@/components/setupcomponent/Hran.vue'),
		},
		{
			path: '/calendar',
			name: 'calendar',
			component: () => import('@/components/Calendar.vue'),
			meta: { title: 'Calendar', bread: [{ label: 'Dashboard', to: '/' }] },
		},

		{
			path: '/setup0',
			name: 'configserver',
			component: () => import('@/components/Configuration1.vue'),
			meta: { title: 'Конфигурации', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/setup1',
			component: () => import('@/pages/Setup1.vue'),
			meta: {
				title: 'Модули',
			},
			children: [
				{
					path: '',
					component: () => import('@/components/tree/Module.vue'),
					meta: {
						title: 'Модули',
					},
				},
				{
					path: 'appserver/configurations',
					component: () => import('@/components/tree/Configurations.vue'),
				},
				{
					path: 'appserver/database',
					component: () => import('@/components/setupcomponent/Database.vue'),
					meta: {
						title: 'Модули',
					},
				},
			],
		},
		{
			path: '/database/:id',
			name: 'database',
			component: () => import('@/components/tree/InsideDB.vue'),
			props: true,
			meta: {
				title: 'Модули',
				bread: [
					{
						label: 'Базы данных',
						icon: 'mdi-arrow-left',
						to: 'appserver/configurations/SOL2016',
					},
				],
			},
		},
		{
			path: '/logs',
			name: 'logs',
			component: () => import('@/pages/Logs.vue'),
		},
	],
})

const DEFAULT_TITLE = 'Консоль управления DV'
router.beforeEach(to => {
	document.title = to.meta.title || DEFAULT_TITLE
})
