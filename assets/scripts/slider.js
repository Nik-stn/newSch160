//slider
const next = document.querySelector(".slider-control.next");
const previous = document.querySelector(".slider-control.previous");

let slideIndex = 1;
showSlides(slideIndex);

next.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

previous.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});

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
autoSlides();

function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlides, 5000);
}
