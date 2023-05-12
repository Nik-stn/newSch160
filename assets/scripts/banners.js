(function() {
    let banners = document.querySelectorAll('.banners');
    
    [].forEach.call(banners, function(carousel) {
      carouselize(carousel);
    });
    
  })();
  
  function carouselize(carousel) {
    let bannersInner = carousel.querySelector('.banners-inner');
    let bannerLogo = carousel.querySelectorAll('.banner-logo');
    let logoWidth = 0;
    let logoSteps = 0;
    let logoAmount = 0;
    let logoAmountVisible = 9;
    let btnPrev = carousel.querySelector('.banners-control.previous');
    let btnNext = carousel.querySelector('.banners-control.next');
  
    [].forEach.call(bannerLogo, function() {
      logoAmount++;
      logoWidth += 250;
      bannersInner.style.width = logoWidth+"px";
    });
  
    btnNext.onclick = function() {
      if(logoSteps < logoAmount-logoAmountVisible) {
        logoSteps++;
        moveLogo();
      }
    }
    btnPrev.onclick = function() {
      if(logoSteps > 0) {
        logoSteps--;
        moveLogo();
      }
    }
    
    function moveLogo() {
      bannersInner.style.transform = "translateX(-"+205*logoSteps+"px)";
    }
  }