<script setup lang="ts">
import { ref } from 'vue'
import { tree } from '@/stores/confTree1'
import ConfigTree from '@/components/common/ConfigTree.vue'
import DragConfigTree from '@/components/common/DragConfigTree.vue'
import { useDvServ } from '@/stores/dvservConfig'

const serv = useDvServ()

const filter = ref('')
const description = ref('Здесь описание выбранного узла')

const remove = () => {
	serv.setRemove()
}
const over = ref(false)
const drop = () => {
	over.value = false
	serv.addChecked(serv.draggedNode)
}
const removeChecked = (e: Stat) => {
	serv.removeChecked(e)
}
</script>

<template lang="pug">
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

			q-card-section(:draggable="true" v-if="serv.currentNode")
				.hd
					q-icon.q-mr-sm( v-if="serv.currentNode.data.icon" :name="serv.currentNode.data.icon" color="secondary" size="sm")
					span {{ serv.currentNode.data.text }}
					q-popup-edit(v-model="serv.currentNode.data.text" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
					q-chip.q-ml-lg(size="sm" v-if="serv.currentNode.data.env" :class="serv.currentNode.data.env") {{ serv.currentNode.data.env }}


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
				q-btn(flat color="primary" label="Настроить" @click="") 
				q-btn(flat color="primary" label="Дублировать" @click="") 
				// q-btn(flat color="primary" label="Применить" @click="") 
				q-space
				q-btn(v-if="serv.currentNode.data.type == 2 || serv.currentNode.data.type == 4" flat color="negative" label="Удалить" @click="remove") 

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
							q-item-section(side)
								q-btn(flat round icon="mdi-close"  @click="removeChecked(item)" dense) 
				q-separator
				q-card-actions
					q-btn(flat color="primary" label="Сравнить" @click="") 
			q-card-section.empty(v-else)
				.hd Групповая обработка
				div Перетащите сюда серверы или конфигурации

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
.hd {
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
	padding-right: 0.5rem;
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
