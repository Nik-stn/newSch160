//slider
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const autoSlider = document.querySelector(".slider");

let slideIndex = 1;
showSlides(slideIndex);

next.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

previous.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider-item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//auto-slider
let autoIndex = 0;
autoSlides();

function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoIndex++;
  if (autoIndex > slides.length) {
    autoIndex = 1;
  }
  slides[autoIndex - 1].style.display = "block";
  setTimeout(autoSlides, 5000);
}
