<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req, reqnum, reqtrue } from '@/utils/utils'

const props = defineProps({
	concrete: {
		type: Boolean,
		default: false,
	},
})

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.system, value => {
	if (value) {
		store.changeWebDefaults(2)
		emit('change')
	}
})
const options = ref([0, 1, 2])
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Максимальный таймаут, мс:
		q-input.short(dense outlined type="number" v-model="store.wc.system.timeout" bg-color="white" :rules="reqnum" @blur="form.validate()")
		.help
			q-icon(name="mdi-help-circle-outline" color="primary" size="xs") 
			.txt Максимальное время ожидания ответа от сервера приложений

		.label Задержка работы счетчиков, мс:
		q-input.short(dense outlined type="number" v-model="store.wc.system.counters" bg-color="white" :rules="reqnum" @blur="form.validate()")
		.help
			q-icon(name="mdi-help-circle-outline" color="primary" size="xs")
			.txt Время с момента загрузки web-клиента, через которое начинают работу счетчики (отправляется запрос)

</template>

<style scoped lang="scss">
.short {
	width: 150px;
}
.blo {
	grid-template-columns: auto 150px 1fr;
}
.help {
	display: flex;
	align-items: center;
	gap: 1rem;
	.q-icon {
		cursor: pointer;
	}
	.txt {
		color: $secondary;
		font-style: italic;
		font-size: 0.9rem;
		display: none;
		line-height: 1.2;
	}
	&:hover {
		.txt {
			display: block;
		}
	}
}
.long {
	grid-column: 2/-1;
	max-width: 500px;
}
</style>
