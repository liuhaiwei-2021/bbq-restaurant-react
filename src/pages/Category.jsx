import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Project file
import { getDocument } from "../scripts/fireStore";
import CategoryCard from "../components/CategoryCard";

function Category() {
	const { categoryId } = useParams();

	// Local state
	const [document, setDocument] = useState({});
	const [status, setStatus] = useState(0);

	// Methods
	useEffect(() => {
		async function loadData() {
			const data = await getDocument("categories", categoryId);
			console.log(data);
			setDocument(data);
			setStatus(1);
		}
		loadData();
	}, []);

	// Safeguard
	if (status === 0) return <p>Loading</p>;

	return (
		<div className="category">
			{/* <img src="" alt="images/bbq.png" /> */}
			{/* <h1> {category}</h1> */}
			<div className="category-group">
				<CategoryCard />
			</div>
		</div>
	);
}

export default Category;
