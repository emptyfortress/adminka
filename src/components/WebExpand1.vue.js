/* __placeholder__ */
import { ref } from 'vue';
import WebCommon from '@/components/webconfig/WebCommon.vue';
import WebSystem1 from '@/components/webconfig/WebSystem1.vue';
import WebServer from '@/components/webconfig/WebServer.vue';
import { useStore } from '@/stores/store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['change']);
const setNeg = (e) => {
    store.panelsWeb[e].neg = true;
};
const setPos = (e) => {
    store.panelsWeb[e].neg = false;
};
const store = useStore();
const calcComponent = (e) => {
    switch (e) {
        case 0:
            return WebCommon;
        case 2:
            return WebSystem1;
        case 5:
            return WebServer;
        default:
            return null;
    }
};
const key = ref(0);
const reset = (e) => {
    store.wc.$reset();
    store.panelsWeb[e].change = false;
    store.panels[e].neg = false;
};
const change = () => {
    emit('change');
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
    __VLS_components.QList;
    __VLS_components.qList;
    // @ts-ignore
    [QList,];
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip,];
    {
        const __VLS_0 = {}.QList;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: (" q-mt-md"), separator: (true), }));
        ({}.QList);
        const __VLS_2 = __VLS_1({ ...{}, class: (" q-mt-md"), separator: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" q-mt-md"), separator: (true), }));
        for (const [panel, index] of __VLS_getVForSourceType((__VLS_ctx.store.panelsWeb1))) {
            {
                const __VLS_5 = {}.QExpansionItem;
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, group: ("group"), modelValue: ((panel.expanded)), switchToggleSide: (true), key: ((panel.id)), class: (({ er: panel.neg })), label: ((panel.title)), }));
                ({}.QExpansionItem);
                const __VLS_7 = __VLS_6({ ...{}, group: ("group"), modelValue: ((panel.expanded)), switchToggleSide: (true), key: ((panel.id)), class: (({ er: panel.neg })), label: ((panel.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, group: ("group"), modelValue: ((panel.expanded)), switchToggleSide: (true), key: ((panel.id)), class: (({ er: panel.neg })), label: ((panel.title)), }));
                __VLS_styleScopedClasses = ({ er: panel.neg });
                {
                    const __VLS_10 = __VLS_intrinsicElements["template"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, }));
                    {
                        (__VLS_8.slots).header;
                        {
                            const __VLS_14 = __VLS_intrinsicElements["div"];
                            const __VLS_15 = __VLS_elementAsFunctionalComponent(__VLS_14);
                            const __VLS_16 = __VLS_15({ ...{}, class: (({ er: panel.neg })), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                            ({}({ ...{}, class: (({ er: panel.neg })), }));
                            __VLS_styleScopedClasses = ({ er: panel.neg });
                            {
                                const __VLS_19 = __VLS_intrinsicElements["div"];
                                const __VLS_20 = __VLS_elementAsFunctionalComponent(__VLS_19);
                                const __VLS_21 = __VLS_20({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                                ({}({ ...{}, class: (" title"), }));
                                (panel.title);
                                (__VLS_22.slots).default;
                                const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
                            }
                            {
                                const __VLS_24 = __VLS_intrinsicElements["div"];
                                const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
                                const __VLS_26 = __VLS_25({ ...{}, class: (" icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                                ({}({ ...{}, class: (" icon"), }));
                                if (panel.change) {
                                    {
                                        const __VLS_29 = {}.QBtn;
                                        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), }));
                                        ({}.QBtn);
                                        const __VLS_31 = __VLS_30({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
                                        ({}({ ...{ 'onClick': {}, }, dense: (true), flat: (true), round: (true), }));
                                        let __VLS_34 = { 'click': __VLS_pickEvent(__VLS_33['click'], {}.onClick) };
                                        __VLS_34 = { click: $event => {
                                                if (!((panel.change)))
                                                    return;
                                                __VLS_ctx.reset(panel.id);
                                                // @ts-ignore
                                                [store, reset,];
                                            }
                                        };
                                        {
                                            const __VLS_35 = {}.QIcon;
                                            const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, name: ("mdi-reload"), style: ({}), }));
                                            ({}.QIcon);
                                            const __VLS_37 = __VLS_36({ ...{}, name: ("mdi-reload"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                            ({}({ ...{}, name: ("mdi-reload"), style: ({}), }));
                                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                                        }
                                        {
                                            const __VLS_40 = {}.QTooltip;
                                            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, }));
                                            ({}.QTooltip);
                                            const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                                            ({}({ ...{}, }));
                                            (__VLS_43.slots).default;
                                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                                        }
                                        (__VLS_32.slots).default;
                                        const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
                                        let __VLS_33;
                                    }
                                }
                                if (panel.change) {
                                    {
                                        const __VLS_45 = {}.QBtn;
                                        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), size: ("sm"), label: ("Сохранить"), }));
                                        ({}.QBtn);
                                        const __VLS_47 = __VLS_46({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), size: ("sm"), label: ("Сохранить"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                                        ({}({ ...{ 'onClick': {}, }, flat: (true), color: ("primary"), size: ("sm"), label: ("Сохранить"), }));
                                        let __VLS_50 = { 'click': __VLS_pickEvent(__VLS_49['click'], {}.onClick) };
                                        __VLS_50 = { click: $event => {
                                                if (!((panel.change)))
                                                    return;
                                                __VLS_ctx.reset(panel.id);
                                                // @ts-ignore
                                                [reset,];
                                            }
                                        };
                                        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                                        let __VLS_49;
                                    }
                                }
                                if (panel.neg) {
                                    {
                                        const __VLS_51 = {}.QIcon;
                                        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, name: ("mdi-alert-circle"), size: ("20px"), color: ("negative"), }));
                                        ({}.QIcon);
                                        const __VLS_53 = __VLS_52({ ...{}, name: ("mdi-alert-circle"), size: ("20px"), color: ("negative"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                        ({}({ ...{}, name: ("mdi-alert-circle"), size: ("20px"), color: ("negative"), }));
                                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                                    }
                                }
                                (__VLS_27.slots).default;
                                const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                            }
                            (__VLS_17.slots).default;
                            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
                        }
                    }
                }
                {
                    const __VLS_56 = __VLS_intrinsicElements["div"];
                    const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                    const __VLS_58 = __VLS_57({ ...{}, class: (" pcard"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                    ({}({ ...{}, class: (" pcard"), }));
                    {
                        const __VLS_61 = (__VLS_ctx.calcComponent(panel.id));
                        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onChange': {}, 'onHaserror': {}, 'onNoerror': {}, }, is: ((__VLS_ctx.calcComponent(panel.id))), key: ((__VLS_ctx.key)), part: (true), }));
                        const __VLS_63 = __VLS_62({ ...{ 'onChange': {}, 'onHaserror': {}, 'onNoerror': {}, }, is: ((__VLS_ctx.calcComponent(panel.id))), key: ((__VLS_ctx.key)), part: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                        ({}({ ...{ 'onChange': {}, 'onHaserror': {}, 'onNoerror': {}, }, is: ((__VLS_ctx.calcComponent(panel.id))), key: ((__VLS_ctx.key)), part: (true), }));
                        let __VLS_66 = { 'change': __VLS_pickEvent(__VLS_65['change'], {}.onChange) };
                        __VLS_66 = { change: (__VLS_ctx.change) };
                        let __VLS_67 = { 'haserror': __VLS_pickEvent(__VLS_65['haserror'], {}.onHaserror) };
                        __VLS_67 = { haserror: $event => {
                                __VLS_ctx.setNeg(index);
                                // @ts-ignore
                                [calcComponent, calcComponent, key, calcComponent, key, calcComponent, key, change, setNeg,];
                            }
                        };
                        let __VLS_68 = { 'noerror': __VLS_pickEvent(__VLS_65['noerror'], {}.onNoerror) };
                        __VLS_68 = { noerror: $event => {
                                __VLS_ctx.setPos(index);
                                // @ts-ignore
                                [setPos,];
                            }
                        };
                        const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                        let __VLS_65;
                    }
                    (__VLS_59.slots).default;
                    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                }
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["q-mt-md"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["icon"];
        __VLS_styleScopedClasses["pcard"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            setNeg: setNeg,
            setPos: setPos,
            store: store,
            calcComponent: calcComponent,
            key: key,
            reset: reset,
            change: change,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
//# sourceMappingURL=WebExpand1.vue.js.map