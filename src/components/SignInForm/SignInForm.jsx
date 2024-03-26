import Form from "../Form/Form";
import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import yandex from "../../assets/img/yandex.svg";
import lock from "../../assets/img/lock.svg";
import "./SignInForm.css";
import { useEffect, useState } from "react";

const SignInForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isFormActive, setIsFormActive] = useState(false);

    const handleLogin = (e) => {
        setLogin(e.target.value);
    };

    const blurLogin = (e) => {
        let val = e.target.value;
        let reg = val.match(/^(\+[0-9]{1}\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2})|([a-zA-Z0-9_]{10,50})$/);

        if (reg && reg[0] === val) {
            setLoginError(false)
            console.log(reg, "reg true")
        } else {
            console.log(reg, "reg false")
            setLoginError("Введите корректные данные");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch(
            "https://gateway.scan-interfax.ru/api/v1/account/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ login, password }),
            }
        );

        let result = await response.json()
        if (result.errorCode === "Auth_InvalidUserOrPassword") {
            setPasswordError("Неправильный пароль");
        } else {
            localStorage.setItem("accessToken", result.accessToken);
            localStorage.setItem("expire", result.expire);
        }

    };

    useEffect(() => {
        if (login && password) {
            setIsFormActive(true);
        } else {
            setIsFormActive(false);
        }
    }, [login, password, loginError, passwordError]);

    return (
        <Form className="login__form">
            <div className="login__form__header">
                <Button
                    className="login_form__header__button"
                    size="large"
                    title="Войти"
                />
                <Button
                    className="login_form__header__button"
                    size="large"
                    title="Зарегистрироваться"
                    disabled={true}
                />
            </div>
            <div className="login__form__content">
                <div className="login__form__content__inputs">
                    <LabelInput
                        className="login__form__content__inputs__label-input"
                        label="Логин или номер телефона:"
                        type="text"
                        name="login"
                        required={true}
                        onChange={handleLogin}
                        onBlur={blurLogin}
                        error={loginError}
                    />
                    {loginError && <p className="error">{loginError}</p>}
                    <LabelInput
                        className="login__form__content__inputs__label-input"
                        label="Пароль:"
                        type="password"
                        name="password"
                        required={true}
                        onChange={handlePassword}
                        error={passwordError}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <div className="login__form__content__buttons">
                    <Button
                        className="login__form__content__buttons__button"
                        title="Войти"
                        color="blue"
                        size="large"
                        disabled={!isFormActive}
                        onClick={handleSubmit}
                    />
                    <a className="login__form__content__buttons__link" href="">
                        Восстановить пароль
                    </a>
                </div>
            </div>
            <div className="login__form__footer">
                <p>Войти через</p>
                <div className="login__form__footer__links">
                    <img
                        className="login__form__footer__links__item"
                        src={google}
                        alt="Google"
                    />
                    <img
                        className="login__form__footer__links__item"
                        src={facebook}
                        alt="Facebook"
                    />
                    <img
                        className="login__form__footer__links__item"
                        src={yandex}
                        alt="Yandex"
                    />
                </div>
            </div>
            <img className="lock" src={lock} alt="замок" />
        </Form>
    );
};

export default SignInForm;
