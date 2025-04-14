import React from "react"; // Import React to create the functional component
import "./seen.css"; // Import the CSS file for styling

// Define the Seen functional component
const Seen = () => {
    return (
      // Section container with a class for styling
      <section className="as-seen-in">
        
        {/* Section heading */}
        <h2>As Seen In</h2>
        
        {/* Carousel container */}
        <div className="carousel">
          
          {/* Track that holds all the scrolling images */}
          <div className="carousel-track">
            {/* Logos of various publications where Foodify has been featured */}
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Orange and Black Professional BBQ Food Restaurant Logo.webp" alt="Taste Daily"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Illustrated Fun Logo Featuring a Red Hot Chili Cartoon.webp" alt="Food Magazine"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Yellow, White and Black Spicy Food Logo.webp" alt="Gourmet Times"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Orange Black Illustration Abstract Resto and Food Logo.webp" alt="Healthy Eats"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Black and White Chef Food Logo.webp" alt="Recipe World"/>
            {/* Repeating images for a continuous scrolling effect */}
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Orange and Black Professional BBQ Food Restaurant Logo.webp" alt="Taste Daily"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Illustrated Fun Logo Featuring a Red Hot Chili Cartoon.webp" alt="Food Magazine"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Yellow, White and Black Spicy Food Logo.webp" alt="Gourmet Times"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Orange Black Illustration Abstract Resto and Food Logo.webp" alt="Healthy Eats"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Black and White Chef Food Logo.webp" alt="Recipe World"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Orange and Black Professional BBQ Food Restaurant Logo.webp" alt="Taste Daily"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Illustrated Fun Logo Featuring a Red Hot Chili Cartoon.webp" alt="Food Magazine"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Yellow, White and Black Spicy Food Logo.webp" alt="Gourmet Times"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Orange Black Illustration Abstract Resto and Food Logo.webp" alt="Healthy Eats"/>
            <img loading="lazy" src="%PUBLIC_URL%/Assets/Black and White Chef Food Logo.webp" alt="Recipe World"/>
          </div>
        </div>
      </section>
    );
};

// Export the component so it can be used elsewhere in the app
export default Seen;