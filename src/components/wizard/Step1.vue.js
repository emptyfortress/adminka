/* __placeholder__ */
import { ref, defineExpose } from 'vue';
import { useForm } from '@/stores/form';
const { defineProps, defineSlots, defineEmits, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    text: {
        type: String,
        default: 'Выберите сервер SQL, под управлением которого будет работать создаваемая база данных:',
    },
});
const forms = useForm();
const foorm = ref();
const validate = () => {
    foorm.value.validate().then((success) => {
        if (success === true) {
            forms.step1.success = true;
        }
        else {
            forms.step1.success = false;
        }
    });
};
const req = [(val) => (val && val.length > 0) || 'Это обязательное поле'];
const __VLS_exposed = { validate };
defineExpose({ validate });
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput, QInput,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" text-bold"), }));
        (props.text);
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_5 = {}.QForm;
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-mt-md"), ref: ("foorm"), greedy: (true), }));
        ({}.QForm);
        const __VLS_7 = __VLS_6({ ...{}, class: (" q-mt-md"), ref: ("foorm"), greedy: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (" q-mt-md"), ref: ("foorm"), greedy: (true), }));
        // @ts-ignore
        (__VLS_ctx.foorm);
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" form"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["label"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_20 = {}.QSelect;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, modelValue: ((__VLS_ctx.forms.step1.type)), options: ((__VLS_ctx.forms.step1.options)), dense: (true), outlined: (true), hideBottomSpace: (true), bgColor: ("white"), }));
                ({}.QSelect);
                const __VLS_22 = __VLS_21({ ...{}, modelValue: ((__VLS_ctx.forms.step1.type)), options: ((__VLS_ctx.forms.step1.options)), dense: (true), outlined: (true), hideBottomSpace: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, modelValue: ((__VLS_ctx.forms.step1.type)), options: ((__VLS_ctx.forms.step1.options)), dense: (true), outlined: (true), hideBottomSpace: (true), bgColor: ("white"), }));
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            {
                const __VLS_25 = __VLS_intrinsicElements["label"];
                const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, }));
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            {
                const __VLS_30 = {}.QInput;
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, modelValue: ((__VLS_ctx.forms.step1.name)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_32 = __VLS_31({ ...{}, modelValue: ((__VLS_ctx.forms.step1.name)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, modelValue: ((__VLS_ctx.forms.step1.name)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            if (__VLS_ctx.forms.step1.type !== 'MS SQL Server') {
                {
                    const __VLS_35 = __VLS_intrinsicElements["label"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, }));
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_40 = {}.QInput;
                    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, modelValue: ((__VLS_ctx.forms.step1.port)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), type: ("number"), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_42 = __VLS_41({ ...{}, modelValue: ((__VLS_ctx.forms.step1.port)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), type: ("number"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.forms.step1.port)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), type: ("number"), rules: ((__VLS_ctx.req)), }));
                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                }
                // @ts-ignore
                [foorm, forms, forms, forms, forms, forms, forms, forms, req, forms, req, forms, req, forms, forms, req, forms, req, forms, req,];
            }
            {
                const __VLS_45 = __VLS_intrinsicElements["label"];
                const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, }));
                (__VLS_48.slots).default;
                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            }
            {
                const __VLS_50 = {}.QSelect;
                const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, modelValue: ((__VLS_ctx.forms.step1.check)), options: ((__VLS_ctx.forms.step1.options1)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QSelect);
                const __VLS_52 = __VLS_51({ ...{}, modelValue: ((__VLS_ctx.forms.step1.check)), options: ((__VLS_ctx.forms.step1.options1)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                ({}({ ...{}, modelValue: ((__VLS_ctx.forms.step1.check)), options: ((__VLS_ctx.forms.step1.options1)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
            }
            {
                const __VLS_55 = __VLS_intrinsicElements["label"];
                const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                ({}({ ...{}, }));
                (__VLS_58.slots).default;
                const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
            }
            {
                const __VLS_60 = {}.QInput;
                const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, modelValue: ((__VLS_ctx.forms.step1.login)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_62 = __VLS_61({ ...{}, modelValue: ((__VLS_ctx.forms.step1.login)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                ({}({ ...{}, modelValue: ((__VLS_ctx.forms.step1.login)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
            }
            {
                const __VLS_65 = __VLS_intrinsicElements["label"];
                const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}({ ...{}, }));
                (__VLS_68.slots).default;
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
            {
                const __VLS_70 = {}.QInput;
                const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, modelValue: ((__VLS_ctx.forms.step1.pass)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_72 = __VLS_71({ ...{}, modelValue: ((__VLS_ctx.forms.step1.pass)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                ({}({ ...{}, modelValue: ((__VLS_ctx.forms.step1.pass)), dense: (true), hideBottomSpace: (true), outlined: (true), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["form"];
    }
    var __VLS_slots;
    // @ts-ignore
    [forms, forms, req, forms, forms, req, forms, forms, req, forms, req, forms, req, forms, req, forms, req, forms, req, forms, req,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            forms: forms,
            foorm: foorm,
            req: req,
        };
    },
    props: {
        text: {
            type: String,
            default: 'Выберите сервер SQL, под управлением которого будет работать создаваемая база данных:',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    props: {
        text: {
            type: String,
            default: 'Выберите сервер SQL, под управлением которого будет работать создаваемая база данных:',
        },
    },
});
//# sourceMappingURL=Step1.vue.js.map