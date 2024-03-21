/* __placeholder__ */
import { ref } from "vue";
import { useQuasar } from "quasar";
import Drawer from "@/components/Drawer.vue";
import RDrawer from "@/components/RDrawer.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const rightDrawer = ref(false);
const ru = ref(true);
// const toggleRightDrawer = () => {
// 	rightDrawer.value = !rightDrawer.value
// }
const $q = useQuasar();
const dark = () => {
    $q.dark.toggle();
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
    __VLS_components.QLayout;
    __VLS_components.qLayout;
    // @ts-ignore
    [QLayout,];
    __VLS_components.QHeader;
    __VLS_components.qHeader;
    // @ts-ignore
    [QHeader,];
    __VLS_components.QToolbar;
    __VLS_components.qToolbar;
    // @ts-ignore
    [QToolbar,];
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_components.QToolbarTitle;
    __VLS_components.qToolbarTitle;
    // @ts-ignore
    [QToolbarTitle,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    __VLS_components.QAvatar;
    __VLS_components.qAvatar;
    // @ts-ignore
    [QAvatar,];
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu,];
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    __VLS_components.QItem;
    __VLS_components.qItem;
    // @ts-ignore
    [QItem, QItem, QItem,];
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    __VLS_components.QItemSection;
    __VLS_components.qItemSection;
    // @ts-ignore
    [QItemSection, QItemSection, QItemSection, QItemSection,];
    __VLS_components.Drawer;
    __VLS_components.Drawer;
    // @ts-ignore
    [Drawer,];
    __VLS_components.QPageContainer;
    __VLS_components.qPageContainer;
    // @ts-ignore
    [QPageContainer,];
    __VLS_components.QPage;
    __VLS_components.qPage;
    // @ts-ignore
    [QPage,];
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView,];
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition,];
    __VLS_components.QFooter;
    __VLS_components.qFooter;
    // @ts-ignore
    [QFooter,];
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    {
        const __VLS_0 = {}.QLayout;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, view: ("hHh LpR lFr"), }));
        ({}.QLayout);
        const __VLS_2 = __VLS_1({ ...{}, view: ("hHh LpR lFr"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, view: ("hHh LpR lFr"), }));
        {
            const __VLS_5 = {}.QHeader;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: (" head"), reveal: (true), }));
            ({}.QHeader);
            const __VLS_7 = __VLS_6({ ...{}, class: (" head"), reveal: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" head"), reveal: (true), }));
            {
                const __VLS_10 = {}.QToolbar;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
                ({}.QToolbar);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["img"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, src: ("@/assets/img/adm-logo.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, src: ("@/assets/img/adm-logo.svg"), }));
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_20 = {}.QToolbarTitle;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: (" text-uppercase"), }));
                    ({}.QToolbarTitle);
                    const __VLS_22 = __VLS_21({ ...{}, class: (" text-uppercase"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: (" text-uppercase"), }));
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.QBtn;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ 'onClick': {}, }, class: (" q-mr-md"), dense: (true), flat: (true), round: (true), }));
                    ({}.QBtn);
                    const __VLS_27 = __VLS_26({ ...{ 'onClick': {}, }, class: (" q-mr-md"), dense: (true), flat: (true), round: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{ 'onClick': {}, }, class: (" q-mr-md"), dense: (true), flat: (true), round: (true), }));
                    let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
                    __VLS_30 = { click: $event => {
                            __VLS_ctx.ru = !__VLS_ctx.ru;
                            // @ts-ignore
                            [ru, ru,];
                        }
                    };
                    if (__VLS_ctx.ru) {
                        {
                            const __VLS_31 = __VLS_intrinsicElements["img"];
                            const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
                            const __VLS_33 = __VLS_32({ ...{}, src: ("@/assets/img/russia.svg"), width: ("26"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                            ({}({ ...{}, src: ("@/assets/img/russia.svg"), width: ("26"), }));
                            const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                        }
                        // @ts-ignore
                        [ru,];
                    }
                    else {
                        {
                            const __VLS_36 = __VLS_intrinsicElements["img"];
                            const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                            const __VLS_38 = __VLS_37({ ...{}, src: ("@/assets/img/us.svg"), width: ("26"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                            ({}({ ...{}, src: ("@/assets/img/us.svg"), width: ("26"), }));
                            const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                        }
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    let __VLS_29;
                }
                {
                    const __VLS_41 = {}.QAvatar;
                    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, color: ("blue-2"), size: ("32px"), }));
                    ({}.QAvatar);
                    const __VLS_43 = __VLS_42({ ...{}, color: ("blue-2"), size: ("32px"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{}, color: ("blue-2"), size: ("32px"), }));
                    {
                        const __VLS_46 = __VLS_intrinsicElements["img"];
                        const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                        const __VLS_48 = __VLS_47({ ...{}, src: ("@/assets/img/user0.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                        ({}({ ...{}, src: ("@/assets/img/user0.svg"), }));
                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    }
                    {
                        const __VLS_51 = {}.QMenu;
                        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, }));
                        ({}.QMenu);
                        const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                        ({}({ ...{}, }));
                        {
                            const __VLS_56 = {}.QItem;
                            const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, clickable: (true), }));
                            ({}.QItem);
                            const __VLS_58 = __VLS_57({ ...{}, clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                            ({}({ ...{}, clickable: (true), }));
                            __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                            {
                                const __VLS_61 = {}.QItemSection;
                                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, class: (" name"), side: (true), }));
                                ({}.QItemSection);
                                const __VLS_63 = __VLS_62({ ...{}, class: (" name"), side: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                                ({}({ ...{}, class: (" name"), side: (true), }));
                                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                            }
                            {
                                const __VLS_66 = {}.QItemSection;
                                const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, }));
                                ({}.QItemSection);
                                const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                                ({}({ ...{}, }));
                                (__VLS_69.slots).default;
                                const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                            }
                            (__VLS_59.slots).default;
                            const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                        }
                        {
                            const __VLS_71 = {}.QItem;
                            const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{}, clickable: (true), }));
                            ({}.QItem);
                            const __VLS_73 = __VLS_72({ ...{}, clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                            ({}({ ...{}, clickable: (true), }));
                            __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                            {
                                const __VLS_76 = {}.QItemSection;
                                const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{}, }));
                                ({}.QItemSection);
                                const __VLS_78 = __VLS_77({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                                ({}({ ...{}, }));
                                (__VLS_79.slots).default;
                                const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                            }
                            (__VLS_74.slots).default;
                            const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                        }
                        {
                            const __VLS_81 = {}.QItem;
                            const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, clickable: (true), }));
                            ({}.QItem);
                            const __VLS_83 = __VLS_82({ ...{}, clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                            ({}({ ...{}, clickable: (true), }));
                            __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                            {
                                const __VLS_86 = {}.QItemSection;
                                const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, }));
                                ({}.QItemSection);
                                const __VLS_88 = __VLS_87({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                                ({}({ ...{}, }));
                                (__VLS_89.slots).default;
                                const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                            }
                            (__VLS_84.slots).default;
                            const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                        }
                        (__VLS_54.slots).default;
                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                    }
                    (__VLS_44.slots).default;
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_91 = {}.Drawer;
            const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, }));
            ({}.Drawer);
            const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
            ({}({ ...{}, }));
            const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
        }
        {
            const __VLS_96 = (__VLS_ctx.RDrawer);
            const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{}, is: ((__VLS_ctx.RDrawer)), show: ((__VLS_ctx.rightDrawer)), }));
            const __VLS_98 = __VLS_97({ ...{}, is: ((__VLS_ctx.RDrawer)), show: ((__VLS_ctx.rightDrawer)), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
            ({}({ ...{}, is: ((__VLS_ctx.RDrawer)), show: ((__VLS_ctx.rightDrawer)), }));
            const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
        }
        {
            const __VLS_101 = {}.QPageContainer;
            const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{}, }));
            ({}.QPageContainer);
            const __VLS_103 = __VLS_102({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
            ({}({ ...{}, }));
            {
                const __VLS_106 = {}.QPage;
                const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{}, }));
                ({}.QPage);
                const __VLS_108 = __VLS_107({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                ({}({ ...{}, }));
                {
                    const __VLS_111 = {}.RouterView;
                    const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{}, }));
                    ({}.RouterView);
                    const __VLS_113 = __VLS_112({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                    ({}({ ...{}, }));
                    {
                        const [{ Component, route }] = __VLS_getSlotParams((__VLS_114.slots).default);
                        {
                            const __VLS_116 = {}.transition;
                            const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ ...{}, name: ("fade"), }));
                            ({}.transition);
                            const __VLS_118 = __VLS_117({ ...{}, name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                            ({}({ ...{}, name: ("fade"), }));
                            {
                                const __VLS_121 = (Component);
                                const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ ...{}, is: ((Component)), }));
                                const __VLS_123 = __VLS_122({ ...{}, is: ((Component)), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
                                ({}({ ...{}, is: ((Component)), }));
                                const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123);
                            }
                            (__VLS_119.slots).default;
                            const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
                        }
                        // @ts-ignore
                        [RDrawer, RDrawer, rightDrawer, RDrawer, rightDrawer, RDrawer, rightDrawer,];
                        __VLS_114.slots['' /* empty slot name completion */];
                    }
                    const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                }
                (__VLS_109.slots).default;
                const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
            }
            (__VLS_104.slots).default;
            const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
        }
        {
            const __VLS_126 = {}.QFooter;
            const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{}, class: (" footer"), bordered: (true), }));
            ({}.QFooter);
            const __VLS_128 = __VLS_127({ ...{}, class: (" footer"), bordered: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
            ({}({ ...{}, class: (" footer"), bordered: (true), }));
            {
                const __VLS_131 = __VLS_intrinsicElements["div"];
                const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
                const __VLS_133 = __VLS_132({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_132));
                ({}({ ...{}, }));
                (__VLS_134.slots).default;
                const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
            }
            {
                const __VLS_136 = __VLS_intrinsicElements["div"];
                const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                const __VLS_138 = __VLS_137({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                ({}({ ...{}, }));
                (__VLS_139.slots).default;
                const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
            }
            {
                const __VLS_141 = __VLS_intrinsicElements["div"];
                const __VLS_142 = __VLS_elementAsFunctionalComponent(__VLS_141);
                const __VLS_143 = __VLS_142({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                ({}({ ...{}, }));
                (__VLS_144.slots).default;
                const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
            }
            (__VLS_129.slots).default;
            const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["head"];
        __VLS_styleScopedClasses["text-uppercase"];
        __VLS_styleScopedClasses["q-mr-md"];
        __VLS_styleScopedClasses["name"];
        __VLS_styleScopedClasses["footer"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Drawer: Drawer,
            RDrawer: RDrawer,
            rightDrawer: rightDrawer,
            ru: ru,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=App.vue.js.map