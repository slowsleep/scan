import "./Form.css";

interface FormProps {
  className?: string,
  children: any
}

const Form = ({className, children} : FormProps) => {
  return (
    <form className={"form " + className}>{children}</form>
  )
}

export {Form};
