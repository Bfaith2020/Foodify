import React from 'react';
import "./Preferences.css"; // Import the CSS file for styling

function Preferences() {
  return (
    <div className='recipe-filter'>
    <div className="filter-container">
        <h2>Find Recipes For Your Diet</h2>
        <div className="filter-options">
            <div className="filter-group">
                <h3>Dietary Preferences</h3>
                <div className="filter-buttons">
                    <button className="filter-btn" data-query="vegetarian">Vegetarian</button>
                    <button className="filter-btn" data-query="vegan">Vegan</button>
                    <button className="filter-btn" data-query="pasta">Pasta</button>
                    <button className="filter-btn" data-query="pizza">Pizza</button>
                </div>
            </div>
            <div className="filter-group">
                <h3>Main Ingredient</h3>
                <div className="filter-buttons">
                    <button className="filter-btn" data-query="chicken">Chicken</button>
                    <button className="filter-btn" data-query="beef">Beef</button>
                    <button className="filter-btn" data-query="fish">Fish</button>
                    <button className="filter-btn" data-query="vegetables">Vegetables</button>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default  Preferences;