import React from "react"; // Import React library
import "./hero.css"; // Import CSS for styling

// Hero component
const Hero = () => {
  return (
    <section className="hero">
      {/* Hero image */}
      <img src="./Assets/Strawberry-Arugula-Salad-with-He.webp" alt="Delicious Food" className="hero-image" />

      {/* Hero text */}
      <div className="hero-text">
        <h2>Discover Delicious Recipes</h2>
        <p>Find and share everyday cooking inspiration.</p>

        {/* Explore Recipes button */}
        <button id="btn-explore" className="explore-btn">Explore Recipes</button>
      </div>
    </section>
  );
}

export default Hero; // Export the Hero component