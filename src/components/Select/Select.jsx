import "./Select.css";
const Select = ({className, options}) => {
  return (
    <select className={className}>
        {options.map((item) => <option key={item}>{item}</option>)}
    </select>
  )
}

export default Select;
