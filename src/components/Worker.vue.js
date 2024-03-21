/* __placeholder__ */
import { ref, reactive, computed } from 'vue';
import GreyBlock2 from '@/components/GreyBlock2.vue';
import AddDialogCommon from '@/components/AddDialogCommon.vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const dialog = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
let workers = reactive([
    {
        id: 0,
        text: 'dv-agent',
        processes: [{ name: 'Coolprocess' }],
        expanded: false,
    },
    {
        id: 1,
        text: 'webclient-worker',
        processes: [{ name: 'Coolprocess' }, { name: 'Notsocool' }],
        expanded: false,
    },
    { id: 2, text: 'KonturDoc', processes: [{ name: 'Test0' }], expanded: false },
    {
        id: 3,
        text: 'testWorker_1',
        processes: [{ name: 'Test1' }],
        expanded: false,
    },
    {
        id: 4,
        text: 'testWorker_2',
        processes: [{ name: 'Test2' }],
        expanded: false,
    },
    {
        id: 5,
        text: 'testWorker_3',
        processes: [{ name: 'Test3' }],
        expanded: false,
    },
]);
const curName = ref('');
const curPanel = ref();
const filter = ref('');
const filtered = computed(() => {
    if (filter.value === '')
        return workers;
    else
        return workers.filter(item => item.text.toLowerCase().includes(filter.value.toLowerCase()) ||
            item.processes.some(el => el.name.toLowerCase().includes(filter.value.toLowerCase())));
});
const add = (panel) => {
    panel.expanded = true;
    curName.value = panel.text;
    curPanel.value = panel;
    dialog.value = true;
};
const ren = (e) => {
    curPanel.value = e;
    curName.value = e.text;
    dialog2.value = true;
    temp.value = e.text;
};
const rename = () => {
    curPanel.value.text = curName.value;
    dialog2.value = false;
};
const remove = (id, e) => {
    const index = workers[id].processes.findIndex(el => el === e);
    workers[id].processes.splice(index, 1);
};
const removeService = (e) => {
    const ind = workers.findIndex(el => el === e);
    workers.splice(ind, 1);
};
const confirm = (e) => {
    curPanel.value = e;
    dialog3.value = true;
};
const addProcess = (e) => {
    curPanel.value.processes.push({ name: e });
    dialog.value = false;
};
const calColor = (id) => {
    if (id === 1)
        return 'red';
    return 'green';
};
const close = () => {
    dialog2.value = false;
    temp.value = '';
};
const expandAll = () => {
    workers.map(item => (item.expanded = true));
};
const collapseAll = () => {
    workers.map(item => (item.expanded = false));
};
const list = computed(() => {
    return workers.map(el => el.text).filter(e => e !== temp.value);
});
const temp = ref('');
const req = [
    (val) => (val && val.length > 0) || 'Это обязательное поле',
    (val) => list.value.every(el => el !== val) || 'Имя должно быть уникальным',
];
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip, QTooltip, QTooltip, QTooltip, QTooltip,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon,];
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList,];
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
    __VLS_components.GreyBlock2;
    __VLS_components.GreyBlock2;
    // @ts-ignore
    [GreyBlock2,];
    __VLS_components.AddDialogCommon;
    __VLS_components.AddDialogCommon;
    // @ts-ignore
    [AddDialogCommon,];
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    __VLS_components.ConfirmDialog;
    __VLS_components.ConfirmDialog;
    // @ts-ignore
    [ConfirmDialog,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" al"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" al"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" zag"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" zag"), }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: (" bt-filter"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" bt-filter"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: (" q-gutter-x-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" q-gutter-x-xs"), }));
                {
                    const __VLS_20 = {}.QBtn;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-chevron-double-down"), }));
                    ({}.QBtn);
                    const __VLS_22 = __VLS_21({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-chevron-double-down"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-chevron-double-down"), }));
                    let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], {}.onClick) };
                    __VLS_25 = { click: (__VLS_ctx.expandAll) };
                    {
                        const __VLS_26 = {}.QTooltip;
                        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                        ({}({ ...{}, }));
                        (__VLS_29.slots).default;
                        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                    }
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    let __VLS_24;
                }
                {
                    const __VLS_31 = {}.QBtn;
                    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-chevron-double-up"), }));
                    ({}.QBtn);
                    const __VLS_33 = __VLS_32({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-chevron-double-up"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                    ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-chevron-double-up"), }));
                    let __VLS_36 = { 'click': __VLS_pickEvent(__VLS_35['click'], {}.onClick) };
                    __VLS_36 = { click: (__VLS_ctx.collapseAll) };
                    {
                        const __VLS_37 = {}.QTooltip;
                        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                        ({}({ ...{}, }));
                        (__VLS_40.slots).default;
                        const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
                    }
                    (__VLS_34.slots).default;
                    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                    let __VLS_35;
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_42 = {}.QInput;
                const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onClear': {}, }, class: (" filter"), modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Найти службу или процесс"), }));
                ({}.QInput);
                const __VLS_44 = __VLS_43({ ...{ 'onClear': {}, }, class: (" filter"), modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Найти службу или процесс"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                ({}({ ...{ 'onClear': {}, }, class: (" filter"), modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Найти службу или процесс"), }));
                let __VLS_47 = { 'clear': __VLS_pickEvent(__VLS_46['clear'], {}.onClear) };
                __VLS_47 = { clear: $event => {
                        __VLS_ctx.filter = '';
                        // @ts-ignore
                        [expandAll, collapseAll, filter, filter, filter, filter,];
                    }
                };
                {
                    const __VLS_48 = __VLS_intrinsicElements["template"];
                    const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
                    const __VLS_50 = __VLS_49({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                    ({}({ ...{}, }));
                    {
                        (__VLS_45.slots).prepend;
                        {
                            const __VLS_52 = {}.QIcon;
                            const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, name: ("mdi-magnify"), }));
                            ({}.QIcon);
                            const __VLS_54 = __VLS_53({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                            ({}({ ...{}, name: ("mdi-magnify"), }));
                            const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
                        }
                    }
                }
                const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
                let __VLS_46;
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_57 = {}.QList;
            const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, class: (" q-mt-md"), separator: (true), }));
            ({}.QList);
            const __VLS_59 = __VLS_58({ ...{}, class: (" q-mt-md"), separator: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
            ({}({ ...{}, class: (" q-mt-md"), separator: (true), }));
            for (const [panel, index] of __VLS_getVForSourceType((__VLS_ctx.filtered))) {
                {
                    const __VLS_62 = {}.QExpansionItem;
                    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, key: ((panel.id)), switchToggleSide: (true), modelValue: ((panel.expanded)), }));
                    ({}.QExpansionItem);
                    const __VLS_64 = __VLS_63({ ...{}, key: ((panel.id)), switchToggleSide: (true), modelValue: ((panel.expanded)), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                    ({}({ ...{}, key: ((panel.id)), switchToggleSide: (true), modelValue: ((panel.expanded)), }));
                    {
                        const __VLS_67 = __VLS_intrinsicElements["template"];
                        const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
                        const __VLS_69 = __VLS_68({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                        ({}({ ...{}, }));
                        {
                            (__VLS_65.slots).header;
                            {
                                const __VLS_71 = __VLS_intrinsicElements["div"];
                                const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
                                const __VLS_73 = __VLS_72({ ...{}, class: (" head"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                                ({}({ ...{}, class: (" head"), }));
                                {
                                    const __VLS_76 = __VLS_intrinsicElements["div"];
                                    const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
                                    const __VLS_78 = __VLS_77({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                                    ({}({ ...{}, class: (" title"), }));
                                    {
                                        const __VLS_81 = {}.QIcon;
                                        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, name: ("mdi-circle-slice-8"), size: ("26px"), color: ((__VLS_ctx.calColor(panel.id))), }));
                                        ({}.QIcon);
                                        const __VLS_83 = __VLS_82({ ...{}, name: ("mdi-circle-slice-8"), size: ("26px"), color: ((__VLS_ctx.calColor(panel.id))), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                                        ({}({ ...{}, name: ("mdi-circle-slice-8"), size: ("26px"), color: ((__VLS_ctx.calColor(panel.id))), }));
                                        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                                    }
                                    {
                                        const __VLS_86 = __VLS_intrinsicElements["div"];
                                        const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
                                        const __VLS_88 = __VLS_87({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                                        ({}({ ...{}, }));
                                        (panel.text);
                                        (__VLS_89.slots).default;
                                        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                                    }
                                    if (index > 2) {
                                        {
                                            const __VLS_91 = __VLS_intrinsicElements["span"];
                                            const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
                                            const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                                            ({}({ ...{}, }));
                                            (__VLS_94.slots).default;
                                            const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
                                        }
                                        {
                                            const __VLS_96 = __VLS_intrinsicElements["span"];
                                            const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
                                            const __VLS_98 = __VLS_97({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                                            ({}({ ...{}, }));
                                            (__VLS_99.slots).default;
                                            const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
                                        }
                                        // @ts-ignore
                                        [filtered, calColor, calColor, calColor,];
                                    }
                                    (__VLS_79.slots).default;
                                    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                                }
                                {
                                    const __VLS_101 = __VLS_intrinsicElements["div"];
                                    const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
                                    const __VLS_103 = __VLS_102({ ...{}, class: (" row items-center text-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                                    ({}({ ...{}, class: (" row items-center text-right"), }));
                                    {
                                        const __VLS_106 = __VLS_intrinsicElements["div"];
                                        const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
                                        const __VLS_108 = __VLS_107({ ...{}, class: (" span"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                                        ({}({ ...{}, class: (" span"), }));
                                        (__VLS_109.slots).default;
                                        const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
                                    }
                                    {
                                        const __VLS_111 = {}.QChip;
                                        const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{}, color: ("warning"), }));
                                        ({}.QChip);
                                        const __VLS_113 = __VLS_112({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                                        ({}({ ...{}, color: ("warning"), }));
                                        (panel.processes.length);
                                        {
                                            const __VLS_116 = {}.QBtn;
                                            const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                                            ({}.QBtn);
                                            const __VLS_118 = __VLS_117({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                                            ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                                            let __VLS_121 = { 'click': __VLS_pickEvent(__VLS_120['click'], {}.onClick) };
                                            __VLS_121 = { click: $event => {
                                                    __VLS_ctx.add(panel);
                                                    // @ts-ignore
                                                    [add,];
                                                }
                                            };
                                            const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
                                            let __VLS_120;
                                        }
                                        {
                                            const __VLS_122 = {}.QTooltip;
                                            const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            ({}.QTooltip);
                                            const __VLS_124 = __VLS_123({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                                            ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            (__VLS_125.slots).default;
                                            const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
                                        }
                                        (__VLS_114.slots).default;
                                        const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                                    }
                                    {
                                        const __VLS_127 = {}.QBtn;
                                        const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-pencil"), }));
                                        ({}.QBtn);
                                        const __VLS_129 = __VLS_128({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-pencil"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
                                        ({}({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-pencil"), }));
                                        let __VLS_132 = { 'click': __VLS_pickEvent(__VLS_131['click'], {}.onClick) };
                                        __VLS_132 = { click: $event => {
                                                __VLS_ctx.ren(panel);
                                                // @ts-ignore
                                                [ren,];
                                            }
                                        };
                                        {
                                            const __VLS_133 = {}.QTooltip;
                                            const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            ({}.QTooltip);
                                            const __VLS_135 = __VLS_134({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                                            ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            (__VLS_136.slots).default;
                                            const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                                        }
                                        (__VLS_130.slots).default;
                                        const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
                                        let __VLS_131;
                                    }
                                    {
                                        const __VLS_138 = {}.QBtn;
                                        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-reload"), }));
                                        ({}.QBtn);
                                        const __VLS_140 = __VLS_139({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-reload"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
                                        ({}({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-reload"), }));
                                        let __VLS_143 = { 'click': __VLS_pickEvent(__VLS_142['click'], {}.onClick) };
                                        __VLS_143 = { click: () => { } };
                                        {
                                            const __VLS_144 = {}.QTooltip;
                                            const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            ({}.QTooltip);
                                            const __VLS_146 = __VLS_145({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
                                            ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            (__VLS_147.slots).default;
                                            const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
                                        }
                                        (__VLS_141.slots).default;
                                        const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                                        let __VLS_142;
                                    }
                                    {
                                        const __VLS_149 = {}.QBtn;
                                        const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }));
                                        ({}.QBtn);
                                        const __VLS_151 = __VLS_150({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
                                        ({}({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }));
                                        let __VLS_154 = { 'click': __VLS_pickEvent(__VLS_153['click'], {}.onClick) };
                                        __VLS_154 = { click: $event => {
                                                __VLS_ctx.confirm(panel);
                                                // @ts-ignore
                                                [confirm,];
                                            }
                                        };
                                        {
                                            const __VLS_155 = {}.QTooltip;
                                            const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            ({}.QTooltip);
                                            const __VLS_157 = __VLS_156({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                                            ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                                            (__VLS_158.slots).default;
                                            const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                                        }
                                        (__VLS_152.slots).default;
                                        const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151);
                                        let __VLS_153;
                                    }
                                    (__VLS_104.slots).default;
                                    const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                                }
                                (__VLS_74.slots).default;
                                const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                            }
                        }
                    }
                    {
                        const __VLS_160 = __VLS_intrinsicElements["div"];
                        const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
                        const __VLS_162 = __VLS_161({ ...{}, class: (" pcard"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                        ({}({ ...{}, class: (" pcard"), }));
                        for (const [item] of __VLS_getVForSourceType((panel.processes))) {
                            {
                                const __VLS_165 = {}.GreyBlock2;
                                const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ ...{ 'onDel': {}, }, key: ((item.name)), name: ((item.name)), }));
                                ({}.GreyBlock2);
                                const __VLS_167 = __VLS_166({ ...{ 'onDel': {}, }, key: ((item.name)), name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
                                ({}({ ...{ 'onDel': {}, }, key: ((item.name)), name: ((item.name)), }));
                                let __VLS_170 = { 'del': __VLS_pickEvent(__VLS_169['del'], {}.onDel) };
                                __VLS_170 = { del: $event => {
                                        __VLS_ctx.remove(panel.id, item);
                                        // @ts-ignore
                                        [remove,];
                                    }
                                };
                                const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
                                let __VLS_169;
                            }
                        }
                        (__VLS_163.slots).default;
                        const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
                    }
                    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
                }
            }
            (__VLS_60.slots).default;
            const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
        }
        {
            const __VLS_171 = {}.AddDialogCommon;
            const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ ...{ 'onClose': {}, 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), worker: (true), }));
            ({}.AddDialogCommon);
            const __VLS_173 = __VLS_172({ ...{ 'onClose': {}, 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), worker: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
            ({}({ ...{ 'onClose': {}, 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), worker: (true), }));
            let __VLS_176 = { 'close': __VLS_pickEvent(__VLS_175['close'], {}.onClose) };
            __VLS_176 = { close: $event => {
                    __VLS_ctx.dialog = false;
                    // @ts-ignore
                    [dialog, dialog, dialog, dialog,];
                }
            };
            let __VLS_177 = { 'add': __VLS_pickEvent(__VLS_175['add'], {}.onAdd) };
            __VLS_177 = { add: (__VLS_ctx.addProcess) };
            const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173);
            let __VLS_175;
        }
        {
            const __VLS_178 = {}.QDialog;
            const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{}, modelValue: ((__VLS_ctx.dialog2)), }));
            ({}.QDialog);
            const __VLS_180 = __VLS_179({ ...{}, modelValue: ((__VLS_ctx.dialog2)), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
            ({}({ ...{}, modelValue: ((__VLS_ctx.dialog2)), }));
            {
                const __VLS_183 = {}.QCard;
                const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{}, style: ({}), }));
                ({}.QCard);
                const __VLS_185 = __VLS_184({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
                ({}({ ...{}, style: ({}), }));
                {
                    const __VLS_188 = __VLS_intrinsicElements["div"];
                    const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188);
                    const __VLS_190 = __VLS_189({ ...{}, class: (" row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
                    ({}({ ...{}, class: (" row items-center q-pb-none"), }));
                    {
                        const __VLS_193 = __VLS_intrinsicElements["div"];
                        const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193);
                        const __VLS_195 = __VLS_194({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_196.slots).default;
                        const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195);
                    }
                    {
                        const __VLS_198 = {}.QSpace;
                        const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ ...{}, }));
                        ({}.QSpace);
                        const __VLS_200 = __VLS_199({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_199));
                        ({}({ ...{}, }));
                        const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200);
                    }
                    {
                        const __VLS_203 = {}.QBtn;
                        const __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203({ ...{ 'onClick': {}, }, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                        ({}.QBtn);
                        const __VLS_205 = __VLS_204({ ...{ 'onClick': {}, }, icon: ("close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
                        ({}({ ...{ 'onClick': {}, }, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                        let __VLS_208 = { 'click': __VLS_pickEvent(__VLS_207['click'], {}.onClick) };
                        __VLS_208 = { click: (__VLS_ctx.close) };
                        const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
                        let __VLS_207;
                    }
                    (__VLS_191.slots).default;
                    const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
                }
                {
                    const __VLS_209 = {}.QForm;
                    const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{ 'onSubmit': {}, }, }));
                    ({}.QForm);
                    const __VLS_211 = __VLS_210({ ...{ 'onSubmit': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                    ({}({ ...{ 'onSubmit': {}, }, }));
                    let __VLS_214 = { 'submit': __VLS_pickEvent(__VLS_213['submit'], {}.onSubmit) };
                    __VLS_214 = { submit: (__VLS_ctx.rename) };
                    {
                        const __VLS_215 = {}.QCardSection;
                        const __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ ...{}, }));
                        ({}.QCardSection);
                        const __VLS_217 = __VLS_216({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                        ({}({ ...{}, }));
                        {
                            const __VLS_220 = {}.QInput;
                            const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{}, autofocus: (true), modelValue: ((__VLS_ctx.curName)), label: ("Имя службы"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                            ({}.QInput);
                            const __VLS_222 = __VLS_221({ ...{}, autofocus: (true), modelValue: ((__VLS_ctx.curName)), label: ("Имя службы"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                            ({}({ ...{}, autofocus: (true), modelValue: ((__VLS_ctx.curName)), label: ("Имя службы"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                            const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                        }
                        (__VLS_218.slots).default;
                        const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                    }
                    {
                        const __VLS_225 = {}.QCardActions;
                        const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, new __VLS_225({ ...{}, align: ("right"), }));
                        ({}.QCardActions);
                        const __VLS_227 = __VLS_226({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                        ({}({ ...{}, align: ("right"), }));
                        {
                            const __VLS_230 = {}.QBtn;
                            const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                            ({}.QBtn);
                            const __VLS_232 = __VLS_231({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
                            ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                            let __VLS_235 = { 'click': __VLS_pickEvent(__VLS_234['click'], {}.onClick) };
                            __VLS_235 = { click: (__VLS_ctx.close) };
                            const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232);
                            let __VLS_234;
                        }
                        {
                            const __VLS_236 = {}.QBtn;
                            const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ ...{}, unelevated: (true), color: ("primary"), type: ("submit"), label: ("Применить"), }));
                            ({}.QBtn);
                            const __VLS_238 = __VLS_237({ ...{}, unelevated: (true), color: ("primary"), type: ("submit"), label: ("Применить"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
                            ({}({ ...{}, unelevated: (true), color: ("primary"), type: ("submit"), label: ("Применить"), }));
                            const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238);
                        }
                        (__VLS_228.slots).default;
                        const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227);
                    }
                    (__VLS_212.slots).default;
                    const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                    let __VLS_213;
                }
                (__VLS_186.slots).default;
                const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
            }
            (__VLS_181.slots).default;
            const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180);
        }
        {
            const __VLS_241 = {}.ConfirmDialog;
            const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({ ...{ 'onClose': {}, 'onRemove': {}, }, modelValue: ((__VLS_ctx.dialog3)), panel: ((__VLS_ctx.curPanel)), }));
            ({}.ConfirmDialog);
            const __VLS_243 = __VLS_242({ ...{ 'onClose': {}, 'onRemove': {}, }, modelValue: ((__VLS_ctx.dialog3)), panel: ((__VLS_ctx.curPanel)), }, ...__VLS_functionalComponentArgsRest(__VLS_242));
            ({}({ ...{ 'onClose': {}, 'onRemove': {}, }, modelValue: ((__VLS_ctx.dialog3)), panel: ((__VLS_ctx.curPanel)), }));
            let __VLS_246 = { 'close': __VLS_pickEvent(__VLS_245['close'], {}.onClose) };
            __VLS_246 = { close: $event => {
                    __VLS_ctx.dialog3 = false;
                    // @ts-ignore
                    [addProcess, dialog2, dialog2, dialog2, close, rename, curName, req, curName, req, curName, req, close, dialog3, curPanel, dialog3, curPanel, dialog3, curPanel, dialog3,];
                }
            };
            let __VLS_247 = { 'remove': __VLS_pickEvent(__VLS_245['remove'], {}.onRemove) };
            __VLS_247 = { remove: (__VLS_ctx.removeService) };
            const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243);
            let __VLS_245;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["al"];
        __VLS_styleScopedClasses["zag"];
        __VLS_styleScopedClasses["bt-filter"];
        __VLS_styleScopedClasses["q-gutter-x-xs"];
        __VLS_styleScopedClasses["filter"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["head"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["text-right"];
        __VLS_styleScopedClasses["span"];
        __VLS_styleScopedClasses["pcard"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-pb-none"];
        __VLS_styleScopedClasses["text-h6"];
    }
    var __VLS_slots;
    // @ts-ignore
    [removeService,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            GreyBlock2: GreyBlock2,
            AddDialogCommon: AddDialogCommon,
            ConfirmDialog: ConfirmDialog,
            dialog: dialog,
            dialog2: dialog2,
            dialog3: dialog3,
            curName: curName,
            curPanel: curPanel,
            filter: filter,
            filtered: filtered,
            add: add,
            ren: ren,
            rename: rename,
            remove: remove,
            removeService: removeService,
            confirm: confirm,
            addProcess: addProcess,
            calColor: calColor,
            close: close,
            expandAll: expandAll,
            collapseAll: collapseAll,
            req: req,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Worker.vue.js.map