// import Button from "../../components/Button/Button";
// import LabelInput from "../../components/LabelInput/LabelInput";
// import Form from "../../components/Form/Form";
import racket from "../../assets/img/racket.png";
import document from "../../assets/img/document.png";
import folders from "../../assets/img/folders.png";
import "./Search.css";
// import Select from "../../components/Select/Select";
// import Label from "../../components/Label/Label";
// import InputDate from "../../components/InputDate/InputDate";
import SearchForm from "../../components/SearchForm/SearchForm";

const Search = () => {
    return (
        <div className="search">
            <div className="search__left">
                <h1>Найдите необходимые данные в пару кликов.</h1>
                <div className="search__left__block">
                    <div className="search__left__block__text">
                        <p>Задайте параметры поиска.</p>
                        <p>Чем больше заполните, тем точнее поиск</p>
                    </div>
                    <img className="search__left__block__image" src={document} alt="Документ" />
                </div>
                <SearchForm />
            </div>
            <div className="search__right">
                <div className="search__right__img-files">
                    <img src={document} alt="Документ" />
                    <img src={folders} alt="Папки" />
                </div>
                <div className="search__right__img-people">
                    <img  src={racket} alt="Человек ищет" />
                </div>
            </div>
        </div>
    );
};

export default Search;
