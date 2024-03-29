import { LabelInput } from "../../../components/";

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
                    className="search-form__right__label"
                    classInput="search__input--border search-form__right__label__input"
                    type="checkbox"
                    label={title}
                    key={title}
                />
            ))}
        </>
    );
};

export default CheckboxList;