import React from "react";
import "./heroB.css";


const HeroB = () => {
    return (
        <section className="hero-section2">
        <video autoplay muted loop>
            <source src="./Assets/5944601-hd_1920_1080_25fps.webm" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="hero-content2">More Than Just a Recipe</div>
    </section>

    );
}
export default HeroB;