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

// Создаем кнопку "X"
const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.classList.add("modal-close");
  btn.innerHTML = `<span></span><span></span>`;

// Modal img
const galleryList = document.querySelector(".gallery-list");
galleryList.addEventListener("click", (e) => {
  const clickedImage = e.target.closest("img");
  if (clickedImage) {
    const src = clickedImage.getAttribute("data");
    const sliderIndex = clickedImage.getAttribute("number");
    const sliderAlt = clickedImage.getAttribute("alt");
    imgModal(src, sliderIndex, sliderAlt);
  }
});

let imgModal = (src, sliderIndex, sliderAlt) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  
  const numberSlide = document.createElement("div");
  numberSlide.classList.add("modal-number");

  const modalInner = document.createElement("div");
  modalInner.classList.add("modal-inner");

  const allImages = galleryList.querySelectorAll("img");
  allImages.forEach((img) => {
    if (img.getAttribute('number') !== sliderIndex) {
      const newImage = document.createElement("img");
      newImage.setAttribute("src", img.getAttribute("data"));
      const divImage = document.createElement("div");
      divImage.classList.add("modal-item");
      const imgAlt = img.getAttribute("alt")
      const pAlt = document.createElement("p");
      pAlt.textContent = imgAlt;
      divImage.append(newImage);
      divImage.append(pAlt);
      modalInner.append(divImage);
    } else {
      const clickedImage = document.createElement("img");
      clickedImage.setAttribute("src", src);
      const divImage = document.createElement("div");
      const pAlt = document.createElement("p");
      pAlt.textContent = sliderAlt;
      divImage.classList.add("modal-item", "visible");
      divImage.append(clickedImage);
      divImage.append(pAlt);
      modalInner.append(divImage);
    }
  });

  

  modal.append(btn);
  modal.append(previousButton);
  modal.append(nextButton);
  modal.append(numberSlide);
  modal.append(modalInner);
  document.querySelector("body").append(modal);

  const closeModal = () => {
    modal.classList.add("modalRemove");
    setTimeout(() => {
      modal.remove();
    }, 200);
  };

  btn.onclick = closeModal;

  //slider
  showSlides(sliderIndex);
  
  nextButton.addEventListener("click", () => {
    showSlides((sliderIndex += 1));
  });
  
  previousButton.addEventListener("click", () => {
    showSlides((sliderIndex -= 1));
  });
  
  function showSlides(n) {
    n = +n;
    sliderIndex = +sliderIndex;
    let slides = document.getElementsByClassName("modal-item");
  
    if (n > slides.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = slides.length;
    }
  
    for (let slide of slides) {
      slide.style.display = "none";
      slide.classList.remove('visible')
    }
    slides[sliderIndex - 1].style.display = "block";
    slides[sliderIndex - 1].classList.add('visible');
    numberSlide.innerHTML = sliderIndex + '/' + slides.length;
  }
};
