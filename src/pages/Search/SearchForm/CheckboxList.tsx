import { LabelInput } from "@components/";

const CheckboxList = ({ onChange }: { onChange: React.ChangeEventHandler<HTMLInputElement> }): React.ReactElement => {
    interface Checkbox {
        title: string;
        name: string;
    }

    const checkboxList: Checkbox[] = [
        {
            title: "Признак максимальной полноты",
            name: "fullness"
        },
        {
            title: "Упоминания в бизнес-контексте",
            name: "businessNews"
        },
        {
            title: "Главная роль в публикации",
            name: "mainRole"
        },
        {
            title: "Публикации только с риск-факторами",
            name: "riskFactors"
        },
        {
            title: "Включать технические новости рынков",
            name: "techNews"
        },
        {
            title: "Включать анонсы и календари",
            name: "announcements"
        },
        {
            title: "Включать сводки новостей",
            name: "digests"
        }
    ];

    return (
        <>
            {checkboxList.map(({ title, name }) => (
                <LabelInput
                    className="search-form__right__label"
                    classInput="search__input--border search-form__right__label__input"
                    type="checkbox"
                    label={title}
                    key={name}
                    name={name}
                    onChange={onChange}
                />
            ))}
        </>
    );
};

export default CheckboxList;
