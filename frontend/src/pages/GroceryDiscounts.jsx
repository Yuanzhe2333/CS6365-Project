import React from "react";

function GroceryDiscounts() {
  // Sample data
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
  ];

  return (
    <main className="discounts-page">
      <h2>Discounted Groceries</h2>
      <div className="discount-list">
        {discounts.map((discount) => (
          <div key={discount.id} className="discount-card">
            <h4>{discount.item}</h4>
            <p>{discount.discount}</p>
            <p>
              <strong>Store:</strong> {discount.store}
            </p>
            <p>
              <strong>Price:</strong> {discount.price}
            </p>
            <button>Add to Meal Plan</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GroceryDiscounts;
