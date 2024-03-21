/* __placeholder__ */
import { ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const leftDrawer = ref(true);
const mini = ref(true);
const toggleMini = () => {
    mini.value = !mini.value;
};
const minitoogle = computed(() => {
    return mini.value ? 'mdi-forwardburger' : 'mdi-backburger';
});
const menu = [
    { url: '/', icon: 'mdi-monitor-dashboard', text: 'Dashboard' },
    // { url: '/setup', icon: 'mdi-hammer-wrench', text: 'Настройка' },
    { url: '/setup0', icon: 'mdi-code-braces', text: 'Конфигурации' },
    { url: '/setup1', icon: 'mdi-hammer-wrench', text: 'Модули' },
    { url: '/logs', icon: 'mdi-script-text-outline', text: 'Логи' },
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
    __VLS_components.QDrawer;
    __VLS_components.qDrawer;
    // @ts-ignore
    [QDrawer,];
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList,];
    __VLS_components.QItem;
    __VLS_components.qItem;
    // @ts-ignore
    [QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection, QItemSection,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    {
        const __VLS_0 = {}.QDrawer;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: (" rel"), showIfAbove: (true), behavior: ("desktop"), modelValue: ((__VLS_ctx.leftDrawer)), side: ("left"), bordered: (true), width: ((256)), mini: ((__VLS_ctx.mini)), }));
        ({}.QDrawer);
        const __VLS_2 = __VLS_1({ ...{}, class: (" rel"), showIfAbove: (true), behavior: ("desktop"), modelValue: ((__VLS_ctx.leftDrawer)), side: ("left"), bordered: (true), width: ((256)), mini: ((__VLS_ctx.mini)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" rel"), showIfAbove: (true), behavior: ("desktop"), modelValue: ((__VLS_ctx.leftDrawer)), side: ("left"), bordered: (true), width: ((256)), mini: ((__VLS_ctx.mini)), }));
        {
            const __VLS_5 = {}.QList;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" q-mt-md"), }));
            ({}.QList);
            const __VLS_7 = __VLS_6({ ...{}, class: (" q-mt-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" q-mt-md"), }));
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menu))) {
                {
                    const __VLS_10 = {}.QItem;
                    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, key: ((item.url)), clickable: (true), to: ((item.url)), }));
                    ({}.QItem);
                    const __VLS_12 = __VLS_11({ ...{}, key: ((item.url)), clickable: (true), to: ((item.url)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, key: ((item.url)), clickable: (true), to: ((item.url)), }));
                    {
                        const __VLS_15 = {}.QItemSection;
                        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, avatar: (true), }));
                        ({}.QItemSection);
                        const __VLS_17 = __VLS_16({ ...{}, avatar: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                        ({}({ ...{}, avatar: (true), }));
                        {
                            const __VLS_20 = {}.QIcon;
                            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, name: ((item.icon)), color: ("secondary"), }));
                            ({}.QIcon);
                            const __VLS_22 = __VLS_21({ ...{}, name: ((item.icon)), color: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                            ({}({ ...{}, name: ((item.icon)), color: ("secondary"), }));
                            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                        }
                        (__VLS_18.slots).default;
                        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                    }
                    {
                        const __VLS_25 = {}.QItemSection;
                        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
                        ({}.QItemSection);
                        const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, }));
                        (item.text);
                        (__VLS_28.slots).default;
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
                // @ts-ignore
                [leftDrawer, mini, leftDrawer, mini, leftDrawer, mini, menu,];
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_30 = {}.QBtn;
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {}, }, class: (" mini gt-sm"), round: (true), flat: (true), dense: (true), icon: ((__VLS_ctx.minitoogle)), color: ("secondary"), }));
            ({}.QBtn);
            const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, class: (" mini gt-sm"), round: (true), flat: (true), dense: (true), icon: ((__VLS_ctx.minitoogle)), color: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{ 'onClick': {}, }, class: (" mini gt-sm"), round: (true), flat: (true), dense: (true), icon: ((__VLS_ctx.minitoogle)), color: ("secondary"), }));
            let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], {}.onClick) };
            __VLS_35 = { click: (__VLS_ctx.toggleMini) };
            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            let __VLS_34;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["rel"];
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["mini"];
        __VLS_styleScopedClasses["gt-sm"];
    }
    var __VLS_slots;
    // @ts-ignore
    [minitoogle, minitoogle, minitoogle, toggleMini,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            leftDrawer: leftDrawer,
            mini: mini,
            toggleMini: toggleMini,
            minitoogle: minitoogle,
            menu: menu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Drawer.vue.js.map