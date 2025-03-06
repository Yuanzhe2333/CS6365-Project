/* src/App.jsx */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import GroceryDiscounts from "./pages/GroceryDiscounts";
import MealPlanner from "./pages/MealPlanner";
import RecipeFinder from "./pages/RecipeFinder";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discounts" element={<GroceryDiscounts />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/recipes" element={<RecipeFinder />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
