import "./Select.css";

interface SelectProps {
  className?: string,
  options: { title: string, name: string }[],
  onChange?: (e: any) => void,
  onBlur?: (e: any) => void,
}
const Select = ({className, options, onChange, onBlur}: SelectProps) => {
  return (
    <select className={className} onChange={onChange} onBlur={onBlur}>
        {options.map(({title, name}) => <option key={name} value={name}>{title}</option>)}
    </select>
  )
}

export { Select };
