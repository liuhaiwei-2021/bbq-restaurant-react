import { useState } from "react";
import InputField from "./InputField";
import form from "../data/dishForm.json";

function CreateForm() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [imgURL, setImgURL] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	return (
		<form className="add-form container">
			<h3>Add a new dish</h3>
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.description} state={[description, setDescription]} />
			<InputField setup={form.price} state={[price, setPrice]} />
			<div className="upload-img">
				<InputField setup={form.imgURL} state={[imgURL, setImgURL]} />

				<label className="custom-file-upload" htmlFor="file-upload">
					Or upload image:
					<img src="/images/upload-to-cloud.png" alt="upload" />
				</label>
				<input
					id="file-upload"
					className="file-upload"
					type="file"
					accept="image/png, image/jpg"
				/>
			</div>

			<button className="form-button">Submit</button>
			<button className="form-button">Reset</button>
		</form>
	);
}

export default CreateForm;
