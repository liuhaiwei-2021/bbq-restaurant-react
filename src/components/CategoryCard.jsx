import { Link } from "react-router-dom";

function CategoryCard({ category }) {
	const { id, title, description, imgURL } = category;

	return (
		<Link to={`/categories/${id}`}>
			<div className="category-card">
				<img className="category-card-img" src={imgURL} alt="category-card" />
				<div className="category-card-info">
					<h3 className="category-card-title">{title}</h3>
					<p className="category-card-desc">{description}</p>
				</div>
			</div>
		</Link>
	);
}

export default CategoryCard;
