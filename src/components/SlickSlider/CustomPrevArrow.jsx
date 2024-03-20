import leftArrow from "../../assets/img/arrow-left.svg";

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={leftArrow} alt="назад" />
        </div>
    );
}

export default CustomPrevArrow;
