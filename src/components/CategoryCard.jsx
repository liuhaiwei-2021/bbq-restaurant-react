// import { Link } from "react-router-dom";

function CategoryCard({ category }) {
	const { id, title, description, imgURL } = category;

	return (
		<div className="category-card">
			<img className="category-card-img" src={imgURL} alt="card" />
			<div className="category-card-info">
				<h3 className="product-card-title">{title}</h3>

				<p className="category-card-desc">{description}</p>
			</div>
		</div>
	);
}

export default CategoryCard;
