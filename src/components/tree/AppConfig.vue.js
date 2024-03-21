/* __placeholder__ */
import { useRoute } from 'vue-router';
import Licence from '@/components/setupcomponent/Licence.vue';
import Database from '@/components/setupcomponent/Database.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
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
    __VLS_components.Database;
    __VLS_components.Database;
    // @ts-ignore
    [Database,];
    __VLS_components.Licence;
    __VLS_components.Licence;
    // @ts-ignore
    [Licence,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" treepage"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" treepage"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" mainzag"), id: ('top'), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" mainzag"), id: ('top'), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                (__VLS_ctx.route.params.id);
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["div"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16({ ...{}, class: (" grid"), id: ('bd'), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{}, class: (" grid"), id: ('bd'), }));
            {
                const __VLS_20 = __VLS_intrinsicElements["div"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21({ ...{}, class: (" section"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, class: (" section"), }));
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            {
                const __VLS_25 = {}.Database;
                const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
                ({}.Database);
                const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, }));
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            {
                const __VLS_30 = __VLS_intrinsicElements["div"];
                const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                const __VLS_32 = __VLS_31({ ...{}, class: (" section"), id: ('licence'), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, class: (" section"), id: ('licence'), }));
                (__VLS_33.slots).default;
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            {
                const __VLS_35 = {}.Licence;
                const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
                ({}.Licence);
                const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                ({}({ ...{}, }));
                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["treepage"];
        __VLS_styleScopedClasses["mainzag"];
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["section"];
        __VLS_styleScopedClasses["section"];
    }
    var __VLS_slots;
    // @ts-ignore
    [route,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Licence: Licence,
            Database: Database,
            route: route,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=AppConfig.vue.js.map