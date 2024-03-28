import IIntervalPoint from "./IIntervalPoint";

export default interface IHistogramData {
    data: IIntervalPoint[],
    histogramType: string,
}
