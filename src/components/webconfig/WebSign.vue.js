/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { req, reqnum } from '@/utils/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.wc.system, (value) => {
    if (value) {
        store.changeWebDefaults(3);
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
    [QInput, QInput, QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect, QSelect,];
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    // @ts-ignore
    [QRadio, QRadio, QRadio, QRadio,];
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
            const __VLS_7 = __VLS_intrinsicElements["div"];
            const __VLS_8 = __VLS_elementAsFunctionalComponent(__VLS_7);
            const __VLS_9 = __VLS_8({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{}, class: (" blo"), }));
            {
                const __VLS_12 = __VLS_intrinsicElements["div"];
                const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
                const __VLS_14 = __VLS_13({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_15.slots).default;
                const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
            {
                const __VLS_17 = {}.QInput;
                const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_19 = __VLS_18({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_22 = { 'blur': __VLS_pickEvent(__VLS_21['blur'], {}.onBlur) };
                __VLS_22 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
                let __VLS_21;
            }
            {
                const __VLS_23 = __VLS_intrinsicElements["div"];
                const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
                const __VLS_25 = __VLS_24({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_26.slots).default;
                const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
            }
            {
                const __VLS_28 = {}.QInput;
                const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.clientid)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_30 = __VLS_29({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.clientid)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.clientid)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_33 = { 'blur': __VLS_pickEvent(__VLS_32['blur'], {}.onBlur) };
                __VLS_33 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
                let __VLS_32;
            }
            {
                const __VLS_34 = __VLS_intrinsicElements["div"];
                const __VLS_35 = __VLS_elementAsFunctionalComponent(__VLS_34);
                const __VLS_36 = __VLS_35({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_37.slots).default;
                const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
            }
            {
                const __VLS_39 = {}.QInput;
                const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.iis)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_41 = __VLS_40({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.iis)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.iis)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_44 = { 'blur': __VLS_pickEvent(__VLS_43['blur'], {}.onBlur) };
                __VLS_44 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
                let __VLS_43;
            }
            {
                const __VLS_45 = __VLS_intrinsicElements["div"];
                const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                const __VLS_47 = __VLS_46({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_48.slots).default;
                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            }
            {
                const __VLS_50 = {}.QInput;
                const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.urlcheck)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_52 = __VLS_51({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.urlcheck)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.urlcheck)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_55 = { 'blur': __VLS_pickEvent(__VLS_54['blur'], {}.onBlur) };
                __VLS_55 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                let __VLS_54;
            }
            {
                const __VLS_56 = __VLS_intrinsicElements["div"];
                const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                const __VLS_58 = __VLS_57({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_59.slots).default;
                const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
            }
            {
                const __VLS_61 = {}.QInput;
                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.stamp)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_63 = __VLS_62({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.stamp)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.stamp)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_66 = { 'blur': __VLS_pickEvent(__VLS_65['blur'], {}.onBlur) };
                __VLS_66 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                let __VLS_65;
            }
            {
                const __VLS_67 = __VLS_intrinsicElements["div"];
                const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
                const __VLS_69 = __VLS_68({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_70.slots).default;
                const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
            }
            {
                const __VLS_72 = {}.QSelect;
                const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.type)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QSelect);
                const __VLS_74 = __VLS_73({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.type)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.type)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_77 = { 'blur': __VLS_pickEvent(__VLS_76['blur'], {}.onBlur) };
                __VLS_77 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                let __VLS_76;
            }
            {
                const __VLS_78 = __VLS_intrinsicElements["div"];
                const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
                const __VLS_80 = __VLS_79({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_81.slots).default;
                const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
            }
            {
                const __VLS_83 = __VLS_intrinsicElements["div"];
                const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83);
                const __VLS_85 = __VLS_84({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_84));
                ({}({ ...{}, }));
                {
                    const __VLS_88 = {}.QRadio;
                    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.sign.mode)), val: ("cloud"), }));
                    ({}.QRadio);
                    const __VLS_90 = __VLS_89({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.sign.mode)), val: ("cloud"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
                    ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.sign.mode)), val: ("cloud"), }));
                    (__VLS_91.slots).default;
                    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
                }
                {
                    const __VLS_93 = {}.QRadio;
                    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{}, modelValue: ((__VLS_ctx.store.wc.sign.mode)), val: ("local"), }));
                    ({}.QRadio);
                    const __VLS_95 = __VLS_94({ ...{}, modelValue: ((__VLS_ctx.store.wc.sign.mode)), val: ("local"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.sign.mode)), val: ("local"), }));
                    (__VLS_96.slots).default;
                    const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
                }
                (__VLS_86.slots).default;
                const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85);
            }
            {
                const __VLS_98 = __VLS_intrinsicElements["div"];
                const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
                const __VLS_100 = __VLS_99({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_101.slots).default;
                const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
            }
            {
                const __VLS_103 = {}.QInput;
                const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.redirect)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_105 = __VLS_104({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.redirect)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.redirect)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_108 = { 'blur': __VLS_pickEvent(__VLS_107['blur'], {}.onBlur) };
                __VLS_108 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, store, store, store, store, store, store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
                let __VLS_107;
            }
            {
                const __VLS_109 = __VLS_intrinsicElements["div"];
                const __VLS_110 = __VLS_elementAsFunctionalComponent(__VLS_109);
                const __VLS_111 = __VLS_110({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_112.slots).default;
                const __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111);
            }
            {
                const __VLS_114 = {}.QSelect;
                const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.token)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QSelect);
                const __VLS_116 = __VLS_115({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.token)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.token)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_119 = { 'blur': __VLS_pickEvent(__VLS_118['blur'], {}.onBlur) };
                __VLS_119 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
                let __VLS_118;
            }
            {
                const __VLS_120 = __VLS_intrinsicElements["div"];
                const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                const __VLS_122 = __VLS_121({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_123.slots).default;
                const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
            }
            {
                const __VLS_125 = {}.QSelect;
                const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.logo)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QSelect);
                const __VLS_127 = __VLS_126({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.logo)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.sign.logo)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_130 = { 'blur': __VLS_pickEvent(__VLS_129['blur'], {}.onBlur) };
                __VLS_130 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                let __VLS_129;
            }
            {
                const __VLS_131 = __VLS_intrinsicElements["div"];
                const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
                const __VLS_133 = __VLS_132({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_134.slots).default;
                const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
            }
            {
                const __VLS_136 = __VLS_intrinsicElements["div"];
                const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                const __VLS_138 = __VLS_137({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                ({}({ ...{}, }));
                {
                    const __VLS_141 = {}.QRadio;
                    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.sign.autorefresh)), val: ("auto"), }));
                    ({}.QRadio);
                    const __VLS_143 = __VLS_142({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.sign.autorefresh)), val: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                    ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.sign.autorefresh)), val: ("auto"), }));
                    (__VLS_144.slots).default;
                    const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                }
                {
                    const __VLS_146 = {}.QRadio;
                    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{}, modelValue: ((__VLS_ctx.store.wc.sign.autorefresh)), val: ("not"), }));
                    ({}.QRadio);
                    const __VLS_148 = __VLS_147({ ...{}, modelValue: ((__VLS_ctx.store.wc.sign.autorefresh)), val: ("not"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.sign.autorefresh)), val: ("not"), }));
                    (__VLS_149.slots).default;
                    const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                }
                (__VLS_139.slots).default;
                const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
            }
            {
                const __VLS_151 = __VLS_intrinsicElements["div"];
                const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
                const __VLS_153 = __VLS_152({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_154.slots).default;
                const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
            }
            {
                const __VLS_156 = {}.QInput;
                const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.sign.aggregatTime)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                ({}.QInput);
                const __VLS_158 = __VLS_157({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.sign.aggregatTime)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
                ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.sign.aggregatTime)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                let __VLS_161 = { 'blur': __VLS_pickEvent(__VLS_160['blur'], {}.onBlur) };
                __VLS_161 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, store, store, store, store, store, store, reqnum, store, reqnum, store, reqnum, form,];
                    }
                };
                const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
                let __VLS_160;
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
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
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
//# sourceMappingURL=WebSign.vue.js.map