import { useEffect, useState } from "react";
import "./SearchForm.css";
import CheckboxList from "./CheckboxList";
import {
    Form,
    LabelInput,
    Label,
    Select,
    InputDate,
    Button,
} from "../../../components/";

const SearchForm = () => {
    const [inn, setInn] = useState("");
    const [tonality, setTonality] = useState("Любая");
    const [docCount, setDocCount] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [isActiveForm, setIsActiveForm] = useState(false);

    const [innError, setInnError] = useState(false);
    const [docCountError, setDocCountError] = useState(false);
    const [dateFromError, setDateFromError] = useState(false);
    const [dateToError, setDateToError] = useState(false);
    const [datesError, setDatesError] = useState(false);

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
        setTonality(e.target.options[e.target.selectedIndex].text);
    };
    const docCountHandle = (e) => {
        setDocCount(e.target.value);
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
        setDateFrom(e.target.value);
    };

    const blurDateFrom = (e) => {
        let val = e.target.value;
        if (!val) {
            setDateFromError(true);
            setDatesError("Обязательные поля");
        } else if (dateFrom > dateTo) {
            setDateFromError(true);
            setDatesError("Введите корректные данные");
        } else {
            setDateFromError(false);
        }
    };

    const dateToHandle = (e) => {
        setDateTo(e.target.value);
    };

    const blurDateTo = (e) => {
        let val = e.target.value;
        if (!val) {
            setDateToError(true);
            setDatesError("Обязательные поля");
        } else if (dateTo < dateFrom) {
            setDateToError(true)
            setDatesError("Введите корректные данные");
        } else {
            setDateToError(false);
        }
    };

    useEffect(() => {
        if (
            inn &&
            tonality &&
            docCount &&
            dateFrom &&
            dateTo &&
            !innError &&
            !docCountError &&
            !dateFromError &&
            !dateToError
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

    useEffect(() => {
        console.log("ding")
        if (!dateFromError && !dateToError) {
            console.log("ok")
            setDatesError(false);
        }
    }, [dateFromError, dateToError]);

    const submitHandle = (e) => {
        e.preventDefault();
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
                            options={["Любая", "Позитивная", "Негативная"]}
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
                                className="search__input--border search-form__left__input search-form__left__input-date"
                                classError="search-form__left__error"
                                placeholder="Дата начала"
                                onChange={dateFromHandle}
                                onBlur={blurDateFrom}
                                error={datesError}
                            />
                            <InputDate
                                className="search__input--border search-form__left__input search-form__left__input-date"
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
                <CheckboxList />
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
