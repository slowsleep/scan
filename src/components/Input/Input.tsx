import "./Input.css";

interface InputProps {
    className?: string,
    classError?: string,
    type: string,
    name?: string,
    placeholder?: string,
    required?: boolean,
    error?: boolean | string,
    textError?: boolean | string
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void,
    onFocus?: (e: any) => void,
}

const Input = ({ className, classError, type = "text", name, placeholder, required, onChange, onBlur, onFocus, error=false, textError=true }: InputProps) => {
    return (
        <>
            <input
                className={"input " + (className ? className + " " : "") + (error ? "input--error " : "")}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                required={required}
            />
            {error && textError ? <p className={"error " + (classError ? classError : "") }>{error}</p> : null}
        </>
    );
};

export {Input};
