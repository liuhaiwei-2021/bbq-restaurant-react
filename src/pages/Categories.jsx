// Project file

import CategoryCard from "../components/CategoryCard";
// import Loader from "../scripts/Loader";
import "../styles/Categories.css";

import { useContext } from "react";
import { DishContext } from "../context/DishContext";

export default function Categories() {
	//properties
	const { categories } = useContext(DishContext);

	const Categories = categories.map((category, index) => (
		<CategoryCard key={index} category={category} />
	));

	return <div className="category-group container">{Categories}</div>;
}
