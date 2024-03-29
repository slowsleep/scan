import "./Button.css";

/**
 * Настраиваемый компонент кнопки
 * @param {string} title - текст внутри кнопки
 * @param {string} size - (small | large) размер кнопки
 * @param {string} color - (blue | light-green | white) цвет кнопки
 */
const Button = ({ className, title, size, color, disabled=false, onClick}) => {
    let classBtn = "button ";

    if (color == "blue") {
        classBtn += "button--blue ";
    } else if (color == "light-green") {
        classBtn += "button--light-green ";
    }

    if (size == "large") {
        classBtn += "button--large ";
    } else if (size == "small") {
        classBtn += "button--small ";
    }

    classBtn += className;

    return <button className={classBtn} disabled={disabled} onClick={onClick}>{title}</button>;
};

export default Button;
