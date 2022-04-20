import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Category from "./pages/Category";
import Product from "./components/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/menu" element={<Menu />} exact />
					<Route path="category/:categoryId" element={<Category />} exact />
					<Route path="/:category/:id" element={<Product />} exact />
					<Route path="/contact" element={<Contact />} exact />
					<Route path="/admin" element={<Admin />} exact />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
