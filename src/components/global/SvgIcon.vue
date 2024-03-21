<template lang="pug">
component(
	:is="dynamicComponent"
	class="svg-icon"
	:width="svgSize"
	:height="svgSize"
	:class="{ 'add-hover': !!hoverColorBind, 'spin' : spin }"
	)
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import { sizes, defaults } from './iconsConstant'

const props = defineProps({
	name: {
		type: String,
		required: true,
	},

	color: {
		type: String,
		default: defaults.color,
	},

	size: {
		type: String,
		default: defaults.size,
	},

	hoverColor: [Boolean, String],

	spin: {
		type: Boolean,
		default: false,
	},
})

const dynamicComponent = computed(() => {
	const name = props.name.charAt(0).toUpperCase() + props.name.slice(1) + 'Icon'
	return defineAsyncComponent(() => import(`../icons/${name}.vue`))
})

const colorBind = computed(() => {
	const color = props.color ? props.color : defaults.color
	return getVarOrColorValue(color)
})

const hoverColorBind = computed(() => {
	if (props.hoverColor === false) return

	if (props.hoverColor === true || !props.hoverColor) return defaults.hoverColor
	return getVarOrColorValue(props.hoverColor)
})

const svgSize = computed(() => {
	const size = props.size ? props.size : defaults.size
	return getRealSize(size)
})
const getRealSize = (str: any) => {
	if (str.endsWith('px')) return str.slice(0, str.length - 2)
	return sizes[str as 'sm' | 'md' | 'lg' | 'xl'].size
}

const getVarOrColorValue = (str: string) => {
	return str.startsWith('var:') ? str.replace(/^var:/, `var(--${defaults.varPrefix}`) + ')' : str
}
</script>

<style scoped lang="scss">
.svg-icon {
	color: v-bind(colorBind);
	&.add-hover:hover {
		cursor: pointer;
		color: v-bind(hoverColorBind);
	}
	&.spin {
		animation: icon-spin 2s infinite linear;
	}
}

@keyframes icon-spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
</style>
