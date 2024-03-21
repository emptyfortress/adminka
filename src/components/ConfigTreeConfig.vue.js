/* __placeholder__ */
import { ref, reactive, computed, watch } from 'vue';
import WordHighlighter from 'vue-word-highlighter';
import { conf } from '@/stores/confTree';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const filter = ref('');
const expandedKeys = ref(['root', 'platform', 'web']);
const chips = reactive([
    { id: 0, label: 'Все', selected: true },
    { id: 1, label: 'test', selected: false },
    { id: 2, label: 'dev', selected: false },
    { id: 3, label: 'prod', selected: false },
]);
const selChip = ref(0);
const select = (e) => {
    chips.map(item => (item.selected = false));
    e.selected = true;
    selChip.value = e.id;
    if (selChip.value > 0)
        tree.value.expandAll();
    if (selChip.value == 0)
        expandedKeys.value = ['root', 'platform', 'web'];
};
const tree = ref();
watch(filter, val => {
    if (val.length > 0) {
        tree.value.expandAll();
    }
});
const filterByEnv = (array, searchTerm) => {
    return array.reduce((prev, curr) => {
        const children = curr.children
            ? filterByEnv(curr.children, searchTerm)
            : undefined;
        return curr.env?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            children?.length > 0
            ? [...prev, { ...curr, children }]
            : prev;
    }, []);
};
const filtered = computed(() => {
    if (selChip.value == 1) {
        return filterByEnv(conf, 'test');
    }
    if (selChip.value == 2) {
        return filterByEnv(conf, 'dev');
    }
    if (selChip.value == 3) {
        return filterByEnv(conf, 'prod');
    }
    return conf;
});
const selectedKeys = ref(null);
const isSelected = (e) => {
    return e.id == selectedKeys.value && e.icon == 'mdi-code-braces';
};
const edit = () => {
    router.push('/setup/webclient/');
};
const showChip = (e) => {
    if (!!e.env && e.icon == 'mdi-code-braces') {
        return true;
    }
    else
        return false;
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
    __VLS_components.QChip;
    __VLS_components.qChip;
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip, QChip,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
    __VLS_components.QTree;
    __VLS_components.qTree;
    // @ts-ignore
    [QTree,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu,];
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList,];
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
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        for (const [chip] of __VLS_getVForSourceType((__VLS_ctx.chips))) {
            {
                const __VLS_5 = {}.QChip;
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onClick': {}, }, class: (" fuck"), key: ((chip.id)), selected: ((chip.selected)), size: ("md"), }));
                ({}.QChip);
                const __VLS_7 = __VLS_6({ ...{ 'onClick': {}, }, class: (" fuck"), key: ((chip.id)), selected: ((chip.selected)), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{ 'onClick': {}, }, class: (" fuck"), key: ((chip.id)), selected: ((chip.selected)), size: ("md"), }));
                let __VLS_10 = { 'click': __VLS_pickEvent(__VLS_9['click'], {}.onClick) };
                __VLS_10 = { click: $event => {
                        __VLS_ctx.select(chip);
                        // @ts-ignore
                        [chips, select,];
                    }
                };
                (chip.label);
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
                let __VLS_9;
            }
        }
        {
            const __VLS_11 = {}.QInput;
            const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ ...{ 'onClear': {}, }, class: (" q-mt-md"), modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Фильтр"), }));
            ({}.QInput);
            const __VLS_13 = __VLS_12({ ...{ 'onClear': {}, }, class: (" q-mt-md"), modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Фильтр"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            ({}({ ...{ 'onClear': {}, }, class: (" q-mt-md"), modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Фильтр"), }));
            let __VLS_16 = { 'clear': __VLS_pickEvent(__VLS_15['clear'], {}.onClear) };
            __VLS_16 = { clear: $event => {
                    __VLS_ctx.filter = '';
                    // @ts-ignore
                    [filter, filter, filter, filter,];
                }
            };
            {
                const __VLS_17 = __VLS_intrinsicElements["template"];
                const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                const __VLS_19 = __VLS_18({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{}, }));
                {
                    (__VLS_14.slots).prepend;
                    {
                        const __VLS_21 = {}.QIcon;
                        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, name: ("mdi-magnify"), }));
                        ({}.QIcon);
                        const __VLS_23 = __VLS_22({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                        ({}({ ...{}, name: ("mdi-magnify"), }));
                        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                    }
                }
            }
            const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
            let __VLS_15;
        }
        {
            const __VLS_26 = {}.QTree;
            const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, ref: ("tree"), nodes: ((__VLS_ctx.filtered)), icon: ("mdi-chevron-right"), nodeKey: ("id"), filter: ((__VLS_ctx.filter)), expanded: ((__VLS_ctx.expandedKeys)), selected: ((__VLS_ctx.selectedKeys)), }));
            ({}.QTree);
            const __VLS_28 = __VLS_27({ ...{}, ref: ("tree"), nodes: ((__VLS_ctx.filtered)), icon: ("mdi-chevron-right"), nodeKey: ("id"), filter: ((__VLS_ctx.filter)), expanded: ((__VLS_ctx.expandedKeys)), selected: ((__VLS_ctx.selectedKeys)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            ({}({ ...{}, ref: ("tree"), nodes: ((__VLS_ctx.filtered)), icon: ("mdi-chevron-right"), nodeKey: ("id"), filter: ((__VLS_ctx.filter)), expanded: ((__VLS_ctx.expandedKeys)), selected: ((__VLS_ctx.selectedKeys)), }));
            // @ts-ignore
            (__VLS_ctx.tree);
            {
                const __VLS_31 = __VLS_intrinsicElements["template"];
                const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
                const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                ({}({ ...{}, }));
                {
                    const [prop] = __VLS_getSlotParams((__VLS_29.slots)["header-root"]);
                    {
                        const __VLS_35 = __VLS_intrinsicElements["div"];
                        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                        const __VLS_37 = __VLS_36({ ...{}, class: (" row items-center q-gutter-x-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                        ({}({ ...{}, class: (" row items-center q-gutter-x-md"), }));
                        {
                            const __VLS_40 = __VLS_intrinsicElements["div"];
                            const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                            const __VLS_42 = __VLS_41({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({}({ ...{}, class: (" text-h6"), }));
                            (prop.node.label);
                            (__VLS_43.slots).default;
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                        }
                        (__VLS_38.slots).default;
                        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    }
                    // @ts-ignore
                    [filtered, filter, expandedKeys, selectedKeys, filtered, filter, expandedKeys, selectedKeys, filtered, filter, expandedKeys, selectedKeys, tree,];
                }
            }
            {
                const __VLS_45 = __VLS_intrinsicElements["template"];
                const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, }));
                {
                    const [prop] = __VLS_getSlotParams((__VLS_29.slots)["default-header"]);
                    {
                        const __VLS_49 = __VLS_intrinsicElements["div"];
                        const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
                        const __VLS_51 = __VLS_50({ ...{}, class: (" node"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
                        ({}({ ...{}, class: (" node"), }));
                        {
                            const __VLS_54 = __VLS_intrinsicElements["div"];
                            const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                            const __VLS_56 = __VLS_55({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                            ({}({ ...{}, }));
                            {
                                const __VLS_59 = {}.QIcon;
                                const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{}, class: (" q-mr-sm"), name: ((prop.node.icon)), }));
                                ({}.QIcon);
                                const __VLS_61 = __VLS_60({ ...{}, class: (" q-mr-sm"), name: ((prop.node.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                                ({}({ ...{}, class: (" q-mr-sm"), name: ((prop.node.icon)), }));
                                const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                            }
                            if (prop.node.docker) {
                                {
                                    const __VLS_64 = {}.QIcon;
                                    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, class: (" q-mr-sm"), name: ("mdi-docker"), }));
                                    ({}.QIcon);
                                    const __VLS_66 = __VLS_65({ ...{}, class: (" q-mr-sm"), name: ("mdi-docker"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                                    ({}({ ...{}, class: (" q-mr-sm"), name: ("mdi-docker"), }));
                                    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                                }
                            }
                            {
                                const __VLS_69 = (__VLS_ctx.WordHighlighter);
                                const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{}, is: ((__VLS_ctx.WordHighlighter)), query: ((__VLS_ctx.filter)), }));
                                const __VLS_71 = __VLS_70({ ...{}, is: ((__VLS_ctx.WordHighlighter)), query: ((__VLS_ctx.filter)), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                                ({}({ ...{}, is: ((__VLS_ctx.WordHighlighter)), query: ((__VLS_ctx.filter)), }));
                                (prop.node.label);
                                (__VLS_72.slots).default;
                                const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
                            }
                            (__VLS_57.slots).default;
                            const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
                        }
                        {
                            const __VLS_74 = __VLS_intrinsicElements["div"];
                            const __VLS_75 = __VLS_elementAsFunctionalComponent(__VLS_74);
                            const __VLS_76 = __VLS_75({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                            ({}({ ...{}, }));
                            if (__VLS_ctx.isSelected(prop.node)) {
                                {
                                    const __VLS_79 = {}.QBtn;
                                    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-dots-vertical"), color: ("primary"), size: ("sm"), }));
                                    ({}.QBtn);
                                    const __VLS_81 = __VLS_80({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-dots-vertical"), color: ("primary"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                                    ({}({ ...{ 'onClick': {}, }, flat: (true), round: (true), icon: ("mdi-dots-vertical"), color: ("primary"), size: ("sm"), }));
                                    let __VLS_84 = { 'click': __VLS_pickEvent(__VLS_83['click'], {}.onClick) };
                                    __VLS_84 = { click: $event => {
                                            if (!((__VLS_ctx.isSelected(prop.node))))
                                                return;
                                            ;
                                            // @ts-ignore
                                            [WordHighlighter, WordHighlighter, filter, WordHighlighter, filter, WordHighlighter, filter, isSelected,];
                                        }
                                    };
                                    {
                                        const __VLS_85 = {}.QMenu;
                                        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, }));
                                        ({}.QMenu);
                                        const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                                        ({}({ ...{}, }));
                                        {
                                            const __VLS_90 = {}.QList;
                                            const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, }));
                                            ({}.QList);
                                            const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                                            ({}({ ...{}, }));
                                            {
                                                const __VLS_95 = {}.QItem;
                                                const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, clickable: (true), }));
                                                ({}.QItem);
                                                const __VLS_97 = __VLS_96({ ...{}, clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                                                ({}({ ...{}, clickable: (true), }));
                                                {
                                                    const __VLS_100 = {}.QItemSection;
                                                    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, }));
                                                    ({}.QItemSection);
                                                    const __VLS_102 = __VLS_101({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                                                    ({}({ ...{}, }));
                                                    (__VLS_103.slots).default;
                                                    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                                                }
                                                (__VLS_98.slots).default;
                                                const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                                            }
                                            {
                                                const __VLS_105 = {}.QItem;
                                                const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{ 'onClick': {}, }, clickable: (true), }));
                                                ({}.QItem);
                                                const __VLS_107 = __VLS_106({ ...{ 'onClick': {}, }, clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                                                ({}({ ...{ 'onClick': {}, }, clickable: (true), }));
                                                let __VLS_110 = { 'click': __VLS_pickEvent(__VLS_109['click'], {}.onClick) };
                                                __VLS_110 = { click: (__VLS_ctx.edit) };
                                                {
                                                    const __VLS_111 = {}.QItemSection;
                                                    const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{}, }));
                                                    ({}.QItemSection);
                                                    const __VLS_113 = __VLS_112({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                                                    ({}({ ...{}, }));
                                                    (__VLS_114.slots).default;
                                                    const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                                                }
                                                (__VLS_108.slots).default;
                                                const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                                                let __VLS_109;
                                            }
                                            (__VLS_93.slots).default;
                                            const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                                        }
                                        (__VLS_88.slots).default;
                                        const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                                    }
                                    (__VLS_82.slots).default;
                                    const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
                                    let __VLS_83;
                                }
                                // @ts-ignore
                                [edit,];
                            }
                            if (__VLS_ctx.showChip(prop.node)) {
                                {
                                    const __VLS_116 = {}.QChip;
                                    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ ...{}, size: ("sm"), class: ((prop.node.env)), }));
                                    ({}.QChip);
                                    const __VLS_118 = __VLS_117({ ...{}, size: ("sm"), class: ((prop.node.env)), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                                    ({}({ ...{}, size: ("sm"), class: ((prop.node.env)), }));
                                    __VLS_styleScopedClasses = (prop.node.env);
                                    (prop.node.env);
                                    (__VLS_119.slots).default;
                                    const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
                                }
                                // @ts-ignore
                                [showChip,];
                            }
                            (__VLS_77.slots).default;
                            const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                        }
                        (__VLS_52.slots).default;
                        const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
                    }
                }
            }
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["fuck"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-gutter-x-md"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["node"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["q-mr-sm"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            WordHighlighter: WordHighlighter,
            filter: filter,
            expandedKeys: expandedKeys,
            chips: chips,
            select: select,
            tree: tree,
            filtered: filtered,
            selectedKeys: selectedKeys,
            isSelected: isSelected,
            edit: edit,
            showChip: showChip,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=ConfigTreeConfig.vue.js.map