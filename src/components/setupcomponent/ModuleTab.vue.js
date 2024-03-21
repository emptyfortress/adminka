/* __placeholder__ */
import { ref } from 'vue';
import { useWiz } from '@/stores/wiz';
import Step7 from '@/components/wizard/Step7.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const wiz = useWiz();
const updateState = ref(false);
const key = ref(0);
const start = () => {
    updateState.value = true;
    key.value += 1;
    setTimeout(() => {
        wiz.moveCheck();
        wiz.resetCheck();
    }, 5000);
};
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
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" all"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" all"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" arch archnew"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" arch archnew"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" column"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" column"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: (" text-bold"), }));
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                for (const [item] of __VLS_getVForSourceType((__VLS_ctx.wiz.check1))) {
                    {
                        const __VLS_20 = {}.QCheckbox;
                        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }));
                        ({}.QCheckbox);
                        const __VLS_22 = __VLS_21({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }));
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    // @ts-ignore
                    [wiz,];
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_25 = __VLS_intrinsicElements["div"];
                const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                const __VLS_27 = __VLS_26({ ...{}, class: (" column"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, class: (" column"), }));
                if (__VLS_ctx.wiz.check2.length > 0) {
                    {
                        const __VLS_30 = __VLS_intrinsicElements["div"];
                        const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                        const __VLS_32 = __VLS_31({ ...{}, class: (" text-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                        ({}({ ...{}, class: (" text-bold"), }));
                        (__VLS_33.slots).default;
                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    }
                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.wiz.check2))) {
                        {
                            const __VLS_35 = {}.QCheckbox;
                            const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }));
                            ({}.QCheckbox);
                            const __VLS_37 = __VLS_36({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                            ({}({ ...{}, key: ((item.id)), label: ((item.label)), modelValue: ((item.val)), }));
                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                        }
                        // @ts-ignore
                        [wiz, wiz,];
                    }
                }
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            {
                const __VLS_40 = {}.QBtn;
                const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {}, }, class: (" q-mt-md"), unelevated: (true), color: ("primary"), disable: ((__VLS_ctx.wiz.checkState1 && __VLS_ctx.wiz.checkState2)), size: ("md"), label: ("Начать"), }));
                ({}.QBtn);
                const __VLS_42 = __VLS_41({ ...{ 'onClick': {}, }, class: (" q-mt-md"), unelevated: (true), color: ("primary"), disable: ((__VLS_ctx.wiz.checkState1 && __VLS_ctx.wiz.checkState2)), size: ("md"), label: ("Начать"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                ({}({ ...{ 'onClick': {}, }, class: (" q-mt-md"), unelevated: (true), color: ("primary"), disable: ((__VLS_ctx.wiz.checkState1 && __VLS_ctx.wiz.checkState2)), size: ("md"), label: ("Начать"), }));
                let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], {}.onClick) };
                __VLS_45 = { click: (__VLS_ctx.start) };
                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                let __VLS_44;
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        if (__VLS_ctx.updateState) {
            {
                const __VLS_46 = __VLS_intrinsicElements["div"];
                const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                const __VLS_48 = __VLS_47({ ...{}, class: (" arch q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                ({}({ ...{}, class: (" arch q-mt-sm"), }));
                {
                    const __VLS_51 = (__VLS_ctx.Step7);
                    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Обновление и/или загрузка дополнительных настроек:"), result: ("Завершено успешно!"), key: ((__VLS_ctx.key)), }));
                    const __VLS_53 = __VLS_52({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Обновление и/или загрузка дополнительных настроек:"), result: ("Завершено успешно!"), key: ((__VLS_ctx.key)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                    ({}({ ...{}, is: ((__VLS_ctx.Step7)), hint: ("Обновление и/или загрузка дополнительных настроек:"), result: ("Завершено успешно!"), key: ((__VLS_ctx.key)), }));
                    const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                }
                (__VLS_49.slots).default;
                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
            }
            // @ts-ignore
            [wiz, wiz, wiz, wiz, wiz, wiz, start, updateState, Step7, Step7, key, Step7, key, Step7, key,];
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["all"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["archnew"];
        __VLS_styleScopedClasses["column"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["column"];
        __VLS_styleScopedClasses["text-bold"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["arch"];
        __VLS_styleScopedClasses["q-mt-sm"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Step7: Step7,
            wiz: wiz,
            updateState: updateState,
            key: key,
            start: start,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=ModuleTab.vue.js.map