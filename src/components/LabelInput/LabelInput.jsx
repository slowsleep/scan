import "./LabelInput.css";
import Input from "../Input/Input";
import Label from "../Label/Label";

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
}) => {

    function handleChange(e) {
        if (type === "checkbox") {
            e.target.classList.toggle("label__input--checked");
            e.target.parentNode.childNodes[0].classList.toggle(
                "label--checked"
            );
        }
    }

    return (
        <div className={(className ? className : "")}>
            <Label className={ (classLabel ? classLabel : "")} title={label} required={required} />
            <Input
                className={(classInput ? classInput : "")}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
};

export default LabelInput;
