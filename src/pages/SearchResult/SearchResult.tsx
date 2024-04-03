import "./SearchResult.css";
import SummaryTable from "./SummaryTable/SummaryTable";
import womanTarget from "@assets/img/woman-target.png";
import { Button, DocumentСard } from "@components/";
import IObjectSearchResponse from "models/IObjectSearchResponse";
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";
import api from "@api/";
import IDocumentsIdsResponse from "models/IDocumentsIdsResponse";
import IDocumentsIdsRequest from "models/IDocumentsIdsRequest";
import IDocumentResponse from "models/IDocumentResponse";
import { useState } from "react";

const SearchResult = () => {
    const location = useLocation();
    const {histograms}: {histograms: IObjectSearchResponse} = location.state;
    const {documentsIds}: {documentsIds: IDocumentsIdsResponse} = location.state;
    let documentsData: IDocumentResponse[] = [];
    const [documents, setDocuments] = useState<IDocumentResponse[]>([] as IDocumentResponse[]);

    const docIdstoArrIds = (docsIds: IDocumentsIdsResponse) => {
        let res: string[] = [];

        if (docsIds.items.length) {
            res = docsIds.items.map((doc) => doc.encodedId);
        }

        return res;
    }

    useEffect(() => {
        console.log(docIdstoArrIds(documentsIds));
        let req: IDocumentsIdsRequest = {
            ids: docIdstoArrIds(documentsIds),
        }
        
        let documentsDataRequest = api.post("documents", req);

        documentsDataRequest.then((response) => {
            documentsData = response.data;
            if (documentsData) {
                setDocuments(documentsData);
            }
        });
    }, [])

    return (
        <div className="search-output">
            <div className="search-output__loading">
                <div className="search-output__loading__text">
                    <h1>Ищем. Скоро будут&nbsp;результаты</h1>
                    <p>
                        Поиск может занять некоторое время, просим сохранять
                        терпение.
                    </p>
                </div>
                <img
                    className="search-output__loading__image"
                    src={womanTarget}
                    alt=""
                />
            </div>
            <div className="search-output__summary">
                <h2>Общая сводка</h2>
                {histograms.data.length === 0 ? <p>Ничего не нашли</p> :
                    <>
                        <SummaryTable periodList={histograms} />
                    </>
                }
            </div>
            <div className="search-output__doclist">
                <h2>Список документов</h2>
                <div className="search-output__doclist__items">
                    {documents.length === 0 ? <p>Ничего не нашли</p> :
                        documents.map((item) => (
                            <DocumentСard key={item.ok.id} documentItem={item.ok} />
                        ))
                    }
                </div>
            </div>
            <Button
                className="search-output__btn-view-more"
                title="Показать больше"
                color="blue"
                size="large"
            />
        </div>
    );
};

export default SearchResult;
