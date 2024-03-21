/* __placeholder__ */
import { ref } from 'vue';
import Group from '@/components/setupcomponent/Group.vue';
import Hran from '@/components/setupcomponent/Hran.vue';
import Rule from '@/components/setupcomponent/Rule.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const split1 = ref(32);
const split2 = ref(42);
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
    __VLS_components.QSplitter;
    __VLS_components.qSplitter;
    __VLS_components.QSplitter;
    __VLS_components.qSplitter;
    // @ts-ignore
    [QSplitter, QSplitter,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.Hran;
    __VLS_components.Hran;
    // @ts-ignore
    [Hran,];
    __VLS_components.Group;
    __VLS_components.Group;
    // @ts-ignore
    [Group,];
    __VLS_components.Rule;
    __VLS_components.Rule;
    // @ts-ignore
    [Rule,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" change"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" change"), }));
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_5 = __VLS_intrinsicElements["div"];
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
        const __VLS_7 = __VLS_6({ ...{}, class: (" outer"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (" outer"), }));
        {
            const __VLS_10 = {}.QSplitter;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: (" spl"), modelValue: ((__VLS_ctx.split1)), }));
            ({}.QSplitter);
            const __VLS_12 = __VLS_11({ ...{}, class: (" spl"), modelValue: ((__VLS_ctx.split1)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" spl"), modelValue: ((__VLS_ctx.split1)), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["template"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                {
                    (__VLS_13.slots).before;
                    {
                        const __VLS_19 = {}.Hran;
                        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{}, }));
                        ({}.Hran);
                        const __VLS_21 = __VLS_20({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                        ({}({ ...{}, }));
                        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
                    }
                    // @ts-ignore
                    [split1, split1, split1,];
                }
            }
            {
                const __VLS_24 = __VLS_intrinsicElements["template"];
                const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
                const __VLS_26 = __VLS_25({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                ({}({ ...{}, }));
                {
                    (__VLS_13.slots).after;
                    {
                        const __VLS_28 = {}.QSplitter;
                        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{}, class: (" spl"), modelValue: ((__VLS_ctx.split2)), }));
                        ({}.QSplitter);
                        const __VLS_30 = __VLS_29({ ...{}, class: (" spl"), modelValue: ((__VLS_ctx.split2)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                        ({}({ ...{}, class: (" spl"), modelValue: ((__VLS_ctx.split2)), }));
                        {
                            const __VLS_33 = __VLS_intrinsicElements["template"];
                            const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
                            const __VLS_35 = __VLS_34({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                            ({}({ ...{}, }));
                            {
                                (__VLS_31.slots).before;
                                {
                                    const __VLS_37 = {}.Group;
                                    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, }));
                                    ({}.Group);
                                    const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                                    ({}({ ...{}, }));
                                    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
                                }
                                // @ts-ignore
                                [split2, split2, split2,];
                            }
                        }
                        {
                            const __VLS_42 = __VLS_intrinsicElements["template"];
                            const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
                            const __VLS_44 = __VLS_43({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                            ({}({ ...{}, }));
                            {
                                (__VLS_31.slots).after;
                                {
                                    const __VLS_46 = {}.Rule;
                                    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, }));
                                    ({}.Rule);
                                    const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                                    ({}({ ...{}, }));
                                    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                                }
                            }
                        }
                        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
                    }
                }
            }
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["change"];
        __VLS_styleScopedClasses["outer"];
        __VLS_styleScopedClasses["spl"];
        __VLS_styleScopedClasses["spl"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Group: Group,
            Hran: Hran,
            Rule: Rule,
            split1: split1,
            split2: split2,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Outer.vue.js.map