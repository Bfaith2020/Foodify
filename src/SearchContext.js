import React, { createContext, useState, useCallback } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const API_KEY = "99332e3f-87af-4409-b742-08afad63177c";
  const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [reviews, setReviews] = useState({});
  const [newReview, setNewReview] = useState("");

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    try {
      const response = await fetch(`${BASE_URL}?search=${query}&key=${API_KEY}`);
      const data = await response.json();

      if (data.status !== "success" || !data.data?.recipes) {
        throw new Error("No recipes found");
      }

      const transformedMeals = data.data.recipes.map((recipe) => ({
        idMeal: recipe.id,
        strMeal: recipe.title,
        strMealThumb: recipe.image_url,
        strCategory: recipe.publisher,
        strInstructions: recipe.instructions || "No instructions available.",
        strYoutube: recipe.source_url || "",
      }));
      setMeals(transformedMeals);
    } catch (error) {
      console.error("Error:", error);
      setMeals([]);
    }
  }, [query, API_KEY, BASE_URL]);

  const fetchMealDetails = useCallback(async (idMeal) => {
    try {
      const response = await fetch(`${BASE_URL}/${idMeal}?key=${API_KEY}`);
      const data = await response.json();
      if (data.status !== "success" || !data.data?.recipe) {
        throw new Error("Failed to fetch recipe details");
      }
      const recipe = data.data.recipe;
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
  }, [API_KEY, BASE_URL]);

  const handleReviewSubmit = useCallback((idMeal) => {
    if (!newReview.trim()) return;
    setReviews((prevReviews) => {
      const mealReviews = prevReviews[idMeal] || [];
      return { ...prevReviews, [idMeal]: [...mealReviews, newReview] };
    });
    setNewReview("");
  }, [newReview]);

  const value = {
    query,
    setQuery,
    meals,
    setMeals,
    selectedMeal,
    setSelectedMeal,
    reviews,
    setReviews,
    newReview,
    setNewReview,
    handleSearch,
    fetchMealDetails,
    handleReviewSubmit,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};