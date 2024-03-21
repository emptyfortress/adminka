/* __placeholder__ */
// import { ref } from 'vue'
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// import { ref } from 'vue'
const items = [
    { id: 0, label: 'ChangeObjectDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 1, label: 'CursorDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 2, label: 'FileCursorDataBaseType', val: 'UseOwnDatabase' },
    { id: 3, label: 'IconDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 4, label: 'KeysetDataBaseType', val: 'UseTemporaryDatabase' },
    { id: 5, label: 'SearchDataBaseType', val: 'UseTemporaryDatabase' },
];
const options = [
    'UseDefaultOrCurrent',
    'UseOwnDatabase',
    'UseOuterDatabase',
    'UseTemporaryDatabase',
];
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
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.label;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
    {
        const __VLS_0 = {}.QExpansionItem;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, label: ("Размещение таблиц"), headerClass: ("text-bold"), }));
        ({}.QExpansionItem);
        const __VLS_2 = __VLS_1({ ...{}, label: ("Размещение таблиц"), headerClass: ("text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, label: ("Размещение таблиц"), headerClass: ("text-bold"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" mygrid q-pa-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" mygrid q-pa-md"), }));
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
                {
                    const __VLS_10 = __VLS_intrinsicElements["label"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, }));
                    (item.label);
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
                {
                    const __VLS_15 = {}.QSelect;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, modelValue: ((item.val)), options: ((__VLS_ctx.options)), dense: (true), outlined: (true), bgColor: ("white"), }));
                    ({}.QSelect);
                    const __VLS_17 = __VLS_16({ ...{}, modelValue: ((item.val)), options: ((__VLS_ctx.options)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, modelValue: ((item.val)), options: ((__VLS_ctx.options)), dense: (true), outlined: (true), bgColor: ("white"), }));
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                // @ts-ignore
                [items, options, options, options,];
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["mygrid"];
        __VLS_styleScopedClasses["q-pa-md"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            items: items,
            options: options,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Step25.vue.js.map