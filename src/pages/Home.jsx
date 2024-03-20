import tables from "../assets/img/tables.png";
import bubbles from "../assets/img/bubbles.png";
import timer from "../assets/img/timer.svg";
import search from "../assets/img/search.svg";
import protect from "../assets/img/protect.svg";
import Button from "../components/Button/Button";
import "./Home.css";
import InfoCard from "../components/InfoCard/InfoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomNextArrow from "../components/SlickSlider/CustomNextArrow";
import CustomPrevArrow from "../components/SlickSlider/CustomPrevArrow";


const Home = () => {
    let sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <>
            <section className="desc">
                <div className="desc__left">
                    <h1 className="desc__left__title">
                        сервис по поиску публикаций о&nbsp;компании
                        по&nbsp;его&nbsp;ИНН
                    </h1>
                    <p className="desc__left__text">
                        Комплексный анализ публикаций, получение данных в
                        формате PDF на электронную почту.
                    </p>
                    <Button
                        className="desc__left__btn"
                        title="Запросить данные"
                        size="large"
                        color="blue"
                    />
                </div>
                <img src={tables} alt="Человек и таблицы" width={"70%"} />
            </section>
            <section className="why-we">
                <h2>почему именно мы</h2>
                <Slider {...sliderSettings} className="infocard-slider">
                    <InfoCard
                        logo={timer}
                        title="Высокая и оперативная скорость обработки заявки"
                    />
                    <InfoCard
                        logo={search}
                        title="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
                    />
                    <InfoCard
                        logo={protect}
                        title="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
                    />
                </Slider>
                <img
                    src={bubbles}
                    alt="Человек сидит и показывает галочку"
                    width={"97%"}
                />
            </section>
            <section className="tariffs"></section>
        </>
    );
};

export default Home;
