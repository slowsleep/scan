import { Author, Source, Title, Content, Attributes } from "./Document";

export type ScanDoc = {
    schemaVersion: string,
    id: string,
    version: number,
    issueDate: Date,
    url: string,
    author: Author,
    source: Source,
    dedupClusterId: string,
    title: Title,
    content: Content,
    attributes: Attributes,
    language: string,
}

// entities 	В рамках данного проекта не используется.
