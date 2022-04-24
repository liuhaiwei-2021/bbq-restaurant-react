//NPM packages
import { useEffect, useState } from "react";

// Project file
import { readCollection } from "../scripts/fireStore";
import CategoryCard from "../components/CategoryCard";
import Loader from "../scripts/Loader";
import "../styles/Categories.css";

export default function Categories() {
	// Local state
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	// Methods
	useEffect(() => {
		async function loadData() {
			const payload = await readCollection("categories");
			const { data, error, loading } = payload;
			setCategories(data);
			setError(error);
			setLoading(loading);
		}
		loadData();
	}, []);

	// Safeguard
	if (loading) return <Loader />;

	const Categories = categories.map((category, index) => (
		<CategoryCard key={index} category={category} />
	));

	return <div className="category-group container">{Categories}</div>;
}
