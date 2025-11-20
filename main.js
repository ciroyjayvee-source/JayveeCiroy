// Select all gallery images
const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

// When image is clicked
images.forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popup.classList.add("active");
    });
});

// Close popup when clicking the background
popup.addEventListener("click", () => {
    popup.classList.remove("active");
});




window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".about-section h1").classList.add("fade-up");
    document.querySelector(".about-section p").classList.add("fade-up");
});
