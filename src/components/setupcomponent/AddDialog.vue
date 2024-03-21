<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	showAdd: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['addGroup', 'update:modelValue'])

const name = ref()

const close = () => {
	emit('update:modelValue', false)
}
</script>

<template>
	<q-dialog :model-value="props.showAdd">
		<q-card>
			<q-card-section class="row items-center q-pb-none">
				<div class="text-h6">
					<slot name="header" />
				</div>
				<q-space />
				<q-btn icon="mdi-close" flat round dense @click="close" />
			</q-card-section>

			<q-card-section>
				<slot name="main" />
			</q-card-section>

			<q-card-section>
				<q-card-actions align="right">
					<slot name="actions" />
				</q-card-actions>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<style scoped lang="scss">
.q-card {
	min-width: 400px;
}
</style>
