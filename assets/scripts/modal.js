// Modal img
const images = document.querySelectorAll(".gallery-list img");
let imgSrc;
images.forEach((img) => {
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
    document.querySelector(".main").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const btn = document.createElement('button');
    btn.setAttribute("type", "button");
    modalInner.append(newImage, btn);
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
    newImage.onclick = closeModal;
    btn.onclick = closeModal;
  };