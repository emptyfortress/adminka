import { uid } from 'quasar'
const conf = [
	{
		id: 'root',
		label: 'Конфигурации',
		header: 'root',
		children: [
			{
				id: 'platform',
				label: 'Platform',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: uid(),
						label: 'Config 1',
						icon: 'mdi-code-braces',
						env: 'test',
						children: [
							{
								id: uid(),
								label: 'DVM',
								icon: 'mdi-penguin',
								env: 'test',
								docker: true,
								selected: false,
							},
							{
								id: uid(),
								label: '103pc0103',
								icon: 'mdi-penguin',
								env: 'test',
								selected: false,
							},
						],
					},
				],
			},
			{
				id: 'web',
				icon: 'mdi-folder-outline',
				label: 'Web-client',
				children: [
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 2',
						env: 'test',
						children: [
							{
								id: uid(),
								icon: 'mdi-microsoft-windows-classic',
								label: '102pc0102',
								env: 'test',
							},
							{
								id: uid(),
								icon: 'mdi-penguin',
								label: '104pc0104',
								env: 'test',
							},
						],
					},
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 3',
						env: 'prod',
						children: [
							{
								id: uid(),
								icon: 'mdi-penguin',
								label: '106pc0106',
								env: 'prod',
							},
						],
					},
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 4',
						env: 'dev',
						children: [
							{
								id: uid(),
								icon: 'mdi-microsoft-windows-classic',
								label: 'DV-test',
								env: 'dev',
							},
							{
								id: uid(),
								icon: 'mdi-penguin',
								docker: true,
								label: 'DVM-new',
								env: 'dev',
							},
						],
					},
				],
			},
			{
				id: uid(),
				label: 'Workflow',
				icon: 'mdi-folder-outline',
				children: [],
			},
			{
				id: uid(),
				label: 'Server DV',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 5',
						env: 'prod',
						children: [
							{
								id: uid(),
								icon: 'mdi-penguin',
								label: 'DV-main',
								env: 'prod',
							},
						],
					},
				],
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
				children: [
					{
						id: uid(),
						label: 'Config 1',
						icon: 'mdi-code-braces',
						env: 'test',
						module: 'platform',
					},
				],
			},
			{
				id: uid(),
				label: '103pc0103',
				icon: 'mdi-penguin',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 1',
						icon: 'mdi-code-braces',
						env: 'test',
						module: 'platform',
					},
				],
			},
			{
				id: uid(),
				label: '102pc0102',
				icon: 'mdi-microsoft-windows-classic',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 2',
						icon: 'mdi-code-braces',
						env: 'test',
						module: 'web-client',
					},
				],
			},
			{
				id: uid(),
				label: '104pc0104',
				icon: 'mdi-penguin',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 2',
						icon: 'mdi-code-braces',
						env: 'test',
						module: 'web-client',
					},
				],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				label: '106pc0106',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 3',
						icon: 'mdi-code-braces',
						env: 'prod',
						module: 'web-client',
					},
				],
			},
			{
				id: uid(),
				icon: 'mdi-microsoft-windows-classic',
				label: 'DV-test',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 4',
						icon: 'mdi-code-braces',
						env: 'dev',
						module: 'web-client',
					},
				],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				label: 'DVM-new',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 4',
						icon: 'mdi-code-braces',
						env: 'dev',
						module: 'web-client',
					},
				],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				label: 'DV-main',
				selected: false,
				children: [
					{
						id: uid(),
						label: 'Config 5',
						icon: 'mdi-code-braces',
						env: 'prod',
						module: 'server',
					},
				],
			},
		],
	},
]

export { conf, servers }
