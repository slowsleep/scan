import leftArrow from "@assets/img/arrow-left.svg";
import CustomArrow from "./CustomArrow";

const CustomPrevArrow = ({ className, onClick }: CustomArrow) => {
    return (
        <div className={className} onClick={onClick}>
            <img src={leftArrow} alt="назад" />
        </div>
    );
}

export { CustomPrevArrow };
