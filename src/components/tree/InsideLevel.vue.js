/* __placeholder__ */
import { useRoute, useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
console.log(route.meta);
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
    __VLS_components.QBreadcrumbs;
    __VLS_components.qBreadcrumbs;
    // @ts-ignore
    [QBreadcrumbs,];
    __VLS_components.QBreadcrumbsEl;
    __VLS_components.qBreadcrumbsEl;
    // @ts-ignore
    [QBreadcrumbsEl,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" treepage"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" treepage"), }));
        {
            const __VLS_5 = {}.QBreadcrumbs;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
            ({}.QBreadcrumbs);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.route.meta.bread))) {
                {
                    const __VLS_10 = {}.QBreadcrumbsEl;
                    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onClick': {}, }, label: ((item.label)), icon: ((item.icon)), }));
                    ({}.QBreadcrumbsEl);
                    const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, label: ((item.label)), icon: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{ 'onClick': {}, }, label: ((item.label)), icon: ((item.icon)), }));
                    let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_14['click'], {}.onClick) };
                    __VLS_15 = { click: $event => {
                            __VLS_ctx.router.back;
                            // @ts-ignore
                            [route, router,];
                        }
                    };
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                    let __VLS_14;
                }
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["treepage"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            route: route,
            router: router,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=InsideLevel.vue.js.map