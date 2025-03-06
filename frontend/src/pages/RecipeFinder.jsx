import React from "react";

function RecipeFinder() {
  return (
    <main className="recipe-finder-page">
      <h2>Recipe Finder</h2>
      <p className="recipe-intro">
        Discover mouth-watering recipes based on your discounted groceries!
      </p>

      <div className="recipe-card">
        <h4>Apple Chicken Salad</h4>
        <p>Ingredients: Apples, Chicken Breast, Lettuce, Walnuts</p>
        <button>View Recipe</button>
      </div>

      <div className="recipe-card">
        <h4>Pasta Primavera</h4>
        <p>Ingredients: Pasta, Mixed Vegetables, Olive Oil, Cheese</p>
        <button>View Recipe</button>
      </div>
    </main>
  );
}

export default RecipeFinder;
