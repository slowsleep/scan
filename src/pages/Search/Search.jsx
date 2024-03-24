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
                <div className="search__left__block">
                    <div className="search__left__block__text">
                        <p>Задайте параметры поиска.</p>
                        <p>Чем больше заполните, тем точнее поиск</p>
                    </div>
                    <img className="search__left__block__image" src={document} alt="Документ" />
                </div>
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
            <div className="search__right">
                <div className="search__right__img-files">
                    <img src={document} alt="Документ" />
                    <img src={folders} alt="Папки" />
                </div>
                <img className="search__right__img-people" src={racket} alt="Человек ищет" />
            </div>
        </div>
    );
};

export default Search;
