import React, { useContext } from 'react';
import './Search.css'; // Import the CSS file for styling
import { SearchContext } from '../../../SearchContext';

const Search = () => {
  const {
    query,
    setQuery,
    meals,
    selectedMeal,
    reviews,
    newReview,
    handleSearch,
    fetchMealDetails,
    handleReviewSubmit,
    setSelectedMeal,
    setNewReview,
  } = useContext(SearchContext);

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
      {/* Render meals and selected meal details */}
    </div>
  );
};

export default Search;
