/* __placeholder__ */
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    hint: {
        type: String,
        default: 'Завершено успешно!',
    },
});
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
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" text-center"), }));
        {
            const __VLS_5 = {}.QIcon;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, name: ("mdi-emoticon-outline"), color: ("teal"), size: ("xl"), }));
            ({}.QIcon);
            const __VLS_7 = __VLS_6({ ...{}, name: ("mdi-emoticon-outline"), color: ("teal"), size: ("xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, name: ("mdi-emoticon-outline"), color: ("teal"), size: ("xl"), }));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_10 = __VLS_intrinsicElements["div"];
        const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
        const __VLS_12 = __VLS_11({ ...{}, class: (" text-bold text-center text-teal"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        ({}({ ...{}, class: (" text-bold text-center text-teal"), }));
        (props.hint);
        (__VLS_13.slots).default;
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["text-center"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["text-center"];
        __VLS_styleScopedClasses["text-teal"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        hint: {
            type: String,
            default: 'Завершено успешно!',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        hint: {
            type: String,
            default: 'Завершено успешно!',
        },
    },
});
//# sourceMappingURL=Finish.vue.js.map