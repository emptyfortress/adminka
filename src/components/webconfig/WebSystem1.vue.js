/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { reqnum } from '@/utils/utils';
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon,];
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
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            reqnum: reqnum,
            store: store,
            form: form,
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
//# sourceMappingURL=WebSystem1.vue.js.map