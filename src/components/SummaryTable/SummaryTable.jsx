import "./SummaryTable.css";
import Slider from "react-slick";
import CustomNextArrow from "../../components/SlickSlider/CustomNextArrow";
import CustomPrevArrow from "../../components/SlickSlider/CustomPrevArrow";
import { useState, useEffect } from "react";

const SummaryTable = ({periodList}) => {
    let sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    if (windowWidth <= 1300) {
        sliderSettings.slidesToShow = 1;
    } else if (windowWidth > 1300) {
        sliderSettings.slidesToShow = 8;
    }

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
