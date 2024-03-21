/* __placeholder__ */
import { ref, reactive, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useStore } from '@/stores/store';
import WebExpand2 from '@/components/WebExpand2.vue';
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
    __VLS_components.QForm;
    __VLS_components.qForm;
    // @ts-ignore
    [QForm,];
    __VLS_components.WebExpand2;
    __VLS_components.WebExpand2;
    // @ts-ignore
    [WebExpand2,];
    __VLS_components.QCardActions;
    __VLS_components.qCardActions;
    // @ts-ignore
    [QCardActions,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn, QBtn,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (({ edit: __VLS_ctx.editMode })), }));
        __VLS_styleScopedClasses = ({ edit: editMode });
        {
            const __VLS_5 = {}.QForm;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
            ({}.QForm);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            {
                const __VLS_10 = {}.WebExpand2;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onChange': {}, }, }));
                ({}.WebExpand2);
                const __VLS_12 = __VLS_11({ ...{ 'onChange': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{ 'onChange': {}, }, }));
                let __VLS_15 = { 'change': __VLS_pickEvent(__VLS_14['change'], {}.onChange) };
                __VLS_15 = { change: (__VLS_ctx.setEditMode) };
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                let __VLS_14;
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        if (__VLS_ctx.editMode) {
            {
                const __VLS_16 = {}.QCardActions;
                const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, align: ("right"), }));
                ({}.QCardActions);
                const __VLS_18 = __VLS_17({ ...{}, align: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
                ({}({ ...{}, align: ("right"), }));
                {
                    const __VLS_21 = {}.QBtn;
                    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                    ({}.QBtn);
                    const __VLS_23 = __VLS_22({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                    ({}({ ...{ 'onClick': {}, }, flat: (true), label: ("Отмена"), }));
                    let __VLS_26 = { 'click': __VLS_pickEvent(__VLS_25['click'], {}.onClick) };
                    __VLS_26 = { click: (__VLS_ctx.otmena) };
                    const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                    let __VLS_25;
                }
                {
                    const __VLS_27 = {}.QBtn;
                    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }));
                    ({}.QBtn);
                    const __VLS_29 = __VLS_28({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                    ({}({ ...{ 'onClick': {}, }, unelevated: (true), color: ("primary"), label: ("Сохранить все"), }));
                    let __VLS_32 = { 'click': __VLS_pickEvent(__VLS_31['click'], {}.onClick) };
                    __VLS_32 = { click: (__VLS_ctx.save) };
                    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                    let __VLS_31;
                }
                (__VLS_19.slots).default;
                const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
            }
            // @ts-ignore
            [editMode, editMode, setEditMode, editMode, otmena, save,];
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            WebExpand2: WebExpand2,
            editMode: editMode,
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
//# sourceMappingURL=GreyBlock7.vue.js.map