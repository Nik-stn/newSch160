document.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('.scrooll-to-top');
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    
    if (scrollPosition > 100 && windowWidth > 768) {
      scrollUp.style.display = 'block';
    } else {
      scrollUp.style.display = 'none';
    }
  });
  
  document.querySelector('.scrooll-to-top').addEventListener('click', () => {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  