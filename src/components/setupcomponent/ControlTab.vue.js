/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hour3 = ref(600);
const path = ref('');
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" all"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" all"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" arch"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" title"), }));
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: (" column"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" column"), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["div"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: (" check"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: (" check"), }));
                    {
                        const __VLS_25 = {}.QInput;
                        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, class: (" cs"), dense: (true), modelValue: ((__VLS_ctx.path)), label: ("Путь к файлу сценария"), }));
                        ({}.QInput);
                        const __VLS_27 = __VLS_26({ ...{}, class: (" cs"), dense: (true), modelValue: ((__VLS_ctx.path)), label: ("Путь к файлу сценария"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, class: (" cs"), dense: (true), modelValue: ((__VLS_ctx.path)), label: ("Путь к файлу сценария"), }));
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
                    {
                        const __VLS_30 = {}.QBtn;
                        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, class: (" wh"), unelevated: (true), round: (true), icon: ("mdi-dots-horizontal"), dense: (true), }));
                        ({}.QBtn);
                        const __VLS_32 = __VLS_31({ ...{}, class: (" wh"), unelevated: (true), round: (true), icon: ("mdi-dots-horizontal"), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                        ({}({ ...{}, class: (" wh"), unelevated: (true), round: (true), icon: ("mdi-dots-horizontal"), dense: (true), }));
                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    }
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_35 = __VLS_intrinsicElements["div"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, class: (" check"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: (" check"), }));
                    {
                        const __VLS_40 = __VLS_intrinsicElements["div"];
                        const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                        const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                        ({}({ ...{}, }));
                        (__VLS_43.slots).default;
                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                    }
                    {
                        const __VLS_45 = {}.QInput;
                        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, class: (" smm"), modelValue: ((__VLS_ctx.hour3)), type: ("number"), dense: (true), }));
                        ({}.QInput);
                        const __VLS_47 = __VLS_46({ ...{}, class: (" smm"), modelValue: ((__VLS_ctx.hour3)), type: ("number"), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                        ({}({ ...{}, class: (" smm"), modelValue: ((__VLS_ctx.hour3)), type: ("number"), dense: (true), }));
                        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                    }
                    {
                        const __VLS_50 = __VLS_intrinsicElements["div"];
                        const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                        const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                        ({}({ ...{}, }));
                        (__VLS_53.slots).default;
                        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                    }
                    {
                        const __VLS_55 = {}.QBtn;
                        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, class: (" q-ml-xl"), outline: (true), color: ("primary"), label: ("Выполнить"), size: ("sm"), }));
                        ({}.QBtn);
                        const __VLS_57 = __VLS_56({ ...{}, class: (" q-ml-xl"), outline: (true), color: ("primary"), label: ("Выполнить"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                        ({}({ ...{}, class: (" q-ml-xl"), outline: (true), color: ("primary"), label: ("Выполнить"), size: ("sm"), }));
                        const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                    }
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_60 = __VLS_intrinsicElements["div"];
            const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
            const __VLS_62 = __VLS_61({ ...{}, class: (" arch q-mt-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
            ({}({ ...{}, class: (" arch q-mt-xs"), }));
            {
                const __VLS_65 = __VLS_intrinsicElements["div"];
                const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}({ ...{}, }));
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
            {
                const __VLS_70 = {}.QBtn;
                const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, unelevated: (true), color: ("primary"), label: ("Пересоздать задания БД"), }));
                ({}.QBtn);
                const __VLS_72 = __VLS_71({ ...{}, unelevated: (true), color: ("primary"), label: ("Пересоздать задания БД"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Пересоздать задания БД"), }));
                const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
            }
            (__VLS_63.slots).default;
            const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["all"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["column"];
        __VLS_styleScopedClasses["check"];
        __VLS_styleScopedClasses["cs"];
        __VLS_styleScopedClasses["wh"];
        __VLS_styleScopedClasses["check"];
        __VLS_styleScopedClasses["smm"];
        __VLS_styleScopedClasses["q-ml-xl"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-xs"];
    }
    var __VLS_slots;
    // @ts-ignore
    [path, path, path, hour3, hour3, hour3,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            hour3: hour3,
            path: path,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=ControlTab.vue.js.map