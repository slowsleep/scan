import Button from "../../components/Button/Button";
import LabelInput from "../../components/LabelInput/LabelInput";
import Form from "../../components/Form/Form";
import racket from "../../assets/img/racket.png";
import document from "../../assets/img/document.png";
import folders from "../../assets/img/folders.png";
import "./Search.css";
import Select from "../../components/Select/Select";
import Label from "../../components/Label/Label";
import InputDate from "../../components/InputDate/InputDate";

const CheckboxList = () => {
    let checkboxList = [
        "Признак максимальной полноты",
        "Упоминания в бизнес-контексте",
        "Главная роль в публикации",
        "Публикации только с риск-факторами",
        "Включать технические новости рынков",
        "Включать анонсы и календари",
        "Включать сводки новостей",
    ];

    return (
        <>
            {checkboxList.map((title) => (
                <LabelInput
                    className="search__left__form__right__label"
                    classInput="search__input--border search__left__form__right__label__input"
                    type="checkbox"
                    label={title}
                    key={title}
                />
            ))}
        </>
    );
};

const Search = () => {
    return (
        <div className="search">
            <div className="search__left">
                <h1>Найдите необходимые данные в пару кликов.</h1>
                <p>Задайте параметры поиска.</p>
                <p>Чем больше заполните, тем точнее поиск</p>
                <Form className="search__left__form">
                    <div className="search__left__form__left">
                        <LabelInput
                            className="search__left__form__left__label-input"
                            classLabel="search__left__form__left__label"
                            classInput="search__input--border search__left__form__left__input"
                            label="ИНН компании"
                            placeholder="10 цифр"
                            required={true}
                        />
                        <Label
                            className={"search__left__form__left__label"}
                            title="Тональность"
                        >
                            <Select
                                className="search__input--border search__left__form__left__select"
                                options={["Любая", "Позитивная", "Негативная"]}
                            />
                        </Label>
                        <LabelInput
                            className="search__left__form__left__label-input"
                            classLabel="search__left__form__left__label"
                            classInput="search__input--border search__left__form__left__input"
                            label="Количество документов в выдаче"
                            placeholder="от 1 до 1000"
                            required={true}
                        />
                        <div className="search__left__form__left__dates">
                            <Label
                                className={"search__left__form__left__label"}
                                title="Диапазон поиска"
                                required={true}
                            />
                            <div className="search__left__form__left__inputrow">
                                <InputDate
                                    className="search__input--border search__left__form__left__input"
                                    placeholder="Дата начала"
                                />
                                <InputDate
                                    className="search__input--border search__left__form__left__input"
                                    placeholder="Дата конца"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="search__left__form__right">
                        <CheckboxList />
                        <div className="search__left__form__right__footer">
                            <Button
                                className="search__left__form__right__footer__button"
                                title="Поиск"
                                color="blue"
                                size="large"
                            />
                            <p>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </Form>
            </div>
            <div className="search__right" style={{position: "relative"}}>
                <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
                    <img style={{ width: "100px", position: "absolute", left: "1em", top: "7em" }} src={document} alt="" />
                    <img style={{ width: "150px", position: "absolute", right: "3em", top: "8em" }}  src={folders} alt="" />
                </div>
                <img style={{width: "90%", position: "absolute", bottom: "0", left: "6em"}} src={racket} alt="" />
            </div>
        </div>
    );
};

export default Search;
