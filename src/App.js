import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Preferences from "./my-react-app/src/components/preferences/Preferences";
import Trending from "./my-react-app/src/components/Trending/Trending";
import Search from "./my-react-app/src/components/pages/Search";
import Blog from "./my-react-app/src/components/blog/Blog";
import Favorites from "./my-react-app/Favorites/Favorites";
import CookingTips from "./my-react-app/src/components/Cooking-tips/CookingTips";

const Navbar = lazy(() => import("./my-react-app/src/components/navbar/Navbar"));
const Hero = lazy(() => import("./my-react-app/src/components/hero/Hero"));
const PopularCategories = lazy(() => import("./my-react-app/src/components/popular/Popular"));
const WhyFoodify = lazy(() => import("./my-react-app/src/components/why-foodify/Why-foodify"));
const Seen = lazy(() => import("./my-react-app/src/components/seen/Seen"));
const FoodifyPhilosophy = lazy(() => import("./my-react-app/src/components/philosophy/Philosophy"));
const Hero2 = lazy(() => import("./my-react-app/src/components/hero2/Hero2"));
const Newsletter = lazy(() => import("./my-react-app/src/components/newsletter/Newsletter"));
const Footer = lazy(() => import("./my-react-app/src/components/footer/Footer"));
/* const Search = lazy(() => import("./pages/Search")); */

const API_KEY = '99332e3f-87af-4409-b742-08afad63177c';
const BASE_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';

// A component for toggling tip sections
function Tip({ title, children }) {
  const [show, setShow] = useState(false);
  return (
    <div className="tip">
      <div
        className="tip-title"
        onClick={() => setShow(!show)}
        style={{ cursor: 'pointer' }}
      >
        {title}
      </div>
      {show && <div className="tip-content">{children}</div>}
    </div>
  );
}

// Component to display trending recipes
function TrendingRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  async function fetchTrendingRecipes() {
    try {
      const queries = ['pasta', 'pizza', 'salad', 'burger'];
      const randomQuery = queries[Math.floor(Math.random() * queries.length)];
      const response = await fetch(`${BASE_URL}?search=${randomQuery}&key=${API_KEY}`);
      const data = await response.json();

      if (!data.data?.recipes) {
        throw new Error('No recipes found');
      }

      // Get 4 random recipes from the results
      const trending = data.data.recipes
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
      setRecipes(trending);
    } catch (error) {
      console.error('Error fetching trending recipes:', error);
      setError('Failed to load trending recipes. Please try again later.');
    }
  }

  useEffect(() => {
    fetchTrendingRecipes();
  }, []);

  return (
    <section id="trending-recipes">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        recipes.map((recipe) => (
          <div className="recipe-item" key={recipe.id}>
            <a
              href={`search.html?query=${encodeURIComponent(recipe.title)}`}
              className="recipe-link"
            >
              <img src={recipe.image_url} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <div className="recipe-outline">
                <p>By {recipe.publisher}</p>
              </div>
            </a>
          </div>
        ))
      )}
    </section>
  );
}

// A card component to show a single recipe, with favorite and view functionality
function RecipeCard({ recipe, favorites, onToggleFavorite, onViewRecipe }) {
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);
  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image_url} alt={recipe.title} />
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>By: {recipe.publisher}</p>
        <div className="recipe-actions">
          <button
            className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
            onClick={() => onToggleFavorite(recipe)}
          >
            {isFavorite ? '❤️ Remove Favorite' : '♡ Add Favorite'}
          </button>
          <button className="view-recipe-btn" onClick={() => onViewRecipe(recipe.id)}>
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

// Component to handle recipe search and display results
function SearchRecipes() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('foodifyFavorites')) || [];
  });

  async function fetchRecipes(searchQuery) {
    try {
      // Handle random search parameter
      if (searchQuery === 'random') {
        const randomQueries = [
          'pizza',
          'pasta',
          'salad',
          'chicken',
          'burger',
          'sushi',
          'curry',
          'steak',
        ];
        searchQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
      }

      const response = await fetch(`${BASE_URL}?search=${searchQuery}&key=${API_KEY}`);
      const data = await response.json();

      if (data.status !== 'success' || !data.data?.recipes) {
        throw new Error('Failed to fetch recipes');
      }

      const shuffledRecipes = data.data.recipes.sort(() => Math.random() - 0.5);
      setRecipes(shuffledRecipes);
      setError('');
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Something went wrong. Please try again later.');
      setRecipes([]);
    }
  }

  // Toggle favorite: update state and localStorage
  function toggleFavorite(recipe) {
    let updatedFavorites;
    const existingIndex = favorites.findIndex((fav) => fav.id === recipe.id);

    if (existingIndex === -1) {
      updatedFavorites = [
        ...favorites,
        {
          id: recipe.id,
          title: recipe.title,
          image_url: recipe.image_url,
          source_url: recipe.source_url,
          publisher: recipe.publisher,
        },
      ];
    } else {
      updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('foodifyFavorites', JSON.stringify(updatedFavorites));
  }

  async function handleViewRecipe(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
      const data = await response.json();
      // Some recipes may provide the source URL under different keys
      const sourceUrl = data?.data?.recipe?.source_url || data?.data?.recipe?.url || null;

      if (sourceUrl) {
        window.open(sourceUrl, '_blank');
      } else {
        alert('Link unavailable for this recipe.');
      }
    } catch (err) {
      console.error('Error fetching recipe details:', err);
      alert('Failed to load recipe link.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      fetchRecipes(trimmedQuery);
    }
  }

  return (
    <section>
      <form id="recipe-search-form" onSubmit={handleSubmit}>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
      <div id="recipe-results">
        {error && <p>{error}</p>}
        {!error && recipes.length === 0 && <p>No recipes found. Try a different search.</p>}
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onViewRecipe={handleViewRecipe}
          />
        ))}
      </div>
    </section>
  );
}

// The main App content with routing and lazy-loaded components
const AppContent = () => {
  const location = useLocation();

  return (
    <>
     
      {location.pathname !== "/Search" && <Navbar />}

      <Routes>
      
      <Route path="/Search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularCategories />
              <WhyFoodify />
              <Seen />
              <FoodifyPhilosophy />
              <Hero2 />
              <Preferences />
              <Trending />
              <CookingTips />
              <Blog />
              <Newsletter />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

// The main App component using Router and Suspense.
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContent />
      </Suspense>
    </Router>
  );
}

export default App;
