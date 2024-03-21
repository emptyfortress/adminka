/* __placeholder__ */
import { ref } from 'vue';
import { useStore } from '@/stores/store';
import GreyBlock5 from '@/components/GreyBlock5.vue';
import GreyBlock6 from '@/components/GreyBlock6.vue';
import GreyBlock7 from '@/components/GreyBlock7.vue';
import AddDialogCommon from '@/components/AddDialogCommon.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const dialog = ref(false);
const add = () => {
    dialog.value = !dialog.value;
};
const addWebConfig = (e, copy) => {
    if (copy) {
        store.addWebConfig(e + '-copy');
        store.setTabs2(e + '-copy');
    }
    else {
        store.addWebConfig(e);
        store.setTabs2(e);
    }
    dialog.value = false;
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
    __VLS_components.AddDialogCommon;
    __VLS_components.AddDialogCommon;
    // @ts-ignore
    [AddDialogCommon,];
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip,];
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
    __VLS_components.QCard;
    __VLS_components.qCard;
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard, QCard, QCard,];
    __VLS_components.QTabPanels;
    __VLS_components.qTabPanels;
    // @ts-ignore
    [QTabPanels,];
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    // @ts-ignore
    [QTabPanel,];
    __VLS_components.GreyBlock5;
    __VLS_components.GreyBlock5;
    // @ts-ignore
    [GreyBlock5,];
    __VLS_intrinsicElements.br;
    __VLS_intrinsicElements.br;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.GreyBlock6;
    __VLS_components.GreyBlock6;
    // @ts-ignore
    [GreyBlock6,];
    __VLS_components.GreyBlock7;
    __VLS_components.GreyBlock7;
    // @ts-ignore
    [GreyBlock7,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.AddDialogCommon;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), dv: (true), }));
            ({}.AddDialogCommon);
            const __VLS_7 = __VLS_6({ ...{ 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), dv: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{ 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), dv: (true), }));
            let __VLS_10 = { 'add': __VLS_pickEvent(__VLS_9['add'], {}.onAdd) };
            __VLS_10 = { add: (__VLS_ctx.addWebConfig) };
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            let __VLS_9;
        }
        {
            const __VLS_11 = __VLS_intrinsicElements["div"];
            const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
            const __VLS_13 = __VLS_12({ ...{}, class: (" zag"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            ({}({ ...{}, class: (" zag"), }));
            (__VLS_14.slots).default;
            const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
        }
        {
            const __VLS_16 = __VLS_intrinsicElements["div"];
            const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
            const __VLS_18 = __VLS_17({ ...{}, class: (" bar"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ ...{}, class: (" bar"), }));
            {
                const __VLS_21 = {}.QChip;
                const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, color: ("warning"), }));
                ({}.QChip);
                const __VLS_23 = __VLS_22({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                ({}({ ...{}, color: ("warning"), }));
                (__VLS_ctx.store.webconfig.length);
                (__VLS_24.slots).default;
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
            }
            {
                const __VLS_26 = {}.QBtn;
                const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                ({}.QBtn);
                const __VLS_28 = __VLS_27({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                ({}({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                let __VLS_31 = { 'click': __VLS_pickEvent(__VLS_30['click'], {}.onClick) };
                __VLS_31 = { click: (__VLS_ctx.add) };
                {
                    const __VLS_32 = {}.QTooltip;
                    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{}, }));
                    ({}.QTooltip);
                    const __VLS_34 = __VLS_33({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                    ({}({ ...{}, }));
                    (__VLS_35.slots).default;
                    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
                }
                (__VLS_29.slots).default;
                const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                let __VLS_30;
            }
            {
                const __VLS_37 = {}.QSpace;
                const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, }));
                ({}.QSpace);
                const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                ({}({ ...{}, }));
                const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
            }
            {
                const __VLS_42 = __VLS_intrinsicElements["div"];
                const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
                const __VLS_44 = __VLS_43({ ...{}, class: (" alltab"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                ({}({ ...{}, class: (" alltab"), }));
                {
                    const __VLS_47 = {}.QTabs;
                    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.store.tabs2)), activeColor: ("primary"), inlineLabel: (true), }));
                    ({}.QTabs);
                    const __VLS_49 = __VLS_48({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.store.tabs2)), activeColor: ("primary"), inlineLabel: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
                    ({}({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.store.tabs2)), activeColor: ("primary"), inlineLabel: (true), }));
                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.webconfig))) {
                        {
                            const __VLS_52 = {}.QTab;
                            const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, key: ((item.id)), name: ((item.name)), label: ((item.name)), }));
                            ({}.QTab);
                            const __VLS_54 = __VLS_53({ ...{}, key: ((item.id)), name: ((item.name)), label: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                            ({}({ ...{}, key: ((item.id)), name: ((item.name)), label: ((item.name)), }));
                            const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
                        }
                        // @ts-ignore
                        [dialog, dialog, dialog, addWebConfig, store, add, store, store, store, store,];
                    }
                    (__VLS_50.slots).default;
                    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
                }
                (__VLS_45.slots).default;
                const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
            }
            (__VLS_19.slots).default;
            const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        }
        {
            const __VLS_57 = {}.QCard;
            const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, class: (" card"), }));
            ({}.QCard);
            const __VLS_59 = __VLS_58({ ...{}, class: (" card"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
            ({}({ ...{}, class: (" card"), }));
            {
                const __VLS_62 = {}.QTabPanels;
                const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, modelValue: ((__VLS_ctx.store.tabs2)), animated: (true), }));
                ({}.QTabPanels);
                const __VLS_64 = __VLS_63({ ...{}, modelValue: ((__VLS_ctx.store.tabs2)), animated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                ({}({ ...{}, modelValue: ((__VLS_ctx.store.tabs2)), animated: (true), }));
                for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.webconfig))) {
                    {
                        const __VLS_67 = {}.QTabPanel;
                        const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{}, name: ((item.name)), }));
                        ({}.QTabPanel);
                        const __VLS_69 = __VLS_68({ ...{}, name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                        ({}({ ...{}, name: ((item.name)), }));
                        {
                            const __VLS_72 = {}.GreyBlock5;
                            const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onDelete': {}, 'onDuble': {}, }, name: ((item.name)), }));
                            ({}.GreyBlock5);
                            const __VLS_74 = __VLS_73({ ...{ 'onDelete': {}, 'onDuble': {}, }, name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                            ({}({ ...{ 'onDelete': {}, 'onDuble': {}, }, name: ((item.name)), }));
                            let __VLS_77 = { 'delete': __VLS_pickEvent(__VLS_76['delete'], {}.onDelete) };
                            __VLS_77 = { delete: $event => {
                                    __VLS_ctx.store.removeWebConfig(item);
                                    // @ts-ignore
                                    [store, store, store, store, store,];
                                }
                            };
                            let __VLS_78 = { 'duble': __VLS_pickEvent(__VLS_76['duble'], {}.onDuble) };
                            __VLS_78 = { duble: $event => {
                                    __VLS_ctx.addWebConfig(item.name, true);
                                    // @ts-ignore
                                    [addWebConfig,];
                                }
                            };
                            const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                            let __VLS_76;
                        }
                        (__VLS_70.slots).default;
                        const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
                    }
                }
                (__VLS_65.slots).default;
                const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
            }
            (__VLS_60.slots).default;
            const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
        }
        {
            const __VLS_79 = __VLS_intrinsicElements["br"];
            const __VLS_80 = __VLS_elementAsFunctionalComponent(__VLS_79);
            const __VLS_81 = __VLS_80({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_80));
            ({}({ ...{}, }));
            const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
        }
        {
            const __VLS_84 = {}.QCard;
            const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{}, class: (" card"), }));
            ({}.QCard);
            const __VLS_86 = __VLS_85({ ...{}, class: (" card"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
            ({}({ ...{}, class: (" card"), }));
            {
                const __VLS_89 = __VLS_intrinsicElements["div"];
                const __VLS_90 = __VLS_elementAsFunctionalComponent(__VLS_89);
                const __VLS_91 = __VLS_90({ ...{}, class: (" text-h6 q-mx-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                ({}({ ...{}, class: (" text-h6 q-mx-md"), }));
                {
                    const __VLS_94 = {}.QIcon;
                    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{}, name: ("mdi-penguin"), size: ("md"), }));
                    ({}.QIcon);
                    const __VLS_96 = __VLS_95({ ...{}, name: ("mdi-penguin"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
                    ({}({ ...{}, name: ("mdi-penguin"), size: ("md"), }));
                    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
                }
                {
                    const __VLS_99 = __VLS_intrinsicElements["span"];
                    const __VLS_100 = __VLS_elementAsFunctionalComponent(__VLS_99);
                    const __VLS_101 = __VLS_100({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
                    ({}({ ...{}, class: (" q-ml-sm"), }));
                    (__VLS_102.slots).default;
                    const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
                }
                (__VLS_92.slots).default;
                const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
            }
            {
                const __VLS_104 = __VLS_intrinsicElements["div"];
                const __VLS_105 = __VLS_elementAsFunctionalComponent(__VLS_104);
                const __VLS_106 = __VLS_105({ ...{}, class: (" q-mx-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
                ({}({ ...{}, class: (" q-mx-md"), }));
                {
                    const __VLS_109 = {}.GreyBlock6;
                    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ ...{}, name: ("fuck"), }));
                    ({}.GreyBlock6);
                    const __VLS_111 = __VLS_110({ ...{}, name: ("fuck"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
                    ({}({ ...{}, name: ("fuck"), }));
                    const __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111);
                }
                (__VLS_107.slots).default;
                const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
            }
            (__VLS_87.slots).default;
            const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
        }
        {
            const __VLS_114 = __VLS_intrinsicElements["br"];
            const __VLS_115 = __VLS_elementAsFunctionalComponent(__VLS_114);
            const __VLS_116 = __VLS_115({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
            ({}({ ...{}, }));
            const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
        }
        {
            const __VLS_119 = {}.QCard;
            const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ ...{}, class: (" card"), }));
            ({}.QCard);
            const __VLS_121 = __VLS_120({ ...{}, class: (" card"), }, ...__VLS_functionalComponentArgsRest(__VLS_120));
            ({}({ ...{}, class: (" card"), }));
            {
                const __VLS_124 = __VLS_intrinsicElements["div"];
                const __VLS_125 = __VLS_elementAsFunctionalComponent(__VLS_124);
                const __VLS_126 = __VLS_125({ ...{}, class: (" text-h6 q-mx-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
                ({}({ ...{}, class: (" text-h6 q-mx-md"), }));
                {
                    const __VLS_129 = {}.QIcon;
                    const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{}, name: ("mdi-microsoft-windows-classic"), size: ("md"), }));
                    ({}.QIcon);
                    const __VLS_131 = __VLS_130({ ...{}, name: ("mdi-microsoft-windows-classic"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
                    ({}({ ...{}, name: ("mdi-microsoft-windows-classic"), size: ("md"), }));
                    const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131);
                }
                {
                    const __VLS_134 = __VLS_intrinsicElements["span"];
                    const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
                    const __VLS_136 = __VLS_135({ ...{}, class: (" q-ml-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
                    ({}({ ...{}, class: (" q-ml-sm"), }));
                    (__VLS_137.slots).default;
                    const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
                }
                (__VLS_127.slots).default;
                const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
            }
            {
                const __VLS_139 = __VLS_intrinsicElements["div"];
                const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
                const __VLS_141 = __VLS_140({ ...{}, class: (" q-mx-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
                ({}({ ...{}, class: (" q-mx-md"), }));
                {
                    const __VLS_144 = {}.GreyBlock7;
                    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{}, name: ("fuck"), }));
                    ({}.GreyBlock7);
                    const __VLS_146 = __VLS_145({ ...{}, name: ("fuck"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
                    ({}({ ...{}, name: ("fuck"), }));
                    const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
                }
                (__VLS_142.slots).default;
                const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141);
            }
            (__VLS_122.slots).default;
            const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121);
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
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["q-mx-md"];
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["q-mx-md"];
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["q-mx-md"];
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["q-mx-md"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            GreyBlock5: GreyBlock5,
            GreyBlock6: GreyBlock6,
            GreyBlock7: GreyBlock7,
            AddDialogCommon: AddDialogCommon,
            store: store,
            dialog: dialog,
            add: add,
            addWebConfig: addWebConfig,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Webclient.vue.js.map