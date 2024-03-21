/* __placeholder__ */
import { ref, watch } from 'vue';
import { useBp } from '@/stores/bp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['change', 'haserror', 'noerror']);
const bp = useBp();
const req = [(val) => (val && val.length > 0) || 'Это обязательное поле'];
watch(bp.nastr, (value) => {
    if (value) {
        emit('change');
    }
});
const myform = ref();
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput,];
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
    {
        const __VLS_0 = {}.QForm;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("myform"), noErrorFocus: (true), }));
        ({}.QForm);
        const __VLS_2 = __VLS_1({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("myform"), noErrorFocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("myform"), noErrorFocus: (true), }));
        // @ts-ignore
        (__VLS_ctx.myform);
        let __VLS_5 = { 'validation-error': __VLS_pickEvent(__VLS_4['validation-error'], {}.onValidationError) };
        __VLS_5 = { "validation-error": $event => {
                __VLS_ctx.$emit('haserror');
                // @ts-ignore
                [myform, $emit,];
            }
        };
        let __VLS_6 = { 'validation-success': __VLS_pickEvent(__VLS_4['validation-success'], {}.onValidationSuccess) };
        __VLS_6 = { "validation-success": $event => {
                __VLS_ctx.$emit('noerror');
                // @ts-ignore
                [$emit,];
            }
        };
        {
            const __VLS_7 = __VLS_intrinsicElements["fieldset"];
            const __VLS_8 = __VLS_elementAsFunctionalComponent(__VLS_7);
            const __VLS_9 = __VLS_8({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{}, }));
            {
                const __VLS_12 = __VLS_intrinsicElements["legend"];
                const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
                const __VLS_14 = __VLS_13({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ ...{}, }));
                (__VLS_15.slots).default;
                const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
            {
                const __VLS_17 = __VLS_intrinsicElements["div"];
                const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                const __VLS_19 = __VLS_18({ ...{}, class: (" form1"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{}, class: (" form1"), }));
                {
                    const __VLS_22 = __VLS_intrinsicElements["div"];
                    const __VLS_23 = __VLS_elementAsFunctionalComponent(__VLS_22);
                    const __VLS_24 = __VLS_23({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_25.slots).default;
                    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
                }
                {
                    const __VLS_27 = {}.QInput;
                    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.nastr.path)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_29 = __VLS_28({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.nastr.path)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                    ({}({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.nastr.path)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    let __VLS_32 = { 'blur': __VLS_pickEvent(__VLS_31['blur'], {}.onBlur) };
                    __VLS_32 = { blur: $event => {
                            __VLS_ctx.myform.validate();
                            // @ts-ignore
                            [bp, req, bp, req, bp, req, myform,];
                        }
                    };
                    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                    let __VLS_31;
                }
                {
                    const __VLS_33 = __VLS_intrinsicElements["div"];
                    const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
                    const __VLS_35 = __VLS_34({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                    ({}({ ...{}, }));
                    {
                        const __VLS_38 = {}.QBtn;
                        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{}, class: (" q-mr-sm"), flat: (true), round: (true), icon: ("mdi-dots-horizontal"), color: ("primary"), }));
                        ({}.QBtn);
                        const __VLS_40 = __VLS_39({ ...{}, class: (" q-mr-sm"), flat: (true), round: (true), icon: ("mdi-dots-horizontal"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                        ({}({ ...{}, class: (" q-mr-sm"), flat: (true), round: (true), icon: ("mdi-dots-horizontal"), color: ("primary"), }));
                        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                    }
                    {
                        const __VLS_43 = {}.QBtn;
                        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{}, class: (" q-mr-sm"), unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Настроить"), }));
                        ({}.QBtn);
                        const __VLS_45 = __VLS_44({ ...{}, class: (" q-mr-sm"), unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Настроить"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                        ({}({ ...{}, class: (" q-mr-sm"), unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Настроить"), }));
                        const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                    }
                    {
                        const __VLS_48 = {}.QBtn;
                        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{}, unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Установить"), }));
                        ({}.QBtn);
                        const __VLS_50 = __VLS_49({ ...{}, unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Установить"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                        ({}({ ...{}, unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Установить"), }));
                        const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                    }
                    (__VLS_36.slots).default;
                    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                }
                (__VLS_20.slots).default;
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        {
            const __VLS_53 = __VLS_intrinsicElements["fieldset"];
            const __VLS_54 = __VLS_elementAsFunctionalComponent(__VLS_53);
            const __VLS_55 = __VLS_54({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_54));
            ({}({ ...{}, }));
            {
                const __VLS_58 = __VLS_intrinsicElements["legend"];
                const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
                const __VLS_60 = __VLS_59({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_59));
                ({}({ ...{}, }));
                (__VLS_61.slots).default;
                const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
            }
            {
                const __VLS_63 = __VLS_intrinsicElements["div"];
                const __VLS_64 = __VLS_elementAsFunctionalComponent(__VLS_63);
                const __VLS_65 = __VLS_64({ ...{}, class: (" form1"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
                ({}({ ...{}, class: (" form1"), }));
                {
                    const __VLS_68 = __VLS_intrinsicElements["div"];
                    const __VLS_69 = __VLS_elementAsFunctionalComponent(__VLS_68);
                    const __VLS_70 = __VLS_69({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_71.slots).default;
                    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
                }
                {
                    const __VLS_73 = {}.QInput;
                    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ ...{}, modelValue: ((__VLS_ctx.bp.nastr.cert)), dense: (true), outlined: (true), bgColor: ("white"), }));
                    ({}.QInput);
                    const __VLS_75 = __VLS_74({ ...{}, modelValue: ((__VLS_ctx.bp.nastr.cert)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.bp.nastr.cert)), dense: (true), outlined: (true), bgColor: ("white"), }));
                    const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
                }
                {
                    const __VLS_78 = {}.QBtn;
                    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ ...{}, flat: (true), round: (true), icon: ("mdi-dots-horizontal"), color: ("primary"), }));
                    ({}.QBtn);
                    const __VLS_80 = __VLS_79({ ...{}, flat: (true), round: (true), icon: ("mdi-dots-horizontal"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
                    ({}({ ...{}, flat: (true), round: (true), icon: ("mdi-dots-horizontal"), color: ("primary"), }));
                    const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
                }
                (__VLS_66.slots).default;
                const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65);
            }
            (__VLS_56.slots).default;
            const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["form1"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["q-mr-sm"];
        __VLS_styleScopedClasses["form1"];
        __VLS_styleScopedClasses["label"];
    }
    var __VLS_slots;
    // @ts-ignore
    [bp, bp, bp,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            bp: bp,
            req: req,
            myform: myform,
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
//# sourceMappingURL=Nastroyki.vue.js.map