<template lang="pug">
q-dialog(:modelValue='props.edit' persistent position='bottom' full-width)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-database-cog')
					span {{ props.bd.psevdo }}

			q-tabs.text-secondary(v-model='mytab' dense)
				q-tab(v-for='tab in tabs.tabs' :key='tab.name' :name='tab.name')
					span {{tab.label}}
						q-badge(rounded float color="red" align="top" v-if="tab.modified")

			q-tab-panels(v-model='mytab' animated)
				q-tab-panel(name='prop')
					component(:is="PropertyTab" :bd="props.bd" )
				q-tab-panel(name='control')
					component(:is="ControlTab" :bd="props.bd")
				q-tab-panel(name='outer')
					component(:is="Outer")
				q-tab-panel(name='arch')
					component(:is="ArchTab" :bd="props.bd")
				q-tab-panel(name='cache')
					component(:is="CacheTab" :bd="props.bd")
				q-tab-panel(name='module')
					component(:is="ModuleTab" :bd="props.bd")
		.bottom
			q-separator
			q-card-actions(align='center')
				q-btn(:disable="mytab === 'outer'" flat color="primary" @click="close") Отмена
				q-btn(:disable="mytab === 'outer'" unelevated color="primary" @click="close") Применить

		q-btn(flat round icon="mdi-close" color="primary" @click="close").close 
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue'
import { useTabs } from '@/stores/tabs'
import Outer from '@/components/setupcomponent/Outer.vue'
import PropertyTab from '@/components/setupcomponent/PropertyTab.vue'
import ControlTab from '@/components/setupcomponent/ControlTab.vue'
import ArchTab from '@/components/setupcomponent/ArchTab.vue'
import CacheTab from '@/components/setupcomponent/CacheTab.vue'
import ModuleTab from '@/components/setupcomponent/ModuleTab.vue'

const props = defineProps({
	edit: {
		type: Boolean,
		default: false,
	},
	bd: {
		type: Object,
		default: {
			psevdo: 'AGSupport',
			name: 'AGSupport_1',
			server: 'Docsvision 1',
			index: 'yes',
			version: 4373,
			date: '20.10.2021',
			def: true,
		},
	},
	tab: {
		type: String,
		default: 'prop',
	},
})

const emit = defineEmits(['update:modelValue'])
const close = () => {
	emit('update:modelValue', false)
}

const mytab = ref('control')

onUpdated(() => {
	mytab.value = props.tab
})

const tabs = useTabs()
</script>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background: var(--bg-grey);
}
.q-tab-panels {
	background: transparent;
}

.title {
	font-size: 1.5rem;
	text-align: center;
	color: $secondary;
	vertical-align: baseline;

	.q-icon {
		margin-right: 0.5rem;
		margin-top: -3px;
		font-size: 1.6rem;
	}
}

.change {
	font-size: 1rem;
	text-align: center;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;

	.q-icon {
		font-size: 1.3rem;
		margin-right: 0.5rem;
	}
}
.q-badge {
	padding: 0 4px;
	min-height: 8px;
}
.close {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
.bottom {
	background: white;
}
</style>
