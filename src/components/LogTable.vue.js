/* __placeholder__ */
import { ref, reactive } from 'vue';
import { headers, actions } from '@/stores/actions';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const filter = ref('');
const time = reactive([
    { id: 0, label: 'Сегодня', selected: false },
    { id: 1, label: 'Вчера', selected: false },
    { id: 2, label: 'Эта неделя', selected: false },
]);
const par = reactive([
    { id: 0, label: 'Параметр', selected: false },
    { id: 1, label: 'Параметр', selected: false },
    { id: 2, label: 'Параметр', selected: false },
]);
const select = (index, arr) => {
    arr.map((e) => {
        return (e.selected = false);
    });
    arr[index].selected = true;
};
const selected = ref([]);
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    __VLS_intrinsicElements.template;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_components.QChip;
    __VLS_components.qChip;
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip, QChip,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip, QTooltip, QTooltip,];
    __VLS_components.QTable;
    __VLS_components.qTable;
    // @ts-ignore
    [QTable,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" row justify-between items-center q-mt-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" row justify-between items-center q-mt-lg"), }));
        {
            const __VLS_5 = {}.QInput;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Поиск"), }));
            ({}.QInput);
            const __VLS_7 = __VLS_6({ ...{}, modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Поиск"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, modelValue: ((__VLS_ctx.filter)), dense: (true), clearable: (true), placeholder: ("Поиск"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["template"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    (__VLS_8.slots).prepend;
                    {
                        const __VLS_14 = {}.QIcon;
                        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{}, name: ("mdi-magnify"), }));
                        ({}.QIcon);
                        const __VLS_16 = __VLS_15({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                        ({}({ ...{}, name: ("mdi-magnify"), }));
                        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
                    }
                    // @ts-ignore
                    [filter, filter, filter,];
                }
            }
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_19 = __VLS_intrinsicElements["div"];
            const __VLS_20 = __VLS_elementAsFunctionalComponent(__VLS_19);
            const __VLS_21 = __VLS_20({ ...{}, class: (" q-gutter-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
            ({}({ ...{}, class: (" q-gutter-xs"), }));
            for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.time))) {
                {
                    const __VLS_24 = {}.QChip;
                    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {}, }, key: ((item.id)), selected: ((item.selected)), }));
                    ({}.QChip);
                    const __VLS_26 = __VLS_25({ ...{ 'onClick': {}, }, key: ((item.id)), selected: ((item.selected)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                    ({}({ ...{ 'onClick': {}, }, key: ((item.id)), selected: ((item.selected)), }));
                    let __VLS_29 = { 'click': __VLS_pickEvent(__VLS_28['click'], {}.onClick) };
                    __VLS_29 = { click: $event => {
                            __VLS_ctx.select(index, __VLS_ctx.time);
                            // @ts-ignore
                            [time, select, time,];
                        }
                    };
                    (item.label);
                    (__VLS_27.slots).default;
                    const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                    let __VLS_28;
                }
            }
            (__VLS_22.slots).default;
            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
        }
        {
            const __VLS_30 = __VLS_intrinsicElements["div"];
            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
            const __VLS_32 = __VLS_31({ ...{}, class: (" q-gutter-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{}, class: (" q-gutter-xs"), }));
            for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.par))) {
                {
                    const __VLS_35 = {}.QChip;
                    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ 'onClick': {}, }, key: ((item.id)), selected: ((item.selected)), }));
                    ({}.QChip);
                    const __VLS_37 = __VLS_36({ ...{ 'onClick': {}, }, key: ((item.id)), selected: ((item.selected)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{ 'onClick': {}, }, key: ((item.id)), selected: ((item.selected)), }));
                    let __VLS_40 = { 'click': __VLS_pickEvent(__VLS_39['click'], {}.onClick) };
                    __VLS_40 = { click: $event => {
                            __VLS_ctx.select(index, __VLS_ctx.par);
                            // @ts-ignore
                            [par, select, par,];
                        }
                    };
                    (item.label);
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    let __VLS_39;
                }
            }
            (__VLS_33.slots).default;
            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        }
        {
            const __VLS_41 = __VLS_intrinsicElements["div"];
            const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
            const __VLS_43 = __VLS_42({ ...{}, class: (" q-gutter-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
            ({}({ ...{}, class: (" q-gutter-xs"), }));
            {
                const __VLS_46 = {}.QBtn;
                const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, flat: (true), round: (true), icon: ("mdi-reload"), }));
                ({}.QBtn);
                const __VLS_48 = __VLS_47({ ...{}, flat: (true), round: (true), icon: ("mdi-reload"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                ({}({ ...{}, flat: (true), round: (true), icon: ("mdi-reload"), }));
                {
                    const __VLS_51 = {}.QTooltip;
                    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, }));
                    ({}.QTooltip);
                    const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                    ({}({ ...{}, }));
                    (__VLS_54.slots).default;
                    const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                }
                (__VLS_49.slots).default;
                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
            }
            {
                const __VLS_56 = {}.QBtn;
                const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, flat: (true), round: (true), icon: ("mdi-backup-restore"), }));
                ({}.QBtn);
                const __VLS_58 = __VLS_57({ ...{}, flat: (true), round: (true), icon: ("mdi-backup-restore"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                ({}({ ...{}, flat: (true), round: (true), icon: ("mdi-backup-restore"), }));
                {
                    const __VLS_61 = {}.QTooltip;
                    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, }));
                    ({}.QTooltip);
                    const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                    ({}({ ...{}, }));
                    (__VLS_64.slots).default;
                    const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                }
                (__VLS_59.slots).default;
                const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
            }
            {
                const __VLS_66 = {}.QBtn;
                const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, flat: (true), round: (true), icon: ("mdi-microsoft-excel"), }));
                ({}.QBtn);
                const __VLS_68 = __VLS_67({ ...{}, flat: (true), round: (true), icon: ("mdi-microsoft-excel"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                ({}({ ...{}, flat: (true), round: (true), icon: ("mdi-microsoft-excel"), }));
                {
                    const __VLS_71 = {}.QTooltip;
                    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, }));
                    ({}.QTooltip);
                    const __VLS_73 = __VLS_72({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                    ({}({ ...{}, }));
                    (__VLS_74.slots).default;
                    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                }
                (__VLS_69.slots).default;
                const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
            }
            {
                const __VLS_76 = {}.QBtn;
                const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{}, flat: (true), round: (true), icon: ("mdi-delete-outline"), }));
                ({}.QBtn);
                const __VLS_78 = __VLS_77({ ...{}, flat: (true), round: (true), icon: ("mdi-delete-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                ({}({ ...{}, flat: (true), round: (true), icon: ("mdi-delete-outline"), }));
                {
                    const __VLS_81 = {}.QTooltip;
                    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, }));
                    ({}.QTooltip);
                    const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                    ({}({ ...{}, }));
                    (__VLS_84.slots).default;
                    const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                }
                (__VLS_79.slots).default;
                const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
            }
            (__VLS_44.slots).default;
            const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_86 = {}.QTable;
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, class: (" tab"), columns: ((__VLS_ctx.headers)), rows: ((__VLS_ctx.actions)), rowsPerPageOptions: (([0])), rowKey: ("id"), selection: ("multiple"), selected: ((__VLS_ctx.selected)), color: ("secondary"), flat: (true), }));
        ({}.QTable);
        const __VLS_88 = __VLS_87({ ...{}, class: (" tab"), columns: ((__VLS_ctx.headers)), rows: ((__VLS_ctx.actions)), rowsPerPageOptions: (([0])), rowKey: ("id"), selection: ("multiple"), selected: ((__VLS_ctx.selected)), color: ("secondary"), flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        ({}({ ...{}, class: (" tab"), columns: ((__VLS_ctx.headers)), rows: ((__VLS_ctx.actions)), rowsPerPageOptions: (([0])), rowKey: ("id"), selection: ("multiple"), selected: ((__VLS_ctx.selected)), color: ("secondary"), flat: (true), }));
        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-mt-lg"];
        __VLS_styleScopedClasses["q-gutter-xs"];
        __VLS_styleScopedClasses["q-gutter-xs"];
        __VLS_styleScopedClasses["q-gutter-xs"];
        __VLS_styleScopedClasses["tab"];
    }
    var __VLS_slots;
    // @ts-ignore
    [headers, actions, selected, headers, actions, selected, headers, actions, selected,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            headers: headers,
            actions: actions,
            filter: filter,
            time: time,
            par: par,
            select: select,
            selected: selected,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=LogTable.vue.js.map