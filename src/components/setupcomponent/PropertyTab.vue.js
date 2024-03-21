/* __placeholder__ */
import { ref } from 'vue';
import MyInput from '@/components/common/MyInput.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    bd: {
        type: Object,
        required: true,
    },
});
const options = [
    'UseDefaultOrCurrent',
    'UseOwnDatabase',
    'UseOuterDatabase',
    'UseTemporaryDatabase',
];
const tables = [
    { id: 0, label: 'ChangeObjectDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 1, label: 'CursorDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 2, label: 'FileCursorDataBaseType', val: 'UseOwnDatabase' },
    { id: 3, label: 'IconDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 4, label: 'KeysetDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 5, label: 'SearchDataBaseType', val: 'UseTemporaryDatabase' },
];
const test = ref('дфлоыдлфо');
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
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_components.MyInput;
    __VLS_components.MyInput;
    // @ts-ignore
    [MyInput,];
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
    {
        const __VLS_0 = {}.QForm;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: (" all"), }));
        ({}.QForm);
        const __VLS_2 = __VLS_1({ ...{}, class: (" all"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" all"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["fieldset"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            {
                const __VLS_10 = __VLS_intrinsicElements["legend"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" form"), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["label"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, }));
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.MyInput;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
                    ({}.MyInput);
                    const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_30 = __VLS_intrinsicElements["div"];
            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
            const __VLS_32 = __VLS_31({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{}, class: (" arch"), }));
            {
                const __VLS_35 = __VLS_intrinsicElements["div"];
                const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                const __VLS_37 = __VLS_36({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                ({}({ ...{}, class: (" title"), }));
                (__VLS_38.slots).default;
                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
            }
            {
                const __VLS_40 = __VLS_intrinsicElements["div"];
                const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                const __VLS_42 = __VLS_41({ ...{}, class: (" proper"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                ({}({ ...{}, class: (" proper"), }));
                {
                    const __VLS_45 = __VLS_intrinsicElements["label"];
                    const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                    const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                    ({}({ ...{}, }));
                    (__VLS_48.slots).default;
                    const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                }
                {
                    const __VLS_50 = __VLS_intrinsicElements["div"];
                    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                    const __VLS_52 = __VLS_51({ ...{}, class: (" val"), contenteditable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, class: (" val"), contenteditable: (true), }));
                    (props.bd.name);
                    (__VLS_53.slots).default;
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                {
                    const __VLS_55 = __VLS_intrinsicElements["label"];
                    const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                    const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                    ({}({ ...{}, }));
                    (__VLS_58.slots).default;
                    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                }
                {
                    const __VLS_60 = __VLS_intrinsicElements["div"];
                    const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
                    const __VLS_62 = __VLS_61({ ...{}, class: (" val"), contenteditable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                    ({}({ ...{}, class: (" val"), contenteditable: (true), }));
                    (props.bd.psevdo);
                    (__VLS_63.slots).default;
                    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                }
                {
                    const __VLS_65 = __VLS_intrinsicElements["label"];
                    const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                    const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                    ({}({ ...{}, }));
                    (__VLS_68.slots).default;
                    const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                }
                {
                    const __VLS_70 = __VLS_intrinsicElements["div"];
                    const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                    const __VLS_72 = __VLS_71({ ...{}, class: (" val"), contenteditable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({}({ ...{}, class: (" val"), contenteditable: (true), }));
                    (props.bd.server);
                    (__VLS_73.slots).default;
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                {
                    const __VLS_75 = __VLS_intrinsicElements["label"];
                    const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                    const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                    ({}({ ...{}, }));
                    (__VLS_78.slots).default;
                    const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                }
                {
                    const __VLS_80 = __VLS_intrinsicElements["div"];
                    const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                    const __VLS_82 = __VLS_81({ ...{}, class: (" val"), contenteditable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                    ({}({ ...{}, class: (" val"), contenteditable: (true), }));
                    (props.bd.servertype);
                    (__VLS_83.slots).default;
                    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                }
                {
                    const __VLS_85 = __VLS_intrinsicElements["label"];
                    const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                    const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                    ({}({ ...{}, }));
                    (__VLS_88.slots).default;
                    const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                }
                {
                    const __VLS_90 = __VLS_intrinsicElements["div"];
                    const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                    const __VLS_92 = __VLS_91({ ...{}, class: (" val"), contenteditable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                    ({}({ ...{}, class: (" val"), contenteditable: (true), }));
                    (props.bd.version);
                    (__VLS_93.slots).default;
                    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                }
                {
                    const __VLS_95 = __VLS_intrinsicElements["label"];
                    const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                    const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                    ({}({ ...{}, }));
                    (__VLS_98.slots).default;
                    const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                }
                {
                    const __VLS_100 = __VLS_intrinsicElements["div"];
                    const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
                    const __VLS_102 = __VLS_101({ ...{}, class: (" val"), contenteditable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                    ({}({ ...{}, class: (" val"), contenteditable: (true), }));
                    (props.bd.date);
                    (__VLS_103.slots).default;
                    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                }
                {
                    const __VLS_105 = __VLS_intrinsicElements["label"];
                    const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                    const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                    ({}({ ...{}, }));
                    (__VLS_108.slots).default;
                    const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                }
                {
                    const __VLS_110 = {}.QCheckbox;
                    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{}, modelValue: ((props.bd.def)), dense: (true), }));
                    ({}.QCheckbox);
                    const __VLS_112 = __VLS_111({ ...{}, modelValue: ((props.bd.def)), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                    ({}({ ...{}, modelValue: ((props.bd.def)), dense: (true), }));
                    const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
                }
                (__VLS_43.slots).default;
                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
            }
            (__VLS_33.slots).default;
            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        }
        {
            const __VLS_115 = __VLS_intrinsicElements["div"];
            const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
            const __VLS_117 = __VLS_116({ ...{}, class: (" arch q-mt-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
            ({}({ ...{}, class: (" arch q-mt-xs"), }));
            {
                const __VLS_120 = __VLS_intrinsicElements["div"];
                const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                const __VLS_122 = __VLS_121({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                ({}({ ...{}, class: (" title"), }));
                (__VLS_123.slots).default;
                const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
            }
            {
                const __VLS_125 = __VLS_intrinsicElements["div"];
                const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                const __VLS_127 = __VLS_126({ ...{}, class: (" tabl"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                ({}({ ...{}, class: (" tabl"), }));
                for (const [item] of __VLS_getVForSourceType((__VLS_ctx.tables))) {
                    {
                        const __VLS_130 = __VLS_intrinsicElements["label"];
                        const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
                        const __VLS_132 = __VLS_131({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                        ({}({ ...{}, }));
                        (item.label);
                        (__VLS_133.slots).default;
                        const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                    }
                    {
                        const __VLS_135 = {}.QSelect;
                        const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ ...{}, modelValue: ((item.val)), options: ((__VLS_ctx.options)), dense: (true), }));
                        ({}.QSelect);
                        const __VLS_137 = __VLS_136({ ...{}, modelValue: ((item.val)), options: ((__VLS_ctx.options)), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                        ({}({ ...{}, modelValue: ((item.val)), options: ((__VLS_ctx.options)), dense: (true), }));
                        const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                    }
                    // @ts-ignore
                    [tables, options, options, options,];
                }
                (__VLS_128.slots).default;
                const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
            }
            (__VLS_118.slots).default;
            const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["all"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["proper"];
        __VLS_styleScopedClasses["val"];
        __VLS_styleScopedClasses["val"];
        __VLS_styleScopedClasses["val"];
        __VLS_styleScopedClasses["val"];
        __VLS_styleScopedClasses["val"];
        __VLS_styleScopedClasses["val"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-xs"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["tabl"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            MyInput: MyInput,
            options: options,
            tables: tables,
        };
    },
    props: {
        bd: {
            type: Object,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        bd: {
            type: Object,
            required: true,
        },
    },
});
//# sourceMappingURL=PropertyTab.vue.js.map