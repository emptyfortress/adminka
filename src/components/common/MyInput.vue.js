/* __placeholder__ */
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const modelValue = defineModel();
let __VLS_propsOption_defineProp;
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    {
        const __VLS_0 = {}.QInput;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.modelValue)), dense: (true), outlined: (true), bgColor: ("white"), }));
        ({}.QInput);
        const __VLS_2 = __VLS_1({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.modelValue)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.modelValue)), dense: (true), outlined: (true), bgColor: ("white"), }));
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["inp"];
    }
    var __VLS_slots;
    // @ts-ignore
    [modelValue, modelValue, modelValue,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            modelValue: modelValue,
        };
    },
    props: __VLS_propsOption_defineProp,
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: __VLS_propsOption_defineProp,
    emits: {},
});
//# sourceMappingURL=MyInput.vue.js.map