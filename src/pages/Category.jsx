import { useParams, useNavigate } from "react-router-dom";
import { readCollection } from "../scripts/fireStore";
import { useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import Loader from "../scripts/Loader";
import "../styles/Category.css";

function Category() {
	const { id } = useParams();
	const category = id;

	// Local state
	const [dishes, setDishes] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadData() {
			const payload = await readCollection(`categories/${id}/content`);
			const { data, error, loading } = payload;
			setDishes(data);
			setError(error);
			setLoading(loading);
		}
		loadData();
	}, []);

	// Safeguard
	if (loading) return <Loader />;

	const Dishes = dishes.map((dish, index) => (
		<DishCard key={index} dish={dish} category={category} />
	));

	return (
		<div className="category">
			<h1 className="category-title">{id}</h1>
			<div className="dish-group">{Dishes}</div>
		</div>
	);
}

export default Category;
