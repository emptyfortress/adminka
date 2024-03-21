/* __placeholder__ */
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { useHran } from '@/stores/hran';
import { useTabs } from '@/stores/tabs';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hran = useHran();
const tabs = useTabs();
const showAdd = ref(false);
const name = ref();
const type = ref('Все файлы');
const options = [
    'Все файлы',
    'По расширению файла',
    'Размер больше, чем',
    'Размер меньше, чем',
    'Файл справочника',
    'Добавить из сборки',
];
const dragging = ref(false);
const ext = ref();
const size1 = ref();
const size2 = ref();
const sborka = ref();
const date = new Date();
const currentItemIndex = ref();
const add = () => {
    let tmp = {};
    tmp.id = +date;
    tmp.name = name.value;
    tmp.type = type.value;
    tmp.ext = ext.value;
    tmp.size1 = size1.value;
    tmp.size2 = size2.value;
    tmp.expanded = true;
    tmp.gr = [];
    if (currentItemIndex.value === null) {
        hran.addRule(tmp);
    }
    else {
        hran.rules[currentItemIndex.value] = tmp;
    }
    tabs.setTabMod(2);
    showAdd.value = false;
    currentItemIndex.value = null;
    name.value = null;
    type.value = 'Все файлы';
    ext.value = null;
    size1.value = null;
    size2.value = null;
};
const removeRule = (index) => {
    hran.removeRule(index);
    tabs.setTabMod(2);
};
const clearGroup = (index, ind) => {
    hran.clearGroup(index, ind);
};
const showDialog = () => {
    name.value = null;
    currentItemIndex.value = null;
    ext.value = null;
    size1.value = null;
    size2.value = null;
    type.value = 'Все файлы';
    showAdd.value = true;
};
const edit = (index) => {
    name.value = hran.rules[index].name;
    type.value = hran.rules[index].type;
    ext.value = hran.rules[index].ext;
    size1.value = hran.rules[index].size1;
    size2.value = hran.rules[index].size2;
    currentItemIndex.value = index;
    showAdd.value = true;
    tabs.setTabMod(2);
};
const set = () => {
    tabs.setTabMod(2);
};
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
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu, QMenu, QMenu,];
    __VLS_intrinsicElements.ol;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
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
    // @ts-ignore
    [QItemSection, QItemSection,];
    __VLS_components.QSeparator;
    __VLS_components.qSeparator;
    // @ts-ignore
    [QSeparator,];
    __VLS_components.QDialog;
    __VLS_components.qDialog;
    // @ts-ignore
    [QDialog,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection, QCardSection, QCardSection,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" row items-baseline justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" row items-baseline justify-between"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" zg"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" zg"), }));
            (__VLS_ctx.hran.rules.length);
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, }));
            {
                const __VLS_15 = {}.QBtn;
                const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, flat: (true), round: (true), icon: ('mdi-information'), }));
                ({}.QBtn);
                const __VLS_17 = __VLS_16({ ...{}, flat: (true), round: (true), icon: ('mdi-information'), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, flat: (true), round: (true), icon: ('mdi-information'), }));
                {
                    const __VLS_20 = {}.QMenu;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
                    ({}.QMenu);
                    const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, }));
                    {
                        const __VLS_25 = __VLS_intrinsicElements["ol"];
                        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                        const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, }));
                        {
                            const __VLS_30 = __VLS_intrinsicElements["li"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, }));
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        {
                            const __VLS_35 = __VLS_intrinsicElements["li"];
                            const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                            const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                            ({}({ ...{}, }));
                            (__VLS_38.slots).default;
                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                        }
                        (__VLS_28.slots).default;
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_40 = {}.QBtn;
                const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ('mdi-plus-circle'), }));
                ({}.QBtn);
                const __VLS_42 = __VLS_41({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ('mdi-plus-circle'), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ('mdi-plus-circle'), }));
                let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], {}.onClick) };
                __VLS_45 = { click: (__VLS_ctx.showDialog) };
                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                let __VLS_44;
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (__VLS_ctx.hran.rules.length === 0) {
        {
            const __VLS_46 = __VLS_intrinsicElements["div"];
            const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
            const __VLS_48 = __VLS_47({ ...{}, class: (" empt"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
            ({}({ ...{}, class: (" empt"), }));
            (__VLS_49.slots).default;
            const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
        }
        // @ts-ignore
        [hran, showDialog, hran,];
    }
    else {
        {
            const __VLS_51 = (__VLS_ctx.draggable);
            const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.hran.rules)), itemKey: ("id"), group: ("rule"), ghostClass: ('ghost'), }));
            const __VLS_53 = __VLS_52({ ...{ 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.hran.rules)), itemKey: ("id"), group: ("rule"), ghostClass: ('ghost'), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
            ({}({ ...{ 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.hran.rules)), itemKey: ("id"), group: ("rule"), ghostClass: ('ghost'), }));
            let __VLS_56 = { 'end': __VLS_pickEvent(__VLS_55['end'], {}.onEnd) };
            __VLS_56 = { end: (__VLS_ctx.set) };
            {
                const __VLS_57 = __VLS_intrinsicElements["template"];
                const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
                const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                ({}({ ...{}, }));
                {
                    const [{ element, index }] = __VLS_getSlotParams((__VLS_54.slots).item);
                    {
                        const __VLS_61 = {}.QExpansionItem;
                        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, class: (" gro exp"), modelValue: ((element.expanded)), switchToggleSide: (true), expandIconToggle: (true), }));
                        ({}.QExpansionItem);
                        const __VLS_63 = __VLS_62({ ...{}, class: (" gro exp"), modelValue: ((element.expanded)), switchToggleSide: (true), expandIconToggle: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                        ({}({ ...{}, class: (" gro exp"), modelValue: ((element.expanded)), switchToggleSide: (true), expandIconToggle: (true), }));
                        {
                            const __VLS_66 = __VLS_intrinsicElements["template"];
                            const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                            const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                            ({}({ ...{}, }));
                            {
                                (__VLS_64.slots).header;
                                {
                                    const __VLS_70 = __VLS_intrinsicElements["div"];
                                    const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                                    const __VLS_72 = __VLS_71({ ...{}, class: (" line"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                                    ({}({ ...{}, class: (" line"), }));
                                    {
                                        const __VLS_75 = __VLS_intrinsicElements["div"];
                                        const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                                        const __VLS_77 = __VLS_76({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                                        ({}({ ...{}, class: (" title"), }));
                                        {
                                            const __VLS_80 = {}.QIcon;
                                            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, class: (" q-mr-sm"), name: ("mdi-gate-nor"), size: ("sm"), }));
                                            ({}.QIcon);
                                            const __VLS_82 = __VLS_81({ ...{}, class: (" q-mr-sm"), name: ("mdi-gate-nor"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                                            ({}({ ...{}, class: (" q-mr-sm"), name: ("mdi-gate-nor"), size: ("sm"), }));
                                            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                                        }
                                        {
                                            const __VLS_85 = __VLS_intrinsicElements["span"];
                                            const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                                            const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                                            ({}({ ...{}, }));
                                            (element.name);
                                            (__VLS_88.slots).default;
                                            const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                                        }
                                        (__VLS_78.slots).default;
                                        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                                    }
                                    {
                                        const __VLS_90 = __VLS_intrinsicElements["div"];
                                        const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                                        const __VLS_92 = __VLS_91({ ...{}, class: (" bt"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                                        ({}({ ...{}, class: (" bt"), }));
                                        {
                                            const __VLS_95 = {}.QBtn;
                                            const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{ 'onClick': {}, }, class: (" q-mr-sm"), flat: (true), round: (true), icon: ("mdi-pencil"), size: ("sm"), }));
                                            ({}.QBtn);
                                            const __VLS_97 = __VLS_96({ ...{ 'onClick': {}, }, class: (" q-mr-sm"), flat: (true), round: (true), icon: ("mdi-pencil"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                                            ({}({ ...{ 'onClick': {}, }, class: (" q-mr-sm"), flat: (true), round: (true), icon: ("mdi-pencil"), size: ("sm"), }));
                                            let __VLS_100 = { 'click': __VLS_pickEvent(__VLS_99['click'], {}.onClick) };
                                            __VLS_100 = { click: $event => {
                                                    if (!(!((__VLS_ctx.hran.rules.length === 0))))
                                                        return;
                                                    __VLS_ctx.edit(index);
                                                    // @ts-ignore
                                                    [draggable, draggable, hran, draggable, hran, draggable, hran, set, edit,];
                                                }
                                            };
                                            const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                                            let __VLS_99;
                                        }
                                        {
                                            const __VLS_101 = {}.QBtn;
                                            const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                                            ({}.QBtn);
                                            const __VLS_103 = __VLS_102({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                                            ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                                            let __VLS_106 = { 'click': __VLS_pickEvent(__VLS_105['click'], {}.onClick) };
                                            __VLS_106 = { click: $event => {
                                                    if (!(!((__VLS_ctx.hran.rules.length === 0))))
                                                        return;
                                                    ;
                                                }
                                            };
                                            {
                                                const __VLS_107 = {}.QMenu;
                                                const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{}, }));
                                                ({}.QMenu);
                                                const __VLS_109 = __VLS_108({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_108));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_112 = {}.QList;
                                                    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ ...{}, }));
                                                    ({}.QList);
                                                    const __VLS_114 = __VLS_113({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_113));
                                                    ({}({ ...{}, }));
                                                    {
                                                        const __VLS_117 = {}.QItem;
                                                        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                        ({}.QItem);
                                                        const __VLS_119 = __VLS_118({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                                                        ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                                        let __VLS_122 = { 'click': __VLS_pickEvent(__VLS_121['click'], {}.onClick) };
                                                        __VLS_122 = { click: $event => {
                                                                if (!(!((__VLS_ctx.hran.rules.length === 0))))
                                                                    return;
                                                                __VLS_ctx.removeRule(index);
                                                                // @ts-ignore
                                                                [removeRule,];
                                                            }
                                                        };
                                                        {
                                                            const __VLS_123 = {}.QItemSection;
                                                            const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{}, }));
                                                            ({}.QItemSection);
                                                            const __VLS_125 = __VLS_124({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                                                            ({}({ ...{}, }));
                                                            (__VLS_126.slots).default;
                                                            const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                                                        }
                                                        (__VLS_120.slots).default;
                                                        const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
                                                        let __VLS_121;
                                                    }
                                                    (__VLS_115.slots).default;
                                                    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
                                                }
                                                (__VLS_110.slots).default;
                                                const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
                                            }
                                            (__VLS_104.slots).default;
                                            const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                                            let __VLS_105;
                                        }
                                        (__VLS_93.slots).default;
                                        const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                                    }
                                    {
                                        const __VLS_128 = __VLS_intrinsicElements["div"];
                                        const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                                        const __VLS_130 = __VLS_129({ ...{}, class: (" des"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                        ({}({ ...{}, class: (" des"), }));
                                        {
                                            const __VLS_133 = {}.QIcon;
                                            const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{}, class: (" q-mr-sm"), name: ("mdi-information-outline"), size: ("14px"), }));
                                            ({}.QIcon);
                                            const __VLS_135 = __VLS_134({ ...{}, class: (" q-mr-sm"), name: ("mdi-information-outline"), size: ("14px"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                                            ({}({ ...{}, class: (" q-mr-sm"), name: ("mdi-information-outline"), size: ("14px"), }));
                                            const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                                        }
                                        {
                                            const __VLS_138 = __VLS_intrinsicElements["span"];
                                            const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
                                            const __VLS_140 = __VLS_139({ ...{}, class: (" q-mr-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
                                            ({}({ ...{}, class: (" q-mr-xs"), }));
                                            (element.type);
                                            (__VLS_141.slots).default;
                                            const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                                        }
                                        {
                                            const __VLS_143 = __VLS_intrinsicElements["span"];
                                            const __VLS_144 = __VLS_elementAsFunctionalComponent(__VLS_143);
                                            const __VLS_145 = __VLS_144({ ...{}, class: (" q-mr-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_144));
                                            ({}({ ...{}, class: (" q-mr-xs"), }));
                                            (element.ext);
                                            (__VLS_146.slots).default;
                                            const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
                                        }
                                        {
                                            const __VLS_148 = __VLS_intrinsicElements["span"];
                                            const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148);
                                            const __VLS_150 = __VLS_149({ ...{}, class: (" q-mr-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
                                            ({}({ ...{}, class: (" q-mr-xs"), }));
                                            (element.size1);
                                            (__VLS_151.slots).default;
                                            const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
                                        }
                                        {
                                            const __VLS_153 = __VLS_intrinsicElements["span"];
                                            const __VLS_154 = __VLS_elementAsFunctionalComponent(__VLS_153);
                                            const __VLS_155 = __VLS_154({ ...{}, class: (" q-mr-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                                            ({}({ ...{}, class: (" q-mr-xs"), }));
                                            (element.size2);
                                            (__VLS_156.slots).default;
                                            const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
                                        }
                                        if (element.size1 || element.size2) {
                                            {
                                                const __VLS_158 = __VLS_intrinsicElements["span"];
                                                const __VLS_159 = __VLS_elementAsFunctionalComponent(__VLS_158);
                                                const __VLS_160 = __VLS_159({ ...{}, class: (" q-mr-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
                                                ({}({ ...{}, class: (" q-mr-xs"), }));
                                                (__VLS_161.slots).default;
                                                const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
                                            }
                                        }
                                        (__VLS_131.slots).default;
                                        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                                    }
                                    (__VLS_73.slots).default;
                                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                                }
                            }
                        }
                        {
                            const __VLS_163 = {}.QSeparator;
                            const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, }));
                            ({}.QSeparator);
                            const __VLS_165 = __VLS_164({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_164));
                            ({}({ ...{}, }));
                            const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165);
                        }
                        {
                            const __VLS_168 = (__VLS_ctx.draggable);
                            const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((element.gr)), itemKey: ("id"), group: ("last"), ghostClass: ("ghost"), }));
                            const __VLS_170 = __VLS_169({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((element.gr)), itemKey: ("id"), group: ("last"), ghostClass: ("ghost"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
                            ({}({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((element.gr)), itemKey: ("id"), group: ("last"), ghostClass: ("ghost"), }));
                            let __VLS_173 = { 'start': __VLS_pickEvent(__VLS_172['start'], {}.onStart) };
                            __VLS_173 = { start: $event => {
                                    if (!(!((__VLS_ctx.hran.rules.length === 0))))
                                        return;
                                    __VLS_ctx.dragging = true;
                                    // @ts-ignore
                                    [draggable, draggable, draggable, draggable, dragging,];
                                }
                            };
                            let __VLS_174 = { 'end': __VLS_pickEvent(__VLS_172['end'], {}.onEnd) };
                            __VLS_174 = { end: $event => {
                                    if (!(!((__VLS_ctx.hran.rules.length === 0))))
                                        return;
                                    __VLS_ctx.dragging = false;
                                    // @ts-ignore
                                    [dragging,];
                                }
                            };
                            {
                                const __VLS_175 = __VLS_intrinsicElements["template"];
                                const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
                                const __VLS_177 = __VLS_176({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_176));
                                ({}({ ...{}, }));
                                {
                                    const { element: el, index: ind } = __VLS_getSlotParam((__VLS_171.slots).item);
                                    {
                                        const __VLS_179 = __VLS_intrinsicElements["div"];
                                        const __VLS_180 = __VLS_elementAsFunctionalComponent(__VLS_179);
                                        const __VLS_181 = __VLS_180({ ...{}, class: (" row justify-between items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
                                        ({}({ ...{}, class: (" row justify-between items-center"), }));
                                        {
                                            const __VLS_184 = __VLS_intrinsicElements["div"];
                                            const __VLS_185 = __VLS_elementAsFunctionalComponent(__VLS_184);
                                            const __VLS_186 = __VLS_185({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_185));
                                            ({}({ ...{}, class: (" q-ml-sm"), }));
                                            {
                                                const __VLS_189 = {}.QIcon;
                                                const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ ...{}, name: ("mdi-server"), size: ("18px"), style: ({}), }));
                                                ({}.QIcon);
                                                const __VLS_191 = __VLS_190({ ...{}, name: ("mdi-server"), size: ("18px"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
                                                ({}({ ...{}, name: ("mdi-server"), size: ("18px"), style: ({}), }));
                                                const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
                                            }
                                            {
                                                const __VLS_194 = __VLS_intrinsicElements["span"];
                                                const __VLS_195 = __VLS_elementAsFunctionalComponent(__VLS_194);
                                                const __VLS_196 = __VLS_195({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
                                                ({}({ ...{}, class: (" q-ml-sm"), }));
                                                (el.name);
                                                (__VLS_197.slots).default;
                                                const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
                                            }
                                            (__VLS_187.slots).default;
                                            const __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_184, __VLS_186);
                                        }
                                        {
                                            const __VLS_199 = {}.QBtn;
                                            const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-close"), size: ("10px"), }));
                                            ({}.QBtn);
                                            const __VLS_201 = __VLS_200({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-close"), size: ("10px"), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
                                            ({}({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-close"), size: ("10px"), }));
                                            {
                                                const __VLS_204 = {}.QMenu;
                                                const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{}, }));
                                                ({}.QMenu);
                                                const __VLS_206 = __VLS_205({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_205));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_209 = {}.QList;
                                                    const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, }));
                                                    ({}.QList);
                                                    const __VLS_211 = __VLS_210({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                                                    ({}({ ...{}, }));
                                                    {
                                                        const __VLS_214 = {}.QItem;
                                                        const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                        ({}.QItem);
                                                        const __VLS_216 = __VLS_215({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
                                                        ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                                        let __VLS_219 = { 'click': __VLS_pickEvent(__VLS_218['click'], {}.onClick) };
                                                        __VLS_219 = { click: $event => {
                                                                if (!(!((__VLS_ctx.hran.rules.length === 0))))
                                                                    return;
                                                                __VLS_ctx.clearGroup(index, ind);
                                                                // @ts-ignore
                                                                [clearGroup,];
                                                            }
                                                        };
                                                        {
                                                            const __VLS_220 = {}.QItemSection;
                                                            const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{}, }));
                                                            ({}.QItemSection);
                                                            const __VLS_222 = __VLS_221({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                                                            ({}({ ...{}, }));
                                                            (__VLS_223.slots).default;
                                                            const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                                                        }
                                                        (__VLS_217.slots).default;
                                                        const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_214, __VLS_216);
                                                        let __VLS_218;
                                                    }
                                                    (__VLS_212.slots).default;
                                                    const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                                                }
                                                (__VLS_207.slots).default;
                                                const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206);
                                            }
                                            (__VLS_202.slots).default;
                                            const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
                                        }
                                        (__VLS_182.slots).default;
                                        const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181);
                                    }
                                }
                            }
                            if (element.gr.length == 0) {
                                if (element.gr.length == 0) {
                                    {
                                        const __VLS_225 = __VLS_intrinsicElements["template"];
                                        const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
                                        const __VLS_227 = __VLS_226({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                                        ({}({ ...{}, }));
                                        {
                                            (__VLS_171.slots).header;
                                            {
                                                const __VLS_229 = __VLS_intrinsicElements["div"];
                                                const __VLS_230 = __VLS_elementAsFunctionalComponent(__VLS_229);
                                                const __VLS_231 = __VLS_230({ ...{}, class: (" empt"), }, ...__VLS_functionalComponentArgsRest(__VLS_230));
                                                ({}({ ...{}, class: (" empt"), }));
                                                (__VLS_232.slots).default;
                                                const __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231);
                                            }
                                        }
                                    }
                                }
                            }
                            const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
                            let __VLS_172;
                        }
                        const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                    }
                }
            }
            const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
            let __VLS_55;
        }
    }
    {
        const __VLS_234 = {}.QDialog;
        const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }));
        ({}.QDialog);
        const __VLS_236 = __VLS_235({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }, ...__VLS_functionalComponentArgsRest(__VLS_235));
        ({}({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }));
        {
            const __VLS_239 = {}.QCard;
            const __VLS_240 = __VLS_asFunctionalComponent(__VLS_239, new __VLS_239({ ...{}, style: ({}), }));
            ({}.QCard);
            const __VLS_241 = __VLS_240({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_240));
            ({}({ ...{}, style: ({}), }));
            {
                const __VLS_244 = {}.QForm;
                const __VLS_245 = __VLS_asFunctionalComponent(__VLS_244, new __VLS_244({ ...{ 'onSubmit': {}, }, }));
                ({}.QForm);
                const __VLS_246 = __VLS_245({ ...{ 'onSubmit': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_245));
                ({}({ ...{ 'onSubmit': {}, }, }));
                let __VLS_249 = { 'submit': __VLS_pickEvent(__VLS_248['submit'], {}.onSubmit) };
                __VLS_249 = { submit: (__VLS_ctx.add) };
                {
                    const __VLS_250 = {}.QCardSection;
                    const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, new __VLS_250({ ...{}, class: (" row items-center q-pb-none"), }));
                    ({}.QCardSection);
                    const __VLS_252 = __VLS_251({ ...{}, class: (" row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
                    ({}({ ...{}, class: (" row items-center q-pb-none"), }));
                    {
                        const __VLS_255 = __VLS_intrinsicElements["div"];
                        const __VLS_256 = __VLS_elementAsFunctionalComponent(__VLS_255);
                        const __VLS_257 = __VLS_256({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_258.slots).default;
                        const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257);
                    }
                    {
                        const __VLS_260 = {}.QSpace;
                        const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ ...{}, }));
                        ({}.QSpace);
                        const __VLS_262 = __VLS_261({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_261));
                        ({}({ ...{}, }));
                        const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262);
                    }
                    {
                        const __VLS_265 = {}.QBtn;
                        const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{}, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                        ({}.QBtn);
                        const __VLS_267 = __VLS_266({ ...{}, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
                        ({}({ ...{}, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                        const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267);
                    }
                    (__VLS_253.slots).default;
                    const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252);
                }
                {
                    const __VLS_270 = {}.QCardSection;
                    const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_272 = __VLS_271({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_271));
                    ({}({ ...{}, }));
                    {
                        const __VLS_275 = {}.QInput;
                        const __VLS_276 = __VLS_asFunctionalComponent(__VLS_275, new __VLS_275({ ...{}, modelValue: ((__VLS_ctx.name)), autofocus: (true), label: ('Название'), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                        ({}.QInput);
                        const __VLS_277 = __VLS_276({ ...{}, modelValue: ((__VLS_ctx.name)), autofocus: (true), label: ('Название'), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_276));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.name)), autofocus: (true), label: ('Название'), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                        const __VLS_278 = __VLS_pickFunctionalComponentCtx(__VLS_275, __VLS_277);
                    }
                    {
                        const __VLS_280 = __VLS_intrinsicElements["div"];
                        const __VLS_281 = __VLS_elementAsFunctionalComponent(__VLS_280);
                        const __VLS_282 = __VLS_281({ ...{}, class: (" grid"), }, ...__VLS_functionalComponentArgsRest(__VLS_281));
                        ({}({ ...{}, class: (" grid"), }));
                        {
                            const __VLS_285 = {}.QSelect;
                            const __VLS_286 = __VLS_asFunctionalComponent(__VLS_285, new __VLS_285({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.type)), label: ('Тип'), options: ((__VLS_ctx.options)), }));
                            ({}.QSelect);
                            const __VLS_287 = __VLS_286({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.type)), label: ('Тип'), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_286));
                            ({}({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.type)), label: ('Тип'), options: ((__VLS_ctx.options)), }));
                            const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287);
                        }
                        if (__VLS_ctx.type === 'По расширению файла') {
                            {
                                const __VLS_290 = {}.QInput;
                                const __VLS_291 = __VLS_asFunctionalComponent(__VLS_290, new __VLS_290({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.ext)), placeholder: ("*.jpg, *.mp3, *.tiff"), label: ("Расширение"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                                ({}.QInput);
                                const __VLS_292 = __VLS_291({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.ext)), placeholder: ("*.jpg, *.mp3, *.tiff"), label: ("Расширение"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
                                ({}({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.ext)), placeholder: ("*.jpg, *.mp3, *.tiff"), label: ("Расширение"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                                const __VLS_293 = __VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292);
                            }
                            // @ts-ignore
                            [showAdd, showAdd, showAdd, add, name, name, name, type, options, type, options, type, options, type, ext, ext, ext,];
                        }
                        if (__VLS_ctx.type === 'Размер больше, чем') {
                            {
                                const __VLS_295 = {}.QInput;
                                const __VLS_296 = __VLS_asFunctionalComponent(__VLS_295, new __VLS_295({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.size1)), label: ("Размер, kB"), type: ("number"), lazyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }));
                                ({}.QInput);
                                const __VLS_297 = __VLS_296({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.size1)), label: ("Размер, kB"), type: ("number"), lazyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_296));
                                ({}({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.size1)), label: ("Размер, kB"), type: ("number"), lazyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }));
                                const __VLS_298 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297);
                            }
                            // @ts-ignore
                            [type, size1, size1, size1,];
                        }
                        if (__VLS_ctx.type === 'Размер меньше, чем') {
                            {
                                const __VLS_300 = {}.QInput;
                                const __VLS_301 = __VLS_asFunctionalComponent(__VLS_300, new __VLS_300({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.size2)), label: ("Размер, kB"), type: ("number"), }));
                                ({}.QInput);
                                const __VLS_302 = __VLS_301({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.size2)), label: ("Размер, kB"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_301));
                                ({}({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.size2)), label: ("Размер, kB"), type: ("number"), }));
                                const __VLS_303 = __VLS_pickFunctionalComponentCtx(__VLS_300, __VLS_302);
                            }
                            // @ts-ignore
                            [type, size2, size2, size2,];
                        }
                        if (__VLS_ctx.type === 'Добавить из сборки') {
                            {
                                const __VLS_305 = {}.QInput;
                                const __VLS_306 = __VLS_asFunctionalComponent(__VLS_305, new __VLS_305({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.sborka)), label: ("Сборка"), }));
                                ({}.QInput);
                                const __VLS_307 = __VLS_306({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.sborka)), label: ("Сборка"), }, ...__VLS_functionalComponentArgsRest(__VLS_306));
                                ({}({ ...{}, class: (" full-width"), modelValue: ((__VLS_ctx.sborka)), label: ("Сборка"), }));
                                const __VLS_308 = __VLS_pickFunctionalComponentCtx(__VLS_305, __VLS_307);
                            }
                            // @ts-ignore
                            [type, sborka, sborka, sborka,];
                        }
                        (__VLS_283.slots).default;
                        const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282);
                    }
                    (__VLS_273.slots).default;
                    const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272);
                }
                {
                    const __VLS_310 = {}.QCardSection;
                    const __VLS_311 = __VLS_asFunctionalComponent(__VLS_310, new __VLS_310({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_312 = __VLS_311({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_311));
                    ({}({ ...{}, }));
                    {
                        const __VLS_315 = {}.QCardActions;
                        const __VLS_316 = __VLS_asFunctionalComponent(__VLS_315, new __VLS_315({ ...{}, align: ("right"), }));
                        ({}.QCardActions);
                        const __VLS_317 = __VLS_316({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_316));
                        ({}({ ...{}, align: ("right"), }));
                        {
                            const __VLS_320 = {}.QBtn;
                            const __VLS_321 = __VLS_asFunctionalComponent(__VLS_320, new __VLS_320({ ...{ 'onClick': {}, }, flat: (true), color: ('primary'), label: ('Отмена'), }));
                            ({}.QBtn);
                            const __VLS_322 = __VLS_321({ ...{ 'onClick': {}, }, flat: (true), color: ('primary'), label: ('Отмена'), }, ...__VLS_functionalComponentArgsRest(__VLS_321));
                            ({}({ ...{ 'onClick': {}, }, flat: (true), color: ('primary'), label: ('Отмена'), }));
                            let __VLS_325 = { 'click': __VLS_pickEvent(__VLS_324['click'], {}.onClick) };
                            __VLS_325 = { click: $event => {
                                    __VLS_ctx.showAdd = false;
                                    // @ts-ignore
                                    [showAdd,];
                                }
                            };
                            const __VLS_323 = __VLS_pickFunctionalComponentCtx(__VLS_320, __VLS_322);
                            let __VLS_324;
                        }
                        {
                            const __VLS_326 = {}.QBtn;
                            const __VLS_327 = __VLS_asFunctionalComponent(__VLS_326, new __VLS_326({ ...{}, unelevated: (true), color: ('primary'), label: ('Сохранить'), type: ("submit"), }));
                            ({}.QBtn);
                            const __VLS_328 = __VLS_327({ ...{}, unelevated: (true), color: ('primary'), label: ('Сохранить'), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_327));
                            ({}({ ...{}, unelevated: (true), color: ('primary'), label: ('Сохранить'), type: ("submit"), }));
                            const __VLS_329 = __VLS_pickFunctionalComponentCtx(__VLS_326, __VLS_328);
                        }
                        (__VLS_318.slots).default;
                        const __VLS_318 = __VLS_pickFunctionalComponentCtx(__VLS_315, __VLS_317);
                    }
                    (__VLS_313.slots).default;
                    const __VLS_313 = __VLS_pickFunctionalComponentCtx(__VLS_310, __VLS_312);
                }
                (__VLS_247.slots).default;
                const __VLS_247 = __VLS_pickFunctionalComponentCtx(__VLS_244, __VLS_246);
                let __VLS_248;
            }
            (__VLS_242.slots).default;
            const __VLS_242 = __VLS_pickFunctionalComponentCtx(__VLS_239, __VLS_241);
        }
        (__VLS_237.slots).default;
        const __VLS_237 = __VLS_pickFunctionalComponentCtx(__VLS_234, __VLS_236);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-baseline"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["empt"];
        __VLS_styleScopedClasses["gro"];
        __VLS_styleScopedClasses["exp"];
        __VLS_styleScopedClasses["line"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["bt"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["des"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["q-mr-xs"];
        __VLS_styleScopedClasses["q-mr-xs"];
        __VLS_styleScopedClasses["q-mr-xs"];
        __VLS_styleScopedClasses["q-mr-xs"];
        __VLS_styleScopedClasses["q-mr-xs"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["empt"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-pb-none"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["full-width"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            draggable: draggable,
            hran: hran,
            showAdd: showAdd,
            name: name,
            type: type,
            options: options,
            dragging: dragging,
            ext: ext,
            size1: size1,
            size2: size2,
            sborka: sborka,
            add: add,
            removeRule: removeRule,
            clearGroup: clearGroup,
            showDialog: showDialog,
            edit: edit,
            set: set,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Rule.vue.js.map