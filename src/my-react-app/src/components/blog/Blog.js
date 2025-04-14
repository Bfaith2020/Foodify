import React from 'react'
import "./Blog.css"; // Import the CSS file for styling

function Blog() {
  return (
    <div className='blog-section'>
    <h2>From Our Blog</h2>
    <div className="blog-grid">
        
        <div className="blog-post">
            <img src="./assets/eggs.jpg" alt="Blog Post 1"/>
            <h3>10 Healthy Snacks for Busy Days</h3>
            <p>Discover quick and healthy snacks to keep you energized throughout the day.</p>
            <a href="./blog1.html" className="btn">Read More</a>
        </div>
      
        <div className="blog-post">
            <img src="./assets/meal prep.jpg" alt="Blog Post 2"/>
            <h3>How to Meal Prep Like a Pro</h3>
            <p>Learn the secrets to efficient meal prepping and save time in the kitchen.</p>
            <a href="./blog2.html" className="btn">Read More</a>
        </div>
        
        <div className="blog-post">
            <img src="./assets/salad.jpg" alt="Blog Post 3"/>
            <h3>5 Delicious Vegan Recipes</h3>
            <p>Try these tasty vegan recipes that are sure to impress your family and friends.</p>
            <a href="./blog3.html" className="btn">Read More</a>
        </div>
    </div>

    </div>
  )
}

export default Blog