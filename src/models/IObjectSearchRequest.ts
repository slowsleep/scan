import { DateInterval, SearchContext } from '@mytypes/Search';
import { Attributes } from "@mytypes/Filter/Attributes";

// for POST /api/v1/objectsearch/histograms
export interface IObjectSearchRequest {
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
