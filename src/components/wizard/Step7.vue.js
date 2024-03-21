/* __placeholder__ */
import { ref, onMounted, onUpdated } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { rand } from '@vueuse/shared';
import { useWiz } from '@/stores/wiz';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    hint: {
        type: String,
        default: 'Создание БД',
    },
    result: {
        type: String,
        default: 'Завершено успешно!',
    },
});
const wiz = useWiz();
const visible = ref(true);
const showData = ref(false);
onMounted(() => {
    setTimeout(() => {
        visible.value = false;
        showData.value = true;
        wiz.done = true;
        wiz.finish++;
    }, 5000);
});
onUpdated(() => {
    setTimeout(() => {
        visible.value = false;
        showData.value = true;
        wiz.done = true;
        wiz.finish++;
    }, 5000);
});
const greetings = [
    'Hello',
    'Привет',
    'Здравствуйте',
    'Наше вам с кисточкой',
    'Hi',
    'Yo!',
    'Hey',
    'Hola',
    'こんにちは',
    'Bonjour',
    'Salut!',
    '你好',
];
const word = ref('Hello');
const interval = ref(500);
const { pause, resume, isActive } = useIntervalFn(() => {
    word.value = greetings[rand(0, greetings.length - 1)];
}, interval);
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
    __VLS_components.QLinearProgress;
    __VLS_components.qLinearProgress;
    // @ts-ignore
    [QLinearProgress,];
    __VLS_components.QCardSection;
    __VLS_components.qCardSection;
    // @ts-ignore
    [QCardSection,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        if (__VLS_ctx.visible) {
            {
                const __VLS_5 = {}.QLinearProgress;
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-mt-lg"), indeterminate: (true), }));
                ({}.QLinearProgress);
                const __VLS_7 = __VLS_6({ ...{}, class: (" q-mt-lg"), indeterminate: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, class: (" q-mt-lg"), indeterminate: (true), }));
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" text-center q-mt-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" text-center q-mt-md"), }));
                (__VLS_ctx.word);
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            // @ts-ignore
            [visible, word,];
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["div"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16({ ...{}, class: (" min"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{}, class: (" min"), }));
            {
                const __VLS_20 = {}.QCardSection;
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: (" suc"), }));
                ({}.QCardSection);
                const __VLS_22 = __VLS_21({ ...{}, class: (" suc"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, class: (" suc"), }));
                __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showData));
                {
                    const __VLS_25 = {}.QIcon;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, class: (" q-mr-md"), name: ("mdi-check-bold"), color: ("teal"), size: ("md"), }));
                    ({}.QIcon);
                    const __VLS_27 = __VLS_26({ ...{}, class: (" q-mr-md"), name: ("mdi-check-bold"), color: ("teal"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, class: (" q-mr-md"), name: ("mdi-check-bold"), color: ("teal"), size: ("md"), }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (props.result);
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["q-mt-lg"];
        __VLS_styleScopedClasses["text-center"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["min"];
        __VLS_styleScopedClasses["suc"];
        __VLS_styleScopedClasses["q-mr-md"];
    }
    var __VLS_slots;
    // @ts-ignore
    [showData,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            visible: visible,
            showData: showData,
            word: word,
        };
    },
    props: {
        hint: {
            type: String,
            default: 'Создание БД',
        },
        result: {
            type: String,
            default: 'Завершено успешно!',
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        hint: {
            type: String,
            default: 'Создание БД',
        },
        result: {
            type: String,
            default: 'Завершено успешно!',
        },
    },
});
//# sourceMappingURL=Step7.vue.js.map