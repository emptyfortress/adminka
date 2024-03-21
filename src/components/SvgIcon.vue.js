/* __placeholder__ */
import { defineComponent, computed } from 'vue';
export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'icon',
        },
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: '#333',
        },
        spin: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`);
        return { symbolId };
    },
});
const __VLS_componentsOption = {};
const __VLS_name = 'SvgIcon';
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.use;
    {
        const __VLS_0 = __VLS_intrinsicElements["svg"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, "aria-hidden": ("true"), class: ("icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, "aria-hidden": ("true"), class: ("icon"), }));
        ({ 'icon-spin': __VLS_ctx.spin });
        {
            const __VLS_5 = __VLS_intrinsicElements["use"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, href: ((__VLS_ctx.symbolId)), fill: ((__VLS_ctx.color)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, href: ((__VLS_ctx.symbolId)), fill: ((__VLS_ctx.color)), }));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [spin, symbolId, color, symbolId, color,];
    return __VLS_slots;
}
let __VLS_internalComponent;
//# sourceMappingURL=SvgIcon.vue.js.map