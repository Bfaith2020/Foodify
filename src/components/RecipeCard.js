import React from 'react';

const RecipeCard = React.memo(({ recipe, onViewRecipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image_url} alt={recipe.title} />
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>By: {recipe.publisher}</p>
        <button className="view-recipe-btn" onClick={() => onViewRecipe(recipe.id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
});

export default RecipeCard;