// Modal img
const allImages = document.querySelectorAll(".gallery-list img");
let imgSrc;
allImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.getAttribute('data');
    imgModal(imgSrc);
  });
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  
  const modalInner = document.createElement("div");
  modalInner.setAttribute("class", "modal-inner");
  
  document.querySelector("body").append(modal);
  const clickedImage = document.createElement("img");
  clickedImage.setAttribute("src", src);
  clickedImage.classList.add('visible-img');
  const newImage = [];
  const divImage = [];

  for (let i = 0; i < allImages.length; i++) {
    divImage[i] = document.createElement("div");
    divImage[i].classList.add('modal-item')
    newImage[i] = document.createElement("img");
    imgSrc = allImages[i].getAttribute('data');
    newImage[i].setAttribute("src", imgSrc);

    if (src === imgSrc) {
      divImage[i].classList.add('visible')
      divImage[i].append(clickedImage);
      modalInner.append(divImage[i]);
    } else {
      divImage[i].append(newImage[i]);
      modalInner.append(divImage[i]);
    }
    
  }

  const btn = document.createElement('button');
  btn.setAttribute("type", "button");
  modalInner.append(btn);
  modal.append(modalInner);

  for (let i = 0; i < 2; i++) {
    btn.append(document.createElement('span'))
  }

  const closeModal = () => {
    modal.classList.add('modalRemove');
    setTimeout(() => {
      modal.remove();
    }, 200);
  };
  clickedImage.onclick = closeModal;
  btn.onclick = closeModal;
};