const cards = [
    {
        id: 0,
        label: 'Дерево видов',
        children: [
            {
                id: 1,
                label: 'Задание',
                icon: 'mdi-folder-outline',
                par: [0],
                children: [
                    {
                        id: 5,
                        label: 'Задание УД',
                        par: [0, 1],
                        children: [
                            { id: 7, label: 'На исполнение', par: [0, 1, 5] },
                            { id: 8, label: 'На согласование', par: [0, 1, 5] },
                            { id: 9, label: 'На ознакомление', par: [0, 1, 5] },
                            { id: 10, label: 'Сообщение', par: [0, 1, 5] },
                            { id: 11, label: 'Поручение', par: [0, 1, 5] },
                        ]
                    },
                    {
                        id: 6,
                        label: 'Задание КС',
                        par: [0, 1],
                        children: [
                            {
                                id: 12,
                                label: 'На согласование',
                                par: [0, 1, 6],
                                children: [
                                    { id: 13, label: 'На подписание', par: [0, 1, 6, 12] },
                                    { id: 14, label: 'Заявки на договор', par: [0, 1, 6, 12] },
                                    { id: 15, label: 'Согласование КС', par: [0, 1, 6, 12] },
                                    { id: 16, label: 'Задание по отпускам', par: [0, 1, 6, 12] },
                                ]
                            },
                            {
                                id: 17,
                                label: 'На консолидацию',
                                par: [0, 1, 6],
                                children: [
                                    { id: 18, label: 'Согласование с контрагентом', par: [0, 1, 6, 17] },
                                    { id: 19, label: 'Консолидация Договора ДВ', par: [0, 1, 6, 17] },
                                    { id: 20, label: 'Консолидация аттестации ДВ', par: [0, 1, 6, 17] },
                                    { id: 21, label: 'На публикацию НД ДВ', par: [0, 1, 6, 17] },
                                ]
                            },
                            {
                                id: 22,
                                label: 'На подписание',
                                par: [0, 1, 6],
                                children: [
                                    { id: 23, label: 'На подписание ДВ', par: [0, 1, 6, 22] },
                                    { id: 24, label: 'На подписание контрагентом ДВ', par: [0, 1, 6, 22] },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                id: 2,
                label: 'Документ',
                icon: 'mdi-folder-outline',
                par: [0],
                children: [
                    {
                        id: 25, label: 'Входящий',
                        par: [0, 2],
                        children: [
                            { id: 35, label: 'Входящий пакет', par: [0, 2, 25] },
                            { id: 36, label: 'Входящий акт', par: [0, 2, 25] },
                            { id: 37, label: 'Письмо', par: [0, 2, 25] },
                        ]
                    },
                    {
                        id: 26, label: 'Исходящий',
                        par: [0, 2],
                        children: [
                            { id: 38, label: 'Новый', par: [0, 2, 26] },
                            { id: 39, label: 'Коммерческое предложение', par: [0, 2, 26] },
                            { id: 40, label: 'Пакет отгрузки', par: [0, 2, 26] },
                            { id: 41, label: 'Ответ на претензию', par: [0, 2, 26] },
                            { id: 42, label: 'Письмо', par: [0, 2, 26] },
                        ]
                    },
                    { id: 28, label: 'Договор', par: [0, 2] },
                    { id: 29, label: 'Приказ', par: [0, 2] },
                    { id: 30, label: 'Командировка', par: [0, 2] },
                    { id: 31, label: 'Проект', par: [0, 2] },
                    { id: 32, label: 'ОРД', par: [0, 2] },
                    { id: 33, label: 'Служебная записка', par: [0, 2] },
                ]
            },
            {
                id: 3,
                label: 'Группа заданий',
                icon: 'mdi-folder-outline',
                par: [0],
                children: [
                    { id: 43, label: 'Поручение', par: [0, 3] },
                    { id: 44, label: 'Группа заданий УД', par: [0, 3] }
                ]
            },
        ]
    }
];
export { cards };
//# sourceMappingURL=treeCards.js.map