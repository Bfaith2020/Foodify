import React from "react"; // Import React to create the component
import "./hero2.css"; // Import the CSS file for styling

// Define the HeroSection2 functional component
const Hero2= () => {
    return (
      // Main section for the second hero section
      <div className="hero2-container">

        {/* Background video that plays automatically, is muted, and loops */}
        <video autoPlay muted loop>
          <source src="%PUBLIC_URL%/Assets/5944601-hd_1920_1080_25fps.webm" type="video/webm" />
          {/* Fallback message if the browser does not support the video tag */}
          Your browser does not support the video tag.
        </video>

        {/* Text overlay on top of the video */}
        <div className="hero-content2">
          More Than Just a Recipe
        </div>

      </div> // End of hero2-container section
    );
};

// Export the component so it can be used elsewhere in the app
export default Hero2;
