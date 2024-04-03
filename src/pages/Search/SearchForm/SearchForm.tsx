import { useEffect, useState } from "react";
import "./SearchForm.css";
import CheckboxList from "./CheckboxList";
import {
    Button,
    Form,
    InputDate,
    Label,
    LabelInput,
    Select,
} from "@components/";
import api from "@api/";
import IObjectSearchRequest from "../../../models/IObjectSearchRequest";
import { getFullFormatDate } from "../../../utils/DateFormat";
import { useNavigate } from "react-router-dom";
import IObjectSearchResponse from "models/IObjectSearchResponse";
import IDocumentsIdsResponse from "models/IDocumentsIdsResponse";

const SearchForm = () => {
    const navigate = useNavigate();

    const [inn, setInn] = useState<string>("");
    const [tonality, setTonality] = useState<string>("any");
    const [docCount, setDocCount] = useState<number>(0);
    const [dateTo, setDateTo] = useState<Date|null>(null);
    const [dateFrom, setDateFrom] = useState<Date|null>(null);
    const [isActiveForm, setIsActiveForm] = useState<boolean>(false);

    const [innError, setInnError] = useState<boolean | string>(false);
    const [docCountError, setDocCountError] = useState<boolean | string>(false);
    const [dateFromError, setDateFromError] = useState<boolean | String>(false);
    const [dateToError, setDateToError] = useState<boolean | string>(false);
    const [datesError, setDatesError] = useState<boolean | string>(false);

    const [checkboxes, setCheckboxes] = useState({
        fullness: false,
        businessNews: false,
        mainRole: false,
        riskFactors: false,
        techNews: false,
        announcements: false,
        digests: false,
    });

    const innHandle = (e) => {
        setInn(e.target.value);
    };

    const blurInn = (e) => {
        let val = e.target.value;
        const regex = /^[0-9]{10}$/gm;
        let regular = regex.test(val);
        if (regular) {
            if (checkInn(val)) {
                setInnError(false);
            }
        } else {
            setInnError("Введите корректные данные");
        }
    };

    function checkInn(inn) {
        if (typeof inn === "number") {
            inn = inn.toString();
        } else if (typeof inn !== "string") {
            inn = "";
        }

        if (!inn.length) {
            return false;
        } else {
            let coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8];
            let res = 0;
            for (let i in coefficients) {
                res += coefficients[i] * inn[i];
            }
            let ost = (res % 11) % 10;
            if (ost === parseInt(inn[inn.length - 1])) {
                setInnError(false);
                return true;
            }
        }

        return false;
    }

    const tonalityHandle = (e) => {
        setTonality(e.target.value);
    };
    const docCountHandle = (e) => {
        setDocCount(parseInt(e.target.value));
    };

    const blurDocCount = (e) => {
        let val = e.target.value;
        if (!val) {
            setDocCountError("Обязательное поле");
        } else if (!/^[+-]{0,1}[0-9]+$/.test(val)) {
            setDocCountError("Только цифры");
        } else {
            let numVal = parseInt(val);
            setDocCountError(false);
            if (numVal < 1 || numVal > 1000) {
                setDocCountError("От 1 до 1000");
            } else {
                setDocCountError(false);
                setDocCount(numVal);
            }
        }
    };

    const dateFromHandle = (e) => {
        setDateFrom(e);
    };

    const blurDateFrom = (e) => {
        if (!e) {
            setDateFromError(true);
            setDatesError("Обязательные поля");
        } else if (dateTo && dateFrom !== null) {
            if (dateFrom.getTime() > dateTo.getTime()) {
                setDateFromError(true);
                setDatesError("Введите корректные данные");
            } else {
                setDateFromError(false);
                setDateToError(false);
            }
        } else {
            setDateFromError(false);
        }
    };

    const dateToHandle = (e) => {
        setDateTo(e);
    };

    const blurDateTo = (e) => {
        if (!e) {
            setDateToError(true);
            setDatesError("Обязательные поля");
        } else if (dateFrom && dateTo !== null) {
            if (dateTo.getTime() < dateFrom.getTime()) {
                setDateToError(true);
                setDatesError("Введите корректные данные");
            } else {
                setDateFromError(false);
                setDateToError(false);
            }
        } else {
            setDateToError(false);
        }
    };

    useEffect(() => {
        if (
            inn && tonality && docCount && dateFrom && dateTo &&
            !innError && !docCountError && !dateFromError && !dateToError
        ) {
            setIsActiveForm(true);
        } else {
            setIsActiveForm(false);
        }
    }, [
        inn,
        tonality,
        docCount,
        dateFrom,
        dateTo,
        innError,
        docCountError,
        dateFromError,
        dateToError,
    ]);

    const checkboxesHandle = (e) => {
        setCheckboxes({
            ...checkboxes,
            [e.target.name]: e.target.checked,
        });
    };

    useEffect(() => {
        if (!dateFromError && !dateToError) {
            setDatesError(false);
        }
    }, [dateFromError, dateToError]);

    const submitHandle = (e) => {
        e.preventDefault();

        let requestData: IObjectSearchRequest = {
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
            issueDateInterval: {
                startDate: getFullFormatDate(dateFrom as Date),
                endDate: getFullFormatDate(dateTo as Date),
            },
            searchContext: {
                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: "company",
                            inBusinessNews: checkboxes.businessNews
                                ? true
                                : false,
                            sparkId: null,
                            entityId: null,
                            inn: inn,
                            maxFullness: checkboxes.fullness ? true : false,
                        },
                    ],
                    onlyMainRole: checkboxes.mainRole ? true : false,
                    onlyWithRiskFactors: checkboxes.riskFactors ? true : false,
                    tonality: tonality,
                },
            },
            // none — без фильтрации, в выдачу включаются все публикации;
            // duplicates — фильтр по дубликатам, в выдачу включается по одной публикации из каждого кластера дублей.
            similarMode: "none",
            limit: docCount,
            // issueDate — дата публикации;
            // sourceInfluence — вес источника.
            sortType: "issueDate",
            // desc – по убыванию;
            // asc – по возрастанию.
            sortDirectionType: "desc",
            attributeFilters: {
                excludeTechNews: checkboxes.techNews ? true : false,
                excludeAnnouncements: checkboxes.announcements ? true : false,
                excludeDigests: checkboxes.digests ? true : false,
            },
        };

        let dataHistograms: IObjectSearchResponse;
        let dataDocumentsIds: IDocumentsIdsResponse;

        let getHistograms = api.post("/objectsearch/histograms", requestData);
        getHistograms.then(function (response) {
            dataHistograms = response.data;
            let resDocsIDs = api.post("/objectsearch", requestData);

            resDocsIDs.then(function (response) {
                console.log("resDocsIDs", response.data);
                dataDocumentsIds = response.data;
                navigate("/search/result", {state: {histograms: dataHistograms, documentsIds: dataDocumentsIds}});
            });
        });

    };

    return (
        <Form className="search-form">
            <div className="search-form__left">
                <div>
                    <LabelInput
                        className="search-form__left__label-input"
                        classLabel="search-form__left__label"
                        classInput="search__input--border search-form__left__input"
                        classError="search-form__left__error"
                        label="ИНН компании"
                        placeholder="10 цифр"
                        required={true}
                        labelRequired={true}
                        onChange={innHandle}
                        onBlur={blurInn}
                        error={innError}
                    />
                    <Label
                        className={"search-form__left__label"}
                        title="Тональность"
                    >
                        <Select
                            className="search__input--border search-form__left__select"
                            options={[
                                { title: "Любая", name: "any" },
                                { title: "Позитивная", name: "positive" },
                                { title: "Негативная", name: "negative" },
                            ]}
                            onChange={tonalityHandle}
                        />
                    </Label>
                </div>
                <LabelInput
                    className="search-form__left__label-input search-form__left__label-input-count"
                    classLabel="search-form__left__label search-form__left__label-count"
                    classInput="search__input--border search-form__left__input search-form__left__input-count"
                    classError="search-form__left__error"
                    label="Количество документов в выдаче"
                    placeholder="от 1 до 1000"
                    required={true}
                    labelRequired={true}
                    onChange={docCountHandle}
                    onBlur={blurDocCount}
                    error={docCountError}
                />
                <div className="search-form__left__dates">
                    <Label
                        className="search-form__left__label search-form__left__label-dates"
                        title="Диапазон поиска"
                        required={true}
                    />
                    <div>
                        <div className="search-form__left__inputrow">
                            <InputDate
                                classInput=" search__input--border"
                                placeholder="Дата начала"
                                onChange={dateFromHandle}
                                onBlur={blurDateFrom}
                                error={datesError}
                            />
                            <InputDate
                                classInput="search__input--border"
                                placeholder="Дата конца"
                                onChange={dateToHandle}
                                onBlur={blurDateTo}
                                error={datesError}
                            />
                        </div>
                        {datesError ? (
                            <p className="error">{datesError}</p>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="search-form__right">
                <CheckboxList onChange={checkboxesHandle} />
                <div className="search-form__right__footer">
                    <Button
                        className="search-form__right__footer__button"
                        title="Поиск"
                        color="blue"
                        size="large"
                        disabled={!isActiveForm}
                        onClick={submitHandle}
                    />
                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </Form>
    );
};

export default SearchForm;
