import key from "../../assets/img/key.png";
import "./SignIn.css";
// import LabelInput from "../../components/LabelInput/LabelInput";
// import Button from "../../components/Button/Button";
// import Form from "../../components/Form/Form";
// import google from "../../assets/img/google.svg";
// import facebook from "../../assets/img/facebook.svg";
// import yandex from "../../assets/img/yandex.svg";
// import lock from "../../assets/img/lock.svg";
import SignInForm from "../../components/SignInForm/SignInForm";

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
            {/* form */}
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
