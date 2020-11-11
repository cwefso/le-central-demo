import React from "react";
import "./Nav.css";
import { NavLink, useLocation} from "react-router-dom";

function Nav() {
  const location = useLocation();
  console.log(location.pathname)

  if(location === "/menu"){
    return (
      <nav>
      <section className="nav-logo" aria-label="le central">
        <h2>Le Central</h2>
        <p>Affordable French</p>
      </section>
      <section className="links" aria-label="links">
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="home">Home</NavLink>
        <NavLink to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="about-us">About Us</NavLink>
      </section>
    </nav>
    )
  }
  
  return (
    <nav>
      <section className="nav-logo" aria-label="le central">
        <h2>Le Central</h2>
        <p>Affordable French</p>
      </section>
      <section className="links" aria-label="links">
        {location === "/menu" && 
          (
            <>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="home">Home</NavLink>
            <NavLink to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="about-us">About Us</NavLink>
            </>
          )
        }
        {location === "/about-us" && 
          (
            <>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="home">Home</NavLink>
            <NavLink to="/menu" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="menu">Menu</NavLink>
            </>
          )
        }
        <NavLink to="/menu" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="menu">Menu</NavLink>
        <NavLink to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="about-us">About Us</NavLink>
      </section>

    </nav>
  );
}

export default Nav;