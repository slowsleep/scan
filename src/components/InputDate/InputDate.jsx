import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrow from "../../assets/img/arrow-down.svg";
import "./InputDate.css";

const InputDate = ({classInput, className, placeholder, error, onChange, onBlur}) => {
    const [startDate, setStartDate] = useState(null);

    const onChangeHandle = (e) => {
        setStartDate(e);
        onChange(e);
    }

    return (
        <div className={className}>
            <DatePicker
            className={"input-date " + (classInput ? classInput : "") + (error ? " input--error " : "")}
            showIcon
            selected={startDate}
            icon={
                <img src={arrow} className='arrow-down'/>
            }
            toggleCalendarOnIconClick
            dateFormat="dd.MM.yyyy"
            onChange={onChangeHandle}
            onBlur={onBlur}
            placeholderText={placeholder}
            />
        </div>
    );
}

export { InputDate };
