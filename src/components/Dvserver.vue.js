/* __placeholder__ */
import { ref } from 'vue';
import GreyBlock3 from '@/components/GreyBlock3.vue';
import AddDialogCommon from '@/components/AddDialogCommon.vue';
import { useStore } from '@/stores/store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const dialog = ref(false);
const add = () => {
    dialog.value = !dialog.value;
};
const addConfig = (e) => {
    store.addConfig(e);
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
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
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
                    const __VLS_20 = {}.QChip;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, color: ("warning"), }));
                    ({}.QChip);
                    const __VLS_22 = __VLS_21({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, color: ("warning"), }));
                    (__VLS_ctx.store.config.length);
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.QSpace;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
                    ({}.QSpace);
                    const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = {}.QBtn;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {}, }, color: ("primary"), unelevated: (true), }));
                    ({}.QBtn);
                    const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, color: ("primary"), unelevated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{ 'onClick': {}, }, color: ("primary"), unelevated: (true), }));
                    let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], {}.onClick) };
                    __VLS_35 = { click: (__VLS_ctx.add) };
                    (__VLS_33.slots).default;
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    let __VLS_34;
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.store.config))) {
                {
                    const __VLS_36 = (__VLS_ctx.GreyBlock3);
                    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onDelete': {}, 'onDuble': {}, }, is: ((__VLS_ctx.GreyBlock3)), key: ((item.id)), name: ((item.name)), }));
                    const __VLS_38 = __VLS_37({ ...{ 'onDelete': {}, 'onDuble': {}, }, is: ((__VLS_ctx.GreyBlock3)), key: ((item.id)), name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                    ({}({ ...{ 'onDelete': {}, 'onDuble': {}, }, is: ((__VLS_ctx.GreyBlock3)), key: ((item.id)), name: ((item.name)), }));
                    let __VLS_41 = { 'delete': __VLS_pickEvent(__VLS_40['delete'], {}.onDelete) };
                    __VLS_41 = { delete: $event => {
                            __VLS_ctx.store.removeConfig(item);
                            // @ts-ignore
                            [store, add, store, GreyBlock3, GreyBlock3, GreyBlock3, GreyBlock3, store,];
                        }
                    };
                    let __VLS_42 = { 'duble': __VLS_pickEvent(__VLS_40['duble'], {}.onDuble) };
                    __VLS_42 = { duble: $event => {
                            __VLS_ctx.addConfig(item.name);
                            // @ts-ignore
                            [addConfig,];
                        }
                    };
                    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                    let __VLS_40;
                }
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_43 = (__VLS_ctx.AddDialogCommon);
            const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddDialogCommon)), modelValue: ((__VLS_ctx.dialog)), dv: (true), }));
            const __VLS_45 = __VLS_44({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddDialogCommon)), modelValue: ((__VLS_ctx.dialog)), dv: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
            ({}({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddDialogCommon)), modelValue: ((__VLS_ctx.dialog)), dv: (true), }));
            let __VLS_48 = { 'add': __VLS_pickEvent(__VLS_47['add'], {}.onAdd) };
            __VLS_48 = { add: (__VLS_ctx.addConfig) };
            const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
            let __VLS_47;
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
    [AddDialogCommon, AddDialogCommon, dialog, AddDialogCommon, dialog, AddDialogCommon, dialog, addConfig,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            GreyBlock3: GreyBlock3,
            AddDialogCommon: AddDialogCommon,
            store: store,
            dialog: dialog,
            add: add,
            addConfig: addConfig,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Dvserver.vue.js.map