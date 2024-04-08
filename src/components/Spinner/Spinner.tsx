import spinner from "@assets/img/spinner.svg";
import "./Spinner.css";

interface SpinnerProps {
    className?: string;
    text?: string;
    size?: "md";
}

export const Spinner = ({ className, text, size }: SpinnerProps) => {
    return (
        <div className="spinner-wrapper">
            <img
                className={
                    "spinner " +
                    (className ? className : "") +
                    " " +
                    (size ? "spinner--" + size : "")
                }
                src={spinner}
                alt="loading..."
            />
            {text ? <p className="spinner__text">{text}</p> : null}
        </div>
    );
};
