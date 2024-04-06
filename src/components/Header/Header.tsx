import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "@assets/img/logo.svg";
import whiteLogo from "@assets/img/white-logo.svg";
import { AccountLimits, Button } from "@components/";
import { EventFiltersInfo } from "@mytypes/";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../features/auth/authSlice";
import { getLimit } from "../../features/user/userActions";

const Header = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state: any) => state.auth);
    const { data } = useSelector((state: any) => state.user);
    const [accountLimits, setAccountLimits] = useState<EventFiltersInfo>(
        {} as EventFiltersInfo
    );

    useEffect(() => {
        if (isAuth) {
            dispatch(getLimit());
        }
    }, [isAuth]);

    useEffect(() => {
        if (isAuth) {
            if (data) {
                setAccountLimits(data as EventFiltersInfo);
            }
        }
    }, [data]);

    const openBurgerHandler = () => {
        let header: HTMLElement | null = document.querySelector(".header");
        let burgerMenu: HTMLElement | null = document.querySelector(".burger-menu");
        if (!header || !burgerMenu) return;
        header.style.display = "none";
        burgerMenu.style.display = "block";
    };

    const closeBurgerHandler = () => {
        let header: HTMLElement | null = document.querySelector(".header");
        let burgerMenu: HTMLElement | null = document.querySelector(".burger-menu");
        if (!header || !burgerMenu) return;
        burgerMenu.style.display = "none";
        header.style.display = "flex";
    };

    return (
        <>
            <header className="header">
                <img src={logo} alt="Scan loog" />
                <div className="header__right">
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
                    {isAuth ? <AccountLimits info={accountLimits} /> : null}
                    <div className="header__right__login">
                        {!isAuth ? (
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
                        ) : (
                            <>
                                <Button
                                    title="Выйти"
                                    size="small"
                                    color="light-green"
                                    onClick={() => dispatch(signOut())}
                                />
                            </>
                        )}
                    </div>
                    <button
                        className="header__burger"
                        onClick={openBurgerHandler}
                    ></button>
                </div>
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
                        {!isAuth ? (
                            <>
                                <Button
                                    className="header__regbtn"
                                    title="Зарегистрироваться"
                                    size="small"
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
                            </>
                        ) : (
                            <>
                                <Button
                                    title="Выйти"
                                    size="large"
                                    color="light-green"
                                    onClick={() => dispatch(signOut())}
                                />
                            </>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export { Header };
