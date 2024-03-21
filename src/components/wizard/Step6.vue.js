/* __placeholder__ */
import { useWiz } from '@/stores/wiz';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const wiz = useWiz();
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
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" text-bold"), }));
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_5 = __VLS_intrinsicElements["div"];
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
        const __VLS_7 = __VLS_6({ ...{}, class: (" column q-mt-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (" column q-mt-md"), }));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.wiz.check))) {
            {
                const __VLS_10 = {}.QCheckbox;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }));
                ({}.QCheckbox);
                const __VLS_12 = __VLS_11({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }));
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            // @ts-ignore
            [wiz,];
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["column"];
        __VLS_styleScopedClasses["q-mt-md"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            wiz: wiz,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Step6.vue.js.map