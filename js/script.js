const mySwiper = new Swiper(
   '.swiper-container', {
   direction: 'horizontal',
   initialSlide: 0,
   grabCursor: true,
   pagination: {
      el: '.swiper-pagination',
   }
});

const burgerMenu = document.querySelector('.top__burger');
if (burgerMenu) {
   burgerMenu.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      burgerMenu.classList.toggle('active');
   });
}
