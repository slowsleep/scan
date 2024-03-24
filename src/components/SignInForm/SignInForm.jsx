import Form from "../Form/Form";
import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import yandex from "../../assets/img/yandex.svg";
import lock from "../../assets/img/lock.svg";
import "./SignInForm.css";

const SignInForm = () => {
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
                    />
                    <LabelInput
                        className="login__form__content__inputs__label-input"
                        label="Пароль:"
                        type="password"
                        name="password"
                        required={true}
                        labelRequired={false}
                    />
                </div>
                <div className="login__form__content__buttons">
                    <Button
                        className="login__form__content__buttons__button"
                        title="Войти"
                        color="blue"
                        size="large"
                        disabled={true}
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
