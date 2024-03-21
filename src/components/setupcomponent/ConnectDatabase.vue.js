/* __placeholder__ */
import { ref, defineExpose } from 'vue';
import Step1 from '@/components/wizard/Step1.vue';
import Step25 from '@/components/wizard/Step25.vue';
import Step26 from '@/components/wizard/Step26.vue';
import Step3 from '@/components/wizard/Step3.vue';
import Step4 from '@/components/wizard/Step4.vue';
import Step5 from '@/components/wizard/Step5.vue';
import Step6 from '@/components/wizard/Step6.vue';
import Step7 from '@/components/wizard/Step7.vue';
import Finish from '@/components/wizard/Finish.vue';
import { useWiz } from '@/stores/wiz';
const { defineProps, defineSlots, defineEmits, defineModel, defineOptions, withDefaults, } = await import('vue');
const step = ref(1);
const live = ref(false);
const stepper = ref();
const wiz = useWiz();
const nextStep = () => {
    if (step.value === 5 && wiz.dopModules === false) {
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
    __VLS_components.QStep;
    __VLS_components.qStep;
    __VLS_components.QStep;
    __VLS_components.qStep;
    // @ts-ignore
    [QStep, QStep, QStep, QStep, QStep, QStep,];
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
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, name: ((1)), prefix: ("1"), title: ("Сервер SQL"), done: ((__VLS_ctx.step > 1)), }));
                ({}.QStep);
                const __VLS_12 = __VLS_11({ ...{}, name: ((1)), prefix: ("1"), title: ("Сервер SQL"), done: ((__VLS_ctx.step > 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, name: ((1)), prefix: ("1"), title: ("Сервер SQL"), done: ((__VLS_ctx.step > 1)), }));
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
                            const __VLS_25 = (__VLS_ctx.Step1);
                            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, is: ((__VLS_ctx.Step1)), text: ("Выберите сервер БД, под управлением которого будет работать подключаемая база данных:"), }));
                            const __VLS_27 = __VLS_26({ ...{}, is: ((__VLS_ctx.Step1)), text: ("Выберите сервер БД, под управлением которого будет работать подключаемая база данных:"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, is: ((__VLS_ctx.Step1)), text: ("Выберите сервер БД, под управлением которого будет работать подключаемая база данных:"), }));
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
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, name: ((2)), prefix: ("2"), title: ("База данных"), done: ((__VLS_ctx.step > 2)), }));
                ({}.QStep);
                const __VLS_32 = __VLS_31({ ...{}, name: ((2)), prefix: ("2"), title: ("База данных"), done: ((__VLS_ctx.step > 2)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, name: ((2)), prefix: ("2"), title: ("База данных"), done: ((__VLS_ctx.step > 2)), }));
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
                            const __VLS_45 = (__VLS_ctx.Step3);
                            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, is: ((__VLS_ctx.Step3)), }));
                            const __VLS_47 = __VLS_46({ ...{}, is: ((__VLS_ctx.Step3)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                            ({}({ ...{}, is: ((__VLS_ctx.Step3)), }));
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
                        const __VLS_57 = __VLS_56({ ...{}, class: (" arch q-mt-sm"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                        ({}({ ...{}, class: (" arch q-mt-sm"), style: ({}), }));
                        {
                            const __VLS_60 = (__VLS_ctx.Step25);
                            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, is: ((__VLS_ctx.Step25)), }));
                            const __VLS_62 = __VLS_61({ ...{}, is: ((__VLS_ctx.Step25)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                            ({}({ ...{}, is: ((__VLS_ctx.Step25)), }));
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
                const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, name: ((3)), prefix: ("3"), title: ("Конфигурация"), done: ((__VLS_ctx.step > 3)), }));
                ({}.QStep);
                const __VLS_67 = __VLS_66({ ...{}, name: ((3)), prefix: ("3"), title: ("Конфигурация"), done: ((__VLS_ctx.step > 3)), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}({ ...{}, name: ((3)), prefix: ("3"), title: ("Конфигурация"), done: ((__VLS_ctx.step > 3)), }));
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
                            const __VLS_80 = (__VLS_ctx.Step4);
                            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, is: ((__VLS_ctx.Step4)), }));
                            const __VLS_82 = __VLS_81({ ...{}, is: ((__VLS_ctx.Step4)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                            ({}({ ...{}, is: ((__VLS_ctx.Step4)), }));
                            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                        }
                        (__VLS_78.slots).default;
                        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                    }
                    (__VLS_73.slots).default;
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                (__VLS_68.slots).default;
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
            {
                const __VLS_85 = {}.QStep;
                const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, name: ((4)), prefix: ("4"), title: ("Подтверждение параметров БД"), done: ((__VLS_ctx.step > 4)), }));
                ({}.QStep);
                const __VLS_87 = __VLS_86({ ...{}, name: ((4)), prefix: ("4"), title: ("Подтверждение параметров БД"), done: ((__VLS_ctx.step > 4)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                ({}({ ...{}, name: ((4)), prefix: ("4"), title: ("Подтверждение параметров БД"), done: ((__VLS_ctx.step > 4)), }));
                {
                    const __VLS_90 = __VLS_intrinsicElements["div"];
                    const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                    const __VLS_92 = __VLS_91({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_95 = __VLS_intrinsicElements["div"];
                        const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                        const __VLS_97 = __VLS_96({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                        ({}({ ...{}, class: (" arch"), }));
                        {
                            const __VLS_100 = (__VLS_ctx.Step5);
                            const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, is: ((__VLS_ctx.Step5)), }));
                            const __VLS_102 = __VLS_101({ ...{}, is: ((__VLS_ctx.Step5)), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                            ({}({ ...{}, is: ((__VLS_ctx.Step5)), }));
                            const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                        }
                        (__VLS_98.slots).default;
                        const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                    }
                    (__VLS_93.slots).default;
                    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                }
                {
                    const __VLS_105 = __VLS_intrinsicElements["div"];
                    const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                    const __VLS_107 = __VLS_106({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_110 = __VLS_intrinsicElements["div"];
                        const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                        const __VLS_112 = __VLS_111({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                        ({}({ ...{}, class: (" arch q-mt-sm"), }));
                        {
                            const __VLS_115 = (__VLS_ctx.Step26);
                            const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, is: ((__VLS_ctx.Step26)), text: ("Подключение к базе данных может занять длительное время."), }));
                            const __VLS_117 = __VLS_116({ ...{}, is: ((__VLS_ctx.Step26)), text: ("Подключение к базе данных может занять длительное время."), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                            ({}({ ...{}, is: ((__VLS_ctx.Step26)), text: ("Подключение к базе данных может занять длительное время."), }));
                            const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                        }
                        (__VLS_113.slots).default;
                        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
                    }
                    (__VLS_108.slots).default;
                    const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                }
                (__VLS_88.slots).default;
                const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
            }
            {
                const __VLS_120 = {}.QStep;
                const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ ...{}, name: ((5)), prefix: ("5"), title: ("Подключение к БД"), done: ((__VLS_ctx.step > 5)), }));
                ({}.QStep);
                const __VLS_122 = __VLS_121({ ...{}, name: ((5)), prefix: ("5"), title: ("Подключение к БД"), done: ((__VLS_ctx.step > 5)), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                ({}({ ...{}, name: ((5)), prefix: ("5"), title: ("Подключение к БД"), done: ((__VLS_ctx.step > 5)), }));
                {
                    const __VLS_125 = __VLS_intrinsicElements["div"];
                    const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                    const __VLS_127 = __VLS_126({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                    ({}({ ...{}, class: (" all900"), }));
                    {
                        const __VLS_130 = __VLS_intrinsicElements["div"];
                        const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
                        const __VLS_132 = __VLS_131({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                        ({}({ ...{}, class: (" arch"), }));
                        {
                            const __VLS_135 = (__VLS_ctx.Step7);
                            const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Подключение к БД"), result: ("База данных успешно подключена!"), }));
                            const __VLS_137 = __VLS_136({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Подключение к БД"), result: ("База данных успешно подключена!"), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                            ({}({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Подключение к БД"), result: ("База данных успешно подключена!"), }));
                            const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                        }
                        (__VLS_133.slots).default;
                        const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                    }
                    (__VLS_128.slots).default;
                    const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                }
                if (__VLS_ctx.wiz.done) {
                    {
                        const __VLS_140 = __VLS_intrinsicElements["div"];
                        const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
                        const __VLS_142 = __VLS_141({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                        ({}({ ...{}, class: (" all900"), }));
                        {
                            const __VLS_145 = __VLS_intrinsicElements["div"];
                            const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
                            const __VLS_147 = __VLS_146({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                            ({}({ ...{}, class: (" arch q-mt-sm"), }));
                            {
                                const __VLS_150 = (__VLS_ctx.Step6);
                                const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ ...{}, is: ((__VLS_ctx.Step6)), }));
                                const __VLS_152 = __VLS_151({ ...{}, is: ((__VLS_ctx.Step6)), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                                ({}({ ...{}, is: ((__VLS_ctx.Step6)), }));
                                const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
                            }
                            (__VLS_148.slots).default;
                            const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
                        }
                        (__VLS_143.slots).default;
                        const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
                    }
                    // @ts-ignore
                    [step, live, step, live, step, live, stepper, step, step, step, Step1, Step1, Step1, Step1, step, step, step, Step3, Step3, Step3, Step3, Step25, Step25, Step25, Step25, step, step, step, Step4, Step4, Step4, Step4, step, step, step, Step5, Step5, Step5, Step5, Step26, Step26, Step26, Step26, step, step, step, Step7, Step7, Step7, Step7, wiz, Step6, Step6, Step6, Step6,];
                }
                (__VLS_123.slots).default;
                const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
            }
            {
                const __VLS_155 = {}.QStep;
                const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{}, name: ((6)), prefix: ("6"), title: ("Завершение"), done: ((__VLS_ctx.step > 6)), }));
                ({}.QStep);
                const __VLS_157 = __VLS_156({ ...{}, name: ((6)), prefix: ("6"), title: ("Завершение"), done: ((__VLS_ctx.step > 6)), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                ({}({ ...{}, name: ((6)), prefix: ("6"), title: ("Завершение"), done: ((__VLS_ctx.step > 6)), }));
                if (__VLS_ctx.wiz.dopModules) {
                    {
                        const __VLS_160 = __VLS_intrinsicElements["div"];
                        const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
                        const __VLS_162 = __VLS_161({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                        ({}({ ...{}, class: (" all900"), }));
                        {
                            const __VLS_165 = __VLS_intrinsicElements["div"];
                            const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
                            const __VLS_167 = __VLS_166({ ...{}, class: (" arch"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
                            ({}({ ...{}, class: (" arch"), }));
                            {
                                const __VLS_170 = (__VLS_ctx.Step7);
                                const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Установка доп.модулей"), result: ("Модули установлены!"), }));
                                const __VLS_172 = __VLS_171({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Установка доп.модулей"), result: ("Модули установлены!"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
                                ({}({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Установка доп.модулей"), result: ("Модули установлены!"), }));
                                const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
                            }
                            (__VLS_168.slots).default;
                            const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
                        }
                        (__VLS_163.slots).default;
                        const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
                    }
                    // @ts-ignore
                    [step, step, step, wiz, Step7, Step7, Step7, Step7,];
                }
                if (__VLS_ctx.wiz.finish > 1) {
                    {
                        const __VLS_175 = __VLS_intrinsicElements["div"];
                        const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
                        const __VLS_177 = __VLS_176({ ...{}, class: (" all900"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
                        ({}({ ...{}, class: (" all900"), }));
                        {
                            const __VLS_180 = __VLS_intrinsicElements["div"];
                            const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
                            const __VLS_182 = __VLS_181({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                            ({}({ ...{}, class: (" arch q-mt-sm"), }));
                            {
                                const __VLS_185 = (__VLS_ctx.Finish);
                                const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ ...{}, is: ((__VLS_ctx.Finish)), }));
                                const __VLS_187 = __VLS_186({ ...{}, is: ((__VLS_ctx.Finish)), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                                ({}({ ...{}, is: ((__VLS_ctx.Finish)), }));
                                const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                            }
                            (__VLS_183.slots).default;
                            const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
                        }
                        (__VLS_178.slots).default;
                        const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177);
                    }
                    // @ts-ignore
                    [wiz, Finish, Finish, Finish, Finish,];
                }
                (__VLS_158.slots).default;
                const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
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
            Step1: Step1,
            Step25: Step25,
            Step26: Step26,
            Step3: Step3,
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
//# sourceMappingURL=ConnectDatabase.vue.js.map