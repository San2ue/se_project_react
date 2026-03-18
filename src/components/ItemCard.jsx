import "../blocks/ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__content">
        <h2 className="card__title">{item.name} </h2>
      </div>
      <img
        className="card__img"
        src={item.link}
        alt={item.name}
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
