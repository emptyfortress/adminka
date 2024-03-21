/* __placeholder__ */
import { ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const prov = ref('InMemory');
const line = ref('');
const pass = ref('');
const schet = ref(false);
const options = ['InMemory', 'NoCache', 'Redis'];
const loading = ref(false);
const check = ref(false);
const test = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        check.value = true;
    }, 2000);
};
const calcColor = computed(() => {
    if (check.value === true) {
        return 'teal';
    }
    return 'primary';
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox,];
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
                const __VLS_17 = __VLS_16({ ...{}, class: (" more"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" more"), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["label"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, }));
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.QSelect;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, modelValue: ((__VLS_ctx.prov)), options: ((__VLS_ctx.options)), dense: (true), }));
                    ({}.QSelect);
                    const __VLS_27 = __VLS_26({ ...{}, modelValue: ((__VLS_ctx.prov)), options: ((__VLS_ctx.options)), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.prov)), options: ((__VLS_ctx.options)), dense: (true), }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = __VLS_intrinsicElements["label"];
                    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                    const __VLS_32 = __VLS_31({ ...{}, class: (({ dis: __VLS_ctx.prov !== 'Redis' })), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, class: (({ dis: __VLS_ctx.prov !== 'Redis' })), }));
                    __VLS_styleScopedClasses = ({ dis: prov !== 'Redis' });
                    (__VLS_33.slots).default;
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_35 = __VLS_intrinsicElements["div"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, class: (" row items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: (" row items-center"), }));
                    {
                        const __VLS_40 = {}.QInput;
                        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, modelValue: ((__VLS_ctx.line)), dense: (true), disable: ((__VLS_ctx.prov !== 'Redis')), }));
                        ({}.QInput);
                        const __VLS_42 = __VLS_41({ ...{}, modelValue: ((__VLS_ctx.line)), dense: (true), disable: ((__VLS_ctx.prov !== 'Redis')), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.line)), dense: (true), disable: ((__VLS_ctx.prov !== 'Redis')), }));
                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                    }
                    {
                        const __VLS_45 = {}.QBtn;
                        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ 'onClick': {}, }, class: (" q-ml-md"), unelevated: (true), color: ((__VLS_ctx.calcColor)), size: ("xs"), loading: ((__VLS_ctx.loading)), disable: ((__VLS_ctx.prov !== 'Redis')), }));
                        ({}.QBtn);
                        const __VLS_47 = __VLS_46({ ...{ 'onClick': {}, }, class: (" q-ml-md"), unelevated: (true), color: ((__VLS_ctx.calcColor)), size: ("xs"), loading: ((__VLS_ctx.loading)), disable: ((__VLS_ctx.prov !== 'Redis')), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                        ({}({ ...{ 'onClick': {}, }, class: (" q-ml-md"), unelevated: (true), color: ((__VLS_ctx.calcColor)), size: ("xs"), loading: ((__VLS_ctx.loading)), disable: ((__VLS_ctx.prov !== 'Redis')), }));
                        let __VLS_50 = { 'click': __VLS_pickEvent(__VLS_49['click'], {}.onClick) };
                        __VLS_50 = { click: (__VLS_ctx.test) };
                        if (__VLS_ctx.check) {
                            {
                                const __VLS_51 = {}.QIcon;
                                const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, name: ("mdi-check-bold"), color: ("white"), }));
                                ({}.QIcon);
                                const __VLS_53 = __VLS_52({ ...{}, name: ("mdi-check-bold"), color: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                ({}({ ...{}, name: ("mdi-check-bold"), color: ("white"), }));
                                const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                            }
                            // @ts-ignore
                            [prov, options, prov, options, prov, options, prov, prov, line, prov, line, prov, line, prov, calcColor, loading, prov, calcColor, loading, prov, calcColor, loading, prov, test, check,];
                        }
                        else {
                            {
                                const __VLS_56 = __VLS_intrinsicElements["span"];
                                const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                                const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                                ({}({ ...{}, }));
                                (__VLS_59.slots).default;
                                const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                            }
                        }
                        (__VLS_48.slots).default;
                        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                        let __VLS_49;
                    }
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_61 = __VLS_intrinsicElements["label"];
                    const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
                    const __VLS_63 = __VLS_62({ ...{}, class: (({ dis: __VLS_ctx.prov !== 'Redis' })), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                    ({}({ ...{}, class: (({ dis: __VLS_ctx.prov !== 'Redis' })), }));
                    __VLS_styleScopedClasses = ({ dis: prov !== 'Redis' });
                    (__VLS_64.slots).default;
                    const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                }
                {
                    const __VLS_66 = {}.QInput;
                    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, modelValue: ((__VLS_ctx.pass)), dense: (true), disable: ((__VLS_ctx.prov !== 'Redis')), }));
                    ({}.QInput);
                    const __VLS_68 = __VLS_67({ ...{}, modelValue: ((__VLS_ctx.pass)), dense: (true), disable: ((__VLS_ctx.prov !== 'Redis')), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.pass)), dense: (true), disable: ((__VLS_ctx.prov !== 'Redis')), }));
                    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                }
                {
                    const __VLS_71 = __VLS_intrinsicElements["label"];
                    const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
                    const __VLS_73 = __VLS_72({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                    ({}({ ...{}, }));
                    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_76 = __VLS_intrinsicElements["div"];
            const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
            const __VLS_78 = __VLS_77({ ...{}, class: (" arch q-mt-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
            ({}({ ...{}, class: (" arch q-mt-xs"), }));
            {
                const __VLS_81 = __VLS_intrinsicElements["div"];
                const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
                const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                ({}({ ...{}, }));
                const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
            }
            {
                const __VLS_86 = {}.QCheckbox;
                const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, modelValue: ((__VLS_ctx.schet)), label: ("Включить счетчики производительности"), }));
                ({}.QCheckbox);
                const __VLS_88 = __VLS_87({ ...{}, modelValue: ((__VLS_ctx.schet)), label: ("Включить счетчики производительности"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                ({}({ ...{}, modelValue: ((__VLS_ctx.schet)), label: ("Включить счетчики производительности"), }));
                const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
            }
            (__VLS_79.slots).default;
            const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["all"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["more"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-ml-md"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-xs"];
    }
    var __VLS_slots;
    // @ts-ignore
    [prov, prov, pass, prov, pass, prov, pass, prov, schet, schet, schet,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            prov: prov,
            line: line,
            pass: pass,
            schet: schet,
            options: options,
            loading: loading,
            check: check,
            test: test,
            calcColor: calcColor,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=CacheTab.vue.js.map