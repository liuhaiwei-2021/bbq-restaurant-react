//NPM packages
import { useEffect, useState } from "react";

// Project file
import { readCollection } from "../scripts/fireStore";
import CategoryCard from "../components/CategoryCard";
import Loader from "../scripts/Loader";
import "../styles/Categories.css";

export default function Categories() {
  // Local state
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Methods
  useEffect(() => {
    async function loadData() {
      const payload = await readCollection("categories");
      const { data, error } = payload;
      error ? loadFail(data) : loadSucceed(data);
    }
    loadData();
  }, []);

  function loadSucceed(data) {
    setCategories(data);
    setStatus(1);
  }

  function loadFail(data) {
    console.log(data);
    setStatus(2);
  }

  // Safeguard
  if (status === 0) return <Loader />;
  if (status === 2)
    return <p>Error... ❌,opps! our service have problem! we will fix it!</p>;

  const Categories = categories.map((category, index) => (
    <CategoryCard key={index} category={category} />
  ));

  return <div className="category-group container">{Categories}</div>;
}
