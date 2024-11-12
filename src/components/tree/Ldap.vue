<script setup lang="ts">
import { ref } from 'vue'
import BreadCrumbs from '@/components/tree/BreadCrumbs.vue'
import { useRouter, useRoute } from 'vue-router'
import MyField from '@/components/common/MyField.vue'
import SimpleRadioGroup from '@/components/common/SimpleRadioGroup.vue'

const router = useRouter()
const route = useRoute()

const list = [
	{ id: 0, label: 'Настройка доменных каталогов', field: 'domain', selected: false },
	{ id: 1, label: 'Настройки подключения ldap', field: 'ldap', selected: false },
]

const selected = ref('Настройка доменных каталогов')

const select = (e: any) => {
	selected.value = e.label
	let path = route.path
	router.replace(path + '#' + e.field)
	document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' })
}

const cat = ref([
	{
		id: 0,
		main: 'domain.com',
		label: 'Полное имя домена',
		descr: 'Полное имя домена указывается в формате domain.com',
		readonly: false,
	},
	{
		id: 1,
		main: 'DOMAIN',
		label: 'NetBios-имя домена',
		descr: 'NetBios-имя домена указывается в формате DOMAIN',
		readonly: false,
	},
])
const Radio = ref([
	{
		id: 0,
		label: 'Тип аутентификации в LDAP',
		descr: 'Тип аутентификации в LDAP',
		disable: false,
		startValue: '1',
		group: [
			{ label: 'Basic', val: '1' },
			{ label: 'Advanced', val: '2' },
		],
	},
])
const ldap1 = ref([
	{
		id: 0,
		main: 'user@domain.com',
		label: 'Логин',
		descr:
			'Логин пользователя для подключения к LDAP-каталогам текущего домена в формате user@example.com',
		readonly: false,
	},
	{
		id: 1,
		main: '',
		label: 'Пароль',
		descr:
			'Пароль пользователя для подключения к LDAP-каталогам текущего домена',
		readonly: false,
		type: 'password',
	},
])
const ldap = ref([
	{
		id: 0,
		main: 'domain.com',
		label: 'Адреса серверов LDAP',
		descr: 'Адреса серверов LDAP данного домена',
		readonly: false,
	},
	{
		id: 1,
		main: '10000',
		label: 'Таймаут',
		descr: 'Время ожидания ответа LDAP сервера, мс',
		readonly: false,
		type: 'number',
	},
])
</script>

<template lang='pug'>
q-page
	BreadCrumbs
	.container
		.grid
			q-list.left(dense)
				q-item(clickable v-for="item in list" :key="item.id" :class="{ selected: selected == item.label }" @click="select(item)")
					q-item-section
						q-item-label {{ item.label }}

			q-scroll-area.right
				.q-ml-lg
					#domain.zg Настройка доменных каталогов
					MyField(
						v-model:main="item.main" 
						v-for="item in cat" 
						:key="item.id" 
						:label="item.label" 
						:descr="item.descr" 
						:readonly="item.readonly"
						)

					#ldap.zg Настройки подключения к LDAP каталогу домена
					MyField(
						v-model:main="item.main" 
						v-for="item in ldap" 
						:key="item.id" 
						:label="item.label" 
						:descr="item.descr" 
						:readonly="item.readonly"
						:type='item.type'
						)
					SimpleRadioGroup(
						v-for="item in Radio" 
						:key="item.id" 
						:label="item.label" 
						:descr="item.descr" 
						:disable="item.disable"
						:startValue="item.startValue"
						:group="item.group"
					)

					MyField(
						v-model:main="item.main" 
						v-for="item in ldap1" 
						:key="item.id" 
						:label="item.label" 
						:descr="item.descr" 
							:readonly="item.readonly"
							:type='item.type'
							)
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: start;
	column-gap: 3rem;
	row-gap: 0.5rem;
}

.zg {
	font-size: 1.3rem;
	font-weight: 600;
	text-transform: uppercase;
	color: $secondary;
	margin-top: 2rem;
	margin-left: 2rem;

	&:first-child {
		margin-top: 0;
	}
}

.selected {
	color: $blue-10;
	border: 1px solid hsl(221 41% 73% / 1);
	background: var(--tree-selection);
}

.right,
.left {
	height: calc(100vh - 165px);
	width: 100%;
	// background: pink;
}

.container {
	margin: 1rem 2rem;
}
</style>
