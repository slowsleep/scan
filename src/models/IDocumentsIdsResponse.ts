import { SearchResultItem } from "@mytypes/SearchResultItem";

export interface IDocumentsIdsResponse {
    items: SearchResultItem[],
    mappings?: any,
}
