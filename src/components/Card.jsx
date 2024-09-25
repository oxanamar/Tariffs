import Tariff from "./Tariff";

function Card({ tariffs }) {
  return (
    <ul className="cards-container">
      {tariffs.map((tariff, index) => (
        <Tariff {...tariff} key={tariff.name} index={index + 1} />
      ))}
    </ul>
  );
}

export default Card;
