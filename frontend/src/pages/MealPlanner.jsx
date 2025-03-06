import React from "react";

function MealPlanner() {
  return (
    <main className="meal-planner-page">
      <h2>Meal Planner</h2>
      <p className="meal-planner-intro">
        Select discounted items to create your ideal meal plan for the week.
      </p>

      {/* Example static items. In a real app, you'd fetch or manage these via state. */}
      <div className="selected-item">
        <h4>Selected Item: Apples</h4>
        <p>Amount: 2 lbs</p>
      </div>

      <div className="selected-item">
        <h4>Selected Item: Chicken Breast</h4>
        <p>Amount: 4 pieces</p>
      </div>

      <button>Generate Shopping List</button>
    </main>
  );
}

export default MealPlanner;
