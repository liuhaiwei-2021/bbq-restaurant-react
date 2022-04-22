import InputField from "../components/InputField";
// NPM package
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
		<div className="admin container">
			<Tabs className="tabs" defaultIndex={1}>
				<TabList className="tab-list">
					<Tab className="tab-add">Add a new dish</Tab>
					<Tab className="tab-delete">Delete a dish</Tab>
				</TabList>

				<TabPanel>
					<form className="add-form container">
						<h3>Add a new dish</h3>
						<InputField setup={form.category} state={[category, setCategory]} />
						<InputField setup={form.name} state={[name, setName]} />
						<InputField
							setup={form.description}
							state={[description, setDescription]}
						/>
						<InputField setup={form.price} state={[price, setPrice]} />
						<div className="upload-img">
							<InputField setup={form.imgURL} state={[imgURL, setImgURL]} />
							<button className="btn-upload">
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
							</button>
						</div>

						<button className="form-button">Submit</button>
						<button className="form-button">Reset</button>
					</form>
				</TabPanel>
				<TabPanel>
					<form className="add-form container">
						<h3>Delete a new dish</h3>
						<select className="form-select">
							<option selected disabled>
								Category
							</option>
							<option value="1">Beef</option>
							<option value="2">Pork</option>
							<option value="3">Chicken</option>
							<option value="3">Vegetables</option>
						</select>
						<select className="form-select">
							<option selected>Name</option>
							<option value="1">dish 1</option>
							<option value="2">dish 2</option>
							<option value="3">dish 3</option>
							<option value="3">dish 4 </option>
						</select>
						<button className="delete">Delete</button>
					</form>
				</TabPanel>
			</Tabs>
		</div>
	);
}
