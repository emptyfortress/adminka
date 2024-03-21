/* __placeholder__ */
import { ref, reactive, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    name: {
        type: String,
        default: 'name',
    },
});
const emit = defineEmits(['del']);
const editMode1 = ref(false);
const name = ref(props.name);
const options = [
    'Базовые объекты',
    'Обслуживание ЭП',
    'Коннектор к реестру МЧД',
];
const options1 = ['Контур.Доверенность', 'Option 1', 'Option 2', 'Option 3'];
const options2 = ['Option 0', 'Option 1', 'Option 2', 'Option 3'];
const mcd = ref('Контур.Доверенность');
const api = ref('931a4d85-ef75-8f5e-4363-e5ee1e06bd1e');
const form = reactive({
    name: props.name,
    configtype: 'Базовые объекты',
    connection: 'Sol2016',
    email: 'd6d224',
    server: '',
    timeout: 0,
    turn: false,
    x86: false,
    def1: false,
});
watch(form, value => {
    if (value) {
        editMode1.value = true;
    }
});
const save1 = () => {
    name.value = form.name;
    editMode1.value = false;
};
const del = (e) => {
    emit('del', e);
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
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip,];
    __VLS_components.QMenu;
    __VLS_components.qMenu;
    // @ts-ignore
    [QMenu,];
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
    // @ts-ignore
    [QItemSection,];
    __VLS_intrinsicElements.br;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput, QInput, QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect, QSelect, QSelect,];
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (({ edit: __VLS_ctx.editMode1 })), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (({ edit: __VLS_ctx.editMode1 })), }));
            __VLS_styleScopedClasses = ({ edit: editMode1 });
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" close"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" close"), }));
                {
                    const __VLS_15 = {}.QBtn;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, round: (true), flat: (true), icon: ("mdi-restart"), }));
                    ({}.QBtn);
                    const __VLS_17 = __VLS_16({ ...{}, round: (true), flat: (true), icon: ("mdi-restart"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, round: (true), flat: (true), icon: ("mdi-restart"), }));
                    {
                        const __VLS_20 = {}.QTooltip;
                        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        ({}.QTooltip);
                        const __VLS_22 = __VLS_21({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_25 = {}.QBtn;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                    ({}.QBtn);
                    const __VLS_27 = __VLS_26({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                    {
                        const __VLS_30 = {}.QTooltip;
                        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        ({}.QTooltip);
                        const __VLS_32 = __VLS_31({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                        ({}({ ...{}, anchor: ("top middle"), self: ("bottom middle"), }));
                        (__VLS_33.slots).default;
                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    }
                    {
                        const __VLS_35 = {}.QMenu;
                        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
                        ({}.QMenu);
                        const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                        ({}({ ...{}, }));
                        {
                            const __VLS_40 = {}.QList;
                            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, }));
                            ({}.QList);
                            const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({}({ ...{}, }));
                            {
                                const __VLS_45 = {}.QItem;
                                const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                ({}.QItem);
                                const __VLS_47 = __VLS_46({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                                ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                let __VLS_50 = { 'click': __VLS_pickEvent(__VLS_49['click'], {}.onClick) };
                                __VLS_50 = { click: $event => {
                                        __VLS_ctx.del(__VLS_ctx.name);
                                        // @ts-ignore
                                        [editMode1, editMode1, del, name,];
                                    }
                                };
                                {
                                    const __VLS_51 = {}.QItemSection;
                                    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, }));
                                    ({}.QItemSection);
                                    const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                    ({}({ ...{}, }));
                                    (__VLS_54.slots).default;
                                    const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                                }
                                (__VLS_48.slots).default;
                                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                                let __VLS_49;
                            }
                            (__VLS_43.slots).default;
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                        }
                        (__VLS_38.slots).default;
                        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_56 = __VLS_intrinsicElements["div"];
                const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                const __VLS_58 = __VLS_57({ ...{}, class: (" current"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                ({}({ ...{}, class: (" current"), }));
                (__VLS_ctx.name);
                (__VLS_59.slots).default;
                const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
            }
            {
                const __VLS_61 = __VLS_intrinsicElements["br"];
                const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
                const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                ({}({ ...{}, }));
                const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
            }
            {
                const __VLS_66 = __VLS_intrinsicElements["div"];
                const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                const __VLS_68 = __VLS_67({ ...{}, class: (" threecol"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                ({}({ ...{}, class: (" threecol"), }));
                {
                    const __VLS_71 = __VLS_intrinsicElements["div"];
                    const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
                    const __VLS_73 = __VLS_72({ ...{}, class: (" border zero"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                    ({}({ ...{}, class: (" border zero"), }));
                    {
                        const __VLS_76 = __VLS_intrinsicElements["div"];
                        const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
                        const __VLS_78 = __VLS_77({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                        ({}({ ...{}, class: (" form"), }));
                        {
                            const __VLS_81 = __VLS_intrinsicElements["div"];
                            const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
                            const __VLS_83 = __VLS_82({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_84.slots).default;
                            const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                        }
                        {
                            const __VLS_86 = {}.QInput;
                            const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                            ({}.QInput);
                            const __VLS_88 = __VLS_87({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                            ({}({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                            const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
                        }
                        {
                            const __VLS_91 = __VLS_intrinsicElements["div"];
                            const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
                            const __VLS_93 = __VLS_92({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_94.slots).default;
                            const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
                        }
                        {
                            const __VLS_96 = {}.QSelect;
                            const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.configtype)), dense: (true), outlined: (true), options: ((__VLS_ctx.options)), bgColor: ("white"), }));
                            ({}.QSelect);
                            const __VLS_98 = __VLS_97({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.configtype)), dense: (true), outlined: (true), options: ((__VLS_ctx.options)), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                            ({}({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.configtype)), dense: (true), outlined: (true), options: ((__VLS_ctx.options)), bgColor: ("white"), }));
                            const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
                        }
                        {
                            const __VLS_101 = __VLS_intrinsicElements["div"];
                            const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
                            const __VLS_103 = __VLS_102({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_104.slots).default;
                            const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
                        }
                        {
                            const __VLS_106 = {}.QInput;
                            const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            ({}.QInput);
                            const __VLS_108 = __VLS_107({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                            ({}({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                            const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
                        }
                        {
                            const __VLS_111 = __VLS_intrinsicElements["div"];
                            const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
                            const __VLS_113 = __VLS_112({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_112));
                            ({}({ ...{}, }));
                            const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
                        }
                        {
                            const __VLS_116 = __VLS_intrinsicElements["div"];
                            const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
                            const __VLS_118 = __VLS_117({ ...{}, class: (" checks q-gutter-x-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                            ({}({ ...{}, class: (" checks q-gutter-x-md"), }));
                            {
                                const __VLS_121 = {}.QCheckbox;
                                const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ ...{}, modelValue: ((__VLS_ctx.form.turn)), dense: (true), label: ("Отключено"), }));
                                ({}.QCheckbox);
                                const __VLS_123 = __VLS_122({ ...{}, modelValue: ((__VLS_ctx.form.turn)), dense: (true), label: ("Отключено"), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.form.turn)), dense: (true), label: ("Отключено"), }));
                                const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123);
                            }
                            {
                                const __VLS_126 = {}.QCheckbox;
                                const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{}, modelValue: ((__VLS_ctx.form.x86)), dense: (true), label: ("Использовать x86"), }));
                                ({}.QCheckbox);
                                const __VLS_128 = __VLS_127({ ...{}, modelValue: ((__VLS_ctx.form.x86)), dense: (true), label: ("Использовать x86"), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.form.x86)), dense: (true), label: ("Использовать x86"), }));
                                const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
                            }
                            (__VLS_119.slots).default;
                            const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
                        }
                        (__VLS_79.slots).default;
                        const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                    }
                    (__VLS_74.slots).default;
                    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                }
                {
                    const __VLS_131 = __VLS_intrinsicElements["div"];
                    const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
                    const __VLS_133 = __VLS_132({ ...{}, class: (" border"), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
                    ({}({ ...{}, class: (" border"), }));
                    {
                        const __VLS_136 = __VLS_intrinsicElements["div"];
                        const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                        const __VLS_138 = __VLS_137({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
                        ({}({ ...{}, class: (" form"), }));
                        {
                            const __VLS_141 = __VLS_intrinsicElements["div"];
                            const __VLS_142 = __VLS_elementAsFunctionalComponent(__VLS_141);
                            const __VLS_143 = __VLS_142({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
                            ({}({ ...{}, class: (" label"), }));
                            (__VLS_144.slots).default;
                            const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                        }
                        {
                            const __VLS_146 = {}.QSelect;
                            const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.connection)), dense: (true), outlined: (true), options: ((__VLS_ctx.options2)), bgColor: ("white"), }));
                            ({}.QSelect);
                            const __VLS_148 = __VLS_147({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.connection)), dense: (true), outlined: (true), options: ((__VLS_ctx.options2)), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                            ({}({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.connection)), dense: (true), outlined: (true), options: ((__VLS_ctx.options2)), bgColor: ("white"), }));
                            const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                        }
                        if (__VLS_ctx.form.configtype == 'Базовые объекты') {
                            {
                                const __VLS_151 = __VLS_intrinsicElements["div"];
                                const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
                                const __VLS_153 = __VLS_152({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_154.slots).default;
                                const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
                            }
                            {
                                const __VLS_156 = {}.QSelect;
                                const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.email)), dense: (true), outlined: (true), options: ((__VLS_ctx.options2)), bgColor: ("white"), }));
                                ({}.QSelect);
                                const __VLS_158 = __VLS_157({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.email)), dense: (true), outlined: (true), options: ((__VLS_ctx.options2)), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
                                ({}({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.form.email)), dense: (true), outlined: (true), options: ((__VLS_ctx.options2)), bgColor: ("white"), }));
                                const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
                            }
                            // @ts-ignore
                            [name, form, form, form, form, options, form, options, form, options, form, form, form, form, form, form, form, form, form, form, options2, form, options2, form, options2, form, form, options2, form, options2, form, options2,];
                        }
                        if (__VLS_ctx.form.configtype == 'Обслуживание ЭП') {
                            {
                                const __VLS_161 = __VLS_intrinsicElements["div"];
                                const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
                                const __VLS_163 = __VLS_162({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_164.slots).default;
                                const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163);
                            }
                            {
                                const __VLS_166 = {}.QInput;
                                const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                ({}.QInput);
                                const __VLS_168 = __VLS_167({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
                                ({}({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168);
                            }
                            {
                                const __VLS_171 = __VLS_intrinsicElements["div"];
                                const __VLS_172 = __VLS_elementAsFunctionalComponent(__VLS_171);
                                const __VLS_173 = __VLS_172({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_174.slots).default;
                                const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173);
                            }
                            {
                                const __VLS_176 = {}.QInput;
                                const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                ({}.QInput);
                                const __VLS_178 = __VLS_177({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
                                ({}({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178);
                            }
                            {
                                const __VLS_181 = __VLS_intrinsicElements["div"];
                                const __VLS_182 = __VLS_elementAsFunctionalComponent(__VLS_181);
                                const __VLS_183 = __VLS_182({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_182));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_184.slots).default;
                                const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183);
                            }
                            {
                                const __VLS_186 = {}.QInput;
                                const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                ({}.QInput);
                                const __VLS_188 = __VLS_187({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
                                ({}({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188);
                            }
                            // @ts-ignore
                            [form, form, form, form, form, form, form, form, form, form,];
                        }
                        if (__VLS_ctx.form.configtype == 'Коннектор к реестру МЧД') {
                            {
                                const __VLS_191 = __VLS_intrinsicElements["div"];
                                const __VLS_192 = __VLS_elementAsFunctionalComponent(__VLS_191);
                                const __VLS_193 = __VLS_192({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_194.slots).default;
                                const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
                            }
                            {
                                const __VLS_196 = {}.QSelect;
                                const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.mcd)), dense: (true), outlined: (true), options: ((__VLS_ctx.options1)), bgColor: ("white"), }));
                                ({}.QSelect);
                                const __VLS_198 = __VLS_197({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.mcd)), dense: (true), outlined: (true), options: ((__VLS_ctx.options1)), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
                                ({}({ ...{}, class: (" rem"), modelValue: ((__VLS_ctx.mcd)), dense: (true), outlined: (true), options: ((__VLS_ctx.options1)), bgColor: ("white"), }));
                                const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198);
                            }
                            {
                                const __VLS_201 = __VLS_intrinsicElements["div"];
                                const __VLS_202 = __VLS_elementAsFunctionalComponent(__VLS_201);
                                const __VLS_203 = __VLS_202({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_204.slots).default;
                                const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203);
                            }
                            {
                                const __VLS_206 = {}.QInput;
                                const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ ...{}, modelValue: ((__VLS_ctx.api)), dense: (true), outlined: (true), bgColor: ("white"), type: ("password"), }));
                                ({}.QInput);
                                const __VLS_208 = __VLS_207({ ...{}, modelValue: ((__VLS_ctx.api)), dense: (true), outlined: (true), bgColor: ("white"), type: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
                                ({}({ ...{}, modelValue: ((__VLS_ctx.api)), dense: (true), outlined: (true), bgColor: ("white"), type: ("password"), }));
                                const __VLS_209 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208);
                            }
                            {
                                const __VLS_211 = __VLS_intrinsicElements["div"];
                                const __VLS_212 = __VLS_elementAsFunctionalComponent(__VLS_211);
                                const __VLS_213 = __VLS_212({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
                                ({}({ ...{}, class: (" label"), }));
                                (__VLS_214.slots).default;
                                const __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213);
                            }
                            {
                                const __VLS_216 = {}.QInput;
                                const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                ({}.QInput);
                                const __VLS_218 = __VLS_217({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
                                ({}({ ...{}, class: (" small"), modelValue: ((__VLS_ctx.form.timeout)), dense: (true), outlined: (true), bgColor: ("white"), type: ("number"), }));
                                const __VLS_219 = __VLS_pickFunctionalComponentCtx(__VLS_216, __VLS_218);
                            }
                            // @ts-ignore
                            [form, mcd, options1, mcd, options1, mcd, options1, api, api, api, form, form, form,];
                        }
                        (__VLS_139.slots).default;
                        const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
                    }
                    (__VLS_134.slots).default;
                    const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133);
                }
                (__VLS_69.slots).default;
                const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
            }
            if (__VLS_ctx.editMode1) {
                {
                    const __VLS_221 = {}.QCardActions;
                    const __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ ...{}, align: ("right"), }));
                    ({}.QCardActions);
                    const __VLS_223 = __VLS_222({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
                    ({}({ ...{}, align: ("right"), }));
                    {
                        const __VLS_226 = {}.QBtn;
                        const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_228 = __VLS_227({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
                        ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                        let __VLS_231 = { 'click': __VLS_pickEvent(__VLS_230['click'], {}.onClick) };
                        __VLS_231 = { click: $event => {
                                if (!((__VLS_ctx.editMode1)))
                                    return;
                                __VLS_ctx.editMode1 = false;
                                // @ts-ignore
                                [editMode1, editMode1,];
                            }
                        };
                        const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228);
                        let __VLS_230;
                    }
                    {
                        const __VLS_232 = {}.QBtn;
                        const __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Применить"), }));
                        ({}.QBtn);
                        const __VLS_234 = __VLS_233({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Применить"), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
                        ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Применить"), }));
                        let __VLS_237 = { 'click': __VLS_pickEvent(__VLS_236['click'], {}.onClick) };
                        __VLS_237 = { click: (__VLS_ctx.save1) };
                        const __VLS_235 = __VLS_pickFunctionalComponentCtx(__VLS_232, __VLS_234);
                        let __VLS_236;
                    }
                    (__VLS_224.slots).default;
                    const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223);
                }
                // @ts-ignore
                [save1,];
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["close"];
        __VLS_styleScopedClasses["pink"];
        __VLS_styleScopedClasses["current"];
        __VLS_styleScopedClasses["threecol"];
        __VLS_styleScopedClasses["border"];
        __VLS_styleScopedClasses["zero"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["rem"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["rem"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["small"];
        __VLS_styleScopedClasses["checks"];
        __VLS_styleScopedClasses["q-gutter-x-md"];
        __VLS_styleScopedClasses["border"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["rem"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["rem"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["small"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["small"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["small"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["rem"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["small"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            editMode1: editMode1,
            name: name,
            options: options,
            options1: options1,
            options2: options2,
            mcd: mcd,
            api: api,
            form: form,
            save1: save1,
            del: del,
        };
    },
    props: {
        name: {
            type: String,
            default: 'name',
        },
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        name: {
            type: String,
            default: 'name',
        },
    },
    emits: {},
});
//# sourceMappingURL=GreyBlock2.vue.js.map