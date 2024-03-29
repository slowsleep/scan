import "./InputDate.css";

const InputDate = ({className, placeholder, onChange, onBlur}) => {

    const handleFocus = (event) => {
        event.target.type = 'date';
      };

    const handleBlur = (event) => {
      if (!event.target.value) {
        event.target.type = 'text';
      }
      onBlur()
    };

  return (
    <input
        className={"input-date " + (className ? className : "")}
        placeholder={placeholder}
        onBlur={(event) => handleBlur(event)}
        onFocus={(event) => handleFocus(event)}
        onChange={onChange}
    />
  )
}

export { InputDate };
