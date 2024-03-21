/* __placeholder__ */
import { ref, watch } from 'vue';
import { useBp } from '@/stores/bp';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const bp = useBp();
const req = [(val) => (val && val.length > 0) || 'Это обязательное поле'];
const emit = defineEmits(['change', 'haserror', 'noerror']);
const myform = ref();
watch(bp.post, (value) => {
    if (value) {
        emit('change');
    }
});
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
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect, QSelect, QSelect, QSelect,];
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
    [QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput,];
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    {
        const __VLS_0 = {}.QForm;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, class: (" post"), ref: ("myform"), noErrorFocus: (true), }));
        ({}.QForm);
        const __VLS_2 = __VLS_1({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, class: (" post"), ref: ("myform"), noErrorFocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, class: (" post"), ref: ("myform"), noErrorFocus: (true), }));
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
            const __VLS_9 = __VLS_8({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{}, class: (" form"), }));
            {
                const __VLS_12 = __VLS_intrinsicElements["div"];
                const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
                const __VLS_14 = __VLS_13({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_15.slots).default;
                const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
            {
                const __VLS_17 = {}.QSelect;
                const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.typ)), options: ((__VLS_ctx.bp.post.options)), dense: (true), outlined: (true), bgColor: ("white"), }));
                ({}.QSelect);
                const __VLS_19 = __VLS_18({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.typ)), options: ((__VLS_ctx.bp.post.options)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{}, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.typ)), options: ((__VLS_ctx.bp.post.options)), dense: (true), outlined: (true), bgColor: ("white"), }));
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
            }
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
                const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.email)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_29 = __VLS_28({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.email)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.email)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                let __VLS_32 = { 'blur': __VLS_pickEvent(__VLS_31['blur'], {}.onBlur) };
                __VLS_32 = { blur: $event => {
                        __VLS_ctx.myform.validate();
                        // @ts-ignore
                        [bp, bp, bp, bp, bp, bp, bp, req, bp, req, bp, req, myform,];
                    }
                };
                const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                let __VLS_31;
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        if (__VLS_ctx.bp.post.typ === 'MS Exchange Web Services') {
            {
                const __VLS_33 = __VLS_intrinsicElements["fieldset"];
                const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
                const __VLS_35 = __VLS_34({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                ({}({ ...{}, }));
                {
                    const __VLS_38 = __VLS_intrinsicElements["legend"];
                    const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
                    const __VLS_40 = __VLS_39({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                    ({}({ ...{}, }));
                    (__VLS_41.slots).default;
                    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                }
                {
                    const __VLS_43 = __VLS_intrinsicElements["div"];
                    const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
                    const __VLS_45 = __VLS_44({ ...{}, class: (" grd"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                    ({}({ ...{}, class: (" grd"), }));
                    {
                        const __VLS_48 = __VLS_intrinsicElements["div"];
                        const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
                        const __VLS_50 = __VLS_49({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_51.slots).default;
                        const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                    }
                    {
                        const __VLS_53 = {}.QInput;
                        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_55 = __VLS_54({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_58 = { 'blur': __VLS_pickEvent(__VLS_57['blur'], {}.onBlur) };
                        __VLS_58 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'MS Exchange Web Services')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
                        let __VLS_57;
                    }
                    {
                        const __VLS_59 = __VLS_intrinsicElements["div"];
                        const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
                        const __VLS_61 = __VLS_60({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_62.slots).default;
                        const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                    }
                    {
                        const __VLS_64 = {}.QSelect;
                        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.version)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QSelect);
                        const __VLS_66 = __VLS_65({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.version)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.version)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_69 = { 'blur': __VLS_pickEvent(__VLS_68['blur'], {}.onBlur) };
                        __VLS_69 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'MS Exchange Web Services')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                        let __VLS_68;
                    }
                    {
                        const __VLS_70 = __VLS_intrinsicElements["div"];
                        const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                        const __VLS_72 = __VLS_71({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_73.slots).default;
                        const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                    }
                    {
                        const __VLS_75 = {}.QSelect;
                        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QSelect);
                        const __VLS_77 = __VLS_76({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_80 = { 'blur': __VLS_pickEvent(__VLS_79['blur'], {}.onBlur) };
                        __VLS_80 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'MS Exchange Web Services')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                        let __VLS_79;
                    }
                    {
                        const __VLS_81 = __VLS_intrinsicElements["div"];
                        const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
                        const __VLS_83 = __VLS_82({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_84.slots).default;
                        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                    }
                    {
                        const __VLS_86 = {}.QInput;
                        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_88 = __VLS_87({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_91 = { 'blur': __VLS_pickEvent(__VLS_90['blur'], {}.onBlur) };
                        __VLS_91 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'MS Exchange Web Services')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                        let __VLS_90;
                    }
                    {
                        const __VLS_92 = __VLS_intrinsicElements["div"];
                        const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
                        const __VLS_94 = __VLS_93({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_95.slots).default;
                        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
                    }
                    {
                        const __VLS_97 = {}.QInput;
                        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_99 = __VLS_98({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_102 = { 'blur': __VLS_pickEvent(__VLS_101['blur'], {}.onBlur) };
                        __VLS_102 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'MS Exchange Web Services')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99);
                        let __VLS_101;
                    }
                    (__VLS_46.slots).default;
                    const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                }
                (__VLS_36.slots).default;
                const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
            }
        }
        if (__VLS_ctx.bp.post.typ === 'SMT / POP3') {
            {
                const __VLS_103 = __VLS_intrinsicElements["fieldset"];
                const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
                const __VLS_105 = __VLS_104({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                ({}({ ...{}, }));
                {
                    const __VLS_108 = __VLS_intrinsicElements["legend"];
                    const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
                    const __VLS_110 = __VLS_109({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
                    ({}({ ...{}, }));
                    (__VLS_111.slots).default;
                    const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
                }
                {
                    const __VLS_113 = __VLS_intrinsicElements["div"];
                    const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
                    const __VLS_115 = __VLS_114({ ...{}, class: (" grd"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                    ({}({ ...{}, class: (" grd"), }));
                    {
                        const __VLS_118 = __VLS_intrinsicElements["div"];
                        const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                        const __VLS_120 = __VLS_119({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_121.slots).default;
                        const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                    }
                    {
                        const __VLS_123 = {}.QInput;
                        const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_125 = __VLS_124({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_128 = { 'blur': __VLS_pickEvent(__VLS_127['blur'], {}.onBlur) };
                        __VLS_128 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                        let __VLS_127;
                    }
                    {
                        const __VLS_129 = __VLS_intrinsicElements["div"];
                        const __VLS_130 = __VLS_elementAsFunctionalComponent(__VLS_129);
                        const __VLS_131 = __VLS_130({ ...{}, class: (" label text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
                        ({}({ ...{}, class: (" label text-bold"), }));
                        (__VLS_132.slots).default;
                        const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131);
                    }
                    {
                        const __VLS_134 = __VLS_intrinsicElements["div"];
                        const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
                        const __VLS_136 = __VLS_135({ ...{}, class: (" myrow"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
                        ({}({ ...{}, class: (" myrow"), }));
                        {
                            const __VLS_139 = {}.QInput;
                            const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                            ({}.QInput);
                            const __VLS_141 = __VLS_140({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
                            ({}({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                            let __VLS_144 = { 'blur': __VLS_pickEvent(__VLS_143['blur'], {}.onBlur) };
                            __VLS_144 = { blur: $event => {
                                    if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                        return;
                                    __VLS_ctx.myform.validate();
                                    // @ts-ignore
                                    [bp, req, bp, req, bp, req, myform,];
                                }
                            };
                            const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141);
                            let __VLS_143;
                        }
                        {
                            const __VLS_145 = {}.QCheckbox;
                            const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ ...{}, modelValue: ((__VLS_ctx.bp.post.ssl)), label: ("SSL"), dense: (true), }));
                            ({}.QCheckbox);
                            const __VLS_147 = __VLS_146({ ...{}, modelValue: ((__VLS_ctx.bp.post.ssl)), label: ("SSL"), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.post.ssl)), label: ("SSL"), dense: (true), }));
                            const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
                        }
                        (__VLS_137.slots).default;
                        const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
                    }
                    {
                        const __VLS_150 = __VLS_intrinsicElements["div"];
                        const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
                        const __VLS_152 = __VLS_151({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_153.slots).default;
                        const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
                    }
                    {
                        const __VLS_155 = {}.QSelect;
                        const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QSelect);
                        const __VLS_157 = __VLS_156({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_160 = { 'blur': __VLS_pickEvent(__VLS_159['blur'], {}.onBlur) };
                        __VLS_160 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, bp, bp, bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                        let __VLS_159;
                    }
                    {
                        const __VLS_161 = __VLS_intrinsicElements["div"];
                        const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
                        const __VLS_163 = __VLS_162({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_164.slots).default;
                        const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163);
                    }
                    {
                        const __VLS_166 = {}.QInput;
                        const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_168 = __VLS_167({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_171 = { 'blur': __VLS_pickEvent(__VLS_170['blur'], {}.onBlur) };
                        __VLS_171 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
                        let __VLS_170;
                    }
                    {
                        const __VLS_172 = __VLS_intrinsicElements["div"];
                        const __VLS_173 = __VLS_elementAsFunctionalComponent(__VLS_172);
                        const __VLS_174 = __VLS_173({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_175.slots).default;
                        const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174);
                    }
                    {
                        const __VLS_177 = {}.QInput;
                        const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_179 = __VLS_178({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_182 = { 'blur': __VLS_pickEvent(__VLS_181['blur'], {}.onBlur) };
                        __VLS_182 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179);
                        let __VLS_181;
                    }
                    {
                        const __VLS_183 = __VLS_intrinsicElements["div"];
                        const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183);
                        const __VLS_185 = __VLS_184({ ...{}, class: (" label text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
                        ({}({ ...{}, class: (" label text-bold"), }));
                        (__VLS_186.slots).default;
                        const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
                    }
                    {
                        const __VLS_188 = __VLS_intrinsicElements["div"];
                        const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188);
                        const __VLS_190 = __VLS_189({ ...{}, class: (" myrow"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
                        ({}({ ...{}, class: (" myrow"), }));
                        {
                            const __VLS_193 = {}.QInput;
                            const __VLS_194 = __VLS_asFunctionalComponent(__VLS_193, new __VLS_193({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                            ({}.QInput);
                            const __VLS_195 = __VLS_194({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
                            ({}({ ...{ 'onBlur': {}, }, modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                            let __VLS_198 = { 'blur': __VLS_pickEvent(__VLS_197['blur'], {}.onBlur) };
                            __VLS_198 = { blur: $event => {
                                    if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                        return;
                                    __VLS_ctx.myform.validate();
                                    // @ts-ignore
                                    [bp, req, bp, req, bp, req, myform,];
                                }
                            };
                            const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195);
                            let __VLS_197;
                        }
                        {
                            const __VLS_199 = {}.QCheckbox;
                            const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ ...{}, modelValue: ((__VLS_ctx.bp.post.ssl)), label: ("SSL"), dense: (true), }));
                            ({}.QCheckbox);
                            const __VLS_201 = __VLS_200({ ...{}, modelValue: ((__VLS_ctx.bp.post.ssl)), label: ("SSL"), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.bp.post.ssl)), label: ("SSL"), dense: (true), }));
                            const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
                        }
                        (__VLS_191.slots).default;
                        const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
                    }
                    {
                        const __VLS_204 = __VLS_intrinsicElements["div"];
                        const __VLS_205 = __VLS_elementAsFunctionalComponent(__VLS_204);
                        const __VLS_206 = __VLS_205({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_207.slots).default;
                        const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206);
                    }
                    {
                        const __VLS_209 = {}.QSelect;
                        const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QSelect);
                        const __VLS_211 = __VLS_210({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.auth)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_214 = { 'blur': __VLS_pickEvent(__VLS_213['blur'], {}.onBlur) };
                        __VLS_214 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, bp, bp, bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211);
                        let __VLS_213;
                    }
                    {
                        const __VLS_215 = __VLS_intrinsicElements["div"];
                        const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
                        const __VLS_217 = __VLS_216({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_218.slots).default;
                        const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                    }
                    {
                        const __VLS_220 = {}.QInput;
                        const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_222 = __VLS_221({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_225 = { 'blur': __VLS_pickEvent(__VLS_224['blur'], {}.onBlur) };
                        __VLS_225 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                        let __VLS_224;
                    }
                    {
                        const __VLS_226 = __VLS_intrinsicElements["div"];
                        const __VLS_227 = __VLS_elementAsFunctionalComponent(__VLS_226);
                        const __VLS_228 = __VLS_227({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_229.slots).default;
                        const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228);
                    }
                    {
                        const __VLS_231 = {}.QInput;
                        const __VLS_232 = __VLS_asFunctionalComponent(__VLS_231, new __VLS_231({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_233 = __VLS_232({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.pass)), type: ("password"), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_236 = { 'blur': __VLS_pickEvent(__VLS_235['blur'], {}.onBlur) };
                        __VLS_236 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'SMT / POP3')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233);
                        let __VLS_235;
                    }
                    (__VLS_116.slots).default;
                    const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                }
                (__VLS_106.slots).default;
                const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
            }
        }
        if (__VLS_ctx.bp.post.typ === 'MS Exchange') {
            {
                const __VLS_237 = __VLS_intrinsicElements["fieldset"];
                const __VLS_238 = __VLS_elementAsFunctionalComponent(__VLS_237);
                const __VLS_239 = __VLS_238({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_238));
                ({}({ ...{}, }));
                {
                    const __VLS_242 = __VLS_intrinsicElements["legend"];
                    const __VLS_243 = __VLS_elementAsFunctionalComponent(__VLS_242);
                    const __VLS_244 = __VLS_243({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_243));
                    ({}({ ...{}, }));
                    (__VLS_245.slots).default;
                    const __VLS_245 = __VLS_pickFunctionalComponentCtx(__VLS_242, __VLS_244);
                }
                {
                    const __VLS_247 = __VLS_intrinsicElements["div"];
                    const __VLS_248 = __VLS_elementAsFunctionalComponent(__VLS_247);
                    const __VLS_249 = __VLS_248({ ...{}, class: (" grd"), }, ...__VLS_functionalComponentArgsRest(__VLS_248));
                    ({}({ ...{}, class: (" grd"), }));
                    {
                        const __VLS_252 = __VLS_intrinsicElements["div"];
                        const __VLS_253 = __VLS_elementAsFunctionalComponent(__VLS_252);
                        const __VLS_254 = __VLS_253({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_253));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_255.slots).default;
                        const __VLS_255 = __VLS_pickFunctionalComponentCtx(__VLS_252, __VLS_254);
                    }
                    {
                        const __VLS_257 = {}.QInput;
                        const __VLS_258 = __VLS_asFunctionalComponent(__VLS_257, new __VLS_257({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_259 = __VLS_258({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_258));
                        ({}({ ...{ 'onBlur': {}, }, class: (" inp"), modelValue: ((__VLS_ctx.bp.post.address)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                        let __VLS_262 = { 'blur': __VLS_pickEvent(__VLS_261['blur'], {}.onBlur) };
                        __VLS_262 = { blur: $event => {
                                if (!((__VLS_ctx.bp.post.typ === 'MS Exchange')))
                                    return;
                                __VLS_ctx.myform.validate();
                                // @ts-ignore
                                [bp, bp, req, bp, req, bp, req, myform,];
                            }
                        };
                        const __VLS_260 = __VLS_pickFunctionalComponentCtx(__VLS_257, __VLS_259);
                        let __VLS_261;
                    }
                    (__VLS_250.slots).default;
                    const __VLS_250 = __VLS_pickFunctionalComponentCtx(__VLS_247, __VLS_249);
                }
                (__VLS_240.slots).default;
                const __VLS_240 = __VLS_pickFunctionalComponentCtx(__VLS_237, __VLS_239);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["post"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["grd"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["grd"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["myrow"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["myrow"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
        __VLS_styleScopedClasses["grd"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["inp"];
    }
    var __VLS_slots;
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
//# sourceMappingURL=Post.vue.js.map