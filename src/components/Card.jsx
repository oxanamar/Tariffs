import Tariff from "./Tariff";

function Card({ tariffs, selectedTariff, onTariffSelect }) {
  return (
    <ul className="cards-container">
      {tariffs.map((tariff, index) => (
        <Tariff
          {...tariff}
          key={tariff.name}
          index={index + 1}
          isSelected={selectedTariff === index + 1}
          onSelect={() => onTariffSelect(index + 1)}
        />
      ))}
    </ul>
  );
}

export default Card;
