import "./Select.css";
const Select = ({className, options, onChange, onBlur}) => {
  return (
    <select className={className} onChange={onChange} onBlur={onBlur}>
        {options.map((item) => <option key={item}>{item}</option>)}
    </select>
  )
}

export default Select;
