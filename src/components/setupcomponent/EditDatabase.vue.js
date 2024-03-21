/* __placeholder__ */
import { onUpdated, ref } from 'vue';
import { useTabs } from '@/stores/tabs';
import Outer from '@/components/setupcomponent/Outer.vue';
import PropertyTab from '@/components/setupcomponent/PropertyTab.vue';
import ControlTab from '@/components/setupcomponent/ControlTab.vue';
import ArchTab from '@/components/setupcomponent/ArchTab.vue';
import CacheTab from '@/components/setupcomponent/CacheTab.vue';
import ModuleTab from '@/components/setupcomponent/ModuleTab.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    edit: {
        type: Boolean,
        default: false,
    },
    bd: {
        type: Object,
        default: {
            psevdo: 'AGSupport',
            name: 'AGSupport_1',
            server: 'Docsvision 1',
            index: 'yes',
            version: 4373,
            date: '20.10.2021',
            def: true,
        },
    },
    tab: {
        type: String,
        default: 'prop',
    },
});
const emit = defineEmits(['update:modelValue']);
const close = () => {
    emit('update:modelValue', false);
};
const mytab = ref('control');
onUpdated(() => {
    mytab.value = props.tab;
});
const tabs = useTabs();
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
    __VLS_components.QDialog;
    __VLS_components.qDialog;
    // @ts-ignore
    [QDialog,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.QTabs;
    __VLS_components.qTabs;
    // @ts-ignore
    [QTabs,];
    __VLS_components.QTab;
    __VLS_components.qTab;
    // @ts-ignore
    [QTab,];
    __VLS_components.QBadge;
    __VLS_components.qBadge;
    // @ts-ignore
    [QBadge,];
    __VLS_components.QTabPanels;
    __VLS_components.qTabPanels;
    // @ts-ignore
    [QTabPanels,];
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    // @ts-ignore
    [QTabPanel, QTabPanel, QTabPanel, QTabPanel, QTabPanel, QTabPanel,];
    __VLS_components.QSeparator;
    __VLS_components.qSeparator;
    // @ts-ignore
    [QSeparator,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn,];
    {
        const __VLS_0 = {}.QDialog;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, modelValue: ((props.edit)), persistent: (true), position: ('bottom'), fullWidth: (true), }));
        ({}.QDialog);
        const __VLS_2 = __VLS_1({ ...{}, modelValue: ((props.edit)), persistent: (true), position: ('bottom'), fullWidth: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, modelValue: ((props.edit)), persistent: (true), position: ('bottom'), fullWidth: (true), }));
        {
            const __VLS_5 = {}.QCard;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" edit"), }));
            ({}.QCard);
            const __VLS_7 = __VLS_6({ ...{}, class: (" edit"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" edit"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    const __VLS_15 = {}.QCardSection;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["div"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, class: (" title"), }));
                        {
                            const __VLS_25 = {}.QIcon;
                            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, name: ('mdi-database-cog'), }));
                            ({}.QIcon);
                            const __VLS_27 = __VLS_26({ ...{}, name: ('mdi-database-cog'), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, name: ('mdi-database-cog'), }));
                            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                        }
                        {
                            const __VLS_30 = __VLS_intrinsicElements["span"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, }));
                            (props.bd.psevdo);
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_35 = {}.QTabs;
                    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.mytab)), dense: (true), }));
                    ({}.QTabs);
                    const __VLS_37 = __VLS_36({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.mytab)), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.mytab)), dense: (true), }));
                    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs.tabs))) {
                        {
                            const __VLS_40 = {}.QTab;
                            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, key: ((tab.name)), name: ((tab.name)), }));
                            ({}.QTab);
                            const __VLS_42 = __VLS_41({ ...{}, key: ((tab.name)), name: ((tab.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({}({ ...{}, key: ((tab.name)), name: ((tab.name)), }));
                            {
                                const __VLS_45 = __VLS_intrinsicElements["span"];
                                const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                                const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                                ({}({ ...{}, }));
                                (tab.label);
                                if (tab.modified) {
                                    {
                                        const __VLS_50 = {}.QBadge;
                                        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, rounded: (true), float: (true), color: ("red"), align: ("top"), }));
                                        ({}.QBadge);
                                        const __VLS_52 = __VLS_51({ ...{}, rounded: (true), float: (true), color: ("red"), align: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                                        ({}({ ...{}, rounded: (true), float: (true), color: ("red"), align: ("top"), }));
                                        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                                    }
                                    // @ts-ignore
                                    [mytab, mytab, mytab, tabs,];
                                }
                                (__VLS_48.slots).default;
                                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                            }
                            (__VLS_43.slots).default;
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                        }
                    }
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_55 = {}.QTabPanels;
                    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, modelValue: ((__VLS_ctx.mytab)), animated: (true), }));
                    ({}.QTabPanels);
                    const __VLS_57 = __VLS_56({ ...{}, modelValue: ((__VLS_ctx.mytab)), animated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.mytab)), animated: (true), }));
                    {
                        const __VLS_60 = {}.QTabPanel;
                        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, name: ('prop'), }));
                        ({}.QTabPanel);
                        const __VLS_62 = __VLS_61({ ...{}, name: ('prop'), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                        ({}({ ...{}, name: ('prop'), }));
                        {
                            const __VLS_65 = (__VLS_ctx.PropertyTab);
                            const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, is: ((__VLS_ctx.PropertyTab)), bd: ((props.bd)), }));
                            const __VLS_67 = __VLS_66({ ...{}, is: ((__VLS_ctx.PropertyTab)), bd: ((props.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                            ({}({ ...{}, is: ((__VLS_ctx.PropertyTab)), bd: ((props.bd)), }));
                            const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                        }
                        (__VLS_63.slots).default;
                        const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                    }
                    {
                        const __VLS_70 = {}.QTabPanel;
                        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, name: ('control'), }));
                        ({}.QTabPanel);
                        const __VLS_72 = __VLS_71({ ...{}, name: ('control'), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                        ({}({ ...{}, name: ('control'), }));
                        {
                            const __VLS_75 = (__VLS_ctx.ControlTab);
                            const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, is: ((__VLS_ctx.ControlTab)), bd: ((props.bd)), }));
                            const __VLS_77 = __VLS_76({ ...{}, is: ((__VLS_ctx.ControlTab)), bd: ((props.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                            ({}({ ...{}, is: ((__VLS_ctx.ControlTab)), bd: ((props.bd)), }));
                            const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                        }
                        (__VLS_73.slots).default;
                        const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                    }
                    {
                        const __VLS_80 = {}.QTabPanel;
                        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, name: ('outer'), }));
                        ({}.QTabPanel);
                        const __VLS_82 = __VLS_81({ ...{}, name: ('outer'), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                        ({}({ ...{}, name: ('outer'), }));
                        {
                            const __VLS_85 = (__VLS_ctx.Outer);
                            const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, is: ((__VLS_ctx.Outer)), }));
                            const __VLS_87 = __VLS_86({ ...{}, is: ((__VLS_ctx.Outer)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                            ({}({ ...{}, is: ((__VLS_ctx.Outer)), }));
                            const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                        }
                        (__VLS_83.slots).default;
                        const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                    }
                    {
                        const __VLS_90 = {}.QTabPanel;
                        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, name: ('arch'), }));
                        ({}.QTabPanel);
                        const __VLS_92 = __VLS_91({ ...{}, name: ('arch'), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                        ({}({ ...{}, name: ('arch'), }));
                        {
                            const __VLS_95 = (__VLS_ctx.ArchTab);
                            const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, is: ((__VLS_ctx.ArchTab)), bd: ((props.bd)), }));
                            const __VLS_97 = __VLS_96({ ...{}, is: ((__VLS_ctx.ArchTab)), bd: ((props.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                            ({}({ ...{}, is: ((__VLS_ctx.ArchTab)), bd: ((props.bd)), }));
                            const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                        }
                        (__VLS_93.slots).default;
                        const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                    }
                    {
                        const __VLS_100 = {}.QTabPanel;
                        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, name: ('cache'), }));
                        ({}.QTabPanel);
                        const __VLS_102 = __VLS_101({ ...{}, name: ('cache'), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                        ({}({ ...{}, name: ('cache'), }));
                        {
                            const __VLS_105 = (__VLS_ctx.CacheTab);
                            const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, is: ((__VLS_ctx.CacheTab)), bd: ((props.bd)), }));
                            const __VLS_107 = __VLS_106({ ...{}, is: ((__VLS_ctx.CacheTab)), bd: ((props.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                            ({}({ ...{}, is: ((__VLS_ctx.CacheTab)), bd: ((props.bd)), }));
                            const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                        }
                        (__VLS_103.slots).default;
                        const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                    }
                    {
                        const __VLS_110 = {}.QTabPanel;
                        const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{}, name: ('module'), }));
                        ({}.QTabPanel);
                        const __VLS_112 = __VLS_111({ ...{}, name: ('module'), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                        ({}({ ...{}, name: ('module'), }));
                        {
                            const __VLS_115 = (__VLS_ctx.ModuleTab);
                            const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, is: ((__VLS_ctx.ModuleTab)), bd: ((props.bd)), }));
                            const __VLS_117 = __VLS_116({ ...{}, is: ((__VLS_ctx.ModuleTab)), bd: ((props.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                            ({}({ ...{}, is: ((__VLS_ctx.ModuleTab)), bd: ((props.bd)), }));
                            const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                        }
                        (__VLS_113.slots).default;
                        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
                    }
                    (__VLS_58.slots).default;
                    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_120 = __VLS_intrinsicElements["div"];
                const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                const __VLS_122 = __VLS_121({ ...{}, class: (" bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                ({}({ ...{}, class: (" bottom"), }));
                {
                    const __VLS_125 = {}.QSeparator;
                    const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ ...{}, }));
                    ({}.QSeparator);
                    const __VLS_127 = __VLS_126({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                    ({}({ ...{}, }));
                    const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                }
                {
                    const __VLS_130 = {}.QCardActions;
                    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{}, align: ('center'), }));
                    ({}.QCardActions);
                    const __VLS_132 = __VLS_131({ ...{}, align: ('center'), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                    ({}({ ...{}, align: ('center'), }));
                    {
                        const __VLS_135 = {}.QBtn;
                        const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ ...{ 'onClick': {}, }, disable: ((__VLS_ctx.mytab === 'outer')), flat: (true), color: ("primary"), }));
                        ({}.QBtn);
                        const __VLS_137 = __VLS_136({ ...{ 'onClick': {}, }, disable: ((__VLS_ctx.mytab === 'outer')), flat: (true), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                        ({}({ ...{ 'onClick': {}, }, disable: ((__VLS_ctx.mytab === 'outer')), flat: (true), color: ("primary"), }));
                        let __VLS_140 = { 'click': __VLS_pickEvent(__VLS_139['click'], {}.onClick) };
                        __VLS_140 = { click: (__VLS_ctx.close) };
                        (__VLS_138.slots).default;
                        const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                        let __VLS_139;
                    }
                    {
                        const __VLS_141 = {}.QBtn;
                        const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{ 'onClick': {}, }, disable: ((__VLS_ctx.mytab === 'outer')), unelevated: (true), color: ("primary"), }));
                        ({}.QBtn);
                        const __VLS_143 = __VLS_142({ ...{ 'onClick': {}, }, disable: ((__VLS_ctx.mytab === 'outer')), unelevated: (true), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                        ({}({ ...{ 'onClick': {}, }, disable: ((__VLS_ctx.mytab === 'outer')), unelevated: (true), color: ("primary"), }));
                        let __VLS_146 = { 'click': __VLS_pickEvent(__VLS_145['click'], {}.onClick) };
                        __VLS_146 = { click: (__VLS_ctx.close) };
                        (__VLS_144.slots).default;
                        const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                        let __VLS_145;
                    }
                    (__VLS_133.slots).default;
                    const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                }
                (__VLS_123.slots).default;
                const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
            }
            {
                const __VLS_147 = {}.QBtn;
                const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ ...{ 'onClick': {}, }, class: (" close"), flat: (true), round: (true), icon: ("mdi-close"), color: ("primary"), }));
                ({}.QBtn);
                const __VLS_149 = __VLS_148({ ...{ 'onClick': {}, }, class: (" close"), flat: (true), round: (true), icon: ("mdi-close"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
                ({}({ ...{ 'onClick': {}, }, class: (" close"), flat: (true), round: (true), icon: ("mdi-close"), color: ("primary"), }));
                let __VLS_152 = { 'click': __VLS_pickEvent(__VLS_151['click'], {}.onClick) };
                __VLS_152 = { click: (__VLS_ctx.close) };
                const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
                let __VLS_151;
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["edit"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["text-secondary"];
        __VLS_styleScopedClasses["bottom"];
        __VLS_styleScopedClasses["close"];
    }
    var __VLS_slots;
    // @ts-ignore
    [mytab, mytab, mytab, PropertyTab, PropertyTab, PropertyTab, PropertyTab, ControlTab, ControlTab, ControlTab, ControlTab, Outer, Outer, Outer, Outer, ArchTab, ArchTab, ArchTab, ArchTab, CacheTab, CacheTab, CacheTab, CacheTab, ModuleTab, ModuleTab, ModuleTab, ModuleTab, mytab, mytab, mytab, close, mytab, mytab, mytab, close, close,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Outer: Outer,
            PropertyTab: PropertyTab,
            ControlTab: ControlTab,
            ArchTab: ArchTab,
            CacheTab: CacheTab,
            ModuleTab: ModuleTab,
            close: close,
            mytab: mytab,
            tabs: tabs,
        };
    },
    props: {
        edit: {
            type: Boolean,
            default: false,
        },
        bd: {
            type: Object,
            default: {
                psevdo: 'AGSupport',
                name: 'AGSupport_1',
                server: 'Docsvision 1',
                index: 'yes',
                version: 4373,
                date: '20.10.2021',
                def: true,
            },
        },
        tab: {
            type: String,
            default: 'prop',
        },
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        edit: {
            type: Boolean,
            default: false,
        },
        bd: {
            type: Object,
            default: {
                psevdo: 'AGSupport',
                name: 'AGSupport_1',
                server: 'Docsvision 1',
                index: 'yes',
                version: 4373,
                date: '20.10.2021',
                def: true,
            },
        },
        tab: {
            type: String,
            default: 'prop',
        },
    },
    emits: {},
});
//# sourceMappingURL=EditDatabase.vue.js.map