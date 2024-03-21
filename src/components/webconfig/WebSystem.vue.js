/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { req, reqnum, reqtrue } from '@/utils/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    concrete: {
        type: Boolean,
        default: false,
    },
});
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.wc.system, value => {
    if (value) {
        store.changeWebDefaults(2);
        emit('change');
    }
});
const options = ref([0, 1, 2]);
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
    [QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon, QIcon, QIcon, QIcon,];
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    __VLS_components.QRadio;
    __VLS_components.qRadio;
    // @ts-ignore
    [QRadio, QRadio,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect,];
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
                const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.timeout)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                ({}.QInput);
                const __VLS_19 = __VLS_18({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.timeout)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.timeout)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                let __VLS_22 = { 'blur': __VLS_pickEvent(__VLS_21['blur'], {}.onBlur) };
                __VLS_22 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, reqnum, store, reqnum, store, reqnum, form,];
                    }
                };
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
                let __VLS_21;
            }
            {
                const __VLS_23 = __VLS_intrinsicElements["div"];
                const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
                const __VLS_25 = __VLS_24({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_28 = {}.QIcon;
                    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_30 = __VLS_29({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
                }
                {
                    const __VLS_33 = __VLS_intrinsicElements["div"];
                    const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
                    const __VLS_35 = __VLS_34({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_36.slots).default;
                    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                }
                (__VLS_26.slots).default;
                const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
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
                const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.counters)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                ({}.QInput);
                const __VLS_45 = __VLS_44({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.counters)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.counters)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                let __VLS_48 = { 'blur': __VLS_pickEvent(__VLS_47['blur'], {}.onBlur) };
                __VLS_48 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, reqnum, store, reqnum, store, reqnum, form,];
                    }
                };
                const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                let __VLS_47;
            }
            {
                const __VLS_49 = __VLS_intrinsicElements["div"];
                const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
                const __VLS_51 = __VLS_50({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_54 = {}.QIcon;
                    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_56 = __VLS_55({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
                }
                {
                    const __VLS_59 = __VLS_intrinsicElements["div"];
                    const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
                    const __VLS_61 = __VLS_60({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_62.slots).default;
                    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                }
                (__VLS_52.slots).default;
                const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
            }
            {
                const __VLS_64 = __VLS_intrinsicElements["div"];
                const __VLS_65 = __VLS_elementAsFunctionalComponent(__VLS_64);
                const __VLS_66 = __VLS_65({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_67.slots).default;
                const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
            }
            {
                const __VLS_69 = __VLS_intrinsicElements["div"];
                const __VLS_70 = __VLS_elementAsFunctionalComponent(__VLS_69);
                const __VLS_71 = __VLS_70({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                ({}({ ...{}, }));
                {
                    const __VLS_74 = {}.QRadio;
                    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.system.log)), val: ("yes"), }));
                    ({}.QRadio);
                    const __VLS_76 = __VLS_75({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.system.log)), val: ("yes"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                    ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.system.log)), val: ("yes"), }));
                    (__VLS_77.slots).default;
                    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                }
                {
                    const __VLS_79 = {}.QRadio;
                    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{}, modelValue: ((__VLS_ctx.store.wc.system.log)), val: ("no"), }));
                    ({}.QRadio);
                    const __VLS_81 = __VLS_80({ ...{}, modelValue: ((__VLS_ctx.store.wc.system.log)), val: ("no"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.system.log)), val: ("no"), }));
                    (__VLS_82.slots).default;
                    const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
                }
                (__VLS_72.slots).default;
                const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
            }
            {
                const __VLS_84 = __VLS_intrinsicElements["div"];
                const __VLS_85 = __VLS_elementAsFunctionalComponent(__VLS_84);
                const __VLS_86 = __VLS_85({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_89 = {}.QIcon;
                    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_91 = __VLS_90({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
                }
                {
                    const __VLS_94 = __VLS_intrinsicElements["div"];
                    const __VLS_95 = __VLS_elementAsFunctionalComponent(__VLS_94);
                    const __VLS_96 = __VLS_95({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_97.slots).default;
                    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
                }
                (__VLS_87.slots).default;
                const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
            }
            {
                const __VLS_99 = __VLS_intrinsicElements["div"];
                const __VLS_100 = __VLS_elementAsFunctionalComponent(__VLS_99);
                const __VLS_101 = __VLS_100({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_102.slots).default;
                const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
            }
            {
                const __VLS_104 = {}.QInput;
                const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.port)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                ({}.QInput);
                const __VLS_106 = __VLS_105({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.port)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
                ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.port)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                let __VLS_109 = { 'blur': __VLS_pickEvent(__VLS_108['blur'], {}.onBlur) };
                __VLS_109 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, store, store, store, store, store, store, reqnum, store, reqnum, store, reqnum, form,];
                    }
                };
                const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
                let __VLS_108;
            }
            {
                const __VLS_110 = __VLS_intrinsicElements["div"];
                const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                const __VLS_112 = __VLS_111({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_115 = {}.QIcon;
                    const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_117 = __VLS_116({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                }
                {
                    const __VLS_120 = __VLS_intrinsicElements["div"];
                    const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                    const __VLS_122 = __VLS_121({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_123.slots).default;
                    const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
                }
                (__VLS_113.slots).default;
                const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
            }
            {
                const __VLS_125 = __VLS_intrinsicElements["div"];
                const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                const __VLS_127 = __VLS_126({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_128.slots).default;
                const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
            }
            {
                const __VLS_130 = {}.QSelect;
                const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.system.autorefresh)), options: ((__VLS_ctx.options)), bgColor: ("white"), rules: ((__VLS_ctx.reqtrue)), }));
                ({}.QSelect);
                const __VLS_132 = __VLS_131({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.system.autorefresh)), options: ((__VLS_ctx.options)), bgColor: ("white"), rules: ((__VLS_ctx.reqtrue)), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.system.autorefresh)), options: ((__VLS_ctx.options)), bgColor: ("white"), rules: ((__VLS_ctx.reqtrue)), }));
                let __VLS_135 = { 'blur': __VLS_pickEvent(__VLS_134['blur'], {}.onBlur) };
                __VLS_135 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, options, reqtrue, store, options, reqtrue, store, options, reqtrue, form,];
                    }
                };
                const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                let __VLS_134;
            }
            {
                const __VLS_136 = __VLS_intrinsicElements["div"];
                const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                const __VLS_138 = __VLS_137({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_141 = {}.QIcon;
                    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_143 = __VLS_142({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                }
                if (__VLS_ctx.store.wc.system.autorefresh == 0) {
                    {
                        const __VLS_146 = __VLS_intrinsicElements["div"];
                        const __VLS_147 = __VLS_elementAsFunctionalComponent(__VLS_146);
                        const __VLS_148 = __VLS_147({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                        ({}({ ...{}, class: (" txt"), }));
                        (__VLS_149.slots).default;
                        const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                    }
                    // @ts-ignore
                    [store,];
                }
                if (__VLS_ctx.store.wc.system.autorefresh == 1) {
                    {
                        const __VLS_151 = __VLS_intrinsicElements["div"];
                        const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
                        const __VLS_153 = __VLS_152({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                        ({}({ ...{}, class: (" txt"), }));
                        (__VLS_154.slots).default;
                        const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
                    }
                    // @ts-ignore
                    [store,];
                }
                if (__VLS_ctx.store.wc.system.autorefresh == 2) {
                    {
                        const __VLS_156 = __VLS_intrinsicElements["div"];
                        const __VLS_157 = __VLS_elementAsFunctionalComponent(__VLS_156);
                        const __VLS_158 = __VLS_157({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
                        ({}({ ...{}, class: (" txt"), }));
                        (__VLS_159.slots).default;
                        const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
                    }
                    // @ts-ignore
                    [store,];
                }
                (__VLS_139.slots).default;
                const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
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
                const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.interval)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                ({}.QInput);
                const __VLS_168 = __VLS_167({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.interval)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
                ({}({ ...{ 'onBlur': {}, }, class: (" short"), dense: (true), outlined: (true), type: ("number"), modelValue: ((__VLS_ctx.store.wc.system.interval)), bgColor: ("white"), rules: ((__VLS_ctx.reqnum)), }));
                let __VLS_171 = { 'blur': __VLS_pickEvent(__VLS_170['blur'], {}.onBlur) };
                __VLS_171 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, reqnum, store, reqnum, store, reqnum, form,];
                    }
                };
                const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
                let __VLS_170;
            }
            {
                const __VLS_172 = __VLS_intrinsicElements["div"];
                const __VLS_173 = __VLS_elementAsFunctionalComponent(__VLS_172);
                const __VLS_174 = __VLS_173({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_177 = {}.QIcon;
                    const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_179 = __VLS_178({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179);
                }
                {
                    const __VLS_182 = __VLS_intrinsicElements["div"];
                    const __VLS_183 = __VLS_elementAsFunctionalComponent(__VLS_182);
                    const __VLS_184 = __VLS_183({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_185.slots).default;
                    const __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184);
                }
                (__VLS_175.slots).default;
                const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174);
            }
            {
                const __VLS_187 = __VLS_intrinsicElements["div"];
                const __VLS_188 = __VLS_elementAsFunctionalComponent(__VLS_187);
                const __VLS_189 = __VLS_188({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_188));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_190.slots).default;
                const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189);
            }
            {
                const __VLS_192 = {}.QInput;
                const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...{ 'onBlur': {}, }, class: (" long"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.system.form)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_194 = __VLS_193({ ...{ 'onBlur': {}, }, class: (" long"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.system.form)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
                ({}({ ...{ 'onBlur': {}, }, class: (" long"), dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.system.form)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_197 = { 'blur': __VLS_pickEvent(__VLS_196['blur'], {}.onBlur) };
                __VLS_197 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194);
                let __VLS_196;
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
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["short"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["long"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            req: req,
            reqnum: reqnum,
            reqtrue: reqtrue,
            store: store,
            form: form,
            options: options,
        };
    },
    props: {
        concrete: {
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
        concrete: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
//# sourceMappingURL=WebSystem.vue.js.map