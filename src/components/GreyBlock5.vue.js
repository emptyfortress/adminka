/* __placeholder__ */
import { ref, reactive, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useStore } from '@/stores/store';
import WebExpand from '@/components/WebExpand.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const props = defineProps({
    name: {
        type: String,
        default: 'name',
    },
});
const editMode = ref(false);
const emit = defineEmits(['delete', 'duble']);
const del = () => {
    emit('delete');
};
const duble = () => {
    emit('duble', props.name);
};
const form = reactive({
    name: props.name,
    def: false,
});
const req = [
    (val) => (val && val.length > 0) || 'Это обязательное поле',
];
watch(form, value => {
    if (value) {
        editMode.value = true;
    }
});
const setEditMode = () => {
    editMode.value = true;
};
const otmena = () => {
    console.log('fuck');
    editMode.value = false;
    store.server.$reset();
};
const $q = useQuasar();
const save = () => {
    if (form.name.length === 0) {
        $q.notify({
            message: 'Заполните обязательные поля',
            color: 'negative',
        });
    }
    // store.server.$reset()
    // store.panels[1].change = false
    editMode.value = false;
    if (form.name.length > 0 && form.name !== props.name) {
        let currentConfigIndex = store.webconfig.findIndex(item => item.name === props.name);
        store.webconfig[currentConfigIndex].name = form.name;
        store.setTabs2(form.name);
    }
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_components.QInput;
    __VLS_components.qInput;
    // @ts-ignore
    [QInput,];
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
    __VLS_components.WebExpand;
    __VLS_components.WebExpand;
    // @ts-ignore
    [WebExpand,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }));
        __VLS_styleScopedClasses = ({ edit: editMode });
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (" current"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (" current"), }));
            (props.name);
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = {}.QForm;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
            ({}.QForm);
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, }));
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: (" form"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: (" form"), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["div"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = {}.QInput;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    ({}.QInput);
                    const __VLS_27 = __VLS_26({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, modelValue: ((__VLS_ctx.form.name)), dense: (true), outlined: (true), bgColor: ("white"), lazyRules: (true), rules: ((__VLS_ctx.req)), }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = __VLS_intrinsicElements["div"];
                    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                    const __VLS_32 = __VLS_31({ ...{}, class: (" def"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, class: (" def"), }));
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_35 = __VLS_intrinsicElements["div"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, class: (" but"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: (" but"), }));
                    {
                        const __VLS_40 = {}.QBtn;
                        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }));
                        ({}.QBtn);
                        const __VLS_42 = __VLS_41({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                        ({}({ ...{ 'onClick': {}, }, round: (true), flat: (true), icon: ("mdi-content-duplicate"), }));
                        let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], {}.onClick) };
                        __VLS_45 = { click: (__VLS_ctx.duble) };
                        {
                            const __VLS_46 = {}.QTooltip;
                            const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, }));
                            ({}.QTooltip);
                            const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                            ({}({ ...{}, }));
                            (__VLS_49.slots).default;
                            const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                        }
                        (__VLS_43.slots).default;
                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                        let __VLS_44;
                    }
                    {
                        const __VLS_51 = {}.QBtn;
                        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                        ({}.QBtn);
                        const __VLS_53 = __VLS_52({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                        ({}({ ...{}, round: (true), flat: (true), icon: ("mdi-trash-can-outline"), }));
                        {
                            const __VLS_56 = {}.QTooltip;
                            const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, }));
                            ({}.QTooltip);
                            const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                            ({}({ ...{}, }));
                            (__VLS_59.slots).default;
                            const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                        }
                        {
                            const __VLS_61 = {}.QMenu;
                            const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, }));
                            ({}.QMenu);
                            const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                            ({}({ ...{}, }));
                            {
                                const __VLS_66 = {}.QList;
                                const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, }));
                                ({}.QList);
                                const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                                ({}({ ...{}, }));
                                {
                                    const __VLS_71 = {}.QItem;
                                    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                    ({}.QItem);
                                    const __VLS_73 = __VLS_72({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                                    ({}({ ...{ 'onClick': {}, }, class: (" pink"), clickable: (true), }));
                                    __VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
                                    let __VLS_76 = { 'click': __VLS_pickEvent(__VLS_75['click'], {}.onClick) };
                                    __VLS_76 = { click: (__VLS_ctx.del) };
                                    {
                                        const __VLS_77 = {}.QItemSection;
                                        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, }));
                                        ({}.QItemSection);
                                        const __VLS_79 = __VLS_78({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
                                        ({}({ ...{}, }));
                                        (__VLS_80.slots).default;
                                        const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79);
                                    }
                                    (__VLS_74.slots).default;
                                    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
                                    let __VLS_75;
                                }
                                (__VLS_69.slots).default;
                                const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                            }
                            (__VLS_64.slots).default;
                            const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                        }
                        (__VLS_54.slots).default;
                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                    }
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_82 = {}.WebExpand;
                const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{ 'onChange': {}, }, }));
                ({}.WebExpand);
                const __VLS_84 = __VLS_83({ ...{ 'onChange': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_83));
                ({}({ ...{ 'onChange': {}, }, }));
                let __VLS_87 = { 'change': __VLS_pickEvent(__VLS_86['change'], {}.onChange) };
                __VLS_87 = { change: (__VLS_ctx.setEditMode) };
                const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
                let __VLS_86;
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        if (__VLS_ctx.editMode) {
            {
                const __VLS_88 = {}.QCardActions;
                const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{}, align: ("right"), }));
                ({}.QCardActions);
                const __VLS_90 = __VLS_89({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
                ({}({ ...{}, align: ("right"), }));
                {
                    const __VLS_93 = {}.QBtn;
                    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                    ({}.QBtn);
                    const __VLS_95 = __VLS_94({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
                    ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                    let __VLS_98 = { 'click': __VLS_pickEvent(__VLS_97['click'], {}.onClick) };
                    __VLS_98 = { click: (__VLS_ctx.otmena) };
                    const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
                    let __VLS_97;
                }
                {
                    const __VLS_99 = {}.QBtn;
                    const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }));
                    ({}.QBtn);
                    const __VLS_101 = __VLS_100({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
                    ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }));
                    let __VLS_104 = { 'click': __VLS_pickEvent(__VLS_103['click'], {}.onClick) };
                    __VLS_104 = { click: (__VLS_ctx.save) };
                    const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
                    let __VLS_103;
                }
                (__VLS_91.slots).default;
                const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
            }
            // @ts-ignore
            [editMode, editMode, form, req, form, req, form, req, duble, del, setEditMode, editMode, otmena, save,];
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["current"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["def"];
        __VLS_styleScopedClasses["but"];
        __VLS_styleScopedClasses["pink"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            WebExpand: WebExpand,
            editMode: editMode,
            del: del,
            duble: duble,
            form: form,
            req: req,
            setEditMode: setEditMode,
            otmena: otmena,
            save: save,
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
//# sourceMappingURL=GreyBlock5.vue.js.map