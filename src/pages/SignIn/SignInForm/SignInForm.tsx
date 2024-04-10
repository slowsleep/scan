import { useEffect, useState } from "react";
import google from "@assets/img/google.svg";
import facebook from "@assets/img/facebook.svg";
import yandex from "@assets/img/yandex.svg";
import lock from "@assets/img/lock.svg";
import "./SignInForm.css";
import { Form, Button, LabelInput } from "@components/";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "@features/auth/authActions";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginError, setLoginError] = useState<boolean | string>(false);
    const [passwordError, setPasswordError] = useState<boolean | string>(false);
    const [isFormActive, setIsFormActive] = useState<boolean>(false);

    const { isAuth, errorAuth } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        setLogin(e.target.value);
    };

    const blurLogin = (e) => {
        let val = e.target.value;
        let regex = /(^\+[0-9]{1}\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2})$|(^[a-zA-Z0-9_]{10,20}$)$/.test(val)

        if (regex) {
            setLoginError(false)
        } else {
            setLoginError("Введите корректные данные");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn({login, password}));
    };

    useEffect(() => {
        if (isAuth) {
            setPasswordError(false);
            navigate("/");
        } else if (errorAuth) {
            setPasswordError("Неправильный пароль");
        }
    }, [isAuth, errorAuth]);

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
                        classLabel="login__form__content__inputs__label-input__label"
                        label="Логин или номер телефона:"
                        type="text"
                        name="login"
                        required={true}
                        onChange={handleLogin}
                        onBlur={blurLogin}
                        error={loginError}
                    />
                    <LabelInput
                        className="login__form__content__inputs__label-input"
                        classLabel="login__form__content__inputs__label-input__label"
                        label="Пароль:"
                        type="password"
                        name="password"
                        required={true}
                        onChange={handlePassword}
                        error={passwordError}
                    />
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
                    <a className="login__form__content__buttons__link" href="#">
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
