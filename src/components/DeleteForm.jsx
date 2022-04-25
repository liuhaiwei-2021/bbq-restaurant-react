import { readCollection, deleteDocument } from "../scripts/fireStore";
import { useEffect, useState } from "react";

function DeleteForm() {
  const [categories, setCategories] = useState([]); // unused code-1

  const [beefs, setBeefs] = useState([]);

  // Commented code -1
  // Methods
  // useEffect(() => {
  // 	async function loadData() {
  // 		const payload = await readCollection("categories");
  // 		const { data } = payload;
  // 		setCategories(data);
  // 	}

  // 	loadData();
  // }, []);
  useEffect(() => {
    async function loadData() {
      const payload = await readCollection("categories/beef/content");
      const { data, error, loading } = payload;
      setBeefs(data);
      console.log(beefs);
    }
    loadData();
  }, []);

  return (
    <div>
      {/* {beefs.map((beef, index) => (
				<span key={index}>{beef.id}</span>
			))} */}

      {/* <ul>
				{categories.map((category, index) => (
					<li key={index}>{category.id}</li>
				))}
			</ul> */}
      <form className="add-form container">
        <h3>Delete a new dish</h3>
        <select className="category-select">
          {beefs.map((beef, index) => (
            <option key={index} value={beef.id}>
              {beef.name}
            </option>
          ))}
        </select>
        <select className="form-select">
          <option>Name</option>
          <option value="1">dish 1</option>
        </select>
        <button className="delete">Delete</button>
      </form>
    </div>
  );
}

export default DeleteForm;
