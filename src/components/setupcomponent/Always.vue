<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import MyField from '@/components/common/MyField.vue'

const always = ref([
	{
		id: 0,
		checkbox: true,
		check: false,
		label: 'AlwaysOn',
		info: 'Флаг активирует работу сервера Docsvision с группами доступности AlwaysOn.',
		descr: 'Использовать AlwaysOn',
	},
])
const soft = ref([
	{
		id: 0,
		checkbox: true,
		check: false,
		label: 'SoftPoint',
		info: 'Флаг обеспечивает подключение к узлам AlwaysOn в кластере SoftPoint через специальные алгоритмы.',
		descr: 'Использовать SoftPoint',
	},
])

const initialNodes = [
	{
		id: 0,
		label: 'New2016',
		active: true,
		status: 1,
	},
	{
		id: 1,
		label: 'Node2',
		active: false,
		status: 1,
	},
	{
		id: 2,
		label: 'MySpareNode',
		active: false,
		status: 2,
	},
]

// делаем реактивный массив
const nodes = reactive(initialNodes.map(n => ({ ...n })))

const changed = ref(false)

watch(
	() => nodes.map(n => n.active),
	(val, oldVal) => {
		if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
			changed.value = true
		}
	}
)

const reset = () => {
	// полностью откатываем в исходное состояние
	nodes.splice(0, nodes.length, ...initialNodes.map(n => ({ ...n })))
	changed.value = false
}

const dis = ref(true)
const update = (e: any) => {
	dis.value = !e
}
</script>

<template lang="pug">
q-list
	MyField(
		v-model:check="item.check" 
		v-for="item in always" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:info="item.info" 
		:checkbox="item.checkbox"
		@update="update"
		)

	.data(:class='{dis: dis}')
		q-btn.refresh(v-if="changed" flat icon="mdi-restore" color="secondary" dense @click="reset") 
		.inner(v-if="changed")
		label Узлы AlwaysOn
		.checks(v-for="item in nodes" :key='item.id')
			q-checkbox(v-model="item.active" :disable='dis')
			.q-mr-sm {{ item.label }}
			q-icon(name="mdi-circle-slice-8" color="teal" v-if='item.status == 1')
				q-tooltip HEALTHY
			q-icon(name="mdi-circle-slice-8" color="red" v-else)
				q-tooltip NOT_HEALTHY

	MyField(:class='{dis: dis}'
		v-model:check="item.check" 
		v-for="item in soft" 
		:key="item.id" 
		:label="item.label" 
		:descr="item.descr" 
		:info="item.info" 
		:disable="dis"
		:checkbox="item.checkbox"
		)
</template>

<style scoped lang="scss">
.data {
	padding: 1rem;
	padding-top: 0.3rem;
	margin-left: 1rem;
	border: 1px solid transparent;
	position: relative;

	&:hover {
		background: #e0e0e0;
		border: 1px solid #ccc;

		.q-btn {
			display: inline-flex;
		}
	}

	.q-input,
	.q-select {
		max-width: 400px;
		margin-top: 4px;
	}

	label {
		font-size: 1rem;
		font-weight: 600;
		color: #666;
	}

	.descr {
		color: #666;
	}

	.inner {
		width: 1px;

		position: absolute;
		top: 0.5rem;
		bottom: 1rem;
		left: 0.2rem;
		border-right: 3px solid $primary;
	}

	.refresh {
		position: absolute;
		left: -2rem;
		top: 0.1rem;
		display: none;
	}

	.add {
		margin-top: 4px;
	}
}
.checks {
	display: flex;
	align-items: center;
	// max-width: 350px;
	// display: grid;
	// grid-template-columns: 42px 1fr;
}
.dis {
	opacity: 0.6;
}
</style>
