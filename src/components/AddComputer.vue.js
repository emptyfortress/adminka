/* __placeholder__ */
import { ref } from 'vue';
import { useStore } from '@/stores/store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const newname = ref('');
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['update:modelValue']);
const close = () => {
    emit('update:modelValue', false);
};
const add = (e) => {
    store.addComputer(e);
    store.tabs1 = e;
    newname.value = '';
    close();
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
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection, QCardSection, QCardSection,];
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
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
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
            ({}.QCard);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            {
                const __VLS_10 = {}.QCardSection;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: (" row items-center q-pb-none"), }));
                ({}.QCardSection);
                const __VLS_12 = __VLS_11({ ...{}, class: (" row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" row items-center q-pb-none"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: (" text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: (" text-h6"), }));
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
                    const __VLS_25 = {}.QBtn;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ 'onClick': {}, }, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                    ({}.QBtn);
                    const __VLS_27 = __VLS_26({ ...{ 'onClick': {}, }, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{ 'onClick': {}, }, icon: ("mdi-close"), flat: (true), round: (true), dense: (true), }));
                    let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
                    __VLS_30 = { click: (__VLS_ctx.close) };
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    let __VLS_29;
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_31 = {}.QForm;
                const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onSubmit': {}, }, }));
                ({}.QForm);
                const __VLS_33 = __VLS_32({ ...{ 'onSubmit': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                ({}({ ...{ 'onSubmit': {}, }, }));
                let __VLS_36 = { 'submit': __VLS_pickEvent(__VLS_35['submit'], {}.onSubmit) };
                __VLS_36 = { submit: $event => {
                        __VLS_ctx.add(__VLS_ctx.newname);
                        // @ts-ignore
                        [close, add, newname,];
                    }
                };
                {
                    const __VLS_37 = {}.QCardSection;
                    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, }));
                    ({}.QCardSection);
                    const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                    ({}({ ...{}, }));
                    {
                        const __VLS_42 = {}.QInput;
                        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя компьютера в сети"), }));
                        ({}.QInput);
                        const __VLS_44 = __VLS_43({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя компьютера в сети"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                        ({}({ ...{ 'onSubmit': {}, }, autofocus: (true), modelValue: ((__VLS_ctx.newname)), label: ("Имя компьютера в сети"), }));
                        let __VLS_47 = { 'submit': __VLS_pickEvent(__VLS_46['submit'], {}.onSubmit) };
                        __VLS_47 = { submit: $event => {
                                __VLS_ctx.add(__VLS_ctx.newname);
                                // @ts-ignore
                                [newname, newname, newname, add, newname,];
                            }
                        };
                        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
                        let __VLS_46;
                    }
                    {
                        const __VLS_48 = {}.QCardSection;
                        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{}, }));
                        ({}.QCardSection);
                        const __VLS_50 = __VLS_49({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                        ({}({ ...{}, }));
                        {
                            const __VLS_53 = {}.QCardActions;
                            const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ ...{}, align: ("right"), }));
                            ({}.QCardActions);
                            const __VLS_55 = __VLS_54({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
                            ({}({ ...{}, align: ("right"), }));
                            {
                                const __VLS_58 = {}.QBtn;
                                const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                                ({}.QBtn);
                                const __VLS_60 = __VLS_59({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
                                ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), label: ("Отмена"), }));
                                let __VLS_63 = { 'click': __VLS_pickEvent(__VLS_62['click'], {}.onClick) };
                                __VLS_63 = { click: (__VLS_ctx.close) };
                                const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
                                let __VLS_62;
                            }
                            {
                                const __VLS_64 = {}.QBtn;
                                const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, unelevated: (true), color: ("primary"), label: ("Добавить"), type: ("submit"), }));
                                ({}.QBtn);
                                const __VLS_66 = __VLS_65({ ...{}, unelevated: (true), color: ("primary"), label: ("Добавить"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                                ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Добавить"), type: ("submit"), }));
                                const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                            }
                            (__VLS_56.slots).default;
                            const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
                        }
                        (__VLS_51.slots).default;
                        const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                    }
                    (__VLS_40.slots).default;
                    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
                }
                (__VLS_34.slots).default;
                const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                let __VLS_35;
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
            close: close,
            add: add,
        };
    },
    props: {
        modelValue: {
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
    },
    emits: {},
});
//# sourceMappingURL=AddComputer.vue.js.map