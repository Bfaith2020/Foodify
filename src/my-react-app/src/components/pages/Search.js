import React, { useState, useEffect } from "react";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [reviews, setReviews] = useState({});
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
      fetchMeals(searchQuery);
    }
  }, []);

  const fetchMeals = async (searchQuery) => {
    if (!searchQuery) return;
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  const handleSearch = () => {
    fetchMeals(query);
  };

  const handleReviewSubmit = (mealId) => {
    if (newReview.trim() === "") return;
    setReviews({ ...reviews, [mealId]: [...(reviews[mealId] || []), newReview] });
    setNewReview("");
  };

  return (
    <div className="container">
      <div className="meal-search">
        <h2 className="title">FOODIFY</h2>
        <div className="meal-search-box">
          <input
            type="text"
            className="search-control"
            placeholder="Enter an ingredient"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="meal-result">
        <h2 className="title">Your Search Results:</h2>
        <div id="meal">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal.idMeal} className="meal-item">
                <div className="meal-img">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <div className="meal-name">
                  <h3>{meal.strMeal}</h3>
                  <button onClick={() => fetchMealDetails(meal.idMeal)}>
                    Get Recipe
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">Sorry, no meals found!</p>
          )}
        </div>
      </div>

      {selectedMeal && (
        <div className="meal-details showRecipe">
          <button onClick={() => setSelectedMeal(null)}>Close</button>
          <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
          <p className="recipe-category">{selectedMeal.strCategory}</p>
          <div className="recipe-instruct">
            <h3>Instructions:</h3>
            <p>{selectedMeal.strInstructions}</p>
          </div>
          <div className="recipe-meal-img">
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
          </div>
          <div className="recipe-link">
            <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>

          <div className="meal-reviews">
            <h3>User Reviews:</h3>
            <div>
              {(reviews[selectedMeal.idMeal] || []).map((review, index) => (
                <p key={index}>{review}</p>
              ))}
            </div>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Leave a review"
            />
            <button onClick={() => handleReviewSubmit(selectedMeal.idMeal)}>
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
