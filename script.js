const sliderContainer = document.querySelector('.slider-container');
const slideButton = document.querySelector('.slide-btn');
let slideIndex = 0;

// Function to slide images
function slideImages() {
  // Calculate the offset for sliding (3 images width: 900px)
  slideIndex = (slideIndex + 1) % 2; // Toggle between 0 and 1 (two slides)
  const offset = slideIndex * -sliderContainer.clientWidth; // Calculate the translateX value
  sliderContainer.style.overflow="visible";
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

// Auto-slide every 5 seconds
let slideInterval = setInterval(slideImages, 5000);

// Button click event to trigger the slide
slideButton.addEventListener('click', () => {
  clearInterval(slideInterval); // Stop the automatic sliding temporarily
  slideImages(); // Slide to the next set of images
  slideInterval = setInterval(slideImages, 5000); // Restart the auto-slide
});