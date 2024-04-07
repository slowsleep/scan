import "./Label.css";

interface LabelProps {
  className?: string,
  title: string,
  children?: any,
  required?: boolean,
  error?: string | boolean,
}

const Label = ({className, title, children, required=false, error}: LabelProps) => {
  let labelClass = "label ";

  if (required) {
      labelClass += "label--required ";
  }

  if (error) {
      labelClass += "label--error ";
  }

  return (
    <label className={labelClass + (className ? className : "")}>
        {title}
        {children}
    </label>
  )
}

export { Label };
