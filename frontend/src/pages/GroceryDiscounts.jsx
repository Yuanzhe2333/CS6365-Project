import React, { useState } from "react";

function GroceryDiscounts() {
  const discounts = [
    {
      id: 1,
      item: "Apples",
      discount: "25% OFF",
      store: "Local Market",
      price: "$1.50/lb",
    },
    {
      id: 2,
      item: "Chicken Breast",
      discount: "10% OFF",
      store: "Fresh Foods",
      price: "$4.00/lb",
    },
    {
      id: 3,
      item: "Pasta",
      discount: "50% OFF",
      store: "Grocery Villa",
      price: "$1.00/box",
    },
    {
      id: 4,
      item: "Milk",
      discount: "15% OFF",
      store: "Local Market",
      price: "$2.00/gallon",
    },
  ];

  const [selectedStore, setSelectedStore] = useState(null);

  const stores = [...new Set(discounts.map(d => d.store))]; // Unique store list

  const filteredDiscounts = selectedStore
    ? discounts.filter(d => d.store === selectedStore)
    : [];

  return (
    <main className="discounts-page">
      <h2>Select a Store</h2>
      <div className="store-buttons">
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

      {selectedStore && (
        <>
          <h3>Discounts at {selectedStore}</h3>
          <div className="discount-list">
            {filteredDiscounts.map(discount => (
              <div key={discount.id} className="discount-card">
                <h4>{discount.item}</h4>
                <p>{discount.discount}</p>
                <p>
                  <strong>Price:</strong> {discount.price}
                </p>
                <button>Add to Meal Plan</button>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default GroceryDiscounts;
