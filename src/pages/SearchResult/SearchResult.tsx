import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SearchResult.css";
import womanTarget from "@assets/img/woman-target.png";
import SummaryTable from "./SummaryTable/SummaryTable";
import { Button, DocumentСard, Spinner } from "@components/";
import IObjectSearchResponse from "@models/IObjectSearchResponse";
import IDocumentResponse from "@models/IDocumentResponse";

const SearchResult = () => {
    const [histograms, setHistograms] = useState<IObjectSearchResponse>({
        data: [],
    } as IObjectSearchResponse);
    const [documents, setDocuments] = useState<IDocumentResponse[]>(
        [] as IDocumentResponse[]
    );
    const {
        histograms: companyHistograms,
        documents: companyDocuments,
        loadingHistograms,
        loadingDocumentIds,
        loadingDocuments,
    } = useSelector((state: any) => state.company);
    const [loadedDocumentsCount, setLoadedDocumentsCount] = useState(10);

    useEffect(() => {
        if (companyHistograms) {
            setHistograms(companyHistograms);
        }
    }, [companyHistograms]);

    useEffect(() => {
        if (companyDocuments) {
            setDocuments(companyDocuments);
        }
    }, [companyDocuments]);

    return (
        <div className="search-output">
            {loadingHistograms || loadingDocumentIds || loadingDocuments ? (
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
            ) : null}
            <div className="search-output__summary">
                <h2>Общая сводка</h2>
                {!loadingHistograms && histograms.data.length === 0 ? (
                    <p>Ничего не нашли</p>
                ) : (
                    <>
                        <SummaryTable
                            periodList={histograms}
                            loading={loadingHistograms}
                        />
                    </>
                )}
            </div>
            <div className="search-output__doclist">
                <h2>Список документов</h2>
                <div
                    className={
                        "search-output__doclist__items " +
                        (loadingDocuments
                            ? "search-output__doclist__items--loading"
                            : "")
                    }
                >
                    {!loadingDocuments &&
                    !loadingDocumentIds &&
                    documents.length === 0 ? (
                        <p>Ничего не нашли</p>
                    ) : loadingDocuments || loadingDocumentIds ? (
                        <Spinner size="md" />
                    ) : (
                        documents
                            .slice(0, loadedDocumentsCount)
                            .map((item) => (
                                <DocumentСard
                                    key={item.ok.id}
                                    documentItem={item.ok}
                                />
                            ))
                    )}
                </div>
            </div>
            <Button
                className={
                    "search-output__btn-view-more" +
                    (loadedDocumentsCount >= documents.length ||
                    loadingDocuments
                        ? " search-output__btn-view-more--hidden"
                        : "")
                }
                title="Показать больше"
                color="blue"
                size="large"
                onClick={() =>
                    setLoadedDocumentsCount(loadedDocumentsCount + 10)
                }
            />
        </div>
    );
};

export default SearchResult;
