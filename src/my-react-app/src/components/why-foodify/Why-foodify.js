import React from "react"; // Import React to create the functional component
import "./why-foodify.css"; // Import the CSS file for styling

// Define the WhyFoodify functional component
const WhyFoodify = () => {
    return (
      // Section container with a class for styling
      <section className="why-foodify">
        
        {/* Section heading */}
        <h2>Why Choose Foodify?</h2>
        
        {/* Container for the benefits list */}
        <div className="benefits-container">
          
          {/* Benefit 1: Endless Recipes */}
          <div className="benefit">
            <i className="fas fa-utensils"></i> {/* Font Awesome icon */}
            <h3>Endless Recipes</h3> {/* Benefit title */}
            <p>Discover thousands of delicious recipes from all cuisines.</p> {/* Benefit description */}
          </div>

          {/* Benefit 2: Step-by-Step Guidance */}
          <div className="benefit">
            <i className="fas fa-book-open"></i>
            <h3>Step-by-Step Guidance</h3>
            <p>Easy-to-follow instructions for all skill levels.</p>
          </div>

          {/* Benefit 3: Personalized Suggestions */}
          <div className="benefit">
            <i className="fas fa-star"></i>
            <h3>Personalized Suggestions</h3>
            <p>Get tailored recommendations based on your taste.</p>
          </div>

          {/* Benefit 4: Community-Powered */}
          <div className="benefit">
            <i className="fas fa-users"></i>
            <h3>Community-Powered</h3>
            <p>Share and save recipes with food lovers worldwide.</p>
          </div>

        </div> {/* End of benefits-container */}
      </section> // End of why-foodify section
    );
};

// Export the component so it can be used elsewhere in the app
export default WhyFoodify;
