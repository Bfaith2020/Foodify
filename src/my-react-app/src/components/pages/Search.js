import React, { useState } from "react";
import "./search.css";

const Search = () => {
  const API_KEY = "99332e3f-87af-4409-b742-08afad63177c";
  const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

  // Local state for search query, meal results, selected meal details, reviews, and review text.
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [reviews, setReviews] = useState({});
  const [newReview, setNewReview] = useState("");

  // Handle search button click by calling the API and updating the meals state.
  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await fetch(`${BASE_URL}?search=${query}&key=${API_KEY}`);
      const data = await response.json();

      if (data.status !== "success" || !data.data?.recipes) {
        throw new Error("No recipes found");
      }

      // Transform the forkify recipe data into a format that matches the render expectation.
      const transformedMeals = data.data.recipes.map((recipe) => ({
        idMeal: recipe.id,
        strMeal: recipe.title,
        strMealThumb: recipe.image_url,
        strCategory: recipe.publisher, // using publisher as a placeholder for category
        strInstructions: recipe.instructions || "No instructions available.",
        strYoutube: recipe.source_url || "",
      }));
      setMeals(transformedMeals);
    } catch (error) {
      console.error("Error:", error);
      setMeals([]);
      // Optionally you might add a state to display the error.
    }
  };

  // Fetch detailed meal info. This version fetches from the same API using the recipe ID.
  const fetchMealDetails = async (idMeal) => {
    try {
      const response = await fetch(`${BASE_URL}/${idMeal}?key=${API_KEY}`);
      const data = await response.json();
      if (data.status !== "success" || !data.data?.recipe) {
        throw new Error("Failed to fetch recipe details");
      }
      const recipe = data.data.recipe;
      // Transform details in a similar manner
      const mealDetails = {
        idMeal: recipe.id,
        strMeal: recipe.title,
        strMealThumb: recipe.image_url,
        strCategory: recipe.publisher,
        strInstructions: recipe.instructions || "No instructions provided.",
        strYoutube: recipe.source_url || "",
      };
      setSelectedMeal(mealDetails);
    } catch (error) {
      console.error(error);
    }
  };

  // Update reviews for a meal.
  const handleReviewSubmit = (idMeal) => {
    if (!newReview.trim()) return;
    setReviews((prevReviews) => {
      const mealReviews = prevReviews[idMeal] || [];
      return { ...prevReviews, [idMeal]: [...mealReviews, newReview] };
    });
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
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
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
          {selectedMeal.strYoutube && (
            <div className="recipe-link">
              <a
                href={selectedMeal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </div>
          )}

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
