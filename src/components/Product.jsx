import { useParams, useNavigate } from "react-router-dom";

function Product() {
	const { id } = useParams();
	const { category } = useParams();
	return (
		<div>
			<span>{category}</span>
			<span>{id}</span>
		</div>
	);
}

export default Product;
