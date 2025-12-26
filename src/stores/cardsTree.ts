const cards = [
	{
		key: 'proc_mgmt',
		label: 'Управление процессами',
		children: [
			{
				key: 'biz_proc',
				label: 'Бизнес-процесс',
				children: [
					{
						key: 'bp_links',
						label: 'Связи',
						children: [
							{
								key: 'link_func_id',
								label: 'Идентификатор связанной функции',
							},
						],
					},
					{
						key: 'bp_queue',
						label: 'Очередь сообщений процесса',
						children: [],
					},
				],
			},
		],
	},
	{
		key: 'sys_cards',
		label: 'Системные карточки',
		children: [
			{
				key: 'file_card_ver',
				label: 'Карточка файла с версиями',
				children: [
					{
						key: 'file_info',
						label: 'Общая информация',
						children: [
							{
								key: 'f_parent_id',
								label: 'Идентификатор родительской карточки',
							},
							{
								key: 'f_curr_ver_id',
								label: 'Идентификатор текущей версии',
							},
							{
								key: 'f_next_ver_num',
								label: 'Номер следующей версии',
							},
							{
								key: 'f_curr_ver_num',
								label: 'Номер текущей версии',
							},
							{
								key: 'f_user_id',
								label: 'Идентификатор пользователя',
							},
							{
								key: 'f_change_date',
								label: 'Дата изменения файла текущей версии',
							},
						],
					},
					{
						key: 'file_comments',
						label: 'Комментарии файла',
						children: [],
					},
					{
						key: 'file_versions',
						label: 'Версии',
						children: [],
					},
					{
						key: 'file_assoc',
						label: 'Ассоциированные файлы',
						children: [],
					},
					{
						key: 'file_ver_comm',
						label: 'Комментарии версии',
						children: [],
					},
				],
			},
		],
	},
	{
		key: 'base_objects',
		label: 'Базовые объекты',
		children: [
			{
				key: 'list_task_links',
				label: 'Список ссылок на карточки заданий',
				children: [],
			},
			{
				key: 'dep_card',
				label: 'Карточка подразделения',
				children: [],
			},
			{
				key: 'ref_row_card',
				label: 'Карточка строки справочника',
				children: [
					{
						key: 'ref_main_info',
						label: 'Основная информация',
						children: [
							{
								key: 'ref_access_group',
								label: 'Группа ознакомления',
							},
						],
					},
					{
						key: 'ref_sys_props',
						label: 'Системные свойства',
						children: [],
					},
				],
			},
			{
				key: 'card_links_list',
				label: 'Список ссылок на карточки',
				children: [],
			},
			{
				key: 'counterparty_dep',
				label: 'Карточка подразделения контрагента',
				children: [],
			},
			{
				key: 'trust_sys_card',
				label: 'Системная карточка доверенности',
				children: [],
			},
			{
				key: 'employee_card',
				label: 'Карточка сотрудника',
				children: [],
			},
			{
				key: 'biz_calendar',
				label: 'Бизнес-календарь',
				children: [],
			},
			{
				key: 'counterparty_emp',
				label: 'Карточка сотрудника контрагента',
				children: [],
			},
		],
	},
	{
		key: 'approval_const',
		label: 'Конструктор согласований',
		children: [
			{
				key: 'appr_route',
				label: 'Маршрут согласования',
				children: [],
			},
			{
				key: 'appr_step',
				label: 'Этап согласования',
				children: [
					{
						key: 'as_extra_settings',
						label: 'Дополнительные настройки',
					},
					{
						key: 'as_extra_appr',
						label: 'Дополнительные согласующие',
					},
				],
			},
			{
				key: 'appr_result',
				label: 'Результат согласования',
				children: [],
			},
		],
	},
]
export { cards }
