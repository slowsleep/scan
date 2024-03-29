import "./LabelInput.css";
import { Input, Label } from "../";

/**
 * Подходит для input с type = "text", "checkbox"
 * @param {*} param0
 * @returns
 */
const LabelInput = ({
    label,
    placeholder,
    type,
    name,
    className,
    classLabel,
    classInput,
    required = false,
    labelRequired = false,
    onChange,
    onBlur,
    error=false,
}) => {

    function handleChange(e) {
        if (type === "checkbox") {
            e.target.classList.toggle("label__input--checked");
            e.target.parentNode.childNodes[0].classList.toggle(
                "label--checked"
            );
        }
        onChange(e);
    }

    return (
        <div className={(className ? className : "")}>
            <Label className={ (classLabel ? classLabel : "")} title={label} required={labelRequired} />
            <Input
                className={(classInput ? classInput : "")}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
                required={required}
                onBlur={onBlur}
                error={error}
            />
            {error ? <p className="error">{error}</p> : null}
        </div>
    );
};

export { LabelInput };
