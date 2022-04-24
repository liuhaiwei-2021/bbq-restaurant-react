//NPM packages
import { useState } from "react";
// project files

import form from "../data/dishForm.json";
import InputField from "./InputField";
import { createDocument } from "../scripts/fireStore";
import { createFile } from "../scripts/cloudStorage";

export default function CreateForm() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [imgURL, setImgURL] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newDish = {
			name: name,
			category: category.toLowerCase(),
			imgURL: "",
			description: description,
			price: price,
		};
		const path = "/categories/" + category + "/content/";
		const fileName = `${category}-${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);

		newDish.imgURL = imgURL;

		const payload = await createDocument("/categories/" + category + "/content/", newDish);
		const { error, loading } = payload;
		setError(error);
		setLoading(loading);
		resetForm();
	}

	async function onImageChoose(event) {
		const file = event.target.files[0];

		setFile(file);
	}

	function resetForm() {
		setName("");
		setCategory("");
		setImgURL("");
		setDescription("");
		setPrice("");
	}

	return (
		<form onSubmit={onCreate} className="add-form container">
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
					onChange={onImageChoose}
					id="file-upload"
					className="file-upload"
					type="file"
					accept="image/png, image/jpg"
				/>
			</div>

			<button className="form-button">Submit</button>
			<button onClick={resetForm} className="form-button">
				Cancel
			</button>
		</form>
	);
}
