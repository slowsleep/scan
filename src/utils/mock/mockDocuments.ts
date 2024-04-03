import { ScanDoc } from "@mytypes/ScanDoc";

export const mockDocuments: ScanDoc[] = [
    {
        schemaVersion: "string",
        id: "2",
        version: 0,
        issueDate: "2024-04-01T12:12:13.362Z",
        url: "https://www.vesti.ru",
        author: {
            name: "Вести",
        },
        source: {
            id: 0,
            groupId: 0,
            name: "Вести.Ru (vesti.ru)",
            categoryId: 0,
            levelId: 0,
        },
        dedupClusterId: "string",
        title: {
            text: "Медведь напал на охотника в Приморье",
            markup: '<?xml version="1.0" encoding="utf-8"?><scandoc><sentence>Медведь напал на охотника в <entity type="location" local-id="6">Приморье</entity>\r\n<data>\r\n<div>    <div><p></sentence></scandoc>',
        },
        content: {
            markup: '<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence><entity type=\"theme\" local-id=\"1\"><entity type=\"theme\" local-id=\"5\">Медведь напал на жителя <entity type=\"location\" local-id=\"6\">Приморья</entity>, пострадавший госпитализирован, - сообщает \"Вести: Приморье\" со ссылкой на <entity type=\"company\" local-id=\"0\">\"Интерфакс-Дальний Восток\"</entity>. </entity></entity></sentence><sentence>Сотрудники полиции проводят проверку по факту инцидента, связанного с нападением медведя на жителя <entity type=\"location\" local-id=\"7\">Уссурийска </entity>в лесу, в окрестностях <entity type=\"location\" local-id=\"8\">села Яконовка</entity>. </sentence><sentence><entity type=\"theme\" local-id=\"2\">Пострадавшего госпитализировали в реанимационное отделение городской больницы.</p>\r\n\r\n<p></entity></sentence><sentence>По данным медиков, он прооперирован, сейчас его жизни ничто не угрожает. </sentence><sentence><entity type=\"theme\" local-id=\"4\">Полицейские установили, что у мужчины есть разрешение на охоту, оружие должным образом зарегистрировано. </entity></sentence><sentence>Обстоятельства случившегося выясняются.</p>\r\n\r\n<p></sentence><sentence><entity type=\"theme\" local-id=\"3\">Напомним, ранее сообщалось, что в минувшие выходные в окрестностях <entity type=\"location\" local-id=\"7\">Уссурийска</entity>, в районе <entity type=\"location\" local-id=\"9\">села Кроуновка </entity>на охотника напал тигр, пострадавший госпитализирован.</p>\r\n</div>\r\n                                                    <div></entity></sentence><sentence>Текст:\r\n                                            ГТРК \"Владивосток\"\r\n                                        </div>\r\n                \r\n                \r\n                <div>\r\n\r\n                    \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</data>\r\n\r\n</sentence><br><img src=\"https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D\"></scandoc>',
        },
        entities: {
            companies: [
                {
                    suggestedCompanies: [
                        {
                            sparkId: 0,
                            inn: "string",
                            ogrn: "string",
                            searchPrecision: "maxPrecision",
                        },
                    ],
                    resolveInfo: {
                        resolveApproaches: ["activeVerified"],
                    },
                    tags: ["inCitation"],
                    isSpeechAuthor: true,
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    isMainRole: true,
                },
            ],
            people: [
                {
                    rotatedName: "string",
                    tags: ["individualEntrepreneur"],
                    isSpeechAuthor: true,
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    isMainRole: true,
                },
            ],
            themes: [
                {
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    tonality: "neutral",
                    participant: {
                        localId: 0,
                        type: "company",
                    },
                },
            ],
            locations: [
                {
                    code: {
                        countryCode: "string",
                        regionCode: "string",
                    },
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    isMainRole: true,
                },
            ],
        },
        attributes: {
            isTechNews: true,
            isAnnouncement: true,
            isDigest: true,
            influence: 0,
            wordCount: 0,
            coverage: {
                value: 0,
                state: "hasData",
            },
        },
        language: "russian",
    },
    {
        schemaVersion: "string",
        id: "1",
        version: 0,
        issueDate: "2024-03-10T12:12:13.362Z",
        url: "string",
        author: {
            name: "НТВ",
        },
        source: {
            id: 0,
            groupId: 0,
            name: "https://www.ntv.ru/",
            categoryId: 0,
            levelId: 0,
        },
        dedupClusterId: "string",
        title: {
            text: "Нереальная новость",
            markup: "<b>Нереальная новость</b>",
        },
        content: {
            markup: "Кошка окотилась и принесла 6 котят!",
        },
        entities: {
            companies: [
                {
                    suggestedCompanies: [
                        {
                            sparkId: 0,
                            inn: "string",
                            ogrn: "string",
                            searchPrecision: "maxPrecision",
                        },
                    ],
                    resolveInfo: {
                        resolveApproaches: ["activeVerified"],
                    },
                    tags: ["inCitation"],
                    isSpeechAuthor: true,
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    isMainRole: true,
                },
            ],
            people: [
                {
                    rotatedName: "string",
                    tags: ["individualEntrepreneur"],
                    isSpeechAuthor: true,
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    isMainRole: true,
                },
            ],
            themes: [
                {
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    tonality: "neutral",
                    participant: {
                        localId: 0,
                        type: "company",
                    },
                },
            ],
            locations: [
                {
                    code: {
                        countryCode: "string",
                        regionCode: "string",
                    },
                    localId: 0,
                    name: "string",
                    entityId: 0,
                    isMainRole: true,
                },
            ],
        },
        attributes: {
            isTechNews: true,
            isAnnouncement: true,
            isDigest: true,
            influence: 0,
            wordCount: 0,
            coverage: {
                value: 0,
                state: "hasData",
            },
        },
        language: "russian",
    },
];
