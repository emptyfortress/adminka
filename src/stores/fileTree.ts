const files = [
	{
		key: 'text',
		label: 'Текстовые и офисные документы',
		children: [
			{ key: 'text-doc', label: '.doc' },
			{ key: 'text-docx', label: '.docx' },
			{ key: 'text-odt', label: '.odt' },
			{ key: 'text-rtf', label: '.rtf' },
			{ key: 'text-txt', label: '.txt' },
			{ key: 'text-pdf', label: '.pdf' },
			{ key: 'text-md', label: '.md' },
		],
	},

	{
		key: 'tables',
		label: 'Таблицы и расчёты',
		children: [
			{ key: 'tables-xls', label: '.xls' },
			{ key: 'tables-xlsx', label: '.xlsx' },
			{ key: 'tables-ods', label: '.ods' },
			{ key: 'tables-csv', label: '.csv' },
			{ key: 'tables-tsv', label: '.tsv' },
		],
	},

	{
		key: 'presentations',
		label: 'Презентации',
		children: [
			{ key: 'presentations-ppt', label: '.ppt' },
			{ key: 'presentations-pptx', label: '.pptx' },
			{ key: 'presentations-odp', label: '.odp' },
			{ key: 'presentations-pdf', label: '.pdf' },
		],
	},

	{
		key: 'images',
		label: 'Скан-копии и изображения',
		children: [
			{ key: 'images-jpg', label: '.jpg' },
			{ key: 'images-jpeg', label: '.jpeg' },
			{ key: 'images-png', label: '.png' },
			{ key: 'images-tiff', label: '.tiff' },
			{ key: 'images-tif', label: '.tif' },
			{ key: 'images-bmp', label: '.bmp' },
			{ key: 'images-webp', label: '.webp' },
		],
	},

	{
		key: 'archives',
		label: 'Архивы и контейнеры',
		children: [
			{ key: 'archives-zip', label: '.zip' },
			{ key: 'archives-rar', label: '.rar' },
			{ key: 'archives-7z', label: '.7z' },
			{ key: 'archives-tar', label: '.tar' },
			{ key: 'archives-gz', label: '.gz' },
		],
	},

	{
		key: 'crypto',
		label: 'Электронные подписи и криптография',
		children: [
			{ key: 'crypto-sig', label: '.sig' },
			{ key: 'crypto-p7s', label: '.p7s' },
			{ key: 'crypto-p7m', label: '.p7m' },
			{ key: 'crypto-cer', label: '.cer' },
			{ key: 'crypto-crt', label: '.crt' },
			{ key: 'crypto-key', label: '.key' },
			{ key: 'crypto-pem', label: '.pem' },
		],
	},

	{
		key: 'structured',
		label: 'Структурированные и служебные форматы',
		children: [
			{ key: 'structured-xml', label: '.xml' },
			{ key: 'structured-json', label: '.json' },
			{ key: 'structured-xsd', label: '.xsd' },
			{ key: 'structured-yaml', label: '.yaml' },
			{ key: 'structured-yml', label: '.yml' },
		],
	},

	{
		key: 'finance',
		label: 'Финансовые и бухгалтерские документы',
		children: [
			{ key: 'finance-pdf', label: '.pdf' },
			{ key: 'finance-xml', label: '.xml' },
			{ key: 'finance-dbf', label: '.dbf' },
			{ key: 'finance-edi', label: '.edi' },
		],
	},

	{
		key: 'sed',
		label: 'Специализированные форматы СЭД',
		children: [
			{ key: 'sed-card', label: '.card' },
			{ key: 'sed-bin', label: '.bin' },
			{ key: 'sed-dat', label: '.dat' },
			{ key: 'sed-meta', label: '.meta' },
			{ key: 'sed-efd', label: '.efd' },
		],
	},
]

export { files }
