/* __placeholder__ */
import { ref, watch } from 'vue';
import { useBp } from '@/stores/bp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['change', 'haserror', 'noerror']);
const bp = useBp();
const req = [
    (val) => (val && val.length > 0) || 'Это обязательное поле',
];
watch(bp.bp, value => {
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect,];
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
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
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
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
            const __VLS_7 = __VLS_intrinsicElements["div"];
            const __VLS_8 = __VLS_elementAsFunctionalComponent(__VLS_7);
            const __VLS_9 = __VLS_8({ ...{}, class: (" divide"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{}, class: (" divide"), }));
            {
                const __VLS_12 = __VLS_intrinsicElements["div"];
                const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
                const __VLS_14 = __VLS_13({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ ...{}, class: (" form"), }));
                {
                    const __VLS_17 = __VLS_intrinsicElements["div"];
                    const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                    const __VLS_19 = __VLS_18({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_20.slots).default;
                    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
                }
                {
                    const __VLS_22 = {}.QInput;
                    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_24 = __VLS_23({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                    ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    let __VLS_27 = { 'blur': __VLS_pickEvent(__VLS_26['blur'], {}.onBlur) };
                    __VLS_27 = { blur: $event => {
                            __VLS_ctx.myform.validate();
                            // @ts-ignore
                            [bp, req, bp, req, bp, req, myform,];
                        }
                    };
                    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
                    let __VLS_26;
                }
                {
                    const __VLS_28 = __VLS_intrinsicElements["div"];
                    const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
                    const __VLS_30 = __VLS_29({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_31.slots).default;
                    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
                }
                {
                    const __VLS_33 = {}.QSelect;
                    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.typ)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    ({}.QSelect);
                    const __VLS_35 = __VLS_34({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.typ)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                    ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.typ)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    let __VLS_38 = { 'blur': __VLS_pickEvent(__VLS_37['blur'], {}.onBlur) };
                    __VLS_38 = { blur: $event => {
                            __VLS_ctx.myform.validate();
                            // @ts-ignore
                            [bp, req, bp, req, bp, req, myform,];
                        }
                    };
                    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                    let __VLS_37;
                }
                {
                    const __VLS_39 = __VLS_intrinsicElements["div"];
                    const __VLS_40 = __VLS_elementAsFunctionalComponent(__VLS_39);
                    const __VLS_41 = __VLS_40({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_42.slots).default;
                    const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
                }
                {
                    const __VLS_44 = {}.QInput;
                    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.user)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_46 = __VLS_45({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.user)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
                    ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.user)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    let __VLS_49 = { 'blur': __VLS_pickEvent(__VLS_48['blur'], {}.onBlur) };
                    __VLS_49 = { blur: $event => {
                            __VLS_ctx.myform.validate();
                            // @ts-ignore
                            [bp, req, bp, req, bp, req, myform,];
                        }
                    };
                    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
                    let __VLS_48;
                }
                {
                    const __VLS_50 = __VLS_intrinsicElements["div"];
                    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                    const __VLS_52 = __VLS_51({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_53.slots).default;
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                {
                    const __VLS_55 = {}.QInput;
                    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_57 = __VLS_56({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                    ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.bp.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    let __VLS_60 = { 'blur': __VLS_pickEvent(__VLS_59['blur'], {}.onBlur) };
                    __VLS_60 = { blur: $event => {
                            __VLS_ctx.myform.validate();
                            // @ts-ignore
                            [bp, req, bp, req, bp, req, myform,];
                        }
                    };
                    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                    let __VLS_59;
                }
                (__VLS_15.slots).default;
                const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
            {
                const __VLS_61 = __VLS_intrinsicElements["fieldset"];
                const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
                const __VLS_63 = __VLS_62({ ...{}, class: (" first"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                ({}({ ...{}, class: (" first"), }));
                {
                    const __VLS_66 = __VLS_intrinsicElements["legend"];
                    const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                    const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                    ({}({ ...{}, }));
                    (__VLS_69.slots).default;
                    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                }
                {
                    const __VLS_71 = {}.QCardActions;
                    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, align: ("left"), }));
                    ({}.QCardActions);
                    const __VLS_73 = __VLS_72({ ...{}, align: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                    ({}({ ...{}, align: ("left"), }));
                    {
                        const __VLS_76 = {}.QBtn;
                        const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-play"), color: ("secondary"), label: ("Старт"), }));
                        ({}.QBtn);
                        const __VLS_78 = __VLS_77({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-play"), color: ("secondary"), label: ("Старт"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                        ({}({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-play"), color: ("secondary"), label: ("Старт"), }));
                        const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                    }
                    {
                        const __VLS_81 = {}.QBtn;
                        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-restart"), color: ("secondary"), label: ("Рестарт"), }));
                        ({}.QBtn);
                        const __VLS_83 = __VLS_82({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-restart"), color: ("secondary"), label: ("Рестарт"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                        ({}({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-restart"), color: ("secondary"), label: ("Рестарт"), }));
                        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                    }
                    {
                        const __VLS_86 = {}.QBtn;
                        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-stop"), color: ("secondary"), label: ("Стоп"), }));
                        ({}.QBtn);
                        const __VLS_88 = __VLS_87({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-stop"), color: ("secondary"), label: ("Стоп"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                        ({}({ ...{}, class: (" start"), unelevated: (true), size: ("sm"), icon: ("mdi-stop"), color: ("secondary"), label: ("Стоп"), }));
                        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                    }
                    {
                        const __VLS_91 = {}.QCheckbox;
                        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, class: (" q-my-md"), modelValue: ((__VLS_ctx.bp.bp.check)), dense: (true), label: ("Перезапускать при неудачном старте"), }));
                        ({}.QCheckbox);
                        const __VLS_93 = __VLS_92({ ...{}, class: (" q-my-md"), modelValue: ((__VLS_ctx.bp.bp.check)), dense: (true), label: ("Перезапускать при неудачном старте"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                        ({}({ ...{}, class: (" q-my-md"), modelValue: ((__VLS_ctx.bp.bp.check)), dense: (true), label: ("Перезапускать при неудачном старте"), }));
                        const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
                    }
                    {
                        const __VLS_96 = __VLS_intrinsicElements["div"];
                        const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
                        const __VLS_98 = __VLS_97({ ...{}, class: (" smform"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                        ({}({ ...{}, class: (" smform"), }));
                        {
                            const __VLS_101 = __VLS_intrinsicElements["div"];
                            const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
                            const __VLS_103 = __VLS_102({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_104.slots).default;
                            const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                        }
                        {
                            const __VLS_106 = {}.QInput;
                            const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_108 = __VLS_107({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
                        }
                        {
                            const __VLS_111 = __VLS_intrinsicElements["div"];
                            const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
                            const __VLS_113 = __VLS_112({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_114.slots).default;
                            const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                        }
                        {
                            const __VLS_116 = {}.QInput;
                            const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_118 = __VLS_117({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
                        }
                        (__VLS_99.slots).default;
                        const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
                    }
                    (__VLS_74.slots).default;
                    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                }
                (__VLS_64.slots).default;
                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        {
            const __VLS_121 = __VLS_intrinsicElements["div"];
            const __VLS_122 = __VLS_elementAsFunctionalComponent(__VLS_121);
            const __VLS_123 = __VLS_122({ ...{}, class: (" second"), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
            ({}({ ...{}, class: (" second"), }));
            {
                const __VLS_126 = __VLS_intrinsicElements["fieldset"];
                const __VLS_127 = __VLS_elementAsFunctionalComponent(__VLS_126);
                const __VLS_128 = __VLS_127({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
                ({}({ ...{}, }));
                {
                    const __VLS_131 = __VLS_intrinsicElements["legend"];
                    const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
                    const __VLS_133 = __VLS_132({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_132));
                    ({}({ ...{}, }));
                    (__VLS_134.slots).default;
                    const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
                }
                {
                    const __VLS_136 = __VLS_intrinsicElements["div"];
                    const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                    const __VLS_138 = __VLS_137({ ...{}, class: (" third"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                    ({}({ ...{}, class: (" third"), }));
                    {
                        const __VLS_141 = __VLS_intrinsicElements["div"];
                        const __VLS_142 = __VLS_elementAsFunctionalComponent(__VLS_141);
                        const __VLS_143 = __VLS_142({ ...{}, class: (" digit"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                        ({}({ ...{}, class: (" digit"), }));
                        {
                            const __VLS_146 = __VLS_intrinsicElements["div"];
                            const __VLS_147 = __VLS_elementAsFunctionalComponent(__VLS_146);
                            const __VLS_148 = __VLS_147({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_149.slots).default;
                            const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                        }
                        {
                            const __VLS_151 = {}.QInput;
                            const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_153 = __VLS_152({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
                        }
                        {
                            const __VLS_156 = __VLS_intrinsicElements["div"];
                            const __VLS_157 = __VLS_elementAsFunctionalComponent(__VLS_156);
                            const __VLS_158 = __VLS_157({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_159.slots).default;
                            const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
                        }
                        {
                            const __VLS_161 = {}.QInput;
                            const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_163 = __VLS_162({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163);
                        }
                        {
                            const __VLS_166 = __VLS_intrinsicElements["div"];
                            const __VLS_167 = __VLS_elementAsFunctionalComponent(__VLS_166);
                            const __VLS_168 = __VLS_167({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_169.slots).default;
                            const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
                        }
                        {
                            const __VLS_171 = {}.QInput;
                            const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_173 = __VLS_172({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173);
                        }
                        {
                            const __VLS_176 = __VLS_intrinsicElements["div"];
                            const __VLS_177 = __VLS_elementAsFunctionalComponent(__VLS_176);
                            const __VLS_178 = __VLS_177({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_179.slots).default;
                            const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178);
                        }
                        {
                            const __VLS_181 = {}.QInput;
                            const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_183 = __VLS_182({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_182));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183);
                        }
                        (__VLS_144.slots).default;
                        const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                    }
                    {
                        const __VLS_186 = __VLS_intrinsicElements["div"];
                        const __VLS_187 = __VLS_elementAsFunctionalComponent(__VLS_186);
                        const __VLS_188 = __VLS_187({ ...{}, class: (" digit"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
                        ({}({ ...{}, class: (" digit"), }));
                        {
                            const __VLS_191 = __VLS_intrinsicElements["div"];
                            const __VLS_192 = __VLS_elementAsFunctionalComponent(__VLS_191);
                            const __VLS_193 = __VLS_192({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_194.slots).default;
                            const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
                        }
                        {
                            const __VLS_196 = {}.QInput;
                            const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_198 = __VLS_197({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198);
                        }
                        {
                            const __VLS_201 = __VLS_intrinsicElements["div"];
                            const __VLS_202 = __VLS_elementAsFunctionalComponent(__VLS_201);
                            const __VLS_203 = __VLS_202({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_204.slots).default;
                            const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203);
                        }
                        {
                            const __VLS_206 = {}.QInput;
                            const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_208 = __VLS_207({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_209 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208);
                        }
                        {
                            const __VLS_211 = __VLS_intrinsicElements["div"];
                            const __VLS_212 = __VLS_elementAsFunctionalComponent(__VLS_211);
                            const __VLS_213 = __VLS_212({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_214.slots).default;
                            const __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213);
                        }
                        {
                            const __VLS_216 = {}.QInput;
                            const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_218 = __VLS_217({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_219 = __VLS_pickFunctionalComponentCtx(__VLS_216, __VLS_218);
                        }
                        {
                            const __VLS_221 = __VLS_intrinsicElements["div"];
                            const __VLS_222 = __VLS_elementAsFunctionalComponent(__VLS_221);
                            const __VLS_223 = __VLS_222({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_224.slots).default;
                            const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223);
                        }
                        {
                            const __VLS_226 = {}.QInput;
                            const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_228 = __VLS_227({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.delay)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228);
                        }
                        (__VLS_189.slots).default;
                        const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188);
                    }
                    {
                        const __VLS_231 = {}.QCheckbox;
                        const __VLS_232 = __VLS_asFunctionalComponent(__VLS_231, new __VLS_231({ ...{}, class: (" iso"), modelValue: ((__VLS_ctx.bp.bp.iso)), label: ("Режим изоляции процесса"), }));
                        ({}.QCheckbox);
                        const __VLS_233 = __VLS_232({ ...{}, class: (" iso"), modelValue: ((__VLS_ctx.bp.bp.iso)), label: ("Режим изоляции процесса"), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
                        ({}({ ...{}, class: (" iso"), modelValue: ((__VLS_ctx.bp.bp.iso)), label: ("Режим изоляции процесса"), }));
                        const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233);
                    }
                    (__VLS_139.slots).default;
                    const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
                }
                (__VLS_129.slots).default;
                const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
            }
            {
                const __VLS_236 = __VLS_intrinsicElements["fieldset"];
                const __VLS_237 = __VLS_elementAsFunctionalComponent(__VLS_236);
                const __VLS_238 = __VLS_237({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_237));
                ({}({ ...{}, }));
                {
                    const __VLS_241 = __VLS_intrinsicElements["legend"];
                    const __VLS_242 = __VLS_elementAsFunctionalComponent(__VLS_241);
                    const __VLS_243 = __VLS_242({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_242));
                    ({}({ ...{}, }));
                    (__VLS_244.slots).default;
                    const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243);
                }
                {
                    const __VLS_246 = __VLS_intrinsicElements["div"];
                    const __VLS_247 = __VLS_elementAsFunctionalComponent(__VLS_246);
                    const __VLS_248 = __VLS_247({ ...{}, class: (" digit1"), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
                    ({}({ ...{}, class: (" digit1"), }));
                    {
                        const __VLS_251 = __VLS_intrinsicElements["div"];
                        const __VLS_252 = __VLS_elementAsFunctionalComponent(__VLS_251);
                        const __VLS_253 = __VLS_252({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_252));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_254.slots).default;
                        const __VLS_254 = __VLS_pickFunctionalComponentCtx(__VLS_251, __VLS_253);
                    }
                    {
                        const __VLS_256 = {}.QInput;
                        const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({ ...{}, modelValue: ((__VLS_ctx.bp.bp.port)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                        ({}.QInput);
                        const __VLS_258 = __VLS_257({ ...{}, modelValue: ((__VLS_ctx.bp.bp.port)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.port)), min: ("0"), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                        const __VLS_259 = __VLS_pickFunctionalComponentCtx(__VLS_256, __VLS_258);
                    }
                    {
                        const __VLS_261 = __VLS_intrinsicElements["div"];
                        const __VLS_262 = __VLS_elementAsFunctionalComponent(__VLS_261);
                        const __VLS_263 = __VLS_262({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_262));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_264.slots).default;
                        const __VLS_264 = __VLS_pickFunctionalComponentCtx(__VLS_261, __VLS_263);
                    }
                    {
                        const __VLS_266 = {}.QInput;
                        const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ ...{}, modelValue: ((__VLS_ctx.bp.bp.jour)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_268 = __VLS_267({ ...{}, modelValue: ((__VLS_ctx.bp.bp.jour)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.jour)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_269 = __VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268);
                    }
                    {
                        const __VLS_271 = __VLS_intrinsicElements["div"];
                        const __VLS_272 = __VLS_elementAsFunctionalComponent(__VLS_271);
                        const __VLS_273 = __VLS_272({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_272));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_274.slots).default;
                        const __VLS_274 = __VLS_pickFunctionalComponentCtx(__VLS_271, __VLS_273);
                    }
                    {
                        const __VLS_276 = {}.QSelect;
                        const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({ ...{}, modelValue: ((__VLS_ctx.bp.bp.level)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QSelect);
                        const __VLS_278 = __VLS_277({ ...{}, modelValue: ((__VLS_ctx.bp.bp.level)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_277));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.level)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_279 = __VLS_pickFunctionalComponentCtx(__VLS_276, __VLS_278);
                    }
                    {
                        const __VLS_281 = __VLS_intrinsicElements["div"];
                        const __VLS_282 = __VLS_elementAsFunctionalComponent(__VLS_281);
                        const __VLS_283 = __VLS_282({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_282));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_284.slots).default;
                        const __VLS_284 = __VLS_pickFunctionalComponentCtx(__VLS_281, __VLS_283);
                    }
                    {
                        const __VLS_286 = {}.QInput;
                        const __VLS_287 = __VLS_asFunctionalComponent(__VLS_286, new __VLS_286({ ...{}, modelValue: ((__VLS_ctx.bp.bp.jour)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_288 = __VLS_287({ ...{}, modelValue: ((__VLS_ctx.bp.bp.jour)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_287));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.bp.bp.jour)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_289 = __VLS_pickFunctionalComponentCtx(__VLS_286, __VLS_288);
                    }
                    {
                        const __VLS_291 = {}.QBtn;
                        const __VLS_292 = __VLS_asFunctionalComponent(__VLS_291, new __VLS_291({ ...{}, class: (" iso"), unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Сбросить счетчики"), }));
                        ({}.QBtn);
                        const __VLS_293 = __VLS_292({ ...{}, class: (" iso"), unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Сбросить счетчики"), }, ...__VLS_functionalComponentArgsRest(__VLS_292));
                        ({}({ ...{}, class: (" iso"), unelevated: (true), color: ("secondary"), size: ("sm"), label: ("Сбросить счетчики"), }));
                        const __VLS_294 = __VLS_pickFunctionalComponentCtx(__VLS_291, __VLS_293);
                    }
                    (__VLS_249.slots).default;
                    const __VLS_249 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248);
                }
                (__VLS_239.slots).default;
                const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238);
            }
            (__VLS_124.slots).default;
            const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["divide"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["first"];
        __VLS_styleScopedClasses["start"];
        __VLS_styleScopedClasses["start"];
        __VLS_styleScopedClasses["start"];
        __VLS_styleScopedClasses["q-my-md"];
        __VLS_styleScopedClasses["smform"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["second"];
        __VLS_styleScopedClasses["third"];
        __VLS_styleScopedClasses["digit"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["digit"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["iso"];
        __VLS_styleScopedClasses["digit1"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["iso"];
    }
    var __VLS_slots;
    // @ts-ignore
    [bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp, bp,];
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
//# sourceMappingURL=BpExpand.vue.js.map