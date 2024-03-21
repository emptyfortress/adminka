/* __placeholder__ */
import { ref, } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const loading = ref(false);
const props = defineProps({
    change: {
        type: Boolean,
        default: false,
    },
    changename: String,
});
const emit = defineEmits(['changeDef']);
const changeDef = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        emit('changeDef');
    }, 1000);
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
    __VLS_intrinsicElements.span;
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = {}.QDialog;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, modelValue: ((props.change)), }));
        ({}.QDialog);
        const __VLS_2 = __VLS_1({ ...{}, modelValue: ((props.change)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, modelValue: ((props.change)), }));
        {
            const __VLS_5 = {}.QCard;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-pa-sm"), }));
            ({}.QCard);
            const __VLS_7 = __VLS_6({ ...{}, class: (" q-pa-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" q-pa-sm"), }));
            {
                const __VLS_10 = {}.QCardSection;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: ("row items-center q-pb-none"), }));
                ({}.QCardSection);
                const __VLS_12 = __VLS_11({ ...{}, class: ("row items-center q-pb-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("row items-center q-pb-none"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: ("text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: ("text-h6"), }));
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
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                    ({}.QBtn);
                    const __VLS_27 = __VLS_26({ ...{}, icon: ("close"), flat: (true), round: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, icon: ("close"), flat: (true), round: (true), dense: (true), }));
                    __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_30 = {}.QCardSection;
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, }));
                ({}.QCardSection);
                const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, }));
                {
                    const __VLS_35 = __VLS_intrinsicElements["span"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, class: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: ("name"), }));
                    (__VLS_ctx.changename);
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                (__VLS_33.slots).default;
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            {
                const __VLS_40 = {}.QCardSection;
                const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, class: (" def"), }));
                ({}.QCardSection);
                const __VLS_42 = __VLS_41({ ...{}, class: (" def"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                ({}({ ...{}, class: (" def"), }));
                (__VLS_43.slots).default;
                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
            }
            {
                const __VLS_45 = {}.QCardActions;
                const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, align: ("right"), }));
                ({}.QCardActions);
                const __VLS_47 = __VLS_46({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, align: ("right"), }));
                {
                    const __VLS_50 = {}.QBtn;
                    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, flat: (true), label: ("Отмена"), color: ("primary"), }));
                    ({}.QBtn);
                    const __VLS_52 = __VLS_51({ ...{}, flat: (true), label: ("Отмена"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, flat: (true), label: ("Отмена"), color: ("primary"), }));
                    __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                {
                    const __VLS_55 = {}.QBtn;
                    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ 'onClick': {}, }, flat: (true), label: ("Назначить"), color: ("primary"), loading: ((__VLS_ctx.loading)), }));
                    ({}.QBtn);
                    const __VLS_57 = __VLS_56({ ...{ 'onClick': {}, }, flat: (true), label: ("Назначить"), color: ("primary"), loading: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                    ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Назначить"), color: ("primary"), loading: ((__VLS_ctx.loading)), }));
                    let __VLS_60 = { 'click': __VLS_pickEvent(__VLS_59['click'], {}.onClick) };
                    __VLS_60 = { click: (__VLS_ctx.changeDef) };
                    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                    let __VLS_59;
                }
                (__VLS_48.slots).default;
                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["q-pa-sm"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-pb-none"];
        __VLS_styleScopedClasses["text-h6"];
        __VLS_styleScopedClasses["name"];
        __VLS_styleScopedClasses["def"];
    }
    var __VLS_slots;
    // @ts-ignore
    [changename, loading, loading, loading, changeDef,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            loading: loading,
            changeDef: changeDef,
        };
    },
    props: {
        change: {
            type: Boolean,
            default: false,
        },
        changename: String,
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        change: {
            type: Boolean,
            default: false,
        },
        changename: String,
    },
    emits: {},
});
//# sourceMappingURL=ChangeDialog.vue.js.map