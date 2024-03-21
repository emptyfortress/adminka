/* __placeholder__ */
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { useHran } from '@/stores/hran';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hran = useHran();
const newGroupName = ref();
const newGroupRule = ref();
const showAdd = ref(false);
const currentGroupIndex = ref();
const remove = (ind, index) => {
    hran.groups[ind].list.splice(index, 1);
};
const dragging = ref(false);
const addGroup = () => {
    if (currentGroupIndex.value == null) {
        hran.addGroup(newGroupName.value, newGroupRule.value);
    }
    else {
        hran.editGroup(currentGroupIndex.value, newGroupName.value, newGroupRule.value);
    }
    showAdd.value = false;
    newGroupName.value = '';
    newGroupRule.value = '';
    currentGroupIndex.value = null;
};
const addNew = () => {
    newGroupName.value = '';
    newGroupRule.value = '';
    currentGroupIndex.value = null;
    showAdd.value = true;
};
const options = [
    'Самое заполненное хранилище',
    'Самое свободное хранилище',
    'Случайный порядок',
];
const removeGroup = (ind) => {
    hran.removeGroup(ind);
};
const editGroup = (group, index) => {
    newGroupName.value = group.name;
    newGroupRule.value = group.rule;
    currentGroupIndex.value = index;
    showAdd.value = true;
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
    [QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
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
    // @ts-ignore
    [QIcon, QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu, QMenu,];
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
    __VLS_components.QCard;
    __VLS_components.qCard;
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard, QCard,];
    __VLS_components.QDialog;
    __VLS_components.qDialog;
    // @ts-ignore
    [QDialog,];
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
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection, QCardSection, QCardSection, QCardSection,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
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
        const __VLS_2 = __VLS_1({ ...{}, class: (" row items-center justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" row items-center justify-between"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" zg"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" zg"), }));
            (__VLS_ctx.hran.groups.length);
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = {}.QBtn;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
            ({}.QBtn);
            const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
            let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_14['click'], {}.onClick) };
            __VLS_15 = { click: (__VLS_ctx.addNew) };
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            let __VLS_14;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (__VLS_ctx.hran.groups.length === 0) {
        {
            const __VLS_16 = __VLS_intrinsicElements["div"];
            const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
            const __VLS_18 = __VLS_17({ ...{}, class: (" empt"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ ...{}, class: (" empt"), }));
            (__VLS_19.slots).default;
            const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        }
        // @ts-ignore
        [hran, addNew, hran,];
    }
    {
        const __VLS_21 = (__VLS_ctx.draggable);
        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.hran.groups)), itemKey: ("id"), group: (({ name: 'last', pull: 'clone', put: false })), }));
        const __VLS_23 = __VLS_22({ ...{}, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.hran.groups)), itemKey: ("id"), group: (({ name: 'last', pull: 'clone', put: false })), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        ({}({ ...{}, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.hran.groups)), itemKey: ("id"), group: (({ name: 'last', pull: 'clone', put: false })), }));
        {
            const __VLS_26 = __VLS_intrinsicElements["template"];
            const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
            const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            ({}({ ...{}, }));
            {
                const [{ element, index }] = __VLS_getSlotParams((__VLS_24.slots).item);
                {
                    const __VLS_30 = {}.QExpansionItem;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, class: (" gro exp"), modelValue: ((element.expanded)), switchToggleSide: (true), }));
                    ({}.QExpansionItem);
                    const __VLS_32 = __VLS_31({ ...{}, class: (" gro exp"), modelValue: ((element.expanded)), switchToggleSide: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, class: (" gro exp"), modelValue: ((element.expanded)), switchToggleSide: (true), }));
                    {
                        const __VLS_35 = __VLS_intrinsicElements["template"];
                        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                        const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                        ({}({ ...{}, }));
                        {
                            (__VLS_33.slots).header;
                            {
                                const __VLS_39 = __VLS_intrinsicElements["div"];
                                const __VLS_40 = __VLS_elementAsFunctionalComponent(__VLS_39);
                                const __VLS_41 = __VLS_40({ ...{}, class: (" row items-center justify-between full-width"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                                ({}({ ...{}, class: (" row items-center justify-between full-width"), }));
                                {
                                    const __VLS_44 = __VLS_intrinsicElements["div"];
                                    const __VLS_45 = __VLS_elementAsFunctionalComponent(__VLS_44);
                                    const __VLS_46 = __VLS_45({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
                                    ({}({ ...{}, class: (" title"), }));
                                    {
                                        const __VLS_49 = {}.QIcon;
                                        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{}, class: (" q-mr-sm"), name: ("mdi-server"), }));
                                        ({}.QIcon);
                                        const __VLS_51 = __VLS_50({ ...{}, class: (" q-mr-sm"), name: ("mdi-server"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
                                        ({}({ ...{}, class: (" q-mr-sm"), name: ("mdi-server"), }));
                                        const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
                                    }
                                    {
                                        const __VLS_54 = __VLS_intrinsicElements["span"];
                                        const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                                        const __VLS_56 = __VLS_55({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                                        ({}({ ...{}, }));
                                        (element.name);
                                        (__VLS_57.slots).default;
                                        const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
                                    }
                                    (__VLS_47.slots).default;
                                    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
                                }
                                {
                                    const __VLS_59 = __VLS_intrinsicElements["div"];
                                    const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
                                    const __VLS_61 = __VLS_60({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                                    ({}({ ...{}, }));
                                    {
                                        const __VLS_64 = {}.QBtn;
                                        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-pencil"), size: ("sm"), }));
                                        ({}.QBtn);
                                        const __VLS_66 = __VLS_65({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-pencil"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                                        ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-pencil"), size: ("sm"), }));
                                        let __VLS_69 = { 'click': __VLS_pickEvent(__VLS_68['click'], {}.onClick) };
                                        __VLS_69 = { click: $event => {
                                                __VLS_ctx.editGroup(element, index);
                                                // @ts-ignore
                                                [draggable, draggable, hran, draggable, hran, draggable, hran, editGroup,];
                                            }
                                        };
                                        const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                                        let __VLS_68;
                                    }
                                    {
                                        const __VLS_70 = {}.QBtn;
                                        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                                        ({}.QBtn);
                                        const __VLS_72 = __VLS_71({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                                        ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                                        let __VLS_75 = { 'click': __VLS_pickEvent(__VLS_74['click'], {}.onClick) };
                                        __VLS_75 = { click: $event => {
                                                ;
                                            }
                                        };
                                        {
                                            const __VLS_76 = {}.QMenu;
                                            const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{}, }));
                                            ({}.QMenu);
                                            const __VLS_78 = __VLS_77({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                                            ({}({ ...{}, }));
                                            {
                                                const __VLS_81 = {}.QList;
                                                const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, }));
                                                ({}.QList);
                                                const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_86 = {}.QItem;
                                                    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                    ({}.QItem);
                                                    const __VLS_88 = __VLS_87({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                                                    ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                    __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                                    let __VLS_91 = { 'click': __VLS_pickEvent(__VLS_90['click'], {}.onClick) };
                                                    __VLS_91 = { click: $event => {
                                                            __VLS_ctx.removeGroup(index);
                                                            // @ts-ignore
                                                            [removeGroup,];
                                                        }
                                                    };
                                                    {
                                                        const __VLS_92 = {}.QItemSection;
                                                        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{}, }));
                                                        ({}.QItemSection);
                                                        const __VLS_94 = __VLS_93({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
                                                        ({}({ ...{}, }));
                                                        (__VLS_95.slots).default;
                                                        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
                                                    }
                                                    (__VLS_89.slots).default;
                                                    const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                                                    let __VLS_90;
                                                }
                                                (__VLS_84.slots).default;
                                                const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                                            }
                                            (__VLS_79.slots).default;
                                            const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                                        }
                                        (__VLS_73.slots).default;
                                        const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                                        let __VLS_74;
                                    }
                                    (__VLS_62.slots).default;
                                    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                                }
                                (__VLS_42.slots).default;
                                const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
                            }
                        }
                    }
                    {
                        const __VLS_97 = {}.QSeparator;
                        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, }));
                        ({}.QSeparator);
                        const __VLS_99 = __VLS_98({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
                        ({}({ ...{}, }));
                        const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99);
                    }
                    {
                        const __VLS_102 = {}.QCard;
                        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{}, class: (" dblist"), }));
                        ({}.QCard);
                        const __VLS_104 = __VLS_103({ ...{}, class: (" dblist"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
                        ({}({ ...{}, class: (" dblist"), }));
                        {
                            const __VLS_107 = (__VLS_ctx.draggable);
                            const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((element.list)), itemKey: ("id"), group: ("group"), ghostClass: ("ghost"), }));
                            const __VLS_109 = __VLS_108({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((element.list)), itemKey: ("id"), group: ("group"), ghostClass: ("ghost"), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
                            ({}({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((element.list)), itemKey: ("id"), group: ("group"), ghostClass: ("ghost"), }));
                            let __VLS_112 = { 'start': __VLS_pickEvent(__VLS_111['start'], {}.onStart) };
                            __VLS_112 = { start: $event => {
                                    __VLS_ctx.dragging = true;
                                    // @ts-ignore
                                    [draggable, draggable, draggable, draggable, dragging,];
                                }
                            };
                            let __VLS_113 = { 'end': __VLS_pickEvent(__VLS_111['end'], {}.onEnd) };
                            __VLS_113 = { end: $event => {
                                    __VLS_ctx.dragging = false;
                                    // @ts-ignore
                                    [dragging,];
                                }
                            };
                            {
                                const __VLS_114 = __VLS_intrinsicElements["template"];
                                const __VLS_115 = __VLS_elementAsFunctionalComponent(__VLS_114);
                                const __VLS_116 = __VLS_115({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
                                ({}({ ...{}, }));
                                {
                                    const { element: el, index: ind } = __VLS_getSlotParam((__VLS_110.slots).item);
                                    {
                                        const __VLS_118 = __VLS_intrinsicElements["div"];
                                        const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                                        const __VLS_120 = __VLS_119({ ...{}, class: (" row justify-between items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                                        ({}({ ...{}, class: (" row justify-between items-center"), }));
                                        {
                                            const __VLS_123 = __VLS_intrinsicElements["div"];
                                            const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
                                            const __VLS_125 = __VLS_124({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                                            ({}({ ...{}, class: (" q-ml-sm"), }));
                                            {
                                                const __VLS_128 = {}.QIcon;
                                                const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{}, name: ("mdi-database-outline"), size: ("18px"), style: ({}), }));
                                                ({}.QIcon);
                                                const __VLS_130 = __VLS_129({ ...{}, name: ("mdi-database-outline"), size: ("18px"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                                ({}({ ...{}, name: ("mdi-database-outline"), size: ("18px"), style: ({}), }));
                                                const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                                            }
                                            {
                                                const __VLS_133 = __VLS_intrinsicElements["span"];
                                                const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
                                                const __VLS_135 = __VLS_134({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                                                ({}({ ...{}, class: (" q-ml-sm"), }));
                                                (el.name);
                                                (__VLS_136.slots).default;
                                                const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                                            }
                                            (__VLS_126.slots).default;
                                            const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                                        }
                                        {
                                            const __VLS_138 = {}.QBtn;
                                            const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-close"), size: ("10px"), }));
                                            ({}.QBtn);
                                            const __VLS_140 = __VLS_139({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-close"), size: ("10px"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
                                            ({}({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-close"), size: ("10px"), }));
                                            {
                                                const __VLS_143 = {}.QMenu;
                                                const __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143({ ...{}, }));
                                                ({}.QMenu);
                                                const __VLS_145 = __VLS_144({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_144));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_148 = {}.QList;
                                                    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ ...{}, }));
                                                    ({}.QList);
                                                    const __VLS_150 = __VLS_149({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_149));
                                                    ({}({ ...{}, }));
                                                    {
                                                        const __VLS_153 = {}.QItem;
                                                        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                        ({}.QItem);
                                                        const __VLS_155 = __VLS_154({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                                                        ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                                        let __VLS_158 = { 'click': __VLS_pickEvent(__VLS_157['click'], {}.onClick) };
                                                        __VLS_158 = { click: $event => {
                                                                __VLS_ctx.remove(index, ind);
                                                                // @ts-ignore
                                                                [remove,];
                                                            }
                                                        };
                                                        {
                                                            const __VLS_159 = {}.QItemSection;
                                                            const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ ...{}, }));
                                                            ({}.QItemSection);
                                                            const __VLS_161 = __VLS_160({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_160));
                                                            ({}({ ...{}, }));
                                                            (__VLS_162.slots).default;
                                                            const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
                                                        }
                                                        (__VLS_156.slots).default;
                                                        const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
                                                        let __VLS_157;
                                                    }
                                                    (__VLS_151.slots).default;
                                                    const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
                                                }
                                                (__VLS_146.slots).default;
                                                const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
                                            }
                                            (__VLS_141.slots).default;
                                            const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                                        }
                                        (__VLS_121.slots).default;
                                        const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                                    }
                                }
                            }
                            if (element.list.length == 0) {
                                if (element.list.length == 0) {
                                    {
                                        const __VLS_164 = __VLS_intrinsicElements["template"];
                                        const __VLS_165 = __VLS_elementAsFunctionalComponent(__VLS_164);
                                        const __VLS_166 = __VLS_165({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_165));
                                        ({}({ ...{}, }));
                                        {
                                            (__VLS_110.slots).header;
                                            {
                                                const __VLS_168 = __VLS_intrinsicElements["div"];
                                                const __VLS_169 = __VLS_elementAsFunctionalComponent(__VLS_168);
                                                const __VLS_170 = __VLS_169({ ...{}, class: (" empt"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
                                                ({}({ ...{}, class: (" empt"), }));
                                                (__VLS_171.slots).default;
                                                const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
                                            }
                                        }
                                    }
                                }
                            }
                            const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
                            let __VLS_111;
                        }
                        (__VLS_105.slots).default;
                        const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
                    }
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
            }
        }
        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    }
    {
        const __VLS_173 = {}.QDialog;
        const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }));
        ({}.QDialog);
        const __VLS_175 = __VLS_174({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
        ({}({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }));
        {
            const __VLS_178 = {}.QCard;
            const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{}, style: ({}), }));
            ({}.QCard);
            const __VLS_180 = __VLS_179({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
            ({}({ ...{}, style: ({}), }));
            {
                const __VLS_183 = {}.QForm;
                const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{ 'onSubmit': {}, }, }));
                ({}.QForm);
                const __VLS_185 = __VLS_184({ ...{ 'onSubmit': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_184));
                ({}({ ...{ 'onSubmit': {}, }, }));
                let __VLS_188 = { 'submit': __VLS_pickEvent(__VLS_187['submit'], {}.onSubmit) };
                __VLS_188 = { submit: (__VLS_ctx.addGroup) };
                {
                    const __VLS_189 = {}.QCardSection;
                    const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ ...{}, class: (" row items-center q-pb-none"), }));
                    ({}.QCardSection);
                    const __VLS_191 = __VLS_190({ ...{}, class: (" row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
                    ({}({ ...{}, class: (" row items-center q-pb-none"), }));
                    {
                        const __VLS_194 = __VLS_intrinsicElements["div"];
                        const __VLS_195 = __VLS_elementAsFunctionalComponent(__VLS_194);
                        const __VLS_196 = __VLS_195({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_197.slots).default;
                        const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
                    }
                    {
                        const __VLS_199 = {}.QSpace;
                        const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{}, }));
                        ({}.QSpace);
                        const __VLS_201 = __VLS_200({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_200));
                        ({}({ ...{}, }));
                        const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
                    }
                    {
                        const __VLS_204 = {}.QBtn;
                        const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{}, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                        ({}.QBtn);
                        const __VLS_206 = __VLS_205({ ...{}, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
                        ({}({ ...{}, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                        const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206);
                    }
                    (__VLS_192.slots).default;
                    const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
                }
                {
                    const __VLS_209 = {}.QCardSection;
                    const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_211 = __VLS_210({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                    ({}({ ...{}, }));
                    {
                        const __VLS_214 = {}.QInput;
                        const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ ...{}, modelValue: ((__VLS_ctx.newGroupName)), autofocus: (true), label: ("Название"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                        ({}.QInput);
                        const __VLS_216 = __VLS_215({ ...{}, modelValue: ((__VLS_ctx.newGroupName)), autofocus: (true), label: ("Название"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.newGroupName)), autofocus: (true), label: ("Название"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                        const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_214, __VLS_216);
                    }
                    (__VLS_212.slots).default;
                    const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                }
                {
                    const __VLS_219 = {}.QCardSection;
                    const __VLS_220 = __VLS_asFunctionalComponent(__VLS_219, new __VLS_219({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_221 = __VLS_220({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_220));
                    ({}({ ...{}, }));
                    {
                        const __VLS_224 = {}.QSelect;
                        const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ ...{}, modelValue: ((__VLS_ctx.newGroupRule)), autofocus: (true), label: ("Режим выбора"), options: ((__VLS_ctx.options)), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                        ({}.QSelect);
                        const __VLS_226 = __VLS_225({ ...{}, modelValue: ((__VLS_ctx.newGroupRule)), autofocus: (true), label: ("Режим выбора"), options: ((__VLS_ctx.options)), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.newGroupRule)), autofocus: (true), label: ("Режим выбора"), options: ((__VLS_ctx.options)), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                        const __VLS_227 = __VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226);
                    }
                    (__VLS_222.slots).default;
                    const __VLS_222 = __VLS_pickFunctionalComponentCtx(__VLS_219, __VLS_221);
                }
                {
                    const __VLS_229 = {}.QCardSection;
                    const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_231 = __VLS_230({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_230));
                    ({}({ ...{}, }));
                    {
                        const __VLS_234 = {}.QCardActions;
                        const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({ ...{}, align: ("right"), }));
                        ({}.QCardActions);
                        const __VLS_236 = __VLS_235({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_235));
                        ({}({ ...{}, align: ("right"), }));
                        {
                            const __VLS_239 = {}.QBtn;
                            const __VLS_240 = __VLS_asFunctionalComponent(__VLS_239, new __VLS_239({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                            ({}.QBtn);
                            const __VLS_241 = __VLS_240({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_240));
                            ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                            let __VLS_244 = { 'click': __VLS_pickEvent(__VLS_243['click'], {}.onClick) };
                            __VLS_244 = { click: $event => {
                                    __VLS_ctx.showAdd = false;
                                    // @ts-ignore
                                    [showAdd, showAdd, showAdd, addGroup, newGroupName, newGroupName, newGroupName, newGroupRule, options, newGroupRule, options, newGroupRule, options, showAdd,];
                                }
                            };
                            const __VLS_242 = __VLS_pickFunctionalComponentCtx(__VLS_239, __VLS_241);
                            let __VLS_243;
                        }
                        {
                            const __VLS_245 = {}.QBtn;
                            const __VLS_246 = __VLS_asFunctionalComponent(__VLS_245, new __VLS_245({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить"), type: ("submit"), }));
                            ({}.QBtn);
                            const __VLS_247 = __VLS_246({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_246));
                            ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить"), type: ("submit"), }));
                            const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247);
                        }
                        (__VLS_237.slots).default;
                        const __VLS_237 = __VLS_pickFunctionalComponentCtx(__VLS_234, __VLS_236);
                    }
                    (__VLS_232.slots).default;
                    const __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231);
                }
                (__VLS_186.slots).default;
                const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
                let __VLS_187;
            }
            (__VLS_181.slots).default;
            const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180);
        }
        (__VLS_176.slots).default;
        const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["empt"];
        __VLS_styleScopedClasses["gro"];
        __VLS_styleScopedClasses["exp"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["dblist"];
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
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            draggable: draggable,
            hran: hran,
            newGroupName: newGroupName,
            newGroupRule: newGroupRule,
            showAdd: showAdd,
            remove: remove,
            dragging: dragging,
            addGroup: addGroup,
            addNew: addNew,
            options: options,
            removeGroup: removeGroup,
            editGroup: editGroup,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Group.vue.js.map