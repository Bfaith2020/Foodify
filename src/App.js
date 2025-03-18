import React from 'react'; // Import React library
import Navbar from './components/navbar/Navbar'; // Navbar component
import Hero from './components/hero/Hero'; // Hero section component
import Categories from './components/popularCategories/Categories'; // Popular categories component
import Footer from './components/footer/Footer'; // Footer component

// Main App component
function App() {
  return (
    <div>
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Popular categories section */}
      <Categories />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; // Export the App component