/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const item = ref('one');
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    // @ts-ignore
    [QRadio, QRadio,];
    __VLS_intrinsicElements.input;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" text-bold"), }));
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_5 = {}.QForm;
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-mt-md column"), }));
        ({}.QForm);
        const __VLS_7 = __VLS_6({ ...{}, class: (" q-mt-md column"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (" q-mt-md column"), }));
        {
            const __VLS_10 = {}.QRadio;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, modelValue: ((__VLS_ctx.item)), val: ("one"), label: ("Стандартный (рекомендуется)"), }));
            ({}.QRadio);
            const __VLS_12 = __VLS_11({ ...{}, modelValue: ((__VLS_ctx.item)), val: ("one"), label: ("Стандартный (рекомендуется)"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, modelValue: ((__VLS_ctx.item)), val: ("one"), label: ("Стандартный (рекомендуется)"), }));
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["div"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16({ ...{}, class: (" row items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{}, class: (" row items-center"), }));
            {
                const __VLS_20 = {}.QRadio;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: (" q-mr-xl"), modelValue: ((__VLS_ctx.item)), val: ("two"), label: ("Другой"), }));
                ({}.QRadio);
                const __VLS_22 = __VLS_21({ ...{}, class: (" q-mr-xl"), modelValue: ((__VLS_ctx.item)), val: ("two"), label: ("Другой"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, class: (" q-mr-xl"), modelValue: ((__VLS_ctx.item)), val: ("two"), label: ("Другой"), }));
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            {
                const __VLS_25 = __VLS_intrinsicElements["input"];
                const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                const __VLS_27 = __VLS_26({ ...{}, class: (" fu"), type: ("file"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, class: (" fu"), type: ("file"), }));
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["column"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-mr-xl"];
        __VLS_styleScopedClasses["fu"];
    }
    var __VLS_slots;
    // @ts-ignore
    [item, item, item, item, item, item,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            item: item,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Step2.vue.js.map