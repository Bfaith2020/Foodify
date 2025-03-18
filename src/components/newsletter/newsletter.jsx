import React from "react";
import "./newsletter.css";


const Newsletter = () => {
    return (
        <section className="newsletter-section">
    <h2>Subscribe to Our Newsletter</h2>
    <p>Stay updated with the latest recipes and food trends!</p>
    <form id="newsletterForm" className="newsletter-form">
        <input type="email" id="emailInput" placeholder="Enter your email" required/>
        <button type="submit">Subscribe</button>
    </form>
   {/*  <!-- Hidden confirmation message --> */}
    <div id="confirmationMessage" style="display: none;">
        <p>🎉 Thank you for signing up!</p>
    </div>
</section>
    );
}

export default Newsletter;