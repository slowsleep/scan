import rightArrow from "@assets/img/arrow-right.svg";
import CustomArrow from "./CustomArrow";

const CustomNextArrow = ({ className, onClick }: CustomArrow) => {
    return (
        <div className={className} onClick={onClick}>
            <img src={rightArrow} alt="далее" />
        </div>
    );
}

export { CustomNextArrow };
