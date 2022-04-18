import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Category from "./components/Category";
import Product from "./components/Product";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/menu" element={<Menu />} exact />
					<Route path="/category" element={<Category />} exact />
					<Route path="/:category/:id" element={<Product />} exact />
					<Route path="/contact" element={<Contact />} exact />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
