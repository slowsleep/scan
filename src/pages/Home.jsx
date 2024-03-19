import tables from "../assets/img/tables.png";
import Button from "../components/Button/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="desc">
        <div className="desc__left">
          <h1 className="desc__left__title">сервис по поиску публикаций о&nbsp;компании по&nbsp;его&nbsp;ИНН</h1>
          <p className="desc__left__text">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
          <Button className="desc__left__btn" title="Запросить данные" size="large" color="blue" />
        </div>
        <img src={tables} alt="Человек и таблицы"  width={"70%"} />
      </section>
      <section className="why-we">

      </section>
      <section className="tariffs">

      </section>
    </>
  )
}

export default Home;
