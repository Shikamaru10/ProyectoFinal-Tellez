import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <h2>Tienda de Hardware</h2>
          </Link>
        </li>
        <li>
          <Link to="/category/Tarjetas">Tarjetas de video</Link>
        </li>
        <li>
          <Link to="/category/Procesadores">Procesadores</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
