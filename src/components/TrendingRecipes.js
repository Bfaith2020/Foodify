import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api';

const TrendingRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTrending() {
      try {
        setLoading(true);
        const queries = ['pasta', 'pizza', 'salad', 'burger'];
        const randomQuery = queries[Math.floor(Math.random() * queries.length)];
        const trendingRecipes = await fetchRecipes(randomQuery);
        setRecipes(trendingRecipes.slice(0, 4)); // Limit to 4 recipes
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTrending();
  }, []);

  if (loading) return <div>Loading trending recipes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section id="trending-recipes">
      <h2>Trending Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe.id}>
            <img src={recipe.image_url} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>By {recipe.publisher}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingRecipes;