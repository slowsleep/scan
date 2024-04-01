import "./LabelInput.css";
import { Input, Label } from "@components/";

interface LabelInputProps {
    label: string,
    placeholder?: string,
    type?: string,
    name?: string,
    className?: string,
    classLabel?: string,
    classInput?: string,
    classError?: string,
    required?: boolean,
    labelRequired?: boolean,
    error?: string | boolean,
    onChange?: (e:any) => void,
    onBlur?: (e:any) => void,
}

/**
 * Подходит для input с type = "text", "checkbox"
 * @param {*} param0
 * @returns
 */
const LabelInput = ({
    label,
    placeholder,
    type="text",
    name,
    className,
    classLabel,
    classInput,
    classError,
    required = false,
    labelRequired = false,
    onChange,
    onBlur,
    error=false,
}: LabelInputProps) => {

    function handleChange(e) {
        if (type === "checkbox") {
            e.target.classList.toggle("label__input--checked");
            e.target.parentNode.childNodes[0].classList.toggle(
                "label--checked"
            );
        }

        if (typeof onChange === "function") {
            onChange(e);
        }
    }

    return (
        <div className={(className ? className : "")}>
            <Label className={ (classLabel ? classLabel : "")} title={label} required={labelRequired} />
            <Input
                className={(classInput ? classInput : "")}
                classError={(classError ? classError : "")}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
                required={required}
                onBlur={onBlur}
                error={error}
            />
        </div>
    );
};

export { LabelInput };
