<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useStore } from '@/stores/store'
import AddComputer from '@/components/AddComputer.vue'
import Nastroyki from '@/components/Nastroyki.vue'
import BpExpand from '@/components/BpExpand.vue'
import Post from '@/components/Post.vue'

const store = useStore()

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}

const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

const key = ref(0)

const calcComponent: any = (e: number) => {
	switch (e) {
		case 0:
			return Nastroyki
		case 1:
			return BpExpand
		case 2:
			return Post
		default:
			return null
	}
}

const setNeg = (e: number) => {
	store.panelsBP[e].neg = true
}
const setPos = (e: number) => {
	store.panelsBP[e].neg = false
}

const form = reactive({
	name: 'AGSupport',
	bd: 'agsupport_1',
	dol: 1,
})

watch(form, (value) => {
	if (value) {
		editMode.value = true
	}
})
const change = (e: number) => {
	editMode.value = true
	store.panelsBP[e].change = true
}
const options = ['agsupport_1']
const editMode = ref(false)

const otmena = () => {
	store.bp.$reset()
	key.value += 1
	store.panelsBP.map((item) => (item.neg = false))
	store.panelsBP.map((item) => (item.change = false))
	editMode.value = false
}
const save = (item: any) => {
	item.name = form.name
	store.tabs1 = form.name
	editMode.value = false
	store.panelsBP.map((item) => (item.change = false))
	store.panelsBP.map((item) => (item.neg = false))
	key.value += 1
}
</script>

<template lang="pug">
div
	AddComputer(v-model="dialog")
	.zag Настройки службы управления бизнес-процессами
	.bar
		q-chip(color="warning") Всего компьютеров: {{ store.conputer.length }}
		q-btn.plus(flat round icon="mdi-plus-circle" @click="add") 
			q-tooltip Добавить компьютер
		q-space
		.alltab
			q-tabs(v-model="store.tabs1" active-color="primary" inline-label).text-secondary
				q-tab(v-for="item in store.conputer" :key="item.id" :name="item.name" :label="item.name")


	q-card.card
		q-tab-panels(v-model="store.tabs1" animated)
			template(v-for="item in store.conputer" :key="item.id")
				q-tab-panel(:name="item.name")
					.grey(:class="{ edit: editMode }")
						.close
							q-btn(round flat icon="mdi-trash-can-outline")
								q-tooltip удалить
								q-menu
									q-list
										q-item(clickable v-close-popup @click="store.removeComputer(item.id)").pink
											q-item-section удалить
						.current {{ item.name }}

						.newform
							.label Имя компьютера:
							q-input(v-model="form.name" dense outlined bg-color="white" lazy-rules :rules="req").inp

							.label Сервис баз данных:
							q-select(v-model="form.bd" :options="options" dense outlined bg-color="white" lazy-rules :rules="req").inp
							.dol Доля процессов:
							q-input(v-model="form.dol" dense outlined type="number" min="1" bg-color="white").inp1
							q-btn(unelevated color="primary" label="Подключить").bt


						q-list(separator)
							q-expansion-item(
								v-for="(panel, index) in store.panelsBP"
								v-model="panel.expanded"
								switch-toggle-side
								:key="key"
								:class="{ er: panel.neg }"
								:label="panel.title"
								)
								template(v-slot:header)
									.head
										.title {{ panel.title }}
										.icon
											q-btn(v-if="panel.change" flat round icon="mdi-reload" color="primary" @click.stop="otmena" style="transform: scaleX(-1)") 
											q-btn(v-if="panel.change" flat size="sm" color="primary" @click.stop="save(item)" label="Сохранить") 
											q-icon(v-if="panel.neg" name="mdi-alert-circle" size="20px" color="negative")

								.pcard
									component(:is="calcComponent(panel.id)"
										:key="key"
										@haserror="setNeg(index)"
										@noerror="setPos(index)"
										@change="change(index)")

						q-card-actions(align="right" v-if="editMode")
							q-btn(flat label="Отмена" @click="otmena")
							q-btn(unelevated color="primary" label="Сохранить все" @click="save(item)")
		
</template>

<style scoped lang="scss">
.bar {
	background: #dedede;
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0 0.5rem;

	@media screen and (max-width: 1233px) {
		display: block;
	}
}

.newform {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: 160px 360px 120px 70px 100px;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0;

	.label {
		grid-column: 1/2;
	}

	.inp {
		grid-column: 2/3;
		width: 100%;
		margin-bottom: 0;
	}

	.inp1 {
		grid-column: 4/5;
		width: 100%;
		margin-bottom: 0;
	}
}

.card {
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
}

.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}

.alltab {
	max-width: 700px;
}

.q-expansion-item {
	transition: 0.2s ease all;
}

.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
	border-top: 1px solid $primary;
}

.q-expansion-item--expanded {
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
	border: 1px solid $primary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}

.pcard {
	padding: 1rem;
	font-size: 0.85rem;
}

:deep(.er.q-expansion-item--collapsed) {
	background: $pink-1;
	border: 1px solid $negative;

	.title {
		color: $negative;
	}
}

@media screen and (max-width: 1345px) {
	.dol {
		grid-column: 1/2;
	}

	.newform .inp1 {
		grid-column: 2/3;
	}
}

@media screen and (max-width: 1070px) {
	.bt {
		grid-column: 2/3;
		margin-top: 0.5rem;
	}
}
</style>
