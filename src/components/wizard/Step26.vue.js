/* __placeholder__ */
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    text: {
        type: String,
        default: 'Обновление базы данных может занять длительное время. Пользователи и сервисы, использующие эту базу данных, будут отключены, и не смогут подключиться к ней до окончания процесса обновления.',
    },
    color: {
        type: String,
        default: 'negative',
    },
});
const calcClass = computed(() => {
    return 'text-' + props.color;
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
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_intrinsicElements.span;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" mygrid"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" mygrid"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" text-bold"), }));
            {
                const __VLS_10 = {}.QIcon;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: (" q-mr-md"), name: ("mdi-alert"), color: ((props.color)), size: ("md"), }));
                ({}.QIcon);
                const __VLS_12 = __VLS_11({ ...{}, class: (" q-mr-md"), name: ("mdi-alert"), color: ((props.color)), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" q-mr-md"), name: ("mdi-alert"), color: ((props.color)), size: ("md"), }));
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["span"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: ((__VLS_ctx.calcClass)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: ((__VLS_ctx.calcClass)), }));
                __VLS_styleScopedClasses = (calcClass);
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_20 = __VLS_intrinsicElements["div"];
            const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
            const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ ...{}, }));
            (props.text);
            (__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["mygrid"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["q-mr-md"];
    }
    var __VLS_slots;
    // @ts-ignore
    [calcClass, calcClass,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            calcClass: calcClass,
        };
    },
    props: {
        text: {
            type: String,
            default: 'Обновление базы данных может занять длительное время. Пользователи и сервисы, использующие эту базу данных, будут отключены, и не смогут подключиться к ней до окончания процесса обновления.',
        },
        color: {
            type: String,
            default: 'negative',
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
            default: 'Обновление базы данных может занять длительное время. Пользователи и сервисы, использующие эту базу данных, будут отключены, и не смогут подключиться к ней до окончания процесса обновления.',
        },
        color: {
            type: String,
            default: 'negative',
        },
    },
});
//# sourceMappingURL=Step26.vue.js.map