import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../favoritesSlice';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (idToRemove) => {
    dispatch(removeFavorite(idToRemove));
  };

  const handleViewRecipe = async (recipeId) => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=99332e3f-87af-4409-b742-08afad63177c`);
      const data = await response.json();

      console.log('RECIPE FROM FAVORITES:', data);

      const sourceUrl = data?.data?.recipe?.source_url || data?.data?.recipe?.url || null;

      if (sourceUrl) {
        window.open(sourceUrl, '_blank');
      } else {
        alert('Link unavailable for this recipe.');
      }
    } catch (error) {
      console.error('Error loading recipe:', error);
      alert('Failed to load recipe link.');
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="nav-bar">
        <div className="logo-container">
          <h1 className="logo">
            Foodify<span className="trademark">&reg;</span>
          </h1>
          <p className="tagline">Delicious Recipes That Inspire&trade;</p>
        </div>
      </header>

      {/* Favorites Section */}
      <section className="favorites-section">
        <h2>My Favorite Recipes</h2>
        <div id="favorites-container" className="favorites-container">
          {favorites.length === 0 ? (
            <p>No favorites yet.</p>
          ) : (
            favorites.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image_url} alt={recipe.title} />
                <div className="recipe-content">
                  <h3>{recipe.title}</h3>
                  <p>By: {recipe.publisher}</p>
                  <div className="recipe-actions">
                    <button 
                      className="remove-favorite-btn"
                      onClick={() => handleRemoveFavorite(recipe.id)}
                    >
                      Remove Favorite
                    </button>
                    <button 
                      className="view-recipe-btn"
                      onClick={() => handleViewRecipe(recipe.id)}
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
