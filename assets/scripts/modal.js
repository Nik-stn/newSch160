// Создаем кнопку "Previous"
const previousButton = document.createElement("button");
previousButton.classList.add("modal-control", "previous");
previousButton.innerHTML = `
  <svg class="modal-icon" viewBox="0 96 960 960">
    <path stroke="#fdbe34" stroke-width="10" stroke-linecap="round" fill="#fdbe34" d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"></path>
  </svg>
`;

// Создаем кнопку "Next"
const nextButton = document.createElement("button");
nextButton.classList.add("modal-control", "next");
nextButton.innerHTML = `
  <svg class="modal-icon" viewBox="0 96 960 960">
    <path stroke="#fdbe34" stroke-width="10" stroke-linecap="round" fill="#fdbe34" d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"></path>
  </svg>
`;

// Modal img
const galleryList = document.querySelector(".gallery-list");
galleryList.addEventListener("click", (e) => {
  const clickedImage = e.target.closest("img");
  if (clickedImage) {
    const src = clickedImage.getAttribute("data");
    imgModal(src);
  }
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalInner = document.createElement("div");
  modalInner.classList.add("modal-inner");

  const clickedImage = document.createElement("img");
  clickedImage.setAttribute("src", src);
  clickedImage.classList.add("visible-img");

  const divImage = document.createElement("div");
  divImage.classList.add("modal-item", "visible");
  divImage.append(clickedImage);
  modalInner.append(divImage);

  const allImages = galleryList.querySelectorAll("img");
  allImages.forEach((img) => {
    if (img !== clickedImage) {
      const newImage = document.createElement("img");
      newImage.setAttribute("src", img.getAttribute("data"));
      const divImage = document.createElement("div");
      divImage.classList.add("modal-item");
      divImage.append(newImage);
      modalInner.append(divImage);
    }
  });

  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.classList.add("modal-close");
  btn.innerHTML = `<span></span><span></span>`;

  modalInner.append(btn);
  modalInner.append(previousButton);
  modalInner.append(nextButton);
  modal.append(modalInner);
  document.querySelector("body").append(modal);

  const closeModal = () => {
    modal.classList.add("modalRemove");
    setTimeout(() => {
      modal.remove();
    }, 200);
  };

  clickedImage.onclick = closeModal;
  btn.onclick = closeModal;
};

// //slider
// let sliderIndex = 1;
// showSlides(sliderIndex);

// nextButton.addEventListener("click", () => {
//   showSlides((sliderIndex += 1));
// });

// previousButton.addEventListener("click", () => {
//   showSlides((sliderIndex -= 1));
// });

// function currentSlide(n) {
//   showSlides((sliderIndex = n));
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("modal-item");
//   console.log(slides);

//   if (n > slides.length) {
//     sliderIndex = 1;
//   }
//   if (n < 1) {
//     sliderIndex = slides.length;
//   }

//   for (let slide of slides) {
//     slide.style.display = "none";
//   }
//   slides[sliderIndex - 1].style.display = "block";
// }