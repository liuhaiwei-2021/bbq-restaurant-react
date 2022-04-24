//NPM packages
import { useParams } from "react-router-dom";

//Project file
import { readCollection } from "../scripts/fireStore";
import { useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import Loader from "../scripts/Loader";
import "../styles/Category.css";

export default function Category() {
	//propertites
	const { id } = useParams();
	const category = id;

	// Local state
	const [dishes, setDishes] = useState([]);
	const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

	useEffect(() => {
		async function loadData() {
			const payload = await readCollection(`categories/${id}/content`);
			const { data, error } = payload;
			error ? loadFail(data) : loadSucceed(data);
		}
		loadData();
	}, []);

	function loadSucceed(data) {
		setDishes(data);
		setStatus(1);
	}

	function loadFail(data) {
		console.log(data);
		setStatus(2);
	}

	// Safeguard
	if (status === 0) return <Loader />;
	if (status === 2) return <p>Error... ❌,opps! our service have problem! we will fix it!</p>;

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
