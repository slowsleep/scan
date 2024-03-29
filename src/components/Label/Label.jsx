const Label = ({className, title, children, required=false}) => {
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
