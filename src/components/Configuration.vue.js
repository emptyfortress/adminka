/* __placeholder__ */
import { ref } from 'vue';
import ConfigPanel0 from '@/components/ConfigPanel0.vue';
import ConfigPanel1 from '@/components/ConfigPanel1.vue';
import { useConfig } from '@/stores/configuration';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const config = useConfig();
const tabs = ref('0');
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
    __VLS_components.QTab;
    __VLS_components.qTab;
    // @ts-ignore
    [QTab, QTab,];
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
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    // @ts-ignore
    [QTabPanel, QTabPanel,];
    __VLS_components.ConfigPanel0;
    __VLS_components.ConfigPanel0;
    // @ts-ignore
    [ConfigPanel0,];
    __VLS_components.ConfigPanel1;
    __VLS_components.ConfigPanel1;
    // @ts-ignore
    [ConfigPanel1,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
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
            const __VLS_12 = __VLS_11({ ...{}, class: (" bar"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" bar"), }));
            {
                const __VLS_15 = {}.QChip;
                const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, color: ("warning"), }));
                ({}.QChip);
                const __VLS_17 = __VLS_16({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, color: ("warning"), }));
                (__VLS_ctx.config.totalConfigs);
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            if (__VLS_ctx.tabs == '0') {
                {
                    const __VLS_20 = {}.QBtn;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), dense: (true), icon: ("mdi-plus-circle"), }));
                    ({}.QBtn);
                    const __VLS_22 = __VLS_21({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), dense: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{ 'onClick': {}, }, class: (" plus"), flat: (true), round: (true), dense: (true), icon: ("mdi-plus-circle"), }));
                    let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], {}.onClick) };
                    __VLS_25 = { click: $event => {
                            if (!((__VLS_ctx.tabs == '0')))
                                return;
                            ;
                            // @ts-ignore
                            [config, tabs,];
                        }
                    };
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
            }
            {
                const __VLS_31 = {}.QSpace;
                const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, }));
                ({}.QSpace);
                const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                ({}({ ...{}, }));
                const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
            }
            {
                const __VLS_36 = __VLS_intrinsicElements["div"];
                const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                const __VLS_38 = __VLS_37({ ...{}, class: (" alltab"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({ ...{}, class: (" alltab"), }));
                {
                    const __VLS_41 = {}.QTabs;
                    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.tabs)), activeColor: ("primary"), inlineLabel: (true), }));
                    ({}.QTabs);
                    const __VLS_43 = __VLS_42({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.tabs)), activeColor: ("primary"), inlineLabel: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{}, class: (" text-secondary"), modelValue: ((__VLS_ctx.tabs)), activeColor: ("primary"), inlineLabel: (true), }));
                    {
                        const __VLS_46 = {}.QTab;
                        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, label: ("Конфигурации"), name: ("0"), }));
                        ({}.QTab);
                        const __VLS_48 = __VLS_47({ ...{}, label: ("Конфигурации"), name: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                        ({}({ ...{}, label: ("Конфигурации"), name: ("0"), }));
                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    }
                    {
                        const __VLS_51 = {}.QTab;
                        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, label: ("Компьютеры"), name: ("1"), }));
                        ({}.QTab);
                        const __VLS_53 = __VLS_52({ ...{}, label: ("Компьютеры"), name: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                        ({}({ ...{}, label: ("Компьютеры"), name: ("1"), }));
                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                    }
                    (__VLS_44.slots).default;
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                }
                (__VLS_39.slots).default;
                const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_56 = {}.QCard;
            const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, }));
            ({}.QCard);
            const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
            ({}({ ...{}, }));
            {
                const __VLS_61 = {}.QTabPanels;
                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, modelValue: ((__VLS_ctx.tabs)), animated: (true), }));
                ({}.QTabPanels);
                const __VLS_63 = __VLS_62({ ...{}, modelValue: ((__VLS_ctx.tabs)), animated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                ({}({ ...{}, modelValue: ((__VLS_ctx.tabs)), animated: (true), }));
                {
                    const __VLS_66 = {}.QTabPanel;
                    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, name: ("0"), }));
                    ({}.QTabPanel);
                    const __VLS_68 = __VLS_67({ ...{}, name: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                    ({}({ ...{}, name: ("0"), }));
                    {
                        const __VLS_71 = {}.ConfigPanel0;
                        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, }));
                        ({}.ConfigPanel0);
                        const __VLS_73 = __VLS_72({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                        ({}({ ...{}, }));
                        const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                    }
                    (__VLS_69.slots).default;
                    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                }
                {
                    const __VLS_76 = {}.QTabPanel;
                    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{}, name: ("1"), }));
                    ({}.QTabPanel);
                    const __VLS_78 = __VLS_77({ ...{}, name: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                    ({}({ ...{}, name: ("1"), }));
                    {
                        const __VLS_81 = {}.ConfigPanel1;
                        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, }));
                        ({}.ConfigPanel1);
                        const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                        ({}({ ...{}, }));
                        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                    }
                    (__VLS_79.slots).default;
                    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
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
    }
    var __VLS_slots;
    // @ts-ignore
    [tabs, tabs, tabs, tabs, tabs, tabs,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ConfigPanel0: ConfigPanel0,
            ConfigPanel1: ConfigPanel1,
            config: config,
            tabs: tabs,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Configuration.vue.js.map