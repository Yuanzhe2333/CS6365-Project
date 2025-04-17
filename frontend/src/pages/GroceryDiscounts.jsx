import React, { useState } from "react";
import discountsData from "../data/publix-discounts.json";
import "../assets/GroceryDiscounts.css"; // ✅ Import here
function GroceryDiscounts() {
  const [selectedStore, setSelectedStore] = useState(null);
  const discounts = discountsData;

  // Debug: log the raw loaded JSON
  console.log("✅ Loaded discount data:", discounts);

  // Collect unique store names
  const stores = [...new Set(discounts.map(d => d.store).filter(Boolean))];

  // Filtered discounts based on selected store
  const filteredDiscounts = selectedStore
    ? discounts.filter(d => d.store === selectedStore)
    : discounts; // <- show all by default for debugging

  // Debug: log filtered results
  console.log("🎯 Filtered discounts:", filteredDiscounts);

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
        {stores.map((store, index) => (
          <button
            key={index}
            className={`store-btn ${selectedStore === store ? "active" : ""}`}
            onClick={() => setSelectedStore(store)}
          >
            {store}
          </button>
        ))}
        
      </div>

      <h3>
        {selectedStore ? `Discounts at ${selectedStore}` : "All Available Discounts"}
      </h3>

      {filteredDiscounts.length === 0 ? (
        <p>No discounts found for this store.</p>
      ) : (
        <div className="discount-list">
          {filteredDiscounts.map((discount, index) => (
            <div key={index} className="discount-card">
              <h4>{discount.item}</h4>
              <p>{discount.discount}</p>
              <p><strong>Save:</strong> {discount.save_info || discount.price || "N/A"}</p>
              {discount.image_url && (
                <img
                  src={discount.image_url}
                  alt={discount.item}
                  style={{ width: "100px", height: "auto", marginTop: "8px" }}
                />
              )}
              <button>Add to Meal Plan</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default GroceryDiscounts;
