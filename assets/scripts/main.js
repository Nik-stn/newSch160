window.addEventListener('scroll', () => {
  const scrollUp = document.querySelector('.scrooll-to-top');
  const scrollPosition = window.scrollY;
  const windowWidth = window.innerWidth;
  const headerFixed = document.querySelector('.header-nav');

  if (scrollPosition > 100 && windowWidth > 768) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }

  if (scrollPosition >= 200) {
    headerFixed.classList.add('fixed');
  } else {
    headerFixed.classList.remove('fixed');
  }
});

document.querySelector('.scrooll-to-top').addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
