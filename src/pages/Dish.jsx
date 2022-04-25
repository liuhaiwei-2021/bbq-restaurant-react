//NPM packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Project file
import { readDocument, deleteDocument } from "../scripts/fireStore";
import { deleteFile } from "../scripts/cloudStorage";
import Loader from "../scripts/Loader";
import "../styles/Dish.css";

export default function Dish() {
  //properties
  const { category } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  // Local state
  const [dish, setDish] = useState({});
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Methods
  useEffect(() => {
    async function loadData() {
      const payload = await readDocument(
        "/categories/" + category + "/content",
        id
      );
      const { data, error } = payload;
      error ? loadFail(data) : loadSucceed(data);
    }
    loadData();
  }, []);
  function loadSucceed(data) {
    setDish(data);
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

  const { name, imgURL, description, price } = dish;

  async function onDelete() {
    deleteDocument(`categories/${category}/content`, id);
    await deleteFile(`/categories/${category}/content/${category}-${name}.png`);
    navigate(-1);
  }

  return (
    <div className="dish">
      <img className="dish-img" src={imgURL} alt="dish-card" />
      <div className="dish-info">
        <h3 className="dish-title">{name}</h3>
        <p>{description}</p>
        <p className="dish-price">{price} :-</p>
        <button onClick={() => navigate(-1)} className="go-back-button">
          Go back
        </button>
        <button className="delete-button" onClick={onDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}
