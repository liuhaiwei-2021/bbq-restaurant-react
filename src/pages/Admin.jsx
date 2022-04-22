import InputField from "../components/InputField";
// NPM package
import { useState } from "react";

// Project files
import form from "../data/dishForm.json";
import "../styles/Admin.css";

export default function Admin() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [imgURL, setImgURL] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	return (
		<div>
			<form className="add-form container">
				<h2>Add a new dish</h2>
				<InputField setup={form.category} state={[category, setCategory]} />
				<InputField setup={form.name} state={[name, setName]} />
				<InputField setup={form.description} state={[description, setDescription]} />
				<InputField setup={form.price} state={[price, setPrice]} />
				<div className="upload-img">
					<InputField setup={form.imgURL} state={[imgURL, setImgURL]} />
					<button className="btn-upload">
						<label class="custom-file-upload" for="file-upload">
							Or upload image:
							<img src="/images/upload-to-cloud.png" alt="upload" />
						</label>
						<input
							id="file-upload"
							className="file-upload"
							type="file"
							accept="image/png, image/jpg"
						/>
					</button>
				</div>

				<button className="form-button">Submit</button>
				<button className="form-button">Reset</button>
			</form>
		</div>
	);
}
