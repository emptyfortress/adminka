<template lang="pug">
div
	q-btn.q-mr-md(unelevated color="secondary" label="Изменить ключ" size="sm")
	q-btn(flat round icon="mdi-printer-outline")
	.text-bold Параметры используемой лицензии:
	.q-mt-md
		.gr
			div Вид:
			div Custom license
			div Имя пользователя:
			div DocsVision
			div Дата генерации ключа:
			div 15 июня 2022 г.
			div Серийный номер:
			div QV24-7319-0JH0-U399-K04W-EO0W
		.text-bold Успешно активирована.
		.q-mt-md Дополнительные опции:
		.pr
			div DocsVision Platform DVG
			div DocsVision Windows-Client
			div DocsVision Workflow Server
			.pr Максимальное количество соединений: 99999
			div DocsVision WWF Processes
			.pr Максимальное количество соединений: 99999
			div DocsVision Personal Assistant
			div DocsVision Add-In for Microsoft Office
			div DocsVision Offline Client
			div DocsVision Replicator (Publisher)
			div DocsVision Archivation module
			div DocsVision MBS Axapta Gate
			div DocsVision 1C Gate
			div DocsVision SharePoint 2003 Gate
			div DocsVision SharePoint 2007 Gate
			div DocsVision CRM Gate
			div DocsVision Project Integration
			div Docsvision Thin client (server license)
			div DocsVision Federation
			div DocsVision Extended Reports
			div DocsVision Concurrent Servers
			div DocsVision Personal Licenses
			div DocsVision Административное Делопроизводство
			div DocsVision Управление Архивом Документов
			div Syntellect Assets Catalog
			div Syntellect UltraViews
			div iDoc Barcode Utilites
			div DocsVision Card Builder
			div DocsVision Workflow Builder
			div Docsvision SharePoint Extensions
			div Docsvision Actionspace
			div Docsvision SharePoint Client
			div Docsvision SharePoint WebParts
			div Docsvision Office 5
			.pr Максимальное количество соединений: 99999
			div Docsvision Task Manager. Synchronization module
			div OutlookClient
			div OutlookServer
			div AppealsCitizens
			div Contracts
			.pr Максимальное количество соединений: 99999
			div UprSov
			.pr 'Docsvision Actionspace Cloud'
			div Docsvision ThinClient layout designer
			div Docsvision Mobile Server
			div Docsvision Внешние файловые хранилища
			div Docsvision Внешнее хранилище ФС
			div Docsvision Внешнее хранилище MSSQL
			div Docsvision Кластер AlwaysOn
			div Docsvision СУБД PostgreSQL
			div Docsvision кэш-сервер
			div Docsvision кеш-сервер Redis
			div Docsvision Внешний полнотекстовый поиск
			div Docsvision Внешний полнотекстовый поиск ElasticSearch
			div Docsvision Архивная база данных
			div Docsvision Внешнее хранилище FileStream
			div Docsvision Менеджер решений. Импорт
			div Docsvision Менеджер решений. Экспорт
			div Docsvision Модуль интеграции с операторами ЭДО
			div Docsvision Коннектор к Диадок
			div Docsvision Модуль интеграции с произвольными файловыми хранилищами
			div Docsvision Мобильное приложение
			div Docsvision Модуль Интеллектуальный поиск

</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.gr {
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
}
.pr {
	margin-left: 2rem;
	font-family: monospace;
}
</style>
