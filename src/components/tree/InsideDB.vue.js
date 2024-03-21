/* __placeholder__ */
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTabs } from '@/stores/tabs';
import PropertyTab from '@/components/setupcomponent/PropertyTab.vue';
import ControlTab from '@/components/setupcomponent/ControlTab.vue';
import Outer from '@/components/setupcomponent/Outer.vue';
import ArchTab from '@/components/setupcomponent/ArchTab.vue';
import CacheTab from '@/components/setupcomponent/CacheTab.vue';
import ModuleTab from '@/components/setupcomponent/ModuleTab.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tabs = useTabs();
const route = useRoute();
const router = useRouter();
const selected = ref('Свойства');
const select = (e) => {
    selected.value = e.label;
    router.replace('/database/AGSupport#' + e.field);
    document.getElementById(e.field)?.scrollIntoView({ behavior: 'smooth' });
};
const bd = ref({
    psevdo: 'AGSupport',
    name: 'AGSupport_1',
    server: 'Docsvision 1',
    index: 'yes',
    version: 4373,
    date: '20.10.2021',
    def: true,
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
    __VLS_components.QPage;
    __VLS_components.qPage;
    // @ts-ignore
    [QPage,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QBreadcrumbs;
    __VLS_components.qBreadcrumbs;
    // @ts-ignore
    [QBreadcrumbs,];
    __VLS_components.QBreadcrumbsEl;
    __VLS_components.qBreadcrumbsEl;
    __VLS_components.QBreadcrumbsEl;
    __VLS_components.qBreadcrumbsEl;
    // @ts-ignore
    [QBreadcrumbsEl, QBreadcrumbsEl,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn,];
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
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    // @ts-ignore
    [QItemLabel,];
    __VLS_components.QScrollArea;
    __VLS_components.qScrollArea;
    // @ts-ignore
    [QScrollArea,];
    {
        const __VLS_0 = {}.QPage;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, padding: (true), }));
        ({}.QPage);
        const __VLS_2 = __VLS_1({ ...{}, padding: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, padding: (true), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" treepage"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" treepage"), }));
            {
                const __VLS_10 = {}.QBreadcrumbs;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
                ({}.QBreadcrumbs);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                for (const [item] of __VLS_getVForSourceType((__VLS_ctx.route.meta.bread))) {
                    {
                        const __VLS_15 = {}.QBreadcrumbsEl;
                        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onClick': {}, }, label: ((item.label)), icon: ((item.icon)), }));
                        ({}.QBreadcrumbsEl);
                        const __VLS_17 = __VLS_16({ ...{ 'onClick': {}, }, label: ((item.label)), icon: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                        ({}({ ...{ 'onClick': {}, }, label: ((item.label)), icon: ((item.icon)), }));
                        let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], {}.onClick) };
                        __VLS_20 = { click: $event => {
                                __VLS_ctx.router.back;
                                // @ts-ignore
                                [route, router,];
                            }
                        };
                        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                        let __VLS_19;
                    }
                }
                {
                    const __VLS_21 = {}.QBreadcrumbsEl;
                    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, label: ((__VLS_ctx.route.params.id.toString())), }));
                    ({}.QBreadcrumbsEl);
                    const __VLS_23 = __VLS_22({ ...{}, label: ((__VLS_ctx.route.params.id.toString())), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                    ({}({ ...{}, label: ((__VLS_ctx.route.params.id.toString())), }));
                    const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                }
                {
                    const __VLS_26 = {}.QSpace;
                    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, }));
                    ({}.QSpace);
                    const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                    ({}({ ...{}, }));
                    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                }
                {
                    const __VLS_31 = {}.QBtn;
                    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), size: ("md"), }));
                    ({}.QBtn);
                    const __VLS_33 = __VLS_32({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                    ({}({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), size: ("md"), }));
                    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                }
                {
                    const __VLS_36 = {}.QBtn;
                    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, unelevated: (true), color: ("primary"), label: ("Применить"), size: ("md"), }));
                    ({}.QBtn);
                    const __VLS_38 = __VLS_37({ ...{}, unelevated: (true), color: ("primary"), label: ("Применить"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                    ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Применить"), size: ("md"), }));
                    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_41 = __VLS_intrinsicElements["div"];
            const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
            const __VLS_43 = __VLS_42({ ...{}, class: (" grid"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
            ({}({ ...{}, class: (" grid"), }));
            {
                const __VLS_46 = {}.QList;
                const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, class: (" left"), dense: (true), }));
                ({}.QList);
                const __VLS_48 = __VLS_47({ ...{}, class: (" left"), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                ({}({ ...{}, class: (" left"), dense: (true), }));
                for (const [item] of __VLS_getVForSourceType((__VLS_ctx.tabs.tabs))) {
                    {
                        const __VLS_51 = {}.QItem;
                        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: __VLS_ctx.selected == item.label })), }));
                        ({}.QItem);
                        const __VLS_53 = __VLS_52({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: __VLS_ctx.selected == item.label })), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                        ({}({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: __VLS_ctx.selected == item.label })), }));
                        __VLS_styleScopedClasses = ({ selected: selected == item.label });
                        let __VLS_56 = { 'click': __VLS_pickEvent(__VLS_55['click'], {}.onClick) };
                        __VLS_56 = { click: $event => {
                                __VLS_ctx.select(item);
                                // @ts-ignore
                                [route, route, route, tabs, selected, selected, selected, select,];
                            }
                        };
                        {
                            const __VLS_57 = {}.QItemSection;
                            const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, }));
                            ({}.QItemSection);
                            const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                            ({}({ ...{}, }));
                            {
                                const __VLS_62 = {}.QItemLabel;
                                const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, }));
                                ({}.QItemLabel);
                                const __VLS_64 = __VLS_63({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                                ({}({ ...{}, }));
                                (item.label);
                                (__VLS_65.slots).default;
                                const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
                            }
                            (__VLS_60.slots).default;
                            const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
                        }
                        (__VLS_54.slots).default;
                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                        let __VLS_55;
                    }
                }
                (__VLS_49.slots).default;
                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
            }
            {
                const __VLS_67 = {}.QScrollArea;
                const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{}, class: (" right"), }));
                ({}.QScrollArea);
                const __VLS_69 = __VLS_68({ ...{}, class: (" right"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                ({}({ ...{}, class: (" right"), }));
                {
                    const __VLS_72 = __VLS_intrinsicElements["div"];
                    const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
                    const __VLS_74 = __VLS_73({ ...{}, class: (" zg"), id: ('prop'), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                    ({}({ ...{}, class: (" zg"), id: ('prop'), }));
                    (__VLS_75.slots).default;
                    const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                }
                {
                    const __VLS_77 = (__VLS_ctx.PropertyTab);
                    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, is: ((__VLS_ctx.PropertyTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_79 = __VLS_78({ ...{}, is: ((__VLS_ctx.PropertyTab)), bd: ((__VLS_ctx.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
                    ({}({ ...{}, is: ((__VLS_ctx.PropertyTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79);
                }
                {
                    const __VLS_82 = __VLS_intrinsicElements["div"];
                    const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
                    const __VLS_84 = __VLS_83({ ...{}, class: (" zg"), id: ('control'), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
                    ({}({ ...{}, class: (" zg"), id: ('control'), }));
                    (__VLS_85.slots).default;
                    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
                }
                {
                    const __VLS_87 = (__VLS_ctx.ControlTab);
                    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, is: ((__VLS_ctx.ControlTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_89 = __VLS_88({ ...{}, is: ((__VLS_ctx.ControlTab)), bd: ((__VLS_ctx.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
                    ({}({ ...{}, is: ((__VLS_ctx.ControlTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89);
                }
                {
                    const __VLS_92 = __VLS_intrinsicElements["div"];
                    const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
                    const __VLS_94 = __VLS_93({ ...{}, class: (" zg"), id: ('outer'), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
                    ({}({ ...{}, class: (" zg"), id: ('outer'), }));
                    (__VLS_95.slots).default;
                    const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
                }
                {
                    const __VLS_97 = (__VLS_ctx.Outer);
                    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, is: ((__VLS_ctx.Outer)), }));
                    const __VLS_99 = __VLS_98({ ...{}, is: ((__VLS_ctx.Outer)), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
                    ({}({ ...{}, is: ((__VLS_ctx.Outer)), }));
                    const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99);
                }
                {
                    const __VLS_102 = __VLS_intrinsicElements["div"];
                    const __VLS_103 = __VLS_elementAsFunctionalComponent(__VLS_102);
                    const __VLS_104 = __VLS_103({ ...{}, class: (" zg"), id: ('arch'), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
                    ({}({ ...{}, class: (" zg"), id: ('arch'), }));
                    (__VLS_105.slots).default;
                    const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
                }
                {
                    const __VLS_107 = (__VLS_ctx.ArchTab);
                    const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{}, is: ((__VLS_ctx.ArchTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_109 = __VLS_108({ ...{}, is: ((__VLS_ctx.ArchTab)), bd: ((__VLS_ctx.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
                    ({}({ ...{}, is: ((__VLS_ctx.ArchTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
                }
                {
                    const __VLS_112 = __VLS_intrinsicElements["div"];
                    const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
                    const __VLS_114 = __VLS_113({ ...{}, class: (" zg"), id: ('cache'), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
                    ({}({ ...{}, class: (" zg"), id: ('cache'), }));
                    (__VLS_115.slots).default;
                    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
                }
                {
                    const __VLS_117 = (__VLS_ctx.CacheTab);
                    const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, is: ((__VLS_ctx.CacheTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_119 = __VLS_118({ ...{}, is: ((__VLS_ctx.CacheTab)), bd: ((__VLS_ctx.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                    ({}({ ...{}, is: ((__VLS_ctx.CacheTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
                }
                {
                    const __VLS_122 = __VLS_intrinsicElements["div"];
                    const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
                    const __VLS_124 = __VLS_123({ ...{}, class: (" zg"), id: ('module'), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                    ({}({ ...{}, class: (" zg"), id: ('module'), }));
                    (__VLS_125.slots).default;
                    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
                }
                {
                    const __VLS_127 = (__VLS_ctx.ModuleTab);
                    const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ ...{}, is: ((__VLS_ctx.ModuleTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_129 = __VLS_128({ ...{}, is: ((__VLS_ctx.ModuleTab)), bd: ((__VLS_ctx.bd)), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
                    ({}({ ...{}, is: ((__VLS_ctx.ModuleTab)), bd: ((__VLS_ctx.bd)), }));
                    const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
                }
                (__VLS_70.slots).default;
                const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
            }
            (__VLS_44.slots).default;
            const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["treepage"];
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["left"];
        __VLS_styleScopedClasses["right"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["zg"];
    }
    var __VLS_slots;
    // @ts-ignore
    [PropertyTab, PropertyTab, bd, PropertyTab, bd, PropertyTab, bd, ControlTab, ControlTab, bd, ControlTab, bd, ControlTab, bd, Outer, Outer, Outer, Outer, ArchTab, ArchTab, bd, ArchTab, bd, ArchTab, bd, CacheTab, CacheTab, bd, CacheTab, bd, CacheTab, bd, ModuleTab, ModuleTab, bd, ModuleTab, bd, ModuleTab, bd,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            PropertyTab: PropertyTab,
            ControlTab: ControlTab,
            Outer: Outer,
            ArchTab: ArchTab,
            CacheTab: CacheTab,
            ModuleTab: ModuleTab,
            tabs: tabs,
            route: route,
            router: router,
            selected: selected,
            select: select,
            bd: bd,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=InsideDB.vue.js.map