import { useEffect, useState } from "react";

// Project file
import { getCollection } from "../scripts/fireStore";
import CategoryCard from "../components/CategoryCard";
import "../styles/Categories.css";

function Categories() {
	// const { categoryId } = useParams();

	// Local state
	const [categories, setCategories] = useState([]);
	const [status, setStatus] = useState(0);

	// Methods
	useEffect(() => {
		async function loadData() {
			const data = await getCollection("categories");
			setCategories(data);
			setStatus(1);
		}
		loadData();
	}, []);

	// Safeguard
	if (status === 0) return <p>Loading</p>;

	const Categories = categories.map((category, index) => (
		<CategoryCard key={index} category={category} />
	));

	return <div className="category-group container">{Categories}</div>;
}

export default Categories;
