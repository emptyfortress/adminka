/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const lib = ref('Approval Designer');
const ust = ref('Для всех пользователей');
const per = ref('300');
const proiz = ref('Высокая');
const jour = ref('');
const obl = ref('Для текущего пользователя');
const int = ref('По умолчанию');
const pan = ref(false);
const car = ref(true);
const pro = ref('');
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
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
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    __VLS_components.QSelect;
    __VLS_components.qSelect;
    // @ts-ignore
    [QSelect, QSelect, QSelect, QSelect, QSelect, QSelect, QSelect, QSelect, QSelect,];
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
    [QInput, QInput, QInput, QInput, QInput,];
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    __VLS_components.QCheckbox;
    __VLS_components.qCheckbox;
    // @ts-ignore
    [QCheckbox, QCheckbox,];
    __VLS_components.QBtn;
    __VLS_components.qBtn;
    // @ts-ignore
    [QBtn,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: (" client"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: (" client"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["p"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["fieldset"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, }));
            {
                const __VLS_15 = __VLS_intrinsicElements["legend"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_20 = __VLS_intrinsicElements["div"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, class: (" blo"), }));
                {
                    const __VLS_25 = __VLS_intrinsicElements["div"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = {}.QSelect;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_32 = __VLS_31({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_35 = __VLS_intrinsicElements["div"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_40 = {}.QSelect;
                    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_42 = __VLS_41({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                }
                {
                    const __VLS_45 = __VLS_intrinsicElements["div"];
                    const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                    const __VLS_47 = __VLS_46({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_48.slots).default;
                    const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                }
                {
                    const __VLS_50 = {}.QInput;
                    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }));
                    ({}.QInput);
                    const __VLS_52 = __VLS_51({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }));
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                {
                    const __VLS_55 = __VLS_intrinsicElements["div"];
                    const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                    const __VLS_57 = __VLS_56({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_58.slots).default;
                    const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                }
                {
                    const __VLS_60 = {}.QInput;
                    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }));
                    ({}.QInput);
                    const __VLS_62 = __VLS_61({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }));
                    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                }
                {
                    const __VLS_65 = __VLS_intrinsicElements["div"];
                    const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                    const __VLS_67 = __VLS_66({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_68.slots).default;
                    const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                }
                {
                    const __VLS_70 = {}.QInput;
                    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }));
                    ({}.QInput);
                    const __VLS_72 = __VLS_71({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pro)), outlined: (true), bgColor: ("white"), disable: (true), }));
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                {
                    const __VLS_75 = __VLS_intrinsicElements["div"];
                    const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                    const __VLS_77 = __VLS_76({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_78.slots).default;
                    const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                }
                {
                    const __VLS_80 = {}.QSelect;
                    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, dense: (true), modelValue: ((__VLS_ctx.ust)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_82 = __VLS_81({ ...{}, dense: (true), modelValue: ((__VLS_ctx.ust)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.ust)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                }
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_85 = __VLS_intrinsicElements["fieldset"];
            const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
            const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
            ({}({ ...{}, }));
            {
                const __VLS_90 = __VLS_intrinsicElements["legend"];
                const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                ({}({ ...{}, }));
                (__VLS_93.slots).default;
                const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
            }
            {
                const __VLS_95 = __VLS_intrinsicElements["div"];
                const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                const __VLS_97 = __VLS_96({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                ({}({ ...{}, class: (" blo"), }));
                {
                    const __VLS_100 = __VLS_intrinsicElements["div"];
                    const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
                    const __VLS_102 = __VLS_101({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_103.slots).default;
                    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
                }
                {
                    const __VLS_105 = {}.QSelect;
                    const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_107 = __VLS_106({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
                }
                {
                    const __VLS_110 = __VLS_intrinsicElements["div"];
                    const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                    const __VLS_112 = __VLS_111({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_113.slots).default;
                    const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
                }
                {
                    const __VLS_115 = {}.QSelect;
                    const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_117 = __VLS_116({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.lib)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                }
                {
                    const __VLS_120 = __VLS_intrinsicElements["div"];
                    const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                    const __VLS_122 = __VLS_121({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_123.slots).default;
                    const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
                }
                {
                    const __VLS_125 = __VLS_intrinsicElements["div"];
                    const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                    const __VLS_127 = __VLS_126({ ...{}, class: (" row items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                    ({}({ ...{}, class: (" row items-center"), }));
                    {
                        const __VLS_130 = {}.QInput;
                        const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{}, class: (" dig"), dense: (true), type: ("number"), modelValue: ((__VLS_ctx.per)), outlined: (true), bgColor: ("white"), }));
                        ({}.QInput);
                        const __VLS_132 = __VLS_131({ ...{}, class: (" dig"), dense: (true), type: ("number"), modelValue: ((__VLS_ctx.per)), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                        ({}({ ...{}, class: (" dig"), dense: (true), type: ("number"), modelValue: ((__VLS_ctx.per)), outlined: (true), bgColor: ("white"), }));
                        const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                    }
                    {
                        const __VLS_135 = __VLS_intrinsicElements["div"];
                        const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
                        const __VLS_137 = __VLS_136({ ...{}, class: (" q-ml-sm q-mr-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                        ({}({ ...{}, class: (" q-ml-sm q-mr-lg"), }));
                        (__VLS_138.slots).default;
                        const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                    }
                    {
                        const __VLS_140 = __VLS_intrinsicElements["div"];
                        const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
                        const __VLS_142 = __VLS_141({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                        ({}({ ...{}, class: (" label"), }));
                        (__VLS_143.slots).default;
                        const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
                    }
                    {
                        const __VLS_145 = {}.QSelect;
                        const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ ...{}, class: (" q-ml-md"), dense: (true), modelValue: ((__VLS_ctx.proiz)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                        ({}.QSelect);
                        const __VLS_147 = __VLS_146({ ...{}, class: (" q-ml-md"), dense: (true), modelValue: ((__VLS_ctx.proiz)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                        ({}({ ...{}, class: (" q-ml-md"), dense: (true), modelValue: ((__VLS_ctx.proiz)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                        const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
                    }
                    (__VLS_128.slots).default;
                    const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                }
                (__VLS_98.slots).default;
                const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
            }
            {
                const __VLS_150 = __VLS_intrinsicElements["div"];
                const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
                const __VLS_152 = __VLS_151({ ...{}, class: (" row q-gutter-lg q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                ({}({ ...{}, class: (" row q-gutter-lg q-mt-sm"), }));
                {
                    const __VLS_155 = {}.QCheckbox;
                    const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pan)), label: ("Не скрывать панели инструментов IE"), }));
                    ({}.QCheckbox);
                    const __VLS_157 = __VLS_156({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pan)), label: ("Не скрывать панели инструментов IE"), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.pan)), label: ("Не скрывать панели инструментов IE"), }));
                    const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                }
                {
                    const __VLS_160 = {}.QCheckbox;
                    const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{}, dense: (true), modelValue: ((__VLS_ctx.car)), label: ("Не отображать карточки Делопроизводства 4.х"), }));
                    ({}.QCheckbox);
                    const __VLS_162 = __VLS_161({ ...{}, dense: (true), modelValue: ((__VLS_ctx.car)), label: ("Не отображать карточки Делопроизводства 4.х"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.car)), label: ("Не отображать карточки Делопроизводства 4.х"), }));
                    const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
                }
                (__VLS_153.slots).default;
                const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
            }
            (__VLS_88.slots).default;
            const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
        }
        {
            const __VLS_165 = __VLS_intrinsicElements["fieldset"];
            const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
            const __VLS_167 = __VLS_166({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_166));
            ({}({ ...{}, }));
            {
                const __VLS_170 = __VLS_intrinsicElements["legend"];
                const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
                const __VLS_172 = __VLS_171({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
                ({}({ ...{}, }));
                (__VLS_173.slots).default;
                const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
            }
            {
                const __VLS_175 = __VLS_intrinsicElements["div"];
                const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
                const __VLS_177 = __VLS_176({ ...{}, class: (" blo"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
                ({}({ ...{}, class: (" blo"), }));
                {
                    const __VLS_180 = __VLS_intrinsicElements["div"];
                    const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
                    const __VLS_182 = __VLS_181({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_183.slots).default;
                    const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
                }
                {
                    const __VLS_185 = {}.QSelect;
                    const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ ...{}, dense: (true), modelValue: ((__VLS_ctx.int)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_187 = __VLS_186({ ...{}, dense: (true), modelValue: ((__VLS_ctx.int)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.int)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                }
                {
                    const __VLS_190 = __VLS_intrinsicElements["div"];
                    const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
                    const __VLS_192 = __VLS_191({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_193.slots).default;
                    const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192);
                }
                {
                    const __VLS_195 = {}.QSelect;
                    const __VLS_196 = __VLS_asFunctionalComponent(__VLS_195, new __VLS_195({ ...{}, dense: (true), modelValue: ((__VLS_ctx.int)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_197 = __VLS_196({ ...{}, dense: (true), modelValue: ((__VLS_ctx.int)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_196));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.int)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197);
                }
                {
                    const __VLS_200 = __VLS_intrinsicElements["div"];
                    const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
                    const __VLS_202 = __VLS_201({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_203.slots).default;
                    const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202);
                }
                {
                    const __VLS_205 = {}.QInput;
                    const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205({ ...{}, dense: (true), modelValue: ((__VLS_ctx.jour)), outlined: (true), bgColor: ("white"), }));
                    ({}.QInput);
                    const __VLS_207 = __VLS_206({ ...{}, dense: (true), modelValue: ((__VLS_ctx.jour)), outlined: (true), bgColor: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.jour)), outlined: (true), bgColor: ("white"), }));
                    const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207);
                }
                {
                    const __VLS_210 = __VLS_intrinsicElements["div"];
                    const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
                    const __VLS_212 = __VLS_211({ ...{}, class: (" label"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
                    ({}({ ...{}, class: (" label"), }));
                    (__VLS_213.slots).default;
                    const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212);
                }
                {
                    const __VLS_215 = {}.QSelect;
                    const __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ ...{}, dense: (true), modelValue: ((__VLS_ctx.obl)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    ({}.QSelect);
                    const __VLS_217 = __VLS_216({ ...{}, dense: (true), modelValue: ((__VLS_ctx.obl)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                    ({}({ ...{}, dense: (true), modelValue: ((__VLS_ctx.obl)), outlined: (true), bgColor: ("white"), options: ((__VLS_ctx.options)), }));
                    const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                }
                (__VLS_178.slots).default;
                const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177);
            }
            (__VLS_168.slots).default;
            const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
        }
        {
            const __VLS_220 = __VLS_intrinsicElements["div"];
            const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
            const __VLS_222 = __VLS_221({ ...{}, class: (" text-right q-mt-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
            ({}({ ...{}, class: (" text-right q-mt-sm"), }));
            {
                const __VLS_225 = {}.QBtn;
                const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, new __VLS_225({ ...{}, unelevated: (true), color: ("primary"), size: ("sm"), }));
                ({}.QBtn);
                const __VLS_227 = __VLS_226({ ...{}, unelevated: (true), color: ("primary"), size: ("sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                ({}({ ...{}, unelevated: (true), color: ("primary"), size: ("sm"), }));
                (__VLS_228.slots).default;
                const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227);
            }
            (__VLS_223.slots).default;
            const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["client"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["dig"];
        __VLS_styleScopedClasses["q-ml-sm"];
        __VLS_styleScopedClasses["q-mr-lg"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["q-ml-md"];
        __VLS_styleScopedClasses["row"];
        __VLS_styleScopedClasses["q-gutter-lg"];
        __VLS_styleScopedClasses["q-mt-sm"];
        __VLS_styleScopedClasses["blo"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["text-right"];
        __VLS_styleScopedClasses["q-mt-sm"];
    }
    var __VLS_slots;
    // @ts-ignore
    [lib, options, lib, options, lib, options, pro, options, pro, options, pro, options, pro, pro, pro, pro, pro, pro, pro, pro, pro, ust, options, ust, options, ust, options, lib, options, lib, options, lib, options, lib, options, lib, options, lib, options, per, per, per, proiz, options, proiz, options, proiz, options, pan, pan, pan, car, car, car, int, options, int, options, int, options, int, options, int, options, int, options, jour, jour, jour, obl, options, obl, options, obl, options,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            lib: lib,
            ust: ust,
            per: per,
            proiz: proiz,
            jour: jour,
            obl: obl,
            int: int,
            pan: pan,
            car: car,
            pro: pro,
            options: options,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
//# sourceMappingURL=Client.vue.js.map