import React from "react"; // Import React to create the component
import "./hero.css"; // Import the CSS file for styling

// Define the Hero functional component
const Hero = () => {
  return (
    // Hero section containing the image and text
    <section className="hero">
      
      {/* Background or main image for the hero section */}
      <img 
        src="./Assets/Strawberry-Arugula-Salad-with-He.webp" 
        alt="Delicious Food" 
        className="hero-image"
      />

      {/* Hero text section with a heading, description, and button */}
      <div className="hero-text">
        <h2>Discover Delicious Recipes</h2> {/* Main heading */}
        <p>Find and share everyday cooking inspiration.</p> {/* Supporting text */}

        {/* Explore Recipes button */}
        <button id="btn-explore" className="explore-btn">
          Explore Recipes
        </button>
      </div>

    </section> // End of hero section
  );
};

// Export the component so it can be used elsewhere in the app
export default Hero;
