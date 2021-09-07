import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/">
        <img
          onClick={() => {
            window.url = "";
          }}
          alt="Logo"
          src="https://www.kindpng.com/picc/m/166-1669691_transparent-pokeball-pixel-png-pixel-pokeball-png-png.png"
          className="logo"
        />
      </Link>
      <ul className="nav-links">
        {location.pathname !== "/" ? (
          <Link to="/">
            <li className="nav-route-links">Go back</li>
          </Link>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}
