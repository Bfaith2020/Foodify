import React, { useEffect } from "react";

function Script() {
  useEffect(() => {
    // Button click handler
    const exploreBtn = document.getElementById("btn-explore");
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        window.location.href = "search.html?query=all";
      });
    }

    // Carousel initialization
    const carouselTrack = document.querySelector(".carousel-track");
    if (carouselTrack) {
      const images = carouselTrack.innerHTML;
      carouselTrack.innerHTML += images;
      const imageCount = carouselTrack.querySelectorAll("img").length;
      const imageWidth = 120;
      const imageMargin = 30;
      carouselTrack.style.width = `${(imageWidth + imageMargin) * imageCount}px`;
    }

    // Newsletter form submission
    const form = document.getElementById('newsletterForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('confirmationMessage');
        
        if (!validateEmail(email)) {
          alert("Please enter a valid email address");
          return;
        }
        
        message.style.display = 'block';
        document.getElementById('emailInput').value = '';
      });
    }
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      {/* Confirmation message element */}
      <div id="confirmationMessage" style={{ display: 'none' }}>
        <p>🎉 Thank you for signing up!</p>
      </div>
    </>
  );
}

export default Script;