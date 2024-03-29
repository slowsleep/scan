import { useState } from "react";
import "./SearchForm.css";
import CheckboxList from "./CheckboxList";
import { Form, LabelInput, Label, Select, InputDate, Button } from "../../../components/";

const SearchForm = () => {
    const [inn, setInn] = useState("");
    const [tonality, setTonality] = useState("Любая");
    const [docCount, setDocCount] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [isActiveForm, setIsActiveForm] = useState(false);

    const innHandle = (e) => {
        setInn(e.target.value)
    }
    const tonalityHandle = (e) => {
        setTonality(e.target.options[e.target.selectedIndex].text)
    }
    const docCountHandle = (e) => {
        setDocCount(e.target.value)
    }
    const dateFromHandle = (e) => {
        setDateFrom(e.target.value)
    }
    const dateToHandle = (e) => {
        setDateTo(e.target.value)
    }

    const blurHandler = () => {
        console.log(inn, tonality, docCount, dateFrom, dateTo);

        if (inn && tonality && docCount && dateFrom && dateTo) {
            setIsActiveForm(true);
        } else {
            setIsActiveForm(false);
        }
    }

    return (
        <Form className="search-form">
            <div className="search-form__left">
                <LabelInput
                    className="search-form__left__label-input"
                    classLabel="search-form__left__label"
                    classInput="search__input--border search-form__left__input"
                    label="ИНН компании"
                    placeholder="10 цифр"
                    required={true}
                    labelRequired={true}
                    onChange={innHandle}
                    onBlur={blurHandler}
                />
                <Label
                    className={"search-form__left__label"}
                    title="Тональность"
                >
                    <Select
                        className="search__input--border search-form__left__select"
                        options={["Любая", "Позитивная", "Негативная"]}
                        onChange={tonalityHandle}
                        onBlur={blurHandler}
                    />
                </Label>
                <LabelInput
                    className="search-form__left__label-input"
                    classLabel="search-form__left__label"
                    classInput="search__input--border search-form__left__input"
                    label="Количество документов в выдаче"
                    placeholder="от 1 до 1000"
                    required={true}
                    labelRequired={true}
                    onChange={docCountHandle}
                    onBlur={blurHandler}
                />
                <div className="search-form__left__dates">
                    <Label
                        className={"search-form__left__label"}
                        title="Диапазон поиска"
                        required={true}
                    />
                    <div className="search-form__left__inputrow">
                        <InputDate
                            className="search__input--border search-form__left__input"
                            placeholder="Дата начала"
                            onChange={dateFromHandle}
                            onBlur={blurHandler}
                        />
                        <InputDate
                            className="search__input--border search-form__left__input"
                            placeholder="Дата конца"
                            onChange={dateToHandle}
                            onBlur={blurHandler}
                        />
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
                    />
                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </Form>
    );
};

export default SearchForm;
