import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./SummaryTable.css";
import { CustomNextArrow, CustomPrevArrow } from "@components/";
import IObjectSearchResponse from "../../../models/IObjectSearchResponse";
import { DateTable } from "../../../utils/DateFormat";

type DateInfo = {
    date: Date,
    total: number,
    risk: number,
}

const SummaryTable = ({periodList}: {periodList: IObjectSearchResponse}) => {
    let totalDocuments = periodList.data[0].data
    let riskFactors = periodList.data[1].data

    let riskTotalDocs: Array<DateInfo> = [];

    for (let dock of totalDocuments) {
        for (let risk of riskFactors) {
            if (new Date(dock.date).getTime() === new Date(risk.date).getTime()) {
                let periodInfo: DateInfo = { date: new Date(dock.date), total: dock.value, risk: risk.value };
                riskTotalDocs.push(periodInfo);
            }
        }
    }

    let sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        slidesToShow: 1,
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        // адаптивное изменение положения стрелки "назад" для карусели в таблице
        let prev: HTMLElement | null = document.querySelector(".slick-prev");

        if (prev && windowWidth <= 1200) {
            prev.style.left = `-30px`;
        } else {
            let thead: HTMLElement | null = document.querySelector(".summary-table thead tr");
            if (thead) {
                let theadWidth: number | null = thead.clientWidth;

                if (theadWidth && prev) {
                    prev.style.left = `-${theadWidth + 30}px`;
                }
            }
        }
      };

    }, [windowWidth]);

    // адаптивная настройка выводимых элементов в карусели
    if (windowWidth <= 1200) {
        sliderSettings.slidesToShow = 1;
    } else if (windowWidth > 1200) {
        if (riskTotalDocs.length < 8) {
            sliderSettings.slidesToShow = riskTotalDocs.length;
        } else {
            sliderSettings.slidesToShow = 8;
        }
    }

    return (
        <>
            <p>Найдено {riskTotalDocs.length} вариантов</p>
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
                        {riskTotalDocs.map((item) => (
                            <tr key={DateTable(item.date)}>
                                <td>{DateTable(item.date)}</td>
                                <td>{item.total}</td>
                                <td>{item.risk}</td>
                            </tr>
                        ))}
                    </Slider>
                </tbody>
            </table>
        </>
    );
};

export default SummaryTable;
