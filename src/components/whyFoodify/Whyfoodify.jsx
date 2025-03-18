import React from "react";
import "./whyfoodify.css"

const WhyFoodify = () => {
    return (
        <div>
             <section className="why-foodify">
        <h2>Why Choose Foodify?</h2>
        <div className="benefits-container">
            <div className="benefit">
                <i className="fas fa-utensils"></i>
                <h3>Endless Recipes</h3>
                <p>Discover thousands of delicious recipes from all cuisines.</p>
            </div>
            <div className="benefit">
                <i className="fas fa-book-open"></i>
                <h3>Step-by-Step Guidance</h3>
                <p>Easy-to-follow instructions for all skill levels.</p>
            </div>
            <div className="benefit">
                <i className="fas fa-star"></i>
                <h3>Personalized Suggestions</h3>
                <p>Get tailored recommendations based on your taste.</p>
            </div>
            <div className="benefit">
                <i className="fas fa-users"></i>
                <h3>Community-Powered</h3>
                <p>Share and save recipes with food lovers worldwide.</p>
            </div>
        </div>
    </section>


{/*     <!--this is for the as see in section--> */}
    <section className="as-seen-in">
        <h2>As Seen In</h2>
        <div className="carousel">
            <div className="carousel-track">
                <img src="./Assets/Orange and Black Professional BBQ Food Restaurant Logo.png"alt="Taste Daily"/>
                <img src="./Assets/Illustrated Fun Logo Featuring a Red Hot Chili Cartoon.png" alt="Food Magazine"/>
                <img src="./Assets/Yellow, White and Black Spicy Food Logo.png" alt="Gourmet Times"/>
                <img src="./Assets/Orange Black Illustration Abstract Resto and Food Logo .png" alt="Healthy Eats"/>
                <img src="./Assets/Black and White Chef Food Logo.png" alt="Recipe World"/>
                <img src="./Assets/Orange and Black Professional BBQ Food Restaurant Logo.png" alt="Taste Daily"/>
                <img src="./Assets/Illustrated Fun Logo Featuring a Red Hot Chili Cartoon.png" alt="Food Magazine"/>
                <img src="./Assets/Yellow, White and Black Spicy Food Logo.png" alt="Gourmet Times"/>
                <img src="./Assets/Orange Black Illustration Abstract Resto and Food Logo .png" alt="Healthy Eats"/>
                <img src="./Assets/Black and White Chef Food Logo.png" alt="Recipe World"/>
                <img src="./Assets/Orange and Black Professional BBQ Food Restaurant Logo.png" alt="Taste Daily"/>
                <img src="./Assets/Illustrated Fun Logo Featuring a Red Hot Chili Cartoon.png" alt="Food Magazine"/>
                <img src="./Assets/Yellow, White and Black Spicy Food Logo.png" alt="Gourmet Times"/>
                <img src="./Assets/Orange Black Illustration Abstract Resto and Food Logo .png" alt="Healthy Eats"/>
                <img src="./Assets/Black and White Chef Food Logo.png" alt="Recipe World"/>
            </div>
        </div>
    </section>


    <section className="foodify-philosophy">
        <h2>Delicious Recipes That Inspire™</h2>
        <p className="highlight-text">Easy-to-Make. Inspired by Cultures. Loved by All.</p>
        <p className="philosophy-text">We believe that cooking should be fun, accessible, and inspiring. <br /> 
        Great food isn't just for chefs—it's for everyone.</p>
    </section>
    
        </div>
    );
}
export default WhyFoodify;