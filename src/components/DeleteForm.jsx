import { deleteDocument } from "../scripts/fireStore";

function DeleteForm() {
	return (
		<form className="add-form container">
			<h3>Delete a new dish</h3>
			<select className="form-select">
				<option disabled>Category</option>
				<option value="1">Beef</option>
				<option value="2">Pork</option>
				<option value="3">Chicken</option>
				<option value="3">Vegetables</option>
			</select>
			<select className="form-select">
				<option>Name</option>
				<option value="1">dish 1</option>
				<option value="2">dish 2</option>
				<option value="3">dish 3</option>
				<option value="3">dish 4 </option>
			</select>
			<button className="delete">Delete</button>
		</form>
	);
}

export default DeleteForm;
