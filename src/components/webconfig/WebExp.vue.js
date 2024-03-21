/* __placeholder__ */
import { ref, watch, computed, } from 'vue';
import { useStore } from '@/stores/store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
const filter = ref('');
const kkey = ref(0);
watch(store.wc.funcs, (value) => {
    if (value) {
        store.changeWebDefaults(8);
        emit('change');
    }
});
const selection = ref('AGSupport');
const select = ((e) => {
    selection.value = e.psevdo;
    kkey.value += 1;
});
const current = computed(() => {
    return store.wc.funcs.filter((item) => item.psevdo === selection.value)[0];
});
const options = [
    'Администратор',
    'Пользователь',
    'Регистратор',
    'Согласование договоров',
    'Оператор архива',
    'Заместитель',
    'Бухгалтер',
    'Зам.бухгалтера',
    'Директор по персоналу',
    'Маркетинг',
    'Power user',
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
];
const dialog = ref(false);
const showDialog = ((e) => {
    currentRow.value = e;
    rowCheck.value = e.vid;
    dialog.value = true;
});
const rowCheck = ref([]);
const filteredOptions = computed(() => {
    if (filter.value) {
        return options.filter(item => item.toLowerCase().includes(filter.value.toLowerCase()));
    }
    return options;
});
const currentRow = ref();
const action = (() => {
    currentRow.value.vid = rowCheck.value;
    dialog.value = false;
});
const showVid = ((e) => {
    return e.toString().replace(',', ', ');
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QList;
    __VLS_components.qList;
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList, QList,];
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    // @ts-ignore
    [QItem, QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection, QItemSection, QItemSection, QItemSection,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    // @ts-ignore
    [QItemLabel, QItemLabel,];
    __VLS_components.QMarkupTable;
    __VLS_components.qMarkupTable;
    // @ts-ignore
    [QMarkupTable,];
    __VLS_intrinsicElements.thead;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition,];
    __VLS_intrinsicElements.tbody;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.QDialog;
    __VLS_components.qDialog;
    // @ts-ignore
    [QDialog,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn,];
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    __VLS_intrinsicElements.template;
    __VLS_components.QScrollArea;
    __VLS_components.qScrollArea;
    // @ts-ignore
    [QScrollArea,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
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
                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.wc.funcs))) {
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
                    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{}, flat: (true), wrapCells: (true), }));
                    ({}.QMarkupTable);
                    const __VLS_70 = __VLS_69({ ...{}, flat: (true), wrapCells: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
                    ({}({ ...{}, flat: (true), wrapCells: (true), }));
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
                            {
                                const __VLS_93 = __VLS_intrinsicElements["th"];
                                const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
                                const __VLS_95 = __VLS_94({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_94));
                                ({}({ ...{}, }));
                                (__VLS_96.slots).default;
                                const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
                            }
                            (__VLS_81.slots).default;
                            const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
                        }
                        (__VLS_76.slots).default;
                        const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
                    }
                    {
                        const __VLS_98 = {}.transition;
                        const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{}, name: ("fade"), mode: ("out-in"), }));
                        ({}.transition);
                        const __VLS_100 = __VLS_99({ ...{}, name: ("fade"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
                        ({}({ ...{}, name: ("fade"), mode: ("out-in"), }));
                        {
                            const __VLS_103 = __VLS_intrinsicElements["tbody"];
                            const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
                            const __VLS_105 = __VLS_104({ ...{}, key: ((__VLS_ctx.kkey)), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                            ({}({ ...{}, key: ((__VLS_ctx.kkey)), }));
                            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.current.fun))) {
                                {
                                    const __VLS_108 = __VLS_intrinsicElements["tr"];
                                    const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
                                    const __VLS_110 = __VLS_109({ ...{}, key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
                                    ({}({ ...{}, key: ((item.id)), }));
                                    {
                                        const __VLS_113 = __VLS_intrinsicElements["td"];
                                        const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
                                        const __VLS_115 = __VLS_114({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                                        ({}({ ...{}, }));
                                        (item.name);
                                        (__VLS_116.slots).default;
                                        const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                                    }
                                    {
                                        const __VLS_118 = __VLS_intrinsicElements["td"];
                                        const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                                        const __VLS_120 = __VLS_119({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                                        ({}({ ...{}, }));
                                        {
                                            const __VLS_123 = {}.QCheckbox;
                                            const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{}, modelValue: ((item.used)), dense: (true), }));
                                            ({}.QCheckbox);
                                            const __VLS_125 = __VLS_124({ ...{}, modelValue: ((item.used)), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                                            ({}({ ...{}, modelValue: ((item.used)), dense: (true), }));
                                            const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                                        }
                                        (__VLS_121.slots).default;
                                        const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                                    }
                                    {
                                        const __VLS_128 = __VLS_intrinsicElements["td"];
                                        const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                                        const __VLS_130 = __VLS_129({ ...{ 'onClick': {}, }, class: (" choose"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                        ({}({ ...{ 'onClick': {}, }, class: (" choose"), }));
                                        let __VLS_133 = { 'click': __VLS_pickEvent(__VLS_132['click'], {}.onClick) };
                                        __VLS_133 = { click: $event => {
                                                __VLS_ctx.showDialog(item);
                                                // @ts-ignore
                                                [kkey, kkey, current, showDialog,];
                                            }
                                        };
                                        if (item.vid.length > 0) {
                                            {
                                                const __VLS_134 = __VLS_intrinsicElements["span"];
                                                const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
                                                const __VLS_136 = __VLS_135({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_135));
                                                ({}({ ...{}, }));
                                                (__VLS_ctx.showVid(item.vid));
                                                (__VLS_137.slots).default;
                                                const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
                                            }
                                            // @ts-ignore
                                            [showVid,];
                                        }
                                        else {
                                            {
                                                const __VLS_139 = __VLS_intrinsicElements["span"];
                                                const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
                                                const __VLS_141 = __VLS_140({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_140));
                                                ({}({ ...{}, }));
                                                (__VLS_142.slots).default;
                                                const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141);
                                            }
                                        }
                                        (__VLS_131.slots).default;
                                        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                                        let __VLS_132;
                                    }
                                    (__VLS_111.slots).default;
                                    const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
                                }
                            }
                            (__VLS_106.slots).default;
                            const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
                        }
                        (__VLS_101.slots).default;
                        const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
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
        {
            const __VLS_144 = {}.QDialog;
            const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{}, modelValue: ((__VLS_ctx.dialog)), }));
            ({}.QDialog);
            const __VLS_146 = __VLS_145({ ...{}, modelValue: ((__VLS_ctx.dialog)), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
            ({}({ ...{}, modelValue: ((__VLS_ctx.dialog)), }));
            {
                const __VLS_149 = {}.QCard;
                const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({ ...{}, style: ({}), }));
                ({}.QCard);
                const __VLS_151 = __VLS_150({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
                ({}({ ...{}, style: ({}), }));
                {
                    const __VLS_154 = __VLS_intrinsicElements["div"];
                    const __VLS_155 = __VLS_elementAsFunctionalComponent(__VLS_154);
                    const __VLS_156 = __VLS_155({ ...{}, class: (" row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
                    ({}({ ...{}, class: (" row items-center q-pb-none"), }));
                    {
                        const __VLS_159 = __VLS_intrinsicElements["div"];
                        const __VLS_160 = __VLS_elementAsFunctionalComponent(__VLS_159);
                        const __VLS_161 = __VLS_160({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_162.slots).default;
                        const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
                    }
                    {
                        const __VLS_164 = {}.QSpace;
                        const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ ...{}, }));
                        ({}.QSpace);
                        const __VLS_166 = __VLS_165({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_165));
                        ({}({ ...{}, }));
                        const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166);
                    }
                    {
                        const __VLS_169 = {}.QBtn;
                        const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({ ...{}, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                        ({}.QBtn);
                        const __VLS_171 = __VLS_170({ ...{}, icon: ("close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
                        ({}({ ...{}, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                        const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171);
                    }
                    (__VLS_157.slots).default;
                    const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
                }
                {
                    const __VLS_174 = {}.QCardSection;
                    const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_176 = __VLS_175({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_175));
                    ({}({ ...{}, }));
                    {
                        const __VLS_179 = {}.QInput;
                        const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179({ ...{ 'onClear': {}, }, modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Поиск"), }));
                        ({}.QInput);
                        const __VLS_181 = __VLS_180({ ...{ 'onClear': {}, }, modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Поиск"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
                        ({}({ ...{ 'onClear': {}, }, modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Поиск"), }));
                        let __VLS_184 = { 'clear': __VLS_pickEvent(__VLS_183['clear'], {}.onClear) };
                        __VLS_184 = { clear: $event => {
                                __VLS_ctx.filter = '';
                                // @ts-ignore
                                [dialog, dialog, dialog, filter, filter, filter, filter,];
                            }
                        };
                        {
                            const __VLS_185 = __VLS_intrinsicElements["template"];
                            const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
                            const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                            ({}({ ...{}, }));
                            {
                                (__VLS_182.slots).prepend;
                                {
                                    const __VLS_189 = {}.QIcon;
                                    const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ ...{}, name: ("mdi-magnify"), }));
                                    ({}.QIcon);
                                    const __VLS_191 = __VLS_190({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
                                    ({}({ ...{}, name: ("mdi-magnify"), }));
                                    const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
                                }
                            }
                        }
                        const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181);
                        let __VLS_183;
                    }
                    (__VLS_177.slots).default;
                    const __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176);
                }
                {
                    const __VLS_194 = {}.QScrollArea;
                    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ ...{}, class: (" scr"), }));
                    ({}.QScrollArea);
                    const __VLS_196 = __VLS_195({ ...{}, class: (" scr"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
                    ({}({ ...{}, class: (" scr"), }));
                    {
                        const __VLS_199 = {}.QList;
                        const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{}, }));
                        ({}.QList);
                        const __VLS_201 = __VLS_200({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_200));
                        ({}({ ...{}, }));
                        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredOptions))) {
                            {
                                const __VLS_204 = {}.QItem;
                                const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{}, tag: ("label"), key: ((item)), }));
                                ({}.QItem);
                                const __VLS_206 = __VLS_205({ ...{}, tag: ("label"), key: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
                                ({}({ ...{}, tag: ("label"), key: ((item)), }));
                                __VLS_directiveFunction(__VLS_ctx.vRipple)(undefined);
                                {
                                    const __VLS_209 = {}.QItemSection;
                                    const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, side: (true), }));
                                    ({}.QItemSection);
                                    const __VLS_211 = __VLS_210({ ...{}, side: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                                    ({}({ ...{}, side: (true), }));
                                    {
                                        const __VLS_214 = {}.QCheckbox;
                                        const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ ...{}, modelValue: ((__VLS_ctx.rowCheck)), dense: (true), val: ((item)), }));
                                        ({}.QCheckbox);
                                        const __VLS_216 = __VLS_215({ ...{}, modelValue: ((__VLS_ctx.rowCheck)), dense: (true), val: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
                                        ({}({ ...{}, modelValue: ((__VLS_ctx.rowCheck)), dense: (true), val: ((item)), }));
                                        const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_214, __VLS_216);
                                    }
                                    (__VLS_212.slots).default;
                                    const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                                }
                                {
                                    const __VLS_219 = {}.QItemSection;
                                    const __VLS_220 = __VLS_asFunctionalComponent(__VLS_219, new __VLS_219({ ...{}, }));
                                    ({}.QItemSection);
                                    const __VLS_221 = __VLS_220({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_220));
                                    ({}({ ...{}, }));
                                    {
                                        const __VLS_224 = {}.QItemLabel;
                                        const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ ...{}, }));
                                        ({}.QItemLabel);
                                        const __VLS_226 = __VLS_225({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_225));
                                        ({}({ ...{}, }));
                                        (item);
                                        (__VLS_227.slots).default;
                                        const __VLS_227 = __VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226);
                                    }
                                    (__VLS_222.slots).default;
                                    const __VLS_222 = __VLS_pickFunctionalComponentCtx(__VLS_219, __VLS_221);
                                }
                                (__VLS_207.slots).default;
                                const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206);
                            }
                            // @ts-ignore
                            [filteredOptions, rowCheck, rowCheck, rowCheck,];
                        }
                        (__VLS_202.slots).default;
                        const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
                    }
                    (__VLS_197.slots).default;
                    const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
                }
                {
                    const __VLS_229 = {}.QCardActions;
                    const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({ ...{}, align: ("right"), }));
                    ({}.QCardActions);
                    const __VLS_231 = __VLS_230({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_230));
                    ({}({ ...{}, align: ("right"), }));
                    {
                        const __VLS_234 = {}.QBtn;
                        const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_236 = __VLS_235({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_235));
                        ({}({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), }));
                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                        const __VLS_237 = __VLS_pickFunctionalComponentCtx(__VLS_234, __VLS_236);
                    }
                    {
                        const __VLS_239 = {}.QBtn;
                        const __VLS_240 = __VLS_asFunctionalComponent(__VLS_239, new __VLS_239({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Применить"), }));
                        ({}.QBtn);
                        const __VLS_241 = __VLS_240({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Применить"), }, ...__VLS_functionalComponentArgsRest(__VLS_240));
                        ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Применить"), }));
                        let __VLS_244 = { 'click': __VLS_pickEvent(__VLS_243['click'], {}.onClick) };
                        __VLS_244 = { click: (__VLS_ctx.action) };
                        const __VLS_242 = __VLS_pickFunctionalComponentCtx(__VLS_239, __VLS_241);
                        let __VLS_243;
                    }
                    (__VLS_232.slots).default;
                    const __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231);
                }
                (__VLS_152.slots).default;
                const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151);
            }
            (__VLS_147.slots).default;
            const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
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
        __VLS_styleScopedClasses["choose"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-pb-none"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["scr"];
    }
    var __VLS_slots;
    // @ts-ignore
    [action,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            store: store,
            form: form,
            filter: filter,
            kkey: kkey,
            selection: selection,
            select: select,
            current: current,
            dialog: dialog,
            showDialog: showDialog,
            rowCheck: rowCheck,
            filteredOptions: filteredOptions,
            action: action,
            showVid: showVid,
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
//# sourceMappingURL=WebExp.vue.js.map