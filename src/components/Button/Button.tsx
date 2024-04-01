import "./Button.css";

interface ButtonProps {
    className?: string;
    title: string;
    size?: "small" | "large";
    color?: "blue" | "light-green";
    disabled?: boolean;
    onClick?: (e:any) => void;
};

const Button = ({
    className = "",
    title,
    size,
    color,
    disabled = false,
    onClick
}: ButtonProps): JSX.Element => {
    let classBtn = "button ";

    if (color === "blue") {
        classBtn += "button--blue ";
    } else if (color === "light-green") {
        classBtn += "button--light-green ";
    }

    if (size === "large") {
        classBtn += "button--large ";
    } else if (size === "small") {
        classBtn += "button--small ";
    }

    classBtn += className;

    return <button className={classBtn} disabled={disabled} onClick={onClick}>{title}</button>;
};


export { Button };
