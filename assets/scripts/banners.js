const nextBan = document.querySelector(".banners-control.next");
const previousBan = document.querySelector(".banners-control.previous");
let list = document.querySelector('.banners-inner');
let listElems = document.querySelectorAll('.banners-item');

/* конфигурация */
let width = 200; // ширина картинки
let count = 9; // видимое количество изображений


let position = 0; // положение ленты прокрутки

previousBan.onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

nextBan.onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};