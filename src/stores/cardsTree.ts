import { ref, computed, watch, unref } from 'vue'
import { useStepperStore } from '@/stores/useStepperStore'
// import type { ComputedRef } from 'vue'

const stepper = useStepperStore()

const keywords = ['Фамилия', 'Имя', 'Отчество']

const isTextNode = computed(() => {
	return keywords.some(k => stepper.payload.catalogs.includes(k))
})

watch(isTextNode, val => {
	if (val) {
	}
})

const newcards = ref([
	{
		label: 'Управление процессами',
		key: 'indexable.processManagement',
		disabled: true,
		children: [],
	},
	{
		label: 'Управление архивом',
		key: 'indexable.archiveManagement',
		disabled: true,
		children: [],
	},
	{
		label: 'Системные карточки',
		key: 'indexable.systemCards',
		disabled: true,
		children: [],
	},
	{
		label: 'Базовые объекты',
		key: 'indexable.baseObjects',
		disabled: false,
		children: [
			{
				label: 'Карточка строки справочника',
				key: 'indexable.baseObjects.dictionaryRowCard',
				disabled: true,
				children: [],
			},
			{
				label: 'Карточка подразделения',
				key: 'indexable.baseObjects.departmentCard',
				disabled: true,
				children: [],
			},
			{
				label: 'Список ссылок на карточки заданий',
				key: 'indexable.baseObjects.taskCardLinks',
				disabled: true,
				children: [],
			},
			{
				label: 'Задание',
				key: 'indexable.baseObjects.task',
				children: [
					{
						label: 'Название',
						key: 'indexable.baseObjects.task.task.name',
						children: [],
					},
					{
						label: 'Содержание',
						key: 'indexable.baseObjects.task.task.description',
						children: [],
					},
					{
						label: 'Автор',
						key: 'indexable.baseObjects.task.task.author',
						disabled: true,
						type: 0,
						children: [],
					},
					{
						label: 'Дата начала плановая',
						disabled: true,
						key: 'indexable.baseObjects.task.task.plannedStartDate',
						children: [],
					},
					{
						label: 'Дата завершения плановая',
						key: 'indexable.baseObjects.task.task.plannedEndDate',
						disabled: true,
						children: [],
					},
					{
						label: 'Дата начала фактическая',
						key: 'indexable.baseObjects.task.task.actualStartDate',
						disabled: true,
						children: [],
					},
					{
						label: 'Дата завершения фактическая',
						key: 'indexable.baseObjects.task.task.actualEndDate',
						disabled: true,
						children: [],
					},
					{
						label: 'Трудоёмкость плановая (ч)',
						key: 'indexable.baseObjects.task.task.plannedEffortHours',
						disabled: true,
						children: [],
					},
					{
						label: 'Трудоёмкость фактическая (ч)',
						key: 'indexable.baseObjects.task.task.actualEffortHours',
						disabled: true,
						children: [],
					},
					{
						label: 'Напоминать за N часов до срока завершения задания',
						key: 'indexable.baseObjects.task.task.remindBeforeHours',
						disabled: true,
						children: [],
					},
					{
						label: 'Дата напоминания',
						key: 'indexable.baseObjects.task.task.remindDate',
						disabled: true,
						children: [],
					},
					{
						label: 'Лично руководителю',
						key: 'indexable.baseObjects.task.task.notifyManagerOnly',
						disabled: true,
						children: [],
					},
					{
						label: 'Родительское задание',
						key: 'indexable.baseObjects.task.task.parentTask',
						disabled: true,
						children: [],
					},
					{
						label: 'Делегат',
						key: 'indexable.baseObjects.task.task.delegate',
						disabled: true,
						children: [],
					},
					{
						label: 'Список подчинённых заданий',
						key: 'indexable.baseObjects.task.task.subTasks',
						disabled: true,
						children: [],
					},
					{
						label: 'Список ссылок',
						key: 'indexable.baseObjects.task.task.links',
						disabled: true,
						children: [],
					},
					{
						label: 'Список подписей',
						key: 'indexable.baseObjects.task.task.signatures',
						disabled: true,
						children: [],
					},
				],
			},
			{
				label: 'Карточка сервера',
				key: 'indexable.baseObjects.serverCard',
				disabled: true,
				children: [],
			},
			{
				label: 'Список опросов',
				key: 'indexable.baseObjects.pollList',
				disabled: true,
				children: [],
			},
			{
				label: 'Список подписей',
				key: 'indexable.baseObjects.signatureList',
				disabled: true,
				children: [],
			},
			{
				label: 'Список ссылок на карточки',
				key: 'indexable.baseObjects.cardLinks',
				disabled: true,
				children: [],
			},
			{
				label: 'Документ',
				key: 'indexable.baseObjects.document',
				children: [
					{
						label: 'Основная информация',
						key: 'indexable.baseObjects.document.mainInfo',
						disabled: true,
						children: [],
					},
					{
						label: 'Системные свойства',
						key: 'indexable.baseObjects.document.systemProperties',
						disabled: true,
						children: [],
					},
					{
						label: 'Номера',
						key: 'indexable.baseObjects.document.numbers',
						disabled: true,
						children: [],
					},
					{
						label: 'Бизнес-процессы',
						disabled: true,
						key: 'indexable.baseObjects.document.businessProcesses',
						children: [],
					},
					{
						label: 'Файлы',
						disabled: true,
						key: 'indexable.baseObjects.document.files',
						children: [],
					},
					{
						label: 'Получатели',
						key: 'indexable.baseObjects.document.recipients',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Согласующие',
						key: 'indexable.baseObjects.document.approvers',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Подписанты',
						key: 'indexable.baseObjects.document.signatories',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Отправитель контрагент',
						key: 'indexable.baseObjects.document.senderContractor',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Получатели контрагенты',
						key: 'indexable.baseObjects.document.recipientContractors',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Ознакомлены',
						key: 'indexable.baseObjects.document.acquainted',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Утверждено',
						key: 'indexable.baseObjects.document.approved',
						disabled: true,
						children: [],
					},
					{
						label: 'Договор',
						key: 'indexable.baseObjects.document.contract',
						disabled: true,
						children: [],
					},
					{
						label: 'Лист согласования',
						key: 'indexable.baseObjects.document.approvalSheet',
						disabled: true,
						children: [],
					},
					{
						label: 'Согласование',
						key: 'indexable.baseObjects.document.approval',
						disabled: true,
						children: [],
					},
					{
						label: 'Комментарии',
						key: 'indexable.baseObjects.document.comments',
						children: [],
					},
					{
						label: 'Контроль',
						key: 'indexable.baseObjects.document.control',
						disabled: true,
						children: [],
					},
					{
						label: 'Адресаты',
						key: 'indexable.baseObjects.document.addressees',
						disabled: isTextNode,
						children: [],
					},
					{
						label: 'Данные УПД',
						key: 'indexable.baseObjects.document.updData',
						disabled: true,
						children: [],
					},
					{
						label: 'Данные о подписанте',
						key: 'indexable.baseObjects.document.signerData',
						disabled: true,
						children: [],
					},
					{
						label: 'Данные приложения',
						key: 'indexable.baseObjects.document.attachmentsData',
						disabled: true,
						children: [],
					},
					{
						label: 'Дополнительные согласующие КИСВ',
						key: 'indexable.baseObjects.document.additionalApproversKISV',
						disabled: true,
						children: [],
					},
				],
			},
			{
				label: 'Карточка подразделения контрагента',
				key: 'indexable.baseObjects.contractorDepartmentCard',
				disabled: true,
				children: [],
			},
			{
				label: 'Карточка сотрудника контрагента',
				key: 'indexable.baseObjects.contractorEmployeeCard',
				disabled: true,
				children: [],
			},
			{
				label: 'Группа заданий',
				key: 'indexable.baseObjects.taskGroup',
				disabled: true,
				children: [],
			},
			{
				label: 'Системная карточка доверенности',
				key: 'indexable.baseObjects.powerOfAttorneyCard',
				disabled: true,
				children: [],
			},
			{
				label: 'Карточка сотрудника',
				key: 'indexable.baseObjects.employeeCard',
				children: [],
			},
			{
				label: 'Список категорий',
				key: 'indexable.baseObjects.categoryList',
				disabled: true,
				children: [],
			},
			{
				label: 'Согласование',
				key: 'indexable.baseObjects.approval',
				disabled: true,
				children: [],
			},
			{
				label: 'Бизнес-календарь',
				key: 'indexable.baseObjects.businessCalendar',
				disabled: true,
				children: [],
			},
		],
	},
	{
		label: 'Конструктор согласований',
		key: 'indexable.approvalDesigner',
		disabled: true,
		children: [],
	},
])

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
export { cards, newcards }
