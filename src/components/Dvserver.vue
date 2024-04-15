<script setup lang="ts">
import { ref } from 'vue'
import { tree } from '@/stores/confTree1'
import ConfigTree from '@/components/common/ConfigTree.vue'
import DragConfigTree from '@/components/common/DragConfigTree.vue'
import { useDvServ } from '@/stores/dvservConfig'

const serv = useDvServ()

const filter = ref('')
const description = ref('Здесь описание выбранного узла')
</script>

<template lang="pug">
.grid
	.first
		q-input.q-mb-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

		DragConfigTree(:treeData="tree" :filter="filter" )
	.first
		q-card.sel(flat v-if="serv.currentNode")
			q-card-section
				.hd
					q-icon.q-mr-sm( v-if="serv.currentNode.data.icon" :name="serv.currentNode.data.icon" color="secondary" size="sm")
					span {{ serv.currentNode.data.text }}
					q-popup-edit(v-model="serv.currentNode.data.text" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
					q-chip.q-ml-lg(size="sm" v-if="serv.currentNode.data.env") {{ serv.currentNode.data.env }}


			q-card-section
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
			q-card-actions(align="center")
				q-btn(flat color="primary" label="Настроить" @click="") 
				q-btn(flat color="primary" label="Дублировать" @click="") 
				q-btn(flat color="primary" label="Применить" @click="") 
				q-space
				q-btn(flat color="negative" label="Удалить" @click="") 

		br
		q-card.sel(flat v-if="serv.checkedNodes.length")
			q-card-section
				q-list
					q-item(v-for="item in serv.checkedNodes" clickable :key="item.data.id")
						q-item-section(side)
							q-checkbox(:modelValue="true" dense)
						q-item-section(side)
							q-icon(:name="item.data.icon")
						q-item-section
							q-item-label {{ item.data.text }}

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
.sel {
	// padding: 1rem;
	.hd {
		color: $secondary;
		font-size: 1.1rem;
		span {
			cursor: pointer;
		}
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
</style>
