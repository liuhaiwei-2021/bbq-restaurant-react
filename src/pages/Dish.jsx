//NPM packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//File packages
import { getDocument } from "../scripts/fireStore";
import Loader from "../scripts/Loader";
import "../styles/Dish.css";

export default function Dish() {
	const { category } = useParams();
	const { id } = useParams();
	const navigate = useNavigate();

	// Local state
	const [dish, setDish] = useState({});
	const [status, setStatus] = useState(0);

	// Methods
	useEffect(() => {
		async function loadData() {
			const data = await getDocument("/categories/" + category + "/content", id);
			setDish(data);
			setStatus(1);
		}
		loadData();
	}, []);

	// Safeguard
	if (status === 0) return <Loader />;

	const { name, imgURL, description, price } = dish;
	return (
		<div className="dish">
			<img className="dish-img" src={imgURL} alt="dish-card" />
			<div className="dish-info">
				<h3 className="dish-title">{name}</h3>
				<p>{description}</p>
				<p className="dish-price">{price} :-</p>
				<button onClick={() => navigate(-1)} className="go-back-button">
					Go back
				</button>
			</div>
		</div>
	);
}
