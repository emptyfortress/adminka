<script setup lang="ts">
import { ref, computed } from 'vue'
import { files } from '@/stores/fileTree'
import { useStepperStore } from '@/stores/useStepperStore'
import MyInput from '@/components/common/MyInput.vue'

const stepper = useStepperStore()

const filterRef = ref()
const filter = ref()
const expanded = ref([])

const options = [
  {
    label: 'Не индексировать',
    value: 'notIndex',
  },
  { label: 'Индексировать оперативные файлы', value: 'use' },
  { label: 'Индексировать оперативные и архивные файлы', value: 'use1' },
]

// Get the labels of all checked file types
const checkedItems = computed(() => {
  return stepper.step6.filetypes
    .map(fileId => {
      // Find the file by its label (now using label directly as identifier)
      const foundFile = files.find(file => file.label === fileId)
      return foundFile ? foundFile.label : null
    })
    .filter(Boolean) // Filter out any null values
    .join(', ') // Join with commas
})
</script>

<template lang="pug">
.all700
  .arch
    .grid
      .text-bold.q-mt-sm Режим индексирования файлов:
      q-option-group(
        :options="options"
        type="radio"
        v-model="stepper.step6.fileregim")
  transition(name='slide-top')
    .sid(v-if='!!stepper.payload.fileregim && stepper.payload.fileregim !== "notIndex"')
      .arch
        .row.items-center.justify-between
          .text-bold Типы файлов:
          MyInput(
            ref="filterRef",
            v-model="filter",
            prependIcon='mdi-magnify'
            clearable
            noValidation
          )
        q-list(
          bordered
          separator
        )
          q-item(
            v-for="file in files"
            :key="file.label"
            clickable
            v-ripple
          )
            q-item-section(side)
              q-checkbox(
                v-model="stepper.step6.filetypes"
                :val="file.label"
                dense
              )
            q-item-section
              q-item-label {{ file.label }}
      .arch
        .text-bold Индексируемые файлы:
        .text-body2.q-mt-sm(:class="checkedItems ? '' : 'text-grey'") {{ checkedItems || 'Нет выбранных элементов' }}
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
}
.sid {
  display: grid;
  grid-template-columns: 410px 300px;
  align-items: start;
  column-gap: 0.5rem;
  margin-top: 0.5rem;
}
.all700 {
  width: 720px;
  margin: 0 auto;
}

:deep(.q-checkbox--dense .q-checkbox__inner) {
  width: 0.4em;
  min-width: 0.4em;
  height: 0.4em;
  margin-right: 0.3rem;
}
</style>
