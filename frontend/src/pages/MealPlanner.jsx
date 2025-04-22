import React, { useState, useEffect } from "react";
// import "../assets/MealPlanner.css";

function MealPlanner() {
  const [mealItems, setMealItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mealPlanItems")) || [];
    setMealItems(saved);
  }, []);

  return (
    <main className="meal-planner-page">
      <h2>Meal Planner</h2>
      <p className="meal-planner-intro">
        Select discounted items to create your ideal meal plan for the week.
      </p>

      {mealItems.length === 0 ? (
        <p>No items selected yet.</p>
      ) : (
        mealItems.map((item, idx) => (
          <div key={idx} className="selected-item">
            <h4>Selected Item: {item.item}</h4>
            <p>Amount: {item.save_info || item.discount || "1 unit"}</p>
          </div>
        ))
      )}

      <button>Generate Shopping List</button>
    </main>
  );
}

export default MealPlanner;
