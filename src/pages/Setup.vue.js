/* __placeholder__ */
import { useRoute, useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const items = [
    // { id: 0, label: 'Сервер DV', to: '/setup/dvserver' },
    // { id: 7, label: 'Конфигурации  компьютеры', to: '/setup/configuration' },
    { id: 1, label: 'Сервер приложений', to: '/setup/dvserver1' },
    // { id: 2, label: 'Соединения', to: '/setup/connection' },
    { id: 3, label: 'Почтовый сервер', to: '/setup/email' },
    {
        id: 4,
        label: 'СФО',
        to: '/setup/worker',
        tooltip: 'Служба фоновых операций',
    },
    {
        id: 5,
        label: 'СУБП',
        to: '/setup/bprocess',
        tooltip: 'Служба управления бизнес-процессами',
    },
    { id: 6, label: 'Web-клиент', to: '/setup/webclient' },
];
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
    __VLS_components.QPage;
    __VLS_components.qPage;
    // @ts-ignore
    [QPage,];
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    __VLS_intrinsicElements.div;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip,];
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView,];
    {
        const __VLS_0 = {}.QPage;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, padding: (true), }));
        ({}.QPage);
        const __VLS_2 = __VLS_1({ ...{}, padding: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, padding: (true), }));
        {
            const __VLS_5 = {}.transition;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, name: ("slide-top"), }));
            ({}.transition);
            const __VLS_7 = __VLS_6({ ...{}, name: ("slide-top"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, name: ("slide-top"), }));
            if (__VLS_ctx.route.meta.nav) {
                {
                    const __VLS_10 = __VLS_intrinsicElements["div"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, class: (" nav"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, class: (" nav"), }));
                    {
                        const __VLS_15 = {}.QBtn;
                        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onClick': {}, }, round: (true), color: ("secondary"), size: ("sm"), }));
                        ({}.QBtn);
                        const __VLS_17 = __VLS_16({ ...{ 'onClick': {}, }, round: (true), color: ("secondary"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                        ({}({ ...{ 'onClick': {}, }, round: (true), color: ("secondary"), size: ("sm"), }));
                        let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], {}.onClick) };
                        __VLS_20 = { click: $event => {
                                if (!((__VLS_ctx.route.meta.nav)))
                                    return;
                                __VLS_ctx.router.push('/setup1');
                                // @ts-ignore
                                [route, router,];
                            }
                        };
                        {
                            const __VLS_21 = {}.QIcon;
                            const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, name: ("mdi-arrow-left"), color: ("white"), }));
                            ({}.QIcon);
                            const __VLS_23 = __VLS_22({ ...{}, name: ("mdi-arrow-left"), color: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                            ({}({ ...{}, name: ("mdi-arrow-left"), color: ("white"), }));
                            const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                        }
                        (__VLS_18.slots).default;
                        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                        let __VLS_19;
                    }
                    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
                        {
                            const __VLS_26 = {}.RouterLink;
                            const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, class: (" bl"), to: ((item.to)), }));
                            ({}.RouterLink);
                            const __VLS_28 = __VLS_27({ ...{}, class: (" bl"), to: ((item.to)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                            ({}({ ...{}, class: (" bl"), to: ((item.to)), }));
                            (item.label);
                            if (item.tooltip) {
                                {
                                    const __VLS_31 = {}.QTooltip;
                                    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, }));
                                    ({}.QTooltip);
                                    const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                                    ({}({ ...{}, }));
                                    (item.tooltip);
                                    (__VLS_34.slots).default;
                                    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                                }
                                // @ts-ignore
                                [items,];
                            }
                            (__VLS_29.slots).default;
                            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                        }
                    }
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_36 = {}.RouterView;
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, }));
            ({}.RouterView);
            const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({}({ ...{}, }));
            {
                const [{ Component, route }] = __VLS_getSlotParams((__VLS_39.slots).default);
                {
                    const __VLS_41 = {}.transition;
                    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, name: ("slide-left"), mode: ("out-in"), }));
                    ({}.transition);
                    const __VLS_43 = __VLS_42({ ...{}, name: ("slide-left"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{}, name: ("slide-left"), mode: ("out-in"), }));
                    {
                        const __VLS_46 = (Component);
                        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, is: ((Component)), }));
                        const __VLS_48 = __VLS_47({ ...{}, is: ((Component)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                        ({}({ ...{}, is: ((Component)), }));
                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    }
                    (__VLS_44.slots).default;
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                }
                __VLS_39.slots['' /* empty slot name completion */];
            }
            const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["nav"];
        __VLS_styleScopedClasses["bl"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            route: route,
            router: router,
            items: items,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Setup.vue.js.map