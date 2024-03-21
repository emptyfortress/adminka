import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
// import External from '@/components//setupcomponent/External.vue'
// import EditDatabase from '@/components/setupcomponent/EditDatabase.vue'
// import CreateBd from '@/components/wizard/CreateBd.vue'

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
					path: 'appserver',
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
					path: 'appserver/configurations/:id',
					component: () => import('@/components/tree/AppConfig.vue'),
				},
			],
		},
		{
			path: '/database/:id',
			name: 'database',
			component: () => import('@/components/tree/InsideDB.vue'),
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
			path: '/setup',
			component: () => import('@/pages/Setup.vue'),
			meta: {
				title: 'Модули',
			},
			children: [
				{
					path: '',
					component: () => import('@/components/SetupRoot.vue'),
					meta: {
						title: 'Модули',
					},
				},
				{
					path: 'configuration',
					name: 'configuration',
					component: () => import('@/components/Configuration.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: 'bprocess',
					name: 'bprocess',
					component: () => import('@/components/Bprocess.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: 'dvserver1',
					name: 'dvserver1',
					component: () => import('@/components/Dvserver1.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: 'connection',
					name: 'connecton',
					component: () => import('@/components/Connection.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: 'email',
					name: 'email',
					component: () => import('@/components/Email.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: 'worker',
					name: 'worker',
					component: () => import('@/components/Worker.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: 'webclient',
					name: 'webclient',
					component: () => import('@/components/Webclient.vue'),
					meta: {
						title: 'Модули',
						nav: true,
					},
				},
				{
					path: '/ext',
					name: 'external',
					component: () => import('@/components/setupcomponent/External.vue'),
					// component: External,
					meta: {
						title: 'Вкладка',
						nav: false,
					},
				},
				{
					path: '/archive',
					name: 'archive',
					component: () => import('@/components/setupcomponent/Archive.vue'),
					meta: {
						title: 'Вкладка',
						nav: false,
					},
				},
			],
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
