interface LabelProps {
  className?: string,
  title: string,
  children?: any,
  required?: boolean,
}

const Label = ({className, title, children, required=false}: LabelProps) => {
  let labelClass = "label ";
  if (required) {
      labelClass += "label--required ";
  }

  return (
    <label className={labelClass + (className ? className : "")}>
        {title}
        {children}
    </label>
  )
}

export { Label };
