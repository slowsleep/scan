import "./SearchOutput.css";
import SummaryTable from "./SummaryTable/SummaryTable";
import womanTarget from "@assets/img/woman-target.png";
import { Button, DocumentСard } from "@components/";
import { mockSummary } from "../../utils/mock/mockSummary";
import { mockDocuments } from "../../utils/mock/mockDocuments";

const SearchOutput = () => {
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
                <p>Найдено 4 221 вариантов</p>
                <SummaryTable periodList={mockSummary} />
            </div>
            <div className="search-output__doclist">
                <h2>Список документов</h2>
                <div className="search-output__doclist__items">
                    {mockDocuments.map((item) => (
                        <DocumentСard key={item.id} document={item} />
                    ))}
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

export default SearchOutput;
