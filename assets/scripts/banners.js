(function () {
  let banners = document.querySelectorAll('.banners');

  [].forEach.call(banners, function (carousel) {
    carouselize(carousel);
  });

  window.addEventListener('resize', function () {
    [].forEach.call(banners, function (carousel) {
      carouselize(carousel);
    });
  });

})();

function carouselize(carousel) {
  let bannersInner = carousel.querySelector('.banners-inner');
  let bannerLogos = carousel.querySelectorAll('.banner-logo');
  let bannerLogo = carousel.querySelector('.banner-logo');
  let logoAmount = bannerLogos.length;
  let logoWidth = 0;
  let logoAmountVisible = 0;
  let clientWidth = document.documentElement.clientWidth;

  [].forEach.call(bannerLogos, function (bannerLogo) {
    logoWidth += bannerLogo.offsetWidth;
  });

  logoAmountVisible = Math.floor(clientWidth / (logoWidth / bannerLogos.length));
  
  bannersInner.style.width = (logoWidth + (logoAmountVisible * 20)) + 'px';

  let logoSteps = 0;
  let btnPrev = carousel.querySelector('.banners-control.previous');
  let btnNext = carousel.querySelector('.banners-control.next');

  btnNext.onclick = function () {
    if (logoSteps < (bannerLogos.length - logoAmountVisible)) {
      logoSteps++;
      moveLogo();
    }
  }

  btnPrev.onclick = function () {
    if (logoSteps > 0) {
      logoSteps--;
      moveLogo();
    }
  }

  function moveLogo() {
    let maxSteps = logoAmount - logoAmountVisible;
    if (logoSteps < 0) {
      logoSteps = 0;
    } else if (logoSteps > maxSteps) {
      logoSteps = maxSteps;
    }
    bannersInner.style.transform = "translateX(-" + (bannerLogo.offsetWidth * logoSteps) + "px)";
  }

}
