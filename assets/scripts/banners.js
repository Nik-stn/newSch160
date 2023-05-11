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




(function() {
    var carousels = document.querySelectorAll('.js-product-carousel');
    
    [].forEach.call(carousels, function(carousel) {
      carouselize(carousel);
    });
    
  })();
  
  function carouselize(carousel) {
    var productList = carousel.querySelector('.js-product-list');
    var productListWidth = 0;
    var productListSteps = 0;
    var products = carousel.querySelectorAll('.product');
    var productAmount = 0;
    var productAmountVisible = 8;
    var carouselPrev = carousel.querySelector('.js-carousel-prev');
    var carouselNext = carousel.querySelector('.js-carousel-next');
  
    //Count all the products
    [].forEach.call(products, function(product) {
      productAmount++;
      productListWidth += 250;
      productList.style.width = productListWidth+"px";
    });
  
    carouselNext.onclick = function() {
      if(productListSteps < productAmount-productAmountVisible) {
        productListSteps++;
        moveProductList();
      }
    }
    carouselPrev.onclick = function() {
      if(productListSteps > 0) {
        productListSteps--;
        moveProductList();
      }
    }
    
    // This is a bit hacky, let me know if you find a better way to do this!
    // Move the carousels product-list
    function moveProductList() {
      productList.style.transform = "translateX(-"+205*productListSteps+"px)";
    }
  }