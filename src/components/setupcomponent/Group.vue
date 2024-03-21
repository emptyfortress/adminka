<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useHran } from '@/stores/hran'

const hran = useHran()
const newGroupName = ref()
const newGroupRule = ref()
const showAdd = ref(false)
const currentGroupIndex = ref()

const remove = (ind: number, index: number) => {
	hran.groups[ind].list.splice(index, 1)
}

const dragging = ref(false)

const addGroup = () => {
	if (currentGroupIndex.value == null) {
		hran.addGroup(newGroupName.value, newGroupRule.value)
	} else {
		hran.editGroup(
			currentGroupIndex.value,
			newGroupName.value,
			newGroupRule.value
		)
	}
	showAdd.value = false
	newGroupName.value = ''
	newGroupRule.value = ''
	currentGroupIndex.value = null
}
const addNew = () => {
	newGroupName.value = ''
	newGroupRule.value = ''
	currentGroupIndex.value = null
	showAdd.value = true
}
const options = [
	'Самое заполненное хранилище',
	'Самое свободное хранилище',
	'Случайный порядок',
]

const removeGroup = (ind: number) => {
	hran.removeGroup(ind)
}
const editGroup = (group: Group, index: number) => {
	newGroupName.value = group.name
	newGroupRule.value = group.rule
	currentGroupIndex.value = index
	showAdd.value = true
}
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Группы хранилищ ({{ hran.groups.length }})
	q-btn(flat round icon="mdi-plus-circle" @click="addNew")
.empt(v-if="hran.groups.length === 0") Создайте первую группу

component(:is="draggable"
	:list="hran.groups" item-key="id"
	:group="{ name: 'last', pull: 'clone', put: false }")
	template(#item="{ element, index }")
		q-expansion-item(v-model="element.expanded" switch-toggle-side).gro.exp
			template(#header)
				.row.items-center.justify-between.full-width
					.title
						q-icon(name="mdi-server").q-mr-sm
						span {{ element.name }}

					div
						q-btn(flat round icon="mdi-pencil" @click.stop="editGroup(element, index)" size="sm") 
						q-btn(flat round icon="mdi-trash-can-outline" @click.stop="" size="sm") 
							q-menu
								q-list
									q-item(clickable v-close-popup @click="removeGroup(index)").pink
										q-item-section Удалить&nbsp;группу
			q-separator

			q-card.dblist
				component(:is="draggable"
					:list="element.list"
					item-key="id"
					group="group"
					ghost-class="ghost"
					@start="dragging = true"
					@end="dragging = false").list-group
					template(#item="{ element: el, index: ind }")
						.row.justify-between.items-center
							.q-ml-sm
								q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
								span.q-ml-sm {{ el.name }}
							q-btn(flat round dense icon="mdi-close" size="10px" )
								q-menu
									q-list
										q-item(clickable v-close-popup @click="remove(index, ind)").pink
											q-item-section Очистить
					template(#header v-if="element.list.length == 0")
						.empt Добавьте хранилище в группу, перетащив его сюда.

q-dialog(:model-value="showAdd")
	q-card(style="min-width: 400px;")
		q-form(@submit="addGroup")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Группа хранилищ
				q-space
				q-btn(icon="mdi-close" flat round dense v-close-popup)

			q-card-section
				q-input(v-model="newGroupName" autofocus label="Название" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")

			q-card-section
				q-select(v-model="newGroupRule" autofocus label="Режим выбора" :options="options" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")

			q-card-section
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="showAdd = false")
					q-btn(unelevated color="primary" label="Сохранить" type="submit")
		
</template>

<style scoped lang="scss">
.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.grey {
	margin-top: 0;
	margin-bottom: 1rem;

	position: relative;
	padding-top: 1.3rem;
}

.tog {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
}

.exp {
	background: var(--bg-grey);
}

.gro {
	margin-bottom: 1rem;
}

.title {
	color: $secondary;
	font-weight: 600;
	text-transform: uppercase;
}
:deep(.q-item__section--avatar) {
	min-width: 0;
}

.prav {
	font-size: 0.8rem;
	background: white;
	padding-top: 0.5rem;
	color: grey;
	text-align: right;
	padding-right: 0.5rem;
	font-style: italic;
}
.sep {
	border: 1px dashed $secondary;
}
.ghost {
	background: var(--bg-selected);
}
.empt {
	// text-align: center;
	min-height: 42px;
}
</style>
