import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SearchResult.css";
import womanTarget from "@assets/img/woman-target.png";
import SummaryTable from "./SummaryTable/SummaryTable";
import { Button, DocumentСard } from "@components/";
import IObjectSearchResponse from "@models/IObjectSearchResponse";
import IDocumentResponse from "@models/IDocumentResponse";

const SearchResult = () => {
    const [histograms, setHistograms] = useState<IObjectSearchResponse>({data: []} as IObjectSearchResponse);
    const [documents, setDocuments] = useState<IDocumentResponse[]>([] as IDocumentResponse[]);
    const { histograms: companyHistograms, documents: companyDocuments } = useSelector((state: any) => state.company)

    useEffect(() => {
        if (companyHistograms) {
            setHistograms(companyHistograms);
        }
    }, [companyHistograms])

    useEffect(() => {
        if (companyDocuments) {
            setDocuments(companyDocuments);
        }
    }, [companyDocuments])

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
