import "./Input.css";
const Input = ({className, type, placeholder}) => {


  return (
    <input className={"input " + className} type={type} placeholder={placeholder}/>
  )
}

export default Input;
