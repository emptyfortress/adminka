/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    text: {
        type: String,
        default: 'Создать базу данных со следующими параметрами',
    },
});
const table = [
    { id: 0, label: 'Имя базы данных', val: 'lyahhova_gbl_2926' },
    { id: 1, label: 'Псевдоним', val: 'lyahhova_gbl_2926' },
    { id: 2, label: 'Язык', val: 'Русский' },
    { id: 3, label: 'Тип сервера', val: 'PostgreSQL' },
    { id: 4, label: 'Имя сервера', val: '109sv0001.digdes.com' },
    { id: 5, label: 'Порт', val: '5432' },
];
const num = ref(600);
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
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" text-bold"), }));
        (props.text);
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_5 = __VLS_intrinsicElements["div"];
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
        const __VLS_7 = __VLS_6({ ...{}, class: (" form q-mt-md"), flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (" form q-mt-md"), flat: (true), }));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.table))) {
            {
                const __VLS_10 = __VLS_intrinsicElements["label"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                (item.label);
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                (item.val);
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            // @ts-ignore
            [table,];
        }
        {
            const __VLS_20 = __VLS_intrinsicElements["label"];
            const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
            const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ ...{}, }));
            (__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
        {
            const __VLS_25 = {}.QInput;
            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, type: ("number"), modelValue: ((__VLS_ctx.num)), dense: (true), outlined: (true), bgColor: ("white"), }));
            ({}.QInput);
            const __VLS_27 = __VLS_26({ ...{}, type: ("number"), modelValue: ((__VLS_ctx.num)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            ({}({ ...{}, type: ("number"), modelValue: ((__VLS_ctx.num)), dense: (true), outlined: (true), bgColor: ("white"), }));
            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["q-mt-md"];
    }
    var __VLS_slots;
    // @ts-ignore
    [num, num, num,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            table: table,
            num: num,
        };
    },
    props: {
        text: {
            type: String,
            default: 'Создать базу данных со следующими параметрами',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        text: {
            type: String,
            default: 'Создать базу данных со следующими параметрами',
        },
    },
});
//# sourceMappingURL=Step5.vue.js.map