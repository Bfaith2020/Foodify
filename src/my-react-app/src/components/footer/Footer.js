import React from "react"; // Import React for creating a functional component
import "./footer.css"; // Import the CSS file for styling the footer

// Define the Footer component
const Footer = () => {
  return (
    // Main footer container with background color, text color, padding, and margin
    <footer className="footer bg-gray-900 text-white p-6 mt-10">
      
      {/* Wrapper div to structure the footer layout */}
      <div className="footer-container flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo and Branding Section */}
        <div className="footer-logo text-center md:text-left">

          {/* Website title/logo */}
          <h2 className="text-2xl font-bold">
            Foodify<span className="trademark">®</span>
          </h2>
          {/* Website tagline */}
          <p className="text-sm">
            Delicious Recipes That Inspire<span className="trademark">™</span>
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links text-center md:text-left">

          {/* Quick links title */}
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">

            {/* Navigation links for different pages */}
            <li><a href="./index.html" className="hover:text-red-400">Home</a></li>
            <li><a href="./search.html" className="hover:text-red-400">Recipes</a></li>
            <li><a href="./about.html" className="hover:text-red-400">About Us</a></li>
            <li><a href="./contact.html" className="hover:text-red-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-socials text-center md:text-left">

          {/* Social media title */}
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            
            {/* Social media icons with links to respective platforms */}
            <a href="https://www.facebook.com/Foodifyrecipes/" className="text-blue-500 text-xl">
              <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
            </a>
            <a href="https://www.instagram.com/foodify_co/" className="text-pink-500 text-xl">
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
            <a href="https://za.pinterest.com/foodify/" className="text-red-500 text-xl">
              <i className="fab fa-pinterest"></i> {/* Pinterest icon */}
            </a>
            <a href="https://www.youtube.com/@foodify_madhu" className="text-red-600 text-xl">
              <i className="fab fa-youtube"></i> {/* YouTube icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom text-center mt-6">
        {/* Copyright notice */}
        <p>&copy; 2025 Foodify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Export Footer component so it can be used in other parts of the app
export default Footer;
