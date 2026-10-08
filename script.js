const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");

let selectedRating = 0;
let hoverRating = 0;

// Add events to every star
stars.forEach((star) => {

    // Hover effect
    star.addEventListener("mouseenter", () => {
        hoverRating = Number(star.dataset.value);

        updateStars(hoverRating);
    });

    // Click to select rating
    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);

        ratingText.textContent = `You rated us ${selectedRating} out of 5 ⭐`;

        updateStars(selectedRating);
    });
});

// Remove hover effect when mouse leaves stars
document.getElementById("stars").addEventListener("mouseleave", () => {
    hoverRating = 0;

    updateStars(selectedRating);
});

// Update star appearance
function updateStars(rating) {
    stars.forEach((star) => {
        const value = Number(star.dataset.value);

        if (value <= rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    });
}