/* __placeholder__ */
import { ref } from 'vue';
import { useWiz } from '@/stores/wiz';
import CreateDatabase from '@/components/setupcomponent/CreateDatabase.vue';
import ConnectDatabase from '@/components/setupcomponent/ConnectDatabase.vue';
import UpdateDatabase from '@/components/setupcomponent/UpdateDatabase.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    dialog: {
        type: Boolean,
        default: false,
    },
});
const cr = ref();
const con = ref();
const up = ref();
const wiz = useWiz();
const emit = defineEmits(['update:modelValue']);
const close = () => {
    emit('update:modelValue', false);
    panel.value = 'start';
    wiz.choose = 'start';
    wiz.done = false;
    wiz.finish = 0;
};
const crNext = () => {
    cr.value.nextStep();
};
const conNext = () => {
    if (!!con.value)
        con.value.nextStep();
};
const upNext = () => {
    if (!!up.value)
        up.value.nextStep();
};
const crBack = () => {
    if (cr.value.step === 1) {
        panel.value = 'start';
    }
    else {
        cr.value.prevStep();
    }
};
const conBack = () => {
    if (con.value.step === 1) {
        panel.value = 'start';
    }
    else {
        con.value.prevStep();
    }
};
const upBack = () => {
    if (up.value.step === 4) {
        panel.value = 'start';
    }
    else {
        up.value.prevStep();
    }
};
const selected = ref([]);
const headers = [
    { label: 'Название', align: 'left', sortable: true, name: 'name', field: 'name' },
    { label: 'Псевдоним', align: 'left', sortable: true, name: 'psevdo', field: 'psevdo' },
    // { label: 'Активна', align: 'left', sortable: true, name: 'active', field: 'active' },
];
const list = [
    {
        id: 0,
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
        id: 1,
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
];
const panel = ref('start');
const next = () => {
    panel.value = wiz.choose;
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
    __VLS_components.QDialog;
    __VLS_components.qDialog;
    // @ts-ignore
    [QDialog,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.QTabPanels;
    __VLS_components.qTabPanels;
    // @ts-ignore
    [QTabPanels,];
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    __VLS_components.QTabPanel;
    __VLS_components.qTabPanel;
    // @ts-ignore
    [QTabPanel, QTabPanel, QTabPanel, QTabPanel,];
    __VLS_components.QTable;
    __VLS_components.qTable;
    // @ts-ignore
    [QTable,];
    __VLS_intrinsicElements.template;
    __VLS_components.QTd;
    __VLS_components.qTd;
    // @ts-ignore
    [QTd,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip,];
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    // @ts-ignore
    [QRadio, QRadio, QRadio,];
    __VLS_components.QSeparator;
    __VLS_components.qSeparator;
    // @ts-ignore
    [QSeparator,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions, QCardActions,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
    {
        const __VLS_0 = {}.QDialog;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, modelValue: ((props.dialog)), position: ("bottom"), fullWidth: (true), persistent: (true), }));
        ({}.QDialog);
        const __VLS_2 = __VLS_1({ ...{}, modelValue: ((props.dialog)), position: ("bottom"), fullWidth: (true), persistent: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, modelValue: ((props.dialog)), position: ("bottom"), fullWidth: (true), persistent: (true), }));
        {
            const __VLS_5 = {}.QCard;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" edit"), }));
            ({}.QCard);
            const __VLS_7 = __VLS_6({ ...{}, class: (" edit"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" edit"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    const __VLS_15 = {}.QCardSection;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["div"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, class: (" title"), }));
                        {
                            const __VLS_25 = {}.QIcon;
                            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, name: ('mdi-wizard-hat'), }));
                            ({}.QIcon);
                            const __VLS_27 = __VLS_26({ ...{}, name: ('mdi-wizard-hat'), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, name: ('mdi-wizard-hat'), }));
                            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                        }
                        {
                            const __VLS_30 = __VLS_intrinsicElements["span"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, }));
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        if (__VLS_ctx.panel !== 'start' && __VLS_ctx.wiz.choose === 'create') {
                            {
                                const __VLS_35 = __VLS_intrinsicElements["span"];
                                const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                                const __VLS_37 = __VLS_36({ ...{}, class: (" q-ml-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                ({}({ ...{}, class: (" q-ml-md"), }));
                                (__VLS_38.slots).default;
                                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                            }
                            // @ts-ignore
                            [panel, wiz,];
                        }
                        if (__VLS_ctx.panel !== 'start' && __VLS_ctx.wiz.choose === 'connect') {
                            {
                                const __VLS_40 = __VLS_intrinsicElements["span"];
                                const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                                const __VLS_42 = __VLS_41({ ...{}, class: (" q-ml-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                                ({}({ ...{}, class: (" q-ml-md"), }));
                                (__VLS_43.slots).default;
                                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                            }
                            // @ts-ignore
                            [panel, wiz,];
                        }
                        if (__VLS_ctx.panel !== 'start' && __VLS_ctx.wiz.choose === 'update') {
                            {
                                const __VLS_45 = __VLS_intrinsicElements["span"];
                                const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                                const __VLS_47 = __VLS_46({ ...{}, class: (" q-ml-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                                ({}({ ...{}, class: (" q-ml-md"), }));
                                (__VLS_48.slots).default;
                                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                            }
                            // @ts-ignore
                            [panel, wiz,];
                        }
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    {
                        const __VLS_50 = {}.QTabPanels;
                        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, modelValue: ((__VLS_ctx.panel)), animated: (true), }));
                        ({}.QTabPanels);
                        const __VLS_52 = __VLS_51({ ...{}, modelValue: ((__VLS_ctx.panel)), animated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.panel)), animated: (true), }));
                        {
                            const __VLS_55 = {}.QTabPanel;
                            const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, name: ("start"), }));
                            ({}.QTabPanel);
                            const __VLS_57 = __VLS_56({ ...{}, name: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                            ({}({ ...{}, name: ("start"), }));
                            {
                                const __VLS_60 = __VLS_intrinsicElements["div"];
                                const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
                                const __VLS_62 = __VLS_61({ ...{}, class: (" all"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                                ({}({ ...{}, class: (" all"), }));
                                {
                                    const __VLS_65 = __VLS_intrinsicElements["div"];
                                    const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                                    const __VLS_67 = __VLS_66({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                                    ({}({ ...{}, class: (" arch"), }));
                                    {
                                        const __VLS_70 = __VLS_intrinsicElements["div"];
                                        const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                                        const __VLS_72 = __VLS_71({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                                        ({}({ ...{}, class: (" text-bold"), }));
                                        (__VLS_73.slots).default;
                                        const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                                    }
                                    {
                                        const __VLS_75 = {}.QTable;
                                        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, columns: ((__VLS_ctx.headers)), rowKey: ("id"), color: ("primary"), flat: (true), selection: ("single"), selected: ((__VLS_ctx.selected)), rows: ((__VLS_ctx.list)), hideBottom: (true), }));
                                        ({}.QTable);
                                        const __VLS_77 = __VLS_76({ ...{}, columns: ((__VLS_ctx.headers)), rowKey: ("id"), color: ("primary"), flat: (true), selection: ("single"), selected: ((__VLS_ctx.selected)), rows: ((__VLS_ctx.list)), hideBottom: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                                        ({}({ ...{}, columns: ((__VLS_ctx.headers)), rowKey: ("id"), color: ("primary"), flat: (true), selection: ("single"), selected: ((__VLS_ctx.selected)), rows: ((__VLS_ctx.list)), hideBottom: (true), }));
                                        {
                                            const __VLS_80 = __VLS_intrinsicElements["template"];
                                            const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                                            const __VLS_82 = __VLS_81({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                                            ({}({ ...{}, }));
                                            {
                                                const [props] = __VLS_getSlotParams((__VLS_78.slots)["body-cell-active"]);
                                                {
                                                    const __VLS_84 = {}.QTd;
                                                    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{}, props: ((props)), }));
                                                    ({}.QTd);
                                                    const __VLS_86 = __VLS_85({ ...{}, props: ((props)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                                                    ({}({ ...{}, props: ((props)), }));
                                                    if (props.row.active === true) {
                                                        {
                                                            const __VLS_89 = {}.QIcon;
                                                            const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{}, name: ("mdi-circle-slice-8"), color: ("green"), }));
                                                            ({}.QIcon);
                                                            const __VLS_91 = __VLS_90({ ...{}, name: ("mdi-circle-slice-8"), color: ("green"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                                                            ({}({ ...{}, name: ("mdi-circle-slice-8"), color: ("green"), }));
                                                            {
                                                                const __VLS_94 = {}.QTooltip;
                                                                const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{}, }));
                                                                ({}.QTooltip);
                                                                const __VLS_96 = __VLS_95({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_95));
                                                                ({}({ ...{}, }));
                                                                (__VLS_97.slots).default;
                                                                const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
                                                            }
                                                            (__VLS_92.slots).default;
                                                            const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
                                                        }
                                                        // @ts-ignore
                                                        [panel, panel, panel, headers, selected, list, headers, selected, list, headers, selected, list,];
                                                    }
                                                    else {
                                                        {
                                                            const __VLS_99 = {}.QIcon;
                                                            const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{}, name: ("mdi-circle-slice-8"), color: ("red"), }));
                                                            ({}.QIcon);
                                                            const __VLS_101 = __VLS_100({ ...{}, name: ("mdi-circle-slice-8"), color: ("red"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
                                                            ({}({ ...{}, name: ("mdi-circle-slice-8"), color: ("red"), }));
                                                            {
                                                                const __VLS_104 = {}.QTooltip;
                                                                const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ ...{}, }));
                                                                ({}.QTooltip);
                                                                const __VLS_106 = __VLS_105({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_105));
                                                                ({}({ ...{}, }));
                                                                (__VLS_107.slots).default;
                                                                const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
                                                            }
                                                            (__VLS_102.slots).default;
                                                            const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
                                                        }
                                                    }
                                                    (__VLS_87.slots).default;
                                                    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
                                                }
                                            }
                                        }
                                        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                                    }
                                    (__VLS_68.slots).default;
                                    const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                                }
                                {
                                    const __VLS_109 = __VLS_intrinsicElements["div"];
                                    const __VLS_110 = __VLS_elementAsFunctionalComponent(__VLS_109);
                                    const __VLS_111 = __VLS_110({ ...{}, class: (" column q-mt-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
                                    ({}({ ...{}, class: (" column q-mt-md"), }));
                                    {
                                        const __VLS_114 = {}.QRadio;
                                        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("create"), label: ("Создать новую БД и подключить ее к серверу"), }));
                                        ({}.QRadio);
                                        const __VLS_116 = __VLS_115({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("create"), label: ("Создать новую БД и подключить ее к серверу"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
                                        ({}({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("create"), label: ("Создать новую БД и подключить ее к серверу"), }));
                                        const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
                                    }
                                    {
                                        const __VLS_119 = {}.QRadio;
                                        const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("connect"), label: ("Подключить существующую БД, не представленную в списке"), }));
                                        ({}.QRadio);
                                        const __VLS_121 = __VLS_120({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("connect"), label: ("Подключить существующую БД, не представленную в списке"), }, ...__VLS_functionalComponentArgsRest(__VLS_120));
                                        ({}({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("connect"), label: ("Подключить существующую БД, не представленную в списке"), }));
                                        const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121);
                                    }
                                    {
                                        const __VLS_124 = {}.QRadio;
                                        const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("update"), label: ("Обновить выбранную в списке БД"), disable: ((__VLS_ctx.selected.length === 0)), }));
                                        ({}.QRadio);
                                        const __VLS_126 = __VLS_125({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("update"), label: ("Обновить выбранную в списке БД"), disable: ((__VLS_ctx.selected.length === 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
                                        ({}({ ...{}, modelValue: ((__VLS_ctx.wiz.choose)), val: ("update"), label: ("Обновить выбранную в списке БД"), disable: ((__VLS_ctx.selected.length === 0)), }));
                                        const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
                                    }
                                    (__VLS_112.slots).default;
                                    const __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111);
                                }
                                (__VLS_63.slots).default;
                                const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                            }
                            (__VLS_58.slots).default;
                            const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                        }
                        {
                            const __VLS_129 = {}.QTabPanel;
                            const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{}, name: ("create"), }));
                            ({}.QTabPanel);
                            const __VLS_131 = __VLS_130({ ...{}, name: ("create"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
                            ({}({ ...{}, name: ("create"), }));
                            {
                                const __VLS_134 = (__VLS_ctx.CreateDatabase);
                                const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ ...{}, is: ((__VLS_ctx.CreateDatabase)), ref: ("cr"), }));
                                const __VLS_136 = __VLS_135({ ...{}, is: ((__VLS_ctx.CreateDatabase)), ref: ("cr"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
                                ({}({ ...{}, is: ((__VLS_ctx.CreateDatabase)), ref: ("cr"), }));
                                // @ts-ignore
                                (__VLS_ctx.cr);
                                const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
                            }
                            (__VLS_132.slots).default;
                            const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131);
                        }
                        {
                            const __VLS_139 = {}.QTabPanel;
                            const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ ...{}, name: ("connect"), }));
                            ({}.QTabPanel);
                            const __VLS_141 = __VLS_140({ ...{}, name: ("connect"), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
                            ({}({ ...{}, name: ("connect"), }));
                            {
                                const __VLS_144 = (__VLS_ctx.ConnectDatabase);
                                const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{}, is: ((__VLS_ctx.ConnectDatabase)), ref: ("con"), }));
                                const __VLS_146 = __VLS_145({ ...{}, is: ((__VLS_ctx.ConnectDatabase)), ref: ("con"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
                                ({}({ ...{}, is: ((__VLS_ctx.ConnectDatabase)), ref: ("con"), }));
                                // @ts-ignore
                                (__VLS_ctx.con);
                                const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
                            }
                            (__VLS_142.slots).default;
                            const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141);
                        }
                        {
                            const __VLS_149 = {}.QTabPanel;
                            const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({ ...{}, name: ("update"), }));
                            ({}.QTabPanel);
                            const __VLS_151 = __VLS_150({ ...{}, name: ("update"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
                            ({}({ ...{}, name: ("update"), }));
                            {
                                const __VLS_154 = (__VLS_ctx.UpdateDatabase);
                                const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ ...{}, is: ((__VLS_ctx.UpdateDatabase)), ref: ("up"), }));
                                const __VLS_156 = __VLS_155({ ...{}, is: ((__VLS_ctx.UpdateDatabase)), ref: ("up"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
                                ({}({ ...{}, is: ((__VLS_ctx.UpdateDatabase)), ref: ("up"), }));
                                // @ts-ignore
                                (__VLS_ctx.up);
                                const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
                            }
                            (__VLS_152.slots).default;
                            const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151);
                        }
                        (__VLS_53.slots).default;
                        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_159 = __VLS_intrinsicElements["div"];
                const __VLS_160 = __VLS_elementAsFunctionalComponent(__VLS_159);
                const __VLS_161 = __VLS_160({ ...{}, class: (" bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
                ({}({ ...{}, class: (" bottom"), }));
                {
                    const __VLS_164 = {}.QSeparator;
                    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ ...{}, }));
                    ({}.QSeparator);
                    const __VLS_166 = __VLS_165({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_165));
                    ({}({ ...{}, }));
                    const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166);
                }
                if (__VLS_ctx.wiz.finish > 1) {
                    {
                        const __VLS_169 = {}.QCardActions;
                        const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({ ...{}, align: ("center"), }));
                        ({}.QCardActions);
                        const __VLS_171 = __VLS_170({ ...{}, align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
                        ({}({ ...{}, align: ("center"), }));
                        {
                            const __VLS_174 = {}.QBtn;
                            const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                            ({}.QBtn);
                            const __VLS_176 = __VLS_175({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
                            ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                            let __VLS_179 = { 'click': __VLS_pickEvent(__VLS_178['click'], {}.onClick) };
                            __VLS_179 = { click: (__VLS_ctx.close) };
                            (__VLS_177.slots).default;
                            const __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176);
                            let __VLS_178;
                        }
                        (__VLS_172.slots).default;
                        const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171);
                    }
                    // @ts-ignore
                    [wiz, wiz, wiz, wiz, wiz, wiz, wiz, selected, wiz, selected, wiz, selected, CreateDatabase, CreateDatabase, CreateDatabase, CreateDatabase, cr, ConnectDatabase, ConnectDatabase, ConnectDatabase, ConnectDatabase, con, UpdateDatabase, UpdateDatabase, UpdateDatabase, UpdateDatabase, up, wiz, close,];
                }
                else {
                    {
                        const __VLS_180 = {}.QCardActions;
                        const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ ...{}, align: ("center"), }));
                        ({}.QCardActions);
                        const __VLS_182 = __VLS_181({ ...{}, align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                        ({}({ ...{}, align: ("center"), }));
                        {
                            const __VLS_185 = {}.QBtn;
                            const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ ...{ 'onClick': {}, }, class: (" q-mr-xl"), flat: (true), color: ("primary"), }));
                            ({}.QBtn);
                            const __VLS_187 = __VLS_186({ ...{ 'onClick': {}, }, class: (" q-mr-xl"), flat: (true), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                            ({}({ ...{ 'onClick': {}, }, class: (" q-mr-xl"), flat: (true), color: ("primary"), }));
                            let __VLS_190 = { 'click': __VLS_pickEvent(__VLS_189['click'], {}.onClick) };
                            __VLS_190 = { click: (__VLS_ctx.close) };
                            (__VLS_188.slots).default;
                            const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                            let __VLS_189;
                        }
                        if (__VLS_ctx.panel === 'start') {
                            {
                                const __VLS_191 = {}.QBtn;
                                const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                ({}.QBtn);
                                const __VLS_193 = __VLS_192({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
                                ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                let __VLS_196 = { 'click': __VLS_pickEvent(__VLS_195['click'], {}.onClick) };
                                __VLS_196 = { click: (__VLS_ctx.next) };
                                (__VLS_194.slots).default;
                                const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
                                let __VLS_195;
                            }
                            // @ts-ignore
                            [close, panel, next,];
                        }
                        if (__VLS_ctx.panel === 'create') {
                            {
                                const __VLS_197 = {}.QBtn;
                                const __VLS_198 = __VLS_asFunctionalComponent(__VLS_197, new __VLS_197({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }));
                                ({}.QBtn);
                                const __VLS_199 = __VLS_198({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_198));
                                ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }));
                                let __VLS_202 = { 'click': __VLS_pickEvent(__VLS_201['click'], {}.onClick) };
                                __VLS_202 = { click: (__VLS_ctx.crBack) };
                                (__VLS_200.slots).default;
                                const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199);
                                let __VLS_201;
                            }
                            {
                                const __VLS_203 = {}.QBtn;
                                const __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                ({}.QBtn);
                                const __VLS_205 = __VLS_204({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
                                ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                let __VLS_208 = { 'click': __VLS_pickEvent(__VLS_207['click'], {}.onClick) };
                                __VLS_208 = { click: (__VLS_ctx.crNext) };
                                (__VLS_206.slots).default;
                                const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
                                let __VLS_207;
                            }
                            // @ts-ignore
                            [panel, crBack, crNext,];
                        }
                        if (__VLS_ctx.panel === 'connect') {
                            {
                                const __VLS_209 = {}.QBtn;
                                const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }));
                                ({}.QBtn);
                                const __VLS_211 = __VLS_210({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                                ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }));
                                let __VLS_214 = { 'click': __VLS_pickEvent(__VLS_213['click'], {}.onClick) };
                                __VLS_214 = { click: (__VLS_ctx.conBack) };
                                (__VLS_212.slots).default;
                                const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                                let __VLS_213;
                            }
                            {
                                const __VLS_215 = {}.QBtn;
                                const __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                ({}.QBtn);
                                const __VLS_217 = __VLS_216({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                                ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                let __VLS_220 = { 'click': __VLS_pickEvent(__VLS_219['click'], {}.onClick) };
                                __VLS_220 = { click: (__VLS_ctx.conNext) };
                                (__VLS_218.slots).default;
                                const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                                let __VLS_219;
                            }
                            // @ts-ignore
                            [panel, conBack, conNext,];
                        }
                        if (__VLS_ctx.panel === 'update') {
                            {
                                const __VLS_221 = {}.QBtn;
                                const __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }));
                                ({}.QBtn);
                                const __VLS_223 = __VLS_222({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
                                ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), }));
                                let __VLS_226 = { 'click': __VLS_pickEvent(__VLS_225['click'], {}.onClick) };
                                __VLS_226 = { click: (__VLS_ctx.upBack) };
                                (__VLS_224.slots).default;
                                const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223);
                                let __VLS_225;
                            }
                            {
                                const __VLS_227 = {}.QBtn;
                                const __VLS_228 = __VLS_asFunctionalComponent(__VLS_227, new __VLS_227({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                ({}.QBtn);
                                const __VLS_229 = __VLS_228({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_228));
                                ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), padding: ("xs xl"), }));
                                let __VLS_232 = { 'click': __VLS_pickEvent(__VLS_231['click'], {}.onClick) };
                                __VLS_232 = { click: (__VLS_ctx.upNext) };
                                (__VLS_230.slots).default;
                                const __VLS_230 = __VLS_pickFunctionalComponentCtx(__VLS_227, __VLS_229);
                                let __VLS_231;
                            }
                            // @ts-ignore
                            [panel, upBack, upNext,];
                        }
                        (__VLS_183.slots).default;
                        const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
                    }
                }
                (__VLS_162.slots).default;
                const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
            }
            {
                const __VLS_233 = {}.QBtn;
                const __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, new __VLS_233({ ...{ 'onClick': {}, }, class: (" close"), flat: (true), round: (true), icon: ("mdi-close"), color: ("primary"), }));
                ({}.QBtn);
                const __VLS_235 = __VLS_234({ ...{ 'onClick': {}, }, class: (" close"), flat: (true), round: (true), icon: ("mdi-close"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_234));
                ({}({ ...{ 'onClick': {}, }, class: (" close"), flat: (true), round: (true), icon: ("mdi-close"), color: ("primary"), }));
                let __VLS_238 = { 'click': __VLS_pickEvent(__VLS_237['click'], {}.onClick) };
                __VLS_238 = { click: (__VLS_ctx.close) };
                const __VLS_236 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235);
                let __VLS_237;
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["edit"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["q-ml-md"];
        __VLS_styleScopedClasses["q-ml-md"];
        __VLS_styleScopedClasses["q-ml-md"];
        __VLS_styleScopedClasses["all"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["column"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["bottom"];
        __VLS_styleScopedClasses["q-mr-xl"];
        __VLS_styleScopedClasses["close"];
    }
    var __VLS_slots;
    // @ts-ignore
    [close,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            CreateDatabase: CreateDatabase,
            ConnectDatabase: ConnectDatabase,
            UpdateDatabase: UpdateDatabase,
            cr: cr,
            con: con,
            up: up,
            wiz: wiz,
            close: close,
            crNext: crNext,
            conNext: conNext,
            upNext: upNext,
            crBack: crBack,
            conBack: conBack,
            upBack: upBack,
            selected: selected,
            headers: headers,
            list: list,
            panel: panel,
            next: next,
        };
    },
    props: {
        dialog: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        dialog: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
//# sourceMappingURL=MasterDatabase.vue.js.map