import { Link } from "react-router-dom";

function DishCard({ category, dish }) {
  const { id, name, price, imgURL } = dish;
  return (
    <Link to={`/categories/${category}/${id}`}>
      <div className="dish-card">
        <img className="dish-card-img" src={imgURL} alt="dish-card" />
        <div className="dish-card-info">
          <h3 className="dish-card-title">{name}</h3>
          <p className="dish-card-price">{price} :-</p>
        </div>
      </div>
    </Link>
  );
}

export default DishCard;
