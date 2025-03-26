/* src/components/Header.jsx */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="header-title">Grocery Discount Finder</h1>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/discounts">Discounts</Link>
        <Link to="/meal-planner">Meal Planner</Link>
        <Link to="/recipes">Recipe Finder</Link>
        <Link to="/ChatBot">ChatBot</Link>
      </nav>
    </header>
  );
}

export default Header;
