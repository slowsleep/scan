import "./Input.css";
const Input = ({ className, type = "text", placeholder, onChange, onBlur, error=false }) => {
    console.log(error, "error from Input")
    return (
        <input
            className={"input " + (className ? className + " " : "") + (error ? "input--error " : "")}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default Input;
