/* __placeholder__ */
import { ref, reactive, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    name: {
        type: String,
        default: 'name',
    },
    dv: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['delete', 'duble']);
const config = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
const editMode1 = ref(false);
const name = ref(props.name);
const form = reactive({
    name: props.name,
    address: '',
    database: 'Database 1',
    login: '',
    password: '',
    def1: false,
    config: 'Конфигурация А',
});
watch(form, (value) => {
    if (value) {
        editMode1.value = true;
    }
});
const save1 = () => {
    name.value = form.name;
    editMode1.value = false;
};
const del = (e) => {
    emit('delete', e);
};
const duble = () => {
    emit('duble', name);
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
    // @ts-ignore
    [QInput, QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect,];
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox,];
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
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }));
                    ({}.QBtn);
                    const __VLS_17 = __VLS_16({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }));
                    let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], {}.onClick) };
                    __VLS_20 = { click: (__VLS_ctx.duble) };
                    {
                        const __VLS_21 = {}.QTooltip;
                        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_23 = __VLS_22({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                        ({}({ ...{}, }));
                        (__VLS_24.slots).default;
                        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                    let __VLS_19;
                }
                {
                    const __VLS_26 = {}.QBtn;
                    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                    ({}.QBtn);
                    const __VLS_28 = __VLS_27({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                    ({}({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                    {
                        const __VLS_31 = {}.QTooltip;
                        const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                        ({}({ ...{}, }));
                        (__VLS_34.slots).default;
                        const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                    }
                    {
                        const __VLS_36 = {}.QMenu;
                        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, }));
                        ({}.QMenu);
                        const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                        ({}({ ...{}, }));
                        {
                            const __VLS_41 = {}.QList;
                            const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, }));
                            ({}.QList);
                            const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                            ({}({ ...{}, }));
                            {
                                const __VLS_46 = {}.QItem;
                                const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                ({}.QItem);
                                const __VLS_48 = __VLS_47({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                                ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                let __VLS_51 = { 'click': __VLS_pickEvent(__VLS_50['click'], {}.onClick) };
                                __VLS_51 = { click: $event => {
                                        __VLS_ctx.del(__VLS_ctx.name);
                                        // @ts-ignore
                                        [editMode1, editMode1, duble, del, name,];
                                    }
                                };
                                {
                                    const __VLS_52 = {}.QItemSection;
                                    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, }));
                                    ({}.QItemSection);
                                    const __VLS_54 = __VLS_53({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                                    ({}({ ...{}, }));
                                    (__VLS_55.slots).default;
                                    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
                                }
                                (__VLS_49.slots).default;
                                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                                let __VLS_50;
                            }
                            (__VLS_44.slots).default;
                            const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                        }
                        (__VLS_39.slots).default;
                        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                    }
                    (__VLS_29.slots).default;
                    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_57 = __VLS_intrinsicElements["div"];
                const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
                const __VLS_59 = __VLS_58({ ...{}, class: (" current"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                ({}({ ...{}, class: (" current"), }));
                (__VLS_ctx.name);
                (__VLS_60.slots).default;
                const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
            }
            {
                const __VLS_62 = __VLS_intrinsicElements["br"];
                const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
                const __VLS_64 = __VLS_63({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                ({}({ ...{}, }));
                const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
            }
            if (props.dv) {
                {
                    const __VLS_67 = __VLS_intrinsicElements["div"];
                    const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
                    const __VLS_69 = __VLS_68({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                    ({}({ ...{}, class: (" form"), }));
                    {
                        const __VLS_72 = __VLS_intrinsicElements["div"];
                        const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
                        const __VLS_74 = __VLS_73({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_75.slots).default;
                        const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                    }
                    {
                        const __VLS_77 = {}.QInput;
                        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_79 = __VLS_78({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79);
                    }
                    {
                        const __VLS_82 = __VLS_intrinsicElements["div"];
                        const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
                        const __VLS_84 = __VLS_83({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_85.slots).default;
                        const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
                    }
                    {
                        const __VLS_87 = {}.QInput;
                        const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, modelValue: ((__VLS_ctx.form.address)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_89 = __VLS_88({ ...{}, modelValue: ((__VLS_ctx.form.address)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.address)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89);
                    }
                    {
                        const __VLS_92 = __VLS_intrinsicElements["div"];
                        const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
                        const __VLS_94 = __VLS_93({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_95.slots).default;
                        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
                    }
                    {
                        const __VLS_97 = {}.QInput;
                        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, modelValue: ((__VLS_ctx.form.database)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_99 = __VLS_98({ ...{}, modelValue: ((__VLS_ctx.form.database)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.database)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99);
                    }
                    {
                        const __VLS_102 = __VLS_intrinsicElements["div"];
                        const __VLS_103 = __VLS_elementAsFunctionalComponent(__VLS_102);
                        const __VLS_104 = __VLS_103({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_105.slots).default;
                        const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
                    }
                    {
                        const __VLS_107 = {}.QInput;
                        const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{}, modelValue: ((__VLS_ctx.form.login)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_109 = __VLS_108({ ...{}, modelValue: ((__VLS_ctx.form.login)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.login)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109);
                    }
                    {
                        const __VLS_112 = __VLS_intrinsicElements["div"];
                        const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
                        const __VLS_114 = __VLS_113({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_115.slots).default;
                        const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
                    }
                    {
                        const __VLS_117 = {}.QInput;
                        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, modelValue: ((__VLS_ctx.form.password)), dense: (true), outlined: (true), bgColor: ("white"), type: ("password"), }));
                        ({}.QInput);
                        const __VLS_119 = __VLS_118({ ...{}, modelValue: ((__VLS_ctx.form.password)), dense: (true), outlined: (true), bgColor: ("white"), type: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.password)), dense: (true), outlined: (true), bgColor: ("white"), type: ("password"), }));
                        const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
                    }
                    (__VLS_70.slots).default;
                    const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
                }
                // @ts-ignore
                [name, form, form, form, form, form, form, form, form, form, form, form, form, form, form, form,];
            }
            if (!props.dv) {
                {
                    const __VLS_122 = __VLS_intrinsicElements["div"];
                    const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
                    const __VLS_124 = __VLS_123({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                    ({}({ ...{}, class: (" form"), }));
                    {
                        const __VLS_127 = __VLS_intrinsicElements["div"];
                        const __VLS_128 = __VLS_elementAsFunctionalComponent(__VLS_127);
                        const __VLS_129 = __VLS_128({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_130.slots).default;
                        const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
                    }
                    {
                        const __VLS_132 = {}.QInput;
                        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_134 = __VLS_133({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                        const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
                    }
                    {
                        const __VLS_137 = __VLS_intrinsicElements["div"];
                        const __VLS_138 = __VLS_elementAsFunctionalComponent(__VLS_137);
                        const __VLS_139 = __VLS_138({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_140.slots).default;
                        const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139);
                    }
                    {
                        const __VLS_142 = {}.QSelect;
                        const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{}, modelValue: ((__VLS_ctx.form.config)), dense: (true), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.config)), }));
                        ({}.QSelect);
                        const __VLS_144 = __VLS_143({ ...{}, modelValue: ((__VLS_ctx.form.config)), dense: (true), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.config)), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.config)), dense: (true), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.config)), }));
                        const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144);
                    }
                    {
                        const __VLS_147 = __VLS_intrinsicElements["div"];
                        const __VLS_148 = __VLS_elementAsFunctionalComponent(__VLS_147);
                        const __VLS_149 = __VLS_148({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_150.slots).default;
                        const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
                    }
                    {
                        const __VLS_152 = {}.QSelect;
                        const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{}, modelValue: ((__VLS_ctx.form.database)), dense: (true), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.config)), }));
                        ({}.QSelect);
                        const __VLS_154 = __VLS_153({ ...{}, modelValue: ((__VLS_ctx.form.database)), dense: (true), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.config)), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
                        ({}({ ...{}, modelValue: ((__VLS_ctx.form.database)), dense: (true), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.config)), }));
                        const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
                    }
                    (__VLS_125.slots).default;
                    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
                }
                // @ts-ignore
                [form, form, form, form, config, form, config, form, config, form, config, form, config, form, config,];
            }
            {
                const __VLS_157 = __VLS_intrinsicElements["div"];
                const __VLS_158 = __VLS_elementAsFunctionalComponent(__VLS_157);
                const __VLS_159 = __VLS_158({ ...{}, class: (" form q-mt-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
                ({}({ ...{}, class: (" form q-mt-lg"), }));
                {
                    const __VLS_162 = __VLS_intrinsicElements["div"];
                    const __VLS_163 = __VLS_elementAsFunctionalComponent(__VLS_162);
                    const __VLS_164 = __VLS_163({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_163));
                    ({}({ ...{}, }));
                    const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164);
                }
                {
                    const __VLS_167 = {}.QCheckbox;
                    const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ ...{}, modelValue: ((__VLS_ctx.form.def1)), dense: (true), label: ("Использовать по умолчанию"), }));
                    ({}.QCheckbox);
                    const __VLS_169 = __VLS_168({ ...{}, modelValue: ((__VLS_ctx.form.def1)), dense: (true), label: ("Использовать по умолчанию"), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.form.def1)), dense: (true), label: ("Использовать по умолчанию"), }));
                    const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169);
                }
                (__VLS_160.slots).default;
                const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159);
            }
            if (__VLS_ctx.editMode1) {
                {
                    const __VLS_172 = {}.QCardActions;
                    const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({ ...{}, align: ("right"), }));
                    ({}.QCardActions);
                    const __VLS_174 = __VLS_173({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
                    ({}({ ...{}, align: ("right"), }));
                    {
                        const __VLS_177 = {}.QBtn;
                        const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_179 = __VLS_178({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
                        ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                        let __VLS_182 = { 'click': __VLS_pickEvent(__VLS_181['click'], {}.onClick) };
                        __VLS_182 = { click: $event => {
                                if (!((__VLS_ctx.editMode1)))
                                    return;
                                __VLS_ctx.editMode1 = false;
                                // @ts-ignore
                                [form, form, form, editMode1, editMode1,];
                            }
                        };
                        const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179);
                        let __VLS_181;
                    }
                    {
                        const __VLS_183 = {}.QBtn;
                        const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить"), }));
                        ({}.QBtn);
                        const __VLS_185 = __VLS_184({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
                        ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить"), }));
                        let __VLS_188 = { 'click': __VLS_pickEvent(__VLS_187['click'], {}.onClick) };
                        __VLS_188 = { click: (__VLS_ctx.save1) };
                        const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
                        let __VLS_187;
                    }
                    (__VLS_175.slots).default;
                    const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174);
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
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["q-mt-lg"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            config: config,
            editMode1: editMode1,
            name: name,
            form: form,
            save1: save1,
            del: del,
            duble: duble,
        };
    },
    props: {
        name: {
            type: String,
            default: 'name',
        },
        dv: {
            type: Boolean,
            default: false,
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
        dv: {
            type: Boolean,
            default: false,
        },
    },
    emits: {},
});
//# sourceMappingURL=GreyBlock1.vue.js.map