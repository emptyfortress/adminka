<template lang="pug">
div
	.inf
		span Адрес хранилища настроек:
		a.q-ml-md(href="#") http://sol2016.digdes.com:5200/api/Settings
	.zag Модули
	br
	.mygrid
		// router-link.bl.conf(to="/setup1/configuration1")
		// 	.icon.config
		// 	.tit Конфигурации и серверы
		// 	.icon.comp
		router-link.bl.big(to="/setup/dvserver1")
			.icon.serverdv
			.tit Сервер приложений
		router-link.bl.big(to="/setup/webclient")
			.icon.webclient
			.tit Web-клиент
		// router-link.bl(to="/setup/connection")
		// 	.icon.connection
		// 	.tit Соединения
		q-separator
		router-link.bl(to="/setup/worker")
			.icon.worker
			.tit Служба фоновых операций
		router-link.bl(to="/setup/bprocess")
			.icon.workflow
			.tit Сервис бизнес-процессов
		router-link.bl(to="")
			.icon.searc
			.tit Полнотекстовый поиск
		router-link.bl(to="")
			.icon.widget
			.tit Виджеты
		router-link.bl(to="/setup/email")
			.icon.mail
			.tit Почтовый сервер
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref()
</script>

<style scoped lang="scss">
.search {
	width: 350px;
	margin: 0 auto;
	font-size: 1.1rem;
	margin-bottom: 1rem;
}

.q-separator {
	grid-column: 1/-1;
}

.mygrid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin: 0 auto;
	// background: pink;
	max-width: 692px;

	.bl {
		font-size: 1.2rem;
		line-height: 110%;
		color: $secondary;
		padding: 1rem;
		border: 1px solid transparent;
		cursor: pointer;
		transition: 0.2s ease all;
		text-decoration: none;

		&.big {
			grid-column: span 2;
		}

		.icon {
			width: 36px;
			height: 36px;
			margin-bottom: 0.5rem;

			&.mail {
				background: url('@/assets/img/mailserver.svg');
				width: 47px;
			}

			&.serverdv {
				background: url('@/assets/img/serverdv.svg');
			}

			&.worker {
				background: url('@/assets/img/worker.svg');
			}

			&.connection {
				background: url('@/assets/img/connection.svg');
			}

			&.webclient {
				background: url('@/assets/img/webclient.svg');
			}

			&.workflow {
				background: url('@/assets/img/workflow.svg');
			}

			&.config {
				background: url('@/assets/img/configuration.svg');
			}

			&.comp {
				background: url('@/assets/img/comp.svg');
			}

			&.searc {
				background: url('@/assets/img/search.svg');
			}

			&.widget {
				background: url('@/assets/img/widget.svg');
			}
		}

		&:hover {
			border: 1px solid $primary;

			.webclient,
			.mail,
			.serverdv,
			.worker,
			.connection,
			.config,
			.comp,
			.searc,
			.widget,
			.workflow {
				background-position: bottom;
			}
		}
	}
}

.inf {
	text-align: right;
	font-size: 0.8rem;
	color: grey;
}

@media screen and (max-width: 750px) {
	.mygrid {
		display: block;

		.bl {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;
			margin-bottom: 0.5rem;
		}
	}
}

.conf {
	grid-column: 1 / -1;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-bottom: 1px solid #ccc !important;

	&:hover {
		border-bottom-color: $primary !important;
	}
}
</style>
