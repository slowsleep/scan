import "./Footer.css";
import whiteLogo from "../../assets/img/white-logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={whiteLogo} alt="Белый логотип SCAN" />
            <div className="footer__right">
                <div className="footer__right__info">
                    <p>г. Москва, Цветной б-р, 40</p>
                    <p>+7 495 771 21 11</p>
                    <p>info@skan.ru</p>
                </div>
                <div className="footer__right__copyright">
                    <p>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
