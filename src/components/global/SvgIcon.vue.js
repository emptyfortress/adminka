/* __placeholder__ */
import { computed } from 'vue';
import { defineAsyncComponent } from 'vue';
import { sizes, defaults } from './iconsConstant';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
});
const dynamicComponent = computed(() => {
    const name = props.name.charAt(0).toUpperCase() + props.name.slice(1) + 'Icon';
    return defineAsyncComponent(() => import(`../icons/${name}.vue`));
});
const colorBind = computed(() => {
    const color = props.color ? props.color : defaults.color;
    return getVarOrColorValue(color);
});
const hoverColorBind = computed(() => {
    if (props.hoverColor === false)
        return;
    if (props.hoverColor === true || !props.hoverColor)
        return defaults.hoverColor;
    return getVarOrColorValue(props.hoverColor);
});
const svgSize = computed(() => {
    const size = props.size ? props.size : defaults.size;
    return getRealSize(size);
});
const getRealSize = (str) => {
    if (str.endsWith('px'))
        return str.slice(0, str.length - 2);
    return sizes[str].size;
};
const getVarOrColorValue = (str) => {
    return str.startsWith('var:') ? str.replace(/^var:/, `var(--${defaults.varPrefix}`) + ')' : str;
};
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    __VLS_ctx.colorBind;
    __VLS_ctx.hoverColorBind;
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    {
        const __VLS_0 = (__VLS_ctx.dynamicComponent);
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, is: ((__VLS_ctx.dynamicComponent)), class: ("svg-icon"), width: ((__VLS_ctx.svgSize)), height: ((__VLS_ctx.svgSize)), }));
        const __VLS_2 = __VLS_1({ ...{}, is: ((__VLS_ctx.dynamicComponent)), class: ("svg-icon"), width: ((__VLS_ctx.svgSize)), height: ((__VLS_ctx.svgSize)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, is: ((__VLS_ctx.dynamicComponent)), class: ("svg-icon"), width: ((__VLS_ctx.svgSize)), height: ((__VLS_ctx.svgSize)), }));
        ({ 'add-hover': !!__VLS_ctx.hoverColorBind, 'spin': __VLS_ctx.spin });
        __VLS_styleScopedClasses = ({ 'add-hover': !!hoverColorBind, 'spin': spin });
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["svg-icon"];
    }
    var __VLS_slots;
    // @ts-ignore
    [dynamicComponent, dynamicComponent, svgSize, svgSize, dynamicComponent, svgSize, svgSize, dynamicComponent, svgSize, svgSize, hoverColorBind, spin,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            dynamicComponent: dynamicComponent,
            colorBind: colorBind,
            hoverColorBind: hoverColorBind,
            svgSize: svgSize,
        };
    },
    props: {
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
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
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
    },
});
//# sourceMappingURL=SvgIcon.vue.js.map