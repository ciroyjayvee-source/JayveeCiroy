// Quotes rotation
const quoteElement = document.getElementById("quoteText");

if (quoteElement) {
    const quotes = [
        "Believe you can and you're halfway there.",
        "Do something today that your future self will thank you for.",
        "Success is not final; failure is not fatal.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Dream big. Work hard. Stay focused."
    ];

    let quoteIndex = 0;

    function showQuote() {
        quoteElement.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    showQuote();
    setInterval(showQuote, 3000);
}

// Gallery popup
document.addEventListener("DOMContentLoaded", function() {
    const viewer = document.getElementById("imgViewer");
    const viewerImg = document.getElementById("viewerImg");
    const closeBtn = document.getElementById("closeBtn");

    document.querySelectorAll(".gallery-container img").forEach(img => {
        img.addEventListener("click", () => {
            viewer.style.display = "flex";
            viewerImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        viewer.style.display = "none";
    });

    viewer.addEventListener("click", (e) => {
        if (e.target !== viewerImg) {
            viewer.style.display = "none";
        }
    });
});


// Project popup
document.addEventListener("DOMContentLoaded", function() {
    const pViewer = document.getElementById("projectViewer");
    const pImg = document.getElementById("projectImg");
    const pClose = document.getElementById("projectClose");

    if (pViewer && pImg && pClose) {
        document.querySelectorAll(".project-item img").forEach(img => {
            img.addEventListener("click", () => {
                pViewer.style.display = "flex";
                pImg.src = img.src;
            });
        });

        pClose.addEventListener("click", () => {
            pViewer.style.display = "none";
        });

        pViewer.addEventListener("click", (e) => {
            if (e.target !== pImg) {
                pViewer.style.display = "none";
            }
        });
    }
});
