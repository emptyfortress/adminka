import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useStepperStore } from '@/stores/useStepperStore'

export const useCardsTree = defineStore('cardsTree', () => {
	const stepper = useStepperStore()
	const keywords = [
		'basics.employees.departments.staff.lastName',
		'basics.employees.departments.staff.firstName',
		'basics.employees.departments.staff.middleName',
	]

	const isTextNode = computed(() => {
		return keywords.some(k => stepper.step4.catalogs.includes(k))
	})

	const cards = computed(() => {
		return [
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
								disabled: false,
								children: [],
							},
							{
								label: 'Содержание',
								key: 'indexable.baseObjects.task.task.description',
								disabled: false,
								children: [],
							},
							{
								label: 'Автор',
								key: 'indexable.baseObjects.task.task.author',
								disabled: !isTextNode.value,
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
						disabled: false,
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
								disabled: !isTextNode.value,
								children: [],
							},
							{
								label: 'Согласующие',
								key: 'indexable.baseObjects.document.approvers',
								disabled: !isTextNode.value,
								children: [],
							},
							{
								label: 'Подписанты',
								key: 'indexable.baseObjects.document.signatories',
								disabled: !isTextNode.value,
								children: [],
							},
							{
								label: 'Отправитель контрагент',
								key: 'indexable.baseObjects.document.senderContractor',
								disabled: !isTextNode.value,
								children: [],
							},
							{
								label: 'Получатели контрагенты',
								key: 'indexable.baseObjects.document.recipientContractors',
								disabled: !isTextNode.value,
								children: [],
							},
							{
								label: 'Ознакомлены',
								key: 'indexable.baseObjects.document.acquainted',
								disabled: !isTextNode.value,
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
								disabled: false,
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
								disabled: !isTextNode.value,
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
						disabled: true,
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
		]
	})

	return {
		cards,
		isTextNode,
	}
})
