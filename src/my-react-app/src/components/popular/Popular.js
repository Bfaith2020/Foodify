import React from "react"; // Import React to create the functional component
import "./popular.css"; // Import the CSS file for styling the popular categories section

// Define the PopularCategories functional component
const PopularCategories = () => {
    return (
      // Section containing the popular food categories
      <section className="popular-categories">
        
        {/* Section heading */}
        <h2>Popular Categories</h2>
        
        {/* Short description about the categories */}
        <p>Discover our most loved food categories</p>
        
        {/* Container holding all the category cards */}
        <div className="categories-container">
          
          {/* Category Card - Fresh Salads */}
          <div className="category-card">
            {/* Category image */}
            <img src="./Assets/roast-fish-and-vegetable-salad-o.webp" alt="Fresh Salads" />
            
            {/* Category content section */}
            <div className="category-content">
              <h3>Fresh Salads</h3> {/* Category title */}
              <p>Healthy and delicious salads with fresh ingredients.</p> {/* Short description */}
              <div className="rating">⭐⭐⭐⭐⭐</div> {/* Star rating */}
            </div>
          </div>

          {/* Category Card - Chocolate Cake */}
          <div className="category-card">
            <img src="./Assets/slice-of-chocolate-cake-with-gla.webp" alt="Chocolate Cake" />
            <div className="category-content">
              <h3>Chocolate Cake</h3>
              <p>Power-packed bowls with a mix of flavors.</p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* Category Card - Steak & Grill */}
          <div className="category-card">
            <img src="./Assets/beef-steaks-on-the-grill.webp" alt="Steak & Grill" />
            <div className="category-content">
              <h3>Steak & Grill</h3>
              <p>Perfectly grilled meats with a touch of finesse.</p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

        </div> {/* End of categories container */}
      </section>
    );
};

// Export the component so it can be used in other parts of the app
export default PopularCategories;
