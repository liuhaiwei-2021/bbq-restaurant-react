import { getDocument } from "../scripts/fireStore";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Dish.css";

function Dish() {
	const { category } = useParams();
	const { id } = useParams();

	// Local state
	const [dish, setDish] = useState({});
	const [status, setStatus] = useState(0);

	// Methods
	useEffect(() => {
		async function loadData() {
			const data = await getDocument("/categories/" + category + "/content", id);
			setDish(data);
			// setStatus(1);
		}
		loadData();
	}, []);
	const { name, imgURL, description, price } = dish;
	return (
		<div className="dish">
			<img className="dish-img" src={imgURL} alt="dish-card" />
			<div className="dish-info">
				<h3 className="dish-title">{name}</h3>
				<p>{description}</p>
				<p className="dish-price">{price} :-</p>
				<button className="add-cart-button">Add to cart</button>
			</div>
		</div>
	);
}

export default Dish;
