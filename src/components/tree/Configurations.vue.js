/* __placeholder__ */
import { ref } from 'vue';
import AddDialogCommon from '@/components/AddDialogCommon.vue';
import { useStore } from '@/stores/store';
import { useTree } from '@/stores/tree';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const store = useStore();
const tree = useTree();
const cols = [
    {
        label: 'Название',
        align: 'left',
        sortable: true,
        name: 'label',
        field: 'label',
    },
    {
        label: 'Модуль',
        align: 'left',
        sortable: true,
        name: 'module',
        field: 'module',
    },
    {
        label: 'Среда',
        align: 'left',
        sortable: true,
        name: 'env',
        field: 'env',
    },
    {
        label: 'Описание',
        align: 'left',
        sortable: true,
        name: 'descr',
        field: 'descr',
    },
    {
        label: '',
        align: 'left',
        sortable: true,
        name: 'action',
        field: 'action',
    },
];
const remove = (e) => {
    tree.removeConfig(e);
};
const dialog = ref(false);
const add = () => {
    dialog.value = !dialog.value;
};
const addConfig = (e) => {
    tree.addConfig(e);
};
const goto = (evt, row, idx) => {
    router.push(`/setup1/appserver/configurations/${row.id}`);
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
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip,];
    __VLS_components.QTable;
    __VLS_components.qTable;
    // @ts-ignore
    [QTable,];
    __VLS_intrinsicElements.template;
    __VLS_components.QTd;
    __VLS_components.qTd;
    // @ts-ignore
    [QTd,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn,];
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
    // @ts-ignore
    [QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection,];
    __VLS_intrinsicElements.br;
    __VLS_components.AddDialogCommon;
    __VLS_components.AddDialogCommon;
    // @ts-ignore
    [AddDialogCommon,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" treepage"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" treepage"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" mainzag"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" mainzag"), }));
            {
                const __VLS_10 = {}.QIcon;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: (" q-mr-md"), name: ("mdi-hammer-wrench"), color: ("secondary"), size: ("md"), }));
                ({}.QIcon);
                const __VLS_12 = __VLS_11({ ...{}, class: (" q-mr-md"), name: ("mdi-hammer-wrench"), color: ("secondary"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" q-mr-md"), name: ("mdi-hammer-wrench"), color: ("secondary"), size: ("md"), }));
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["span"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_20 = {}.QSpace;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
                ({}.QSpace);
                const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, }));
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            {
                const __VLS_25 = {}.QChip;
                const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, color: ("warning"), }));
                ({}.QChip);
                const __VLS_27 = __VLS_26({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, color: ("warning"), }));
                (__VLS_ctx.store.config.length);
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_30 = {}.QTable;
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onRowClick': {}, }, columns: ((__VLS_ctx.cols)), rows: ((__VLS_ctx.tree.configs)), hidePagination: (true), rowKey: ("id"), }));
            ({}.QTable);
            const __VLS_32 = __VLS_31({ ...{ 'onRowClick': {}, }, columns: ((__VLS_ctx.cols)), rows: ((__VLS_ctx.tree.configs)), hidePagination: (true), rowKey: ("id"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{ 'onRowClick': {}, }, columns: ((__VLS_ctx.cols)), rows: ((__VLS_ctx.tree.configs)), hidePagination: (true), rowKey: ("id"), }));
            let __VLS_35 = { 'row-click': __VLS_pickEvent(__VLS_34['row-click'], {}.onRowClick) };
            __VLS_35 = { "row-click": (__VLS_ctx.goto) };
            {
                const __VLS_36 = __VLS_intrinsicElements["template"];
                const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({ ...{}, }));
                {
                    const [props] = __VLS_getSlotParams((__VLS_33.slots)["body-cell-action"]);
                    {
                        const __VLS_40 = {}.QTd;
                        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, class: (" text-right"), props: ((props)), }));
                        ({}.QTd);
                        const __VLS_42 = __VLS_41({ ...{}, class: (" text-right"), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                        ({}({ ...{}, class: (" text-right"), props: ((props)), }));
                        {
                            const __VLS_45 = {}.QBtn;
                            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ 'onClick': {}, }, class: (" q-mr-md"), flat: (true), dense: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                            ({}.QBtn);
                            const __VLS_47 = __VLS_46({ ...{ 'onClick': {}, }, class: (" q-mr-md"), flat: (true), dense: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                            ({}({ ...{ 'onClick': {}, }, class: (" q-mr-md"), flat: (true), dense: (true), round: (true), icon: ("mdi-trash-can-outline"), size: ("sm"), }));
                            let __VLS_50 = { 'click': __VLS_pickEvent(__VLS_49['click'], {}.onClick) };
                            __VLS_50 = { click: () => { } };
                            {
                                const __VLS_51 = {}.QMenu;
                                const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, }));
                                ({}.QMenu);
                                const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                ({}({ ...{}, }));
                                {
                                    const __VLS_56 = {}.QList;
                                    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, }));
                                    ({}.QList);
                                    const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                                    ({}({ ...{}, }));
                                    {
                                        const __VLS_61 = {}.QItem;
                                        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                        ({}.QItem);
                                        const __VLS_63 = __VLS_62({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                                        ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                        let __VLS_66 = { 'click': __VLS_pickEvent(__VLS_65['click'], {}.onClick) };
                                        __VLS_66 = { click: $event => {
                                                __VLS_ctx.remove(props.row.id);
                                                // @ts-ignore
                                                [store, cols, tree, cols, tree, cols, tree, goto, remove,];
                                            }
                                        };
                                        {
                                            const __VLS_67 = {}.QItemSection;
                                            const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{}, }));
                                            ({}.QItemSection);
                                            const __VLS_69 = __VLS_68({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                                            ({}({ ...{}, }));
                                            (__VLS_70.slots).default;
                                            const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
                                        }
                                        (__VLS_64.slots).default;
                                        const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                                        let __VLS_65;
                                    }
                                    (__VLS_59.slots).default;
                                    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                                }
                                (__VLS_54.slots).default;
                                const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                            }
                            (__VLS_48.slots).default;
                            const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                            let __VLS_49;
                        }
                        {
                            const __VLS_72 = {}.QBtn;
                            const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{}, props: ((props)), round: (true), flat: (true), icon: ('mdi-chevron-right'), size: ('md'), dense: (true), }));
                            ({}.QBtn);
                            const __VLS_74 = __VLS_73({ ...{}, props: ((props)), round: (true), flat: (true), icon: ('mdi-chevron-right'), size: ('md'), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                            ({}({ ...{}, props: ((props)), round: (true), flat: (true), icon: ('mdi-chevron-right'), size: ('md'), dense: (true), }));
                            const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                        }
                        (__VLS_43.slots).default;
                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                    }
                }
            }
            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            let __VLS_34;
        }
        {
            const __VLS_77 = __VLS_intrinsicElements["br"];
            const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
            const __VLS_79 = __VLS_78({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
            ({}({ ...{}, }));
            const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79);
        }
        {
            const __VLS_82 = {}.QBtn;
            const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Добавить конфигурацию"), }));
            ({}.QBtn);
            const __VLS_84 = __VLS_83({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Добавить конфигурацию"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
            ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Добавить конфигурацию"), }));
            let __VLS_87 = { 'click': __VLS_pickEvent(__VLS_86['click'], {}.onClick) };
            __VLS_87 = { click: (__VLS_ctx.add) };
            const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
            let __VLS_86;
        }
        {
            const __VLS_88 = {}.AddDialogCommon;
            const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{ 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), dv: (true), }));
            ({}.AddDialogCommon);
            const __VLS_90 = __VLS_89({ ...{ 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), dv: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
            ({}({ ...{ 'onAdd': {}, }, modelValue: ((__VLS_ctx.dialog)), dv: (true), }));
            let __VLS_93 = { 'add': __VLS_pickEvent(__VLS_92['add'], {}.onAdd) };
            __VLS_93 = { add: (__VLS_ctx.addConfig) };
            const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
            let __VLS_92;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["treepage"];
        __VLS_styleScopedClasses["mainzag"];
        __VLS_styleScopedClasses["q-mr-md"];
        __VLS_styleScopedClasses["text-right"];
        __VLS_styleScopedClasses["q-mr-md"];
        __VLS_styleScopedClasses["pink"];
    }
    var __VLS_slots;
    // @ts-ignore
    [add, dialog, dialog, dialog, addConfig,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            AddDialogCommon: AddDialogCommon,
            store: store,
            tree: tree,
            cols: cols,
            remove: remove,
            dialog: dialog,
            add: add,
            addConfig: addConfig,
            goto: goto,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Configurations.vue.js.map