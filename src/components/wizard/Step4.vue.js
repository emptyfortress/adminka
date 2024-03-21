/* __placeholder__ */
import { reactive, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const check = reactive([
    { id: 0, mod: true, label: 'Approval Designer' },
    { id: 1, mod: true, label: 'BackOffice' },
    { id: 2, mod: true, label: 'Platform' },
    { id: 3, mod: true, label: 'DocumentManagement' },
    { id: 4, mod: true, label: 'TakeOffice' },
    { id: 5, mod: true, label: 'WindowsClient' },
    { id: 6, mod: true, label: 'WorkerService' },
    { id: 7, mod: true, label: 'Workflow' },
]);
const table = [
    { id: 0, label: 'Имя', val: 'Конструктор согласований' },
    { id: 1, label: 'Версия пакета установки', val: '5220' },
    { id: 2, label: 'Версия генератора скрипта', val: '5443' },
    { id: 5, label: 'Версия установленного пакета', val: '3212' },
    { id: 3, label: 'Версия БД', val: '--' },
    { id: 4, label: 'Пользовательские метаданные', val: 'Нет' },
];
const simple = [
    {
        label: 'WindowsClient',
        disabled: false,
        children: [
            { label: 'Platform', disabled: true },
            { label: 'TakeOffice', disabled: true },
        ],
    },
    { label: 'Workflow', children: [], disabled: true },
    { label: 'Platform', children: [], disabled: true },
];
const ticked = ref(['WindowsClient', 'Workflow', 'Platform', 'TakeOffice']);
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
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList,];
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem,];
    __VLS_intrinsicElements.template;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_intrinsicElements.label;
    __VLS_components.QTree;
    __VLS_components.qTree;
    // @ts-ignore
    [QTree,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" text-bold"), }));
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_5 = {}.QList;
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-mt-md"), separator: (true), }));
        ({}.QList);
        const __VLS_7 = __VLS_6({ ...{}, class: (" q-mt-md"), separator: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (" q-mt-md"), separator: (true), }));
        for (const [panel] of __VLS_getVForSourceType((__VLS_ctx.check))) {
            {
                const __VLS_10 = {}.QExpansionItem;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, key: ((panel.id)), label: ((panel.label)), }));
                ({}.QExpansionItem);
                const __VLS_12 = __VLS_11({ ...{}, key: ((panel.id)), label: ((panel.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, key: ((panel.id)), label: ((panel.label)), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["template"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    {
                        (__VLS_13.slots).header;
                        {
                            const __VLS_19 = __VLS_intrinsicElements["div"];
                            const __VLS_20 = __VLS_elementAsFunctionalComponent(__VLS_19);
                            const __VLS_21 = __VLS_20({ ...{}, class: (" head"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                            ({}({ ...{}, class: (" head"), }));
                            {
                                const __VLS_24 = __VLS_intrinsicElements["div"];
                                const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
                                const __VLS_26 = __VLS_25({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                                ({}({ ...{}, class: (" title"), }));
                                {
                                    const __VLS_29 = {}.QCheckbox;
                                    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{}, modelValue: ((panel.mod)), dense: (true), label: ((panel.label)), }));
                                    ({}.QCheckbox);
                                    const __VLS_31 = __VLS_30({ ...{}, modelValue: ((panel.mod)), dense: (true), label: ((panel.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
                                    ({}({ ...{}, modelValue: ((panel.mod)), dense: (true), label: ((panel.label)), }));
                                    const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
                                }
                                (__VLS_27.slots).default;
                                const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                            }
                            (__VLS_22.slots).default;
                            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
                        }
                        // @ts-ignore
                        [check,];
                    }
                }
                {
                    const __VLS_34 = {}.QCard;
                    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{}, class: (" mygrid"), }));
                    ({}.QCard);
                    const __VLS_36 = __VLS_35({ ...{}, class: (" mygrid"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
                    ({}({ ...{}, class: (" mygrid"), }));
                    {
                        const __VLS_39 = __VLS_intrinsicElements["div"];
                        const __VLS_40 = __VLS_elementAsFunctionalComponent(__VLS_39);
                        const __VLS_41 = __VLS_40({ ...{}, class: (" form"), flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                        ({}({ ...{}, class: (" form"), flat: (true), }));
                        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.table))) {
                            {
                                const __VLS_44 = __VLS_intrinsicElements["label"];
                                const __VLS_45 = __VLS_elementAsFunctionalComponent(__VLS_44);
                                const __VLS_46 = __VLS_45({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
                                ({}({ ...{}, }));
                                (item.label);
                                (__VLS_47.slots).default;
                                const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
                            }
                            {
                                const __VLS_49 = __VLS_intrinsicElements["div"];
                                const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
                                const __VLS_51 = __VLS_50({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_50));
                                ({}({ ...{}, }));
                                (item.val);
                                (__VLS_52.slots).default;
                                const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
                            }
                            // @ts-ignore
                            [table,];
                        }
                        (__VLS_42.slots).default;
                        const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
                    }
                    {
                        const __VLS_54 = __VLS_intrinsicElements["div"];
                        const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                        const __VLS_56 = __VLS_55({ ...{}, class: (" preview"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                        ({}({ ...{}, class: (" preview"), }));
                        {
                            const __VLS_59 = __VLS_intrinsicElements["div"];
                            const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
                            const __VLS_61 = __VLS_60({ ...{}, class: (" zg q-mb-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                            ({}({ ...{}, class: (" zg q-mb-md"), }));
                            (__VLS_62.slots).default;
                            const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                        }
                        {
                            const __VLS_64 = {}.QTree;
                            const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, nodes: ((__VLS_ctx.simple)), icon: ("mdi-chevron-right"), tickStrategy: ("leaf"), ticked: ((__VLS_ctx.ticked)), color: ("secondary"), dense: (true), nodeKey: ("label"), defaultExpandAll: (true), }));
                            ({}.QTree);
                            const __VLS_66 = __VLS_65({ ...{}, nodes: ((__VLS_ctx.simple)), icon: ("mdi-chevron-right"), tickStrategy: ("leaf"), ticked: ((__VLS_ctx.ticked)), color: ("secondary"), dense: (true), nodeKey: ("label"), defaultExpandAll: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                            ({}({ ...{}, nodes: ((__VLS_ctx.simple)), icon: ("mdi-chevron-right"), tickStrategy: ("leaf"), ticked: ((__VLS_ctx.ticked)), color: ("secondary"), dense: (true), nodeKey: ("label"), defaultExpandAll: (true), }));
                            const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                        }
                        (__VLS_57.slots).default;
                        const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
                    }
                    (__VLS_37.slots).default;
                    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
                }
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            // @ts-ignore
            [simple, ticked, simple, ticked, simple, ticked,];
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["head"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["mygrid"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["preview"];
        __VLS_styleScopedClasses["zg"];
        __VLS_styleScopedClasses["q-mb-md"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            check: check,
            table: table,
            simple: simple,
            ticked: ticked,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Step4.vue.js.map