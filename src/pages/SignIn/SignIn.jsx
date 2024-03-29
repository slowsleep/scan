import key from "../../assets/img/key.png";
import "./SignIn.css";
import SignInForm from "./SignInForm/SignInForm";

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
            <SignInForm />
            <img
                className="login__bottom__img"
                src={key}
                alt="Люди несут ключ"
            />
        </div>
    );
};

export default SignIn;
