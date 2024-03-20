import rightArrow from "../../assets/img/arrow-right.svg";

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={rightArrow} alt="далее" />
        </div>
    );
}

export default CustomNextArrow;
