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

export { catalog }
