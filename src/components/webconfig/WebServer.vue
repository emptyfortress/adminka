<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req } from '@/utils/utils'

const props = defineProps({
	first: {
		type: Boolean,
		default: false,
	},
})

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.system, value => {
	if (value) {
		store.changeWebDefaults(3)
		emit('change')
	}
})
const db = ref(['AGSupport', 'DvTest', 'DvShowCase'])
const active = ref('AGSupport')
const login = ref('')
const pass = ref('')
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label(v-if="props.first") Конфигурация сервера приложений:
		.label(v-else) Адрес сервера приложений:
		q-input(dense outlined v-model="store.wc.server.address" bg-color="white" :rules="req" @blur="form.validate()")
		.help
			q-icon(name="mdi-help-circle-outline" color="primary" size="xs")
			.txt Текст-пояснение
		.label Подключаемая база данных:
		q-select(dense outlined v-model="active" bg-color="white" :options="db" :rules="req" @blur="form.validate()")
		.help
			q-icon(name="mdi-help-circle-outline" color="primary" size="xs")
			.txt Текст-пояснение
		.label Имя пользователя:
		q-input(dense outlined v-model="login" bg-color="white" :rules="req" @blur="form.validate()")
		.help
			q-icon(name="mdi-help-circle-outline" color="primary" size="xs")
			.txt Имя пользователя, под которым будет выполняться подключение
		.label Пароль:
		q-input(dense outlined type="password" v-model="pass" bg-color="white" :rules="req" @blur="form.validate()")
</template>

<style scoped lang="scss">
.blo {
	grid-template-columns: auto 450px 1fr;
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
</style>
