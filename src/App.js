import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import  Preferences from "./my-react-app/src/components/preferences/Preferences";
import Trending from "./my-react-app/src/components/Trending/Trending";
import Blog from "./my-react-app/src/components/blog/Blog";
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


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContent />
      </Suspense>
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/Search" && <Navbar />} */}

      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar/>
              <Hero />
              <PopularCategories />
              <WhyFoodify />
              <Seen />
              <FoodifyPhilosophy />
              <Hero2 />
              < Preferences />
              < Trending />
              <CookingTips />
              <Blog />
              <Newsletter />
            </>
          }
        />
        {/* <Route path="/Search" element={<Search />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
