/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.wc.cache, (value) => {
    if (value) {
        store.changeWebDefaults(1);
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
    [QRadio, QRadio, QRadio, QRadio, QRadio, QRadio,];
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
                const __VLS_17 = __VLS_intrinsicElements["div"];
                const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                const __VLS_19 = __VLS_18({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                ({}({ ...{}, }));
                {
                    const __VLS_22 = {}.QRadio;
                    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.layout)), val: ("yes"), }));
                    ({}.QRadio);
                    const __VLS_24 = __VLS_23({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.layout)), val: ("yes"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                    ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.layout)), val: ("yes"), }));
                    (__VLS_25.slots).default;
                    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
                }
                {
                    const __VLS_27 = {}.QRadio;
                    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.layout)), val: ("no"), }));
                    ({}.QRadio);
                    const __VLS_29 = __VLS_28({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.layout)), val: ("no"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.layout)), val: ("no"), }));
                    (__VLS_30.slots).default;
                    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                }
                (__VLS_20.slots).default;
                const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
            }
            {
                const __VLS_32 = __VLS_intrinsicElements["div"];
                const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
                const __VLS_34 = __VLS_33({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_35.slots).default;
                const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
            }
            {
                const __VLS_37 = __VLS_intrinsicElements["div"];
                const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
                const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                ({}({ ...{}, }));
                {
                    const __VLS_42 = {}.QRadio;
                    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.folders)), val: ("yes"), }));
                    ({}.QRadio);
                    const __VLS_44 = __VLS_43({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.folders)), val: ("yes"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                    ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.folders)), val: ("yes"), }));
                    (__VLS_45.slots).default;
                    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
                }
                {
                    const __VLS_47 = {}.QRadio;
                    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.folders)), val: ("no"), }));
                    ({}.QRadio);
                    const __VLS_49 = __VLS_48({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.folders)), val: ("no"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.folders)), val: ("no"), }));
                    (__VLS_50.slots).default;
                    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
                }
                (__VLS_40.slots).default;
                const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
            }
            {
                const __VLS_52 = __VLS_intrinsicElements["div"];
                const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
                const __VLS_54 = __VLS_53({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_55.slots).default;
                const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
            }
            {
                const __VLS_57 = __VLS_intrinsicElements["div"];
                const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
                const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                ({}({ ...{}, }));
                {
                    const __VLS_62 = {}.QRadio;
                    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.search)), val: ("yes"), }));
                    ({}.QRadio);
                    const __VLS_64 = __VLS_63({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.search)), val: ("yes"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                    ({}({ ...{}, class: (" q-mr-lg"), modelValue: ((__VLS_ctx.store.wc.cache.search)), val: ("yes"), }));
                    (__VLS_65.slots).default;
                    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
                }
                {
                    const __VLS_67 = {}.QRadio;
                    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.search)), val: ("no"), }));
                    ({}.QRadio);
                    const __VLS_69 = __VLS_68({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.search)), val: ("no"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.store.wc.cache.search)), val: ("no"), }));
                    (__VLS_70.slots).default;
                    const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
                }
                (__VLS_60.slots).default;
                const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
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
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-mr-lg"];
    }
    var __VLS_slots;
    // @ts-ignore
    [store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store, store,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
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
//# sourceMappingURL=WebCache.vue.js.map