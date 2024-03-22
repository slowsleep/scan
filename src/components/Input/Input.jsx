import "./Input.css";
const Input = ({ className, type = "text", placeholder, onChange }) => {
    return (
        <input
            className={"input " + className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
