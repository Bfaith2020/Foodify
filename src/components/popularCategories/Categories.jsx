import React from "react"; // Import React library
import "./categories.css"; // Import CSS for styling

// Categories component
const Categories = () => {
  return (
    <section className="popular-categories">
      {/* Section title */}
      <h2>Popular Categories</h2>
      <p>Discover our most loved food categories</p>

      {/* Categories container */}
      <div className="categories-container">
        {/* Category card: Fresh Salads */}
        <div className="category-card">
          <img src="./Assets/roast-fish-and-vegetable-salad-o.webp" alt="Category 1" />
          <div className="category-content">
            <h3>Fresh Salads</h3>
            <p>Healthy and delicious salads with fresh ingredients.</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* Category card: Chocolate Cake */}
        <div className="category-card">
          <img src="./Assets/slice-of-chocolate-cake-with-gla.webp" alt="Category 2" />
          <div className="category-content">
            <h3>Chocolate Cake</h3>
            <p>Power-packed bowls with a mix of flavors.</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* Category card: Steak & Grill */}
        <div className="category-card">
          <img src="./Assets/beef-steaks-on-the-grill.webp" alt="Category 3" />
          <div className="category-content">
            <h3>Steak & Grill</h3>
            <p>Perfectly grilled meats with a touch of finesse.</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories; // Export the Categories component