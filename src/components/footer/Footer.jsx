import React from "react";
import "./footer.css";


const Footer = () => {
 return(
    <footer className="footer">{/*  <!-- Defines the footer section of the webpage --> */}
    <div className="footer-container"> {/* <!-- Container to structure footer content --> */}
        
       {/*  <!-- Logo and Branding Section --> */}
        <div className="footer-logo">
            <h2>Foodify<span className="trademark">&reg;</span></h2> {/* <!-- Website name with registered trademark symbol --> */}
            <p>Delicious Recipes That Inspire&trade;</p> {/* <!-- Tagline for branding --> */}
        </div>

       {/*  <!-- Quick Links Section --> */}
        <div className="footer-links">
            <h3>Quick Links</h3> {/* <!-- Section title --> */}
            <ul>{/*  <!-- Unordered list for navigation links --> */}
                <li><a href="./index.html">Home</a></li> {/* <!-- Link to Home page --> */}
                <li><a href="./search.html">Recipes</a></li> {/* <!-- Link to Recipes page --> */}
                <li><a href="./about.html">About Us</a></li> {/* <!-- Link to About Us page --> */}
                <li><a href="./contact.html">Contact</a></li> {/* <!-- Link to Contact page --> */}
            </ul>
        </div>
       {/*  <!-- Social Media Links Section --> */}
        <div className="footer-socials">
            <h3>Follow Us</h3> {/* <!-- Section title --> */}

            <div className="social-icons">{/*  <!-- Container for social media icons --> */}
                <a href="https://www.facebook.com/Foodifyrecipes/" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a> {/* <!-- Facebook icon/link --> */}
                <a href="https://www.instagram.com/foodify_co/" className="social-icon instagram"><i className="fab fa-instagram"></i></a>{/*  <!-- Instagram icon/link --> */}
                <a href="https://za.pinterest.com/foodify/" className="social-icon pinterest"><i className="fab fa-pinterest"></i></a> {/* <!-- Pinterest icon/link --> */}
                <a href="https://www.youtube.com/@foodify_madhu" className="social-icon youtube"><i className="fab fa-youtube"></i></a>{/*  <!-- YouTube icon/link --> */}
            </div>
        </div>
    </div>

   {/*  <!-- Copyright and Footer Bottom Section --> */}
    <div className="footer-bottom">
        <p>&copy; 2025 Foodify. All Rights Reserved.</p> {/* <!-- Copyright notice --> */}
    </div>
</footer>
 );
}
export default Footer;