<template>
	<q-list class="q-mt-md" separator>
		<q-expansion-item v-for="(panel, index) in store.panels" group="group" v-model="panel.expanded" switch-toggle-side
			:key="panel.id" :class="{ er: panel.neg }" :label="panel.title">
			<template v-slot:header>
				<div class="head" :class="{ er: panel.neg }">
					<div class="title">{{ panel.title }}</div>
					<div class="icon">
						<q-btn dense flat round @click.stop="reset(panel.id)" v-if="panel.change">
							<q-icon name="mdi-reload" style="transform: scaleX(-1)"></q-icon>
							<q-tooltip>Восстановить значения по умолчанию</q-tooltip>
						</q-btn>
						<q-btn flat color="primary" size="sm" label="Сохранить" @click.stop="reset(panel.id)"
							v-if="panel.change"></q-btn>
						<q-icon name="mdi-alert-circle" size="20px" color="negative" v-if="panel.neg"></q-icon>
					</div>
				</div>
			</template>

			<div class="pcard">
				<component :is="calcComponent(panel.id)" :key="key" @change="change" @haserror="setNeg(index)"
					@noerror="setPos(index)"></component>
			</div>
		</q-expansion-item>
	</q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Licence from '@/components/setupcomponent/Licence.vue'
import Server from '@/components/setupcomponent/Server.vue'
import Database from '@/components/setupcomponent/Database.vue'
import Access from '@/components/setupcomponent/Access.vue'
// import Client from '@/components/setupcomponent/Client.vue'
import { useStore } from '@/stores/store'

const emit = defineEmits(['change'])

const setNeg = (e: number) => {
	store.panels[e].neg = true
}
const setPos = (e: number) => {
	store.panels[e].neg = false
}

const store = useStore()
const calcComponent: any = (e: number) => {
	switch (e) {
		case 0:
			return Licence
		case 1:
			return Database
		case 2:
			return Server
		case 3:
			return Access
		case 4:
			return null
	}
}
const key = ref(0)

const reset = (e: number) => {
	if (e === 2) {
		store.server.$reset()
		store.panels[e].change = false
	}
	key.value += 1
	store.panels[e].neg = false
	if (e === 3) {
		store.access.$reset()
		store.panels[e].change = false
	}
	key.value += 1
	store.panels[e].neg = false
}
const change = () => {
	emit('change')
}
</script>

<style scoped lang="scss">
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
</style>
