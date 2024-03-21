/* __placeholder__ */
import { ref, computed, reactive } from 'vue';
import { useConfig } from '@/stores/configuration';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const config = useConfig();
const selChip = ref(0);
const chips = reactive([
    { id: 0, selected: true, label: 'Все' },
    { id: 1, selected: false, label: 'Тестовая среда' },
    { id: 2, selected: false, label: 'Прод' },
]);
const select = ((e) => {
    chips.map(item => item.selected = false);
    e.selected = true;
    selChip.value = e.id;
});
const pagination = {
    sortBy: 'name',
    rowsPerPage: 0
};
const filteredRows = computed(() => {
    switch (selChip.value) {
        case 1:
            return config.rows.filter(e => e.env === 'test');
        case 2:
            return config.rows.filter(e => e.env === 'prod');
        default:
            return config.rows;
    }
});
const compRows = computed(() => {
    return config.selectedRow.computers;
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
    __VLS_components.QTable;
    __VLS_components.qTable;
    __VLS_components.QTable;
    __VLS_components.qTable;
    // @ts-ignore
    [QTable, QTable,];
    __VLS_intrinsicElements.template;
    __VLS_components.QTr;
    __VLS_components.qTr;
    // @ts-ignore
    [QTr,];
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    // @ts-ignore
    [QTd, QTd, QTd, QTd,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" q-ml-sm q-gutter-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" q-ml-sm q-gutter-xs"), }));
        for (const [chip] of __VLS_getVForSourceType((__VLS_ctx.chips))) {
            {
                const __VLS_5 = {}.QChip;
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onClick': {}, }, key: ((chip.id)), selected: ((chip.selected)), }));
                ({}.QChip);
                const __VLS_7 = __VLS_6({ ...{ 'onClick': {}, }, key: ((chip.id)), selected: ((chip.selected)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{ 'onClick': {}, }, key: ((chip.id)), selected: ((chip.selected)), }));
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
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_11 = __VLS_intrinsicElements["div"];
        const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
        const __VLS_13 = __VLS_12({ ...{}, class: (" grid"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ ...{}, class: (" grid"), }));
        {
            const __VLS_16 = __VLS_intrinsicElements["div"];
            const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
            const __VLS_18 = __VLS_17({ ...{}, class: (" left wh"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ ...{}, class: (" left wh"), }));
            {
                const __VLS_21 = {}.QTable;
                const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, flat: (true), columns: ((__VLS_ctx.config.columns0)), rows: ((__VLS_ctx.filteredRows)), rowKey: ("id"), hideBottom: (true), pagination: ((__VLS_ctx.pagination)), color: ("primary"), }));
                ({}.QTable);
                const __VLS_23 = __VLS_22({ ...{}, flat: (true), columns: ((__VLS_ctx.config.columns0)), rows: ((__VLS_ctx.filteredRows)), rowKey: ("id"), hideBottom: (true), pagination: ((__VLS_ctx.pagination)), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                ({}({ ...{}, flat: (true), columns: ((__VLS_ctx.config.columns0)), rows: ((__VLS_ctx.filteredRows)), rowKey: ("id"), hideBottom: (true), pagination: ((__VLS_ctx.pagination)), color: ("primary"), }));
                {
                    const __VLS_26 = __VLS_intrinsicElements["template"];
                    const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
                    const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                    ({}({ ...{}, }));
                    {
                        const [props] = __VLS_getSlotParams((__VLS_24.slots).body);
                        {
                            const __VLS_30 = {}.QTr;
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {}, }, props: ((props)), class: (({ cool: props.row.selected })), }));
                            ({}.QTr);
                            const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, props: ((props)), class: (({ cool: props.row.selected })), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{ 'onClick': {}, }, props: ((props)), class: (({ cool: props.row.selected })), }));
                            __VLS_styleScopedClasses = ({ cool: props.row.selected });
                            let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], {}.onClick) };
                            __VLS_35 = { click: $event => {
                                    __VLS_ctx.config.selectRow(props.row);
                                    // @ts-ignore
                                    [config, filteredRows, pagination, config, filteredRows, pagination, config, filteredRows, pagination, config,];
                                }
                            };
                            {
                                const __VLS_36 = {}.QTd;
                                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, props: ((props)), key: ("module"), }));
                                ({}.QTd);
                                const __VLS_38 = __VLS_37({ ...{}, props: ((props)), key: ("module"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                                ({}({ ...{}, props: ((props)), key: ("module"), }));
                                (props.row.module);
                                (__VLS_39.slots).default;
                                const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                            }
                            {
                                const __VLS_41 = {}.QTd;
                                const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, props: ((props)), key: ("name"), }));
                                ({}.QTd);
                                const __VLS_43 = __VLS_42({ ...{}, props: ((props)), key: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                                ({}({ ...{}, props: ((props)), key: ("name"), }));
                                (props.row.name);
                                (__VLS_44.slots).default;
                                const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                            }
                            {
                                const __VLS_46 = {}.QTd;
                                const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, props: ((props)), key: ("env"), }));
                                ({}.QTd);
                                const __VLS_48 = __VLS_47({ ...{}, props: ((props)), key: ("env"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                                ({}({ ...{}, props: ((props)), key: ("env"), }));
                                (props.row.env);
                                (__VLS_49.slots).default;
                                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                            }
                            {
                                const __VLS_51 = {}.QTd;
                                const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, props: ((props)), key: ("computers"), }));
                                ({}.QTd);
                                const __VLS_53 = __VLS_52({ ...{}, props: ((props)), key: ("computers"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                ({}({ ...{}, props: ((props)), key: ("computers"), }));
                                (props.row.computers);
                                (__VLS_54.slots).default;
                                const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                            }
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                            let __VLS_34;
                        }
                    }
                }
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
            }
            (__VLS_19.slots).default;
            const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        }
        {
            const __VLS_56 = __VLS_intrinsicElements["div"];
            const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
            const __VLS_58 = __VLS_57({ ...{}, class: (" to"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
            ({}({ ...{}, class: (" to"), }));
            {
                const __VLS_61 = {}.QIcon;
                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, name: ("mdi-arrow-right-bold"), size: ("lg"), }));
                ({}.QIcon);
                const __VLS_63 = __VLS_62({ ...{}, name: ("mdi-arrow-right-bold"), size: ("lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                ({}({ ...{}, name: ("mdi-arrow-right-bold"), size: ("lg"), }));
                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
            }
            (__VLS_59.slots).default;
            const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
        }
        {
            const __VLS_66 = __VLS_intrinsicElements["div"];
            const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
            const __VLS_68 = __VLS_67({ ...{}, class: (" right wh"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
            ({}({ ...{}, class: (" right wh"), }));
            {
                const __VLS_71 = {}.QTable;
                const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, flat: (true), columns: ((__VLS_ctx.config.columns1)), rows: ((__VLS_ctx.compRows)), hideBottom: (true), }));
                ({}.QTable);
                const __VLS_73 = __VLS_72({ ...{}, flat: (true), columns: ((__VLS_ctx.config.columns1)), rows: ((__VLS_ctx.compRows)), hideBottom: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                ({}({ ...{}, flat: (true), columns: ((__VLS_ctx.config.columns1)), rows: ((__VLS_ctx.compRows)), hideBottom: (true), }));
                const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
            }
            (__VLS_69.slots).default;
            const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        }
        (__VLS_14.slots).default;
        const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["q-gutter-xs"];
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["left"];
        __VLS_styleScopedClasses["wh"];
        __VLS_styleScopedClasses["to"];
        __VLS_styleScopedClasses["right"];
        __VLS_styleScopedClasses["wh"];
    }
    var __VLS_slots;
    // @ts-ignore
    [config, compRows, config, compRows, config, compRows,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            config: config,
            chips: chips,
            select: select,
            pagination: pagination,
            filteredRows: filteredRows,
            compRows: compRows,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=ConfigPanel01.vue.js.map