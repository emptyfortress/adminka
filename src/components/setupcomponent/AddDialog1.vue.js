/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    showAdd: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['addGroup', 'update:modelValue']);
const name = ref();
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
    __VLS_intrinsicElements.p;
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = {}.QDialog;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, modelValue: ((props.showAdd)), }));
        ({}.QDialog);
        const __VLS_2 = __VLS_1({ ...{}, modelValue: ((props.showAdd)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, modelValue: ((props.showAdd)), }));
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
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ 'onClick': {}, }, icon: ('mdi-close'), flat: (true), round: (true), dense: (true), }));
                    ({}.QBtn);
                    const __VLS_27 = __VLS_26({ ...{ 'onClick': {}, }, icon: ('mdi-close'), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{ 'onClick': {}, }, icon: ('mdi-close'), flat: (true), round: (true), dense: (true), }));
                    let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
                    __VLS_30 = { click: (__VLS_ctx.close) };
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    let __VLS_29;
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_31 = {}.QCardSection;
                const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, }));
                ({}.QCardSection);
                const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                ({}({ ...{}, }));
                {
                    const __VLS_36 = __VLS_intrinsicElements["p"];
                    const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                    const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                    ({}({ ...{}, }));
                    (__VLS_39.slots).default;
                    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                }
                (__VLS_34.slots).default;
                const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
            }
            {
                const __VLS_41 = {}.QCardSection;
                const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, }));
                ({}.QCardSection);
                const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                ({}({ ...{}, }));
                {
                    const __VLS_46 = {}.QCardActions;
                    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, align: ('right'), }));
                    ({}.QCardActions);
                    const __VLS_48 = __VLS_47({ ...{}, align: ('right'), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                    ({}({ ...{}, align: ('right'), }));
                    {
                        const __VLS_51 = {}.QBtn;
                        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, unelevated: (true), color: ("primary"), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_53 = __VLS_52({ ...{}, unelevated: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                        ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Отмена"), }));
                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                    }
                    {
                        const __VLS_56 = {}.QBtn;
                        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, unelevated: (true), color: ("primary"), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_58 = __VLS_57({ ...{}, unelevated: (true), color: ("primary"), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                        ({}({ ...{}, unelevated: (true), color: ("primary"), label: ("Отмена"), }));
                        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                    }
                    (__VLS_49.slots).default;
                    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                }
                (__VLS_44.slots).default;
                const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
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
            close: close,
        };
    },
    props: {
        showAdd: {
            type: Boolean,
            default: false
        }
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        showAdd: {
            type: Boolean,
            default: false
        }
    },
    emits: {},
});
//# sourceMappingURL=AddDialog1.vue.js.map