const mySwiper = new Swiper(
   '.swiper-container', {
   direction: 'horizontal',
   initialSlide: 0,
   grabCursor: true,
   pagination: {
      el: '.swiper-pagination',
   }
});


//       document.body.classList.toggle('lock');

const burgerMenu = document.querySelector('.top__burger');
const checkbox = document.querySelector('.burger__checkbox');
checkbox.addEventListener('click', function () {
   if (checkbox.checked == true) {
      burgerMenu.classList.add('active');
      document.body.classList.add('lock');
   }
   else {
      burgerMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
});
