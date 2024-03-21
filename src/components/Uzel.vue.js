/* __placeholder__ */
import { ref, reactive } from 'vue';
import GreyBlock2 from '@/components/GreyBlock2.vue';
import AddProcess from '@/components/AddProcess.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    name: {
        type: String,
        default: 'name',
    },
});
const processes = reactive([{ name: 'Coolname' }]);
const dialog = ref(false);
const add = () => {
    dialog.value = !dialog.value;
};
const addProcess = (e) => {
    processes.push({ name: e });
    dialog.value = false;
};
const delProcess = (e) => {
    let index = processes.indexOf((item) => item.name === e);
    processes.splice(index, 1);
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
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" grid2"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" grid2"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" left"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" left"), }));
                {
                    const __VLS_15 = {}.QIcon;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, name: ("mdi-circle-slice-8"), size: ("26px"), color: ("green"), }));
                    ({}.QIcon);
                    const __VLS_17 = __VLS_16({ ...{}, name: ("mdi-circle-slice-8"), size: ("26px"), color: ("green"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, name: ("mdi-circle-slice-8"), size: ("26px"), color: ("green"), }));
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_20 = __VLS_intrinsicElements["span"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, }));
                    (props.name);
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_25 = __VLS_intrinsicElements["div"];
                const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                const __VLS_27 = __VLS_26({ ...{}, class: (" q-gutter-x-sm text-right"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, class: (" q-gutter-x-sm text-right"), }));
                {
                    const __VLS_30 = {}.QChip;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, color: ("warning"), }));
                    ({}.QChip);
                    const __VLS_32 = __VLS_31({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, color: ("warning"), }));
                    (__VLS_ctx.processes.length);
                    (__VLS_33.slots).default;
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
                {
                    const __VLS_41 = {}.QBtn;
                    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, flat: (true), round: (true), icon: ("mdi-reload"), }));
                    ({}.QBtn);
                    const __VLS_43 = __VLS_42({ ...{}, flat: (true), round: (true), icon: ("mdi-reload"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{}, flat: (true), round: (true), icon: ("mdi-reload"), }));
                    {
                        const __VLS_46 = {}.QTooltip;
                        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                        ({}({ ...{}, }));
                        (__VLS_49.slots).default;
                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    }
                    (__VLS_44.slots).default;
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                }
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.processes))) {
            {
                const __VLS_51 = (__VLS_ctx.GreyBlock2);
                const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onDel': {}, }, is: ((__VLS_ctx.GreyBlock2)), key: ((item.name)), name: ((item.name)), }));
                const __VLS_53 = __VLS_52({ ...{ 'onDel': {}, }, is: ((__VLS_ctx.GreyBlock2)), key: ((item.name)), name: ((item.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                ({}({ ...{ 'onDel': {}, }, is: ((__VLS_ctx.GreyBlock2)), key: ((item.name)), name: ((item.name)), }));
                let __VLS_56 = { 'del': __VLS_pickEvent(__VLS_55['del'], {}.onDel) };
                __VLS_56 = { del: (__VLS_ctx.delProcess) };
                const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                let __VLS_55;
            }
            // @ts-ignore
            [processes, add, processes, GreyBlock2, GreyBlock2, GreyBlock2, GreyBlock2, delProcess,];
        }
        {
            const __VLS_57 = (__VLS_ctx.AddProcess);
            const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddProcess)), modelValue: ((__VLS_ctx.dialog)), }));
            const __VLS_59 = __VLS_58({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddProcess)), modelValue: ((__VLS_ctx.dialog)), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
            ({}({ ...{ 'onAdd': {}, }, is: ((__VLS_ctx.AddProcess)), modelValue: ((__VLS_ctx.dialog)), }));
            let __VLS_62 = { 'add': __VLS_pickEvent(__VLS_61['add'], {}.onAdd) };
            __VLS_62 = { add: (__VLS_ctx.addProcess) };
            const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
            let __VLS_61;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["grid2"];
        __VLS_styleScopedClasses["left"];
        __VLS_styleScopedClasses["q-gutter-x-sm"];
        __VLS_styleScopedClasses["text-right"];
    }
    var __VLS_slots;
    // @ts-ignore
    [AddProcess, AddProcess, dialog, AddProcess, dialog, AddProcess, dialog, addProcess,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            GreyBlock2: GreyBlock2,
            AddProcess: AddProcess,
            processes: processes,
            dialog: dialog,
            add: add,
            addProcess: addProcess,
            delProcess: delProcess,
        };
    },
    props: {
        name: {
            type: String,
            default: 'name',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        name: {
            type: String,
            default: 'name',
        },
    },
});
//# sourceMappingURL=Uzel.vue.js.map