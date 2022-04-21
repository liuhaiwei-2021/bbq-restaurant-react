//NPM packages
import { createContext, useState, useEffect } from "react";
//File package
import { getCollection } from "../scripts/fireStore";
export const DishContext = createContext();

const DishContextProvider = (props) => {
	//state
	const [categories, setCategories] = useState([]);
	const [status, setStatus] = useState(0);

	// Methods
	useEffect(() => {
		async function loadData() {
			const data = await getCollection("categories");
			setCategories(data);
			setStatus(1);
		}
		loadData();
	}, []);

	const values = { categories };

	return <DishContext.Provider value={values}>{props.children}</DishContext.Provider>;
};

export default DishContextProvider;
