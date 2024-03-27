import logo from "../../assets/img/logo.svg";
import whiteLogo from "../../assets/img/white-logo.svg";
import { useAuth } from "../../hook/useAuth";
import Button from "../Button/Button";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const {auth, signOut} = useAuth();
    const openBurgerHandler = () => {
        let header = document.querySelector(".header");
        let burgerMenu = document.querySelector(".burger-menu");
        header.style.display = "none";
        burgerMenu.style.display = "block";
    };

    const closeBurgerHandler = () => {
        let header = document.querySelector(".header");
        let burgerMenu = document.querySelector(".burger-menu");
        burgerMenu.style.display = "none";
        header.style.display = "flex";
    };

    return (
        <>
            <header className="header">
                <img src={logo} alt="Scan loog" />
                <nav className="header__nav">
                    <Link to="/" className="nav__item">
                        Главная
                    </Link>
                    <Link to="#" className="nav__item">
                        Тарифы
                    </Link>
                    <Link to="#" className="nav__item">
                        FAQ
                    </Link>
                </nav>
                <div className="header__right">
                    {!auth ?
                    <>
                        <Button
                            className="header__regbtn"
                            title="Зарегистрироваться"
                            size="small"
                            disabled={true}
                            />
                        <div className="vertical-line"></div>
                        <Link to="/login">
                            <Button
                                title="Войти"
                                size="small"
                                color="light-green"
                                />
                        </Link>
                    </>
                    :
                    <>
                        <Button title="Выйти" size="small" color="light-green" onClick={signOut}/>
                    </>
                    }
                </div>
                <button
                    className="header__burger"
                    onClick={openBurgerHandler}
                ></button>
            </header>
            <header className="burger-menu">
                <div className="burger-menu__header">
                    <img src={whiteLogo} alt="" />
                    <button
                        className="burger-menu__header__close"
                        onClick={closeBurgerHandler}
                    ></button>
                </div>
                <div className="burger-menu__main">
                    <div className="burger-menu__main__nav">
                        <Link to="/">Главная</Link>
                        <Link to="#">Тарифы</Link>
                        <Link to="#">FAQ</Link>
                    </div>
                    <div className="burger-menu__main__btns">
                        {!auth ?
                        <>
                        <Button
                            className="header__regbtn"
                            title="Зарегистрироваться"
                            size="small"
                            color="white"
                            disabled={true}
                        />
                        <Link
                            className="burger-menu__main__btns__login"
                            to="/login"
                        >
                            <Button
                                title="Войти"
                                size="large"
                                color="light-green"
                            />
                        </Link>
                        </> :
                        <>
                            <Button
                                    title="Выйти"
                                    size="large"
                                    color="light-green"
                                    onClick={signOut}
                            />
                        </>}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
