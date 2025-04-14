import React from "react"; // Import React to create the functional component
import "./newsletter.css"; // Import the CSS file for styling the newsletter section

// Define the Newsletter functional component
const Newsletter = () => {
    return (
      // Section containing the newsletter subscription form
      <section className="newsletter-section">
        
        {/* Section heading */}
        <h2>Subscribe to Our Newsletter</h2>
        
        {/* Short description */}
        <p>Stay updated with the latest recipes and food trends!</p>
        
        {/* Newsletter subscription form */}
        <form id="newsletterForm" className="newsletter-form">
            {/* Email input field */}
            <input type="email" id="emailInput" placeholder="Enter your email" required/>
            {/* Submit button */}
            <button type="submit">Subscribe</button>
        </form>
        
        {/* Confirmation message (hidden by default) */}
        <div id="confirmationMessage" style={{ display: 'none' }}>
            <p>🎉 Thank you for signing up!</p>
        </div>

      </section>
    );
};

// Export the component so it can be used in other parts of the app
export default Newsletter;
