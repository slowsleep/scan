import "./Button.css";

/**
 * Настраиваемый компонент кнопки
 * @param {string} title - текст внутри кнопки
 * @param {string} size - (small | large) размер кнопки
 * @param {string} color - (blue | light-green | white) цвет кнопки
 */
const Button = ({ className, title, size, color }) => {
    let classBtn = "button ";

    if (color == "blue") {
        classBtn += "button--blue ";
    } else if (color == "light-green") {
        classBtn += "button--light-green ";
    } else if (color == "white") {
        classBtn += "button--white ";
    }

    if (size == "large") {
        classBtn += "button--large ";
    } else if (size == "small") {
        classBtn += "button--small ";
    }

    classBtn += className;

    return <button className={classBtn}>{title}</button>;
};

export default Button;
