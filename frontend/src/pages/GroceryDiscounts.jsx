import React, { useState } from "react";
import discountsData from "../data/publix-discounts.json";
import "../assets/GroceryDiscounts.css";

function GroceryDiscounts() {
  const [selectedStore, setSelectedStore] = useState(null);
  const discounts = discountsData;

  // helper to add an item to meal plan
  const addToMealPlan = (discount) => {
    const existing = JSON.parse(localStorage.getItem("mealPlanItems")) || [];
    existing.push(discount);
    localStorage.setItem("mealPlanItems", JSON.stringify(existing));
    alert(`${discount.item} added to your meal plan!`);
  };

  const stores = [...new Set(discounts.map((d) => d.store).filter(Boolean))];
  const filteredDiscounts = selectedStore
    ? discounts.filter((d) => d.store === selectedStore)
    : discounts;

  return (
    <main className="discounts-page">
      <h2>Select a Store</h2>
      <div className="store-buttons">
        <button
          className={`store-btn ${selectedStore === null ? "active" : ""}`}
          onClick={() => setSelectedStore(null)}
        >
          Show All
        </button>
        {stores.map((store, i) => (
          <button
            key={i}
            className={`store-btn ${selectedStore === store ? "active" : ""}`}
            onClick={() => setSelectedStore(store)}
          >
            {store}
          </button>
        ))}
      </div>

      <h3>
        {selectedStore
          ? `Discounts at ${selectedStore}`
          : "All Available Discounts"}
      </h3>

      {filteredDiscounts.length === 0 ? (
        <p>No discounts found for this store.</p>
      ) : (
        <div className="discount-list">
          {filteredDiscounts.map((discount, idx) => (
            <div key={idx} className="discount-card">
              <h4>{discount.item}</h4>
              <p>{discount.discount}</p>
              <p>
                <strong>Save:</strong>{" "}
                {discount.save_info || discount.price || "N/A"}
              </p>
              {discount.image_url && (
                <img
                  src={discount.image_url}
                  alt={discount.item}
                  style={{ width: "100px", marginTop: 8 }}
                />
              )}
              <button onClick={() => addToMealPlan(discount)}>
                Add to Meal Plan
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default GroceryDiscounts;
