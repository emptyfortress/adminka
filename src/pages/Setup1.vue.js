/* __placeholder__ */
import { ref, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTree } from '@/stores/tree';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tree = useTree();
const selected = ref('appserver');
const expanded = ref(['appserver']);
const query = ref('');
const router = useRouter();
const route = useRoute();
const goto = (e) => {
    if (!!e.url) {
        router.push(e.url);
    }
};
router.afterEach(to => {
    if (!!to.hash) {
        // document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
        // setTimeout(() => {
        // 	document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' })
        // }, 300)
        nextTick(() => {
            document.querySelector(to.hash)?.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
const save = ref(false);
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_components.QScrollArea;
    __VLS_components.qScrollArea;
    __VLS_components.QScrollArea;
    __VLS_components.qScrollArea;
    // @ts-ignore
    [QScrollArea, QScrollArea,];
    __VLS_components.QTree;
    __VLS_components.qTree;
    // @ts-ignore
    [QTree,];
    __VLS_intrinsicElements.label;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn,];
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView,];
    {
        const __VLS_0 = {}.QPage;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, padding: (true), }));
        ({}.QPage);
        const __VLS_2 = __VLS_1({ ...{}, padding: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, padding: (true), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" container"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" container"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" grid"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" grid"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    {
                        const __VLS_20 = {}.QInput;
                        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: (" q-mb-md"), modelValue: ((__VLS_ctx.query)), dense: (true), }));
                        ({}.QInput);
                        const __VLS_22 = __VLS_21({ ...{}, class: (" q-mb-md"), modelValue: ((__VLS_ctx.query)), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, class: (" q-mb-md"), modelValue: ((__VLS_ctx.query)), dense: (true), }));
                        {
                            const __VLS_25 = __VLS_intrinsicElements["template"];
                            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                            const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, }));
                            {
                                (__VLS_23.slots).prepend;
                                {
                                    const __VLS_29 = {}.QIcon;
                                    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{}, name: ("mdi-magnify"), }));
                                    ({}.QIcon);
                                    const __VLS_31 = __VLS_30({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
                                    ({}({ ...{}, name: ("mdi-magnify"), }));
                                    const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
                                }
                                // @ts-ignore
                                [query, query, query,];
                            }
                        }
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    {
                        const __VLS_34 = {}.QScrollArea;
                        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{}, class: (" left"), }));
                        ({}.QScrollArea);
                        const __VLS_36 = __VLS_35({ ...{}, class: (" left"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
                        ({}({ ...{}, class: (" left"), }));
                        {
                            const __VLS_39 = {}.QTree;
                            const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{}, nodes: ((__VLS_ctx.tree.tree)), selected: ((__VLS_ctx.selected)), expanded: ((__VLS_ctx.expanded)), selectedColor: ("blue-10"), noSelectionUnset: (true), defaultExpandAll: (true), nodeKey: ("id"), }));
                            ({}.QTree);
                            const __VLS_41 = __VLS_40({ ...{}, nodes: ((__VLS_ctx.tree.tree)), selected: ((__VLS_ctx.selected)), expanded: ((__VLS_ctx.expanded)), selectedColor: ("blue-10"), noSelectionUnset: (true), defaultExpandAll: (true), nodeKey: ("id"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                            ({}({ ...{}, nodes: ((__VLS_ctx.tree.tree)), selected: ((__VLS_ctx.selected)), expanded: ((__VLS_ctx.expanded)), selectedColor: ("blue-10"), noSelectionUnset: (true), defaultExpandAll: (true), nodeKey: ("id"), }));
                            {
                                const __VLS_44 = __VLS_intrinsicElements["template"];
                                const __VLS_45 = __VLS_elementAsFunctionalComponent(__VLS_44);
                                const __VLS_46 = __VLS_45({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
                                ({}({ ...{}, }));
                                {
                                    const [prop] = __VLS_getSlotParams((__VLS_42.slots)["default-header"]);
                                    {
                                        const __VLS_48 = __VLS_intrinsicElements["div"];
                                        const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
                                        const __VLS_50 = __VLS_49({ ...{ 'onClick': {}, }, class: (" node"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                                        ({}({ ...{ 'onClick': {}, }, class: (" node"), }));
                                        let __VLS_53 = { 'click': __VLS_pickEvent(__VLS_52['click'], {}.onClick) };
                                        __VLS_53 = { click: $event => {
                                                __VLS_ctx.goto(prop.node);
                                                // @ts-ignore
                                                [tree, selected, expanded, tree, selected, expanded, tree, selected, expanded, goto,];
                                            }
                                        };
                                        {
                                            const __VLS_54 = __VLS_intrinsicElements["label"];
                                            const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                                            const __VLS_56 = __VLS_55({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                                            ({}({ ...{}, }));
                                            (prop.node.label);
                                            (__VLS_57.slots).default;
                                            const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
                                        }
                                        (__VLS_51.slots).default;
                                        const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                                        let __VLS_52;
                                    }
                                }
                            }
                            const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
                        }
                        (__VLS_37.slots).default;
                        const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_59 = __VLS_intrinsicElements["div"];
                    const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
                    const __VLS_61 = __VLS_60({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                    ({}({ ...{}, }));
                    if (__VLS_ctx.save) {
                        {
                            const __VLS_64 = __VLS_intrinsicElements["div"];
                            const __VLS_65 = __VLS_elementAsFunctionalComponent(__VLS_64);
                            const __VLS_66 = __VLS_65({ ...{}, class: (" q-gutter-x-sm text-right q-mb-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                            ({}({ ...{}, class: (" q-gutter-x-sm text-right q-mb-sm"), }));
                            {
                                const __VLS_69 = {}.QBtn;
                                const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), size: ("sm"), }));
                                ({}.QBtn);
                                const __VLS_71 = __VLS_70({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                                ({}({ ...{}, flat: (true), color: ("primary"), label: ("Отмена"), size: ("sm"), }));
                                const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
                            }
                            {
                                const __VLS_74 = {}.QBtn;
                                const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить изменения"), size: ("sm"), }));
                                ({}.QBtn);
                                const __VLS_76 = __VLS_75({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить изменения"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                                ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Сохранить изменения"), size: ("sm"), }));
                                const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                            }
                            (__VLS_67.slots).default;
                            const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                        }
                        // @ts-ignore
                        [save,];
                    }
                    {
                        const __VLS_79 = {}.QScrollArea;
                        const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{}, class: (({ save: __VLS_ctx.save })), }));
                        ({}.QScrollArea);
                        const __VLS_81 = __VLS_80({ ...{}, class: (({ save: __VLS_ctx.save })), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                        ({}({ ...{}, class: (({ save: __VLS_ctx.save })), }));
                        __VLS_styleScopedClasses = ({ save: save });
                        {
                            const __VLS_84 = {}.RouterView;
                            const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{}, }));
                            ({}.RouterView);
                            const __VLS_86 = __VLS_85({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                            ({}({ ...{}, }));
                            {
                                const [{ Component, route }] = __VLS_getSlotParams((__VLS_87.slots).default);
                                {
                                    const __VLS_89 = (Component);
                                    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{}, is: ((Component)), }));
                                    const __VLS_91 = __VLS_90({ ...{}, is: ((Component)), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                                    ({}({ ...{}, is: ((Component)), }));
                                    const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
                                }
                                // @ts-ignore
                                [save, save, save,];
                                __VLS_87.slots['' /* empty slot name completion */];
                            }
                            const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
                        }
                        (__VLS_82.slots).default;
                        const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
                    }
                    (__VLS_62.slots).default;
                    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["q-mb-md"];
        __VLS_styleScopedClasses["left"];
        __VLS_styleScopedClasses["node"];
        __VLS_styleScopedClasses["q-gutter-x-sm"];
        __VLS_styleScopedClasses["text-right"];
        __VLS_styleScopedClasses["q-mb-sm"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            tree: tree,
            selected: selected,
            expanded: expanded,
            query: query,
            goto: goto,
            save: save,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Setup1.vue.js.map