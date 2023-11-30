const slider = document.getElementById('block_slider')
const slides = document.querySelectorAll('.slider_item')
let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  currentSlide = index;
  const translation = -index * 440 + 'px'; // Adjusted the translation value based on the width of each slide
  slider.style.transform = 'translateX(' + translation + ')';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);