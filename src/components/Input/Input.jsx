import "./Input.css";
const Input = ({ className, classError, type = "text", placeholder, onChange, onBlur, onFocus, error=false, textError=true }) => {
    return (
        <>
            <input
                className={"input " + (className ? className + " " : "") + (error ? "input--error " : "")}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {error && textError ? <p className={"error " + (classError ? classError : "") }>{error}</p> : null}
        </>
    );
};

export {Input};
