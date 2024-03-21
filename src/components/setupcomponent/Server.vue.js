/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { req } from '@/utils/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.server.server, (value) => {
    if (value) {
        store.changeDefaults(2);
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput,];
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox, QCheckbox, QCheckbox, QCheckbox, QCheckbox, QCheckbox,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn,];
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
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
    [QRadio, QRadio, QRadio, QRadio, QRadio, QRadio, QRadio,];
    __VLS_components.QSeparator;
    __VLS_components.qSeparator;
    // @ts-ignore
    [QSeparator,];
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
                const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.journal)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_19 = __VLS_18({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.journal)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.journal)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
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
                const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_30 = __VLS_29({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
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
                const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.addressdoc)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_41 = __VLS_40({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.addressdoc)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.server.server.addressdoc)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
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
                const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, }));
                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            }
            {
                const __VLS_50 = {}.QCheckbox;
                const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.server.server.checkversion)), label: ("Проверять версию базы данных"), }));
                ({}.QCheckbox);
                const __VLS_52 = __VLS_51({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.server.server.checkversion)), label: ("Проверять версию базы данных"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.server.server.checkversion)), label: ("Проверять версию базы данных"), }));
                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
            }
            {
                const __VLS_55 = __VLS_intrinsicElements["div"];
                const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                ({}({ ...{}, }));
                const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
            }
            {
                const __VLS_60 = __VLS_intrinsicElements["div"];
                const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
                const __VLS_62 = __VLS_61({ ...{}, class: (" row"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                ({}({ ...{}, class: (" row"), }));
                {
                    const __VLS_65 = {}.QCheckbox;
                    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.server.server.counters)), label: ("Включить счетчики производительности"), }));
                    ({}.QCheckbox);
                    const __VLS_67 = __VLS_66({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.server.server.counters)), label: ("Включить счетчики производительности"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.store.server.server.counters)), label: ("Включить счетчики производительности"), }));
                    const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                }
                {
                    const __VLS_70 = {}.QBtn;
                    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, class: (" q-ml-lg"), unelevated: (true), color: ("secondary"), size: ("sm"), }));
                    ({}.QBtn);
                    const __VLS_72 = __VLS_71({ ...{}, class: (" q-ml-lg"), unelevated: (true), color: ("secondary"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({}({ ...{}, class: (" q-ml-lg"), unelevated: (true), color: ("secondary"), size: ("sm"), }));
                    (__VLS_73.slots).default;
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                (__VLS_63.slots).default;
                const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
            }
            (__VLS_10.slots).default;
            const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        }
        {
            const __VLS_75 = __VLS_intrinsicElements["fieldset"];
            const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
            const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
            ({}({ ...{}, }));
            {
                const __VLS_80 = __VLS_intrinsicElements["legend"];
                const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                const __VLS_82 = __VLS_81({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                ({}({ ...{}, }));
                (__VLS_83.slots).default;
                const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
            }
            {
                const __VLS_85 = {}.QCheckbox;
                const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.filecache)), label: ("Файлы"), }));
                ({}.QCheckbox);
                const __VLS_87 = __VLS_86({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.filecache)), label: ("Файлы"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                ({}({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.filecache)), label: ("Файлы"), }));
                const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
            }
            {
                const __VLS_90 = {}.QCheckbox;
                const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.cardcache)), label: ("Карточки"), }));
                ({}.QCheckbox);
                const __VLS_92 = __VLS_91({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.cardcache)), label: ("Карточки"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                ({}({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.cardcache)), label: ("Карточки"), }));
                const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
            }
            {
                const __VLS_95 = {}.QCheckbox;
                const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.spravcache)), label: ("Справочники"), disable: (true), }));
                ({}.QCheckbox);
                const __VLS_97 = __VLS_96({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.spravcache)), label: ("Справочники"), disable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                ({}({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.spravcache)), label: ("Справочники"), disable: (true), }));
                const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
            }
            {
                const __VLS_100 = {}.QBtn;
                const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, unelevated: (true), color: ("secondary"), size: ("sm"), }));
                ({}.QBtn);
                const __VLS_102 = __VLS_101({ ...{}, unelevated: (true), color: ("secondary"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                ({}({ ...{}, unelevated: (true), color: ("secondary"), size: ("sm"), }));
                (__VLS_103.slots).default;
                const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
            }
            (__VLS_78.slots).default;
            const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
        }
        {
            const __VLS_105 = __VLS_intrinsicElements["fieldset"];
            const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
            const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
            ({}({ ...{}, }));
            {
                const __VLS_110 = __VLS_intrinsicElements["legend"];
                const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                const __VLS_112 = __VLS_111({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                ({}({ ...{}, }));
                (__VLS_113.slots).default;
                const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
            }
            {
                const __VLS_115 = {}.QCheckbox;
                const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.quiet)), label: ("Использовать тихий режим установки модулей"), }));
                ({}.QCheckbox);
                const __VLS_117 = __VLS_116({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.quiet)), label: ("Использовать тихий режим установки модулей"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                ({}({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.quiet)), label: ("Использовать тихий режим установки модулей"), }));
                const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
            }
            {
                const __VLS_120 = {}.QCheckbox;
                const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.skip)), label: ("Пропускать обновление БД при установке модулей"), }));
                ({}.QCheckbox);
                const __VLS_122 = __VLS_121({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.skip)), label: ("Пропускать обновление БД при установке модулей"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                ({}({ ...{}, class: (" q-mr-lg"), dense: (true), modelValue: ((__VLS_ctx.store.server.server.skip)), label: ("Пропускать обновление БД при установке модулей"), }));
                const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
            }
            (__VLS_108.slots).default;
            const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
        }
        {
            const __VLS_125 = __VLS_intrinsicElements["fieldset"];
            const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
            const __VLS_127 = __VLS_126({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_126));
            ({}({ ...{}, }));
            {
                const __VLS_130 = __VLS_intrinsicElements["legend"];
                const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
                const __VLS_132 = __VLS_131({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                ({}({ ...{}, }));
                (__VLS_133.slots).default;
                const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
            }
            {
                const __VLS_135 = __VLS_intrinsicElements["div"];
                const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
                const __VLS_137 = __VLS_136({ ...{}, class: (" radio"), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                ({}({ ...{}, class: (" radio"), }));
                {
                    const __VLS_140 = __VLS_intrinsicElements["div"];
                    const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
                    const __VLS_142 = __VLS_141({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_143.slots).default;
                    const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
                }
                {
                    const __VLS_145 = __VLS_intrinsicElements["div"];
                    const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
                    const __VLS_147 = __VLS_146({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                    ({}({ ...{}, }));
                    {
                        const __VLS_150 = {}.QRadio;
                        const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ ...{}, modelValue: ((__VLS_ctx.store.server.server.def)), val: ("ru"), label: ("Русский"), }));
                        ({}.QRadio);
                        const __VLS_152 = __VLS_151({ ...{}, modelValue: ((__VLS_ctx.store.server.server.def)), val: ("ru"), label: ("Русский"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.def)), val: ("ru"), label: ("Русский"), }));
                        const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
                    }
                    {
                        const __VLS_155 = {}.QRadio;
                        const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{}, modelValue: ((__VLS_ctx.store.server.server.def)), val: ("en"), label: ("English"), }));
                        ({}.QRadio);
                        const __VLS_157 = __VLS_156({ ...{}, modelValue: ((__VLS_ctx.store.server.server.def)), val: ("en"), label: ("English"), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.def)), val: ("en"), label: ("English"), }));
                        const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                    }
                    (__VLS_148.slots).default;
                    const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
                }
                {
                    const __VLS_160 = __VLS_intrinsicElements["div"];
                    const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
                    const __VLS_162 = __VLS_161({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_163.slots).default;
                    const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
                }
                {
                    const __VLS_165 = __VLS_intrinsicElements["div"];
                    const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
                    const __VLS_167 = __VLS_166({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_166));
                    ({}({ ...{}, }));
                    {
                        const __VLS_170 = {}.QRadio;
                        const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("one"), label: ("Выкл."), }));
                        ({}.QRadio);
                        const __VLS_172 = __VLS_171({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("one"), label: ("Выкл."), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("one"), label: ("Выкл."), }));
                        const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
                    }
                    {
                        const __VLS_175 = {}.QRadio;
                        const __VLS_176 = __VLS_asFunctionalComponent(__VLS_175, new __VLS_175({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("foru"), label: ("Вкл."), }));
                        ({}.QRadio);
                        const __VLS_177 = __VLS_176({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("foru"), label: ("Вкл."), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("foru"), label: ("Вкл."), }));
                        const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177);
                    }
                    {
                        const __VLS_180 = {}.QRadio;
                        const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("two"), label: ("Чтение"), }));
                        ({}.QRadio);
                        const __VLS_182 = __VLS_181({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("two"), label: ("Чтение"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("two"), label: ("Чтение"), }));
                        const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
                    }
                    {
                        const __VLS_185 = {}.QRadio;
                        const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("three"), label: ("Запись"), }));
                        ({}.QRadio);
                        const __VLS_187 = __VLS_186({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("three"), label: ("Запись"), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("three"), label: ("Запись"), }));
                        const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                    }
                    {
                        const __VLS_190 = {}.QRadio;
                        const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("five"), label: ("Особый *"), }));
                        ({}.QRadio);
                        const __VLS_192 = __VLS_191({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("five"), label: ("Особый *"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.store.server.server.reg)), val: ("five"), label: ("Особый *"), }));
                        const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192);
                    }
                    (__VLS_168.slots).default;
                    const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
                }
                (__VLS_138.slots).default;
                const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
            }
            {
                const __VLS_195 = {}.QSeparator;
                const __VLS_196 = __VLS_asFunctionalComponent(__VLS_195, new __VLS_195({ ...{}, }));
                ({}.QSeparator);
                const __VLS_197 = __VLS_196({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_196));
                ({}({ ...{}, }));
                const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197);
            }
            {
                const __VLS_200 = __VLS_intrinsicElements["div"];
                const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
                const __VLS_202 = __VLS_201({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_201));
                ({}({ ...{}, }));
                (__VLS_203.slots).default;
                const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202);
            }
            (__VLS_128.slots).default;
            const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
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
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["q-ml-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["radio"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
    }
    var __VLS_slots;
    // @ts-ignore
    [store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            req: req,
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
//# sourceMappingURL=Server.vue.js.map