import react from "react";
import "./navbar.css";

const Navbar =()=>{
    return(
        <div className="nav-bar">
        <div className="logo-container">
            <h1 className="logo">Foodify<span className="trademark">®</span></h1> 
            <p className="tagline">DELICIOUS RECIPES THAT INSPIRE<span className="trademark">™</span></p> 
        </div>
        
        <div className="heart-icon-container">
            <i className="fas fa-heart"></i> 
        </div>

       
        <div className="search-bar-container">
            <form action="./search.html" method="GET">
            <input type="text" name="query" placeholder="Search Recipes" required className="search-bar"/> 
            <button className="search-btn" type="submit">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
              </svg>
            </button>
            </form>
          </div>
    </div>
    );
}

export default Navbar;