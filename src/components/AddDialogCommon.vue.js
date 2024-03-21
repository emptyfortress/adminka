/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    dv: {
        type: Boolean,
        default: false,
    },
    worker: {
        type: Boolean,
        default: false,
    },
    connection: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['add', 'update:modelValue']);
const newname = ref('name');
const config = ref('');
const config1 = ref('Базовые объекты');
const options = ['Option 1'];
const addConnection = (e) => {
    emit('add', e);
};
const close = () => {
    emit('update:modelValue', false);
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
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn,];
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect, QSelect,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = {}.QDialog;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, modelValue: ((props.modelValue)), }));
        ({}.QDialog);
        const __VLS_2 = __VLS_1({ ...{}, modelValue: ((props.modelValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, modelValue: ((props.modelValue)), }));
        {
            const __VLS_5 = {}.QCard;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, style: ({}), }));
            ({}.QCard);
            const __VLS_7 = __VLS_6({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, style: ({}), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" row items-center q-pb-none"), }));
                if (props.dv) {
                    {
                        const __VLS_15 = __VLS_intrinsicElements["div"];
                        const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                        const __VLS_17 = __VLS_16({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_18.slots).default;
                        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                    }
                }
                if (props.worker) {
                    {
                        const __VLS_20 = __VLS_intrinsicElements["div"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                }
                if (props.connection) {
                    {
                        const __VLS_25 = __VLS_intrinsicElements["div"];
                        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                        const __VLS_27 = __VLS_26({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, class: (" text-h6"), }));
                        (__VLS_28.slots).default;
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
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
                    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ 'onClick': {}, }, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                    ({}.QBtn);
                    const __VLS_37 = __VLS_36({ ...{ 'onClick': {}, }, icon: ("close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{ 'onClick': {}, }, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                    let __VLS_40 = { 'click': __VLS_pickEvent(__VLS_39['click'], {}.onClick) };
                    __VLS_40 = { click: (__VLS_ctx.close) };
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    let __VLS_39;
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_41 = {}.QForm;
                const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{ 'onSubmit': {}, }, }));
                ({}.QForm);
                const __VLS_43 = __VLS_42({ ...{ 'onSubmit': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                ({}({ ...{ 'onSubmit': {}, }, }));
                let __VLS_46 = { 'submit': __VLS_pickEvent(__VLS_45['submit'], {}.onSubmit) };
                __VLS_46 = { submit: $event => {
                        __VLS_ctx.addConnection(__VLS_ctx.newname);
                        // @ts-ignore
                        [close, addConnection, newname,];
                    }
                };
                {
                    const __VLS_47 = {}.QCardSection;
                    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_49 = __VLS_48({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
                    ({}({ ...{}, }));
                    if (props.dv) {
                        {
                            const __VLS_52 = {}.QInput;
                            const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Название конфигурации"), }));
                            ({}.QInput);
                            const __VLS_54 = __VLS_53({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Название конфигурации"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                            ({}({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Название конфигурации"), }));
                            let __VLS_57 = { 'submit': __VLS_pickEvent(__VLS_56['submit'], {}.onSubmit) };
                            __VLS_57 = { submit: $event => {
                                    if (!((props.dv)))
                                        return;
                                    __VLS_ctx.addConnection(__VLS_ctx.newname);
                                    // @ts-ignore
                                    [newname, newname, newname, addConnection, newname,];
                                }
                            };
                            const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
                            let __VLS_56;
                        }
                    }
                    if (props.worker) {
                        {
                            const __VLS_58 = {}.QInput;
                            const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя процесса"), }));
                            ({}.QInput);
                            const __VLS_60 = __VLS_59({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя процесса"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
                            ({}({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя процесса"), }));
                            let __VLS_63 = { 'submit': __VLS_pickEvent(__VLS_62['submit'], {}.onSubmit) };
                            __VLS_63 = { submit: $event => {
                                    if (!((props.worker)))
                                        return;
                                    __VLS_ctx.addConnection(__VLS_ctx.newname);
                                    // @ts-ignore
                                    [newname, newname, newname, addConnection, newname,];
                                }
                            };
                            const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
                            let __VLS_62;
                        }
                    }
                    if (props.connection) {
                        {
                            const __VLS_64 = {}.QInput;
                            const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя соединения"), }));
                            ({}.QInput);
                            const __VLS_66 = __VLS_65({ ...{}, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя соединения"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                            ({}({ ...{}, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя соединения"), }));
                            const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                        }
                        // @ts-ignore
                        [newname, newname, newname,];
                    }
                    if (props.worker) {
                        {
                            const __VLS_69 = {}.QSelect;
                            const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{}, modelValue: ((__VLS_ctx.config1)), options: ((__VLS_ctx.options)), label: ("Тип конфигурации"), }));
                            ({}.QSelect);
                            const __VLS_71 = __VLS_70({ ...{}, modelValue: ((__VLS_ctx.config1)), options: ((__VLS_ctx.options)), label: ("Тип конфигурации"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.config1)), options: ((__VLS_ctx.options)), label: ("Тип конфигурации"), }));
                            const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
                        }
                        // @ts-ignore
                        [config1, options, config1, options, config1, options,];
                    }
                    if (__VLS_ctx.connection) {
                        {
                            const __VLS_74 = {}.QSelect;
                            const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{}, modelValue: ((__VLS_ctx.config)), options: ((__VLS_ctx.options)), label: ("Конфигурация"), }));
                            ({}.QSelect);
                            const __VLS_76 = __VLS_75({ ...{}, modelValue: ((__VLS_ctx.config)), options: ((__VLS_ctx.options)), label: ("Конфигурация"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.config)), options: ((__VLS_ctx.options)), label: ("Конфигурация"), }));
                            const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                        }
                        {
                            const __VLS_79 = {}.QSelect;
                            const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{}, modelValue: ((__VLS_ctx.config)), options: ((__VLS_ctx.options)), label: ("База данных"), }));
                            ({}.QSelect);
                            const __VLS_81 = __VLS_80({ ...{}, modelValue: ((__VLS_ctx.config)), options: ((__VLS_ctx.options)), label: ("База данных"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.config)), options: ((__VLS_ctx.options)), label: ("База данных"), }));
                            const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
                        }
                        // @ts-ignore
                        [connection, config, options, config, options, config, options, config, options, config, options, config, options,];
                    }
                    (__VLS_50.slots).default;
                    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
                }
                {
                    const __VLS_84 = {}.QCardActions;
                    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{}, align: ("right"), }));
                    ({}.QCardActions);
                    const __VLS_86 = __VLS_85({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                    ({}({ ...{}, align: ("right"), }));
                    {
                        const __VLS_89 = {}.QBtn;
                        const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_91 = __VLS_90({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                        ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                        let __VLS_94 = { 'click': __VLS_pickEvent(__VLS_93['click'], {}.onClick) };
                        __VLS_94 = { click: (__VLS_ctx.close) };
                        const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
                        let __VLS_93;
                    }
                    {
                        const __VLS_95 = {}.QBtn;
                        const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, unelevated: (true), color: ("primary"), type: ("submit"), label: ("Добавить"), }));
                        ({}.QBtn);
                        const __VLS_97 = __VLS_96({ ...{}, unelevated: (true), color: ("primary"), type: ("submit"), label: ("Добавить"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                        ({}({ ...{}, unelevated: (true), color: ("primary"), type: ("submit"), label: ("Добавить"), }));
                        __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                        const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                    }
                    (__VLS_87.slots).default;
                    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
                }
                (__VLS_44.slots).default;
                const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                let __VLS_45;
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-pb-none"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["text-h6"];
    }
    var __VLS_slots;
    // @ts-ignore
    [close,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            newname: newname,
            config: config,
            config1: config1,
            options: options,
            addConnection: addConnection,
            close: close,
        };
    },
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        dv: {
            type: Boolean,
            default: false,
        },
        worker: {
            type: Boolean,
            default: false,
        },
        connection: {
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
        modelValue: {
            type: Boolean,
            default: false,
        },
        dv: {
            type: Boolean,
            default: false,
        },
        worker: {
            type: Boolean,
            default: false,
        },
        connection: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
//# sourceMappingURL=AddDialogCommon.vue.js.map