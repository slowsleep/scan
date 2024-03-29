import "./InfoCard.css";

const InfoCard = ({logo, title}) => {
  return (
    <div className="infocard">
        <img src={logo} alt="icon" />
        <p>{title}</p>
    </div>
  )
}

export { InfoCard };
