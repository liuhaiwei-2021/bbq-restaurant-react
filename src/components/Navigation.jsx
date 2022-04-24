//NPM packages
import { Link, NavLink } from "react-router-dom";
//Project files
import "../styles/Navigation.css";

function Navigation() {
	return (
		<div className="nav-bar">
			<div className="nav-container">
				<div>
					<Link className="navbar-link" to="/">
						<img className="logo" src="/images/logo.png" alt="logo" />
						<span className="restaurant-name">SMOKE & GRILL</span>
					</Link>
				</div>

				<ul className="navbar-items">
					<li className="nav-item">
						<NavLink className="nav-link" to="/categories" exact="true">
							Menu
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/contact" exact="true">
							Contact
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/admin" exact="true">
							Admin
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
