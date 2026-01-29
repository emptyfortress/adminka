<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { files } from '@/stores/fileTree'
import MyInput from '@/components/common/MyInput.vue'

const fil = ref(files)

const options = [
	{
		label: 'Не индексировать',
		value: 'notIndex',
	},
	{ label: 'Индексировать оперативные файлы', value: 'use' },
	{ label: 'Индексировать оперативные и архивные файлы', value: 'use1' },
]

const fileregim = ref('use')

const changed = ref(false)
const changed1 = ref(false)

const selfiletypes = ref(['.doc', '.docx', '.rtf'])

watch(
	selfiletypes,
	newVal => {
		changed1.value = true
	},
	{ deep: true }
)
watch(
	fileregim,
	newVal => {
		changed.value = true
	},
	{ deep: true }
)
const reset = () => {
	fileregim.value = 'use'
	changed.value = false
}
const reset1 = () => {
	selfiletypes.value = ['.doc', '.docx', '.rtf']
	changed1.value = false
}
const filterRef = ref()
const filter = ref('')
//
// Filter files based on the filter input
const filteredFiles = computed(() => {
	if (!filter.value) return files
	return fil.value.filter(file =>
		file.label?.toLowerCase().includes(filter.value.toLowerCase())
	)
})

const toggleFileType = (fileLabel: string) => {
	const filetypes = selfiletypes.value
	const index = filetypes.indexOf(fileLabel)
	if (index === -1) {
		filetypes.push(fileLabel)
	} else {
		filetypes.splice(index, 1)
	}
}
</script>

<template lang="pug">
.data
	q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
	.inner(v-if="changed")
	label Режим индексирования файлов
	q-option-group(
		:options="options"
		type="radio"
		v-model="fileregim")
	// .descr Типы файлов, которые будут индексироваться для ПП.

.data
	q-btn.refresh(v-if="changed1" flat icon="mdi-restore" color="secondary" dense @click="reset1") 
	.inner(v-if="changed1")
	label Индексируемые типы файлов
	.descr Типы файлов, которые будут индексироваться для ПП.
	.grd
		div
			MyInput(
				ref="filterRef",
				v-model="filter",
				prependIcon='mdi-magnify'
				clearable
				noValidation
			)
			q-list
				q-item(
					v-for="file in filteredFiles"
					:key="file.label"
					clickable
					v-ripple
					dense
					@click="toggleFileType(file.label)"
				)
					q-item-section(side)
						q-checkbox(
							v-model="selfiletypes"
							dense
              :val="file.label"
						)
					q-item-section
						q-item-label {{ file.label }}
		.sep
		div
			.ind Индексируемые типы файлов
			q-list(v-if='selfiletypes.length')
				q-item(
					v-for="child in selfiletypes"
					:key="child"
					dense
				)
					q-item-section(side)
						q-icon(name="mdi-check" color="secondary" size='12px')
					q-item-section
						q-item-label {{ child }}

			.text-body2.q-mt-sm.text-grey(v-else) Нет выбранных элементов

</template>

<style scoped lang="scss">
.ind {
	color: #666;
}
:deep(.q-item__section--side) {
	padding-right: 0;
}
:deep(.q-checkbox--dense .q-checkbox__inner) {
	width: 0.4em;
	min-width: 0.4em;
	height: 0.4em;
	margin-right: 0.3rem;
}
.grd {
	display: grid;
	grid-template-columns: 1fr 1px 1fr;
	column-gap: 1rem;
	margin-left: 2rem;
	// margin-top: 1rem;
}
.sep {
	width: 1px;
	height: 100%;
	background: #ccc;
}
</style>
