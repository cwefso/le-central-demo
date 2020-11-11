import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<section className="nav-logo" aria-label="le central">
				<NavLink
					to="/"
					style={{ textDecoration: "none", color: "inherit" }}
					aria-label="home"
				>
					<div className="logo">Le Central</div>
					<div className="subtext">Affordable French</div>
				</NavLink>
			</section>
			<section className="links" aria-label="links">
				<NavLink
					to="/menu"
					style={{ textDecoration: "none", color: "inherit" }}
					aria-label="menu"
				>
					Menu
				</NavLink>
				<NavLink
					to="/about-us"
					style={{ textDecoration: "none", color: "inherit" }}
					aria-label="about-us"
				>
					About Us
				</NavLink>
			</section>
		</nav>
	);
}

export default Nav;
