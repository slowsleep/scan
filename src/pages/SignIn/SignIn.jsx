import key from "../../assets/img/key.png";
import "./SignIn.css";
import LabelInput from "../../components/LabelInput/LabelInput";
import Button from "../../components/Button/Button";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import yandex from "../../assets/img/yandex.svg";
import lock from "../../assets/img/lock.svg";

const SignIn = () => {
    return (
        <div className="login">
            <div className="login__left">
                <h1>
                    Для оформления подписки на&nbsp;тариф, необходимо
                    авторизоваться.
                </h1>
                <img
                    className="login__left__img"
                    src={key}
                    alt="Люди несут ключ"
                    width={"40%"}
                />
            </div>

            <form className="login__form">
                <div className="login__form__header">
                    <Button className="login_form__header__button" size="large" title="Войти" />
                    <Button className="login_form__header__button" size="large" title="Зарегистрироваться" disabled={true} />
                </div>
                <div className="login__form__content">
                    <div className="login__form__content__inputs">
                        <LabelInput label="Логин или номер телефона:" type="text" name="login" />
                        <LabelInput label="Пароль:" type="password" name="password" />
                    </div>
                    <div className="login__form__content__buttons">
                        <Button className="login__form__content__buttons__button" title="Войти" color="blue" size="large" />
                        <a className="login__form__content__buttons__link" href="">Восстановить пароль</a>
                    </div>
                </div>
                <div className="login__form__footer">
                    <p>Войти через</p>
                    <div className="login__form__footer__links">
                        <img className="login__form__footer__links__item" src={google} alt="" />
                        <img className="login__form__footer__links__item" src={facebook} alt="" />
                        <img className="login__form__footer__links__item" src={yandex} alt="" />
                    </div>
                </div>
                <img className="lock" src={lock} alt="замок" />
            </form>
        </div>
    );
};

export default SignIn;
