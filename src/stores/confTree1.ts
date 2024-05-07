import { uid } from 'quasar'

const tree = [
	{
		id: 'conf',
		text: 'Конфигурации',
		drag: false,
		drop: true,
		type: 0,
		children: [
			{
				id: 'config1',
				text: 'Config 1',
				type: 2,
				drag: true,
				drop: false,
				icon: 'mdi-code-braces',
				env: 'dev',
			},
			{
				id: 'config2',
				text: 'Config 2',
				type: 2,
				drag: true,
				drop: false,
				icon: 'mdi-code-braces',
				env: 'prod',
			},
			{
				id: 'config3',
				text: 'Config 3',
				type: 2,
				drag: true,
				drop: false,
				icon: 'mdi-code-braces',
				env: 'test',
			},
		],
	},
	{
		id: 'servers',
		text: 'Серверы',
		drag: false,
		drop: true,
		type: 0,
		children: [
			{
				id: uid(),
				text: 'DVM',
				type: 3,
				icon: 'mdi-penguin',
				env: 'dev',
				drag: true,
				drop: false,
				selected: false,
				children: [],
			},
			{
				id: uid(),
				text: '103pc0103',
				type: 3,
				icon: 'mdi-penguin',
				env: 'test',
				drag: true,
				drop: false,
				selected: false,
				children: [],
			},
			{
				id: uid(),
				text: 'Группа 1',
				type: 4,
				icon: 'mdi-folder-outline',
				drag: true,
				drop: true,
				selected: false,
				children: [
					{
						id: uid(),
						text: '102pc0102',
						type: 3,
						icon: 'mdi-microsoft-windows-classic',
						env: 'test',
						drag: true,
						drop: false,
						selected: false,
						children: [],
					},
					{
						id: uid(),
						text: '104pc0104',
						type: 3,
						icon: 'mdi-penguin',
						env: 'prod',
						drag: true,
						drop: false,
						selected: false,
						children: [],
					},
				],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				env: 'dev',
				drag: true,
				drop: false,
				text: '106pc0106',
				type: 3,
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-microsoft-windows-classic',
				env: 'test',
				drag: true,
				drop: false,
				text: 'DV-test',
				type: 3,
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				env: 'test',
				drag: true,
				text: 'DVM-new',
				drop: false,
				type: 3,
				selected: false,
				children: [],
			},
			{
				id: uid(),
				icon: 'mdi-penguin',
				env: 'dev',
				drag: true,
				drop: false,
				text: 'DV-main',
				type: 3,
				selected: false,
				children: [],
			},
		],
	},
]

export { tree }
