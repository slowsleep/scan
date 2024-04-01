import { DateInterval, SearchContext } from '@types/Search';
import { Attributes } from "@types/Filter/Attributes";

// for POST /api/v1/objectsearch/histograms
export default interface IObjectSearchRequest {
    intervalType: string,
    histogramTypes: string|string[],
    issueDateInterval: DateInterval,
    searchContext: SearchContext,
    similarMode: string,
    limit: number,
    sortType: string,
    sortDirectionType: string,
    attributeFilters: Attributes,
}

// searchArea 	В рамках данного проекта не используется.
