import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Manage input state
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/Search?query=${encodeURIComponent(searchTerm)}`); // 🚀 Navigate
    }
  };

  return (
    <div className="nav-bar flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo-container">
        <h1 className="logo text-2xl font-bold text-red-500">
          Foodify<span className="trademark">®</span>
        </h1>
        <p className="tagline text-sm text-gray-600">
          DELICIOUS RECIPES THAT INSPIRE<span className="trademark">™</span>
        </p>
      </div>
<Link className="link" to={"/favorites"}> <div className="heart-icon-container text-red-500 text-xl">
        <i className="fas fa-heart"></i>
      </div> </Link>
     

      {/* 🔍 Search Bar */}
      <div className="search-bar-container">
        <form onSubmit={handleSearch} className="flex border rounded overflow-hidden">
          <input
            type="text"
            className="search-bar px-4 py-2 outline-none w-64"
            placeholder="Search Recipes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // ✅ Update state
            required
          />
          <button className="search-btn bg-red-500 px-4 text-white" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
