import "./InfoCard.css";

interface InfoCardProps {
  logo: string,
  title: string
}

const InfoCard = ({logo, title}: InfoCardProps) => {
  return (
    <div className="infocard">
        <img src={logo} alt="icon" />
        <p>{title}</p>
    </div>
  )
}

export { InfoCard };
