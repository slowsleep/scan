import { SearchResultItem } from "@mytypes/SearchResultItem";

export default interface IDocumentsIdsResponse {
    items: SearchResultItem[],
    mappings?: any,
}
