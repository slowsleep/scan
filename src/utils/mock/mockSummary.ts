import { IObjectSearchResponse } from "../../models/IObjectSearchResponse";

export const mockSummary: IObjectSearchResponse = {
    data: [
    {
        data: [
            {
                date: new Date("2020-11-01T03:00:00+03:00"),
                value: 1,
            },
            {
                date: new Date("2020-11-02T03:00:00+03:00"),
                value: 2,
            },
            {
                date: new Date("2020-11-03T03:00:00+03:00"),
                value: 3,
            },
            {
                date: new Date("2020-11-04T03:00:00+03:00"),
                value: 4,
            },
            {
                date: new Date("2020-11-05T03:00:00+03:00"),
                value: 5,
            },
            {
                date: new Date("2020-11-06T03:00:00+03:00"),
                value: 6,
            },
            {
                date: new Date("2020-11-07T03:00:00+03:00"),
                value: 7,
            },
            {
                date: new Date("2020-11-08T03:00:00+03:00"),
                value: 8,
            },
            {
                date: new Date("2020-11-09T03:00:00+03:00"),
                value: 9,
            },
            {
                date: new Date("2020-11-10T03:00:00+03:00"),
                value: 10,
            },
        ],
        histogramType: "totalDocuments",
    },
    {
        data: [
            {
                date: new Date("2020-11-01T03:00:00+03:00"),
                value: 10,
            },
            {
                date: new Date("2020-11-02T03:00:00+03:00"),
                value: 9,
            },
            {
                date: new Date("2020-11-03T03:00:00+03:00"),
                value: 8,
            },
            {
                date: new Date("2020-11-04T03:00:00+03:00"),
                value: 7,
            },
            {
                date: new Date("2020-11-05T03:00:00+03:00"),
                value: 6,
            },
            {
                date: new Date("2020-11-06T03:00:00+03:00"),
                value: 5,
            },
            {
                date: new Date("2020-11-07T03:00:00+03:00"),
                value: 4,
            },
            {
                date: new Date("2020-11-08T03:00:00+03:00"),
                value: 3,
            },
            {
                date: new Date("2020-11-09T03:00:00+03:00"),
                value: 2,
            },
            {
                date: new Date("2020-11-10T03:00:00+03:00"),
                value: 1,
            },
        ],
        histogramType: "riskFactors",
    }
]
}
