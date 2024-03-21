import logo from "../../assets/img/logo.svg";
import Button from "../Button/Button";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Scan loog" />
            <nav className="header__nav">
                <Link to="/" className="nav__item">Главная</Link>
                <Link to="#" className="nav__item">Тарифы</Link>
                <Link to="#" className="nav__item">FAQ</Link>
            </nav>
            <div className="header__right">
                <Button title="Зарегистрироваться" size="small" color="white" />
                <div className="vertical-line" ></div>
                <Link to="/login">
                    <Button title="Войти" size="small" color="light-green" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
