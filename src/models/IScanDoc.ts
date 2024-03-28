import { IAuthor, ISource, ITitle, IContent, IAttributes } from "./Document";

export interface IScanDoc {
    schemaVersion: string,
    id: string,
    version: number,
    issueDate: Date,
    url: string,
    author: IAuthor,
    source: ISource,
    dedupClusterId: string,
    title: ITitle,
    content: IContent,
    attributes: IAttributes,
    language: string,
}

// entities 	В рамках данного проекта не используется.
