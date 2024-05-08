<script setup lang="ts">
import { ref } from 'vue'
import { tree } from '@/stores/confTree1'
import ConfigTree from '@/components/common/ConfigTree.vue'
import DragConfigTree from '@/components/common/DragConfigTree.vue'
import { useServ } from '@/stores/dvservConfig'
import ConfirmDialog from '@/components/tree/ConfirmDialog.vue'
import { useRouter } from 'vue-router'

const serv = useServ()

const filter = ref('')
const description = ref('Здесь описание выбранного узла')

const remove = () => {
	serv.setRemove()
}
const over = ref(false)

const showApply = ref(false)
const drop = () => {
	over.value = false
	if (apply.value == true) {
		showApply.value = true
	} else {
		serv.addChecked(serv.draggedNode!)
	}
}

const removeChecked = (e: Stat) => {
	serv.removeChecked(e)
}
const versions = ['v.2.0.0', 'v.1.5.2', 'v.1.0.1', 'v.1.0.0']
const version = ref('v.2.0.0')
const duble = () => {
	serv.setDuble(serv.currentNode!)
}
const showDel = ref(false)
const toggleDel = () => {
	showDel.value = !showDel.value
}
const router = useRouter()

const goto = () => {
	let url = '/appserver/' + serv.currentNode!.data.id
	router.push(url)
}
const apply = ref(false)
const setConfig = () => {
	serv.setDragged(serv.currentNode!)
	apply.value = true
}
const clear = () => {
	serv.clearChecked()
}
const compare = () => {
	router.push('/dvcompare')
}
</script>

<template lang="pug">
div
	.grid
		.first
			q-input.q-mb-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")

			DragConfigTree(:treeData="tree" :filter="filter" )

		.first
			q-card.sel(flat)
				q-card-section.empty(v-if="!serv.currentNode")
					.hd Информация
					div Ничего не выбрано

				q-card-section(:draggable="true" v-if="serv.currentNode" @dragstart="setConfig")
					.row.items-center.justify-between
						.hd
							q-icon.q-mr-sm( v-if="serv.currentNode.data.icon" :name="serv.currentNode.data.icon" color="secondary" size="sm")
							span {{ serv.currentNode.data.text }}
							q-popup-edit(v-model="serv.currentNode.data.text" auto-save v-slot="scope")
								q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
							q-chip.q-ml-lg(size="sm" v-if="serv.currentNode.data.env" :class="serv.currentNode.data.env") {{ serv.currentNode.data.env }}
						.version
							q-icon.q-mr-sm(name="mdi-source-branch" size="18px")
							span {{ version }}
							q-menu
								q-item(clickable v-for="item in versions")
									q-item-section {{ item }}


				q-card-section(v-if="serv.currentNode")
					.dat
						.label Описание
						.val.edit {{ description }}
							q-popup-edit(v-model="description" auto-save v-slot="scope")
								q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
						.label Модуль
						.val Сервер приложений
						.label Среда
						.val {{ serv.currentNode.data.env }}
						.label Создано
						.val 22.05.2023 - 16:24
						.label Автор
						.val kmg01

				q-separator
				q-card-actions(align="center" v-if="serv.currentNode")
					q-btn(flat color="primary" label="Настроить" @click="goto") 
					q-btn(flat color="primary" label="Дублировать" @click="duble") 
					q-btn(flat color="primary" label="json" @click="") 
					q-space
					q-btn(v-if="serv.currentNode.data.type == 2 || serv.currentNode.data.type == 4" flat color="negative" label="Удалить" @click="toggleDel") 

			br
			q-card.sele(flat @dragover.prevent="over = true" @dragleave.prevent="over = false" @drop="drop"  :class="{over: over}")
				template(v-if="serv.checkedNodes.length" )
					q-card-section(v-if="serv.checkedNodes.length" )
						q-list
							q-item.item(v-for="item in serv.checkedNodes" clickable :key="item.data.id")
								q-item-section(side)
									q-icon(:name="item.data.icon")
								q-item-section
									q-item-label {{ item.data.text }}
								q-item-section(side v-if="item.data.env")
									q-chip(:class="item.data.env" size="sm") {{ item.data.env }}
								q-item-section(side)
									q-btn(flat round icon="mdi-close" size="sm" @click="removeChecked(item)" dense) 

					template(v-if="serv.checkedNodes.length > 1" )
						q-separator
						q-card-actions
							q-btn(v-if="serv.checkedNodes.length == 2" flat color="primary" label="Сравнить" @click="compare") 
							q-space
							q-btn(flat color="negative" label="Очистить" @click="clear") 
				q-card-section.empty(v-else)
					.hd Групповая обработка
					div Перетащите сюда серверы или конфигурации

	ConfirmDialog(v-model="showDel" zag="Удалить конфигурацию")
		template(#content)
			p Вы уверены, что хотите удалить конфигурацию? Все настройки будут потеряны.
		template(#actions)
			q-btn(flat color="primary" label="Отмена" v-close-popup)
			q-btn(unelevated color="negative" label="Удалить" @click="remove" v-close-popup) 

	ConfirmDialog(v-model="showApply" zag="Применить конфигурацию")
		template(#content)
			p Применить настройки конфигурации <b>{{serv.draggedNode?.data.text}}</b> к выбранным серверам?<br>Это действие нельзя отменить.
		template(#actions)
			q-btn(flat color="primary" label="Отмена" v-close-popup)
			q-btn(unelevated color="primary" label="Применить" @click="" v-close-popup) 
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 400px 1fr;
	justify-items: start;
	column-gap: 2rem;
	.first {
		width: 100%;
	}
}
.edit {
	color: $secondary;
	cursor: pointer;
}
.version {
	font-size: 0.9rem;
	cursor: pointer;
	color: $secondary;
}
.hd {
	display: flex;
	color: $secondary;
	font-size: 1.1rem;
	span {
		cursor: pointer;
	}
}
.sel {
	min-height: 200px;
	&.over {
		background: #c5def7;
	}
}
.sele {
	&.over {
		background: #c5def7;
	}
}
.dat {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: start;
	column-gap: 1rem;
	// row-gap: 0.5rem;
	.label {
		opacity: 0.5;
	}
	.val {
		width: 100%;
	}
}
.q-item {
	.q-btn {
		display: none;
	}
	&:hover {
		.q-btn {
			display: inline-flex;
		}
	}
}
.empty {
	color: #666;
	color: $secondary;
}
</style>
