/* __placeholder__ */
import { ref, watch, computed } from 'vue';
import { useStore } from '@/stores/store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const emit = defineEmits(['change', 'haserror', 'noerror']);
const selection = ref('AGSupport');
watch(store.wc.localization, (value) => {
    if (value) {
        store.changeWebDefaults(6);
        emit('change');
    }
});
const kkey = ref(0);
watch(selection, (value) => {
    if (value) {
        kkey.value += 1;
    }
});
const select = ((e) => {
    selection.value = e.psevdo;
});
const current = computed(() => {
    return store.wc.localization.filter(item => item.psevdo === selection.value)[0];
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList,];
    __VLS_components.QItem;
    __VLS_components.qItem;
    // @ts-ignore
    [QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection, QItemSection,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon,];
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    // @ts-ignore
    [QItemLabel,];
    __VLS_components.QMarkupTable;
    __VLS_components.qMarkupTable;
    // @ts-ignore
    [QMarkupTable,];
    __VLS_intrinsicElements.thead;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition,];
    __VLS_intrinsicElements.tbody;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox,];
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    // @ts-ignore
    [QRadio,];
    {
        const __VLS_0 = {}.QForm;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }));
        ({}.QForm);
        const __VLS_2 = __VLS_1({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }));
        // @ts-ignore
        (__VLS_ctx.form);
        let __VLS_5 = { 'validation-error': __VLS_pickEvent(__VLS_4['validation-error'], {}.onValidationError) };
        __VLS_5 = { "validation-error": $event => {
                __VLS_ctx.$emit('haserror');
                // @ts-ignore
                [form, $emit,];
            }
        };
        let __VLS_6 = { 'validation-success': __VLS_pickEvent(__VLS_4['validation-success'], {}.onValidationSuccess) };
        __VLS_6 = { "validation-success": $event => {
                __VLS_ctx.$emit('noerror');
                // @ts-ignore
                [$emit,];
            }
        };
        {
            const __VLS_7 = __VLS_intrinsicElements["div"];
            const __VLS_8 = __VLS_elementAsFunctionalComponent(__VLS_7);
            const __VLS_9 = __VLS_8({ ...{}, class: (" lang"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{}, class: (" lang"), }));
            {
                const __VLS_12 = __VLS_intrinsicElements["div"];
                const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
                const __VLS_14 = __VLS_13({ ...{}, class: (" wh"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ ...{}, class: (" wh"), }));
                {
                    const __VLS_17 = __VLS_intrinsicElements["div"];
                    const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                    const __VLS_19 = __VLS_18({ ...{}, class: (" text-weight-bold q-pa-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                    ({}({ ...{}, class: (" text-weight-bold q-pa-sm"), }));
                    (__VLS_20.slots).default;
                    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
                }
                {
                    const __VLS_22 = {}.QList;
                    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{}, }));
                    ({}.QList);
                    const __VLS_24 = __VLS_23({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                    ({}({ ...{}, }));
                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.wc.localization))) {
                        {
                            const __VLS_27 = {}.QItem;
                            const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ sel: item.psevdo === __VLS_ctx.selection })), }));
                            ({}.QItem);
                            const __VLS_29 = __VLS_28({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ sel: item.psevdo === __VLS_ctx.selection })), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                            ({}({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ sel: item.psevdo === __VLS_ctx.selection })), }));
                            __VLS_styleScopedClasses = ({ sel: item.psevdo === selection });
                            let __VLS_32 = { 'click': __VLS_pickEvent(__VLS_31['click'], {}.onClick) };
                            __VLS_32 = { click: $event => {
                                    __VLS_ctx.select(item);
                                    // @ts-ignore
                                    [store, selection, selection, selection, select,];
                                }
                            };
                            {
                                const __VLS_33 = {}.QItemSection;
                                const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{}, side: (true), }));
                                ({}.QItemSection);
                                const __VLS_35 = __VLS_34({ ...{}, side: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                                ({}({ ...{}, side: (true), }));
                                {
                                    const __VLS_38 = {}.QIcon;
                                    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{}, name: ("mdi-database-outline"), }));
                                    ({}.QIcon);
                                    const __VLS_40 = __VLS_39({ ...{}, name: ("mdi-database-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                                    ({}({ ...{}, name: ("mdi-database-outline"), }));
                                    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                                }
                                (__VLS_36.slots).default;
                                const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                            }
                            {
                                const __VLS_43 = {}.QItemSection;
                                const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{}, }));
                                ({}.QItemSection);
                                const __VLS_45 = __VLS_44({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                                ({}({ ...{}, }));
                                {
                                    const __VLS_48 = {}.QItemLabel;
                                    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{}, }));
                                    ({}.QItemLabel);
                                    const __VLS_50 = __VLS_49({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                                    ({}({ ...{}, }));
                                    (item.psevdo);
                                    (__VLS_51.slots).default;
                                    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                                }
                                (__VLS_46.slots).default;
                                const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                            }
                            (__VLS_30.slots).default;
                            const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                            let __VLS_31;
                        }
                    }
                    (__VLS_25.slots).default;
                    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
                }
                (__VLS_15.slots).default;
                const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
            {
                const __VLS_53 = __VLS_intrinsicElements["div"];
                const __VLS_54 = __VLS_elementAsFunctionalComponent(__VLS_53);
                const __VLS_55 = __VLS_54({ ...{}, class: (" to"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
                ({}({ ...{}, class: (" to"), }));
                {
                    const __VLS_58 = {}.QIcon;
                    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{}, name: ("mdi-arrow-right-bold"), size: ("lg"), }));
                    ({}.QIcon);
                    const __VLS_60 = __VLS_59({ ...{}, name: ("mdi-arrow-right-bold"), size: ("lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
                    ({}({ ...{}, name: ("mdi-arrow-right-bold"), size: ("lg"), }));
                    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
                }
                (__VLS_56.slots).default;
                const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
            }
            {
                const __VLS_63 = __VLS_intrinsicElements["div"];
                const __VLS_64 = __VLS_elementAsFunctionalComponent(__VLS_63);
                const __VLS_65 = __VLS_64({ ...{}, class: (" wh"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
                ({}({ ...{}, class: (" wh"), }));
                {
                    const __VLS_68 = {}.QMarkupTable;
                    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{}, flat: (true), }));
                    ({}.QMarkupTable);
                    const __VLS_70 = __VLS_69({ ...{}, flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
                    ({}({ ...{}, flat: (true), }));
                    {
                        const __VLS_73 = __VLS_intrinsicElements["thead"];
                        const __VLS_74 = __VLS_elementAsFunctionalComponent(__VLS_73);
                        const __VLS_75 = __VLS_74({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_74));
                        ({}({ ...{}, }));
                        {
                            const __VLS_78 = __VLS_intrinsicElements["tr"];
                            const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
                            const __VLS_80 = __VLS_79({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
                            ({}({ ...{}, }));
                            {
                                const __VLS_83 = __VLS_intrinsicElements["th"];
                                const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83);
                                const __VLS_85 = __VLS_84({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_84));
                                ({}({ ...{}, }));
                                (__VLS_86.slots).default;
                                const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85);
                            }
                            {
                                const __VLS_88 = __VLS_intrinsicElements["th"];
                                const __VLS_89 = __VLS_elementAsFunctionalComponent(__VLS_88);
                                const __VLS_90 = __VLS_89({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_89));
                                ({}({ ...{}, }));
                                (__VLS_91.slots).default;
                                const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
                            }
                            (__VLS_81.slots).default;
                            const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
                        }
                        (__VLS_76.slots).default;
                        const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
                    }
                    {
                        const __VLS_93 = {}.transition;
                        const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{}, name: ("fade"), mode: ("out-in"), }));
                        ({}.transition);
                        const __VLS_95 = __VLS_94({ ...{}, name: ("fade"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
                        ({}({ ...{}, name: ("fade"), mode: ("out-in"), }));
                        {
                            const __VLS_98 = __VLS_intrinsicElements["tbody"];
                            const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
                            const __VLS_100 = __VLS_99({ ...{}, key: ((__VLS_ctx.kkey)), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
                            ({}({ ...{}, key: ((__VLS_ctx.kkey)), }));
                            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.current.lang))) {
                                {
                                    const __VLS_103 = __VLS_intrinsicElements["tr"];
                                    const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
                                    const __VLS_105 = __VLS_104({ ...{}, key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                                    ({}({ ...{}, key: ((item.id)), }));
                                    {
                                        const __VLS_108 = __VLS_intrinsicElements["td"];
                                        const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
                                        const __VLS_110 = __VLS_109({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
                                        ({}({ ...{}, }));
                                        {
                                            const __VLS_113 = {}.QCheckbox;
                                            const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{}, modelValue: ((item.active)), }));
                                            ({}.QCheckbox);
                                            const __VLS_115 = __VLS_114({ ...{}, modelValue: ((item.active)), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                                            ({}({ ...{}, modelValue: ((item.active)), }));
                                            (item.name);
                                            (__VLS_116.slots).default;
                                            const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                                        }
                                        (__VLS_111.slots).default;
                                        const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
                                    }
                                    {
                                        const __VLS_118 = __VLS_intrinsicElements["td"];
                                        const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                                        const __VLS_120 = __VLS_119({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                                        ({}({ ...{}, }));
                                        {
                                            const __VLS_123 = {}.QRadio;
                                            const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{}, modelValue: ((__VLS_ctx.current.defLang)), val: ((item.def)), }));
                                            ({}.QRadio);
                                            const __VLS_125 = __VLS_124({ ...{}, modelValue: ((__VLS_ctx.current.defLang)), val: ((item.def)), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                                            ({}({ ...{}, modelValue: ((__VLS_ctx.current.defLang)), val: ((item.def)), }));
                                            const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                                        }
                                        (__VLS_121.slots).default;
                                        const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                                    }
                                    (__VLS_106.slots).default;
                                    const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
                                }
                                // @ts-ignore
                                [kkey, kkey, current, current, current, current,];
                            }
                            (__VLS_101.slots).default;
                            const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
                        }
                        (__VLS_96.slots).default;
                        const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
                    }
                    (__VLS_71.slots).default;
                    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
                }
                (__VLS_66.slots).default;
                const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65);
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["lang"];
        __VLS_styleScopedClasses["wh"];
        __VLS_styleScopedClasses["text-weight-bold"];
        __VLS_styleScopedClasses["q-pa-sm"];
        __VLS_styleScopedClasses["to"];
        __VLS_styleScopedClasses["wh"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            store: store,
            selection: selection,
            kkey: kkey,
            select: select,
            current: current,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
//# sourceMappingURL=WebLocalization.vue.js.map