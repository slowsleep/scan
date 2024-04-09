import { LabelInput } from "@components/";

interface CheckboxListProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    className?: string,
    classLabel?: string,
    classInput?: string,
}

const CheckboxList = ({ onChange, classInput, className, classLabel }: CheckboxListProps): React.ReactElement => {
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
        <div className={className}>
            {checkboxList.map(({ title, name }) => (
                <LabelInput
                    className={classLabel}
                    classInput={classInput}
                    type="checkbox"
                    label={title}
                    key={name}
                    name={name}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default CheckboxList;
