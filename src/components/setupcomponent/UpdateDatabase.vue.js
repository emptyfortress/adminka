/* __placeholder__ */
import { ref, defineExpose } from 'vue';
import Step26 from '@/components/wizard/Step26.vue';
import Step4 from '@/components/wizard/Step4.vue';
import Step5 from '@/components/wizard/Step5.vue';
import Step6 from '@/components/wizard/Step6.vue';
import Step7 from '@/components/wizard/Step7.vue';
import Finish from '@/components/wizard/Finish.vue';
import { useWiz } from '@/stores/wiz';
const { defineProps, defineSlots, defineEmits, defineModel, defineOptions, withDefaults, } = await import('vue');
const step = ref(4);
const live = ref(false);
const stepper = ref();
const wiz = useWiz();
const nextStep = () => {
    if (step.value === 6 && wiz.dopModules === false) {
        wiz.finish = 2;
        stepper.value.next();
    }
    else
        stepper.value.next();
};
const prevStep = () => {
    stepper.value.previous();
};
const __VLS_exposed = { step, nextStep, prevStep };
defineExpose({ step, nextStep, prevStep });
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QStepper;
    __VLS_components.qStepper;
    // @ts-ignore
    [QStepper,];
    __VLS_components.QStep;
    __VLS_components.qStep;
    __VLS_components.QStep;
    __VLS_components.qStep;
    __VLS_components.QStep;
    __VLS_components.qStep;
    __VLS_components.QStep;
    __VLS_components.qStep;
    // @ts-ignore
    [QStep, QStep, QStep, QStep,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" create"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" create"), }));
        {
            const __VLS_5 = {}.QStepper;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, modelValue: ((__VLS_ctx.step)), ref: ("stepper"), alternativeLabels: (true), animated: (true), headerNav: (true), flat: (true), doneColor: ("teal"), keepAlive: ((__VLS_ctx.live)), }));
            ({}.QStepper);
            const __VLS_7 = __VLS_6({ ...{}, modelValue: ((__VLS_ctx.step)), ref: ("stepper"), alternativeLabels: (true), animated: (true), headerNav: (true), flat: (true), doneColor: ("teal"), keepAlive: ((__VLS_ctx.live)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, modelValue: ((__VLS_ctx.step)), ref: ("stepper"), alternativeLabels: (true), animated: (true), headerNav: (true), flat: (true), doneColor: ("teal"), keepAlive: ((__VLS_ctx.live)), }));
            // @ts-ignore
            (__VLS_ctx.stepper);
            {
                const __VLS_10 = {}.QStep;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, name: ((4)), prefix: ("1"), title: ("Конфигурация"), done: ((__VLS_ctx.step > 4)), }));
                ({}.QStep);
                const __VLS_12 = __VLS_11({ ...{}, name: ((4)), prefix: ("1"), title: ("Конфигурация"), done: ((__VLS_ctx.step > 4)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, name: ((4)), prefix: ("1"), title: ("Конфигурация"), done: ((__VLS_ctx.step > 4)), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["div"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, class: (" arch"), }));
                        {
                            const __VLS_25 = (__VLS_ctx.Step4);
                            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, is: ((__VLS_ctx.Step4)), }));
                            const __VLS_27 = __VLS_26({ ...{}, is: ((__VLS_ctx.Step4)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, is: ((__VLS_ctx.Step4)), }));
                            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                        }
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_30 = {}.QStep;
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, name: ((5)), prefix: ("2"), title: ("Подтверждение параметров БД"), done: ((__VLS_ctx.step > 5)), }));
                ({}.QStep);
                const __VLS_32 = __VLS_31({ ...{}, name: ((5)), prefix: ("2"), title: ("Подтверждение параметров БД"), done: ((__VLS_ctx.step > 5)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, name: ((5)), prefix: ("2"), title: ("Подтверждение параметров БД"), done: ((__VLS_ctx.step > 5)), }));
                {
                    const __VLS_35 = __VLS_intrinsicElements["div"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_40 = __VLS_intrinsicElements["div"];
                        const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                        const __VLS_42 = __VLS_41({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                        ({}({ ...{}, class: (" arch"), }));
                        {
                            const __VLS_45 = (__VLS_ctx.Step5);
                            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, is: ((__VLS_ctx.Step5)), text: ("Обновить базу данных со следующими параметрами"), }));
                            const __VLS_47 = __VLS_46({ ...{}, is: ((__VLS_ctx.Step5)), text: ("Обновить базу данных со следующими параметрами"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                            ({}({ ...{}, is: ((__VLS_ctx.Step5)), text: ("Обновить базу данных со следующими параметрами"), }));
                            const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                        }
                        (__VLS_43.slots).default;
                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                    }
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_50 = __VLS_intrinsicElements["div"];
                    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                    const __VLS_52 = __VLS_51({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_55 = __VLS_intrinsicElements["div"];
                        const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                        const __VLS_57 = __VLS_56({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                        ({}({ ...{}, class: (" arch q-mt-sm"), }));
                        {
                            const __VLS_60 = (__VLS_ctx.Step26);
                            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, is: ((__VLS_ctx.Step26)), }));
                            const __VLS_62 = __VLS_61({ ...{}, is: ((__VLS_ctx.Step26)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                            ({}({ ...{}, is: ((__VLS_ctx.Step26)), }));
                            const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                        }
                        (__VLS_58.slots).default;
                        const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                    }
                    (__VLS_53.slots).default;
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                (__VLS_33.slots).default;
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            {
                const __VLS_65 = {}.QStep;
                const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, name: ((6)), prefix: ("6"), title: ("Обновление БД"), done: ((__VLS_ctx.step > 6)), }));
                ({}.QStep);
                const __VLS_67 = __VLS_66({ ...{}, name: ((6)), prefix: ("6"), title: ("Обновление БД"), done: ((__VLS_ctx.step > 6)), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}({ ...{}, name: ((6)), prefix: ("6"), title: ("Обновление БД"), done: ((__VLS_ctx.step > 6)), }));
                {
                    const __VLS_70 = __VLS_intrinsicElements["div"];
                    const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                    const __VLS_72 = __VLS_71({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_75 = __VLS_intrinsicElements["div"];
                        const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                        const __VLS_77 = __VLS_76({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                        ({}({ ...{}, class: (" arch"), }));
                        {
                            const __VLS_80 = (__VLS_ctx.Step7);
                            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Обновление БД"), result: ("База данных успешно обновлена!"), }));
                            const __VLS_82 = __VLS_81({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Обновление БД"), result: ("База данных успешно обновлена!"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                            ({}({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Обновление БД"), result: ("База данных успешно обновлена!"), }));
                            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                        }
                        (__VLS_78.slots).default;
                        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                    }
                    (__VLS_73.slots).default;
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                if (__VLS_ctx.wiz.done) {
                    {
                        const __VLS_85 = __VLS_intrinsicElements["div"];
                        const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                        const __VLS_87 = __VLS_86({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                        ({}({ ...{}, class: (" all900"), }));
                        {
                            const __VLS_90 = __VLS_intrinsicElements["div"];
                            const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                            const __VLS_92 = __VLS_91({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                            ({}({ ...{}, class: (" arch q-mt-sm"), }));
                            {
                                const __VLS_95 = (__VLS_ctx.Step6);
                                const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, is: ((__VLS_ctx.Step6)), }));
                                const __VLS_97 = __VLS_96({ ...{}, is: ((__VLS_ctx.Step6)), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                                ({}({ ...{}, is: ((__VLS_ctx.Step6)), }));
                                const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                            }
                            (__VLS_93.slots).default;
                            const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                        }
                        (__VLS_88.slots).default;
                        const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                    }
                    // @ts-ignore
                    [step, live, step, live, step, live, stepper, step, step, step, Step4, Step4, Step4, Step4, step, step, step, Step5, Step5, Step5, Step5, Step26, Step26, Step26, Step26, step, step, step, Step7, Step7, Step7, Step7, wiz, Step6, Step6, Step6, Step6,];
                }
                (__VLS_68.slots).default;
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
            {
                const __VLS_100 = {}.QStep;
                const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, name: ((7)), prefix: ("7"), title: ("Завершение"), done: ((__VLS_ctx.step > 7)), }));
                ({}.QStep);
                const __VLS_102 = __VLS_101({ ...{}, name: ((7)), prefix: ("7"), title: ("Завершение"), done: ((__VLS_ctx.step > 7)), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                ({}({ ...{}, name: ((7)), prefix: ("7"), title: ("Завершение"), done: ((__VLS_ctx.step > 7)), }));
                if (__VLS_ctx.wiz.dopModules) {
                    {
                        const __VLS_105 = __VLS_intrinsicElements["div"];
                        const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                        const __VLS_107 = __VLS_106({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                        ({}({ ...{}, class: (" all900"), }));
                        {
                            const __VLS_110 = __VLS_intrinsicElements["div"];
                            const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                            const __VLS_112 = __VLS_111({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                            ({}({ ...{}, class: (" arch"), }));
                            {
                                const __VLS_115 = (__VLS_ctx.Step7);
                                const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Установка доп.модулей"), result: ("Модули установлены!"), }));
                                const __VLS_117 = __VLS_116({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Установка доп.модулей"), result: ("Модули установлены!"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                                ({}({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Установка доп.модулей"), result: ("Модули установлены!"), }));
                                const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                            }
                            (__VLS_113.slots).default;
                            const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
                        }
                        (__VLS_108.slots).default;
                        const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                    }
                    // @ts-ignore
                    [step, step, step, wiz, Step7, Step7, Step7, Step7,];
                }
                if (__VLS_ctx.wiz.finish > 1) {
                    {
                        const __VLS_120 = __VLS_intrinsicElements["div"];
                        const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                        const __VLS_122 = __VLS_121({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                        ({}({ ...{}, class: (" all900"), }));
                        {
                            const __VLS_125 = __VLS_intrinsicElements["div"];
                            const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                            const __VLS_127 = __VLS_126({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                            ({}({ ...{}, class: (" arch q-mt-sm"), }));
                            {
                                const __VLS_130 = (__VLS_ctx.Finish);
                                const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{}, is: ((__VLS_ctx.Finish)), }));
                                const __VLS_132 = __VLS_131({ ...{}, is: ((__VLS_ctx.Finish)), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                                ({}({ ...{}, is: ((__VLS_ctx.Finish)), }));
                                const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                            }
                            (__VLS_128.slots).default;
                            const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                        }
                        (__VLS_123.slots).default;
                        const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
                    }
                    // @ts-ignore
                    [wiz, Finish, Finish, Finish, Finish,];
                }
                (__VLS_103.slots).default;
                const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["create"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-sm"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-sm"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["all900"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-sm"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Step26: Step26,
            Step4: Step4,
            Step5: Step5,
            Step6: Step6,
            Step7: Step7,
            Finish: Finish,
            step: step,
            live: live,
            stepper: stepper,
            wiz: wiz,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
//# sourceMappingURL=UpdateDatabase.vue.js.map