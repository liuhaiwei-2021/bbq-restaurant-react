import { readDocument, deleteDocument } from "../scripts/fireStore";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../scripts/Loader";
import "../styles/Dish.css";

export default function Dish() {
	const { category } = useParams();
	const { id } = useParams();
	const navigate = useNavigate();

	// Local state
	const [dish, setDish] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	// Methods
	useEffect(() => {
		async function loadData() {
			const payload = await readDocument("/categories/" + category + "/content", id);
			const { data, error, loading } = payload;
			setDish(data);
			setError(error);
			setLoading(false);
		}
		loadData();
	}, []);

	// Safeguard
	if (loading) return <Loader />;

	const { name, imgURL, description, price } = dish;

	function onDelete() {
		deleteDocument(`categories/${category}/content`, id);
		navigate(-1);
	}

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
				<button className="delete-button" onClick={onDelete}>
					DELETE
				</button>
			</div>
		</div>
	);
}
