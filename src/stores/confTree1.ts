import { uid } from 'quasar'
const conf = [
	{
		id: 'root',
		label: 'Конфигурации',
		header: 'root',
		children: [
			{
				id: uid(),
				label: 'Config 1',
				icon: 'mdi-code-braces',
				env: 'dev',
				children: [],
			},
			{
				id: uid(),
				label: 'Config 2',
				icon: 'mdi-code-braces',
				env: 'dev',
				children: [],
			},
			{
				id: uid(),
				label: 'Config 3',
				icon: 'mdi-code-braces',
				env: 'prod',
				children: [],
			},
			{
				id: uid(),
				label: 'Test config',
				icon: 'mdi-code-braces',
				env: 'test',
				children: [],
			},
		],
	},
]

const servers = [
	{
		id: 'root',
		label: 'Серверы',
		header: 'root',
		children: [
			{
				id: uid(),
				label: 'DVM',
				icon: 'mdi-penguin',
				docker: true,
				selected: false,
				children: [],
			},
			{
				id: uid(),
				label: '103pc0103',
				icon: 'mdi-penguin',
				selected: false,
				children: [],
			},
			{
				id: uid(),
				label: '102pc0102',
				icon: 'mdi-microsoft-windows-classic',
				selected: false,
				children: [],
			},
			{
				id: uid(),
				label: '104pc0104',
				icon: 'mdi-penguin',
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				label: '106pc0106',
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-microsoft-windows-classic',
				label: 'DV-test',
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				label: 'DVM-new',
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				label: 'DV-main',
				selected: false,
				children: [],
			},
		],
	},
]

export { conf, servers }
