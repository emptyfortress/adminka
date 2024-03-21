/* __placeholder__ */
import { ref, watch } from 'vue';
import { useStore } from '@/stores/store';
import { req } from '@/utils/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    first: {
        type: Boolean,
        default: false,
    },
});
const store = useStore();
const form = ref();
const emit = defineEmits(['change', 'haserror', 'noerror']);
watch(store.wc.system, value => {
    if (value) {
        store.changeWebDefaults(3);
        emit('change');
    }
});
const db = ref(['AGSupport', 'DvTest', 'DvShowCase']);
const active = ref('AGSupport');
const login = ref('');
const pass = ref('');
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
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
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
            if (props.first) {
                {
                    const __VLS_12 = __VLS_intrinsicElements["div"];
                    const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
                    const __VLS_14 = __VLS_13({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_15.slots).default;
                    const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
                }
            }
            else {
                {
                    const __VLS_17 = __VLS_intrinsicElements["div"];
                    const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
                    const __VLS_19 = __VLS_18({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_20.slots).default;
                    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
                }
            }
            {
                const __VLS_22 = {}.QInput;
                const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.server.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_24 = __VLS_23({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.server.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.store.wc.server.address)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_27 = { 'blur': __VLS_pickEvent(__VLS_26['blur'], {}.onBlur) };
                __VLS_27 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [store, req, store, req, store, req, form,];
                    }
                };
                const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
                let __VLS_26;
            }
            {
                const __VLS_28 = __VLS_intrinsicElements["div"];
                const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
                const __VLS_30 = __VLS_29({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_33 = {}.QIcon;
                    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_35 = __VLS_34({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                }
                {
                    const __VLS_38 = __VLS_intrinsicElements["div"];
                    const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
                    const __VLS_40 = __VLS_39({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_41.slots).default;
                    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                }
                (__VLS_31.slots).default;
                const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
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
                const __VLS_48 = {}.QSelect;
                const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.active)), bgColor: ("white"), options: ((__VLS_ctx.db)), rules: ((__VLS_ctx.req)), }));
                ({}.QSelect);
                const __VLS_50 = __VLS_49({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.active)), bgColor: ("white"), options: ((__VLS_ctx.db)), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.active)), bgColor: ("white"), options: ((__VLS_ctx.db)), rules: ((__VLS_ctx.req)), }));
                let __VLS_53 = { 'blur': __VLS_pickEvent(__VLS_52['blur'], {}.onBlur) };
                __VLS_53 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [active, db, req, active, db, req, active, db, req, form,];
                    }
                };
                const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                let __VLS_52;
            }
            {
                const __VLS_54 = __VLS_intrinsicElements["div"];
                const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
                const __VLS_56 = __VLS_55({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_59 = {}.QIcon;
                    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_61 = __VLS_60({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61);
                }
                {
                    const __VLS_64 = __VLS_intrinsicElements["div"];
                    const __VLS_65 = __VLS_elementAsFunctionalComponent(__VLS_64);
                    const __VLS_66 = __VLS_65({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_67.slots).default;
                    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
                }
                (__VLS_57.slots).default;
                const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
            }
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
                const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.login)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_76 = __VLS_75({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.login)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), modelValue: ((__VLS_ctx.login)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_79 = { 'blur': __VLS_pickEvent(__VLS_78['blur'], {}.onBlur) };
                __VLS_79 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [login, req, login, req, login, req, form,];
                    }
                };
                const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                let __VLS_78;
            }
            {
                const __VLS_80 = __VLS_intrinsicElements["div"];
                const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                const __VLS_82 = __VLS_81({ ...{}, class: (" help"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                ({}({ ...{}, class: (" help"), }));
                {
                    const __VLS_85 = {}.QIcon;
                    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    ({}.QIcon);
                    const __VLS_87 = __VLS_86({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                    ({}({ ...{}, name: ("mdi-help-circle-outline"), color: ("primary"), size: ("xs"), }));
                    const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                }
                {
                    const __VLS_90 = __VLS_intrinsicElements["div"];
                    const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                    const __VLS_92 = __VLS_91({ ...{}, class: (" txt"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                    ({}({ ...{}, class: (" txt"), }));
                    (__VLS_93.slots).default;
                    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                }
                (__VLS_83.slots).default;
                const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
            }
            {
                const __VLS_95 = __VLS_intrinsicElements["div"];
                const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                const __VLS_97 = __VLS_96({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                ({}({ ...{}, class: (" label"), }));
                (__VLS_98.slots).default;
                const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
            }
            {
                const __VLS_100 = {}.QInput;
                const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), type: ("password"), modelValue: ((__VLS_ctx.pass)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                ({}.QInput);
                const __VLS_102 = __VLS_101({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), type: ("password"), modelValue: ((__VLS_ctx.pass)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                ({}({ ...{ 'onBlur': {}, }, dense: (true), outlined: (true), type: ("password"), modelValue: ((__VLS_ctx.pass)), bgColor: ("white"), rules: ((__VLS_ctx.req)), }));
                let __VLS_105 = { 'blur': __VLS_pickEvent(__VLS_104['blur'], {}.onBlur) };
                __VLS_105 = { blur: $event => {
                        __VLS_ctx.form.validate();
                        // @ts-ignore
                        [pass, req, pass, req, pass, req, form,];
                    }
                };
                const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                let __VLS_104;
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
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["help"];
        __VLS_styleScopedClasses["txt"];
        __VLS_styleScopedClasses["label"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            req: req,
            store: store,
            form: form,
            db: db,
            active: active,
            login: login,
            pass: pass,
        };
    },
    props: {
        first: {
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
        first: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
//# sourceMappingURL=WebServer.vue.js.map