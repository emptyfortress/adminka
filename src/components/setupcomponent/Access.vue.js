/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { req } from '@/utils/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const form = ref();
const sel = ref(false);
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.access.access, value => {
    if (value) {
        store.changeDefaults(3);
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
    __VLS_intrinsicElements.p;
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
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    __VLS_components.QMarkupTable;
    __VLS_components.qMarkupTable;
    // @ts-ignore
    [QMarkupTable,];
    __VLS_intrinsicElements.thead;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.tbody;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["p"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = {}.QForm;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }));
            ({}.QForm);
            const __VLS_12 = __VLS_11({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{ 'onValidationError': {}, 'onValidationSuccess': {}, }, ref: ("form"), noErrorFocus: (true), }));
            // @ts-ignore
            (__VLS_ctx.form);
            let __VLS_15 = { 'validation-error': __VLS_pickEvent(__VLS_14['validation-error'], {}.onValidationError) };
            __VLS_15 = { "validation-error": $event => {
                    __VLS_ctx.$emit('haserror');
                    // @ts-ignore
                    [form, $emit,];
                }
            };
            let __VLS_16 = { 'validation-success': __VLS_pickEvent(__VLS_14['validation-success'], {}.onValidationSuccess) };
            __VLS_16 = { "validation-success": $event => {
                    __VLS_ctx.$emit('noerror');
                    // @ts-ignore
                    [$emit,];
                }
            };
            {
                const __VLS_17 = __VLS_intrinsicElements["fieldset"];
                const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                const __VLS_19 = __VLS_18({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{}, }));
                {
                    const __VLS_22 = __VLS_intrinsicElements["legend"];
                    const __VLS_23 = __VLS_elementAsFunctionalComponent(__VLS_22);
                    const __VLS_24 = __VLS_23({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                    ({}({ ...{}, }));
                    (__VLS_25.slots).default;
                    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
                }
                {
                    const __VLS_27 = __VLS_intrinsicElements["div"];
                    const __VLS_28 = __VLS_elementAsFunctionalComponent(__VLS_27);
                    const __VLS_29 = __VLS_28({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                    ({}({ ...{}, class: (" blo"), }));
                    {
                        const __VLS_32 = __VLS_intrinsicElements["div"];
                        const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
                        const __VLS_34 = __VLS_33({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_35.slots).default;
                        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
                    }
                    {
                        const __VLS_37 = {}.QInput;
                        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.protokol)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_39 = __VLS_38({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.protokol)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                        ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.protokol)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        let __VLS_42 = { 'blur': __VLS_pickEvent(__VLS_41['blur'], {}.onBlur) };
                        __VLS_42 = { blur: $event => {
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, req, store, req, store, req, form,];
                            }
                        };
                        const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
                        let __VLS_41;
                    }
                    {
                        const __VLS_43 = __VLS_intrinsicElements["div"];
                        const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
                        const __VLS_45 = __VLS_44({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_46.slots).default;
                        const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                    }
                    {
                        const __VLS_48 = {}.QInput;
                        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_50 = __VLS_49({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                        ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        let __VLS_53 = { 'blur': __VLS_pickEvent(__VLS_52['blur'], {}.onBlur) };
                        __VLS_53 = { blur: $event => {
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, req, store, req, store, req, form,];
                            }
                        };
                        const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                        let __VLS_52;
                    }
                    (__VLS_30.slots).default;
                    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                }
                (__VLS_20.slots).default;
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
            }
            {
                const __VLS_54 = __VLS_intrinsicElements["fieldset"];
                const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                const __VLS_56 = __VLS_55({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                ({}({ ...{}, }));
                {
                    const __VLS_59 = __VLS_intrinsicElements["legend"];
                    const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
                    const __VLS_61 = __VLS_60({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                    ({}({ ...{}, }));
                    (__VLS_62.slots).default;
                    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                }
                {
                    const __VLS_64 = __VLS_intrinsicElements["div"];
                    const __VLS_65 = __VLS_elementAsFunctionalComponent(__VLS_64);
                    const __VLS_66 = __VLS_65({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                    ({}({ ...{}, class: (" blo"), }));
                    {
                        const __VLS_69 = __VLS_intrinsicElements["div"];
                        const __VLS_70 = __VLS_elementAsFunctionalComponent(__VLS_69);
                        const __VLS_71 = __VLS_70({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_72.slots).default;
                        const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
                    }
                    {
                        const __VLS_74 = {}.QInput;
                        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.http)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        ({}.QInput);
                        const __VLS_76 = __VLS_75({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.http)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                        ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.http)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                        let __VLS_79 = { 'blur': __VLS_pickEvent(__VLS_78['blur'], {}.onBlur) };
                        __VLS_79 = { blur: $event => {
                                __VLS_ctx.form.validate();
                                // @ts-ignore
                                [store, req, store, req, store, req, form,];
                            }
                        };
                        const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                        let __VLS_78;
                    }
                    {
                        const __VLS_80 = {}.QCheckbox;
                        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.access.access.auth)), label: ("Запретить встроенную аутентифакцию"), }));
                        ({}.QCheckbox);
                        const __VLS_82 = __VLS_81({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.access.access.auth)), label: ("Запретить встроенную аутентифакцию"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                        ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.access.access.auth)), label: ("Запретить встроенную аутентифакцию"), }));
                        const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                    }
                    (__VLS_67.slots).default;
                    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                }
                (__VLS_57.slots).default;
                const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
            }
            {
                const __VLS_85 = __VLS_intrinsicElements["fieldset"];
                const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                ({}({ ...{}, }));
                {
                    const __VLS_90 = __VLS_intrinsicElements["legend"];
                    const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                    const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                    ({}({ ...{}, }));
                    (__VLS_93.slots).default;
                    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                }
                {
                    const __VLS_95 = __VLS_intrinsicElements["div"];
                    const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                    const __VLS_97 = __VLS_96({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                    ({}({ ...{}, class: (" blo"), }));
                    {
                        const __VLS_100 = __VLS_intrinsicElements["div"];
                        const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
                        const __VLS_102 = __VLS_101({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_103.slots).default;
                        const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                    }
                    {
                        const __VLS_105 = __VLS_intrinsicElements["div"];
                        const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                        const __VLS_107 = __VLS_106({ ...{}, class: (" row items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                        ({}({ ...{}, class: (" row items-center"), }));
                        {
                            const __VLS_110 = {}.QInput;
                            const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{}, class: (" dig"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.session)), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_112 = __VLS_111({ ...{}, class: (" dig"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.session)), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                            ({}({ ...{}, class: (" dig"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.access.access.session)), bgColor: ("white"), type: ("number"), }));
                            const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
                        }
                        {
                            const __VLS_115 = __VLS_intrinsicElements["div"];
                            const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
                            const __VLS_117 = __VLS_116({ ...{}, class: (" q-ml-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                            ({}({ ...{}, class: (" q-ml-md"), }));
                            (__VLS_118.slots).default;
                            const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                        }
                        (__VLS_108.slots).default;
                        const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                    }
                    (__VLS_98.slots).default;
                    const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
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
                    const __VLS_125 = {}.QMarkupTable;
                    const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ ...{}, class: (" table"), flat: (true), dense: (true), }));
                    ({}.QMarkupTable);
                    const __VLS_127 = __VLS_126({ ...{}, class: (" table"), flat: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                    ({}({ ...{}, class: (" table"), flat: (true), dense: (true), }));
                    {
                        const __VLS_130 = __VLS_intrinsicElements["thead"];
                        const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
                        const __VLS_132 = __VLS_131({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                        ({}({ ...{}, }));
                        {
                            const __VLS_135 = __VLS_intrinsicElements["tr"];
                            const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
                            const __VLS_137 = __VLS_136({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                            ({}({ ...{}, }));
                            {
                                const __VLS_140 = __VLS_intrinsicElements["th"];
                                const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
                                const __VLS_142 = __VLS_141({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                                ({}({ ...{}, }));
                                const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
                            }
                            {
                                const __VLS_145 = __VLS_intrinsicElements["th"];
                                const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
                                const __VLS_147 = __VLS_146({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                                ({}({ ...{}, }));
                                (__VLS_148.slots).default;
                                const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
                            }
                            {
                                const __VLS_150 = __VLS_intrinsicElements["th"];
                                const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
                                const __VLS_152 = __VLS_151({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                                ({}({ ...{}, }));
                                (__VLS_153.slots).default;
                                const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
                            }
                            {
                                const __VLS_155 = __VLS_intrinsicElements["th"];
                                const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
                                const __VLS_157 = __VLS_156({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                                ({}({ ...{}, }));
                                (__VLS_158.slots).default;
                                const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                            }
                            {
                                const __VLS_160 = __VLS_intrinsicElements["th"];
                                const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
                                const __VLS_162 = __VLS_161({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                                ({}({ ...{}, }));
                                (__VLS_163.slots).default;
                                const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
                            }
                            (__VLS_138.slots).default;
                            const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                        }
                        (__VLS_133.slots).default;
                        const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                    }
                    {
                        const __VLS_165 = __VLS_intrinsicElements["tbody"];
                        const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
                        const __VLS_167 = __VLS_166({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_166));
                        ({}({ ...{}, }));
                        {
                            const __VLS_170 = __VLS_intrinsicElements["tr"];
                            const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
                            const __VLS_172 = __VLS_171({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
                            ({}({ ...{}, }));
                            {
                                const __VLS_175 = __VLS_intrinsicElements["td"];
                                const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
                                const __VLS_177 = __VLS_176({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_176));
                                ({}({ ...{}, }));
                                {
                                    const __VLS_180 = {}.QCheckbox;
                                    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ ...{}, dense: (true), modelValue: ((__VLS_ctx.sel)), }));
                                    ({}.QCheckbox);
                                    const __VLS_182 = __VLS_181({ ...{}, dense: (true), modelValue: ((__VLS_ctx.sel)), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.sel)), }));
                                    const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
                                }
                                (__VLS_178.slots).default;
                                const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177);
                            }
                            {
                                const __VLS_185 = __VLS_intrinsicElements["td"];
                                const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
                                const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                                ({}({ ...{}, }));
                                (__VLS_188.slots).default;
                                const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                            }
                            {
                                const __VLS_190 = __VLS_intrinsicElements["td"];
                                const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
                                const __VLS_192 = __VLS_191({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_191));
                                ({}({ ...{}, }));
                                (__VLS_193.slots).default;
                                const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192);
                            }
                            {
                                const __VLS_195 = __VLS_intrinsicElements["td"];
                                const __VLS_196 = __VLS_elementAsFunctionalComponent(__VLS_195);
                                const __VLS_197 = __VLS_196({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_196));
                                ({}({ ...{}, }));
                                (__VLS_198.slots).default;
                                const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197);
                            }
                            {
                                const __VLS_200 = __VLS_intrinsicElements["td"];
                                const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
                                const __VLS_202 = __VLS_201({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_201));
                                ({}({ ...{}, }));
                                (__VLS_203.slots).default;
                                const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202);
                            }
                            (__VLS_173.slots).default;
                            const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
                        }
                        {
                            const __VLS_205 = __VLS_intrinsicElements["tr"];
                            const __VLS_206 = __VLS_elementAsFunctionalComponent(__VLS_205);
                            const __VLS_207 = __VLS_206({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_206));
                            ({}({ ...{}, }));
                            {
                                const __VLS_210 = __VLS_intrinsicElements["td"];
                                const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
                                const __VLS_212 = __VLS_211({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_211));
                                ({}({ ...{}, }));
                                const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212);
                            }
                            {
                                const __VLS_215 = __VLS_intrinsicElements["td"];
                                const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
                                const __VLS_217 = __VLS_216({ ...{}, class: (" q-gutter-xs text-right"), colspan: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                                ({}({ ...{}, class: (" q-gutter-xs text-right"), colspan: ("4"), }));
                                {
                                    const __VLS_220 = {}.QBtn;
                                    const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }));
                                    ({}.QBtn);
                                    const __VLS_222 = __VLS_221({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                                    ({}({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }));
                                    (__VLS_223.slots).default;
                                    const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                                }
                                {
                                    const __VLS_225 = {}.QBtn;
                                    const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, new __VLS_225({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }));
                                    ({}.QBtn);
                                    const __VLS_227 = __VLS_226({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                                    ({}({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }));
                                    (__VLS_228.slots).default;
                                    const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227);
                                }
                                {
                                    const __VLS_230 = {}.QBtn;
                                    const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }));
                                    ({}.QBtn);
                                    const __VLS_232 = __VLS_231({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
                                    ({}({ ...{}, unelevated: (true), size: ("sm"), color: ("secondary"), }));
                                    (__VLS_233.slots).default;
                                    const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232);
                                }
                                (__VLS_218.slots).default;
                                const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                            }
                            (__VLS_208.slots).default;
                            const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207);
                        }
                        (__VLS_168.slots).default;
                        const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
                    }
                    (__VLS_128.slots).default;
                    const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                }
                (__VLS_88.slots).default;
                const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            let __VLS_14;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["dig"];
        __VLS_styleScopedClasses["q-ml-md"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["table"];
        __VLS_styleScopedClasses["q-gutter-xs"];
        __VLS_styleScopedClasses["text-right"];
    }
    var __VLS_slots;
    // @ts-ignore
    [store, store, store, store, store, store, sel, sel, sel,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            req: req,
            store: store,
            form: form,
            sel: sel,
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
//# sourceMappingURL=Access.vue.js.map