/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { req, reqnum } from '@/utils/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    part: {
        type: Boolean,
        default: false,
    },
});
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.wc.common, value => {
    if (value) {
        store.changeWebDefaults(0);
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
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
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
    // @ts-ignore
    [QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput, QInput,];
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
    [QRadio, QRadio, QRadio, QRadio, QRadio, QRadio, QRadio, QRadio, QRadio,];
    {
        const __VLS_0 = {}.QForm;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }));
        ({}.QForm);
        const __VLS_2 = __VLS_1({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }));
        // @ts-ignore
        (__VLS_ctx.form);
        let __VLS_5 = { 'validation-error': __VLS_pickEvent(__VLS_4['validation-error'], {}.onValidationError) };
        __VLS_5 = { "validation-error": $event => {
                __VLS_ctx.$emit('haserror');
                // @ts-ignore
                [form, $emit,];
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
            const __VLS_9 = __VLS_8({ ...{}, class: (" q-mt-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{}, class: (" q-mt-none"), }));
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
                const __VLS_19 = __VLS_18({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{}, class: (" blo"), }));
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
                    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.extensions)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_29 = __VLS_28({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.extensions)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                    ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.extensions)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                    let __VLS_32 = { 'blur': __VLS_pickEvent(__VLS_31['blur'], {}.onBlur) };
                    __VLS_32 = { blur: $event => {
                            __VLS_ctx.form.validate();
                            // @ts-ignore
                            [store, req, store, req, store, req, form,];
                        }
                    };
                    {
                        const __VLS_33 = {}.QTooltip;
                        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        ({}.QTooltip);
                        const __VLS_35 = __VLS_34({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                        ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        (__VLS_36.slots).default;
                        const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                    }
                    (__VLS_30.slots).default;
                    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                    let __VLS_31;
                }
                {
                    const __VLS_38 = __VLS_intrinsicElements["div"];
                    const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
                    const __VLS_40 = __VLS_39({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_41.slots).default;
                    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                }
                {
                    const __VLS_43 = {}.QInput;
                    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.dvwebtool)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_45 = __VLS_44({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.dvwebtool)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                    ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.dvwebtool)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                    let __VLS_48 = { 'blur': __VLS_pickEvent(__VLS_47['blur'], {}.onBlur) };
                    __VLS_48 = { blur: $event => {
                            __VLS_ctx.form.validate();
                            // @ts-ignore
                            [store, req, store, req, store, req, form,];
                        }
                    };
                    {
                        const __VLS_49 = {}.QTooltip;
                        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        ({}.QTooltip);
                        const __VLS_51 = __VLS_50({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
                        ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        (__VLS_52.slots).default;
                        const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
                    }
                    (__VLS_46.slots).default;
                    const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                    let __VLS_47;
                }
                {
                    const __VLS_54 = __VLS_intrinsicElements["div"];
                    const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                    const __VLS_56 = __VLS_55({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_57.slots).default;
                    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
                }
                {
                    const __VLS_59 = {}.QInput;
                    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.journal)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_61 = __VLS_60({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.journal)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                    ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.journal)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                    let __VLS_64 = { 'blur': __VLS_pickEvent(__VLS_63['blur'], {}.onBlur) };
                    __VLS_64 = { blur: $event => {
                            __VLS_ctx.form.validate();
                            // @ts-ignore
                            [store, req, store, req, store, req, form,];
                        }
                    };
                    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                    let __VLS_63;
                }
                (__VLS_20.slots).default;
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        if (!props.part) {
            {
                const __VLS_65 = __VLS_intrinsicElements["fieldset"];
                const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}({ ...{}, }));
                {
                    const __VLS_70 = __VLS_intrinsicElements["legend"];
                    const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                    const __VLS_72 = __VLS_71({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({}({ ...{}, }));
                    (__VLS_73.slots).default;
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                {
                    const __VLS_75 = __VLS_intrinsicElements["div"];
                    const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                    const __VLS_77 = __VLS_76({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                    ({}({ ...{}, class: (" blo"), }));
                    {
                        const __VLS_80 = __VLS_intrinsicElements["div"];
                        const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                        const __VLS_82 = __VLS_81({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_83.slots).default;
                        const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                    }
                    {
                        const __VLS_85 = {}.QInput;
                        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.template1)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_87 = __VLS_86({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.template1)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                        ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.template1)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        let __VLS_90 = { 'blur': __VLS_pickEvent(__VLS_89['blur'], {}.onBlur) };
                        __VLS_90 = { blur: $event => {
                                if (!((!props.part)))
                                    return;
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, req, store, req, store, req, form,];
                            }
                        };
                        const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                        let __VLS_89;
                    }
                    {
                        const __VLS_91 = __VLS_intrinsicElements["div"];
                        const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
                        const __VLS_93 = __VLS_92({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_94.slots).default;
                        const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
                    }
                    {
                        const __VLS_96 = {}.QInput;
                        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.template2)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_98 = __VLS_97({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.template2)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                        ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.template2)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        let __VLS_101 = { 'blur': __VLS_pickEvent(__VLS_100['blur'], {}.onBlur) };
                        __VLS_101 = { blur: $event => {
                                if (!((!props.part)))
                                    return;
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, req, store, req, store, req, form,];
                            }
                        };
                        const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
                        let __VLS_100;
                    }
                    {
                        const __VLS_102 = __VLS_intrinsicElements["div"];
                        const __VLS_103 = __VLS_elementAsFunctionalComponent(__VLS_102);
                        const __VLS_104 = __VLS_103({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_105.slots).default;
                        const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
                    }
                    {
                        const __VLS_107 = {}.QInput;
                        const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.tablet)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_109 = __VLS_108({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.tablet)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
                        ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.common.tablet)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        let __VLS_112 = { 'blur': __VLS_pickEvent(__VLS_111['blur'], {}.onBlur) };
                        __VLS_112 = { blur: $event => {
                                if (!((!props.part)))
                                    return;
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, req, store, req, store, req, form,];
                            }
                        };
                        const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
                        let __VLS_111;
                    }
                    (__VLS_78.slots).default;
                    const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                }
                (__VLS_68.slots).default;
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
        }
        if (!props.part) {
            {
                const __VLS_113 = __VLS_intrinsicElements["fieldset"];
                const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
                const __VLS_115 = __VLS_114({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                ({}({ ...{}, }));
                {
                    const __VLS_118 = __VLS_intrinsicElements["legend"];
                    const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                    const __VLS_120 = __VLS_119({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                    ({}({ ...{}, }));
                    (__VLS_121.slots).default;
                    const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                }
                {
                    const __VLS_123 = __VLS_intrinsicElements["div"];
                    const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
                    const __VLS_125 = __VLS_124({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                    ({}({ ...{}, class: (" blo"), }));
                    {
                        const __VLS_128 = __VLS_intrinsicElements["div"];
                        const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                        const __VLS_130 = __VLS_129({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_131.slots).default;
                        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                    }
                    {
                        const __VLS_133 = __VLS_intrinsicElements["div"];
                        const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
                        const __VLS_135 = __VLS_134({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                        ({}({ ...{}, }));
                        {
                            const __VLS_138 = {}.QRadio;
                            const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.del)), val: ("trash"), }));
                            ({}.QRadio);
                            const __VLS_140 = __VLS_139({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.del)), val: ("trash"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.del)), val: ("trash"), }));
                            (__VLS_141.slots).default;
                            const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                        }
                        {
                            const __VLS_143 = {}.QRadio;
                            const __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143({ ...{}, modelValue: ((__VLS_ctx.store.wc.common.del)), val: ("perm"), }));
                            ({}.QRadio);
                            const __VLS_145 = __VLS_144({ ...{}, modelValue: ((__VLS_ctx.store.wc.common.del)), val: ("perm"), }, ...__VLS_functionalComponentArgsRest(__VLS_144));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.common.del)), val: ("perm"), }));
                            (__VLS_146.slots).default;
                            const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
                        }
                        (__VLS_136.slots).default;
                        const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                    }
                    {
                        const __VLS_148 = __VLS_intrinsicElements["div"];
                        const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148);
                        const __VLS_150 = __VLS_149({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_151.slots).default;
                        const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
                    }
                    {
                        const __VLS_153 = __VLS_intrinsicElements["div"];
                        const __VLS_154 = __VLS_elementAsFunctionalComponent(__VLS_153);
                        const __VLS_155 = __VLS_154({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                        ({}({ ...{}, }));
                        {
                            const __VLS_158 = {}.QRadio;
                            const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("auto"), }));
                            ({}.QRadio);
                            const __VLS_160 = __VLS_159({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("auto"), }));
                            (__VLS_161.slots).default;
                            const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
                        }
                        {
                            const __VLS_163 = {}.QRadio;
                            const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("one"), }));
                            ({}.QRadio);
                            const __VLS_165 = __VLS_164({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("one"), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("one"), }));
                            (__VLS_166.slots).default;
                            const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165);
                        }
                        {
                            const __VLS_168 = {}.QRadio;
                            const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{}, modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("two"), }));
                            ({}.QRadio);
                            const __VLS_170 = __VLS_169({ ...{}, modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("two"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
                            ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.common.buttons)), val: ("two"), }));
                            (__VLS_171.slots).default;
                            const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
                        }
                        (__VLS_156.slots).default;
                        const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
                    }
                    {
                        const __VLS_173 = __VLS_intrinsicElements["div"];
                        const __VLS_174 = __VLS_elementAsFunctionalComponent(__VLS_173);
                        const __VLS_175 = __VLS_174({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_176.slots).default;
                        const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
                    }
                    {
                        const __VLS_178 = __VLS_intrinsicElements["div"];
                        const __VLS_179 = __VLS_elementAsFunctionalComponent(__VLS_178);
                        const __VLS_180 = __VLS_179({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_179));
                        ({}({ ...{}, }));
                        {
                            const __VLS_183 = {}.QRadio;
                            const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.sidebar)), val: ("hide"), }));
                            ({}.QRadio);
                            const __VLS_185 = __VLS_184({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.sidebar)), val: ("hide"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.sidebar)), val: ("hide"), }));
                            (__VLS_186.slots).default;
                            const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
                        }
                        {
                            const __VLS_188 = {}.QRadio;
                            const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.sidebar)), val: ("one"), }));
                            ({}.QRadio);
                            const __VLS_190 = __VLS_189({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.sidebar)), val: ("one"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.sidebar)), val: ("one"), }));
                            (__VLS_191.slots).default;
                            const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
                        }
                        (__VLS_181.slots).default;
                        const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180);
                    }
                    {
                        const __VLS_193 = __VLS_intrinsicElements["div"];
                        const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193);
                        const __VLS_195 = __VLS_194({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_196.slots).default;
                        const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195);
                    }
                    {
                        const __VLS_198 = {}.QInput;
                        const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.offline)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                        ({}.QInput);
                        const __VLS_200 = __VLS_199({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.offline)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
                        ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.offline)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                        let __VLS_203 = { 'blur': __VLS_pickEvent(__VLS_202['blur'], {}.onBlur) };
                        __VLS_203 = { blur: $event => {
                                if (!((!props.part)))
                                    return;
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, reqnum, store, reqnum, store, reqnum, form,];
                            }
                        };
                        const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200);
                        let __VLS_202;
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
                        const __VLS_209 = {}.QInput;
                        const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.close)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                        ({}.QInput);
                        const __VLS_211 = __VLS_210({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.close)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
                        ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.close)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                        let __VLS_214 = { 'blur': __VLS_pickEvent(__VLS_213['blur'], {}.onBlur) };
                        __VLS_214 = { blur: $event => {
                                if (!((!props.part)))
                                    return;
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, reqnum, store, reqnum, store, reqnum, form,];
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
                        const __VLS_220 = __VLS_intrinsicElements["div"];
                        const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
                        const __VLS_222 = __VLS_221({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                        ({}({ ...{}, }));
                        {
                            const __VLS_225 = {}.QRadio;
                            const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, new __VLS_225({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.offlineMessage)), val: ("yes"), }));
                            ({}.QRadio);
                            const __VLS_227 = __VLS_226({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.offlineMessage)), val: ("yes"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.offlineMessage)), val: ("yes"), }));
                            (__VLS_228.slots).default;
                            const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227);
                        }
                        {
                            const __VLS_230 = {}.QRadio;
                            const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.offlineMessage)), val: ("one"), }));
                            ({}.QRadio);
                            const __VLS_232 = __VLS_231({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.offlineMessage)), val: ("one"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
                            ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.common.offlineMessage)), val: ("one"), }));
                            (__VLS_233.slots).default;
                            const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232);
                        }
                        (__VLS_223.slots).default;
                        const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                    }
                    {
                        const __VLS_235 = __VLS_intrinsicElements["div"];
                        const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
                        const __VLS_237 = __VLS_236({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_236));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_238.slots).default;
                        const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237);
                    }
                    {
                        const __VLS_240 = {}.QInput;
                        const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.size)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                        ({}.QInput);
                        const __VLS_242 = __VLS_241({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.size)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_241));
                        ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.common.size)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                        let __VLS_245 = { 'blur': __VLS_pickEvent(__VLS_244['blur'], {}.onBlur) };
                        __VLS_245 = { blur: $event => {
                                if (!((!props.part)))
                                    return;
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, store, store, store, store, store, store, reqnum, store, reqnum, store, reqnum, form,];
                            }
                        };
                        const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242);
                        let __VLS_244;
                    }
                    (__VLS_126.slots).default;
                    const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                }
                (__VLS_116.slots).default;
                const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["q-mt-none"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            req: req,
            reqnum: reqnum,
            store: store,
            form: form,
        };
    },
    props: {
        part: {
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
        part: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
//# sourceMappingURL=WebCommon.vue.js.map