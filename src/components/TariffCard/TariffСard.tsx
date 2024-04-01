import "./TariffСard.css";
import { Button } from "@components/";

interface TariffСardProps {
    title: string,
    description: string,
    icon: string,
    price: string,
    oldPrice: string,
    priceInfo?: string,
    tariffIncludes: string[],
    current?: boolean,
    color: string,
}


const TariffСard = ({
    title,
    description,
    icon,
    price,
    oldPrice,
    priceInfo,
    tariffIncludes,
    current = false,
    color,
}: TariffСardProps) => {
    let cardAdditionalStyles;
    let cardHeaderAdditionalStyles;
    let cartBg;

    if (color === "yellow") {
        cartBg = "var(--yellow)";
        cardHeaderAdditionalStyles = { backgroundColor: cartBg };
    } else if (color === "light-green") {
        cartBg = "var(--light-green)";
        cardHeaderAdditionalStyles = { backgroundColor: cartBg };
    } else if (color === "black") {
        cartBg = "black";
        cardHeaderAdditionalStyles = { backgroundColor: cartBg, color: "white" };
    }

    if (current) {
        cardAdditionalStyles = { border: `1px ${cartBg} solid` };
    }

    return (
        <div className="tariff-card" style={cardAdditionalStyles}>
            <div
                className="tariff-card__header"
                style={cardHeaderAdditionalStyles}
            >
                <div className="tariff-card__header__left">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <img src={icon} alt="icon card" width={"25%"} />
            </div>
            <div className="tariff-card__content">
                <div>
                    {current && <div className="current">Текущий тариф</div>}
                    <p>
                        <span className="tariff-card__content__price">
                            {price}
                        </span>{" "}
                        <span className="tariff-card__content__oldprice">
                            {oldPrice}
                        </span>
                    </p>
                    {priceInfo ? (
                        <p className="tariff-card__content__price-info">
                            {priceInfo}
                        </p>
                    ) : (
                        <div>&nbsp;</div>
                    )}
                </div>
                <div>
                    <p className="tariff-card__content__ul-title">
                        В тариф входит:
                    </p>
                    <ul>
                        {tariffIncludes.map((item) => (
                            <li key={item} className="tariff-card__content__li">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="tariff-card__footer">
                {current ? (
                    <Button
                        className="tariff-card__footer__btn"
                        title="Перейти в личный кабинет"
                        size="large"
                    />
                ) : (
                    <Button
                        className="tariff-card__footer__btn"
                        title="Подробнее"
                        color="blue"
                        size="large"
                    />
                )}
            </div>
        </div>
    );
};

export { TariffСard };
