import "./SummaryTable.css";
import Slider from "react-slick";
import CustomNextArrow from "../../components/SlickSlider/CustomNextArrow";
import CustomPrevArrow from "../../components/SlickSlider/CustomPrevArrow";

const SummaryTable = ({periodList}) => {
    let sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <>
            <table className="summary-table">
                <thead>
                    <tr>
                        <td>Период</td>
                        <td>Всего</td>
                        <td>Риски</td>
                    </tr>
                </thead>
                <tbody>
                    <Slider {...sliderSettings}>
                        {periodList.map((item) => (
                            <tr>
                                <td>{item.period}</td>
                                <td>{item.all}</td>
                                <td>{item.risks}</td>
                            </tr>
                        ))}
                    </Slider>
                </tbody>
            </table>
        </>
    );
};

export default SummaryTable;
