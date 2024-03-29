import "./InputDate.css";
import { Input } from "../";

const InputDate = ({
    className,
    classError,
    placeholder,
    onChange,
    onBlur,
    error,
}) => {
    const handleFocus = (event) => {
        event.target.type = "date";
    };

    const handleBlur = (event) => {
        if (!event.target.value) {
            event.target.type = "text";
        }
        onBlur(event);
    };

    return (
        <div className="input-date-box">
            <Input
                className={"input-date " + (className ? className : "")}
                classError={classError}
                placeholder={placeholder}
                onBlur={(event) => handleBlur(event)}
                onFocus={(event) => handleFocus(event)}
                onChange={onChange}
                error={error}
                textError={false}
            />
        </div>
    );
};

export { InputDate };
