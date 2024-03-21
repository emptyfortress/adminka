/* __placeholder__ */
import { ref, reactive, watch } from 'vue';
import { uid } from 'quasar';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    name: {
        type: String,
        default: 'name',
    },
});
const emit = defineEmits(['delete', 'duble']);
const editMode = ref(false);
const name = ref(props.name);
const form = reactive({
    name: props.name,
    def: false,
});
watch(form, (value) => {
    if (value) {
        editMode.value = true;
        con.value = true;
    }
});
const setEditMode = () => {
    editMode.value = !editMode.value;
    con.value = !con.value;
};
const save1 = () => {
    name.value = form.name;
    editMode.value = false;
};
const del = () => {
    emit('delete');
};
const duble = () => {
    emit('duble', name);
};
const con = ref(false);
const compKey = ref(0);
const otmena = () => {
    params.value = [...backup];
    con.value = false;
    editMode.value = false;
    compKey.value += 1;
};
const backup = [
    { id: uid(), key: 'DV_Docsvision_Platform_5.5_Server Databases Docsvision DB', value: '' },
    { id: uid(), key: 'DV_Docsvision__Platform_5.5_Server_DefaultBaseName', value: '' },
    { id: uid(), key: 'DV_Groups_Docs Vision Administrators 0', value: '' },
    { id: uid(), key: 'DV_Groups_Docs Vision Administrators 1', value: '' },
    { id: uid(), key: 'DV_Groups_DocsVision Security Administrators_0', value: '' },
    { id: uid(), key: 'DV_Security_Jwt_Securitykey', value: '' },
    { id: uid(), key: 'DV_Security_Jwt_Issuer', value: '' },
    { id: uid(), key: 'DV_Domains_o', value: '' },
    { id: uid(), key: 'DV_Ldap_Credential_UserName', value: '' },
    { id: uid(), key: 'DV_Ldap_Credential_Password', value: '' },
    { id: uid(), key: 'DV_APIKEY', value: '' },
    { id: uid(), key: 'DV_Logging_LogLevel_Default', value: '' },
    { id: uid(), key: 'KRBS_KTNAME', value: '' },
];
let params = ref([
    { id: uid(), key: 'DV_Docsvision_Platform_5.5_Server Databases Docsvision DB', value: '' },
    { id: uid(), key: 'DV_Docsvision__Platform_5.5_Server_DefaultBaseName', value: '' },
    { id: uid(), key: 'DV_Groups_Docs Vision Administrators 0', value: '' },
    { id: uid(), key: 'DV_Groups_Docs Vision Administrators 1', value: '' },
    { id: uid(), key: 'DV_Groups_DocsVision Security Administrators_0', value: '' },
    { id: uid(), key: 'DV_Security_Jwt_Securitykey', value: '' },
    { id: uid(), key: 'DV_Security_Jwt_Issuer', value: '' },
    { id: uid(), key: 'DV_Domains_o', value: '' },
    { id: uid(), key: 'DV_Ldap_Credential_UserName', value: '' },
    { id: uid(), key: 'DV_Ldap_Credential_Password', value: '' },
    { id: uid(), key: 'DV_APIKEY', value: '' },
    { id: uid(), key: 'DV_Logging_LogLevel_Default', value: '' },
    { id: uid(), key: 'KRBS_KTNAME', value: '' },
]);
const add = (e) => {
    let newid = uid();
    let temp = { id: newid, key: 'Новый параметр', value: '' };
    params.value.splice(e + 1, 0, temp);
    setTimeout(() => {
        let key = document.getElementById(newid);
        key?.focus();
    }, 10);
};
const duplicate = (a, e) => {
    let temp = { id: '', key: '', value: '' };
    Object.assign(temp, a);
    let newid = uid();
    temp.id = newid;
    params.value.splice(e + 1, 0, temp);
    setTimeout(() => {
        let key = document.getElementById(newid);
        window.getSelection()?.selectAllChildren(key);
        key?.focus();
    }, 10);
};
const remove = (e) => {
    params.value.splice(e, 1);
};
const save = (e) => {
    // parameters = []
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
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    __VLS_components.QTooltip;
    __VLS_components.qTooltip;
    // @ts-ignore
    [QTooltip, QTooltip, QTooltip,];
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
    __VLS_intrinsicElements.br;
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
    __VLS_components.QMarkupTable;
    __VLS_components.qMarkupTable;
    // @ts-ignore
    [QMarkupTable,];
    __VLS_intrinsicElements.thead;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.th;
    __VLS_intrinsicElements.tbody;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
    __VLS_intrinsicElements.td;
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
            const __VLS_7 = __VLS_6({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }));
            __VLS_styleScopedClasses = ({ edit: editMode });
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: (" close"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: (" close"), }));
                {
                    const __VLS_15 = {}.QBtn;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-pencil"), }));
                    ({}.QBtn);
                    const __VLS_17 = __VLS_16({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-pencil"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-pencil"), }));
                    let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], {}.onClick) };
                    __VLS_20 = { click: (__VLS_ctx.setEditMode) };
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
                    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }));
                    ({}.QBtn);
                    const __VLS_28 = __VLS_27({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                    ({}({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }));
                    let __VLS_31 = { 'click': __VLS_pickEvent(__VLS_30['click'], {}.onClick) };
                    __VLS_31 = { click: (__VLS_ctx.duble) };
                    {
                        const __VLS_32 = {}.QTooltip;
                        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_34 = __VLS_33({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                        ({}({ ...{}, }));
                        (__VLS_35.slots).default;
                        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
                    }
                    (__VLS_29.slots).default;
                    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                    let __VLS_30;
                }
                {
                    const __VLS_37 = {}.QBtn;
                    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                    ({}.QBtn);
                    const __VLS_39 = __VLS_38({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
                    ({}({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                    {
                        const __VLS_42 = {}.QTooltip;
                        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{}, }));
                        ({}.QTooltip);
                        const __VLS_44 = __VLS_43({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                        ({}({ ...{}, }));
                        (__VLS_45.slots).default;
                        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
                    }
                    {
                        const __VLS_47 = {}.QMenu;
                        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{}, }));
                        ({}.QMenu);
                        const __VLS_49 = __VLS_48({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
                        ({}({ ...{}, }));
                        {
                            const __VLS_52 = {}.QList;
                            const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, }));
                            ({}.QList);
                            const __VLS_54 = __VLS_53({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                            ({}({ ...{}, }));
                            {
                                const __VLS_57 = {}.QItem;
                                const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                ({}.QItem);
                                const __VLS_59 = __VLS_58({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                                ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                let __VLS_62 = { 'click': __VLS_pickEvent(__VLS_61['click'], {}.onClick) };
                                __VLS_62 = { click: (__VLS_ctx.del) };
                                {
                                    const __VLS_63 = {}.QItemSection;
                                    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{}, }));
                                    ({}.QItemSection);
                                    const __VLS_65 = __VLS_64({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_64));
                                    ({}({ ...{}, }));
                                    (__VLS_66.slots).default;
                                    const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65);
                                }
                                (__VLS_60.slots).default;
                                const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
                                let __VLS_61;
                            }
                            (__VLS_55.slots).default;
                            const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
                        }
                        (__VLS_50.slots).default;
                        const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
                    }
                    (__VLS_40.slots).default;
                    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_68 = __VLS_intrinsicElements["div"];
                const __VLS_69 = __VLS_elementAsFunctionalComponent(__VLS_68);
                const __VLS_70 = __VLS_69({ ...{}, class: (" current"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
                ({}({ ...{}, class: (" current"), }));
                (__VLS_ctx.name);
                (__VLS_71.slots).default;
                const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
            }
            {
                const __VLS_73 = __VLS_intrinsicElements["br"];
                const __VLS_74 = __VLS_elementAsFunctionalComponent(__VLS_73);
                const __VLS_75 = __VLS_74({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_74));
                ({}({ ...{}, }));
                const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
            }
            {
                const __VLS_78 = __VLS_intrinsicElements["div"];
                const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
                const __VLS_80 = __VLS_79({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
                ({}({ ...{}, class: (" form"), }));
                {
                    const __VLS_83 = __VLS_intrinsicElements["div"];
                    const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83);
                    const __VLS_85 = __VLS_84({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_86.slots).default;
                    const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85);
                }
                {
                    const __VLS_88 = {}.QInput;
                    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                    ({}.QInput);
                    const __VLS_90 = __VLS_89({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), }));
                    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
                }
                (__VLS_81.slots).default;
                const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
            }
            {
                const __VLS_93 = __VLS_intrinsicElements["br"];
                const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
                const __VLS_95 = __VLS_94({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_94));
                ({}({ ...{}, }));
                const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
            }
            {
                const __VLS_98 = {}.QMarkupTable;
                const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{}, class: (" table"), flat: (true), dense: (true), key: ((__VLS_ctx.compKey)), }));
                ({}.QMarkupTable);
                const __VLS_100 = __VLS_99({ ...{}, class: (" table"), flat: (true), dense: (true), key: ((__VLS_ctx.compKey)), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
                ({}({ ...{}, class: (" table"), flat: (true), dense: (true), key: ((__VLS_ctx.compKey)), }));
                {
                    const __VLS_103 = __VLS_intrinsicElements["thead"];
                    const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
                    const __VLS_105 = __VLS_104({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                    ({}({ ...{}, }));
                    {
                        const __VLS_108 = __VLS_intrinsicElements["tr"];
                        const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
                        const __VLS_110 = __VLS_109({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
                        ({}({ ...{}, }));
                        {
                            const __VLS_113 = __VLS_intrinsicElements["th"];
                            const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
                            const __VLS_115 = __VLS_114({ ...{}, class: (" xsm"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                            ({}({ ...{}, class: (" xsm"), }));
                            const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                        }
                        {
                            const __VLS_118 = __VLS_intrinsicElements["th"];
                            const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                            const __VLS_120 = __VLS_119({ ...{}, class: (" bor"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                            ({}({ ...{}, class: (" bor"), }));
                            (__VLS_121.slots).default;
                            const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                        }
                        {
                            const __VLS_123 = __VLS_intrinsicElements["th"];
                            const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
                            const __VLS_125 = __VLS_124({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                            ({}({ ...{}, }));
                            (__VLS_126.slots).default;
                            const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                        }
                        if (__VLS_ctx.editMode) {
                            {
                                const __VLS_128 = __VLS_intrinsicElements["th"];
                                const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                                const __VLS_130 = __VLS_129({ ...{}, class: (" small bor1"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                ({}({ ...{}, class: (" small bor1"), }));
                                (__VLS_131.slots).default;
                                const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                            }
                            // @ts-ignore
                            [editMode, editMode, setEditMode, duble, del, name, form, form, form, compKey, compKey, compKey, editMode,];
                        }
                        (__VLS_111.slots).default;
                        const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
                    }
                    (__VLS_106.slots).default;
                    const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
                }
                {
                    const __VLS_133 = __VLS_intrinsicElements["tbody"];
                    const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
                    const __VLS_135 = __VLS_134({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                    ({}({ ...{}, }));
                    for (const [par, index] of __VLS_getVForSourceType((__VLS_ctx.params))) {
                        {
                            const __VLS_138 = __VLS_intrinsicElements["tr"];
                            const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
                            const __VLS_140 = __VLS_139({ ...{ 'onDblclick': {}, }, key: ((par.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
                            ({}({ ...{ 'onDblclick': {}, }, key: ((par.id)), }));
                            let __VLS_143 = { 'dblclick': __VLS_pickEvent(__VLS_142['dblclick'], {}.onDblclick) };
                            __VLS_143 = { dblclick: (__VLS_ctx.setEditMode) };
                            {
                                const __VLS_144 = __VLS_intrinsicElements["td"];
                                const __VLS_145 = __VLS_elementAsFunctionalComponent(__VLS_144);
                                const __VLS_146 = __VLS_145({ ...{}, class: (" xsm"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
                                ({}({ ...{}, class: (" xsm"), }));
                                (index + 1);
                                (__VLS_147.slots).default;
                                const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
                            }
                            {
                                const __VLS_149 = __VLS_intrinsicElements["td"];
                                const __VLS_150 = __VLS_elementAsFunctionalComponent(__VLS_149);
                                const __VLS_151 = __VLS_150({ ...{}, class: (" bor"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
                                ({}({ ...{}, class: (" bor"), }));
                                {
                                    const __VLS_154 = __VLS_intrinsicElements["div"];
                                    const __VLS_155 = __VLS_elementAsFunctionalComponent(__VLS_154);
                                    const __VLS_156 = __VLS_155({ ...{}, class: (" edit1"), contenteditable: ((__VLS_ctx.con)), id: ((par.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
                                    ({}({ ...{}, class: (" edit1"), contenteditable: ((__VLS_ctx.con)), id: ((par.id)), }));
                                    (par.key);
                                    (__VLS_157.slots).default;
                                    const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
                                }
                                (__VLS_152.slots).default;
                                const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151);
                            }
                            {
                                const __VLS_159 = __VLS_intrinsicElements["td"];
                                const __VLS_160 = __VLS_elementAsFunctionalComponent(__VLS_159);
                                const __VLS_161 = __VLS_160({ ...{}, class: (" fix"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
                                ({}({ ...{}, class: (" fix"), }));
                                {
                                    const __VLS_164 = __VLS_intrinsicElements["div"];
                                    const __VLS_165 = __VLS_elementAsFunctionalComponent(__VLS_164);
                                    const __VLS_166 = __VLS_165({ ...{}, class: (" edit2"), contenteditable: ((__VLS_ctx.con)), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
                                    ({}({ ...{}, class: (" edit2"), contenteditable: ((__VLS_ctx.con)), }));
                                    (par.value);
                                    (__VLS_167.slots).default;
                                    const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166);
                                }
                                (__VLS_162.slots).default;
                                const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
                            }
                            if (__VLS_ctx.editMode) {
                                {
                                    const __VLS_169 = __VLS_intrinsicElements["td"];
                                    const __VLS_170 = __VLS_elementAsFunctionalComponent(__VLS_169);
                                    const __VLS_171 = __VLS_170({ ...{}, class: (" small bor1"), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
                                    ({}({ ...{}, class: (" small bor1"), }));
                                    {
                                        const __VLS_174 = __VLS_intrinsicElements["div"];
                                        const __VLS_175 = __VLS_elementAsFunctionalComponent(__VLS_174);
                                        const __VLS_176 = __VLS_175({ ...{}, class: (" hov"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
                                        ({}({ ...{}, class: (" hov"), }));
                                        {
                                            const __VLS_179 = {}.QBtn;
                                            const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-plus"), size: ("10px"), }));
                                            ({}.QBtn);
                                            const __VLS_181 = __VLS_180({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-plus"), size: ("10px"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
                                            ({}({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-plus"), size: ("10px"), }));
                                            let __VLS_184 = { 'click': __VLS_pickEvent(__VLS_183['click'], {}.onClick) };
                                            __VLS_184 = { click: $event => {
                                                    if (!((__VLS_ctx.editMode)))
                                                        return;
                                                    __VLS_ctx.add(index);
                                                    // @ts-ignore
                                                    [params, setEditMode, con, con, con, con, editMode, add,];
                                                }
                                            };
                                            const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181);
                                            let __VLS_183;
                                        }
                                        {
                                            const __VLS_185 = {}.QBtn;
                                            const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-content-duplicate"), size: ("10px"), }));
                                            ({}.QBtn);
                                            const __VLS_187 = __VLS_186({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-content-duplicate"), size: ("10px"), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                                            ({}({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-content-duplicate"), size: ("10px"), }));
                                            let __VLS_190 = { 'click': __VLS_pickEvent(__VLS_189['click'], {}.onClick) };
                                            __VLS_190 = { click: $event => {
                                                    if (!((__VLS_ctx.editMode)))
                                                        return;
                                                    __VLS_ctx.duplicate(par, index);
                                                    // @ts-ignore
                                                    [duplicate,];
                                                }
                                            };
                                            const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                                            let __VLS_189;
                                        }
                                        {
                                            const __VLS_191 = {}.QBtn;
                                            const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-trash-can-outline"), size: ("10px"), }));
                                            ({}.QBtn);
                                            const __VLS_193 = __VLS_192({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-trash-can-outline"), size: ("10px"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
                                            ({}({ ...{ 'onClick': {}, }, unelevated: (true), round: (true), dense: (true), color: ("secondary"), icon: ("mdi-trash-can-outline"), size: ("10px"), }));
                                            let __VLS_196 = { 'click': __VLS_pickEvent(__VLS_195['click'], {}.onClick) };
                                            __VLS_196 = { click: $event => {
                                                    if (!((__VLS_ctx.editMode)))
                                                        return;
                                                    __VLS_ctx.remove(index);
                                                    // @ts-ignore
                                                    [remove,];
                                                }
                                            };
                                            const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
                                            let __VLS_195;
                                        }
                                        (__VLS_177.slots).default;
                                        const __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176);
                                    }
                                    (__VLS_172.slots).default;
                                    const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171);
                                }
                            }
                            (__VLS_141.slots).default;
                            const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                            let __VLS_142;
                        }
                    }
                    (__VLS_136.slots).default;
                    const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                }
                (__VLS_101.slots).default;
                const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
            }
            {
                const __VLS_197 = __VLS_intrinsicElements["div"];
                const __VLS_198 = __VLS_elementAsFunctionalComponent(__VLS_197);
                const __VLS_199 = __VLS_198({ ...{}, class: (" q-mt-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_198));
                ({}({ ...{}, class: (" q-mt-lg"), }));
                {
                    const __VLS_202 = {}.QCheckbox;
                    const __VLS_203 = __VLS_asFunctionalComponent(__VLS_202, new __VLS_202({ ...{}, modelValue: ((__VLS_ctx.form.def)), dense: (true), label: ("Использовать по умолчанию"), }));
                    ({}.QCheckbox);
                    const __VLS_204 = __VLS_203({ ...{}, modelValue: ((__VLS_ctx.form.def)), dense: (true), label: ("Использовать по умолчанию"), }, ...__VLS_functionalComponentArgsRest(__VLS_203));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.form.def)), dense: (true), label: ("Использовать по умолчанию"), }));
                    const __VLS_205 = __VLS_pickFunctionalComponentCtx(__VLS_202, __VLS_204);
                }
                (__VLS_200.slots).default;
                const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199);
            }
            if (__VLS_ctx.editMode) {
                {
                    const __VLS_207 = {}.QCardActions;
                    const __VLS_208 = __VLS_asFunctionalComponent(__VLS_207, new __VLS_207({ ...{}, align: ("right"), }));
                    ({}.QCardActions);
                    const __VLS_209 = __VLS_208({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_208));
                    ({}({ ...{}, align: ("right"), }));
                    {
                        const __VLS_212 = {}.QBtn;
                        const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                        ({}.QBtn);
                        const __VLS_214 = __VLS_213({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
                        ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                        let __VLS_217 = { 'click': __VLS_pickEvent(__VLS_216['click'], {}.onClick) };
                        __VLS_217 = { click: (__VLS_ctx.otmena) };
                        const __VLS_215 = __VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214);
                        let __VLS_216;
                    }
                    {
                        const __VLS_218 = {}.QBtn;
                        const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить"), }));
                        ({}.QBtn);
                        const __VLS_220 = __VLS_219({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить"), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
                        ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить"), }));
                        let __VLS_223 = { 'click': __VLS_pickEvent(__VLS_222['click'], {}.onClick) };
                        __VLS_223 = { click: (__VLS_ctx.save1) };
                        const __VLS_221 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220);
                        let __VLS_222;
                    }
                    (__VLS_210.slots).default;
                    const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_207, __VLS_209);
                }
                // @ts-ignore
                [form, form, form, editMode, otmena, save1,];
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
        __VLS_styleScopedClasses["table"];
        __VLS_styleScopedClasses["xsm"];
        __VLS_styleScopedClasses["bor"];
        __VLS_styleScopedClasses["small"];
        __VLS_styleScopedClasses["bor1"];
        __VLS_styleScopedClasses["xsm"];
        __VLS_styleScopedClasses["bor"];
        __VLS_styleScopedClasses["edit1"];
        __VLS_styleScopedClasses["fix"];
        __VLS_styleScopedClasses["edit2"];
        __VLS_styleScopedClasses["small"];
        __VLS_styleScopedClasses["bor1"];
        __VLS_styleScopedClasses["hov"];
        __VLS_styleScopedClasses["q-mt-lg"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            editMode: editMode,
            name: name,
            form: form,
            setEditMode: setEditMode,
            save1: save1,
            del: del,
            duble: duble,
            con: con,
            compKey: compKey,
            otmena: otmena,
            params: params,
            add: add,
            duplicate: duplicate,
            remove: remove,
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
//# sourceMappingURL=GreyBlock3.vue.js.map