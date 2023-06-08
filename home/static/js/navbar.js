const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageWidth = document.querySelector('.slider img').offsetWidth;
const imageMargin = parseInt(window.getComputedStyle(document.querySelector('.slider img')).marginRight);

let slideIndex = 0;

nextButton.addEventListener('click', () => {
  slideIndex++;
  slideCarousel();
});

prevButton.addEventListener('click', () => {
  slideIndex--;
  slideCarousel();
});

function slideCarousel() {
  const slideOffset = (imageWidth + imageMargin) * slideIndex;
  slider.style.transform = `translateX(-${slideOffset}px)`;
}