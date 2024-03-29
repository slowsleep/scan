import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tables from "../../assets/img/tables.png";
import bubbles from "../../assets/img/bubbles.png";
import timer from "../../assets/img/timer.svg";
import search from "../../assets/img/search.svg";
import protect from "../../assets/img/protect.svg";
import lamp from "../../assets/img/lamp.svg";
import target from "../../assets/img/target-small.svg";
import laptop from "../../assets/img/laptop.svg";
import "./Home.css";
import { Button, InfoCard, TariffСard, CustomNextArrow, CustomPrevArrow } from "../../components/";


const Home = () => {

    let sliderSettings = {
        infinite: true,
        speed: 500,
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
        sliderSettings.slidesToScroll = 1;
    } else if (windowWidth > 1300) {
        sliderSettings.slidesToShow = 3;
        sliderSettings.slidesToScroll = 3;
    }


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
                    <Link to="/search">
                        <Button
                            className="desc__left__btn"
                            title="Запросить данные"
                            size="large"
                            color="blue"
                        />
                    </Link>
                </div>
                <div>
                    <img src={tables} alt="Человек и таблицы"
                    width={"100%"}
                    />
                </div>
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
                <div className="why-we__image">
                    <img
                        src={bubbles}
                        alt="Человек сидит и показывает галочку"
                        width={"100%"}
                    />
                </div>
            </section>
            <section className="tariffs">
                <h2>наши тарифы</h2>
                <div className="tarrif-list">
                    <TariffСard
                        title="Beginner"
                        description="Для небольшого исследования"
                        icon={lamp}
                        price="799"
                        oldPrice="1200"
                        priceInfo="или 150 ₽/мес. при рассрочке на 24 мес."
                        tariffIncludes={[
                            "Безлимитная история запросов",
                            "Безопасная сделка",
                            "Поддержка 24/7",
                        ]}
                        current={true}
                        color="yellow"
                    />
                    <TariffСard
                        title="Pro"
                        description="Для HR и фрилансеров"
                        icon={target}
                        price="1 299"
                        oldPrice="2 600"
                        priceInfo="или 279 ₽/мес. при рассрочке на 24 мес."
                        tariffIncludes={[
                            "Все пункты тарифа Beginner",
                            "Экспорт истории",
                            "Рекомендации по приоритетам",
                        ]}
                        color="light-green"
                    />
                    <TariffСard
                        title="Business"
                        description="Для корпоративных клиентов"
                        icon={laptop}
                        price="2 379"
                        oldPrice="3 700"
                        tariffIncludes={[
                            "Все пункты тарифа Pro",
                            "Безлимитное количество запросов",
                            "Приоритетная поддержка",
                        ]}
                        color="black"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
