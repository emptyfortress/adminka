/* __placeholder__ */
import { ref, reactive } from 'vue';
import ChangeDialog from '@/components/setupcomponent/ChangeDialog.vue';
import MasterDatabase from '@/components/setupcomponent/MasterDatabase.vue';
import EditDatabase from '@/components/setupcomponent/EditDatabase.vue';
import { useTabs } from '@/stores/tabs';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const tabs = useTabs();
const emit = defineEmits(['change', 'haserror', 'noerror']);
const change = ref(false);
const bdRow = ref();
const bdTab = ref('control');
const master = ref(false);
const edit = ref(false);
const changename = ref('');
const remove = (row) => {
    const index = rows.indexOf(row);
    rows.splice(index, 1);
};
const edBD = (row, field) => {
    bdRow.value = row;
    bdTab.value = field;
    edit.value = true;
};
const assign = (e) => {
    changename.value = e;
    change.value = true;
};
const assignDef = () => {
    let index = rows.findIndex(item => item.psevdo === changename.value);
    rows.map(item => (item.def = false));
    rows[index].def = true;
    change.value = false;
    // store.panels[2].change = true
};
const columns = [
    {
        name: 'active',
        required: true,
        label: '',
        field: 'active',
        sortable: false,
        align: 'left',
    },
    {
        name: 'psevdo',
        required: true,
        label: 'Псевдоним',
        align: 'left',
        field: 'psevdo',
        sortable: true,
    },
    {
        name: 'server',
        align: 'left',
        label: 'Сервер SQL',
        field: 'server',
        sortable: true,
    },
    {
        name: 'servertype',
        align: 'left',
        label: 'Тип сервера',
        field: 'servertype',
        sortable: true,
    },
    {
        name: 'index',
        align: 'left',
        label: 'Индекс',
        field: 'index',
        sortable: true,
    },
    {
        name: 'version',
        align: 'left',
        label: 'Версия',
        field: 'version',
        sortable: true,
    },
    {
        name: 'cache',
        align: 'left',
        label: 'Кэш',
        field: 'cache',
        sortable: true,
    },
    {
        name: 'date',
        align: 'left',
        label: 'Создано',
        field: 'date',
        sortable: true,
    },
    {
        name: 'def',
        align: 'center',
        label: 'По умолчанию',
        field: 'def',
        sortable: true,
    },
    { name: 'action', align: 'right', label: '', field: '' },
];
const rows = reactive([
    {
        active: true,
        psevdo: 'AGSupport',
        name: 'AGSupport_1',
        servertype: 'SQL Server',
        server: 'Docsvision 1',
        index: 'yes',
        version: 4373,
        cache: 'InMemory',
        date: '20.10.2021',
        def: true,
    },
    {
        active: true,
        psevdo: 'DvTest',
        name: 'AGSupport_2',
        servertype: 'SQL Server',
        server: 'Docsvision 1',
        index: 'yes',
        cache: 'Redis',
        version: 4373,
        date: '04.11.2022',
        def: false,
    },
    {
        active: false,
        psevdo: 'DvShowCase',
        name: 'AGSupport_3',
        servertype: 'PostgreSQL',
        server: 'Docsvision 1',
        cache: 'No cache',
        index: 'yes',
        version: 4373,
        date: '09.07.2021',
        def: false,
    },
]);
const goto = (e) => {
    router.push('/database/' + e.psevdo);
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
    __VLS_components.QTable;
    __VLS_components.qTable;
    // @ts-ignore
    [QTable,];
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
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    __VLS_components.QTd;
    __VLS_components.qTd;
    // @ts-ignore
    [QTd, QTd, QTd, QTd, QTd, QTd, QTd, QTd, QTd, QTd,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
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
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" database"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" database"), }));
        {
            const __VLS_5 = {}.QTable;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-mt-sm"), rows: ((__VLS_ctx.rows)), columns: ((__VLS_ctx.columns)), rowKey: ('name'), hideBottom: (true), }));
            ({}.QTable);
            const __VLS_7 = __VLS_6({ ...{}, class: (" q-mt-sm"), rows: ((__VLS_ctx.rows)), columns: ((__VLS_ctx.columns)), rowKey: ('name'), hideBottom: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" q-mt-sm"), rows: ((__VLS_ctx.rows)), columns: ((__VLS_ctx.columns)), rowKey: ('name'), hideBottom: (true), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["template"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    const [props] = __VLS_getSlotParams((__VLS_8.slots).body);
                    {
                        const __VLS_14 = {}.QTr;
                        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {}, }, props: ((props)), class: (({ cool: props.row.def })), }));
                        ({}.QTr);
                        const __VLS_16 = __VLS_15({ ...{ 'onClick': {}, }, props: ((props)), class: (({ cool: props.row.def })), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                        ({}({ ...{ 'onClick': {}, }, props: ((props)), class: (({ cool: props.row.def })), }));
                        __VLS_styleScopedClasses = ({ cool: props.row.def });
                        let __VLS_19 = { 'click': __VLS_pickEvent(__VLS_18['click'], {}.onClick) };
                        __VLS_19 = { click: $event => {
                                __VLS_ctx.goto(props.row);
                                // @ts-ignore
                                [rows, columns, rows, columns, rows, columns, goto,];
                            }
                        };
                        {
                            const __VLS_20 = {}.QTd;
                            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, key: ("active"), props: ((props)), autoWidth: (true), }));
                            ({}.QTd);
                            const __VLS_22 = __VLS_21({ ...{}, key: ("active"), props: ((props)), autoWidth: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                            ({}({ ...{}, key: ("active"), props: ((props)), autoWidth: (true), }));
                            if (props.row.active) {
                                {
                                    const __VLS_25 = {}.QIcon;
                                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, name: ("mdi-circle-slice-8"), color: ("green"), }));
                                    ({}.QIcon);
                                    const __VLS_27 = __VLS_26({ ...{}, name: ("mdi-circle-slice-8"), color: ("green"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                                    ({}({ ...{}, name: ("mdi-circle-slice-8"), color: ("green"), }));
                                    {
                                        const __VLS_30 = {}.QTooltip;
                                        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, }));
                                        ({}.QTooltip);
                                        const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                                        ({}({ ...{}, }));
                                        (__VLS_33.slots).default;
                                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                                    }
                                    (__VLS_28.slots).default;
                                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                                }
                            }
                            else {
                                {
                                    const __VLS_35 = {}.QIcon;
                                    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, name: ("mdi-circle-slice-8"), color: ("red"), }));
                                    ({}.QIcon);
                                    const __VLS_37 = __VLS_36({ ...{}, name: ("mdi-circle-slice-8"), color: ("red"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                    ({}({ ...{}, name: ("mdi-circle-slice-8"), color: ("red"), }));
                                    {
                                        const __VLS_40 = {}.QTooltip;
                                        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, }));
                                        ({}.QTooltip);
                                        const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                                        ({}({ ...{}, }));
                                        (__VLS_43.slots).default;
                                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                                    }
                                    (__VLS_38.slots).default;
                                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                                }
                            }
                            (__VLS_23.slots).default;
                            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                        }
                        {
                            const __VLS_45 = {}.QTd;
                            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, key: ("psevdo"), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_47 = __VLS_46({ ...{}, key: ("psevdo"), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                            ({}({ ...{}, key: ("psevdo"), props: ((props)), }));
                            {
                                const __VLS_50 = __VLS_intrinsicElements["span"];
                                const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                                const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                                ({}({ ...{}, }));
                                (props.row.psevdo);
                                (__VLS_53.slots).default;
                                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                            }
                            (__VLS_48.slots).default;
                            const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                        }
                        {
                            const __VLS_55 = {}.QTd;
                            const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, key: ('server'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_57 = __VLS_56({ ...{}, key: ('server'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                            ({}({ ...{}, key: ('server'), props: ((props)), }));
                            (props.row.server);
                            (__VLS_58.slots).default;
                            const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                        }
                        {
                            const __VLS_60 = {}.QTd;
                            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, key: ('servertype'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_62 = __VLS_61({ ...{}, key: ('servertype'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                            ({}({ ...{}, key: ('servertype'), props: ((props)), }));
                            (props.row.servertype);
                            (__VLS_63.slots).default;
                            const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                        }
                        {
                            const __VLS_65 = {}.QTd;
                            const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, key: ('index'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_67 = __VLS_66({ ...{}, key: ('index'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                            ({}({ ...{}, key: ('index'), props: ((props)), }));
                            (props.row.index);
                            (__VLS_68.slots).default;
                            const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                        }
                        {
                            const __VLS_70 = {}.QTd;
                            const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, key: ('version'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_72 = __VLS_71({ ...{}, key: ('version'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                            ({}({ ...{}, key: ('version'), props: ((props)), }));
                            (props.row.version);
                            (__VLS_73.slots).default;
                            const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                        }
                        {
                            const __VLS_75 = {}.QTd;
                            const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, key: ('cache'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_77 = __VLS_76({ ...{}, key: ('cache'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                            ({}({ ...{}, key: ('cache'), props: ((props)), }));
                            (props.row.cache);
                            (__VLS_78.slots).default;
                            const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                        }
                        {
                            const __VLS_80 = {}.QTd;
                            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, key: ('date'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_82 = __VLS_81({ ...{}, key: ('date'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                            ({}({ ...{}, key: ('date'), props: ((props)), }));
                            (props.row.date);
                            (__VLS_83.slots).default;
                            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                        }
                        {
                            const __VLS_85 = {}.QTd;
                            const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, class: (" text-center"), key: ('def'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_87 = __VLS_86({ ...{}, class: (" text-center"), key: ('def'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                            ({}({ ...{}, class: (" text-center"), key: ('def'), props: ((props)), }));
                            if (props.row.def) {
                                {
                                    const __VLS_90 = {}.QIcon;
                                    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, name: ("mdi-check-bold"), size: ("sm"), }));
                                    ({}.QIcon);
                                    const __VLS_92 = __VLS_91({ ...{}, name: ("mdi-check-bold"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                                    ({}({ ...{}, name: ("mdi-check-bold"), size: ("sm"), }));
                                    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                                }
                            }
                            else {
                                {
                                    const __VLS_95 = {}.QBtn;
                                    const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Назначить"), size: ("sm"), }));
                                    ({}.QBtn);
                                    const __VLS_97 = __VLS_96({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Назначить"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                                    ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Назначить"), size: ("sm"), }));
                                    let __VLS_100 = { 'click': __VLS_pickEvent(__VLS_99['click'], {}.onClick) };
                                    __VLS_100 = { click: $event => {
                                            if (!(!((props.row.def))))
                                                return;
                                            __VLS_ctx.assign(props.row.psevdo);
                                            // @ts-ignore
                                            [assign,];
                                        }
                                    };
                                    const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                                    let __VLS_99;
                                }
                            }
                            (__VLS_88.slots).default;
                            const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                        }
                        {
                            const __VLS_101 = {}.QTd;
                            const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{}, class: (" text-right"), key: ('def'), props: ((props)), }));
                            ({}.QTd);
                            const __VLS_103 = __VLS_102({ ...{}, class: (" text-right"), key: ('def'), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                            ({}({ ...{}, class: (" text-right"), key: ('def'), props: ((props)), }));
                            {
                                const __VLS_106 = {}.QBtn;
                                const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{ 'onClick': {}, }, class: (" q-mr-md"), props: ((props)), round: (true), flat: (true), icon: ('mdi-trash-can-outline'), size: ('sm'), dense: (true), }));
                                ({}.QBtn);
                                const __VLS_108 = __VLS_107({ ...{ 'onClick': {}, }, class: (" q-mr-md"), props: ((props)), round: (true), flat: (true), icon: ('mdi-trash-can-outline'), size: ('sm'), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                                ({}({ ...{ 'onClick': {}, }, class: (" q-mr-md"), props: ((props)), round: (true), flat: (true), icon: ('mdi-trash-can-outline'), size: ('sm'), dense: (true), }));
                                let __VLS_111 = { 'click': __VLS_pickEvent(__VLS_110['click'], {}.onClick) };
                                __VLS_111 = { click: () => { } };
                                {
                                    const __VLS_112 = {}.QMenu;
                                    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ ...{}, }));
                                    ({}.QMenu);
                                    const __VLS_114 = __VLS_113({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_113));
                                    ({}({ ...{}, }));
                                    {
                                        const __VLS_117 = {}.QList;
                                        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, props: ((props)), }));
                                        ({}.QList);
                                        const __VLS_119 = __VLS_118({ ...{}, props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                                        ({}({ ...{}, props: ((props)), }));
                                        {
                                            const __VLS_122 = {}.QItem;
                                            const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), props: ((props)), }));
                                            ({}.QItem);
                                            const __VLS_124 = __VLS_123({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                                            ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), props: ((props)), }));
                                            __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                            let __VLS_127 = { 'click': __VLS_pickEvent(__VLS_126['click'], {}.onClick) };
                                            __VLS_127 = { click: $event => {
                                                    __VLS_ctx.remove(props.row);
                                                    // @ts-ignore
                                                    [remove,];
                                                }
                                            };
                                            {
                                                const __VLS_128 = {}.QItemSection;
                                                const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{}, }));
                                                ({}.QItemSection);
                                                const __VLS_130 = __VLS_129({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                                ({}({ ...{}, }));
                                                (__VLS_131.slots).default;
                                                const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                                            }
                                            (__VLS_125.slots).default;
                                            const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
                                            let __VLS_126;
                                        }
                                        (__VLS_120.slots).default;
                                        const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
                                    }
                                    (__VLS_115.slots).default;
                                    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
                                }
                                (__VLS_109.slots).default;
                                const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
                                let __VLS_110;
                            }
                            {
                                const __VLS_133 = {}.QBtn;
                                const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{}, props: ((props)), round: (true), flat: (true), icon: ('mdi-chevron-right'), size: ('md'), dense: (true), }));
                                ({}.QBtn);
                                const __VLS_135 = __VLS_134({ ...{}, props: ((props)), round: (true), flat: (true), icon: ('mdi-chevron-right'), size: ('md'), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                                ({}({ ...{}, props: ((props)), round: (true), flat: (true), icon: ('mdi-chevron-right'), size: ('md'), dense: (true), }));
                                const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                            }
                            (__VLS_104.slots).default;
                            const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                        }
                        (__VLS_17.slots).default;
                        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
                        let __VLS_18;
                    }
                }
            }
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_138 = __VLS_intrinsicElements["div"];
            const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
            const __VLS_140 = __VLS_139({ ...{}, class: (" master"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
            ({}({ ...{}, class: (" master"), }));
            {
                const __VLS_143 = __VLS_intrinsicElements["div"];
                const __VLS_144 = __VLS_elementAsFunctionalComponent(__VLS_143);
                const __VLS_145 = __VLS_144({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_144));
                ({}({ ...{}, }));
                {
                    const __VLS_148 = __VLS_intrinsicElements["span"];
                    const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148);
                    const __VLS_150 = __VLS_149({ ...{}, class: ("text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
                    ({}({ ...{}, class: ("text-bold"), }));
                    (__VLS_151.slots).default;
                    const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
                }
                (__VLS_146.slots).default;
                const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
            }
            {
                const __VLS_153 = {}.QBtn;
                const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ ...{ 'onClick': {}, }, unelevated: (true), color: ('primary'), }));
                ({}.QBtn);
                const __VLS_155 = __VLS_154({ ...{ 'onClick': {}, }, unelevated: (true), color: ('primary'), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ('primary'), }));
                let __VLS_158 = { 'click': __VLS_pickEvent(__VLS_157['click'], {}.onClick) };
                __VLS_158 = { click: $event => {
                        __VLS_ctx.master = true;
                        // @ts-ignore
                        [master,];
                    }
                };
                (__VLS_156.slots).default;
                const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
                let __VLS_157;
            }
            (__VLS_141.slots).default;
            const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_159 = (__VLS_ctx.ChangeDialog);
        const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ ...{ 'onChangeDef': {}, }, is: ((__VLS_ctx.ChangeDialog)), modelValue: ((__VLS_ctx.change)), changename: ((__VLS_ctx.changename)), }));
        const __VLS_161 = __VLS_160({ ...{ 'onChangeDef': {}, }, is: ((__VLS_ctx.ChangeDialog)), modelValue: ((__VLS_ctx.change)), changename: ((__VLS_ctx.changename)), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
        ({}({ ...{ 'onChangeDef': {}, }, is: ((__VLS_ctx.ChangeDialog)), modelValue: ((__VLS_ctx.change)), changename: ((__VLS_ctx.changename)), }));
        let __VLS_164 = { 'changeDef': __VLS_pickEvent(__VLS_163['changeDef'], {}.onChangeDef) };
        __VLS_164 = { changeDef: (__VLS_ctx.assignDef) };
        const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
        let __VLS_163;
    }
    {
        const __VLS_165 = (__VLS_ctx.MasterDatabase);
        const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ ...{}, is: ((__VLS_ctx.MasterDatabase)), modelValue: ((__VLS_ctx.master)), }));
        const __VLS_167 = __VLS_166({ ...{}, is: ((__VLS_ctx.MasterDatabase)), modelValue: ((__VLS_ctx.master)), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
        ({}({ ...{}, is: ((__VLS_ctx.MasterDatabase)), modelValue: ((__VLS_ctx.master)), }));
        const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
    }
    {
        const __VLS_170 = (__VLS_ctx.EditDatabase);
        const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{}, is: ((__VLS_ctx.EditDatabase)), modelValue: ((__VLS_ctx.edit)), bd: ((__VLS_ctx.bdRow)), tab: ((__VLS_ctx.bdTab)), }));
        const __VLS_172 = __VLS_171({ ...{}, is: ((__VLS_ctx.EditDatabase)), modelValue: ((__VLS_ctx.edit)), bd: ((__VLS_ctx.bdRow)), tab: ((__VLS_ctx.bdTab)), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
        ({}({ ...{}, is: ((__VLS_ctx.EditDatabase)), modelValue: ((__VLS_ctx.edit)), bd: ((__VLS_ctx.bdRow)), tab: ((__VLS_ctx.bdTab)), }));
        const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["database"];
        __VLS_styleScopedClasses["q-mt-sm"];
        __VLS_styleScopedClasses["text-center"];
        __VLS_styleScopedClasses["text-right"];
        __VLS_styleScopedClasses["q-mr-md"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["master"];
        __VLS_styleScopedClasses["text-bold"];
    }
    var __VLS_slots;
    // @ts-ignore
    [ChangeDialog, ChangeDialog, change, changename, ChangeDialog, change, changename, ChangeDialog, change, changename, assignDef, MasterDatabase, MasterDatabase, master, MasterDatabase, master, MasterDatabase, master, EditDatabase, EditDatabase, edit, bdRow, bdTab, EditDatabase, edit, bdRow, bdTab, EditDatabase, edit, bdRow, bdTab,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ChangeDialog: ChangeDialog,
            MasterDatabase: MasterDatabase,
            EditDatabase: EditDatabase,
            change: change,
            bdRow: bdRow,
            bdTab: bdTab,
            master: master,
            edit: edit,
            changename: changename,
            remove: remove,
            assign: assign,
            assignDef: assignDef,
            columns: columns,
            rows: rows,
            goto: goto,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
//# sourceMappingURL=Database.vue.js.map