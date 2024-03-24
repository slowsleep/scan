import womanTarget from "../../assets/img/woman-target.png";
import Button from "../../components/Button/Button";
import "./SearchOutput.css";
import SummaryTable from "../../components/SummaryTable/SummaryTable";
import DocumentСard from "../../components/DocumentСard/DocumentСard";

import mockImg1 from "../../assets/img/mock-img1.png";
import mockImg2 from "../../assets/img/mock-img2.png";

const mockSummary = [
  { period: "10.09.2021", all: "5", risks: "0" },
  { period: "13.09.2021", all: "2", risks: "0" },
  { period: "17.09.2021", all: "6", risks: "0" },
  { period: "20.09.2021", all: "8", risks: "2" },
  { period: "12.10.2021", all: "1", risks: "0" },
  { period: "15.10.2021", all: "10", risks: "2" },
  { period: "16.10.2021", all: "4", risks: "0" },
  { period: "17.10.2021", all: "3", risks: "0" },
  { period: "18.10.2021", all: "5", risks: "0" },
  { period: "23.10.2021", all: "2", risks: "0" },
  { period: "27.10.2021", all: "6", risks: "0" },
  { period: "29.10.2021", all: "8", risks: "2" },
  { period: "02.11.2021", all: "1", risks: "0" },
  { period: "05.11.2021", all: "10", risks: "2" },
  { period: "06.11.2021", all: "4", risks: "0" },
  { period: "07.11.2021", all: "3", risks: "0" },
];

const mockDocuments = [
  {
    id: 0,
    issueDate: "13.09.2021",
    source: {
      name: "Комсомольская правда KP.RU",
    },
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    attributes: {
      isTechNews: true,
      isAnnouncement: false,
      isDigest: false,
      wordCount: "2 543",
    },
    image: mockImg1,
    content: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
  },
  {
    id: 1,
    issueDate: "15.10.2021",
    source: {
      name: "VC.RU",
    },
    title: "Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций",
    attributes: {
      isTechNews: true,
      isAnnouncement: false,
      isDigest: false,
      wordCount: "3 233",
    },
    image: mockImg2,
    content: `Кто такой Data Scientist и чем он занимается?
    Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.

    В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.`,
  },
  {
    id: 2,
    issueDate: "13.09.2021",
    source: {
      name: "Комсомольская правда KP.RU",
    },
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    attributes: {
      isTechNews: true,
      isAnnouncement: false,
      isDigest: false,
      wordCount: "2 543",
    },
    image: mockImg1,
    content: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
  },
  {
    id: 3,
    issueDate: "15.10.2021",
    source: {
      name: "VC.RU",
    },
    title: "Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций",
    attributes: {
      isTechNews: true,
      isAnnouncement: false,
      isDigest: false,
      wordCount: "3 233",
    },
    image: mockImg2,
    content: `Кто такой Data Scientist и чем он занимается?
    Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.

    В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.`,
  }
];


const SearchOutput = () => {
    return (
        <div className="search-output">
            <div className="search-output__loading">
                <div className="search-output__loading__text">
                    <h1>Ищем. Скоро будут&nbsp;результаты</h1>
                    <p>
                        Поиск может занять некоторое время, просим сохранять
                        терпение.
                    </p>
                </div>
                <img className="search-output__loading__image" src={womanTarget} alt="" />
            </div>
            <div className="search-output__summary">
                <h2>Общая сводка</h2>
                <p>Найдено 4 221 вариантов</p>
                <SummaryTable periodList={mockSummary}/>
            </div>
            <div className="search-output__doclist">
                <h2>Список документов</h2>
                <div className="search-output__doclist__items">
                  {mockDocuments.map((item) =>
                    <DocumentСard key={item.id} document={item} />
                  )}
                </div>
            </div>
            <Button className="search-output__btn-view-more" title="Показать больше" color="blue" size="large" />
        </div>
    );
};

export default SearchOutput;
