import React from 'react'
import "./Trending.css"; // Import the CSS file for styling

function Trending() {
  return (
    <div className='featured-recipes'>
       
    <div className="recipe-heading">
        <h2>Trending Recipes</h2>
    </div>
    <section className="recipe-grid" id="trending-recipes">
       
        <div className="loading">Loading trending recipes...</div>
    </section>
    </div>
  )
}

export default Trending;