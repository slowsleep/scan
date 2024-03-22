import "./Form.css";

const Form = ({className, children}) => {
  return (
    <form className={"form " + className}>{children}</form>
  )
}

export default Form;
