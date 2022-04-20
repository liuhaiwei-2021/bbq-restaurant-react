import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

import Categories from "./pages/Categories";
import Dish from "./pages/Dish";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/App.css";
import Category from "./pages/Category";

function App() {
	return (
		<div className="main">
			<BrowserRouter>
				<Navigation />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/categories" element={<Categories />} exact />
						<Route path="/categories/:id" element={<Category />} exact />
						<Route path="/categories/:category/:id" element={<Dish />} exact />
						<Route path="/contact" element={<Contact />} exact />
						<Route path="/admin" element={<Admin />} exact />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
