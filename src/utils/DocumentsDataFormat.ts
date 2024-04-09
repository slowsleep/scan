import IDocumentsIdsResponse from "@models/IDocumentsIdsResponse";

export function docIdsToArrIds(docsIds: IDocumentsIdsResponse) {
    let res: string[] = [];

    if (docsIds.items.length) {
        res = docsIds.items.map((doc) => doc.encodedId);
    }

    return res;
};
