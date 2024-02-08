const bannerLogos = document.querySelectorAll('.banner-logo');
const logoAmount = bannerLogos.length;

setTimeout((function () {
  const banners = document.querySelectorAll('.banners');

  [].forEach.call(banners, function (carousel) {
    carouselize(carousel);
  });

  window.addEventListener('resize', function () {
    [].forEach.call(banners, function (carousel) {
      carouselize(carousel);
    });
  });

}),154 * logoAmount);

function carouselize(carousel) {
  const bannersInner = carousel.querySelector('.banners-inner');
  const bannerLogos = carousel.querySelectorAll('.banner-logo');
  const bannerLogo = carousel.querySelector('.banner-logo');
  const logoAmount = bannerLogos.length;
  let logoWidth = 0;
  let logoAmountVisible = 0;
  let clientWidth = document.documentElement.clientWidth;

  [].forEach.call(bannerLogos, function (bannerLogo) {
    logoWidth += bannerLogo.offsetWidth;
  });

  logoAmountVisible = Math.floor(clientWidth / (logoWidth / logoAmount));
  
  bannersInner.style.width = (logoWidth + (logoAmount * 40)) + 'px';  

  let logoSteps = 0;
  const btnPrev = carousel.querySelector('.banners-control.previous');
  const btnNext = carousel.querySelector('.banners-control.next');

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

