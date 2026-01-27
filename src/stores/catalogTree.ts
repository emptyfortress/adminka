const newcatalog = [
	{
		label: 'Делопроизводство',
		key: 'delo',
		disabled: true,
		children: [],
	},
	{
		label: 'WebClientLibrary',
		key: 'wclib',
		disabled: true,
		children: [],
	},
	{
		label: 'Системные карточки',
		key: 'sys',
		disabled: true,
		children: [],
	},
	{
		label: 'Базовые объекты',
		key: 'basics',
		children: [
			{
				label: 'Справочник сотрудников',
				key: 'basics.employees',
				children: [
					{
						label: 'Подразделения',
						key: 'basics.employees.departments',
						children: [
							{
								label: 'Идентификатор строки',
								key: 'basics.employees.departments.id',
								children: [],
								disabled: true,
							},
							{
								label: 'Название',
								key: 'basics.employees.departments.name',
								children: [],
							},
							{
								label: 'Полное наименование',
								key: 'basics.employees.departments.fullName',
								children: [],
							},
							{
								label: 'Тип подразделения',
								key: 'basics.employees.departments.type',
								disabled: true,
								children: [],
							},
							{
								label: 'Руководитель (идентификатор)',
								key: 'basics.employees.departments.managerId',
								disabled: true,
								children: [],
							},
							{
								label: 'Телефон',
								key: 'basics.employees.departments.phone',
								children: [],
							},
							{
								label: 'Факс',
								key: 'basics.employees.departments.fax',
								children: [],
							},
							{
								label: 'E-mail',
								key: 'basics.employees.departments.email',
								children: [],
							},
							{
								label: 'Телекс',
								key: 'basics.employees.departments.telex',
								children: [],
							},
							{
								label: 'ИНН',
								key: 'basics.employees.departments.inn',
								children: [],
							},
							{
								label: 'КПП',
								key: 'basics.employees.departments.kpp',
								disabled: true,
								children: [],
							},
							{
								label: 'ОГРН',
								key: 'basics.employees.departments.ogrn',
								disabled: true,
								children: [],
							},
							{
								label: 'ОКПО',
								key: 'basics.employees.departments.okpo',
								disabled: true,
								children: [],
							},
							{
								label: 'ОКОНХ',
								key: 'basics.employees.departments.okonh',
								disabled: true,
								children: [],
							},
							{
								label: 'Комментарии',
								key: 'basics.employees.departments.comment',
								children: [],
							},
							{
								label: 'Индекс подразделения',
								key: 'basics.employees.departments.index',
								disabled: true,
								children: [],
							},
							{
								label: 'Вид подразделения',
								key: 'basics.employees.departments.kind',
								disabled: true,
								children: [],
							},
							{
								label: 'Вид сотрудника',
								key: 'basics.employees.departments.employeeKind',
								disabled: true,
								children: [],
							},
							{
								label: 'Путь в Active Directory',
								key: 'basics.employees.departments.adPath',
								disabled: true,
								children: [],
							},
							{
								label: 'Недоступно',
								key: 'basics.employees.departments.disabled',
								disabled: true,
								children: [],
							},

							{
								label: 'Сотрудники подразделения',
								key: 'basics.employees.departments.staff',
								children: [
									{
										label: 'Идентификатор строки',
										key: 'basics.employees.departments.staff.id',
										disabled: true,
										children: [],
									},
									{
										label: 'Фамилия',
										key: 'basics.employees.departments.staff.lastName',
										children: [],
									},
									{
										label: 'Имя',
										key: 'basics.employees.departments.staff.firstName',
										children: [],
									},
									{
										label: 'Отчество',
										key: 'basics.employees.departments.staff.middleName',
										children: [],
									},
									{
										label: 'Должность (идентификатор)',
										key: 'basics.employees.departments.staff.positionId',
										disabled: true,
										children: [],
									},
									{
										label: 'Название должности',
										key: 'basics.employees.departments.staff.positionName',
										children: [],
									},
									{
										label: 'Учетная запись',
										key: 'basics.employees.departments.staff.account',
										disabled: true,
										children: [],
									},
									{
										label: 'Руководитель (идентификатор)',
										key: 'basics.employees.departments.staff.managerId',
										disabled: true,
										children: [],
									},
									{
										label: 'Имя руководителя',
										key: 'basics.employees.departments.staff.managerFirstName',
										children: [],
									},
									{
										label: 'Отчество руководителя',
										key: 'basics.employees.departments.staff.managerMiddleName',
										children: [],
									},
									{
										label: 'Фамилия руководителя',
										key: 'basics.employees.departments.staff.managerLastName',
										children: [],
									},
									{
										label: 'E-mail',
										key: 'basics.employees.departments.staff.email',
										children: [],
									},
									{
										label: 'Телефон',
										key: 'basics.employees.departments.staff.phone',
										children: [],
									},
									{
										label: 'Мобильный телефон',
										key: 'basics.employees.departments.staff.mobile',
										children: [],
									},
									{
										label: 'Домашний телефон',
										key: 'basics.employees.departments.staff.homePhone',
										children: [],
									},
									{
										label: 'IP-телефон',
										key: 'basics.employees.departments.staff.ipPhone',
										children: [],
									},
									{
										label: 'Факс',
										key: 'basics.employees.departments.staff.fax',
										children: [],
									},
									{
										label: 'Номер комнаты',
										key: 'basics.employees.departments.staff.room',
										disabled: true,
										children: [],
									},
									{
										label: 'Пол',
										key: 'basics.employees.departments.staff.gender',
										disabled: true,
										children: [],
									},
									{
										label: 'Дата рождения',
										key: 'basics.employees.departments.staff.birthDate',
										disabled: true,
										children: [],
									},
									{
										label: 'Номер документа',
										key: 'basics.employees.departments.staff.docNumber',
										children: [],
									},
									{
										label: 'Кем выдан документ',
										key: 'basics.employees.departments.staff.docIssuer',
										children: [],
									},
									{
										label: 'Комментарии',
										key: 'basics.employees.departments.staff.comment',
										children: [],
									},
									{
										label: 'Отображаемая строка',
										key: 'basics.employees.departments.staff.display',
										children: [],
									},
									{
										label: 'SID учетной записи',
										key: 'basics.employees.departments.staff.sid',
										disabled: true,
										children: [],
									},
									{
										label: 'Системное имя учетной записи',
										key: 'basics.employees.departments.staff.systemName',
										disabled: true,
										children: [],
									},
									{
										label: 'Тип маршрутизации',
										key: 'basics.employees.departments.staff.routingType',
										disabled: true,
										children: [],
									},
									{
										label: 'Статус',
										key: 'basics.employees.departments.staff.status',
										disabled: true,
										children: [],
									},
									{
										label: 'Активный сотрудник',
										key: 'basics.employees.departments.staff.active',
										disabled: true,
										children: [],
									},
									{
										label: 'Недоступно',
										key: 'basics.employees.departments.staff.disabled',
										disabled: true,
										children: [],
									},
									{
										label: 'Недоступно для поиска',
										key: 'basics.employees.departments.staff.hidden',
										disabled: true,
										children: [],
									},
									{
										label: 'Важность',
										key: 'basics.employees.departments.staff.priority',
										disabled: true,
										children: [],
									},
									{
										label: 'Табельный номер',
										key: 'basics.employees.departments.staff.tabNumber',
										children: [],
									},
									{
										label: 'Идентификационный код',
										key: 'basics.employees.departments.staff.code',
										disabled: true,
										children: [],
									},
									{
										label: 'Вид сотрудника для карточки',
										key: 'basics.employees.departments.staff.cardKind',
										disabled: true,
										children: [],
									},
									{
										label: 'Статус неактивности',
										key: 'basics.employees.departments.staff.inactiveStatus',
										disabled: true,
										children: [],
									},
									{
										label: 'Дата начала',
										key: 'basics.employees.departments.staff.startDate',
										disabled: true,
										children: [],
									},
									{
										label: 'Дата окончания',
										key: 'basics.employees.departments.staff.endDate',
										disabled: true,
										children: [],
									},
									{
										label: 'Показывать окно сертификата',
										key: 'basics.employees.departments.staff.showCert',
										disabled: true,
										children: [],
									},
									{
										label: 'Требуется доверенность для подписи документов',
										key: 'basics.employees.departments.staff.proxyRequired',
										disabled: true,
										children: [],
									},
								],
							},
						],
					},

					{
						label: 'Должности',
						key: 'basics.employees.positions',
						children: [
							{
								label: 'Идентификатор строки',
								key: 'basics.employees.positions.id',
								disabled: true,
								children: [],
							},
							{
								label: 'Название должности',
								key: 'basics.employees.positions.name',
								children: [],
							},
						],
					},

					{
						label: 'Пользовательские настройки',
						key: 'basics.employees.userSettings',
						disabled: true,
						children: [
							{
								label: 'Идентификатор строки',
								key: 'basics.employees.userSettings.id',
								disabled: true,
								children: [],
							},
							{
								label: 'Режим поиска',
								key: 'basics.employees.userSettings.searchMode',
								disabled: true,
								children: [],
							},
							{
								label: 'Поиск для',
								key: 'basics.employees.userSettings.searchFor',
								disabled: true,
								children: [],
							},
							{
								label: 'Разрешить редактирование в режиме выбора',
								key: 'basics.employees.userSettings.allowEdit',
								disabled: true,
								children: [],
							},
						],
					},
				],
			},
		],
	},
	{
		label: 'Справочник видов карточек',
		key: 'cardTypes',
		children: [
			{
				label: 'Типы карточек',
				key: 'cardTypes.types',
				children: [
					{
						label: 'Идентификатор типа карточки',
						key: 'cardTypes.types.id',
						disabled: true,
						children: [],
					},
					{
						label: 'URL справки',
						key: 'cardTypes.types.helpUrl',
						disabled: true,
						children: [],
					},
					{
						label: 'Тема справки',
						key: 'cardTypes.types.helpTopic',
						children: [],
					},
					{
						label: 'Виды карточек',
						key: 'cardTypes.types.kinds',
						children: [
							{
								label: 'Название',
								key: 'cardTypes.types.kinds.name',
								children: [],
							},
							{
								label: 'Сценарии',
								key: 'cardTypes.types.kinds.scenarios',
								disabled: true,
								children: [],
							},
							{
								label: 'Сервисы',
								key: 'cardTypes.types.kinds.services',
								disabled: true,
								children: [],
							},
							{
								label: 'Расширенные настройки',
								key: 'cardTypes.types.kinds.advancedSettings',
								disabled: true,
								children: [],
							},
							{
								label: 'Настройки создания',
								key: 'cardTypes.types.kinds.createSettings',
								children: [
									{
										label: 'Режим',
										key: 'cardTypes.types.kinds.createSettings.mode',
										disabled: true,
										children: [],
									},
									{
										label: 'Имя режима',
										key: 'cardTypes.types.kinds.createSettings.modeName',
										disabled: true,
										children: [],
									},
									{
										label: 'Использовать вид создателя',
										key: 'cardTypes.types.kinds.createSettings.useCreatorView',
										disabled: true,
										children: [],
									},
									{
										label: 'Со всеми дочерними элементами',
										key: 'cardTypes.types.kinds.createSettings.withChildren',
										disabled: true,
										children: [],
									},
									{
										label: 'Расположение',
										key: 'cardTypes.types.kinds.createSettings.location',
										disabled: true,
										children: [],
									},
									{
										label: 'Показывать диалог',
										key: 'cardTypes.types.kinds.createSettings.showDialog',
										disabled: true,
										children: [],
									},
									{
										label: 'Идентификатор шаблона',
										key: 'cardTypes.types.kinds.createSettings.templateId',
										disabled: true,
										children: [],
									},
									{
										label: 'Операция',
										key: 'cardTypes.types.kinds.createSettings.operation',
										disabled: true,
										children: [],
									},
								],
							},
						],
					},
				],
			},
			{
				label: 'Расширения',
				key: 'cardTypes.extensions',
				children: [
					{
						label: 'Полное имя типа',
						key: 'cardTypes.extensions.fullTypeName',
						disabled: true,
						children: [],
					},
					{
						label: 'Название',
						key: 'cardTypes.extensions.name',
						children: [],
					},
					{
						label: 'Включено',
						key: 'cardTypes.extensions.enabled',
						disabled: true,
						children: [],
					},
				],
			},
		],
	},
]
const catalog = [
	{
		key: 'system-cards',
		label: 'Системные карточки',
		children: [
			{
				key: 'system-cards-metadata',
				label: 'Метаданные карточек',
				children: [
					{ key: 'system-cards-metadata-id', label: 'Идентификатор карточки' },
					{ key: 'system-cards-metadata-created', label: 'Дата создания' },
				],
			},
			{
				key: 'system-cards-attributes',
				label: 'Системные атрибуты',
				children: [
					{ key: 'system-cards-attributes-author', label: 'Автор' },
					{ key: 'system-cards-attributes-owner', label: 'Владелец' },
				],
			},
			{
				key: 'system-cards-access',
				label: 'Права доступа',
				children: [
					{ key: 'system-cards-access-read', label: 'Чтение' },
					{ key: 'system-cards-access-edit', label: 'Редактирование' },
				],
			},
			{
				key: 'system-cards-history',
				label: 'История изменений',
				children: [
					{ key: 'system-cards-history-event', label: 'Тип события' },
					{ key: 'system-cards-history-date', label: 'Дата изменения' },
				],
			},
		],
	},

	{
		key: 'process-management',
		label: 'Управление процессами',
		children: [
			{
				key: 'process-templates',
				label: 'Шаблоны процессов',
				children: [
					{ key: 'process-templates-name', label: 'Название шаблона' },
					{ key: 'process-templates-version', label: 'Версия' },
				],
			},
			{
				key: 'process-variables',
				label: 'Переменные процессов',
				children: [
					{ key: 'process-variables-name', label: 'Имя переменной' },
					{ key: 'process-variables-type', label: 'Тип данных' },
				],
			},
			{
				key: 'process-roles',
				label: 'Роли участников процессов',
				children: [
					{ key: 'process-roles-name', label: 'Название роли' },
					{ key: 'process-roles-user', label: 'Назначенный пользователь' },
				],
			},
		],
	},

	{
		key: 'records-management',
		label: 'Делопроизводство',
		children: [
			{
				key: 'records-nomenclature',
				label: 'Номенклатура дел',
				children: [
					{ key: 'records-nomenclature-code', label: 'Код дела' },
					{ key: 'records-nomenclature-title', label: 'Наименование дела' },
				],
			},
			{
				key: 'records-registration',
				label: 'Регистрационные данные',
				children: [
					{
						key: 'records-registration-number',
						label: 'Регистрационный номер',
					},
					{ key: 'records-registration-date', label: 'Дата регистрации' },
				],
			},
			{
				key: 'records-statuses',
				label: 'Статусы документов',
				children: [
					{ key: 'records-statuses-current', label: 'Текущий статус' },
					{ key: 'records-statuses-changed', label: 'Дата смены статуса' },
				],
			},
		],
	},

	{
		key: 'base-objects',
		label: 'Базовые объекты',
		children: [
			{
				key: 'directories-constructor',
				label: 'Конструктор справочников',
				children: [
					{ key: 'directories-fields', label: 'Поля справочника' },
					{ key: 'directories-links', label: 'Связи справочника' },
				],
			},
			{
				key: 'scripts-constructor',
				label: 'Конструктор скриптов',
				children: [
					{ key: 'scripts-name', label: 'Имя скрипта' },
					{ key: 'scripts-language', label: 'Язык выполнения' },
				],
			},
			{
				key: 'layouts-constructor',
				label: 'Конструктор разметок',
				children: [
					{ key: 'layouts-name', label: 'Название разметки' },
					{ key: 'layouts-target', label: 'Целевая карточка' },
				],
			},
		],
	},

	{
		key: 'archive-management',
		label: 'Управление архивом',
		children: [
			{
				key: 'archive-rules',
				label: 'Правила архивирования',
				children: [
					{ key: 'archive-rules-term', label: 'Срок хранения' },
					{ key: 'archive-rules-condition', label: 'Условие архивирования' },
				],
			},
			{
				key: 'archive-storage-locations',
				label: 'Места хранения',
				children: [
					{ key: 'archive-storage-type', label: 'Тип хранилища' },
					{ key: 'archive-storage-path', label: 'Путь хранения' },
				],
			},
		],
	},

	{
		key: 'web-client-library',
		label: 'WebClientLibrary',
		children: [
			{
				key: 'web-ui-components',
				label: 'UI-компоненты',
				children: [
					{ key: 'web-ui-components-name', label: 'Имя компонента' },
					{ key: 'web-ui-components-version', label: 'Версия компонента' },
				],
			},
			{
				key: 'web-client-settings',
				label: 'Настройки клиента',
				children: [
					{ key: 'web-client-settings-key', label: 'Ключ настройки' },
					{ key: 'web-client-settings-value', label: 'Значение' },
				],
			},
		],
	},

	{
		key: 'legal-documents-exchange',
		label: 'Обмен юридически значимыми документами',
		children: [
			{
				key: 'legal-signatures',
				label: 'Электронные подписи',
				children: [
					{ key: 'legal-signatures-owner', label: 'Владелец подписи' },
					{ key: 'legal-signatures-date', label: 'Дата подписания' },
				],
			},
			{
				key: 'legal-certificates',
				label: 'Сертификаты',
				children: [
					{ key: 'legal-certificates-number', label: 'Серийный номер' },
					{ key: 'legal-certificates-valid', label: 'Срок действия' },
				],
			},
		],
	},
]

export { catalog, newcatalog }
