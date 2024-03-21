/* __placeholder__ */
import { ref, reactive } from 'vue';
import GreyBlock from '@/components/GreyBlock.vue';
import AddDialogCommon from '@/components/AddDialogCommon.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const type = ref('Почтовый сервер');
const connections = reactive([{ name: 'd6d224' }]);
const dialog = ref(false);
const add = () => {
    dialog.value = !dialog.value;
};
const addConnection = (e) => {
    connections.push({ name: e });
    dialog.value = false;
};
const del = (e) => {
    let index = connections.indexOf((item) => item.name === e);
    connections.splice(index, 1);
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
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
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
            const __VLS_10 = {}.QCard;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: (" card"), }));
            ({}.QCard);
            const __VLS_12 = __VLS_11({ ...{}, class: (" card"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" card"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: (" row items-baseline q-gutter-x-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" row items-baseline q-gutter-x-md"), }));
                {
                    const __VLS_20 = {}.QSelect;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, modelValue: ((__VLS_ctx.type)), label: ("Тип соединения"), disable: (true), }));
                    ({}.QSelect);
                    const __VLS_22 = __VLS_21({ ...{}, modelValue: ((__VLS_ctx.type)), label: ("Тип соединения"), disable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.type)), label: ("Тип соединения"), disable: (true), }));
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.QChip;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, color: ("warning"), }));
                    ({}.QChip);
                    const __VLS_27 = __VLS_26({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, color: ("warning"), }));
                    (__VLS_ctx.connections.length);
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = {}.QSpace;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, }));
                    ({}.QSpace);
                    const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, }));
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_35 = {}.QBtn;
                    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ 'onClick': {}, }, color: ("primary"), unelevated: (true), }));
                    ({}.QBtn);
                    const __VLS_37 = __VLS_36({ ...{ 'onClick': {}, }, color: ("primary"), unelevated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{ 'onClick': {}, }, color: ("primary"), unelevated: (true), }));
                    let __VLS_40 = { 'click': __VLS_pickEvent(__VLS_39['click'], {}.onClick) };
                    __VLS_40 = { click: (__VLS_ctx.add) };
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    let __VLS_39;
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.connections))) {
                {
                    const __VLS_41 = (__VLS_ctx.GreyBlock);
                    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{ 'onDelete': {}, 'onDuble': {}, }, is: ((__VLS_ctx.GreyBlock)), key: ((item.name)), name: ((item.name)), }));
                    const __VLS_43 = __VLS_42({ ...{ 'onDelete': {}, 'onDuble': {}, }, is: ((__VLS_ctx.GreyBlock)), key: ((item.name)), name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{ 'onDelete': {}, 'onDuble': {}, }, is: ((__VLS_ctx.GreyBlock)), key: ((item.name)), name: ((item.name)), }));
                    let __VLS_46 = { 'delete': __VLS_pickEvent(__VLS_45['delete'], {}.onDelete) };
                    __VLS_46 = { delete: (__VLS_ctx.del) };
                    let __VLS_47 = { 'duble': __VLS_pickEvent(__VLS_45['duble'], {}.onDuble) };
                    __VLS_47 = { duble: (__VLS_ctx.addConnection) };
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                    let __VLS_45;
                }
                // @ts-ignore
                [type, type, type, connections, add, connections, GreyBlock, GreyBlock, GreyBlock, GreyBlock, del, addConnection,];
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_48 = (__VLS_ctx.AddDialogCommon);
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddDialogCommon)), modelValue: ((__VLS_ctx.dialog)), }));
            const __VLS_50 = __VLS_49({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddDialogCommon)), modelValue: ((__VLS_ctx.dialog)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddDialogCommon)), modelValue: ((__VLS_ctx.dialog)), }));
            let __VLS_53 = { 'add': __VLS_pickEvent(__VLS_52['add'], {}.onAdd) };
            __VLS_53 = { add: (__VLS_ctx.addConnection) };
            const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
            let __VLS_52;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["zag"];
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-baseline"];
        __VLS_styleScopedClasses["q-gutter-x-md"];
    }
    var __VLS_slots;
    // @ts-ignore
    [AddDialogCommon, AddDialogCommon, dialog, AddDialogCommon, dialog, AddDialogCommon, dialog, addConnection,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            GreyBlock: GreyBlock,
            AddDialogCommon: AddDialogCommon,
            type: type,
            connections: connections,
            dialog: dialog,
            add: add,
            addConnection: addConnection,
            del: del,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Email.vue.js.map