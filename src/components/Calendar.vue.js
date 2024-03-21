/* __placeholder__ */
import { ref, computed, reactive } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const mode = ref('single');
const query = ref('');
const dateobject = ref({ from: '15.03.2024', to: '17.03.2024' });
const date = ref('');
const clear = () => {
    date.value = '';
    datesingle.value = '';
    dateobject.value = Object.assign({ from: '', to: '' });
    shab.map(item => (item.selected = false));
    shab1.map(item => (item.selected = false));
};
const datesingle = ref('04.10.2021');
const list = ref(true);
const shab1 = reactive([
    {
        id: 0,
        selected: false,
        label: 'Сегодня',
        range: '10.03.2024',
    },
    {
        id: 1,
        selected: false,
        label: 'Вчера',
        range: '09.03.2024',
    },
    {
        id: 2,
        selected: false,
        label: 'Начало недели',
        range: '05.03.2024',
    },
    {
        id: 3,
        selected: false,
        label: 'Начало месяца',
        range: '01.03.2024',
    },
    {
        id: 4,
        selected: false,
        label: 'Конец месяца',
        range: '31.03.2024',
    },
]);
const shab = reactive([
    {
        id: 0,
        selected: false,
        label: 'Текущая неделя',
        range: '10.03.2024 - 16.03.2024',
        obj: {
            from: '10.03.2024',
            to: '16.03.2024',
        },
    },
    {
        id: 1,
        selected: false,
        label: 'Текущий месяц',
        range: '01.03.2024 - 31.03.2024',
        obj: {
            from: '01.03.2024',
            to: '31.03.2024',
        },
    },
    {
        id: 2,
        selected: false,
        label: 'Текущий квартал',
        range: '01.01.2024 - 31.03.2024',
        obj: {
            from: '01.01.2024',
            to: '31.03.2024',
        },
    },
    {
        id: 3,
        selected: false,
        label: 'Текущий год',
        range: '01.01.2024 - 31.12.2024',
        obj: {
            from: '01.01.2024',
            to: '31.12.2024',
        },
    },
    {
        id: 4,
        selected: false,
        label: 'Прошлая неделя',
        range: '03.03.2024 - 09.03.2024',
        obj: {
            from: '03.03.2024',
            to: '09.03.2024',
        },
    },
    {
        id: 5,
        selected: false,
        label: 'Прошлый месяц',
        range: '01.02.2024 - 29.02.2024',
        obj: {
            from: '01.02.2024',
            to: '29.02.2024',
        },
    },
    {
        id: 6,
        selected: false,
        label: 'Прошлый квартал',
        range: '01.10.2023 - 31.12.2023',
        obj: {
            from: '01.10.2023',
            to: '31.12.2023',
        },
    },
    {
        id: 7,
        selected: false,
        label: 'Прошлый год',
        range: '01.01.2023 - 31.12.2023',
        obj: {
            from: '01.01.2023',
            to: '31.12.2023',
        },
    },
]);
const jour = reactive([
    { selected: false, label: '10.05.2021' },
    { selected: false, label: '11.05.2021' },
    { selected: false, label: '12.05.2021' },
    { selected: false, label: '13.05.2021' },
    { selected: false, label: '14.05.2021' },
    { selected: false, label: '15.05.2021' },
    { selected: false, label: '16.05.2021' },
    { selected: false, label: '17.05.2021' },
    { selected: false, label: '18.05.2021' },
    { selected: false, label: '19.05.2021' },
    { selected: false, label: '20.05.2021' },
    { selected: false, label: '21.05.2021' },
    { selected: false, label: '22.05.2021' },
    { selected: false, label: '23.05.2021' },
    { selected: false, label: '24.05.2021' },
]);
const filtered = computed(() => {
    return !!query.value
        ? jour.filter(item => item.label.includes(query.value))
        : jour;
});
const toggle = () => {
    list.value = !list.value;
};
const check = ref(false);
const fill = (val) => {
    if (!!val) {
        date.value = val.from + ' - ' + val.to;
    }
};
const select = (e) => {
    shab.map(item => (item.selected = false));
    e.selected = true;
    date.value = e.range;
    dateobject.value = Object.assign(e.obj);
};
const select1 = (e) => {
    shab1.map(item => (item.selected = false));
    e.selected = true;
    datesingle.value = e.range;
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
    __VLS_components.QPage;
    __VLS_components.qPage;
    // @ts-ignore
    [QPage,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.img;
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
    [QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu, QMenu, QMenu, QMenu,];
    __VLS_components.QCard;
    __VLS_components.qCard;
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard, QCard,];
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection, QCardSection,];
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    // @ts-ignore
    [QRadio, QRadio, QRadio, QRadio, QRadio, QRadio,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput, QInput, QInput, QInput,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon, QIcon, QIcon, QIcon,];
    __VLS_components.QScrollArea;
    __VLS_components.qScrollArea;
    __VLS_components.QScrollArea;
    __VLS_components.qScrollArea;
    // @ts-ignore
    [QScrollArea, QScrollArea,];
    __VLS_components.QList;
    __VLS_components.qList;
    __VLS_components.QList;
    __VLS_components.qList;
    __VLS_components.QList;
    __VLS_components.qList;
    __VLS_components.QList;
    __VLS_components.qList;
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList, QList, QList, QList, QList,];
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    // @ts-ignore
    [QItem, QItem, QItem, QItem, QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection, QItemSection, QItemSection, QItemSection, QItemSection, QItemSection, QItemSection,];
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    __VLS_components.QDate;
    __VLS_components.qDate;
    __VLS_components.QDate;
    __VLS_components.qDate;
    __VLS_components.QDate;
    __VLS_components.qDate;
    __VLS_components.QDate;
    __VLS_components.qDate;
    // @ts-ignore
    [QDate, QDate, QDate, QDate,];
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    __VLS_components.QItemLabel;
    __VLS_components.qItemLabel;
    // @ts-ignore
    [QItemLabel, QItemLabel, QItemLabel,];
    __VLS_components.QSeparator;
    __VLS_components.qSeparator;
    __VLS_components.QSeparator;
    __VLS_components.qSeparator;
    // @ts-ignore
    [QSeparator, QSeparator,];
    {
        const __VLS_0 = {}.QPage;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, padding: (true), }));
        ({}.QPage);
        const __VLS_2 = __VLS_1({ ...{}, padding: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, padding: (true), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" grid"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" grid"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["img"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, src: ("@/assets/img/image.png"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, src: ("@/assets/img/image.png"), }));
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = {}.QBtn;
                const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, dense: (true), flat: (true), round: (true), icon: ("mdi-filter"), }));
                ({}.QBtn);
                const __VLS_17 = __VLS_16({ ...{}, dense: (true), flat: (true), round: (true), icon: ("mdi-filter"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, dense: (true), flat: (true), round: (true), icon: ("mdi-filter"), }));
                {
                    const __VLS_20 = {}.QMenu;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
                    ({}.QMenu);
                    const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, }));
                    {
                        const __VLS_25 = {}.QCard;
                        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
                        ({}.QCard);
                        const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, }));
                        {
                            const __VLS_30 = {}.QCardSection;
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, class: (" q-gutter-x-md"), }));
                            ({}.QCardSection);
                            const __VLS_32 = __VLS_31({ ...{}, class: (" q-gutter-x-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, class: (" q-gutter-x-md"), }));
                            {
                                const __VLS_35 = {}.QRadio;
                                const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, dense: (true), label: ("Журнал"), modelValue: ((__VLS_ctx.mode)), val: ("journal"), }));
                                ({}.QRadio);
                                const __VLS_37 = __VLS_36({ ...{}, dense: (true), label: ("Журнал"), modelValue: ((__VLS_ctx.mode)), val: ("journal"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                ({}({ ...{}, dense: (true), label: ("Журнал"), modelValue: ((__VLS_ctx.mode)), val: ("journal"), }));
                                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                            }
                            {
                                const __VLS_40 = {}.QRadio;
                                const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, dense: (true), label: ("Дата"), modelValue: ((__VLS_ctx.mode)), val: ("single"), }));
                                ({}.QRadio);
                                const __VLS_42 = __VLS_41({ ...{}, dense: (true), label: ("Дата"), modelValue: ((__VLS_ctx.mode)), val: ("single"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                                ({}({ ...{}, dense: (true), label: ("Дата"), modelValue: ((__VLS_ctx.mode)), val: ("single"), }));
                                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                            }
                            {
                                const __VLS_45 = {}.QRadio;
                                const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, dense: (true), label: ("Интервал"), modelValue: ((__VLS_ctx.mode)), val: ("range"), }));
                                ({}.QRadio);
                                const __VLS_47 = __VLS_46({ ...{}, dense: (true), label: ("Интервал"), modelValue: ((__VLS_ctx.mode)), val: ("range"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                                ({}({ ...{}, dense: (true), label: ("Интервал"), modelValue: ((__VLS_ctx.mode)), val: ("range"), }));
                                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                            }
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        if (__VLS_ctx.mode == 'journal') {
                            {
                                const __VLS_50 = {}.QInput;
                                const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, modelValue: ((__VLS_ctx.query)), dense: (true), filled: (true), clearable: (true), }));
                                ({}.QInput);
                                const __VLS_52 = __VLS_51({ ...{}, modelValue: ((__VLS_ctx.query)), dense: (true), filled: (true), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.query)), dense: (true), filled: (true), clearable: (true), }));
                                {
                                    const __VLS_55 = __VLS_intrinsicElements["template"];
                                    const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                                    const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                                    ({}({ ...{}, }));
                                    {
                                        (__VLS_53.slots).prepend;
                                        {
                                            const __VLS_59 = {}.QIcon;
                                            const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{}, name: ("mdi-magnify"), }));
                                            ({}.QIcon);
                                            const __VLS_61 = __VLS_60({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                                            ({}({ ...{}, name: ("mdi-magnify"), }));
                                            const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                                        }
                                        // @ts-ignore
                                        [mode, mode, mode, mode, mode, mode, mode, mode, mode, mode, query, query, query,];
                                    }
                                }
                                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                            }
                            {
                                const __VLS_64 = {}.QScrollArea;
                                const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, style: ({}), }));
                                ({}.QScrollArea);
                                const __VLS_66 = __VLS_65({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                                ({}({ ...{}, style: ({}), }));
                                {
                                    const __VLS_69 = {}.QList;
                                    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{}, dense: (true), }));
                                    ({}.QList);
                                    const __VLS_71 = __VLS_70({ ...{}, dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                                    ({}({ ...{}, dense: (true), }));
                                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filtered))) {
                                        {
                                            const __VLS_74 = {}.QItem;
                                            const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{}, clickable: (true), tag: ("label"), key: ((item.label)), }));
                                            ({}.QItem);
                                            const __VLS_76 = __VLS_75({ ...{}, clickable: (true), tag: ("label"), key: ((item.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                                            ({}({ ...{}, clickable: (true), tag: ("label"), key: ((item.label)), }));
                                            {
                                                const __VLS_79 = {}.QItemSection;
                                                const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{}, side: (true), }));
                                                ({}.QItemSection);
                                                const __VLS_81 = __VLS_80({ ...{}, side: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                                                ({}({ ...{}, side: (true), }));
                                                {
                                                    const __VLS_84 = {}.QCheckbox;
                                                    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{}, modelValue: ((item.selected)), }));
                                                    ({}.QCheckbox);
                                                    const __VLS_86 = __VLS_85({ ...{}, modelValue: ((item.selected)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                                                    ({}({ ...{}, modelValue: ((item.selected)), }));
                                                    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
                                                }
                                                (__VLS_82.slots).default;
                                                const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
                                            }
                                            {
                                                const __VLS_89 = {}.QItemSection;
                                                const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{}, }));
                                                ({}.QItemSection);
                                                const __VLS_91 = __VLS_90({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                                                ({}({ ...{}, }));
                                                (item.label);
                                                (__VLS_92.slots).default;
                                                const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
                                            }
                                            (__VLS_77.slots).default;
                                            const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                                        }
                                        // @ts-ignore
                                        [filtered,];
                                    }
                                    (__VLS_72.slots).default;
                                    const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
                                }
                                (__VLS_67.slots).default;
                                const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                            }
                        }
                        if (__VLS_ctx.mode == 'single') {
                            {
                                const __VLS_94 = {}.QInput;
                                const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{}, modelValue: ((__VLS_ctx.datesingle)), dense: (true), filled: (true), }));
                                ({}.QInput);
                                const __VLS_96 = __VLS_95({ ...{}, modelValue: ((__VLS_ctx.datesingle)), dense: (true), filled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.datesingle)), dense: (true), filled: (true), }));
                                const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
                            }
                            {
                                const __VLS_99 = {}.QDate;
                                const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{}, modelValue: ((__VLS_ctx.datesingle)), todayBtn: (true), mask: ("DD.MM.YYYY"), }));
                                ({}.QDate);
                                const __VLS_101 = __VLS_100({ ...{}, modelValue: ((__VLS_ctx.datesingle)), todayBtn: (true), mask: ("DD.MM.YYYY"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.datesingle)), todayBtn: (true), mask: ("DD.MM.YYYY"), }));
                                const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
                            }
                            // @ts-ignore
                            [mode, datesingle, datesingle, datesingle, datesingle, datesingle, datesingle,];
                        }
                        if (__VLS_ctx.mode == 'range') {
                            {
                                const __VLS_104 = {}.QInput;
                                const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ ...{}, modelValue: ((__VLS_ctx.date)), dense: (true), filled: (true), }));
                                ({}.QInput);
                                const __VLS_106 = __VLS_105({ ...{}, modelValue: ((__VLS_ctx.date)), dense: (true), filled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.date)), dense: (true), filled: (true), }));
                                if (__VLS_ctx.mode == 'range') {
                                    if (__VLS_ctx.mode == 'range') {
                                        {
                                            const __VLS_109 = __VLS_intrinsicElements["template"];
                                            const __VLS_110 = __VLS_elementAsFunctionalComponent(__VLS_109);
                                            const __VLS_111 = __VLS_110({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_110));
                                            ({}({ ...{}, }));
                                            {
                                                (__VLS_107.slots).append;
                                                if (__VLS_ctx.list) {
                                                    {
                                                        const __VLS_113 = {}.QIcon;
                                                        const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{ 'onClick': {}, }, class: (" cursor-pointer"), name: ("mdi-calendar-blank"), color: ("primary"), }));
                                                        ({}.QIcon);
                                                        const __VLS_115 = __VLS_114({ ...{ 'onClick': {}, }, class: (" cursor-pointer"), name: ("mdi-calendar-blank"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                                                        ({}({ ...{ 'onClick': {}, }, class: (" cursor-pointer"), name: ("mdi-calendar-blank"), color: ("primary"), }));
                                                        let __VLS_118 = { 'click': __VLS_pickEvent(__VLS_117['click'], {}.onClick) };
                                                        __VLS_118 = { click: (__VLS_ctx.toggle) };
                                                        const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                                                        let __VLS_117;
                                                    }
                                                    // @ts-ignore
                                                    [mode, date, date, date, mode, mode, list, toggle,];
                                                }
                                                else {
                                                    {
                                                        const __VLS_119 = {}.QIcon;
                                                        const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ ...{ 'onClick': {}, }, class: (" cursor-pointer"), name: ("mdi-format-list-bulleted-square"), color: ("primary"), }));
                                                        ({}.QIcon);
                                                        const __VLS_121 = __VLS_120({ ...{ 'onClick': {}, }, class: (" cursor-pointer"), name: ("mdi-format-list-bulleted-square"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_120));
                                                        ({}({ ...{ 'onClick': {}, }, class: (" cursor-pointer"), name: ("mdi-format-list-bulleted-square"), color: ("primary"), }));
                                                        let __VLS_124 = { 'click': __VLS_pickEvent(__VLS_123['click'], {}.onClick) };
                                                        __VLS_124 = { click: (__VLS_ctx.toggle) };
                                                        const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121);
                                                        let __VLS_123;
                                                    }
                                                    // @ts-ignore
                                                    [toggle,];
                                                }
                                            }
                                        }
                                    }
                                }
                                const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
                            }
                            if (__VLS_ctx.list) {
                                {
                                    const __VLS_125 = {}.QList;
                                    const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ ...{}, dense: (true), }));
                                    ({}.QList);
                                    const __VLS_127 = __VLS_126({ ...{}, dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                                    ({}({ ...{}, dense: (true), }));
                                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.shab))) {
                                        {
                                            const __VLS_130 = {}.QItem;
                                            const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }));
                                            ({}.QItem);
                                            const __VLS_132 = __VLS_131({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                                            ({}({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }));
                                            __VLS_styleScopedClasses = ({ selected: item.selected });
                                            let __VLS_135 = { 'click': __VLS_pickEvent(__VLS_134['click'], {}.onClick) };
                                            __VLS_135 = { click: $event => {
                                                    if (!((__VLS_ctx.mode == 'range')))
                                                        return;
                                                    if (!((__VLS_ctx.list)))
                                                        return;
                                                    __VLS_ctx.select(item);
                                                    // @ts-ignore
                                                    [list, shab, select,];
                                                }
                                            };
                                            {
                                                const __VLS_136 = {}.QItemSection;
                                                const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ ...{}, }));
                                                ({}.QItemSection);
                                                const __VLS_138 = __VLS_137({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_141 = {}.QItemLabel;
                                                    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{}, }));
                                                    ({}.QItemLabel);
                                                    const __VLS_143 = __VLS_142({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                                                    ({}({ ...{}, }));
                                                    (item.label);
                                                    (__VLS_144.slots).default;
                                                    const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                                                }
                                                (__VLS_139.slots).default;
                                                const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
                                            }
                                            (__VLS_133.slots).default;
                                            const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                                            let __VLS_134;
                                        }
                                    }
                                    (__VLS_128.slots).default;
                                    const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                                }
                            }
                            else {
                                {
                                    const __VLS_146 = {}.QDate;
                                    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{ 'onUpdate:modelValue': {}, }, modelValue: ((__VLS_ctx.dateobject)), todayBtn: (true), range: (true), mask: ("DD.MM.YYYY"), }));
                                    ({}.QDate);
                                    const __VLS_148 = __VLS_147({ ...{ 'onUpdate:modelValue': {}, }, modelValue: ((__VLS_ctx.dateobject)), todayBtn: (true), range: (true), mask: ("DD.MM.YYYY"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                                    ({}({ ...{ 'onUpdate:modelValue': {}, }, modelValue: ((__VLS_ctx.dateobject)), todayBtn: (true), range: (true), mask: ("DD.MM.YYYY"), }));
                                    let __VLS_151 = { 'update:model-value': __VLS_pickEvent(__VLS_150['update:model-value'], {}['onUpdate:modelValue']) };
                                    __VLS_151 = { "update:model-value": (__VLS_ctx.fill) };
                                    const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                                    let __VLS_150;
                                }
                                // @ts-ignore
                                [dateobject, dateobject, dateobject, fill,];
                            }
                        }
                        {
                            const __VLS_152 = {}.QSeparator;
                            const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{}, }));
                            ({}.QSeparator);
                            const __VLS_154 = __VLS_153({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_153));
                            ({}({ ...{}, }));
                            const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
                        }
                        {
                            const __VLS_157 = __VLS_intrinsicElements["div"];
                            const __VLS_158 = __VLS_elementAsFunctionalComponent(__VLS_157);
                            const __VLS_159 = __VLS_158({ ...{}, class: (" row justify-between items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
                            ({}({ ...{}, class: (" row justify-between items-center"), }));
                            {
                                const __VLS_162 = {}.QBtn;
                                const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ ...{ 'onClick': {}, }, class: (" red"), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }));
                                ({}.QBtn);
                                const __VLS_164 = __VLS_163({ ...{ 'onClick': {}, }, class: (" red"), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
                                ({}({ ...{ 'onClick': {}, }, class: (" red"), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }));
                                let __VLS_167 = { 'click': __VLS_pickEvent(__VLS_166['click'], {}.onClick) };
                                __VLS_167 = { click: (__VLS_ctx.clear) };
                                const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164);
                                let __VLS_166;
                            }
                            {
                                const __VLS_168 = {}.QBtn;
                                const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Применить"), }));
                                ({}.QBtn);
                                const __VLS_170 = __VLS_169({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Применить"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
                                ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Применить"), }));
                                let __VLS_173 = { 'click': __VLS_pickEvent(__VLS_172['click'], {}.onClick) };
                                __VLS_173 = { click: (__VLS_ctx.clear) };
                                const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
                                let __VLS_172;
                            }
                            (__VLS_160.slots).default;
                            const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159);
                        }
                        (__VLS_28.slots).default;
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_174 = {}.QBtn;
                const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ ...{}, dense: (true), flat: (true), round: (true), icon: ("mdi-filter"), }));
                ({}.QBtn);
                const __VLS_176 = __VLS_175({ ...{}, dense: (true), flat: (true), round: (true), icon: ("mdi-filter"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
                ({}({ ...{}, dense: (true), flat: (true), round: (true), icon: ("mdi-filter"), }));
                {
                    const __VLS_179 = {}.QMenu;
                    const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179({ ...{}, }));
                    ({}.QMenu);
                    const __VLS_181 = __VLS_180({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_180));
                    ({}({ ...{}, }));
                    {
                        const __VLS_184 = {}.QCard;
                        const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({ ...{}, }));
                        ({}.QCard);
                        const __VLS_186 = __VLS_185({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_185));
                        ({}({ ...{}, }));
                        {
                            const __VLS_189 = {}.QCardSection;
                            const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ ...{}, class: (" q-gutter-x-md"), }));
                            ({}.QCardSection);
                            const __VLS_191 = __VLS_190({ ...{}, class: (" q-gutter-x-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
                            ({}({ ...{}, class: (" q-gutter-x-md"), }));
                            {
                                const __VLS_194 = {}.QRadio;
                                const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ ...{}, dense: (true), label: ("Журнал"), modelValue: ((__VLS_ctx.mode)), val: ("journal"), }));
                                ({}.QRadio);
                                const __VLS_196 = __VLS_195({ ...{}, dense: (true), label: ("Журнал"), modelValue: ((__VLS_ctx.mode)), val: ("journal"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
                                ({}({ ...{}, dense: (true), label: ("Журнал"), modelValue: ((__VLS_ctx.mode)), val: ("journal"), }));
                                const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
                            }
                            {
                                const __VLS_199 = {}.QRadio;
                                const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{}, dense: (true), label: ("Дата"), modelValue: ((__VLS_ctx.mode)), val: ("single"), }));
                                ({}.QRadio);
                                const __VLS_201 = __VLS_200({ ...{}, dense: (true), label: ("Дата"), modelValue: ((__VLS_ctx.mode)), val: ("single"), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
                                ({}({ ...{}, dense: (true), label: ("Дата"), modelValue: ((__VLS_ctx.mode)), val: ("single"), }));
                                const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
                            }
                            {
                                const __VLS_204 = {}.QRadio;
                                const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{}, dense: (true), label: ("Интервал"), modelValue: ((__VLS_ctx.mode)), val: ("range"), }));
                                ({}.QRadio);
                                const __VLS_206 = __VLS_205({ ...{}, dense: (true), label: ("Интервал"), modelValue: ((__VLS_ctx.mode)), val: ("range"), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
                                ({}({ ...{}, dense: (true), label: ("Интервал"), modelValue: ((__VLS_ctx.mode)), val: ("range"), }));
                                const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206);
                            }
                            (__VLS_192.slots).default;
                            const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
                        }
                        if (__VLS_ctx.mode == 'journal') {
                            {
                                const __VLS_209 = {}.QInput;
                                const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, modelValue: ((__VLS_ctx.query)), dense: (true), filled: (true), clearable: (true), }));
                                ({}.QInput);
                                const __VLS_211 = __VLS_210({ ...{}, modelValue: ((__VLS_ctx.query)), dense: (true), filled: (true), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.query)), dense: (true), filled: (true), clearable: (true), }));
                                {
                                    const __VLS_214 = __VLS_intrinsicElements["template"];
                                    const __VLS_215 = __VLS_elementAsFunctionalComponent(__VLS_214);
                                    const __VLS_216 = __VLS_215({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_215));
                                    ({}({ ...{}, }));
                                    {
                                        (__VLS_212.slots).prepend;
                                        {
                                            const __VLS_218 = {}.QIcon;
                                            const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({ ...{}, name: ("mdi-magnify"), }));
                                            ({}.QIcon);
                                            const __VLS_220 = __VLS_219({ ...{}, name: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
                                            ({}({ ...{}, name: ("mdi-magnify"), }));
                                            const __VLS_221 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220);
                                        }
                                        // @ts-ignore
                                        [clear, clear, mode, mode, mode, mode, mode, mode, mode, mode, mode, mode, query, query, query,];
                                    }
                                }
                                const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                            }
                            {
                                const __VLS_223 = {}.QScrollArea;
                                const __VLS_224 = __VLS_asFunctionalComponent(__VLS_223, new __VLS_223({ ...{}, style: ({}), }));
                                ({}.QScrollArea);
                                const __VLS_225 = __VLS_224({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_224));
                                ({}({ ...{}, style: ({}), }));
                                {
                                    const __VLS_228 = {}.QList;
                                    const __VLS_229 = __VLS_asFunctionalComponent(__VLS_228, new __VLS_228({ ...{}, dense: (true), }));
                                    ({}.QList);
                                    const __VLS_230 = __VLS_229({ ...{}, dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_229));
                                    ({}({ ...{}, dense: (true), }));
                                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filtered))) {
                                        {
                                            const __VLS_233 = {}.QItem;
                                            const __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, new __VLS_233({ ...{}, clickable: (true), tag: ("label"), key: ((item.label)), }));
                                            ({}.QItem);
                                            const __VLS_235 = __VLS_234({ ...{}, clickable: (true), tag: ("label"), key: ((item.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_234));
                                            ({}({ ...{}, clickable: (true), tag: ("label"), key: ((item.label)), }));
                                            {
                                                const __VLS_238 = {}.QItemSection;
                                                const __VLS_239 = __VLS_asFunctionalComponent(__VLS_238, new __VLS_238({ ...{}, side: (true), }));
                                                ({}.QItemSection);
                                                const __VLS_240 = __VLS_239({ ...{}, side: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_239));
                                                ({}({ ...{}, side: (true), }));
                                                {
                                                    const __VLS_243 = {}.QCheckbox;
                                                    const __VLS_244 = __VLS_asFunctionalComponent(__VLS_243, new __VLS_243({ ...{}, modelValue: ((item.selected)), }));
                                                    ({}.QCheckbox);
                                                    const __VLS_245 = __VLS_244({ ...{}, modelValue: ((item.selected)), }, ...__VLS_functionalComponentArgsRest(__VLS_244));
                                                    ({}({ ...{}, modelValue: ((item.selected)), }));
                                                    const __VLS_246 = __VLS_pickFunctionalComponentCtx(__VLS_243, __VLS_245);
                                                }
                                                (__VLS_241.slots).default;
                                                const __VLS_241 = __VLS_pickFunctionalComponentCtx(__VLS_238, __VLS_240);
                                            }
                                            {
                                                const __VLS_248 = {}.QItemSection;
                                                const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({ ...{}, }));
                                                ({}.QItemSection);
                                                const __VLS_250 = __VLS_249({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_249));
                                                ({}({ ...{}, }));
                                                (item.label);
                                                (__VLS_251.slots).default;
                                                const __VLS_251 = __VLS_pickFunctionalComponentCtx(__VLS_248, __VLS_250);
                                            }
                                            (__VLS_236.slots).default;
                                            const __VLS_236 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235);
                                        }
                                        // @ts-ignore
                                        [filtered,];
                                    }
                                    (__VLS_231.slots).default;
                                    const __VLS_231 = __VLS_pickFunctionalComponentCtx(__VLS_228, __VLS_230);
                                }
                                (__VLS_226.slots).default;
                                const __VLS_226 = __VLS_pickFunctionalComponentCtx(__VLS_223, __VLS_225);
                            }
                        }
                        if (__VLS_ctx.mode == 'single') {
                            {
                                const __VLS_253 = {}.QInput;
                                const __VLS_254 = __VLS_asFunctionalComponent(__VLS_253, new __VLS_253({ ...{}, modelValue: ((__VLS_ctx.datesingle)), dense: (true), filled: (true), }));
                                ({}.QInput);
                                const __VLS_255 = __VLS_254({ ...{}, modelValue: ((__VLS_ctx.datesingle)), dense: (true), filled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_254));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.datesingle)), dense: (true), filled: (true), }));
                                {
                                    const __VLS_258 = __VLS_intrinsicElements["template"];
                                    const __VLS_259 = __VLS_elementAsFunctionalComponent(__VLS_258);
                                    const __VLS_260 = __VLS_259({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_259));
                                    ({}({ ...{}, }));
                                    {
                                        (__VLS_256.slots).append;
                                        {
                                            const __VLS_262 = {}.QIcon;
                                            const __VLS_263 = __VLS_asFunctionalComponent(__VLS_262, new __VLS_262({ ...{}, class: (" cursor-pointer"), name: ("mdi-dots-vertical"), color: ("primary"), }));
                                            ({}.QIcon);
                                            const __VLS_264 = __VLS_263({ ...{}, class: (" cursor-pointer"), name: ("mdi-dots-vertical"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_263));
                                            ({}({ ...{}, class: (" cursor-pointer"), name: ("mdi-dots-vertical"), color: ("primary"), }));
                                            {
                                                const __VLS_267 = {}.QMenu;
                                                const __VLS_268 = __VLS_asFunctionalComponent(__VLS_267, new __VLS_267({ ...{}, }));
                                                ({}.QMenu);
                                                const __VLS_269 = __VLS_268({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_268));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_272 = {}.QList;
                                                    const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({ ...{}, }));
                                                    ({}.QList);
                                                    const __VLS_274 = __VLS_273({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_273));
                                                    ({}({ ...{}, }));
                                                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.shab1))) {
                                                        {
                                                            const __VLS_277 = {}.QItem;
                                                            const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, new __VLS_277({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }));
                                                            ({}.QItem);
                                                            const __VLS_279 = __VLS_278({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }, ...__VLS_functionalComponentArgsRest(__VLS_278));
                                                            ({}({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }));
                                                            __VLS_styleScopedClasses = ({ selected: item.selected });
                                                            let __VLS_282 = { 'click': __VLS_pickEvent(__VLS_281['click'], {}.onClick) };
                                                            __VLS_282 = { click: $event => {
                                                                    if (!((__VLS_ctx.mode == 'single')))
                                                                        return;
                                                                    __VLS_ctx.select1(item);
                                                                    // @ts-ignore
                                                                    [mode, datesingle, datesingle, datesingle, shab1, select1,];
                                                                }
                                                            };
                                                            {
                                                                const __VLS_283 = {}.QItemSection;
                                                                const __VLS_284 = __VLS_asFunctionalComponent(__VLS_283, new __VLS_283({ ...{}, }));
                                                                ({}.QItemSection);
                                                                const __VLS_285 = __VLS_284({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_284));
                                                                ({}({ ...{}, }));
                                                                {
                                                                    const __VLS_288 = {}.QItemLabel;
                                                                    const __VLS_289 = __VLS_asFunctionalComponent(__VLS_288, new __VLS_288({ ...{}, }));
                                                                    ({}.QItemLabel);
                                                                    const __VLS_290 = __VLS_289({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_289));
                                                                    ({}({ ...{}, }));
                                                                    (item.label);
                                                                    (__VLS_291.slots).default;
                                                                    const __VLS_291 = __VLS_pickFunctionalComponentCtx(__VLS_288, __VLS_290);
                                                                }
                                                                (__VLS_286.slots).default;
                                                                const __VLS_286 = __VLS_pickFunctionalComponentCtx(__VLS_283, __VLS_285);
                                                            }
                                                            (__VLS_280.slots).default;
                                                            const __VLS_280 = __VLS_pickFunctionalComponentCtx(__VLS_277, __VLS_279);
                                                            let __VLS_281;
                                                        }
                                                    }
                                                    (__VLS_275.slots).default;
                                                    const __VLS_275 = __VLS_pickFunctionalComponentCtx(__VLS_272, __VLS_274);
                                                }
                                                (__VLS_270.slots).default;
                                                const __VLS_270 = __VLS_pickFunctionalComponentCtx(__VLS_267, __VLS_269);
                                            }
                                            (__VLS_265.slots).default;
                                            const __VLS_265 = __VLS_pickFunctionalComponentCtx(__VLS_262, __VLS_264);
                                        }
                                    }
                                }
                                const __VLS_256 = __VLS_pickFunctionalComponentCtx(__VLS_253, __VLS_255);
                            }
                            {
                                const __VLS_293 = {}.QDate;
                                const __VLS_294 = __VLS_asFunctionalComponent(__VLS_293, new __VLS_293({ ...{}, modelValue: ((__VLS_ctx.datesingle)), todayBtn: (true), mask: ("DD.MM.YYYY"), }));
                                ({}.QDate);
                                const __VLS_295 = __VLS_294({ ...{}, modelValue: ((__VLS_ctx.datesingle)), todayBtn: (true), mask: ("DD.MM.YYYY"), }, ...__VLS_functionalComponentArgsRest(__VLS_294));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.datesingle)), todayBtn: (true), mask: ("DD.MM.YYYY"), }));
                                const __VLS_296 = __VLS_pickFunctionalComponentCtx(__VLS_293, __VLS_295);
                            }
                            // @ts-ignore
                            [datesingle, datesingle, datesingle,];
                        }
                        if (__VLS_ctx.mode == 'range') {
                            {
                                const __VLS_298 = {}.QInput;
                                const __VLS_299 = __VLS_asFunctionalComponent(__VLS_298, new __VLS_298({ ...{}, modelValue: ((__VLS_ctx.date)), dense: (true), filled: (true), }));
                                ({}.QInput);
                                const __VLS_300 = __VLS_299({ ...{}, modelValue: ((__VLS_ctx.date)), dense: (true), filled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_299));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.date)), dense: (true), filled: (true), }));
                                {
                                    const __VLS_303 = __VLS_intrinsicElements["template"];
                                    const __VLS_304 = __VLS_elementAsFunctionalComponent(__VLS_303);
                                    const __VLS_305 = __VLS_304({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_304));
                                    ({}({ ...{}, }));
                                    {
                                        (__VLS_301.slots).append;
                                        {
                                            const __VLS_307 = {}.QIcon;
                                            const __VLS_308 = __VLS_asFunctionalComponent(__VLS_307, new __VLS_307({ ...{}, class: (" cursor-pointer"), name: ("mdi-dots-vertical"), color: ("primary"), }));
                                            ({}.QIcon);
                                            const __VLS_309 = __VLS_308({ ...{}, class: (" cursor-pointer"), name: ("mdi-dots-vertical"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_308));
                                            ({}({ ...{}, class: (" cursor-pointer"), name: ("mdi-dots-vertical"), color: ("primary"), }));
                                            {
                                                const __VLS_312 = {}.QMenu;
                                                const __VLS_313 = __VLS_asFunctionalComponent(__VLS_312, new __VLS_312({ ...{}, }));
                                                ({}.QMenu);
                                                const __VLS_314 = __VLS_313({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_313));
                                                ({}({ ...{}, }));
                                                {
                                                    const __VLS_317 = {}.QList;
                                                    const __VLS_318 = __VLS_asFunctionalComponent(__VLS_317, new __VLS_317({ ...{}, }));
                                                    ({}.QList);
                                                    const __VLS_319 = __VLS_318({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_318));
                                                    ({}({ ...{}, }));
                                                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.shab))) {
                                                        {
                                                            const __VLS_322 = {}.QItem;
                                                            const __VLS_323 = __VLS_asFunctionalComponent(__VLS_322, new __VLS_322({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }));
                                                            ({}.QItem);
                                                            const __VLS_324 = __VLS_323({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }, ...__VLS_functionalComponentArgsRest(__VLS_323));
                                                            ({}({ ...{ 'onClick': {}, }, clickable: (true), key: ((item.id)), class: (({ selected: item.selected })), }));
                                                            __VLS_styleScopedClasses = ({ selected: item.selected });
                                                            let __VLS_327 = { 'click': __VLS_pickEvent(__VLS_326['click'], {}.onClick) };
                                                            __VLS_327 = { click: $event => {
                                                                    if (!((__VLS_ctx.mode == 'range')))
                                                                        return;
                                                                    __VLS_ctx.select(item);
                                                                    // @ts-ignore
                                                                    [mode, date, date, date, shab, select,];
                                                                }
                                                            };
                                                            {
                                                                const __VLS_328 = {}.QItemSection;
                                                                const __VLS_329 = __VLS_asFunctionalComponent(__VLS_328, new __VLS_328({ ...{}, }));
                                                                ({}.QItemSection);
                                                                const __VLS_330 = __VLS_329({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_329));
                                                                ({}({ ...{}, }));
                                                                {
                                                                    const __VLS_333 = {}.QItemLabel;
                                                                    const __VLS_334 = __VLS_asFunctionalComponent(__VLS_333, new __VLS_333({ ...{}, }));
                                                                    ({}.QItemLabel);
                                                                    const __VLS_335 = __VLS_334({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_334));
                                                                    ({}({ ...{}, }));
                                                                    (item.label);
                                                                    (__VLS_336.slots).default;
                                                                    const __VLS_336 = __VLS_pickFunctionalComponentCtx(__VLS_333, __VLS_335);
                                                                }
                                                                (__VLS_331.slots).default;
                                                                const __VLS_331 = __VLS_pickFunctionalComponentCtx(__VLS_328, __VLS_330);
                                                            }
                                                            (__VLS_325.slots).default;
                                                            const __VLS_325 = __VLS_pickFunctionalComponentCtx(__VLS_322, __VLS_324);
                                                            let __VLS_326;
                                                        }
                                                    }
                                                    (__VLS_320.slots).default;
                                                    const __VLS_320 = __VLS_pickFunctionalComponentCtx(__VLS_317, __VLS_319);
                                                }
                                                (__VLS_315.slots).default;
                                                const __VLS_315 = __VLS_pickFunctionalComponentCtx(__VLS_312, __VLS_314);
                                            }
                                            (__VLS_310.slots).default;
                                            const __VLS_310 = __VLS_pickFunctionalComponentCtx(__VLS_307, __VLS_309);
                                        }
                                    }
                                }
                                const __VLS_301 = __VLS_pickFunctionalComponentCtx(__VLS_298, __VLS_300);
                            }
                            {
                                const __VLS_338 = {}.QDate;
                                const __VLS_339 = __VLS_asFunctionalComponent(__VLS_338, new __VLS_338({ ...{ 'onUpdate:modelValue': {}, }, modelValue: ((__VLS_ctx.dateobject)), todayBtn: (true), range: (true), mask: ("DD.MM.YYYY"), }));
                                ({}.QDate);
                                const __VLS_340 = __VLS_339({ ...{ 'onUpdate:modelValue': {}, }, modelValue: ((__VLS_ctx.dateobject)), todayBtn: (true), range: (true), mask: ("DD.MM.YYYY"), }, ...__VLS_functionalComponentArgsRest(__VLS_339));
                                ({}({ ...{ 'onUpdate:modelValue': {}, }, modelValue: ((__VLS_ctx.dateobject)), todayBtn: (true), range: (true), mask: ("DD.MM.YYYY"), }));
                                let __VLS_343 = { 'update:model-value': __VLS_pickEvent(__VLS_342['update:model-value'], {}['onUpdate:modelValue']) };
                                __VLS_343 = { "update:model-value": (__VLS_ctx.fill) };
                                const __VLS_341 = __VLS_pickFunctionalComponentCtx(__VLS_338, __VLS_340);
                                let __VLS_342;
                            }
                            // @ts-ignore
                            [dateobject, dateobject, dateobject, fill,];
                        }
                        {
                            const __VLS_344 = {}.QSeparator;
                            const __VLS_345 = __VLS_asFunctionalComponent(__VLS_344, new __VLS_344({ ...{}, }));
                            ({}.QSeparator);
                            const __VLS_346 = __VLS_345({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_345));
                            ({}({ ...{}, }));
                            const __VLS_347 = __VLS_pickFunctionalComponentCtx(__VLS_344, __VLS_346);
                        }
                        {
                            const __VLS_349 = __VLS_intrinsicElements["div"];
                            const __VLS_350 = __VLS_elementAsFunctionalComponent(__VLS_349);
                            const __VLS_351 = __VLS_350({ ...{}, class: (" row justify-between items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_350));
                            ({}({ ...{}, class: (" row justify-between items-center"), }));
                            {
                                const __VLS_354 = {}.QBtn;
                                const __VLS_355 = __VLS_asFunctionalComponent(__VLS_354, new __VLS_354({ ...{ 'onClick': {}, }, class: (" red"), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }));
                                ({}.QBtn);
                                const __VLS_356 = __VLS_355({ ...{ 'onClick': {}, }, class: (" red"), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_355));
                                ({}({ ...{ 'onClick': {}, }, class: (" red"), flat: (true), round: (true), icon: ("mdi-trash-can-outline"), }));
                                let __VLS_359 = { 'click': __VLS_pickEvent(__VLS_358['click'], {}.onClick) };
                                __VLS_359 = { click: (__VLS_ctx.clear) };
                                const __VLS_357 = __VLS_pickFunctionalComponentCtx(__VLS_354, __VLS_356);
                                let __VLS_358;
                            }
                            {
                                const __VLS_360 = {}.QBtn;
                                const __VLS_361 = __VLS_asFunctionalComponent(__VLS_360, new __VLS_360({ ...{}, flat: (true), color: ("primary"), label: ("Применить"), }));
                                ({}.QBtn);
                                const __VLS_362 = __VLS_361({ ...{}, flat: (true), color: ("primary"), label: ("Применить"), }, ...__VLS_functionalComponentArgsRest(__VLS_361));
                                ({}({ ...{}, flat: (true), color: ("primary"), label: ("Применить"), }));
                                __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                const __VLS_363 = __VLS_pickFunctionalComponentCtx(__VLS_360, __VLS_362);
                            }
                            (__VLS_352.slots).default;
                            const __VLS_352 = __VLS_pickFunctionalComponentCtx(__VLS_349, __VLS_351);
                        }
                        (__VLS_187.slots).default;
                        const __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_184, __VLS_186);
                    }
                    (__VLS_182.slots).default;
                    const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181);
                }
                (__VLS_177.slots).default;
                const __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["q-gutter-x-md"];
        __VLS_styleScopedClasses["cursor-pointer"];
        __VLS_styleScopedClasses["cursor-pointer"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["red"];
        __VLS_styleScopedClasses["q-gutter-x-md"];
        __VLS_styleScopedClasses["cursor-pointer"];
        __VLS_styleScopedClasses["cursor-pointer"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["red"];
    }
    var __VLS_slots;
    // @ts-ignore
    [clear,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            mode: mode,
            query: query,
            dateobject: dateobject,
            date: date,
            clear: clear,
            datesingle: datesingle,
            list: list,
            shab1: shab1,
            shab: shab,
            filtered: filtered,
            toggle: toggle,
            fill: fill,
            select: select,
            select1: select1,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Calendar.vue.js.map