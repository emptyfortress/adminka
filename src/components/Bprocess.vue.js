/* __placeholder__ */
import { ref, reactive, watch } from 'vue';
import { useStore } from '@/stores/store';
import AddComputer from '@/components/AddComputer.vue';
import Nastroyki from '@/components/Nastroyki.vue';
import BpExpand from '@/components/BpExpand.vue';
import Post from '@/components/Post.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const dialog = ref(false);
const add = () => {
    dialog.value = !dialog.value;
};
const req = [(val) => (val && val.length > 0) || 'Это обязательное поле'];
const key = ref(0);
const calcComponent = (e) => {
    switch (e) {
        case 0:
            return Nastroyki;
        case 1:
            return BpExpand;
        case 2:
            return Post;
        default:
            return null;
    }
};
const setNeg = (e) => {
    store.panelsBP[e].neg = true;
};
const setPos = (e) => {
    store.panelsBP[e].neg = false;
};
const form = reactive({
    name: 'AGSupport',
    bd: 'agsupport_1',
    dol: 1,
});
watch(form, (value) => {
    if (value) {
        editMode.value = true;
    }
});
const change = (e) => {
    editMode.value = true;
    store.panelsBP[e].change = true;
};
const options = ['agsupport_1'];
const editMode = ref(false);
const otmena = () => {
    store.bp.$reset();
    key.value += 1;
    store.panelsBP.map((item) => (item.neg = false));
    store.panelsBP.map((item) => (item.change = false));
    editMode.value = false;
};
const save = (item) => {
    item.name = form.name;
    store.tabs1 = form.name;
    editMode.value = false;
    store.panelsBP.map((item) => (item.change = false));
    store.panelsBP.map((item) => (item.neg = false));
    key.value += 1;
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.AddComputer;
    __VLS_components.AddComputer;
    // @ts-ignore
    [AddComputer,];
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
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
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QTabs;
    __VLS_components.qTabs;
    // @ts-ignore
    [QTabs,];
    __VLS_components.QTab;
    __VLS_components.qTab;
    // @ts-ignore
    [QTab,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_components.QTabPanels;
    __VLS_components.qTabPanels;
    // @ts-ignore
    [QTabPanels,];
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    // @ts-ignore
    [QTabPanel,];
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu,];
    __VLS_components.QList;
    __VLS_components.qList;
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList, QList,];
    __VLS_components.QItem;
    __VLS_components.qItem;
    // @ts-ignore
    [QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem,];
    __VLS_intrinsicElements.template;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.AddComputer;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, modelValue: ((__VLS_ctx.dialog)), }));
            ({}.AddComputer);
            const __VLS_7 = __VLS_6({ ...{}, modelValue: ((__VLS_ctx.dialog)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, modelValue: ((__VLS_ctx.dialog)), }));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: (" zag"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" zag"), }));
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["div"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16({ ...{}, class: (" bar"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{}, class: (" bar"), }));
            {
                const __VLS_20 = {}.QChip;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, color: ("warning"), }));
                ({}.QChip);
                const __VLS_22 = __VLS_21({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, color: ("warning"), }));
                (__VLS_ctx.store.conputer.length);
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            {
                const __VLS_25 = {}.QBtn;
                const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                ({}.QBtn);
                const __VLS_27 = __VLS_26({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
                __VLS_30 = { click: (__VLS_ctx.add) };
                {
                    const __VLS_31 = {}.QTooltip;
                    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, }));
                    ({}.QTooltip);
                    const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                    ({}({ ...{}, }));
                    (__VLS_34.slots).default;
                    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                }
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                let __VLS_29;
            }
            {
                const __VLS_36 = {}.QSpace;
                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, }));
                ({}.QSpace);
                const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({ ...{}, }));
                const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
            }
            {
                const __VLS_41 = __VLS_intrinsicElements["div"];
                const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                const __VLS_43 = __VLS_42({ ...{}, class: (" alltab"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                ({}({ ...{}, class: (" alltab"), }));
                {
                    const __VLS_46 = {}.QTabs;
                    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.store.tabs1)), activeColor: ("primary"), inlineLabel: (true), }));
                    ({}.QTabs);
                    const __VLS_48 = __VLS_47({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.store.tabs1)), activeColor: ("primary"), inlineLabel: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                    ({}({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.store.tabs1)), activeColor: ("primary"), inlineLabel: (true), }));
                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.conputer))) {
                        {
                            const __VLS_51 = {}.QTab;
                            const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, key: ((item.id)), name: ((item.name)), label: ((item.name)), }));
                            ({}.QTab);
                            const __VLS_53 = __VLS_52({ ...{}, key: ((item.id)), name: ((item.name)), label: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                            ({}({ ...{}, key: ((item.id)), name: ((item.name)), label: ((item.name)), }));
                            const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                        }
                        // @ts-ignore
                        [dialog, dialog, dialog, store, add, store, store, store, store,];
                    }
                    (__VLS_49.slots).default;
                    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                }
                (__VLS_44.slots).default;
                const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        {
            const __VLS_56 = {}.QCard;
            const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, class: (" card"), }));
            ({}.QCard);
            const __VLS_58 = __VLS_57({ ...{}, class: (" card"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
            ({}({ ...{}, class: (" card"), }));
            {
                const __VLS_61 = {}.QTabPanels;
                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, modelValue: ((__VLS_ctx.store.tabs1)), animated: (true), }));
                ({}.QTabPanels);
                const __VLS_63 = __VLS_62({ ...{}, modelValue: ((__VLS_ctx.store.tabs1)), animated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                ({}({ ...{}, modelValue: ((__VLS_ctx.store.tabs1)), animated: (true), }));
                for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.conputer))) {
                    {
                        const __VLS_66 = {}.QTabPanel;
                        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, name: ((item.name)), }));
                        ({}.QTabPanel);
                        const __VLS_68 = __VLS_67({ ...{}, name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                        ({}({ ...{}, name: ((item.name)), }));
                        {
                            const __VLS_71 = __VLS_intrinsicElements["div"];
                            const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
                            const __VLS_73 = __VLS_72({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                            ({}({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }));
                            __VLS_styleScopedClasses = ({ edit: editMode });
                            {
                                const __VLS_76 = __VLS_intrinsicElements["div"];
                                const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
                                const __VLS_78 = __VLS_77({ ...{}, class: (" close"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                                ({}({ ...{}, class: (" close"), }));
                                {
                                    const __VLS_81 = {}.QBtn;
                                    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                                    ({}.QBtn);
                                    const __VLS_83 = __VLS_82({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                                    ({}({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                                    {
                                        const __VLS_86 = {}.QTooltip;
                                        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, }));
                                        ({}.QTooltip);
                                        const __VLS_88 = __VLS_87({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                                        ({}({ ...{}, }));
                                        (__VLS_89.slots).default;
                                        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                                    }
                                    {
                                        const __VLS_91 = {}.QMenu;
                                        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, }));
                                        ({}.QMenu);
                                        const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                                        ({}({ ...{}, }));
                                        {
                                            const __VLS_96 = {}.QList;
                                            const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{}, }));
                                            ({}.QList);
                                            const __VLS_98 = __VLS_97({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                                            ({}({ ...{}, }));
                                            {
                                                const __VLS_101 = {}.QItem;
                                                const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                ({}.QItem);
                                                const __VLS_103 = __VLS_102({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                                                ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                                __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                                let __VLS_106 = { 'click': __VLS_pickEvent(__VLS_105['click'], {}.onClick) };
                                                __VLS_106 = { click: $event => {
                                                        __VLS_ctx.store.removeComputer(item.id);
                                                        // @ts-ignore
                                                        [store, store, store, store, editMode, editMode, store,];
                                                    }
                                                };
                                                {
                                                    const __VLS_107 = {}.QItemSection;
                                                    const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{}, }));
                                                    ({}.QItemSection);
                                                    const __VLS_109 = __VLS_108({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_108));
                                                    ({}({ ...{}, }));
                                                    (__VLS_110.slots).default;
                                                    const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
                                                }
                                                (__VLS_104.slots).default;
                                                const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                                                let __VLS_105;
                                            }
                                            (__VLS_99.slots).default;
                                            const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
                                        }
                                        (__VLS_94.slots).default;
                                        const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
                                    }
                                    (__VLS_84.slots).default;
                                    const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                                }
                                (__VLS_79.slots).default;
                                const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                            }
                            {
                                const __VLS_112 = __VLS_intrinsicElements["div"];
                                const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
                                const __VLS_114 = __VLS_113({ ...{}, class: (" current"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
                                ({}({ ...{}, class: (" current"), }));
                                (item.name);
                                (__VLS_115.slots).default;
                                const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
                            }
                            {
                                const __VLS_117 = __VLS_intrinsicElements["div"];
                                const __VLS_118 = __VLS_elementAsFunctionalComponent(__VLS_117);
                                const __VLS_119 = __VLS_118({ ...{}, class: (" newform"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                                ({}({ ...{}, class: (" newform"), }));
                                {
                                    const __VLS_122 = __VLS_intrinsicElements["div"];
                                    const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
                                    const __VLS_124 = __VLS_123({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                                    ({}({ ...{}, class: (" label"), }));
                                    (__VLS_125.slots).default;
                                    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
                                }
                                {
                                    const __VLS_127 = {}.QInput;
                                    const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                                    ({}.QInput);
                                    const __VLS_129 = __VLS_128({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
                                    ({}({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                                    const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
                                }
                                {
                                    const __VLS_132 = __VLS_intrinsicElements["div"];
                                    const __VLS_133 = __VLS_elementAsFunctionalComponent(__VLS_132);
                                    const __VLS_134 = __VLS_133({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
                                    ({}({ ...{}, class: (" label"), }));
                                    (__VLS_135.slots).default;
                                    const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
                                }
                                {
                                    const __VLS_137 = {}.QSelect;
                                    const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.form.bd)), options: ((__VLS_ctx.options)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                                    ({}.QSelect);
                                    const __VLS_139 = __VLS_138({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.form.bd)), options: ((__VLS_ctx.options)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
                                    ({}({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.form.bd)), options: ((__VLS_ctx.options)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                                    const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139);
                                }
                                {
                                    const __VLS_142 = __VLS_intrinsicElements["div"];
                                    const __VLS_143 = __VLS_elementAsFunctionalComponent(__VLS_142);
                                    const __VLS_144 = __VLS_143({ ...{}, class: (" dol"), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
                                    ({}({ ...{}, class: (" dol"), }));
                                    (__VLS_145.slots).default;
                                    const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144);
                                }
                                {
                                    const __VLS_147 = {}.QInput;
                                    const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ ...{}, class: (" inp1"), modelValue: ((__VLS_ctx.form.dol)), dense: (true), outlined: (true), type: ("number"), min: ("1"), bgColor: ("white"), }));
                                    ({}.QInput);
                                    const __VLS_149 = __VLS_148({ ...{}, class: (" inp1"), modelValue: ((__VLS_ctx.form.dol)), dense: (true), outlined: (true), type: ("number"), min: ("1"), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
                                    ({}({ ...{}, class: (" inp1"), modelValue: ((__VLS_ctx.form.dol)), dense: (true), outlined: (true), type: ("number"), min: ("1"), bgColor: ("white"), }));
                                    const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
                                }
                                {
                                    const __VLS_152 = {}.QBtn;
                                    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{}, class: (" bt"), unelevated: (true), color: ("primary"), label: ("Подключить"), }));
                                    ({}.QBtn);
                                    const __VLS_154 = __VLS_153({ ...{}, class: (" bt"), unelevated: (true), color: ("primary"), label: ("Подключить"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
                                    ({}({ ...{}, class: (" bt"), unelevated: (true), color: ("primary"), label: ("Подключить"), }));
                                    const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
                                }
                                (__VLS_120.slots).default;
                                const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
                            }
                            {
                                const __VLS_157 = {}.QList;
                                const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({ ...{}, separator: (true), }));
                                ({}.QList);
                                const __VLS_159 = __VLS_158({ ...{}, separator: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
                                ({}({ ...{}, separator: (true), }));
                                for (const [panel, index] of __VLS_getVForSourceType((__VLS_ctx.store.panelsBP))) {
                                    {
                                        const __VLS_162 = {}.QExpansionItem;
                                        const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ ...{}, modelValue: ((panel.expanded)), switchToggleSide: (true), key: ((__VLS_ctx.key)), class: (({ er: panel.neg })), label: ((panel.title)), }));
                                        ({}.QExpansionItem);
                                        const __VLS_164 = __VLS_163({ ...{}, modelValue: ((panel.expanded)), switchToggleSide: (true), key: ((__VLS_ctx.key)), class: (({ er: panel.neg })), label: ((panel.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
                                        ({}({ ...{}, modelValue: ((panel.expanded)), switchToggleSide: (true), key: ((__VLS_ctx.key)), class: (({ er: panel.neg })), label: ((panel.title)), }));
                                        __VLS_styleScopedClasses = ({ er: panel.neg });
                                        {
                                            const __VLS_167 = __VLS_intrinsicElements["template"];
                                            const __VLS_168 = __VLS_elementAsFunctionalComponent(__VLS_167);
                                            const __VLS_169 = __VLS_168({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_168));
                                            ({}({ ...{}, }));
                                            {
                                                (__VLS_165.slots).header;
                                                {
                                                    const __VLS_171 = __VLS_intrinsicElements["div"];
                                                    const __VLS_172 = __VLS_elementAsFunctionalComponent(__VLS_171);
                                                    const __VLS_173 = __VLS_172({ ...{}, class: (" head"), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
                                                    ({}({ ...{}, class: (" head"), }));
                                                    {
                                                        const __VLS_176 = __VLS_intrinsicElements["div"];
                                                        const __VLS_177 = __VLS_elementAsFunctionalComponent(__VLS_176);
                                                        const __VLS_178 = __VLS_177({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
                                                        ({}({ ...{}, class: (" title"), }));
                                                        (panel.title);
                                                        (__VLS_179.slots).default;
                                                        const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178);
                                                    }
                                                    {
                                                        const __VLS_181 = __VLS_intrinsicElements["div"];
                                                        const __VLS_182 = __VLS_elementAsFunctionalComponent(__VLS_181);
                                                        const __VLS_183 = __VLS_182({ ...{}, class: (" icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_182));
                                                        ({}({ ...{}, class: (" icon"), }));
                                                        if (panel.change) {
                                                            {
                                                                const __VLS_186 = {}.QBtn;
                                                                const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-reload"), color: ("primary"), style: ({}), }));
                                                                ({}.QBtn);
                                                                const __VLS_188 = __VLS_187({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-reload"), color: ("primary"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
                                                                ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-reload"), color: ("primary"), style: ({}), }));
                                                                let __VLS_191 = { 'click': __VLS_pickEvent(__VLS_190['click'], {}.onClick) };
                                                                __VLS_191 = { click: (__VLS_ctx.otmena) };
                                                                const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188);
                                                                let __VLS_190;
                                                            }
                                                            // @ts-ignore
                                                            [form, req, form, req, form, req, form, options, req, form, options, req, form, options, req, form, form, form, store, key, key, key, otmena,];
                                                        }
                                                        if (panel.change) {
                                                            {
                                                                const __VLS_192 = {}.QBtn;
                                                                const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...{ 'onClick': {}, }, flat: (true), size: ("sm"), color: ("primary"), label: ("Сохранить"), }));
                                                                ({}.QBtn);
                                                                const __VLS_194 = __VLS_193({ ...{ 'onClick': {}, }, flat: (true), size: ("sm"), color: ("primary"), label: ("Сохранить"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
                                                                ({}({ ...{ 'onClick': {}, }, flat: (true), size: ("sm"), color: ("primary"), label: ("Сохранить"), }));
                                                                let __VLS_197 = { 'click': __VLS_pickEvent(__VLS_196['click'], {}.onClick) };
                                                                __VLS_197 = { click: $event => {
                                                                        if (!((panel.change)))
                                                                            return;
                                                                        __VLS_ctx.save(item);
                                                                        // @ts-ignore
                                                                        [save,];
                                                                    }
                                                                };
                                                                const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194);
                                                                let __VLS_196;
                                                            }
                                                        }
                                                        if (panel.neg) {
                                                            {
                                                                const __VLS_198 = {}.QIcon;
                                                                const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ ...{}, name: ("mdi-alert-circle"), size: ("20px"), color: ("negative"), }));
                                                                ({}.QIcon);
                                                                const __VLS_200 = __VLS_199({ ...{}, name: ("mdi-alert-circle"), size: ("20px"), color: ("negative"), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
                                                                ({}({ ...{}, name: ("mdi-alert-circle"), size: ("20px"), color: ("negative"), }));
                                                                const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200);
                                                            }
                                                        }
                                                        (__VLS_184.slots).default;
                                                        const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183);
                                                    }
                                                    (__VLS_174.slots).default;
                                                    const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173);
                                                }
                                            }
                                        }
                                        {
                                            const __VLS_203 = __VLS_intrinsicElements["div"];
                                            const __VLS_204 = __VLS_elementAsFunctionalComponent(__VLS_203);
                                            const __VLS_205 = __VLS_204({ ...{}, class: (" pcard"), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
                                            ({}({ ...{}, class: (" pcard"), }));
                                            {
                                                const __VLS_208 = (__VLS_ctx.calcComponent(panel.id));
                                                const __VLS_209 = __VLS_asFunctionalComponent(__VLS_208, new __VLS_208({ ...{ 'onHaserror': {}, 'onNoerror': {}, 'onChange': {}, }, is: ((__VLS_ctx.calcComponent(panel.id))), key: ((__VLS_ctx.key)), }));
                                                const __VLS_210 = __VLS_209({ ...{ 'onHaserror': {}, 'onNoerror': {}, 'onChange': {}, }, is: ((__VLS_ctx.calcComponent(panel.id))), key: ((__VLS_ctx.key)), }, ...__VLS_functionalComponentArgsRest(__VLS_209));
                                                ({}({ ...{ 'onHaserror': {}, 'onNoerror': {}, 'onChange': {}, }, is: ((__VLS_ctx.calcComponent(panel.id))), key: ((__VLS_ctx.key)), }));
                                                let __VLS_213 = { 'haserror': __VLS_pickEvent(__VLS_212['haserror'], {}.onHaserror) };
                                                __VLS_213 = { haserror: $event => {
                                                        __VLS_ctx.setNeg(index);
                                                        // @ts-ignore
                                                        [calcComponent, calcComponent, key, calcComponent, key, calcComponent, key, setNeg,];
                                                    }
                                                };
                                                let __VLS_214 = { 'noerror': __VLS_pickEvent(__VLS_212['noerror'], {}.onNoerror) };
                                                __VLS_214 = { noerror: $event => {
                                                        __VLS_ctx.setPos(index);
                                                        // @ts-ignore
                                                        [setPos,];
                                                    }
                                                };
                                                let __VLS_215 = { 'change': __VLS_pickEvent(__VLS_212['change'], {}.onChange) };
                                                __VLS_215 = { change: $event => {
                                                        __VLS_ctx.change(index);
                                                        // @ts-ignore
                                                        [change,];
                                                    }
                                                };
                                                const __VLS_211 = __VLS_pickFunctionalComponentCtx(__VLS_208, __VLS_210);
                                                let __VLS_212;
                                            }
                                            (__VLS_206.slots).default;
                                            const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
                                        }
                                        const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164);
                                    }
                                }
                                (__VLS_160.slots).default;
                                const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159);
                            }
                            if (__VLS_ctx.editMode) {
                                {
                                    const __VLS_216 = {}.QCardActions;
                                    const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ ...{}, align: ("right"), }));
                                    ({}.QCardActions);
                                    const __VLS_218 = __VLS_217({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
                                    ({}({ ...{}, align: ("right"), }));
                                    {
                                        const __VLS_221 = {}.QBtn;
                                        const __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                                        ({}.QBtn);
                                        const __VLS_223 = __VLS_222({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
                                        ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                                        let __VLS_226 = { 'click': __VLS_pickEvent(__VLS_225['click'], {}.onClick) };
                                        __VLS_226 = { click: (__VLS_ctx.otmena) };
                                        const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223);
                                        let __VLS_225;
                                    }
                                    {
                                        const __VLS_227 = {}.QBtn;
                                        const __VLS_228 = __VLS_asFunctionalComponent(__VLS_227, new __VLS_227({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }));
                                        ({}.QBtn);
                                        const __VLS_229 = __VLS_228({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }, ...__VLS_functionalComponentArgsRest(__VLS_228));
                                        ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }));
                                        let __VLS_232 = { 'click': __VLS_pickEvent(__VLS_231['click'], {}.onClick) };
                                        __VLS_232 = { click: $event => {
                                                if (!((__VLS_ctx.editMode)))
                                                    return;
                                                __VLS_ctx.save(item);
                                                // @ts-ignore
                                                [editMode, otmena, save,];
                                            }
                                        };
                                        const __VLS_230 = __VLS_pickFunctionalComponentCtx(__VLS_227, __VLS_229);
                                        let __VLS_231;
                                    }
                                    (__VLS_219.slots).default;
                                    const __VLS_219 = __VLS_pickFunctionalComponentCtx(__VLS_216, __VLS_218);
                                }
                            }
                            (__VLS_74.slots).default;
                            const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                        }
                        (__VLS_69.slots).default;
                        const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                    }
                }
                (__VLS_64.slots).default;
                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
            }
            (__VLS_59.slots).default;
            const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["zag"];
        __VLS_styleScopedClasses["bar"];
        __VLS_styleScopedClasses["plus"];
        __VLS_styleScopedClasses["alltab"];
        __VLS_styleScopedClasses["text-secondary"];
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["close"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["current"];
        __VLS_styleScopedClasses["newform"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["dol"];
        __VLS_styleScopedClasses["inp1"];
        __VLS_styleScopedClasses["bt"];
        __VLS_styleScopedClasses["head"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["icon"];
        __VLS_styleScopedClasses["pcard"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            AddComputer: AddComputer,
            store: store,
            dialog: dialog,
            add: add,
            req: req,
            key: key,
            calcComponent: calcComponent,
            setNeg: setNeg,
            setPos: setPos,
            form: form,
            change: change,
            options: options,
            editMode: editMode,
            otmena: otmena,
            save: save,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Bprocess.vue.js.map