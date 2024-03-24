import "./Input.css";
const Input = ({ className, type = "text", placeholder, onChange, onBlur }) => {
    return (
        <input
            className={"input " + className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default Input;
