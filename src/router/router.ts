import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface Bread {
		label: string
		to: string
		icon?: string
	}
	interface RouteMeta {
		title?: string
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
			path: '/root',
			name: 'root',
			component: () => import('@/pages/Root.vue'),
			meta: { title: 'Серверы', bread: [{ label: 'Dashboard', to: '/' }] },
			children: [
				{
					path: ':id',
					name: 'machine',
					component: () => import('@/components/tree/Zaglushka.vue'),
					props: true,
					meta: { title: 'Сервер', bread: [{ label: 'Dashboard', to: '/' }] },
					children: [],
				},
			],
		},
		{
			path: '/root/:id/appserver',
			name: 'appserver',
			component: () => import('@/pages/Appserver.vue'),
			props: true,
			meta: {
				title: 'Сервер приложений',
				bread: [
					{
						label: 'Сервер приложений',
						to: '',
					},
				],
			},
		},
		{
			path: '/root/:id/appserver/:bd',
			name: 'db',
			component: () => import('@/components/tree/InsideDB.vue'),
			props: true,
			meta: {
				title: 'База данных',
				bread: [
					{
						label: 'Сервер приложений',
						to: 'appserver',
					},
					{
						label: 'База данных',
						to: 'database',
					},
					{
						label: 'Ag',
						to: '',
					},
				],
			},
		},

		{
			path: '/setup0',
			name: 'configserver',
			component: () => import('@/components/Configuration1.vue'),
			meta: { title: 'Конфигурации', bread: [{ label: 'Dashboard', to: '/' }] },
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
