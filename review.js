const reviews = [
  "Their marketing strategy helped us increase our website traffic by 300% in just three months. The team is creative, responsive, and truly invested.",

  "Outstanding experience! Our conversions doubled after implementing their campaign strategies. Highly professional team.",

  "They completely transformed our digital presence. Clear communication, measurable growth, and amazing support.",

  "One of the best agencies we’ve worked with. Strategic & Logical thinking, fast execution, and real results."
];

let currentIndex = 0;
const reviewText = document.getElementById("reviewText");

let autoSlide; // timer reference

function updateReview() {
  reviewText.style.opacity = 0;

  setTimeout(() => {
    reviewText.textContent = `“${reviews[currentIndex]}”`;
    reviewText.style.opacity = 1;
  }, 200);
}

function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReview();
  resetAutoSlide();
}

function prevReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReview();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview();
  }, 4000); // ⏱ 4 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Button events
document.getElementById("nextBtn").addEventListener("click", nextReview);
document.getElementById("prevBtn").addEventListener("click", prevReview);

// Initial load
updateReview();
startAutoSlide();
