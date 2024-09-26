function Tariff({ name, price, speed, comment, index }) {
  return (
    <li className="tariffs-card">
      <h3 className={`tariff-title-${index}`}>{name}</h3>
      <p className={`price price-${index}`}>
        <span className="currency">руб</span>
        {price} <span className="period">/мес</span>
      </p>
      <p className="speed">{speed}</p>
      <p className="comment">{comment}</p>
    </li>
  );
}

export default Tariff;
