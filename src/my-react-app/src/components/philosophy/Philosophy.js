import React from "react"; // Import React to create the functional component
import "./philosophy.css"; // Import the CSS file for styling the philosophy section

// Define the FoodifyPhilosophy functional component
const FoodifyPhilosophy = () => {
    return (
      // Section that contains the philosophy of Foodify
      <section className="foodify-philosophy">
        
        {/* Main heading displaying the philosophy statement */}
        <h2>Delicious Recipes That Inspire™</h2>
        
        {/* Highlighted tagline emphasizing the philosophy */}
        <p className="highlight-text">
          Easy-to-Make. Inspired by Cultures. Loved by All.
        </p>
        
        {/* Additional text explaining the philosophy in more detail */}
        <p className="philosophy-text">
          We believe that cooking should be fun, accessible, and inspiring. <br />
          Great food isn't just for chefs—it's for everyone.
        </p>
      </section>
    );
};

// Export the component so it can be used in other parts of the app
export default FoodifyPhilosophy;
