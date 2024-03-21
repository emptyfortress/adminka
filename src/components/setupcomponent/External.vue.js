/* __placeholder__ */
import { ref } from 'vue';
import draggable from 'vuedraggable';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const list1 = ref([
    { name: 'BD digdes', id: 3 },
    { name: 'BD docsvision', id: 4 },
    { name: 'BD showcase', id: 5 },
]);
const list2 = ref([
    { name: 'Database 1', id: 0 },
    { name: 'Database 2', id: 1 },
    { name: 'temp Database', id: 2 },
]);
const dragging = ref(false);
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
    __VLS_components.QCard;
    __VLS_components.qCard;
    __VLS_components.QCard;
    __VLS_components.qCard;
    __VLS_components.QCard;
    __VLS_components.qCard;
    // @ts-ignore
    [QCard, QCard, QCard,];
    __VLS_components.QChip;
    __VLS_components.qChip;
    __VLS_components.QChip;
    __VLS_components.qChip;
    __VLS_components.QChip;
    __VLS_components.qChip;
    // @ts-ignore
    [QChip, QChip, QChip,];
    __VLS_components.QSpace;
    __VLS_components.qSpace;
    // @ts-ignore
    [QSpace,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    __VLS_components.QIcon;
    __VLS_components.qIcon;
    // @ts-ignore
    [QIcon, QIcon, QIcon,];
    __VLS_intrinsicElements.span;
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    __VLS_components.QExpansionItem;
    __VLS_components.qExpansionItem;
    // @ts-ignore
    [QExpansionItem, QExpansionItem,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" external"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" external"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" zag"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" zag"), }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = {}.QCard;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: (" card"), }));
            ({}.QCard);
            const __VLS_12 = __VLS_11({ ...{}, class: (" card"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: (" card"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: (" row items-baseline"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" row items-baseline"), }));
                {
                    const __VLS_20 = {}.QChip;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, color: ("warning"), }));
                    ({}.QChip);
                    const __VLS_22 = __VLS_21({ ...{}, color: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, color: ("warning"), }));
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.QChip;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
                    ({}.QChip);
                    const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, }));
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = {}.QChip;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, }));
                    ({}.QChip);
                    const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, }));
                    (__VLS_33.slots).default;
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_35 = {}.QSpace;
                    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
                    ({}.QSpace);
                    const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, }));
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_40 = {}.QBtn;
                    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, color: ("primary"), unelevated: (true), }));
                    ({}.QBtn);
                    const __VLS_42 = __VLS_41({ ...{}, color: ("primary"), unelevated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                    ({}({ ...{}, color: ("primary"), unelevated: (true), }));
                    (__VLS_43.slots).default;
                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_45 = __VLS_intrinsicElements["div"];
                const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                const __VLS_47 = __VLS_46({ ...{}, class: (" change"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, class: (" change"), }));
                {
                    const __VLS_50 = {}.QIcon;
                    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, name: ("mdi-information-outline"), }));
                    ({}.QIcon);
                    const __VLS_52 = __VLS_51({ ...{}, name: ("mdi-information-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, name: ("mdi-information-outline"), }));
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                {
                    const __VLS_55 = __VLS_intrinsicElements["span"];
                    const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                    const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                    ({}({ ...{}, }));
                    (__VLS_58.slots).default;
                    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                }
                (__VLS_48.slots).default;
                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            }
            {
                const __VLS_60 = {}.QExpansionItem;
                const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, class: (" grey1"), switchToggleSide: (true), }));
                ({}.QExpansionItem);
                const __VLS_62 = __VLS_61({ ...{}, class: (" grey1"), switchToggleSide: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                ({}({ ...{}, class: (" grey1"), switchToggleSide: (true), }));
                {
                    const __VLS_65 = __VLS_intrinsicElements["template"];
                    const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                    const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                    ({}({ ...{}, }));
                    {
                        (__VLS_63.slots).header;
                        {
                            const __VLS_69 = __VLS_intrinsicElements["div"];
                            const __VLS_70 = __VLS_elementAsFunctionalComponent(__VLS_69);
                            const __VLS_71 = __VLS_70({ ...{}, class: (" row items-center justify-between full-width"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
                            ({}({ ...{}, class: (" row items-center justify-between full-width"), }));
                            {
                                const __VLS_74 = __VLS_intrinsicElements["div"];
                                const __VLS_75 = __VLS_elementAsFunctionalComponent(__VLS_74);
                                const __VLS_76 = __VLS_75({ ...{}, class: (" flex items-center q-gutter-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                                ({}({ ...{}, class: (" flex items-center q-gutter-md"), }));
                                {
                                    const __VLS_79 = {}.QIcon;
                                    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{}, name: ("mdi-folder-settings-outline"), size: ("md"), }));
                                    ({}.QIcon);
                                    const __VLS_81 = __VLS_80({ ...{}, name: ("mdi-folder-settings-outline"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                                    ({}({ ...{}, name: ("mdi-folder-settings-outline"), size: ("md"), }));
                                    const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
                                }
                                {
                                    const __VLS_84 = __VLS_intrinsicElements["div"];
                                    const __VLS_85 = __VLS_elementAsFunctionalComponent(__VLS_84);
                                    const __VLS_86 = __VLS_85({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                                    ({}({ ...{}, class: (" title"), }));
                                    (__VLS_87.slots).default;
                                    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
                                }
                                (__VLS_77.slots).default;
                                const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
                            }
                            {
                                const __VLS_89 = __VLS_intrinsicElements["div"];
                                const __VLS_90 = __VLS_elementAsFunctionalComponent(__VLS_89);
                                const __VLS_91 = __VLS_90({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                                ({}({ ...{}, }));
                                {
                                    const __VLS_94 = {}.QBtn;
                                    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-tune-variant"), }));
                                    ({}.QBtn);
                                    const __VLS_96 = __VLS_95({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-tune-variant"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
                                    ({}({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-tune-variant"), }));
                                    let __VLS_99 = { 'click': __VLS_pickEvent(__VLS_98['click'], {}.onClick) };
                                    __VLS_99 = { click: () => { } };
                                    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
                                    let __VLS_98;
                                }
                                {
                                    const __VLS_100 = {}.QBtn;
                                    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                                    ({}.QBtn);
                                    const __VLS_102 = __VLS_101({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                                    ({}({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                                    let __VLS_105 = { 'click': __VLS_pickEvent(__VLS_104['click'], {}.onClick) };
                                    __VLS_105 = { click: () => { } };
                                    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                                    let __VLS_104;
                                }
                                (__VLS_92.slots).default;
                                const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91);
                            }
                            (__VLS_72.slots).default;
                            const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
                        }
                    }
                }
                {
                    const __VLS_106 = {}.QCard;
                    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{}, class: (" dblist"), }));
                    ({}.QCard);
                    const __VLS_108 = __VLS_107({ ...{}, class: (" dblist"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                    ({}({ ...{}, class: (" dblist"), }));
                    {
                        const __VLS_111 = (__VLS_ctx.draggable);
                        const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list1)), itemKey: ("id"), group: ("group"), class: ("list-group"), ghostClass: ("ghost"), }));
                        const __VLS_113 = __VLS_112({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list1)), itemKey: ("id"), group: ("group"), class: ("list-group"), ghostClass: ("ghost"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                        ({}({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list1)), itemKey: ("id"), group: ("group"), class: ("list-group"), ghostClass: ("ghost"), }));
                        let __VLS_116 = { 'start': __VLS_pickEvent(__VLS_115['start'], {}.onStart) };
                        __VLS_116 = { start: $event => {
                                __VLS_ctx.dragging = true;
                                // @ts-ignore
                                [draggable, draggable, list1, draggable, list1, draggable, list1, dragging,];
                            }
                        };
                        let __VLS_117 = { 'end': __VLS_pickEvent(__VLS_115['end'], {}.onEnd) };
                        __VLS_117 = { end: $event => {
                                __VLS_ctx.dragging = false;
                                // @ts-ignore
                                [dragging,];
                            }
                        };
                        {
                            const __VLS_118 = __VLS_intrinsicElements["template"];
                            const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                            const __VLS_120 = __VLS_119({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                            ({}({ ...{}, }));
                            {
                                const [{ element, index }] = __VLS_getSlotParams((__VLS_114.slots).item);
                                {
                                    const __VLS_122 = __VLS_intrinsicElements["div"];
                                    const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
                                    const __VLS_124 = __VLS_123({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                                    ({}({ ...{}, }));
                                    (element.name);
                                    (index);
                                    (__VLS_125.slots).default;
                                    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
                                }
                            }
                        }
                        const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                        let __VLS_115;
                    }
                    (__VLS_109.slots).default;
                    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
                }
                const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
            }
            {
                const __VLS_127 = {}.QExpansionItem;
                const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ ...{}, class: (" grey1"), switchToggleSide: (true), }));
                ({}.QExpansionItem);
                const __VLS_129 = __VLS_128({ ...{}, class: (" grey1"), switchToggleSide: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
                ({}({ ...{}, class: (" grey1"), switchToggleSide: (true), }));
                {
                    const __VLS_132 = __VLS_intrinsicElements["template"];
                    const __VLS_133 = __VLS_elementAsFunctionalComponent(__VLS_132);
                    const __VLS_134 = __VLS_133({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_133));
                    ({}({ ...{}, }));
                    {
                        (__VLS_130.slots).header;
                        {
                            const __VLS_136 = __VLS_intrinsicElements["div"];
                            const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                            const __VLS_138 = __VLS_137({ ...{}, class: (" row items-center justify-between full-width"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                            ({}({ ...{}, class: (" row items-center justify-between full-width"), }));
                            {
                                const __VLS_141 = __VLS_intrinsicElements["div"];
                                const __VLS_142 = __VLS_elementAsFunctionalComponent(__VLS_141);
                                const __VLS_143 = __VLS_142({ ...{}, class: (" flex items-center q-gutter-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                                ({}({ ...{}, class: (" flex items-center q-gutter-md"), }));
                                {
                                    const __VLS_146 = {}.QIcon;
                                    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{}, name: ("mdi-folder-settings-outline"), size: ("md"), }));
                                    ({}.QIcon);
                                    const __VLS_148 = __VLS_147({ ...{}, name: ("mdi-folder-settings-outline"), size: ("md"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                                    ({}({ ...{}, name: ("mdi-folder-settings-outline"), size: ("md"), }));
                                    const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                                }
                                {
                                    const __VLS_151 = __VLS_intrinsicElements["div"];
                                    const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
                                    const __VLS_153 = __VLS_152({ ...{}, class: (" title"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                                    ({}({ ...{}, class: (" title"), }));
                                    (__VLS_154.slots).default;
                                    const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
                                }
                                (__VLS_144.slots).default;
                                const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                            }
                            {
                                const __VLS_156 = __VLS_intrinsicElements["div"];
                                const __VLS_157 = __VLS_elementAsFunctionalComponent(__VLS_156);
                                const __VLS_158 = __VLS_157({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_157));
                                ({}({ ...{}, }));
                                {
                                    const __VLS_161 = {}.QBtn;
                                    const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-tune-variant"), }));
                                    ({}.QBtn);
                                    const __VLS_163 = __VLS_162({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-tune-variant"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
                                    ({}({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-tune-variant"), }));
                                    let __VLS_166 = { 'click': __VLS_pickEvent(__VLS_165['click'], {}.onClick) };
                                    __VLS_166 = { click: () => { } };
                                    const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163);
                                    let __VLS_165;
                                }
                                {
                                    const __VLS_167 = {}.QBtn;
                                    const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                                    ({}.QBtn);
                                    const __VLS_169 = __VLS_168({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-plus-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
                                    ({}({ ...{ 'onClick': {}, }, unelevated: (true), flat: (true), round: (true), icon: ("mdi-plus-circle"), }));
                                    let __VLS_172 = { 'click': __VLS_pickEvent(__VLS_171['click'], {}.onClick) };
                                    __VLS_172 = { click: () => { } };
                                    const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169);
                                    let __VLS_171;
                                }
                                (__VLS_159.slots).default;
                                const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
                            }
                            (__VLS_139.slots).default;
                            const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
                        }
                    }
                }
                {
                    const __VLS_173 = {}.QCard;
                    const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, class: (" dblist"), }));
                    ({}.QCard);
                    const __VLS_175 = __VLS_174({ ...{}, class: (" dblist"), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
                    ({}({ ...{}, class: (" dblist"), }));
                    {
                        const __VLS_178 = (__VLS_ctx.draggable);
                        const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list2)), itemKey: ("id"), group: ("group"), class: ("list-group"), ghostClass: ("ghost"), }));
                        const __VLS_180 = __VLS_179({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list2)), itemKey: ("id"), group: ("group"), class: ("list-group"), ghostClass: ("ghost"), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
                        ({}({ ...{ 'onStart': {}, 'onEnd': {}, }, is: ((__VLS_ctx.draggable)), list: ((__VLS_ctx.list2)), itemKey: ("id"), group: ("group"), class: ("list-group"), ghostClass: ("ghost"), }));
                        let __VLS_183 = { 'start': __VLS_pickEvent(__VLS_182['start'], {}.onStart) };
                        __VLS_183 = { start: $event => {
                                __VLS_ctx.dragging = true;
                                // @ts-ignore
                                [draggable, draggable, list2, draggable, list2, draggable, list2, dragging,];
                            }
                        };
                        let __VLS_184 = { 'end': __VLS_pickEvent(__VLS_182['end'], {}.onEnd) };
                        __VLS_184 = { end: $event => {
                                __VLS_ctx.dragging = false;
                                // @ts-ignore
                                [dragging,];
                            }
                        };
                        {
                            const __VLS_185 = __VLS_intrinsicElements["template"];
                            const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
                            const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                            ({}({ ...{}, }));
                            {
                                const [{ element, index }] = __VLS_getSlotParams((__VLS_181.slots).item);
                                {
                                    const __VLS_189 = __VLS_intrinsicElements["div"];
                                    const __VLS_190 = __VLS_elementAsFunctionalComponent(__VLS_189);
                                    const __VLS_191 = __VLS_190({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_190));
                                    ({}({ ...{}, }));
                                    (element.name);
                                    (index);
                                    (__VLS_192.slots).default;
                                    const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
                                }
                            }
                        }
                        const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180);
                        let __VLS_182;
                    }
                    (__VLS_176.slots).default;
                    const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
                }
                const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["external"];
        __VLS_styleScopedClasses["zag"];
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-baseline"];
        __VLS_styleScopedClasses["change"];
        __VLS_styleScopedClasses["grey1"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["flex"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-gutter-md"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["dblist"];
        __VLS_styleScopedClasses["list-group"];
        __VLS_styleScopedClasses["grey1"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["full-width"];
        __VLS_styleScopedClasses["flex"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["q-gutter-md"];
        __VLS_styleScopedClasses["title"];
        __VLS_styleScopedClasses["dblist"];
        __VLS_styleScopedClasses["list-group"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            draggable: draggable,
            list1: list1,
            list2: list2,
            dragging: dragging,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=External.vue.js.map