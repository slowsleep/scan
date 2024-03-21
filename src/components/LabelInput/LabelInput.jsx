import "./LabelInput.css";
import Input from "../Input/Input";

const LabelInput = ({label, placeholder, type, name}) => {
  return (
    <label className="label">
      {label}
      <Input className="label__input" placeholder={placeholder} type={type} name={name}/>
    </label>
  )
}

export default LabelInput;

