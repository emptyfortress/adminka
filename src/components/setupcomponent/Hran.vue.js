/* __placeholder__ */
import { ref, reactive } from 'vue';
import draggable from 'vuedraggable';
import { useHran } from '@/stores/hran';
import { useTabs } from '@/stores/tabs';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const list1 = reactive([
    {
        id: 1,
        name: 'Storage 1',
        type: 'Хранилище в базе',
        state: 'Online',
        size: 100,
        main: true,
        arch: true,
        temp: false,
    },
    {
        id: 2,
        name: 'Storage 2',
        type: 'Хранилище на диске',
        state: 'Auto',
        size: 130,
        main: false,
        arch: false,
        temp: true,
    },
    {
        id: 3,
        name: 'Storage 3',
        type: 'Хранилище на диске',
        state: 'Auto',
        size: 10,
        main: false,
        arch: false,
        temp: true,
    },
]);
const hran = useHran();
const tabs = useTabs();
const checkDub = () => {
    hran.unique();
    tabs.setTabMod(2);
};
const showAdd = ref(false);
const remove1 = (n) => {
    list1.splice(n, 1);
    tabs.setTabMod(2);
};
const close = () => {
    showAdd.value = false;
};
const clearAdd = () => {
    name.value = null;
    type.value = null;
    state.value = null;
    currentItemIndex.value = null;
    size.value = 0;
    main.value = false;
    arch.value = false;
    temp.value = false;
    showAdd.value = true;
};
const currentItemIndex = ref();
const edit = (index) => {
    name.value = list1[index].name;
    type.value = list1[index].type;
    state.value = list1[index].state;
    size.value = list1[index].size;
    main.value = list1[index].main;
    arch.value = list1[index].arch;
    temp.value = list1[index].temp;
    currentItemIndex.value = index;
    showAdd.value = true;
};
const date = new Date();
const add = () => {
    let tmp = {};
    tmp.id = +date;
    tmp.name = name.value;
    tmp.type = type.value;
    tmp.state = state.value;
    tmp.size = size.value;
    tmp.main = main.value;
    tmp.arch = arch.value;
    tmp.temp = temp.value;
    if (currentItemIndex.value !== null) {
        list1[currentItemIndex.value] = tmp;
    }
    else {
        list1.push(tmp);
    }
    showAdd.value = false;
    currentItemIndex.value = null;
    tabs.setTabMod(2);
};
const name = ref();
const type = ref();
const state = ref();
const size = ref();
const main = ref(false);
const arch = ref(false);
const temp = ref(false);
const options = [
    'Хранилище на диске',
    'Хранилище во внешней базе MS SQL Server',
    'FileStream хранилище во внешней базе данных MS SQL Server',
    'FileStream хранилище в базе данных Docsvision',
    'Добавить из сборки...',
];
const options1 = ['Online', 'Auto', 'Disabled', 'Read and delete', 'Reserved'];
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
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu, QMenu,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard, QCard,];
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
    // @ts-ignore
    [QItemSection,];
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
    // @ts-ignore
    [QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect,];
    __VLS_intrinsicElements.br;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox, QCheckbox,];
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
            (__VLS_ctx.list1.length);
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
            __VLS_15 = { click: (__VLS_ctx.clearAdd) };
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            let __VLS_14;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_16 = __VLS_intrinsicElements["div"];
        const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
        const __VLS_18 = __VLS_17({ ...{}, class: (" hran"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({ ...{}, class: (" hran"), }));
        if (__VLS_ctx.list1.length === 0) {
            {
                const __VLS_21 = __VLS_intrinsicElements["div"];
                const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
                const __VLS_23 = __VLS_22({ ...{}, class: (" empt"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                ({}({ ...{}, class: (" empt"), }));
                (__VLS_24.slots).default;
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
            }
            // @ts-ignore
            [list1, clearAdd, list1,];
        }
        {
            const __VLS_26 = (__VLS_ctx.draggable);
            const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list1)), itemKey: ("id"), group: (({ name: 'group', pull: 'clone', put: false })), ghostClass: ('ghost'), }));
            const __VLS_28 = __VLS_27({ ...{ 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list1)), itemKey: ("id"), group: (({ name: 'group', pull: 'clone', put: false })), ghostClass: ('ghost'), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            ({}({ ...{ 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list1)), itemKey: ("id"), group: (({ name: 'group', pull: 'clone', put: false })), ghostClass: ('ghost'), }));
            let __VLS_31 = { 'end': __VLS_pickEvent(__VLS_30['end'], {}.onEnd) };
            __VLS_31 = { end: (__VLS_ctx.checkDub) };
            {
                const __VLS_32 = __VLS_intrinsicElements["template"];
                const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
                const __VLS_34 = __VLS_33({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                ({}({ ...{}, }));
                {
                    const [{ element, index }] = __VLS_getSlotParams((__VLS_29.slots).item);
                    {
                        const __VLS_36 = __VLS_intrinsicElements["div"];
                        const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                        const __VLS_38 = __VLS_37({ ...{}, class: (" tabel"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                        ({}({ ...{}, class: (" tabel"), }));
                        {
                            const __VLS_41 = __VLS_intrinsicElements["div"];
                            const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                            const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                            ({}({ ...{}, }));
                            {
                                const __VLS_46 = {}.QIcon;
                                const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, name: ("mdi-database-outline"), size: ("18px"), style: ({}), }));
                                ({}.QIcon);
                                const __VLS_48 = __VLS_47({ ...{}, name: ("mdi-database-outline"), size: ("18px"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                                ({}({ ...{}, name: ("mdi-database-outline"), size: ("18px"), style: ({}), }));
                                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                            }
                            {
                                const __VLS_51 = __VLS_intrinsicElements["span"];
                                const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
                                const __VLS_53 = __VLS_52({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                ({}({ ...{}, class: (" q-ml-sm"), }));
                                (element.name);
                                (__VLS_54.slots).default;
                                const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                            }
                            (__VLS_44.slots).default;
                            const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                        }
                        {
                            const __VLS_56 = __VLS_intrinsicElements["div"];
                            const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                            const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                            ({}({ ...{}, }));
                            {
                                const __VLS_61 = {}.QBtn;
                                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, class: (" q-mr-sm"), flat: (true), round: (true), dense: (true), icon: ("mdi-information-outline"), size: ("sm"), }));
                                ({}.QBtn);
                                const __VLS_63 = __VLS_62({ ...{}, class: (" q-mr-sm"), flat: (true), round: (true), dense: (true), icon: ("mdi-information-outline"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                                ({}({ ...{}, class: (" q-mr-sm"), flat: (true), round: (true), dense: (true), icon: ("mdi-information-outline"), size: ("sm"), }));
                                {
                                    const __VLS_66 = {}.QMenu;
                                    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, }));
                                    ({}.QMenu);
                                    const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                                    ({}({ ...{}, }));
                                    {
                                        const __VLS_71 = {}.QCard;
                                        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, class: (" hrinfo"), }));
                                        ({}.QCard);
                                        const __VLS_73 = __VLS_72({ ...{}, class: (" hrinfo"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                                        ({}({ ...{}, class: (" hrinfo"), }));
                                        {
                                            const __VLS_76 = __VLS_intrinsicElements["div"];
                                            const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
                                            const __VLS_78 = __VLS_77({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                                            ({}({ ...{}, class: (" label"), }));
                                            (__VLS_79.slots).default;
                                            const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                                        }
                                        {
                                            const __VLS_81 = __VLS_intrinsicElements["div"];
                                            const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
                                            const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                                            ({}({ ...{}, }));
                                            (element.name);
                                            (__VLS_84.slots).default;
                                            const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                                        }
                                        {
                                            const __VLS_86 = __VLS_intrinsicElements["div"];
                                            const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
                                            const __VLS_88 = __VLS_87({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                                            ({}({ ...{}, class: (" label"), }));
                                            (__VLS_89.slots).default;
                                            const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                                        }
                                        {
                                            const __VLS_91 = __VLS_intrinsicElements["div"];
                                            const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
                                            const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                                            ({}({ ...{}, }));
                                            (element.type);
                                            (__VLS_94.slots).default;
                                            const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
                                        }
                                        {
                                            const __VLS_96 = __VLS_intrinsicElements["div"];
                                            const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
                                            const __VLS_98 = __VLS_97({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                                            ({}({ ...{}, class: (" label"), }));
                                            (__VLS_99.slots).default;
                                            const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
                                        }
                                        {
                                            const __VLS_101 = __VLS_intrinsicElements["div"];
                                            const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
                                            const __VLS_103 = __VLS_102({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                                            ({}({ ...{}, }));
                                            (element.state);
                                            (__VLS_104.slots).default;
                                            const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                                        }
                                        {
                                            const __VLS_106 = __VLS_intrinsicElements["div"];
                                            const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
                                            const __VLS_108 = __VLS_107({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                                            ({}({ ...{}, class: (" label"), }));
                                            (__VLS_109.slots).default;
                                            const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
                                        }
                                        {
                                            const __VLS_111 = __VLS_intrinsicElements["div"];
                                            const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
                                            const __VLS_113 = __VLS_112({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                                            ({}({ ...{}, }));
                                            (element.size);
                                            (__VLS_114.slots).default;
                                            const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                                        }
                                        {
                                            const __VLS_116 = __VLS_intrinsicElements["div"];
                                            const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
                                            const __VLS_118 = __VLS_117({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                                            ({}({ ...{}, class: (" label"), }));
                                            (__VLS_119.slots).default;
                                            const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
                                        }
                                        {
                                            const __VLS_121 = __VLS_intrinsicElements["div"];
                                            const __VLS_122 = __VLS_elementAsFunctionalComponent(__VLS_121);
                                            const __VLS_123 = __VLS_122({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_122));
                                            ({}({ ...{}, }));
                                            if (element.main) {
                                                {
                                                    const __VLS_126 = __VLS_intrinsicElements["span"];
                                                    const __VLS_127 = __VLS_elementAsFunctionalComponent(__VLS_126);
                                                    const __VLS_128 = __VLS_127({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
                                                    ({}({ ...{}, }));
                                                    (__VLS_129.slots).default;
                                                    const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
                                                }
                                                // @ts-ignore
                                                [draggable, draggable, list1, draggable, list1, draggable, list1, checkDub,];
                                            }
                                            if (element.arch) {
                                                {
                                                    const __VLS_131 = __VLS_intrinsicElements["span"];
                                                    const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
                                                    const __VLS_133 = __VLS_132({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_132));
                                                    ({}({ ...{}, }));
                                                    (__VLS_134.slots).default;
                                                    const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
                                                }
                                            }
                                            if (element.temp) {
                                                {
                                                    const __VLS_136 = __VLS_intrinsicElements["span"];
                                                    const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                                                    const __VLS_138 = __VLS_137({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                                                    ({}({ ...{}, }));
                                                    (__VLS_139.slots).default;
                                                    const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
                                                }
                                            }
                                            (__VLS_124.slots).default;
                                            const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123);
                                        }
                                        (__VLS_74.slots).default;
                                        const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                                    }
                                    (__VLS_69.slots).default;
                                    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                                }
                                (__VLS_64.slots).default;
                                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                            }
                            {
                                const __VLS_141 = {}.QBtn;
                                const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{ 'onClick': {}, }, class: (" q-mr-sm"), flat: (true), round: (true), dense: (true), icon: ("mdi-pencil"), size: ("sm"), }));
                                ({}.QBtn);
                                const __VLS_143 = __VLS_142({ ...{ 'onClick': {}, }, class: (" q-mr-sm"), flat: (true), round: (true), dense: (true), icon: ("mdi-pencil"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                                ({}({ ...{ 'onClick': {}, }, class: (" q-mr-sm"), flat: (true), round: (true), dense: (true), icon: ("mdi-pencil"), size: ("sm"), }));
                                let __VLS_146 = { 'click': __VLS_pickEvent(__VLS_145['click'], {}.onClick) };
                                __VLS_146 = { click: $event => {
                                        __VLS_ctx.edit(index);
                                        // @ts-ignore
                                        [edit,];
                                    }
                                };
                                const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                                let __VLS_145;
                            }
                            {
                                const __VLS_147 = {}.QBtn;
                                const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                                ({}.QBtn);
                                const __VLS_149 = __VLS_148({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
                                ({}({ ...{}, flat: (true), round: (true), dense: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                                {
                                    const __VLS_152 = {}.QMenu;
                                    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{}, }));
                                    ({}.QMenu);
                                    const __VLS_154 = __VLS_153({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_153));
                                    ({}({ ...{}, }));
                                    {
                                        const __VLS_157 = {}.QList;
                                        const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({ ...{}, }));
                                        ({}.QList);
                                        const __VLS_159 = __VLS_158({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_158));
                                        ({}({ ...{}, }));
                                        {
                                            const __VLS_162 = {}.QItem;
                                            const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                            ({}.QItem);
                                            const __VLS_164 = __VLS_163({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
                                            ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                            __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                            let __VLS_167 = { 'click': __VLS_pickEvent(__VLS_166['click'], {}.onClick) };
                                            __VLS_167 = { click: $event => {
                                                    __VLS_ctx.remove1(index);
                                                    // @ts-ignore
                                                    [remove1,];
                                                }
                                            };
                                            {
                                                const __VLS_168 = {}.QItemSection;
                                                const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{}, }));
                                                ({}.QItemSection);
                                                const __VLS_170 = __VLS_169({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_169));
                                                ({}({ ...{}, }));
                                                (__VLS_171.slots).default;
                                                const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
                                            }
                                            (__VLS_165.slots).default;
                                            const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164);
                                            let __VLS_166;
                                        }
                                        (__VLS_160.slots).default;
                                        const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159);
                                    }
                                    (__VLS_155.slots).default;
                                    const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
                                }
                                (__VLS_150.slots).default;
                                const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
                            }
                            (__VLS_59.slots).default;
                            const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                        }
                        (__VLS_39.slots).default;
                        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                    }
                }
            }
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
            let __VLS_30;
        }
        (__VLS_19.slots).default;
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    }
    {
        const __VLS_173 = {}.QDialog;
        const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }));
        ({}.QDialog);
        const __VLS_175 = __VLS_174({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
        ({}({ ...{}, modelValue: ((__VLS_ctx.showAdd)), }));
        {
            const __VLS_178 = {}.QCard;
            const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{}, padding: (true), }));
            ({}.QCard);
            const __VLS_180 = __VLS_179({ ...{}, padding: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
            ({}({ ...{}, padding: (true), }));
            {
                const __VLS_183 = {}.QForm;
                const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{ 'onSubmit': {}, }, }));
                ({}.QForm);
                const __VLS_185 = __VLS_184({ ...{ 'onSubmit': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_184));
                ({}({ ...{ 'onSubmit': {}, }, }));
                let __VLS_188 = { 'submit': __VLS_pickEvent(__VLS_187['submit'], {}.onSubmit) };
                __VLS_188 = { submit: (__VLS_ctx.add) };
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
                        const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{ 'onClick': {}, }, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                        ({}.QBtn);
                        const __VLS_206 = __VLS_205({ ...{ 'onClick': {}, }, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
                        ({}({ ...{ 'onClick': {}, }, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                        let __VLS_209 = { 'click': __VLS_pickEvent(__VLS_208['click'], {}.onClick) };
                        __VLS_209 = { click: (__VLS_ctx.close) };
                        const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206);
                        let __VLS_208;
                    }
                    (__VLS_192.slots).default;
                    const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
                }
                {
                    const __VLS_210 = {}.QCardSection;
                    const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_212 = __VLS_211({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_211));
                    ({}({ ...{}, }));
                    {
                        const __VLS_215 = __VLS_intrinsicElements["div"];
                        const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
                        const __VLS_217 = __VLS_216({ ...{}, class: (" edittable"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                        ({}({ ...{}, class: (" edittable"), }));
                        {
                            const __VLS_220 = {}.QInput;
                            const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{}, modelValue: ((__VLS_ctx.name)), autofocus: (true), label: ("Название"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                            ({}.QInput);
                            const __VLS_222 = __VLS_221({ ...{}, modelValue: ((__VLS_ctx.name)), autofocus: (true), label: ("Название"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.name)), autofocus: (true), label: ("Название"), lazyRules: (true), rules: (([val => val && val.length > 0 || 'Обязательное поле'])), }));
                            const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                        }
                        {
                            const __VLS_225 = {}.QSelect;
                            const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, new __VLS_225({ ...{}, modelValue: ((__VLS_ctx.type)), label: ("Тип"), options: ((__VLS_ctx.options)), lasyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }));
                            ({}.QSelect);
                            const __VLS_227 = __VLS_226({ ...{}, modelValue: ((__VLS_ctx.type)), label: ("Тип"), options: ((__VLS_ctx.options)), lasyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.type)), label: ("Тип"), options: ((__VLS_ctx.options)), lasyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }));
                            const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227);
                        }
                        {
                            const __VLS_230 = {}.QSelect;
                            const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{}, modelValue: ((__VLS_ctx.state)), label: ("Состояние"), options: ((__VLS_ctx.options1)), lasyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }));
                            ({}.QSelect);
                            const __VLS_232 = __VLS_231({ ...{}, modelValue: ((__VLS_ctx.state)), label: ("Состояние"), options: ((__VLS_ctx.options1)), lasyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.state)), label: ("Состояние"), options: ((__VLS_ctx.options1)), lasyRules: (true), rules: (([val => val !== null && val !== '' || 'Обязательное поле'])), }));
                            const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232);
                        }
                        {
                            const __VLS_235 = {}.QInput;
                            const __VLS_236 = __VLS_asFunctionalComponent(__VLS_235, new __VLS_235({ ...{}, modelValue: ((__VLS_ctx.size)), label: ("Макс.размер, Гб"), type: ("number"), style: ({}), lasyRules: (true), rules: (([val => val > 0 || 'Укажите размер'])), }));
                            ({}.QInput);
                            const __VLS_237 = __VLS_236({ ...{}, modelValue: ((__VLS_ctx.size)), label: ("Макс.размер, Гб"), type: ("number"), style: ({}), lasyRules: (true), rules: (([val => val > 0 || 'Укажите размер'])), }, ...__VLS_functionalComponentArgsRest(__VLS_236));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.size)), label: ("Макс.размер, Гб"), type: ("number"), style: ({}), lasyRules: (true), rules: (([val => val > 0 || 'Укажите размер'])), }));
                            const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237);
                        }
                        {
                            const __VLS_240 = __VLS_intrinsicElements["br"];
                            const __VLS_241 = __VLS_elementAsFunctionalComponent(__VLS_240);
                            const __VLS_242 = __VLS_241({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_241));
                            ({}({ ...{}, }));
                            const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242);
                        }
                        {
                            const __VLS_245 = {}.QCheckbox;
                            const __VLS_246 = __VLS_asFunctionalComponent(__VLS_245, new __VLS_245({ ...{}, modelValue: ((__VLS_ctx.main)), label: ("Основной раздел"), }));
                            ({}.QCheckbox);
                            const __VLS_247 = __VLS_246({ ...{}, modelValue: ((__VLS_ctx.main)), label: ("Основной раздел"), }, ...__VLS_functionalComponentArgsRest(__VLS_246));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.main)), label: ("Основной раздел"), }));
                            const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247);
                        }
                        {
                            const __VLS_250 = {}.QCheckbox;
                            const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, new __VLS_250({ ...{}, modelValue: ((__VLS_ctx.arch)), label: ("Архивный раздел"), }));
                            ({}.QCheckbox);
                            const __VLS_252 = __VLS_251({ ...{}, modelValue: ((__VLS_ctx.arch)), label: ("Архивный раздел"), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.arch)), label: ("Архивный раздел"), }));
                            const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252);
                        }
                        {
                            const __VLS_255 = {}.QCheckbox;
                            const __VLS_256 = __VLS_asFunctionalComponent(__VLS_255, new __VLS_255({ ...{}, modelValue: ((__VLS_ctx.temp)), label: ("Временный раздел"), }));
                            ({}.QCheckbox);
                            const __VLS_257 = __VLS_256({ ...{}, modelValue: ((__VLS_ctx.temp)), label: ("Временный раздел"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.temp)), label: ("Временный раздел"), }));
                            const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257);
                        }
                        (__VLS_218.slots).default;
                        const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                    }
                    (__VLS_213.slots).default;
                    const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212);
                }
                {
                    const __VLS_260 = {}.QCardSection;
                    const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_262 = __VLS_261({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_261));
                    ({}({ ...{}, }));
                    {
                        const __VLS_265 = {}.QCardActions;
                        const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{}, align: ("right"), }));
                        ({}.QCardActions);
                        const __VLS_267 = __VLS_266({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
                        ({}({ ...{}, align: ("right"), }));
                        {
                            const __VLS_270 = {}.QBtn;
                            const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                            ({}.QBtn);
                            const __VLS_272 = __VLS_271({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_271));
                            ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                            let __VLS_275 = { 'click': __VLS_pickEvent(__VLS_274['click'], {}.onClick) };
                            __VLS_275 = { click: (__VLS_ctx.close) };
                            const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272);
                            let __VLS_274;
                        }
                        {
                            const __VLS_276 = {}.QBtn;
                            const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить"), type: ("submit"), }));
                            ({}.QBtn);
                            const __VLS_278 = __VLS_277({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_277));
                            ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить"), type: ("submit"), }));
                            const __VLS_279 = __VLS_pickFunctionalComponentCtx(__VLS_276, __VLS_278);
                        }
                        (__VLS_268.slots).default;
                        const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267);
                    }
                    (__VLS_263.slots).default;
                    const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262);
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
        __VLS_styleScopedClasses["hran"];
        __VLS_styleScopedClasses["empt"];
        __VLS_styleScopedClasses["tabel"];
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["hrinfo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-pb-none"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["edittable"];
    }
    var __VLS_slots;
    // @ts-ignore
    [showAdd, showAdd, showAdd, add, close, name, name, name, type, options, type, options, type, options, state, options1, state, options1, state, options1, size, size, size, main, main, main, arch, arch, arch, temp, temp, temp, close,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            draggable: draggable,
            list1: list1,
            checkDub: checkDub,
            showAdd: showAdd,
            remove1: remove1,
            close: close,
            clearAdd: clearAdd,
            edit: edit,
            add: add,
            name: name,
            type: type,
            state: state,
            size: size,
            main: main,
            arch: arch,
            temp: temp,
            options: options,
            options1: options1,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Hran.vue.js.map