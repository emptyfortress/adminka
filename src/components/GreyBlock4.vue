<template>
	<div
		class="grey"
		:class="{ edit: editMode }"
	>
		<div class="current">{{ props.name }}</div>
		<q-form>
			<div class="form">
				<div class="label">Название конфигурации:</div>
				<q-input
					v-model="form.name"
					dense
					outlined
					bg-color="white"
					lazy-rules
					:rules="req"
				/>
				<div class="def">
					<q-checkbox
						v-model="form.def"
						dense
						label="Использовать по умолчанию"
					></q-checkbox>
				</div>
				<div class="but">
					<q-btn
						round
						flat
						icon="mdi-content-duplicate"
						@click="duble"
					>
						<q-tooltip>Дублировать</q-tooltip>
					</q-btn>
					<q-btn
						round
						flat
						icon="mdi-trash-can-outline"
					>
						<q-tooltip>Удалить</q-tooltip>
						<q-menu>
							<q-list>
								<q-item
									class="pink"
									clickable
									v-close-popup
									@click="del"
								>
									<q-item-section>Удалить</q-item-section>
								</q-item>
							</q-list>
						</q-menu>
					</q-btn>
				</div>
			</div>
			<Expand @change="setEditMode" />
		</q-form>
		<q-card-actions
			align="right"
			v-if="editMode"
		>
			<q-btn
				flat
				label="Отмена"
				@click="otmena"
			></q-btn>
			<q-btn
				unelevated
				color="primary"
				label="Сохранить все"
				@click="save"
			></q-btn>
		</q-card-actions>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'

import { useStore } from '@/stores/store'
import Expand from '@/components/Expand.vue'

const store = useStore()

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})

const editMode = ref(false)
const emit = defineEmits(['delete', 'duble'])
const del = () => {
	emit('delete')
}
const duble = () => {
	emit('duble', props.name)
}

const form = reactive({
	name: props.name,
	def: false,
})
const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

watch(form, (value) => {
	if (value) {
		editMode.value = true
	}
})
const setEditMode = () => {
	editMode.value = true
}

const otmena = () => {
	editMode.value = false
	store.server.$reset()
}

const $q = useQuasar()
const save = () => {
	if (form.name.length === 0) {
		$q.notify({
			message: 'Заполните обязательные поля',
			color: 'negative',
		})
	} else if (form.name !== props.name) {
	}
	store.server.$reset()
	store.panels[1].change = false
	editMode.value = false
	if (form.name.length > 0 && form.name !== props.name) {
		let currentConfigIndex = store.config.findIndex((item) => item.name === props.name)
		store.config[currentConfigIndex].name = form.name
		store.setTabs(form.name)
	}
}
</script>

<style scoped lang="scss">
.form {
	grid-template-columns: 170px 1fr 1fr 120px;

	.but {
		text-align: right;
	}

	.def {
		margin-top: 8px;
	}

	@media screen and (max-width: 1180px) {
		grid-template-columns: 170px 1fr 120px;

		.def {
			grid-column: 2/3;
		}

		.but {
			grid-row: 1/2;
			grid-column: 3/4;
		}
	}
}
</style>
