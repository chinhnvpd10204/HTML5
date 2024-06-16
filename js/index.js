document.addEventListener("DOMContentLoaded", function() {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const carousel = document.querySelector('.custom-carousel');

    let scrollAmount = 0;
    const cardWidth = document.querySelector('.custom-card').offsetWidth + 16; // width + margin

    rightArrow.addEventListener('click', function() {
      scrollAmount += cardWidth;
      if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = carousel.scrollWidth - carousel.clientWidth;
      }
      carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    leftArrow.addEventListener('click', function() {
      scrollAmount -= cardWidth;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });